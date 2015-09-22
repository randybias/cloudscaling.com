---
author: Randy Bias
comments: true
date: 2009-09-02 15:00:45+00:00
layout: post
slug: vmwares-vcloud-api-forces-cloud-standards
title: VMware's vCloud API Forces Cloud Standards
wordpress_id: 526
tags:
- Cloud Applications
---

We're in the midst of a monumental transformation of the IT space, namely cloud computing, and the transformation _is stalled_.  Or, it was, until today when VMware released their [vCloud API](http://communities.vmware.com/community/developer/forums/vcloudapi) at [VMworld](http://www.vmworld.com/index.jspa) under an extremely [permissive license](http://communities.vmware.com/static/vcloudapi/vCloud_API_Specification_v0.8.pdf).  A FAQ is [here](http://communities.vmware.com/docs/DOC-10659). So what's the big deal you say?

**What's at Stake: IT's Transformation**
Simply put, we're on the cusp of a major change in the way that IT does business.  To date the enterprise datacenter has been a blackbox, owned and controlled by IT and with little or no insight from business owners.  This is about to change.

Nick Carr said it best in [Does IT Matter?](http://www.nicholasgcarr.com/doesitmatter.html)


... IT's transformation from a set of proprietary and heterogeneous systems into a shared and standardized infrastructure is a natural, necessary, and healthy process.  It is only by becoming an infrastructure -- a common resource -- that IT can deliver its greatest economic and social benefits.


Right now IT is in the same state that manufacturing processes were before the massive popularization of [assembly lines](http://en.wikipedia.org/wiki/Assembly_line) by the Ford Motor Company.  Although the assembly line had been invented before, FMC and Henry Ford helped make it a de facto standard.

One hundred years later, the science around manufacturing processes is so good that businesses can run large plants overseas and create high quality products, using repeatable processes, just-in-time delivery and advanced inventory management.

Best of all, business owners can measure the value of the work that the manufacturing process and people provide.  IT, through cloud computing, can do the same, and in a lot less than 100 years if we put some real intention behind it.

**Cloud Computing as Business Enablement**
One of the core propositions of cloud computing that I regularly espouse is the notion of 'cloud' being an operational process change and NOT a technology or simple [outsourcing](http://cloudscaling.com/blog/cloud-computing/the-cloud-is-not-outsourcing).  This is frequently lost in the hype around '[auto-scaling](http://cloudscaling.com/blog/technology/auto-magical-scaling)' and such.  By an operational process change I mean two-fold:



	
  1. Creation of 'self-service' IT for cloud consumers

	
  2. Extensive automation for IT itself, allowing a self-service delivery model


By 'self-service' I mean: on-demand, pay-as-you-go, and use-only-what-you-need.  By automation, I mean removing the human element in provisioning and managing IT infrastructure.

Whether you realize it or not, right now IT is largely a craftsman's trade whereby apprentices learn from masters.  It has been unable, despite the best intentions, to evolve into a disciplined profession like manufacturing by itself without a forcing function.[1]

Cloud computing **is** that forcing function and CIOs everywhere are waking up to it.

**Infrastructure, Infrastructure, Infrastructure**
Revisiting Nick Carr's quote again (above), the key element that jumps out at you is that IT infrastructure must become like any other kind of business infrastructure, be it power, highways, railroads, or telephone service.  Despite IT's traditional desire to be kingmaker, just like other infrastructure, it provides no inherent competitive advantage.  It is plumbing. Just regular old plumbing.  Plumbing is good.  Great plumbing is awesome.  It adds business value, but not competitive advantage.  If it is not a competitive advantage then large enterprise businesses MUST not spend more resources than necessary on IT.[2]

Perhaps more importantly, to derive the maximum value from cloud computing's disruptive force, we must have standards.  De facto or otherwise.  How would the railway systems work without standard track gauges?  What about telecommunications systems?  Or the national power system?  The answer is that they can't.

Standards are critical to the success of cloud computing and it's ability to transform IT into a business enabler that can be run transparently like many other parts of the business.

_The data center can no longer be a black box!_

**VMware's vCloud API**
Enter VMware, who today released their vCloud API under a very permissive license[3].  The vCloud API is by no means perfect.  In fact, I'd say it has serious warts.  What it will hopefully become is a de facto standard.  Early this year when I was CTO of GoGrid and saw this lack of standards becoming a major blocker for customers, I pushed to open license the GoGrid API, which also inspired Sun and Rackspace to follow suit.  What it did NOT do, was create a standard.  I worked with the Open Grid Forum's (OGF) Open Cloud Computing Interface (OCCI) group, but that also stalled and failed to achieve any significant backing from industry.

Every single player out there, starting with Amazon Web Services (AWS), has gone and created their own, entirely incompatible cloud computing standards.  Much of the reason why everyone hared off on their own is a reaction to the earlier boondoggle around [Web Service](http://en.wikipedia.org/wiki/Web_service) (WS-*) standards.[4]

Regardless, VMware is now pushing the issue, by not only releasing their vCloud API, but releasing it under a license that let's anyone copy, extend, and reuse it.  Let's be painfully clear:  _You can copy and run the vCloud API on any cloud, even one powered by the Xen hypervisor_.  VMware's weight in the industry practically assures that it will be adopted widely. In fact, they launched the vCloud API with support from five cloud computing providers including Terremark and Savvis.

To put this in perspective, yesterday [RightScale](http://www.rightscale.com), a well-known cloud management services vendor, supported four cloud computing providers.  Today they support 9, because all 5 new vendors support the vCloud API.  Any new cloud that comes online will be highly incentivized to support this API because all of the tools written to it, whether for an internal or external cloud, will work with their cloud out of the box.

This is it, people.  This is the beginning of the tectonic shift that cloud computing can become.  Once the railroad tracks are the same gauge everywhere we can start building real value on top of IT.



* * *

[1] Some will point at ITIL or CoBIT, but the reality is that documenting 'meatcloud' processes is not the same as removing the human from the equation; IT is more similar to manufacturing than to the legal or medical professions.  The legal and medical professions are predicated on delivering a certain kind of human talent or skill.  Manufacturing and IT are infrastructure and must be predicated on delivering repeatable, measurable, business value.
[2] This is a point that advocates of both internal and external cloud computing largely agree on.
[3] In the interest of full disclosure, you should be aware that I have been consulting with VMware's vCloud team on the API and related work.
[4] I will certainly get called out on this, but I'm simply repeating words and intentions I've heard from many of the people who did work on various WS-I and WS-* standards, including myself.  Web Service standards are adopted quite widely, but they have also been the target of immense lashback against their heavyweight nature, committee-driven decision-making process, and domination by vendors looking for a new way to sell more stuff into the enterprise.
