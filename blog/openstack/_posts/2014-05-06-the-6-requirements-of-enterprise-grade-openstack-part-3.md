---
title: 'The 6 Requirements of Enterprise-grade OpenStack, Part 3'
link: http://cloudscaling.com/blog/openstack/the-6-requirements-of-enterprise-grade-openstack-part-3/
author: randybias
description: 
post_id: 7407
created: 2014/05/06 09:05:38
created_gmt: 2014/05/06 16:05:38
comment_status: open
post_name: the-6-requirements-of-enterprise-grade-openstack-part-3
status: publish
post_type: post
layout: post
---

# The 6 Requirements of Enterprise-grade OpenStack, Part 3

In [part 1](/blog/openstack/the-6-requirements-of-enterprise-grade-openstack-part-1/) and [part 2](http://cloudscaling.com/blog/openstack/the-6-requirements-of-enterprise-grade-openstack-part-2/) of this series I introduced the core ideas around defining the requirements and then discussed the first four.  Today we'll discuss the final two requirements and tie it all together.

Onwards and upwards!

## Requirement #5 – Scalable, Elastic, and Performant

Enterprise-grade has to mean something. In the past, enterprise-grade related to a certain quality of a system that made it highly reliable, scalable, and performant. More and more, enterprise-grade is beginning to mean "cloud-grade" or "web scale." What I mean by that is that as the move to next generation applications happens and enterprises adopt a new IT model, we will see major changes in the requirements for delivering a high quality system.

The example I love to use is [Hadoop](http://hadoop.apache.org). Hadoop comes with a reference architecture that says: use commodity servers, commodity disk drives, and **NO** RAID. When is the last time you saw an enterprise infrastructure solution with no data protection at the hardware layer? Of course, it doesn’t make sense to run Hadoop on high end blades attached to a fiber channel SAN, although I have seen it. Even Microsoft Exchange has begun [recommending](http://blogs.technet.com/b/scottschnoll/archive/2012/09/19/storage-high-availability-and-site-resilience-in-exchange-server-2013-part-1.aspx) a move towards JBODs from RAID and depending on the application software layer to _route around failure_.

Let’s talk about these three requirements for enterprise-grade OpenStack.

### Scalability & Performance

Scalability is the property of a system to continue to work as it increases in size and workload demands. Performance is the measurement of the throughput of an individual resource of the system rather than the system itself. Perhaps Werner Vogels, CTO of Amazon, [said it best](http://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html):

> A service is said to be scalable if when we increase the resources in a system, it results in increased performance in a manner proportional to resources added.

In many ways, OpenStack itself is a highly scalable system. It was designed around a loosely-coupled, message passing architecture -- something tried and true for mid to large scale, while also able to scale down to much smaller size deployments. The problem, unfortunately, lies in what design decisions you made when configuring and deploying OpenStack. Some of its default configurations and many of the vendor plugins and solutions have not been designed with scale in mind.[1] When you read the previous [installment](/blog/openstack/the-6-requirements-of-enterprise-grade-openstack-part-2/), you understood that having a reference architecture is critical to delivering hybrid cloud. Make certain you pick an enterprise-grade product with a reference architecture that cares about scale and performance while using well-vetted components and configuration choices.

A complete examination of the scale and performance issues that might arise with OpenStack is beyond the scope of this series; however, let’s tackle the number one issue that most people run into: **_network performance and scalability_**.

### OpenStack Default Networking is a Bust

OpenStack Compute (Nova) has three built-in default networking models: flat, single_host, and multi_host. All three of these networking models are completely unacceptable for most enterprises. In addition to these default networking models, you have the option of deploying OpenStack Networking (Neutron), which has a highly pluggable architecture that supports a number of different vendor plugins both to manage physical devices and also network virtualization systems (so called Software-defined Networking or SDN).

A very brief explanation of the default networking models shortcomings is in order. I will keep it very simple, but am happy to follow up later with more details. The flat and multi_host networking model requires a single shared VLAN for all elastic (floating) IP addresses. This requires running spanning tree protocol (STP) across your switch fabric, a notoriously dangerous approach if you want high network uptime. I’ve asked the question at multiple conferences to a full room: “_How many of you think STP is evil?_” and have had nearly everyone in the room raise their hand.

Perhaps more importantly, both flat and multi_host networking models require you to route your public IP addresses from your network edge down to the hypervisor nodes. This is really not an acceptable approach in any modern enterprise. Here’s a diagram showing multi_host mode:

![OpenStack multi_host mode](http://www.cloudscaling.com/wp-content/uploads/2014/05/6-Requirements-for-Enterprise-grade-OpenStack-Supporting-Material.0081.jpg)

It’s probably also worth noting that if you want multi_host mode, you need to be able to load code on your hypervisor. That means if you like ESX or Hyper-V you are probably out of luck.

By contrast, single_host mode suffers from the singular sin of trying to make a single x86 server the core networking hub through which all traffic between VLANs and the Internet runs.[2] Basically, take your high performance switch fabric and throw it in the trash because your maximum bandwidth is whatever a Linux server can push. Again, this is not an acceptable or even credible approach to networking. To be fair though, OpenStack competitors also took a similar approach to this. Here’s a diagram on single_host mode:

![OpenStack single_host mode](http://www.cloudscaling.com/wp-content/uploads/2014/05/6-Requirements-for-Enterprise-grade-OpenStack-Supporting-Material.007.jpg)

All of these approaches have fundamental scalability and performance issues. Which brings us to OpenStack Neutron.

### Depending on OpenStack Neutron NOT for the Faint of Heart

As of September 2013, it seems like [Neutron still had significant issues](http://lists.openstack.org/pipermail/openstack-operators/2013-September/003584.html) as seen in this critical posting from Scott Devoid of Argonne National Labs (ANL) to the OpenStack operators mailing list. As of this writing, OpenStack Neutron supports single_host and flat modes, but [not multi_host](http://docs.openstack.org/admin-guide-cloud/content/section_limitations.html). Apparently, we may see a replacement for multi_host in the Juno timeframe, although this capability has been missing for a while now.

That being said, Neutron has made a lot of progress and to be honest, many of the issues folks have reported are more likely to stem from poorly written and adapted plugins. What this means is that in order to deliver success with OpenStack Neutron you need a version of Neutron plus accompanying plugins that have been designed for scale and performance.[3] Plus, your cloud operating system vendor should have some proven deployments at scale and have really beaten the crap out of the networking using exhaustive testing frameworks.