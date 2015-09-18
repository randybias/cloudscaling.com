---
author: Randy Bias
comments: true
date: 2010-07-20 19:01:46+00:00
layout: post
slug: does-openstack-change-the-cloud-game
title: Does OpenStack Change the Cloud Game?
wordpress_id: 1180
old_categories:
- Cloud Computing
tags:
- amazon
- api
- aws
- cloud
- Cloud Standards
- cloudscaling
- Community
- Open Source
- OpenStack
---

This week Rackspace Cloud, in conjunction with the NASA Nebula project, open sourced some of their Infrastructure-as-a-Service (IaaS) cloud software.  This initiative, dubbed ['OpenStack'](http://www.openstack.org/), should have a dramatic impact on the current dynamics for building cloud computing infrastructure.  Previously there have been two major camps: Amazon API and architecture compatible and VMware's vCloud.  Now there is a third alternative that could not only be a viable alternative to these two approaches, but more importantly, a fantastic option for service providers and telecommunications companies that face unique challenges.

Let's dive in and I'll explain.

**Cloud Stack Evolution & 'Camps'
**Amazon Web Services (AWS) spawned a huge ecosystem of knock-offs, management systems, tools, and vendors.  They include, but aren't limited to:



	
  * AWS API compatible 'cloud stacks' including Eucalyptus, Open Nebula, and others

	
  * Cloud management systems for the AWS APIs and services such as RightScale and enStratus

	
  * Cloud services layered on top of AWS services such as Jungle Disk (S3), Heroku (S3, EBS, EC2), and more


Prior, I wouldn't have called the AWS ecosystem a 'camp' per se, but if you read our most recent article on Google's foray into cloud storage, you know that it seems likely they will provide a 100% compatible version of S3 and EC2 this year.  Imagine the impact of Google Compute & Storage with Amazon Web Services compatible APIs.  Already the Google Storage API is nearly 100% compatible with S3.

Together, as a block, Amazon and Google could create a de facto duopoly for infrastructure clouds, which isn't good for anyone.  We need competition and more than two major players.

Up against the Amazon camp is VMware. In my article on Amazon vs. VMware last year I highlighted how these two businesses were on a collision course. Nothing has changed and competition is mounting between them.  The reason is that telcos and service providers are under increasing threat from Amazon and soon Google. They need viable solutions and VMware is attempting to provide a competitive ecosystem.

The VMware cloud initiative, vCloud, is designed to arm enterprises and service providers to be competitive, but has not quite delivered yet. VMware has had a number of problems providing a full cloud stack. The software, now in beta, is codenamed 'Redwood' has had significant delays in getting to market.  Their strategy for cloud infrastructure does not appear unified outside of delivering compute virtualization.

VMware, as a business, understands they need to make their customers competitive. They have made a number of strategic open source acquisitions such as SpringSource,  RabbitMQ, and Redis. There are also murmurings that they have some special projects inside that are 'up the stack' from their virtualization offerings.  In total this shows that VMware 'gets it' in that they want to create a competitive ecosystem.  While each of these is currently a point solution, there is yet to be a coherent story here.  Can VMW build a consistent story and strategy around these disparate pieces?  Only time will tell...

Besides these two camps, there is a long tail of clouds running various frameworks vying to establish themselves such as Cloud.com's CloudStack, 3Tera, Hexagrid, Abiquo, OpenNebula, etc.  John Treadway recently had posted a roundup describing all of the various[ cloud stacks out there.](http://www.cloudbzz.com/the-red-ocean-of-cloud-infrastructure-stacks/)

OpenStack is stepping into the ring as a viable third camp. In particular, the OpenStack Storage solution is a clear contender to Amazon S3 & Google Storage. Many service providers and telcos have struggled to find a viable solution using commodity hardware that was price competitive. Suddenly, there is a viable proven solution.

Yet this is only storage. How can it create an effective 'third camp' alternative to Amazon and VMware for an entire cloud?

**Lock-in, Architecture, Standards and The Truth about Interoperability
**
Interoperability for infrastructure clouds is poorly understood. Most believe that the problem lies in the on-disk image format (e.g. VMDK vs. VHD vs. qcow) or in the 'hypervisor' (although people don't really unders/tand what this means). The truth is that lock-in has little or nothing to do with disk formats or the hypervisor.  Most on-disk image formats are simply representations of block storage (i.e. disk drives).  That means converting between a VMware VMDK and a Citrix XenServer/Hyper-V VHD is relatively trivial.

What about booting the converted disk image up on a new hypervisor? Guess what, since most hypervisors now rely on hardware virtualization (HVM) [1] using Intel-VT/AMD-V, that means that by default most will work with unmodified operating systems out of the box. No changes needed. The only downside of this is that usually the resulting performance is poor. This requires new paravirtualization (PV) drivers in the converted image.  What does that mean?  After converting the image from one format to another, you simply have to install the PV drivers for the correct OS.  A process that requires being methodical, but is in no way technically challenging.

Where is the lock-in then?  If it's not the hypervisor, what makes moving from one cloud to another so difficult?  Simply put, it's architectural differences.  Every cloud chooses to do storage and networking differently.

For example, if you wanted to move a virtual machine from GoGrid to Amazon, converting the GoGrid image to an AMI is not difficult.  Unfortunately, GoGrid uses two networks, a 'frontend' and a 'backend' where your cloud storage system is connected to via the backend network.  Every Amazon virtual server has only a single network interface.  If your application assumes a separate backend network then what happens when it moves to a cloud without one?  Or vice versa? Similar architectural incompatibilities exist between Rackspace Cloud, Savvis, Terremark, Hosting.com, Joyent, and all of the others.

The problem here, to be a bit more succinct, is that we need reference architectures for how infrastructure clouds are built. Amazon is one such reference. VMware's vCloud is potentially another. Now there could be a truly open option with the gravity to gather community support.

**More on The Third Camp
**
OpenStack's potential to build a real community and a set of reference architectures drives towards greater standardization and interoperability. Perhaps more important than a cloud storage alternative, is this possibility for a true OpenStack community to form a critical mass such that a similar level of developers contributing to it as Amazon or VMware. Then commercial and alternative offerings, such as Cloud.com, Hexagrid, and OpenNebula can match their APIs and architectures to this set of reference architectures.

Will it happen?  It's hard to say, but the opportunity is there.  Rackspace and others are putting serious weight behind this initiative.

**What This Means for Telcos and Service Providers
**
For Telcos and SPs this means an alternative to VMware's vCloud for commodity service offerings.  A way to compete and operate at scale like Amazon and at a similar price point.  Standardization through a similar reference architecture means greater compatibility between service provider clouds, which means greater benefit for customers and less lock-in, making them more desirable than the walled gardens.

You don't want to differentiate on the basic compute, storage, and network offering.  You want this to be as standard and interoperable as possible, just like 3G networks, TCP/IP, and similar service provider technologies.  By creating a common open platform that everyone uses there is a better opportunity to facilitate wider adoption, create a competitive infrastructure service marketplace where providers work on differentiating in areas where they have an inherent advantage:



	
  * Service and support

	
  * Network & datacenter tie-ins (e.g. MPLS, hosting/co-lo)

	
  * Bundled service offerings

	
  * Differentiated value-added cloud services (VACS)


This is a game that all telcos and service providers understand. They have been playing it for the past 15+ years.

**Conclusion
**
OpenStack, with a strong community behind it, should be an important tool for service providers and large telcos to compete at scale with the Amazon and Googles of this world.

We believe OpenStack and the reference architecture(s) associated with it will allow service providers (SP) to get their undifferentiated cloud offerings up and running early. For this reason, Cloudscaling will put real resources into supporting this effort. Getting basic cloud offerings up early then means providers can focus on support, services, bundling, and differentiated services as soon as possible, while embracing as large a customer base as possible. This is just as they compete on top of basic TCP/IP services today.

[1] Clearly, the market leader, Amazon, does not use HVM. They use PVM, a fully paravirtualized mode of Xen. However, even they seem to understand that HVM is the future. Their latest offering, designed for HPC, which is performance sensitive, uses HVM and supports unmodified operating systems. The reality is that the Intel-VT and AMD-V capabilities on the latest round of processors is incredibly fast and will only get faster. The battle is over.  HVM and silicon won in this case.
