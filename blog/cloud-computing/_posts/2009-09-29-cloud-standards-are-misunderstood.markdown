---
author: Randy Bias
comments: true
date: 2009-09-29 15:06:14+00:00
layout: post
slug: cloud-standards-are-misunderstood
title: Cloud Standards are Misunderstood
wordpress_id: 563
old_categories:
- Cloud Computing
---

Create them now and stifle innovation or create them later when it's too late?  That seems to be the breadth of the discussion on cloud standards today.  Fortunately, the situation with cloud computing standards is not actually this muddy.  In spite of the passionate arguments, the reality is that we need cloud standards both today and tomorrow.  In this posting I'll explore the cloud standards landscape.

**Thousands of Different Standards**
Earlier this year was one of the first attempts at getting folks together to talk about cloud standards at the January [Cloud Interop Session](http://www.tbray.org/ongoing/When/200x/2009/01/20/Cloud-Interop) (an early get together of like-minded stakeholders).  There were such luminaries as [Tim Bray](http://www.tbray.org) (author of many standards, including [XML Namespaces](http://www.w3.org/TR/xml-names/) and the like), [Winston Bumpus](http://www.dmtf.org/about/officers/bios) (head of the [DMTF](http://www.dmtf.org) standards body), and many more.  The conversation was brisk, very opinionated, and contentious.  Two main threads of agreements arose: first, that there would be hundreds to possibly
thousands of standards and second that the different standards constituencies were all over the map.

You see, just as cloud computing has been hard to pin down, so has any handful of use cases, although some are trying to [nail them down now](http://opencloudmanifesto.org/Cloud_Computing_Use_Cases_Whitepaper-1_0.pdf) (PDF).  'Cloud' can encompass so much.  Some would say that anywhere you see 'cloud' you could simply substitute with 'Internet' or 'IT' and have the same meaning.  Regardless, the important take away was that there are many, many areas for building standards, including, but not limited to:



	
  * Cloud storage interface, control, & management APIs

	
  * Software-as-a-Service (SaaS) data exchange and interoperability

	
  * Identity management and authentication

	
  * SLAs & performance monitoring & metrics

	
  * Infrastructure-as-a-Service (IaaS) control & management APIs

	
  * Platform-as-a-Service (PaaS) control & management APIs


[caption id="attachment_564" align="alignright" width="368" caption="Figure 1. Cloud Stack with Target Customers"]![Figure 1. Cloud Stack with Target Customers](/assets/media/2009/09/cloud-stack-with-target-customers-1024x776.png)[/caption]

If you go back to the original 3-layer 'cloud stack' that most use as a starting point for any cloud conversation (see Figure 1. right), it's worth noticing that software (applications), platforms, and infrastructure all solve different problems and have different stakeholders with different concerns.  On top of this, there is quite a bit of interdependence between the layers[1].  The result is that each layer, each stakeholder, and each technology have different needs that must be  met through standardization.

This will result in the hundreds to thousands of standards predicted earlier this year at the Cloud Interop Session.

**The Arguments**
With just a little searching you will find two main arguments for and against standards, both of which are largely misguided.  The first argument goes something like this:


If we spend too much time creating cloud standards now, we'll stifle innovation and slow down cloud computing adoption.  Just look at the Web Services (e.g. WS-*, WS-I, and SOAP) initiatives!


I've been guilty of this particular perspective myself, but have begun to see the light. More in a moment...

The second argument goes something like this:


If we don't create standards sooner cloud computing will become a giant morass of competing proprietary standards that will impede progress and slow cloud computing adoption.


What you don't usually hear is the middle-ground argument, which is where I sit now:


We need some cloud standards now and some later.  We need to prioritize those standards upon which others will be built as standards don't appear in isolation.  We need to be smart and keep the foundational standards simple and easy to extend, while laying the groundwork for more standards in the future.


Why does this make sense?  Because standards evolve in a continuum.  They aren't created all at once and they do have interrelationships, just like the elements of the cloud stack above.

**Historical Trends**
Take the mother of all Internet standards, the [RFCs](http://en.wikipedia.org/wiki/Request_for_Comments) (aka 'Request For Comments').  The RFCs are where most Internet protocols and standards are specified such as sending e-mail ([SMTP](http://www.faqs.org/rfcs/rfc821.html)), browsing websites ([HTTP](http://www.faqs.org/rfcs/rfc1945.html)), and sending instant messages ([Jabber](http://www.ietf.org/rfc/rfc3920.txt)).  The very foundations of how network traffic is sent and delivered via [TCP/IP](http://www.faqs.org/rfcs/rfc793.html) are defined in the RFCs, including [extensions](http://www.ietf.org/rfc/rfc1323.txt) to that very protocol.

It might be hard to believe, but many of these protocols are much older than the web itself, pre-dating websites, such as SMTP, which was created in 1982.  Many of them were written by only one or a handful of people.  Most of the early protocols are relatively simple, easy to grasp and implement, and easy to extend.  Over time, important additional standards were created that ride on top of earlier work, such as [authenticating mail senders](http://www.faqs.org/rfcs/rfc2554.html).

When looking at what needs to happen with cloud standards, we need to model the early RFC approach.  Small, focused groups, delivering small, focused standards that solve foundational issues.  A great example is the VMware [vCloud API](http://www.vmware.com/go/vcloudapi).  It's not perfect, it doesn't cover every case, but it's reasonably clear, and it's "good enough" for most IaaS providers to adopt now.  More importantly, it's easily extended[2].

So where should we go from here?

**Charting a Course**
It's far beyond the scope of this posting to create a roadmap for cloud standards.  This will necessarily be a grass roots effort.  My purpose here is to call BS on the extremists.  Yes, spending too much time on cloud standards now will stifle innovation.  Yes, **not** spending any time will also stifle adoption.  We need the right amount of standardization at the right time and this usually means_ allowing the market to drive standards creation_.  Imagine that.

From my vantage the short term standards that matter are the simple control & management APIs for the lower layers of the 'cloud stack'.  Obviously, that means [standards for controlling infrastructure](http://www.occi-wg.org/doku.php) are of pre-eminent importance with platforms (PaaS) following right behind.  Standards for control of applications (SaaS) will be difficult and probably vertical driven.

Looking from the perspective of the technologies instead of the cloud stack layers, clearly those foundational pieces of infrastructure such as storage, compute, and networking all require early standards for managing, controlling, and reporting.

Perhaps a little overlooked at the moment are those technologies that provide 'glue' across the entire cloud stack.  Monitoring and particularly identity management and authentication spring to mind.  Security as well.  If an Enterprise wanted to widely adopt many external cloud services, just how would they go about managing their internal users and their usage?  Would they provide federated identity via [SAML](http://en.wikipedia.org/wiki/SAML) services?  [OpenID](http://en.wikipedia.org/wiki/OpenID)?  [OAuth](http://en.wikipedia.org/wiki/OAuth)?  What's the best mechanism?  What works every where?  You would be surprised to know that it's quite a mess.  None of these work on every cloud for every use case.

**Conclusion**
Ignore the extremists, cloud standards will arise naturally from market pressures.  Cloud providers should measure customer demand and respond to it.  Cloud vendors should listen carefully to input from providers and enterprises alike.  Enterprises should begin planning and strategizing an integrated approach to consuming both internal and external cloud services.

Look for areas of opportunity, work with smaller groups to drive simpler standards.  Attempt to operate out of your own myopic world view.  Avoid standards by committees or vendor-driven ratholes.  Look to successful standardization attempts in history.

Most importantly, use your sense of what needs to happen now, not later.  Standards are a continuum, not a final destination.



* * *

[1] I plan on covering this in more detail in another blog posting soon.
[2] The same can certainly be said of other IaaS cloud API standards, but as I've said before, VMware's vCloud is the only one that currently has adoption by more than one service provider.  Another important standard to keep an eye on is the vCloud competitor from the Open Cloud Computing Interface ([OCCI](http://www.occi-wg.org/doku.php)) team at OGF.
