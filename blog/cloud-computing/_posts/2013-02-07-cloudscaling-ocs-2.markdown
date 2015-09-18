---
author: Cloudscaling Staff
comments: true
date: 2013-02-07 15:00:56+00:00
layout: post
slug: cloudscaling-ocs-2
title: Cloudscaling OCS 2.0 – with Block Storage and Folsom Support – Now Shipping
wordpress_id: 5600
old_categories:
- Cloud Computing
tags:
- Block Storage
- Folsom
- OCS
- Open Cloud System
- OpenStack
---

This past week was an exciting one for the Cloudscaling team.  While we already have customers deployed on our Essex-based OCS 1.x releases, we began our first Folsom-based OCS 2.0 customer deployments last month.  As a refresher, [Cloudscaling announced OCS 2.0](http://www.cloudscaling.com/blog/press-releases/ocs2/) at the OpenStack Design Summit in San Diego and there were two big pillars for that release:

  * Introduction of OCS Block Storage
  * Transition of OCS from Essex to Folsom code base

Let’s chat about these two major updates.

**OCS Block Storage**  
This commercially licensed product is an optional add-on to OCS.  It is our scale-out network attached disk solution that provides persistent and expandable block level storage volumes served up by independent loosely-coupled block storage nodes.  If you are familiar with Amazon Web Service (AWS), OCS Block Storage provides the same benefits as AWS Elastic Block Storage (EBS).  It can be thought of as a virtualized Just a Bunch Of Disks (JBOD) service.  Most current demand we are seeing for block storage are customers that have a need for:

  * Compatibility & SLA affinity with AWS Elastic Block Storage
  * Built-in fault tolerance and ability to do in-service, rolling upgrades of all components
  * SSD performance at spinning disk prices
  * Resistance to multi-tenancy I/O “pressure” w/o resorting to EBS-like provisioned IOPS
  * Data persistency – such as for databases
    * OCS Block Storage volumes persist even after the instance they are attached to is terminated
  * Large datasets – such as for databases and big data projects
    * OCS Block Storage allows large volumes (up to 1 TB each) to be created and many of these large volumes can be mounted on a single instance

![ocs 20 blog post img 1](http://www.cloudscaling.com/wp-content/uploads/2013/02/ocs-20-blog-post-img-1-e1360181044685.png)

Consuming OCS Block Storage is trivial – user volumes are ordered via the OpenStack APIs (EC2, Nova, or GCE), can be attached to a running instance, and appear as block devices like any hard drive.  With OCS Block Storage complementing our built-in ephemeral storage, an instance can be booted, volumes attached, data processed, instance terminated, and the data would remain to be used again later.

We developed a storage scheduler for OCS Block Storage that maximizes volume dispersion on a per-tenant basis to reduce the impact of infrastructure failures on volume availability. This is a classic “scale-out” or “sharding” approach and is exactly how OpenStack Compute manages and allocates virtual servers to hypervisors. Here is an example of how the scheduler works.

  1. Tenant Alice requests her first volume and the scheduler will place it on the first OCS Block Storage node that is available with space – in this example: node A
  2. Alice requests her next volume and the scheduler will place it on a different Block Storage node other than node A
  3. Once all OCS Block Storage nodes have been filled with a single volume, the scheduler follow the same process – always preferring to allocate new requested volumes from a given tenant to a “least filled” node based on their existing block storage node allocation

Tenants can request and allocate a number of block volumes and aggregate them into a single software RAID set, knowing that individual volume failures will simply look like failed disk drives in the RAID array, which can be easily replaced using the same process.  Simple yet effective.

**OpenStack Folsom – “Awesome”**  
Folsom, in a word, is awesome.  There has been incredible and steady progress in code base, stability, bug fixes, and an incredibly number of new developers.  Just look at the trend lines in this [Ohloh](http://www.ohloh.net/p/compare?project_0=Apache+CloudStack&project_1=OpenStack&project_2=eucalyptus#) chart showing contributors over time vs. other similar projects.  This particular picture shows far more than a thousand words ever could.

![ocs 20 blog post img 2](http://www.cloudscaling.com/wp-content/uploads/2013/02/ocs-20-blog-post-img-2-e1360181071762.png)

As you know, we’ve been building OpenStack-based solutions since Cactus so we’ve seen our fair share of “rough around the edges” code and integration challenges in OpenStack.  While many vendors gravitate towards the new projects introduced in Folsom, we are most excited about improvements to existing projects like Nova (and offshoots such as Cinder).  This is because, at Cloudscaling, we focus on supporting production workloads that run on top of OCS.

One example of a major improvement in Folsom (and there are many), is Nova's VM state management, which has been massively improved.  Prior to Folsom, it was common to find a VM permanently stuck in a pending state, from which there was no way to recover using Nova API calls. The only way to get rid of a VM in this state was to manually update Nova's MySQL database to wipe out any trace of that VM – a potentially tricky and risky maneuver.  In Folsom, it is less likely for VMs to become stuck and if they do, there is also a "reset-state" API call that can be used to safely reset the VM state.

**Deliver On OCS 2.0**  
At Cloudscaling, we strive to make OCS the best OpenStack-based system on the planet and delivering OCS 2.0 materially moves the needle for us towards that goal.  Our OCS 1.x customers are already planning their upgrades to OCS 2.0 to take advantage of these new capabilities.  I think it’s an understatement to say we will have more exciting weeks ahead of us.
