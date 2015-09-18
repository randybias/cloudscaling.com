---
author: Randy Bias
comments: true
date: 2008-05-30 06:34:56+00:00
layout: post
slug: short-sighted-about-cloud-computing
title: Short-Sighted about Cloud Computing
wordpress_id: 2352
old_categories:
- Cloud Computing
- Technology
tags:
- Storage
---

There seems to be a group myopia around so-called 'cloud computing' and it's definitions.  What we're really talking about are 'cloud services' of which, 'computing', is only a subset.  It gets worse when you have people talking about Software as a Service ([SaaS](http://en.wikipedia.org/wiki/SaaS)) as a 'cloud' service.  Things continue to become murkier when the SaaS crowd, bloggers, and reporters start making up new definitions for cloud services using SaaS-like terms such as Platform as a Service (PaaS) and Infrastructure as a Service (IaaS).

Soon we'll have Hosting as a Service (HaaS), Services as a Service (SVCaaS), and Name Your Flavor as a Service (*aaS, better known as just plain 'aaS').  Of course SaaS is just the re-hashing of the whole Application Service Provider (ASP) model from the late 90s anyway.  You remember?

Let me explain what cloud services are, where they came from, and where they are going.

**Cloud Services**
Cloud services are not SaaS.  They are far more akin to [web services](http://en.wikipedia.org/wiki/Web_service) and this is part of why Amazon's cloud services are simply called '[Amazon Web Services](http://www.amazonaws.com/)'.  Cloud services encompass a number of different kinds of service, but they share some common attributes with each other and web services, including:


  * simple point services meant to be integrated into a larger application


  * machine-consumable via network-based APIs (commonly [REST](http://en.wikipedia.org/wiki/REST) or [SOAP](http://en.wikipedia.org/wiki/SOAP))


  * 'infinitely scalable' (meaning: 'no practical limit')


  * in-the-cloud


  * self-service


  * on-demand


By contrast, most Software-as-a-Service products are fully-baked applications such as Salesforce.com's CRM application.  Another quick way to identify SaaS is that the user interface is usually the primary interface with the API being an afterthought.  In comparison, most cloud services have an API as the first interface and a UI as a
 secondary interface if one even exists.

**Cloud vs. Web Services**
Web services are historically a large business (i.e. 'enterprise') based technology trend.  SOAP and the WS-* standards defined web services and their consumption.  Web  services, for this reason, existed mostly behind the firewall and were created and consumed within large organizations.  Cloud services are similar to web services, but differ in terms of who uses them and where they are deployed (i.e. 'in the cloud').

Cloud services are _fundamentally game changing_, where web services are just 'ho-hum'.  They are the final democratization and commoditization of 'web services' out in the cloud, usually created by many different organizations, and consumed by anyone.  This is a natural response to market forces seeking to have more control, scale, and usage from 'web services'.  Web services, like most recent Internet related technologies are more interesting when the power of 'the net' is applied.  In other words:


<blockquote>
web services ('ho-hum') + network effect == cloud services ('holy cow!')
</blockquote>



If nothing else shows us how much cloud services look like web services, then 'Amazon Web Services' product offerings should.  A short list of what they provide:


  * Compute


  * Storage


  * Database


  * Messaging / Queuing


  * Payment processing


  * Search


As you can see, these are all simple point applications, consumable via an API, for use as part of a larger application and of minimal use by themselves.  They are **not** even marginally related to SaaS.  As individual services they aren't terribly interesting, but in terms of their ability to provide you leverage for your application, to quickly accelerate some need that you have when initially developing, or to allow you to get a large amount of '[scale](http://neotactics.com/blog/technology/auto-magical-scaling/)' once you grow is of tremendous value.

**Clouds as Platforms and Infrastructure (aaS)**
[This recent RightScale blog entry](http://blog.rightscale.com/2008/05/26/define-cloud-computing/) inspired this post and what I think they are really talking about here is breaking 'cloud services' down into two main old_categories: platform-based models and infrastructure-based models.  Both of these are defined fairly well in the RightScale blog posting (other than the association with SaaS terms).  What is important to notice is that this isn't an either/or situation.  You don't need to pick one or the other: platform or infrastructure.  You'll almost certainly wind up using both.

Build your prototype in Google's [AppEngine](http://appengine.google.com) and have it use Amazon's Flexible Payment System (FPS) to process payments.  Or build it on Amazon's Elastic Compute Cloud (EC2) and have it use Google Checkout.  Do what is right for your application.

**Cloud Service Trends**
The continued trend is towards self-service, democratized, vote-with-your-dollars, cloud services that can be used to composite together or bolster your application development, decrease time to market, and provide new kinds of software development leverage.  This means that cloud service providers, and the developers who build value added services on top of them, need to compete using strategies where their services have inherent synergies (a la the AWS 'ecosystem'), on service or service level agreements, or by continuing to innovate in advance of competitors.  Right now it looks like Amazon is doing this across the board while most others are playing catchup.

The continued driving forces will be ease-of-use, choice, and ability to use cloud services as part of larger applications for startups, small businesses, and soon larger enterprises.

**Future of Cloud Services**
The future of cloud services is one where you will select and composite the best (or cheapest) services for your application.  Some combination of services will be right for your application and the tools that help you build and put together these services will be critical to your success.  This means that tools that support multiple providers or abstract them in such a way that ease your ability to integrate and consume them will be clear winners.
