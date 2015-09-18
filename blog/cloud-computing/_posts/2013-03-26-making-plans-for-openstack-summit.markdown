---
author: Teri Elniski
comments: true
date: 2013-03-26 14:35:39+00:00
layout: post
slug: making-plans-for-openstack-summit
title: Making Plans for OpenStack Summit
wordpress_id: 5824
old_categories:
- Cloud Computing
- OpenStack
tags:
- Nova
- OpenStack
- Swift
- ZeroMQ
---

We’re three weeks away from the biggest gathering of OpenStack community members yet. Nearly 2,200 developers, users, investors, media and analysts will descend on the Oregon Convention Center for the [OpenStack Summit](http://www.openstack.org/summit/portland-2013/) April 15-18.

Cloudscaling will be there in force, with six presentations (well, five plus one panel), and customers of Open Cloud System on hand to talk about building clouds with OpenStack and Open Cloud System.

We'll even have some news to announce.

Frequent readers of this blog know that Cloudscaling was among the first commercial entities to[ publicly support OpenStack](http://www.cloudscaling.com/blog/cloud-computing/does-openstack-change-the-cloud-game/), and that our OpenStack-based Open Cloud System is in production environments for multiple customers.

What you might not know is that Cloudscaling was the first company to deploy a Nova compute public cloud, and we were the first to deploy a Swift storage public cloud outside of Rackspace. We’re a founding member of the OpenStack Foundation and a charter Gold Corporate Sponsor. Co-founder and CTO Randy Bias has served on the Foundation board since its inception, and Cloudscaling is a top-ten code contributor to the project, including ZeroMQ messaging, RPC abstraction layer,[ APIs for Google Compute Engine](http://www.cloudscaling.com/blog/press-releases/cloudscaling-bringing-google-compute-engine-apis-to-openstack-project/) and security improvements. The second version of our OpenStack-based product, OCS, is in GA.

In other words, we’re all-in on OpenStack. And the presentations our engineering team will give in Portland reflect that.

Review the session descriptions below, and come check out those sessions that address the questions you have about deploying OpenStack. Here’s the [full schedule](http://openstacksummitapril2013.sched.org/). There's plenty to choose from.

 

[PANEL: Vendor discussion about RAs -> battle for a winner — Randy Bias](http://openstacksummitapril2013.sched.org/event/f75b118404a89ede6f91efb2ff5a83a7#)

April 16, 1:50 pm

Operations Summit: Design summit-style technical working sessions to discuss and refine best practices for deploying and operating OpenStack installations.

**** ****

[State of the Stack — Randy Bias](http://openstacksummitapril2013.sched.org/event/bda9ee96cffc139b2fc0822f93306448#.UU8vJltAS98)

April 17, 11:00 am

OpenStack is the fastest growing open source movement in history, but its marketing momentum has largely outrun its technology growth. Why are organizations so eager to embrace OpenStack? Some components – like Swift – are ready for prime time. But others – like Horizon and Quantum – are still evolving. What needs the most attention: networking, storage, compute, or something else? Where are the reference architectures and real world deployments? How are different product and service companies implementing OpenStack in production today? We'll go beyond the hype and dig deep on OpenStack, exploring all that is great and all that needs serious work. Attendees will leave with a firsthand account of the State of the Stack, ready to help their organizations embrace OpenStack armed with practical knowledge.

****  
  
****

[Scale-out Block Storage: There's a Reason AWS EBS Looks the Way it Does — Randy Bias and Eric Windisch ](http://openstacksummitapril2013.sched.org/event/fb6544921a45bdf27042724a60e90d49#)

April 18, 9:30 am

Existing approaches to delivering persistent block storage in OpenStack focus on integrating existing SAN/NAS hardware solutions, using Distributed File Systems (DFS), or using simple Direct Attached Storage (DAS) with Cinder. There is another alternative: scale-out block storage nodes with intelligent scheduling. This is the same approach that Amazon Web Services (AWS) uses for Elastic Block Storage (EBS) and it's worth taking a close look at the pros and cons. This presentation will explore the differences between SAN, NAS, DFS, DAS, and EBS. We will look at the implicit and explicit contracts that users and operators get from the different approaches and look at a variety of failure conditions. EBS may not be right for some clouds, but for many it's an important and viable alternative to the existing approaches.

**** ****

[Folsom Security in Review — Matt Joyce](http://openstacksummitapril2013.sched.org/event/14020a2119c1e055140ad6cbbf2c65cd#)

April 18, 3:20 pm

This talk is a breakdown of security concerns relating to the OpenStack Folsom Release. The purpose of this talk is to look at past vulnerabilities in Folsom, existing security models, and emerging technologies that will impact those models. The presentation will follow the flow of describing several deployment models in terms of their security attributes. The next phase will be the discussion of specific protocols in use and their individual security characteristics. I will present statistics on where past vulnerabilities have been found and reported allowing us to consider how we can better address security in our continuous integration processes. The goal of this talk is to present a map of where we are today, and expose some of the issues we have yet to face.

**** ****

[Networking is NOT Free: Lessons in Network Design — Dan Sneddon](http://openstacksummitapril2013.sched.org/event/98f2d8ca88bbc23cc26be28c7502b0b5#)

April 18, 4:10 pm

This presentation will be an in-depth critique of the existing OpenStack networking approach, with a focus on how the Nova network controller is more of a hindrance than a help. We will also discuss the gap in Quantum's functionality required to close the gap, and alternative solutions. How can we make networking in OpenStack robust, high performance, and fault tolerant? What do typical large scale networks look like and what lessons can we learn from them? Is there an approach to networking we can take that is the same with a handful of servers as it is with hundreds of racks?

**** ****

[Securing OpenStack's Underside: True Computing — Eric Windisch](http://openstacksummitapril2013.sched.org/event/9cc051b1d6bf6eaeea856bbda1460f9f#)

April 18, 5:00 pm

There have been a number of premature attempts to provide a trusted computing platform for IaaS software. However, all have met with failure and a lack of mass market adoption. What would be required to solve this problem for real and deliver "true" computing? True computing requires the ability to have a trusted chain of events related to the provisioning and deployment of hardware and software. It requires integration to the supply chain with installation of initial keys at the hardware vendor's site, secure PXE booting, system attestation, and robust key management. None of this is easy or free, but what would it look like if OpenStack could become the first truly trusted cloud system? How would it integrate with the current 'trusted-messaging' blueprint? Would it make CloudAudit's API more relevant?
