---
layout: post
title: "Unlocked: OpenStack + ScaleIO"
slug: unlocked-openstack-plus-scaleio
author: Randy Bias
date: 2016-07-12 16:33:37

---

For the past few months an elite team of Cloudscalers (EMCers) have been working diligently on making [ScaleIO](https://www.emc.com/storage/scaleio/index.htm) great in OpenStack-land.  ScaleIO "supported" OpenStack, but it might take a fair bit of time and energy to get it setup.  No longer.  As of last Friday, both Mirantis OpenStack and Canonical OpenStack work with ScaleIO at the push of a button.  The free and frictionless[1]  version of ScaleIO can be automatically installed for these OpenStack distributions and at any time you can upgrade your free & frictionless installation to a fully supported commercial version of ScaleIO.

This work was done by coordinating carefully with our partners, writing a bunch of plugin and recipe code, feedback from customers, and testing, testing, testing.

There are several key areas of work:

1. Creation and testing of general purpose Puppet-based recipes for installing ScaleIO, configuring ScaleIO, configuring OpenStack, and patching OpenStack (if/when required)
2. Canonical integration by building Juju Charms based on the Puppet recipes above
3. Mirantis integration by creating Fuel plugins for ScaleIO, which also leverage Puppet recipes as required

## ScaleIO Puppet Recipes

At the heart of much of the work is a set of Puppet recipes to configure and install ScaleIO and OpenStack.  There are two sets of work: *[puppet-scaleio](https://github.com/emccode/puppet-scaleio)* for ScaleIO and *[puppet-scaleio-openstack](https://github.com/emccode/puppet-scaleio-openstack)* for the configuration of OpenStack for managing ScaleIO.

### Supported Configurations

These two sets of recipes together support:

* Downloading and installation of all free & frictionless ScaleIO components
* Creation and configuration of multiple protection domains, storage pools, and fault sets
* Deploying and operating ScaleIO in a hyperconverged or "2-layer" configuration[2] 
* Ubuntu 14.04 LTS[3] 

### puppet-scaleio

This Puppet recipe configures and manages ScaleIO.

It affects all of the following:

* Installs firewall (iptables) settings based on ScaleIO components installed
* Installs dependency packages such as numactl and libaio1
* Installs oracle-java8 for gateway

And was tested with all of the following:

* Puppet 3.*
* ScaleIO 2.0
* Ubuntu 14.04 LTS
* Linux kernel 4.2.0-30-generic and 3.13.0-*-generic

### puppet-scaleio-openstack

This Puppet recipe configures and manages OpenStack to work with ScaleIO.

If affects all of the following:

* Adds rootwrap filters
* Modifies nova.conf
* Patches nova python files
* Modifies cinder.conf
* Adds cinder_scaleio.config for Juno and Kilo versions
* Patches cinder python files

And was tested with all of the following:

* Puppet 3.*
* ScaleIO 2.0
* Ubuntu 14.04 LTS
* Linux kernel 4.2.0-30-generic and 3.13.0-83-generic
* OpenStack Juno, Kilo, Liberty

## Canonical OpenStack and ScaleIO

Juju is a state of the art, open source service modelling tool used with Ubuntu Server and Canonical OpenStack to manage your datacenter. Juju allows you to model, configure, manage, maintain, deploy and scale cloud services quickly and efficiently. It makes Canonical OpenStack easy for customers to deploy and automates many manual steps.

Canonical OpenStack depends on Juju "charms" as it’s primary atomic component for automated deployments.  The ScaleIO Juju charms rely on the Puppet recipes above to do most of their work and use the charm framework for integration with Juju and hence Canonical OpenStack.

The following configuration is tested and supported:

* Canonical OpenStack Liberty with ScaleIO 2.0 running on Ubuntu 14.04 LTS

## Mirantis OpenStack and ScaleIO

Mirantis OpenStack depends on Fuel, an open-source deployment and lifecycle management engine. It makes Mirantis OpenStack easy for customers to deploy in optimal configurations on a wide range of generic x86 servers and network hardware. It automates manual steps that might otherwise require great familiarity with OpenStack and hours or days of engineering time; as well as has a simple UI and can auto-discover servers and storage components.

Fuel operates with a pluggable driver module.  These are all new open source ScaleIO plugins for Fuel that support the fully automated deployment of ScaleIO with Mirantis OpenStack.  All configuration is done via Fuel’s GUI.

The following configurations have been tested and validated by both Cloudscalers and Mirantis team:

* Mirantis OpenStack versions 6.1, 7.0 and 8.0 with ScaleIO 2.0 running on Ubuntu 14.04 LTS

## Minor Differences Between Distributions

There are minor differences in support of the various distributions based on constraints of those systems themselves.  Meaning that while we support a fairly robust set of options for configuration with the Puppet recipes, not all options may be available in Canonical or Mirantis.  We will work to close this gap over time.

The following table summarizes differences.

| **Feature** | **FUEL** | **JUJU** | **Notes** |
| --- | :---: | :---: | --- |
| CentOS/RHEL | - | - |  |
| Ubuntu | + | + | Tested on Ubuntu 14.04 LTS |
| ScaleIO 1.32 | - | - |  |
| ScaleIO 2.0.0 | + | + |  |
| Install ScaleIO without OpenStack | - | + |  |
| Hyperconverged environment | + | + |  |
| 2-Layer environment (Separate nodes for each ScaleIO service) | - | + | In FUEL: SDS is installed on each compute node and optionally on controller nodes Gateway and MDM services are installed on controller nodes SDC is installed on all compute nodes and on all nodes with Cinder role Xcache is optionally installed on all nodes with SDS<br>In JUJU: Admin is free to chose any configuration |
| Utilize existing ScaleIO cluster | + | - | Configure OpenStack to use ScaleIO cluster that deployed by some other tool.  |
| High availability for Gateway | + | + | With HAProxy |
| 1_node, 3_node, 5_node cluster configuration | + | + |  |
| Multiple Protection domains support | + | + | In ScaleIO configuration of Protection domains is fully available. In FUEL protection domains are created automatically if number of SDS-es in protection domain exceeds a limit from configuration. The same storage pools are created in new protection domain with the same settings. |
| Multiple Storage Pools support | + | + |  |
| Fault sets support | - | + |  |
| SSD caching support (Xcache) | + | + | It is possible to choose storage pools that should be cached. |
| Cluster reconfiguration support | + | + | It is possible to add/remove nodes from cluster (both Compute and Controller nodes). |
| Checksum protection tuning | + | + |  |
| Spare policy tuning | + | + |  |
| Zero Padding for Storage Pools tuning | + | + |  |
| Background device scanner tuning | + | + |  |
| RAM cache tuning | - | + | In FUEL: it is by ScaleIO default. It is planned for update. |
| High priority alert capacity tuning | + | + |  |
| Critical priority alert capacity tuning | + | + |  |
| Separate networks for data and management | + | + |  |
| High performance profile | + | + |  |
| Low-Latency IO-Scheduler for SSD disks | + | + |  |
| OpenStack Juno | + | + | MOS6.1 for FUEL |
| OpenStack Kilo | + | + | MOS7.0 for FUEL |
| Openstack Liberty | + | + | MOS8.0 for FUEL |
| OpenStack Mitaka | - | - | Planned for update.
MOS9.0 for FUEL. |
| ScaleIO backend for persistent and ephemeral volumes | + | + |  |
| Thin/Thick volume provisioning type | + | + | thin/thick for both persistent and ephemeral volumes<br>Default values are in cinder/nova configs<br> Could be fine tuned per volume type / flavor |
| Persistent Volume QoS | + | + | Limits by:<br>Bandwidth<br>IOPS<br>Dynamic* by formula ‘SizeOfDisk * ValuePerGB’ where ValuePerGB’ is set by user. Dynamic value could be limited by IOPS and bandwidth options.<br><br>*This is for Cinder only |
| Volumes size granularity is 8GB | + | + | For persistent volumes volume sizes are rounded by 8GB automatically, it could be forbidden via config file. |
| Live instance migration | + | + |  |

## Making ScaleIO Great in OpenStack (Again?)

This is the beginning of driving greater ScaleIO adoption in OpenStack land.  As a reminder, ScaleIO is a much easier to operate and scale version of Ceph RBD.  It is usually in the range of [7-10x faster](http://cloudscaling.com/blog/cloud-computing/killing-the-storage-unicorn-purpose-built-scaleio-spanks-multi-purpose-ceph-on-performance/) (sometimes **much** faster than this, depending on configuration or workload).  EMC is finding that our some of our best ScaleIO customers are those who have been ground up on the shoals of the [Ceph cloud-wrecking reef](https://www.emc.com/collateral/white-papers/h14872-the-case-for-tiered-storage-in-the-enterprise.pdf).  Hopefully this program makes it easier for adopters of OpenStack to [perform their own bake off between ScaleIO and Ceph](https://www.emc.com/video-collateral/demos/microsites/mediaplayer-video/battle-of-the-titans-tokyo-2015.htm) and helps make a better decision sooner in your OpenStack journey.

Meanwhile, we’re working on better integration to Red Hat OpenStack, updates for Mirantis OS 9.0, support for Nova ephemeral volumes[4] , and have a slew of improvements and ongoing work to make ScaleIO even better with the OpenStack distribution of your choice.

[1]  Free & frictionless refers to our program to allow EMC software such as ScaleIO and Elastic Cloud Storage (ECS) to be downloaded at no charge and installed and used with no restrictions except for a lack of support  
[2]  Hyper-converged configurations mean that the storage and compute run together on the same server(s) where a 2-layer configuration refers to a more traditional SAN architecture where storage runs on dedicated nodes and is connected to the compute that consumes it via a network  
[3]  Other flavors of Ubuntu and other Linux distributions will be tested in the near future  
[4]  That means support for KVM live migration just as we have in the VxRack Neutrino system  
