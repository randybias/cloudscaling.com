---
title: 'Does OpenStack Change the Cloud Game?'
link: http://cloudscaling.com/blog/cloud-computing/does-openstack-change-the-cloud-game/
author: randybias
description: 
post_id: 1180
created: 2010/07/20 12:01:46
created_gmt: 2010/07/20 19:01:46
comment_status: open
post_name: does-openstack-change-the-cloud-game
status: publish
post_type: post
layout: post
---

# Does OpenStack Change the Cloud Game?

This week Rackspace Cloud, in conjunction with the NASA Nebula project, open sourced some of their Infrastructure-as-a-Service (IaaS) cloud software. This initiative, dubbed ['OpenStack'](http://www.openstack.org/), should have a dramatic impact on the current dynamics for building cloud computing infrastructure. Previously there have been two major camps: Amazon API and architecture compatible and VMware's vCloud. Now there is a third alternative that could not only be a viable alternative to these two approaches, but more importantly, a fantastic option for service providers and telecommunications companies that face unique challenges. Let's dive in and I'll explain. **Cloud Stack Evolution & 'Camps' **Amazon Web Services (AWS) spawned a huge ecosystem of knock-offs, management systems, tools, and vendors. They include, but aren't limited to: 

  * AWS API compatible 'cloud stacks' including Eucalyptus, Open Nebula, and others
  * Cloud management systems for the AWS APIs and services such as RightScale and enStratus
  * Cloud services layered on top of AWS services such as Jungle Disk (S3), Heroku (S3, EBS, EC2), and more
Prior, I wouldn't have called the AWS ecosystem a 'camp' per se, but if you read our most recent article on Google's foray into cloud storage, you know that it seems likely they will provide a 100% compatible version of S3 and EC2 this year. Imagine the impact of Google Compute & Storage with Amazon Web Services compatible APIs. Already the Google Storage API is nearly 100% compatible with S3. Together, as a block, Amazon and Google could create a de facto duopoly for infrastructure clouds, which isn't good for anyone. We need competition and more than two major players. Up against the Amazon camp is VMware. In my article on Amazon vs. VMware last year I highlighted how these two businesses were on a collision course. Nothing has changed and competition is mounting between them. The reason is that telcos and service providers are under increasing threat from Amazon and soon Google. They need viable solutions and VMware is attempting to provide a competitive ecosystem. The VMware cloud initiative, vCloud, is designed to arm enterprises and service providers to be competitive, but has not quite delivered yet. VMware has had a number of problems providing a full cloud stack. The software, now in beta, is codenamed 'Redwood' has had significant delays in getting to market. Their strategy for cloud infrastructure does not appear unified outside of delivering compute virtualization. VMware, as a business, understands they need to make their customers competitive. They have made a number of strategic open source acquisitions such as SpringSource, RabbitMQ, and Redis. There are also murmurings that they have some special projects inside that are 'up the stack' from their virtualization offerings. In total this shows that VMware 'gets it' in that they want to create a competitive ecosystem. While each of these is currently a point solution, there is yet to be a coherent story here. Can VMW build a consistent story and strategy around these disparate pieces? Only time will tell... Besides these two camps, there is a long tail of clouds running various frameworks vying to establish themselves such as Cloud.com's CloudStack, 3Tera, Hexagrid, Abiquo, OpenNebula, etc. John Treadway recently had posted a roundup describing all of the various[ cloud stacks out there.](http://www.cloudbzz.com/the-red-ocean-of-cloud-infrastructure-stacks/) OpenStack is stepping into the ring as a viable third camp. In particular, the OpenStack Storage solution is a clear contender to Amazon S3 & Google Storage. Many service providers and telcos have struggled to find a viable solution using commodity hardware that was price competitive. Suddenly, there is a viable proven solution. Yet this is only storage. How can it create an effective 'third camp' alternative to Amazon and VMware for an entire cloud? **Lock-in, Architecture, Standards and The Truth about Interoperability ** Interoperability for infrastructure clouds is poorly understood. Most believe that the problem lies in the on-disk image format (e.g. VMDK vs. VHD vs. qcow) or in the 'hypervisor' (although people don't really unders/tand what this means). The truth is that lock-in has little or nothing to do with disk formats or the hypervisor. Most on-disk image formats are simply representations of block storage (i.e. disk drives). That means converting between a VMware VMDK and a Citrix XenServer/Hyper-V VHD is relatively trivial. What about booting the converted disk image up on a new hypervisor? Guess what, since most hypervisors now rely on hardware virtualization (HVM) [1] using Intel-VT/AMD-V, that means that by default most will work with unmodified operating systems out of the box. No changes needed. The only downside of this is that usually the resulting performance is poor. This requires new paravirtualization (PV) drivers in the converted image. What does that mean? After converting the image from one format to another, you simply have to install the PV drivers for the correct OS. A process that requires being methodical, but is in no way technically challenging. Where is the lock-in then? If it's not the hypervisor, what makes moving from one cloud to another so difficult? Simply put, it's architectural differences. Every cloud chooses to do storage and networking differently. For example, if you wanted to move a virtual machine from GoGrid to Amazon, converting the GoGrid image to an AMI is not difficult. Unfortunately, GoGrid uses two networks, a 'frontend' and a 'backend' where your cloud storage system is connected to via the backend network. Every Amazon virtual server has only a single network interface. If your application assumes a separate backend network then what happens when it moves to a cloud without one? Or vice versa? Similar architectural incompatibilities exist between Rackspace Cloud, Savvis, Terremark, Hosting.com, Joyent, and all of the others. The problem here, to be a bit more succinct, is that we need reference architectures for how infrastructure clouds are built. Amazon is one such reference. VMware's vCloud is potentially another. Now there could be a truly open option with the gravity to gather community support. **More on The Third Camp ** OpenStack's potential to build a real community and a set of reference architectures drives towards greater standardization and interoperability. Perhaps more important than a cloud storage alternative, is this possibility for a true OpenStack community to form a critical mass such that a similar level of developers contributing to it as Amazon or VMware. Then commercial and alternative offerings, such as Cloud.com, Hexagrid, and OpenNebula can match their APIs and architectures to this set of reference architectures. Will it happen? It's hard to say, but the opportunity is there. Rackspace and others are putting serious weight behind this initiative. **What This Means for Telcos and Service Providers ** For Telcos and SPs this means an alternative to VMware's vCloud for commodity service offerings. A way to compete and operate at scale like Amazon and at a similar price point. Standardization through a similar reference architecture means greater compatibility between service provider clouds, which means greater benefit for customers and less lock-in, making them more desirable than the walled gardens. You don't want to differentiate on the basic compute, storage, and network offering. You want this to be as standard and interoperable as possible, just like 3G networks, TCP/IP, and similar service provider technologies. By creating a common open platform that everyone uses there is a better opportunity to facilitate wider adoption, create a competitive infrastructure service marketplace where providers work on differentiating in areas where they have an inherent advantage: 

  * Service and support

## Comments

**[kinlane](#555 "2010-07-20 12:56:00"):** Great analysis. I think the OpenStack will potentially open the playing field with this new camp. Seems like startups embracing the OpenStack will more likey set themselves up for acquisition during the coming cloud consolidation rather than openly competing.   
  
I think enough providers are embracing the Amazon ecosystem for this same reason, to compete through interoperability and hoping to be acquired by Amazon.  
  
Its going to be an interesting cloud game over the next couple years.

**[Ray Nugent](#556 "2010-07-20 12:57:16"):** Great post Randy! I think the key to the success of OpenStack depends on if the folks that adopt it can match the skill and innovation levels of companies like Amazon and Google. Big Telcos have the $ to build big clouds but can they innovate fast enough?

**[randybias](#557 "2010-07-20 12:59:38"):** I agree completely. I doubt Amazon will acquire anyone however. They have no motivation nor track record to do so.

**[randybias](#558 "2010-07-20 13:44:53"):** Ray, telcos won't be primary contributors here I am guessing. Some will, many won't. Businesses like Cloudscaling and smaller service providers will be more likely to be the primary community.

**[Dag Stenstad](#559 "2010-07-20 14:34:30"):** I agree, telcos will not enter the market at this stage; Give them 2-3 years.

**[randybias](#560 "2010-07-20 14:47:44"):** I am not certain what you mean. Telcos are already entering the market. We are launching several over the next year.

**[Davido](#562 "2010-07-20 21:46:56"):** why no mention of microsoft and azure?

**[randybias](#563 "2010-07-20 21:54:30"):** No particular reason. They simply weren't mentioned, although given the fact that Microsoft has significant execution problems and is building a Windows-only cloud it's hard to take them very seriously. Most businesses are heterogeneous and need a service provider with a proven track record. AFAICT, Microsoft's only "cloud" services that are likely to do well are their SaaS apps like hosted Exchange and Sharepoint.

**[Dmitriy](#564 "2010-07-21 11:44:48"):** Great post, I especially liked this:  
  
"Where is the lock-in then? If it’s not the hypervisor, what makes moving from one cloud to another so difficult? Simply put, it’s architectural differences. Every cloud chooses to do storage and networking differently."  
  
I believe this is a key aspect from which one ought to look at cloud interop and Intercloud in general.  
  
On a side note, I recently wrote a post that is somewhat similar (I like yours much better!) but which looks at almost the same problem from a point of view of customer control (disclosure: my post is about CohesiveFT VPN-Cubed and I am the lead engineer for this product):  
  
[CohesiveFT VPN-Cubed as Networking Fabric of the Intercloud](http://somic.org/2010/06/23/cohesiveft-vpn-cubed-as-networking-fabric-of-the-intercloud/).  
  
Here is where I echo your point above:  
  
"Taking images of N boxes from one cloud and dropping them in another cloud is well understood, recreating one cloud’s networking in another cloud is where the challenge is."

**[Robert Jenkins](#566 "2010-07-22 07:34:17"):** I'd echo Dmitriy's comments. The lock-in is associated with the supplier specific implementations of the higher levels of the cloud, not the hypervisor. It is tempting to want a standard implementation of IaaS architecture but we mustn't forget that computing in the cloud is heterogeneous. Some types of computing do better on certain implementations than others. As users become more sophisticated they will gravitate towards implementations that favour their computing profile. Just a few characteristics that make a huge difference to which cloud is best for you:  
\- do you need to rapidly deploy instances?  
\- are you a heavy disk user?  
\- do you have specific networking needs such as low latency?  
etc. etc.  
  
It isn't clear that one architecture is favourable for meeting differing user profiles. As in most sectors I believe some level of differentiation and specialisation will persist and this is healthy. Overall it will mean customers are better able to fulfil their needs and reach higher levels of performance.  
  
My personal preference is greater user control and openness. Most of our customers are coming from dedicated hosting environments, it isn't clear why IaaS platforms can't offer the same level of control to users that dedicated hardware does (the issue isn't a technical one). That's our approach anyway, it reduces the sort of architecture specific vendor lock-in that Randy so rightly raises as the real lock-in issue.  
  
Best wishes,  
  
Robert  
  
\--   
Robert Jenkins  
Co-founder  
CloudSigma  
<http://www.cloudsigma.com>  
<http://www.twitter.com/CloudSigma>

**[randybias](#567 "2010-07-22 13:32:28"):** Thanks. I agree with you re: networking. Of course, that isn't the only architectural difference. There are also particularities to storage, performance, and possibly security.

**[Lori MacVittie](#568 "2010-07-22 14:57:08"):** Excellent, Randy. Excellent. I see room for interoperability at the control and command layer, and I still think that's where we eventually need to go, but you're right - until we figure out how to normalize the network and storage layers, that's not really going to help.   
  
I like your term "Differentiated value-added cloud services (VACS)" and will certainly adopt it. ;-)   
  
Lori

**[Krishna Sankar](#569 "2010-07-23 21:31:45"):** Agreed. Azure is a defensive posture - to make sure the Windows crowd doesn't migrate to some other clouds. Azure will never take away business from other clouds ...

**[Quora](#572 "2011-02-11 16:19:11"):** **What are the implications of the OpenStack project?...** I handled the implications at the launch: http://cloudscaling.com/blog/cloud-computing/does-openstack-change-the-cloud-game That should answer most of your questions....

**[kinlane](#2261 "2010-07-20 12:56:00"):** Great analysis. I think the OpenStack will potentially open the playing field with this new camp. Seems like startups embracing the OpenStack will more likey set themselves up for acquisition during the coming cloud consolidation rather than openly competing. I think enough providers are embracing the Amazon ecosystem for this same reason, to compete through interoperability and hoping to be acquired by Amazon. Its going to be an interesting cloud game over the next couple years.

**[Ray Nugent](#2262 "2010-07-20 12:57:00"):** Great post Randy! I think the key to the success of OpenStack depends on if the folks that adopt it can match the skill and innovation levels of companies like Amazon and Google. Big Telcos have the $ to build big clouds but can they innovate fast enough?

**[randybias](#2263 "2010-07-20 12:59:00"):** I agree completely. I doubt Amazon will acquire anyone however. They have no motivation nor track record to do so.

**[randybias](#2264 "2010-07-20 13:44:00"):** Ray, telcos won't be primary contributors here I am guessing. Some will, many won't. Businesses like Cloudscaling and smaller service providers will be more likely to be the primary community.

**[Dag Stenstad](#2265 "2010-07-20 14:34:00"):** I agree, telcos will not enter the market at this stage; Give them 2-3 years.

**[randybias](#2266 "2010-07-20 14:47:00"):** I am not certain what you mean. Telcos are already entering the market. We are launching several over the next year.

**[Davido](#2267 "2010-07-20 21:46:00"):** why no mention of microsoft and azure?

**[randybias](#2268 "2010-07-20 21:54:00"):** No particular reason. They simply weren't mentioned, although given the fact that Microsoft has significant execution problems and is building a Windows-only cloud it's hard to take them very seriously. Most businesses are heterogeneous and need a service provider with a proven track record. AFAICT, Microsoft's only "cloud" services that are likely to do well are their SaaS apps like hosted Exchange and Sharepoint.

**[Dmitriy](#2269 "2010-07-21 11:44:00"):** Great post, I especially liked this: "Where is the lock-in then? If it’s not the hypervisor, what makes moving from one cloud to another so difficult? Simply put, it’s architectural differences. Every cloud chooses to do storage and networking differently." I believe this is a key aspect from which one ought to look at cloud interop and Intercloud in general. On a side note, I recently wrote a post that is somewhat similar (I like yours much better!) but which looks at almost the same problem from a point of view of customer control (disclosure: my post is about CohesiveFT VPN-Cubed and I am the lead engineer for this product): [CohesiveFT VPN-Cubed as Networking Fabric of the Intercloud](http://somic.org/2010/06/23/cohesiveft-vpn-cubed-as-networking-fabric-of-the-intercloud/). Here is where I echo your point above: "Taking images of N boxes from one cloud and dropping them in another cloud is well understood, recreating one cloud’s networking in another cloud is where the challenge is."

**[Robert Jenkins](#2271 "2010-07-22 07:34:00"):** I'd echo Dmitriy's comments. The lock-in is associated with the supplier specific implementations of the higher levels of the cloud, not the hypervisor. It is tempting to want a standard implementation of IaaS architecture but we mustn't forget that computing in the cloud is heterogeneous. Some types of computing do better on certain implementations than others. As users become more sophisticated they will gravitate towards implementations that favour their computing profile. Just a few characteristics that make a huge difference to which cloud is best for you: \- do you need to rapidly deploy instances? \- are you a heavy disk user? \- do you have specific networking needs such as low latency? etc. etc. It isn't clear that one architecture is favourable for meeting differing user profiles. As in most sectors I believe some level of differentiation and specialisation will persist and this is healthy. Overall it will mean customers are better able to fulfil their needs and reach higher levels of performance. My personal preference is greater user control and openness. Most of our customers are coming from dedicated hosting environments, it isn't clear why IaaS platforms can't offer the same level of control to users that dedicated hardware does (the issue isn't a technical one). That's our approach anyway, it reduces the sort of architecture specific vendor lock-in that Randy so rightly raises as the real lock-in issue. Best wishes, Robert \-- Robert Jenkins Co-founder CloudSigma http://www.cloudsigma.com http://www.twitter.com/CloudSigma

**[randybias](#2272 "2010-07-22 13:32:00"):** Thanks. I agree with you re: networking. Of course, that isn't the only architectural difference. There are also particularities to storage, performance, and possibly security.

**[Lori MacVittie](#2273 "2010-07-22 14:57:00"):** Excellent, Randy. Excellent. I see room for interoperability at the control and command layer, and I still think that's where we eventually need to go, but you're right - until we figure out how to normalize the network and storage layers, that's not really going to help. I like your term "Differentiated value-added cloud services (VACS)" and will certainly adopt it. ;-) Lori

**[Krishna Sankar](#2274 "2010-07-23 21:31:00"):** Agreed. Azure is a defensive posture - to make sure the Windows crowd doesn't migrate to some other clouds. Azure will never take away business from other clouds ...

**[hyper-v](#3087 "2011-11-01 01:13:00"):** please tell me How can it create an effective third camp alternative to Amazon and VMware for an entire cloud? you explain very well but where i can get more information about this..

