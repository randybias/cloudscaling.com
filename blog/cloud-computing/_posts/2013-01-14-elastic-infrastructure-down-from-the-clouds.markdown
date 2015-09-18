---
author: Cloudscaling Staff
comments: true
date: 2013-01-14 22:19:55+00:00
layout: post
slug: elastic-infrastructure-down-from-the-clouds
title: 'Elastic infrastructure: Down from the clouds vs. up from the enterprise datacenter'
wordpress_id: 5511
old_categories:
- Cloud Computing
tags:
- agility
- ECI
- elastic
- elastic cloud infrastructure
- enterprise virtualization
---

Surprisingly for some, very little in elastic clouds can be traced back to enterprise virtualization in the data center.   
  
Elastic clouds represent a new IT model created by the biggest of Internet players (Amazon, Google, Facebook, Twitter) out of necessity. They simply needed a new way to operate IT with high efficiency at an unprecedented scale. They leveraged and extended open source software running on a scale out, commodity infrastructure to support the dynamic applications powering their businesses.

Early drivers for enterprise virtualization focused on server consolidation to increase hardware utilization rates. It is very different from elastic clouds exactly because it sought to encapsulate and preserve the complexity of existing enterprise stovepipes (all the silos of hardware, software, network and storage), and in doing so, it requires expensive and often redundant hardware / software and a high level of effort to deploy and maintain.  
  
In contrast, the elastic cloud model focuses on agility. It throws legacy complexity out the window in favor of simple, modular services. The elastic cloud model reverses the enterprise virtualization paradigm by making applications responsible for their own fault tolerance to enable extremely scalable and reliable applications that run on commodity hardware with simplified operations.

![Elastic and Enterprise Clouds 1](http://www.cloudscaling.com/wp-content/uploads/2013/01/Elastic-and-Enterprise-Clouds-1.png)To better understand this, think about how these Internet leaders provision their infrastructure. Instead of building custom stovepipes, they build commodity layer cakes, where they have a whole stack of services that support each other from the concrete up to the software layer. Their portfolio of applications then leverages the entire commodity stack. This approach caters to greater scalability for both the apps and the infrastructure. Instead of managing large numbers of heterogeneous stovepipes, operators manage scalable apps deployed on homogenous infrastructure spread across the entire load. Elastic cloud infrastructure mirrors these design principles.

People often try to create ‘clouds’ by sprinkling ‘automation’ into virtualized data centers. The problem is that if it was just an automation issue, IT would have cracked the code on cloud a long time ago. Automation has consistently failed unless it is combined with homogeneity. The homogeneous infrastructures at Google, Amazon, Twitter, etc. allow automation to finally work. With a layer cake, automation actually works. With silos you are back in element management and hardware/software complexity hell which cannot be automated.  
  
To sum this up, you can’t evolve enterprise virtual infrastructure into an elastic cloud. The route to elastic cloud infrastructure lies in deploying public cloud infrastructure on premise.
