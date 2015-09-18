---
author: Cloudscaling Partners
comments: true
date: 2013-01-15 17:00:39+00:00
layout: post
slug: deploying-and-scaling-stackato-private-paas-on-open-cloud-system
title: Deploying and Scaling Stackato Private PaaS on Open Cloud System
wordpress_id: 5530
old_categories:
- Cloud Computing
- Technology
tags:
- ActiveState
- OCS
- Open Cloud System
- OpenStack
- paas
- Stackato
---

_(This post submitted by Diane Mueller of ActiveState.)_

The logical step for an enterprise that has an elastic cloud up and running is to deploy applications. Following ActiveState’s recent [Stackato Partner Program announcement ](http://www.activestate.com/press-releases/activestate-announces-stackato-partner-program)with cloud infrastructure leader [Cloudscaling](http://www.cloudscaling.com/), ActiveState’s Cloud Evangelists Diane Mueller and John Wetherill take the plunge and share key insights on deploying Stackato on CloudScaling’s Open Cloud System.

Open Cloud System (OCS) is Cloudscaling’s OpenStack-based production-grade elastic cloud product. OCS takes a different approach to networking from baseline OpenStack. Rather than using VLANs, OCS relies on layer 3 routing, just like Amazon Web Services EC2. While we tested Stackato on both AWC and OpenStack, we we wanted to ensure that Stackato behaved the same or better on OCS, and provided an out-of-the-box experience that would be just as awesome on OCS as on other clouds.

The Cloudscaling team gave us access to an OCS lab environment so that we could install Stackato, build a private PaaS cluster, and run our scaling tests. Here are the results.

### **Setting up Stackato Private PaaS on OCS V2.0**

For any cloud provider, public or private, our first step is to conduct a viability test. We install Stackato in the simplest of all configurations, using the cloud provider’s dashboard and toolset.  A small multiple node private PaaS cluster consisting of one CloudController node, one Services Node, and two DEA Nodes is what we consider a Minimal Viable Production (MVP) cluster for testing purposes. It is possible to run all of Stackato on a single node (aka a MicroCloud of Stackato), but for testing the network and running scaling tests,  we needed a multi-node cluster.

![](https://lh5.googleusercontent.com/uJtB1UiHSqw9j-Vm01Tk1RD1sPOWM-3N5cay93cWfSpbXpDjhczaDi8bLX1ANfgMuN4siH2J6F9anX1H8vY0deR0WR-V3D1RZ5v_8S3F4tOzAOkT4A)

Our next step was to log into the VMs, assign “roles,” and make them aware of each other via Stackato’s admin client called “kato” :

<blockquote>$ ssh stackato@208.75.128.166 $ kato rename 208.75.128.166.xip.io $ kato disable mdns $ sudo reboot $ kato setup core api.208.75.128.166.xip.io $ kato enable stager
> 
> </blockquote>

Note that the non-core nodes needed to access the core node via its LAN ip address, in this case on the 10.*.*.* network.

On each non-core node:

<blockquote>$ kato attach -e dea 10.0.5.6
> 
> </blockquote>

On data-services node:

<blockquote>$ kato attach -e data-services 10.0.5.6
> 
> </blockquote>

At that point, everything worked exactly the same on OCS as it would on a Vanilla OpenStack deployment. This was exciting news for us! Manually building a cluster was a breeze. We now had a MVP Stackato Private PaaS cluster running on OCS, and we logged into the Stackato Management Console to begin our viability testing.

Of course, things did not exactly go according to Plan “A.” Because we started testing two days before Christmas, we immediately ran into some issues. The services and frameworks were showing up as “unavailable” in the Stackato Management Console, and did not rear its head until the Private PaaS Cluster was up and running.  This is never a good sign.

We then ssh’d in and attempted to do a few curl commands and, sure enough, even that did not work. We guessed this was not a Stackato issue, but some networking problem in the environment.

After a quick call to Seth Fox at Cloudscaling, the OCS Engineering team was on the case.  It turned out there was an errant piece of network hardware, which was promptly replaced, with the help of the [Equinix ](http://equinix.com/)data center’s networking team.

Once this issue was resolved, we were able to successfully deploy all our test cases for all languages, frameworks, services, and databases, using the full range of web servers available, with not even a hiccup. Impressive!

### **Configuring Stackato for auto-scaling on OCS**

Because Stackato is built for scaling, no testing would be complete without exercising the auto-scaling functionality.  To turn auto-scaling on, we first had to configure a Cloudscaling Instance Pool with a Stackato DEA template.  We initially used the CORE template to create the MVP cluster, but for auto-scaling we needed a slightly different VM.

To achieve this, we created a DEA template from the Stackato VM. Once the node became a “DEA,”  we simply had to shut down the VM and make the health monitor and cloud controller aware of its existence.

We used the following commands on a fresh Stackato VM:

<blockquote>$ kato attach -e dea CORE_IP {joins the node to the cluster}  
$ touch /home/stackato/.stackato-dea-template {tell the node it’s a template}  
$ sudo poweroff
> 
> </blockquote>

Now ssh back into the Core Node of the cluster to enable auto-scaling and restart the health manager with this new piece of vital information:

<blockquote>$ stackato ssh api  
$ kato config --json health_manager enable_autoscaling 'true'  
$ kato restart health_manager
> 
> </blockquote>

We now needed to let the cloud controller know that we were on an OpenStack cloud. This was [achieved by adding system-specific details ](http://docs.stackato.com/cluster/autoscaling.html#ec2-openstack-configuration-file)into  the file openstack_config.yml and then restarting both the cloud controller and the health manager:

<blockquote>$ kato config --json cloud_controller primary_scaling_platform '"openstack"'  
$ kato config --json cloud_controller openstack_config '"/home/stackato/stackato/etc/openstack_config.yml"'  
$ kato restart cloud_controller health_manager
> 
> </blockquote>

Now, we were finally ready to put Stackato through its paces.

### **Testing Scaling Stackato on OCS **

We built out a small java app called [lightningcast](http://github.com/tbd) to eat up resources such as memory, disk space, and cpu on demand. This app worked like a “Ms. PacMan” for the cloud, causing the health monitor to inform the cloud controller it needed to stage and spin up more resources, for example launching more of those Stackato DEA templates we created earlier.

![](https://lh5.googleusercontent.com/-B4Q7Hz5z6sFXeS5jj1ZAn56eJC5qiP_M8tTuD8AlY231UqbeN3e52d2Jnb3xMtzgLG1uq_WIDTqr3UIMtRe18TfZOxlvLnuD1zjTpO02UhppkG_1Q)

### Monitoring Stackato on OCS

When we test Stackato in different cloud environments, we need to monitor a number of areas during scaling testing.  For the clouds we don’t host, we rely on the host to monitor the underlying cloud hardware and services. The CloudScaling team uses [collectd](http://collectd.org/) to periodically collect OCS system performance statistics such as CPU, memory, disk usage, etc. OSC V2.0 also comes with a configurable stats collection.

![](https://lh6.googleusercontent.com/i-IR6rbWOVXPRr3jrqBMyx5RX5SIFfodGFgG-fWl4SbEgzlEeewY9cIB5aG0Yj-aJ2-OliYVZWFYVYV9l1F__4b7f6GimhfI8blFS5yDUtiyOqqdr2w)

What we can monitor via the [Stackato Management Console](http://linktotheconsoleimageabove.com/) and other third-party tools such as [Loggly](http://loggly.com/) is Stackato’s performance on the cloud resources we are assigned.

This gives us insights into the performance of Stackato running on top of any given OpenStack installation. The information boils down to determining what prevents Stackato’s resources from functioning properly, and how these factors impact other cloud resources such as the cloud controller ability to properly to allocation of deas, release memory, etc.

True to form, the Stackato Health Manager issued the expected notifications to the cloud controller causing it to launch new DEA instances (from the template created above) to ensure enough resources were available for the increased load.  
  





<blockquote>

>     
>     
>     health_manager   	@ 10.0.4.10 --> [2013-01-10 16:56:34.590640] 
>       hm - pid=2115 tid=bef2 fid=529b   INFO -- Requesting the start of 
>       missing instances: {:droplet=>5, : op=>:START, :last_updated=>1357865775,
>       :version=>"d768faa62a50df3965f05f586cfe4559ade9727d-1", :indices=>[5]}
>     health_manager   	@ 10.0.4.10 --> [2013-01-10 16:56:39.916258] 
>       hm - pid=2115 tid=bef2 fid=529b  DEBUG -- Checking scaling
>     health_manager   	@ 10.0.4.10 --> [2013-01-10 16:56:39.916491] 
>       hm - pid=2115 tid=bef2 fid=529b   INFO -- Current load: 80.0%
>     health_manager   	@ 10.0.4.10 --> [2013-01-10 16:56:39.916554] 
>       hm - pid=2115 tid=bef2 fid=529b  DEBUG -- Currently 99 data points 
>       in scaling projection
>     health_manager   	@ 10.0.4.10 --> [2013-01-10 16:56:39.916630] 
>       hm - pid=2115 tid=bef2 fid=529b   INFO -- Current scaling status: 
>       instances currently starting: 0, projected load once scaling complete: 80.0%
>     health_manager   	@ 10.0.4.10 --> [2013-01-10 16:56:39.916714] 
>       hm - pid=2115 tid=bef2 fid=529b   INFO -- Projected load in 6 minutes: 
>       -16.000000000000043%
>     
> 
> 
</blockquote>




Successfully sending a request to Stackato Cloud Controller to start new hypervisor instance!

### Findings and Surprises

Application and system logs in Stackato are aggregated into streams which can be viewed, tailored, filtered, and sent via drains to other log aggregators for archiving or analysis.

![](https://lh4.googleusercontent.com/GLns9hdrflrs9QMa23Pr7AoGcC2ktiK3LJp291Bh89itg-xzKSCiaRv-tbeCGWODNJPYlCv8pKQFekEiqTOq1o3kqoD93H7cvpNlGdFlsNKFue9cng)

We were able to forward [lightningcast](https://github.com/tbd) application-generated json logs to [loggly](http://www.loggly.com/) so it could generate summarized graphs of the application’s performance before and after the scaling events occurred, such as the one  shown below.

The table below vividly shows how the activity on each DEA node / application instance (in the json.instance_index column) increased over time. The first instance (instance 0) got the most hits, and as the other instances came online they gradually started taking the load.![](https://lh3.googleusercontent.com/SmaHeTJEzW_APEWS0GVapuKB3en2Vg5amy1qYe4Up3Oodzc0po40Nnr1ytM7KtV88f_MRVu3yLieHas6Ys8mq9USRSYCuUIgvyIjSAxtMQlEvg9VpQ)  
  
As expected, pushing multiple instances of a resource-hungry application kicked off Stackato’s auto-scaling mechanism, causing the cloud controller to request for more instances to be spun up via an api call to openstack.  
It is worth noting that it took little effort to generate json logs and to have Stackato forward these to Loggly. Loggly provides amazing insights on the data.  
  
We were surprised with the quotas in Nova, and confirmed it was indeed an upstream bug in OpenStack. We filed a bug with the community along with a script that consistently reproduced it. We are hopeful that a fix will be released before the next major version. ** **

### **Conclusions**

Deploying Stackato on OCS was exactly the same experience as with any other OpenStack cloud, and did not require additional steps.  Was it better than running Stackato on either vanilla OpenStack or AWS? Timewise, it is difficult to tell, but Cloudscaling’s Open Cloud System gets high marks for reliability and responsiveness. Stackato purred on Open Cloud System V2.0. Deploying and managing Stackato private PaaS was standard operating procedure all the way. No customization required!
