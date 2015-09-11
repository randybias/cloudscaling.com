---
title: 'Elastic infrastructure: Down from the clouds vs. up from the enterprise datacenter'
link: http://cloudscaling.com/blog/cloud-computing/elastic-infrastructure-down-from-the-clouds/
author: Cloudscaling Staff
description: 
post_id: 5511
created: 2013/01/14 14:19:55
created_gmt: 2013/01/14 22:19:55
comment_status: open
post_name: elastic-infrastructure-down-from-the-clouds
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Elastic infrastructure: Down from the clouds vs. up from the enterprise datacenter

Surprisingly for some, very little in elastic clouds can be traced back to enterprise virtualization in the data center.   
  
Elastic clouds represent a new IT model created by the biggest of Internet players (Amazon, Google, Facebook, Twitter) out of necessity. They simply needed a new way to operate IT with high efficiency at an unprecedented scale. They leveraged and extended open source software running on a scale out, commodity infrastructure to support the dynamic applications powering their businesses.

Early drivers for enterprise virtualization focused on server consolidation to increase hardware utilization rates. It is very different from elastic clouds exactly because it sought to encapsulate and preserve the complexity of existing enterprise stovepipes (all the silos of hardware, software, network and storage), and in doing so, it requires expensive and often redundant hardware / software and a high level of effort to deploy and maintain.  
  
In contrast, the elastic cloud model focuses on agility. It throws legacy complexity out the window in favor of simple, modular services. The elastic cloud model reverses the enterprise virtualization paradigm by making applications responsible for their own fault tolerance to enable extremely scalable and reliable applications that run on commodity hardware with simplified operations.

![Elastic and Enterprise Clouds 1](http://www.cloudscaling.com/wp-content/uploads/2013/01/Elastic-and-Enterprise-Clouds-1.png)To better understand this, think about how these Internet leaders provision their infrastructure. Instead of building custom stovepipes, they build commodity layer cakes, where they have a whole stack of services that support each other from the concrete up to the software layer. Their portfolio of applications then leverages the entire commodity stack. This approach caters to greater scalability for both the apps and the infrastructure. Instead of managing large numbers of heterogeneous stovepipes, operators manage scalable apps deployed on homogenous infrastructure spread across the entire load. Elastic cloud infrastructure mirrors these design principles.

People often try to create ‘clouds’ by sprinkling ‘automation’ into virtualized data centers. The problem is that if it was just an automation issue, IT would have cracked the code on cloud a long time ago. Automation has consistently failed unless it is combined with homogeneity. The homogeneous infrastructures at Google, Amazon, Twitter, etc. allow automation to finally work. With a layer cake, automation actually works. With silos you are back in element management and hardware/software complexity hell which cannot be automated.  
  
To sum this up, you can’t evolve enterprise virtual infrastructure into an elastic cloud. The route to elastic cloud infrastructure lies in deploying public cloud infrastructure on premise.

## Comments

**[navinthadani](#3858 "2013-01-15 02:27:00"):** Good points and totally agree. In addition, another approach to getting to the elastic private cloud is an encapsulation mechanism that can allow your existing applications (and I mean multi-VM, multi-tier apps with all their networking and storage infrastructure) to run on your internal infrastructure and/or public clouds without any changes.  Navin R. Thadani www.ravellosystems.com

**[Sandy Kumar](#3859 "2013-01-15 03:00:00"):** I thought many of the key points here underscored the changing face of enterprise datacenter. Great post!

**[Azmir](#3860 "2013-01-24 23:49:00"):** Sandy, thanks.  We believe that the Elastic Cloud lends itself well for both private clouds (that are deployed by enterprises) as well as public clouds (for example those deployed by Service Providers)

**[Azmir](#3861 "2013-01-24 23:58:00"):** Navin, thanks.  Our approach to elastic clouds is by providing API compatibility and behavioral fidelity between the private and public clouds, which also allows apps to run unaltered on private or public clouds.  But providing choice in the market is good - apps are complicated enough that no one approach will fit all needs.

