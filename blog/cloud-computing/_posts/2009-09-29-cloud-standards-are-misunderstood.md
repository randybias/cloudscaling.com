---
title: 'Cloud Standards are Misunderstood'
link: http://cloudscaling.com/blog/cloud-computing/cloud-standards-are-misunderstood/
author: randybias
description: 
post_id: 563
created: 2009/09/29 08:06:14
created_gmt: 2009/09/29 15:06:14
comment_status: open
post_name: cloud-standards-are-misunderstood
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Cloud Standards are Misunderstood

Create them now and stifle innovation or create them later when it's too late? That seems to be the breadth of the discussion on cloud standards today. Fortunately, the situation with cloud computing standards is not actually this muddy. In spite of the passionate arguments, the reality is that we need cloud standards both today and tomorrow. In this posting I'll explore the cloud standards landscape. **Thousands of Different Standards** Earlier this year was one of the first attempts at getting folks together to talk about cloud standards at the January [Cloud Interop Session](http://www.tbray.org/ongoing/When/200x/2009/01/20/Cloud-Interop) (an early get together of like-minded stakeholders). There were such luminaries as [Tim Bray](http://www.tbray.org) (author of many standards, including [XML Namespaces](http://www.w3.org/TR/xml-names/) and the like), [Winston Bumpus](http://www.dmtf.org/about/officers/bios) (head of the [DMTF](http://www.dmtf.org) standards body), and many more. The conversation was brisk, very opinionated, and contentious. Two main threads of agreements arose: first, that there would be hundreds to possibly thousands of standards and second that the different standards constituencies were all over the map. You see, just as cloud computing has been hard to pin down, so has any handful of use cases, although some are trying to [nail them down now](http://opencloudmanifesto.org/Cloud_Computing_Use_Cases_Whitepaper-1_0.pdf) (PDF). 'Cloud' can encompass so much. Some would say that anywhere you see 'cloud' you could simply substitute with 'Internet' or 'IT' and have the same meaning. Regardless, the important take away was that there are many, many areas for building standards, including, but not limited to: 

  * Cloud storage interface, control, & management APIs
  * Software-as-a-Service (SaaS) data exchange and interoperability
  * Identity management and authentication
  * SLAs & performance monitoring & metrics
  * Infrastructure-as-a-Service (IaaS) control & management APIs
  * Platform-as-a-Service (PaaS) control & management APIs
[caption id="attachment_564" align="alignright" width="368" caption="Figure 1. Cloud Stack with Target Customers"]![Figure 1. Cloud Stack with Target Customers]({{ site.url }}/assets/media/2009/09/cloud-stack-with-target-customers-1024x776.png)[/caption] If you go back to the original 3-layer 'cloud stack' that most use as a starting point for any cloud conversation (see Figure 1. right), it's worth noticing that software (applications), platforms, and infrastructure all solve different problems and have different stakeholders with different concerns. On top of this, there is quite a bit of interdependence between the layers[1]. The result is that each layer, each stakeholder, and each technology have different needs that must be  met through standardization. This will result in the hundreds to thousands of standards predicted earlier this year at the Cloud Interop Session. **The Arguments** With just a little searching you will find two main arguments for and against standards, both of which are largely misguided. The first argument goes something like this: 

> If we spend too much time creating cloud standards now, we'll stifle innovation and slow down cloud computing adoption. Just look at the Web Services (e.g. WS-*, WS-I, and SOAP) initiatives!

I've been guilty of this particular perspective myself, but have begun to see the light. More in a moment... The second argument goes something like this: 

> If we don't create standards sooner cloud computing will become a giant morass of competing proprietary standards that will impede progress and slow cloud computing adoption.

What you don't usually hear is the middle-ground argument, which is where I sit now: 

> We need some cloud standards now and some later. We need to prioritize those standards upon which others will be built as standards don't appear in isolation. We need to be smart and keep the foundational standards simple and easy to extend, while laying the groundwork for more standards in the future.

Why does this make sense? Because standards evolve in a continuum. They aren't created all at once and they do have interrelationships, just like the elements of the cloud stack above. **Historical Trends** Take the mother of all Internet standards, the [RFCs](http://en.wikipedia.org/wiki/Request_for_Comments) (aka 'Request For Comments'). The RFCs are where most Internet protocols and standards are specified such as sending e-mail ([SMTP](http://www.faqs.org/rfcs/rfc821.html)), browsing websites ([HTTP](http://www.faqs.org/rfcs/rfc1945.html)), and sending instant messages ([Jabber](http://www.ietf.org/rfc/rfc3920.txt)). The very foundations of how network traffic is sent and delivered via [TCP/IP](http://www.faqs.org/rfcs/rfc793.html) are defined in the RFCs, including [extensions](http://www.ietf.org/rfc/rfc1323.txt) to that very protocol. It might be hard to believe, but many of these protocols are much older than the web itself, pre-dating websites, such as SMTP, which was created in 1982. Many of them were written by only one or a handful of people. Most of the early protocols are relatively simple, easy to grasp and implement, and easy to extend. Over time, important additional standards were created that ride on top of earlier work, such as [authenticating mail senders](http://www.faqs.org/rfcs/rfc2554.html). When looking at what needs to happen with cloud standards, we need to model the early RFC approach. Small, focused groups, delivering small, focused standards that solve foundational issues. A great example is the VMware [vCloud API](http://www.vmware.com/go/vcloudapi). It's not perfect, it doesn't cover every case, but it's reasonably clear, and it's "good enough" for most IaaS providers to adopt now. More importantly, it's easily extended[2]. So where should we go from here? **Charting a Course** It's far beyond the scope of this posting to create a roadmap for cloud standards. This will necessarily be a grass roots effort. My purpose here is to call BS on the extremists. Yes, spending too much time on cloud standards now will stifle innovation. Yes, **not** spending any time will also stifle adoption. We need the right amount of standardization at the right time and this usually means_ allowing the market to drive standards creation_. Imagine that. From my vantage the short term standards that matter are the simple control & management APIs for the lower layers of the 'cloud stack'. Obviously, that means [standards for controlling infrastructure](http://www.occi-wg.org/doku.php) are of pre-eminent importance with platforms (PaaS) following right behind. Standards for control of applications (SaaS) will be difficult and probably vertical driven. Looking from the perspective of the technologies instead of the cloud stack layers, clearly those foundational pieces of infrastructure such as storage, compute, and networking all require early standards for managing, controlling, and reporting.

## Comments

**[William](#287 "2009-09-29 09:27:07"):** "Perhaps a little overlooked at the moment are those technologies that provide ‘glue’ across the entire cloud stack. Monitoring and particularly identity management and authentication spring to mind." That's the key part of your blog. Add to it a resource access model (i.e. reconcile the different flavors of pseudo-REST of the different APIs). And a discovery/catalog.  
  
Getting this plumbing right and shared is the first step.  
  
Standardizing the different resource models (VM, cluster, app, volume...) for IaaS, PaaS and SaaS can wait.  
  
The current Cloud specs (vCloud, Sun API and others) make the mistake of mixing the interaction framework w/ the resource model. For more on this see <http://stage.vambenepe.com/archives/943>.

**[joedrumgoole](#288 "2009-10-01 01:07:18"):** Randy,  
  
What made RFCs so compelling was the useful ones were always delivered with a reference implementation. The reason W* turned out to be such a fiasco is that the web services standards were rarely grounded in an real world understand that comes from building the actual software. We are falling into the same trap with Cloud Standards with all kinds of crazy assed architectural standards emerging that are devoid of implementation.

**[randybias](#289 "2009-10-01 07:34:39"):** Great comment, Joe! You are, of course, correct. RFCs were about "rough consensus" and "running code". This is an oversight in this article. I will try and see if I can amend the article to call this out without changing it overly much.  
  
I expect you will see reference implementations start to appear next year along with their APIs, starting with VMware's vCloud product, when it ships.

**[edwardmgoldberg](#290 "2009-10-30 12:22:42"):** Randy,  
  
You are missing my Layer: WaaS Watching as a Service.  
  
To make the Cloud work for real projects you still need OPs.  
  
The myCLoudWatcher project I provide adds the WaaS Layer to the Stack.  
  
Without a CloudWatcher like me in the equation you are still only an ISP.  
  
Edward M. Goldberg  
<http://myCloudWatcher.com/>

**[randybias](#291 "2009-10-31 11:42:38"):** Thanks for the comment, Ed. The ops layer is definitely important!

**[Kim Won](#293 "2010-07-09 22:42:06"):** Hi,  
Saltmarch Media is organizing its third season of Business Technology Summit which is going to take place on 11 and 12 Nov'10 in Bangalore. The summit features topics like Cloud Computing, Cloud standards, Cloud Services, Cloud Development, Soa, Saas and more. For details log on to [www.btsummit.com](http://www.btsummit.com)

**[William](#1087 "2009-09-29 08:27:00"):** "Perhaps a little overlooked at the moment are those technologies that provide ‘glue’ across the entire cloud stack. Monitoring and particularly identity management and authentication spring to mind." That's the key part of your blog. Add to it a resource access model (i.e. reconcile the different flavors of pseudo-REST of the different APIs). And a discovery/catalog. Getting this plumbing right and shared is the first step. Standardizing the different resource models (VM, cluster, app, volume...) for IaaS, PaaS and SaaS can wait. The current Cloud specs (vCloud, Sun API and others) make the mistake of mixing the interaction framework w/ the resource model. For more on this see <http://stage.vambenepe.com/archives/943>.

**[joedrumgoole](#1088 "2009-10-01 00:07:00"):** Randy, What made RFCs so compelling was the useful ones were always delivered with a reference implementation. The reason W* turned out to be such a fiasco is that the web services standards were rarely grounded in an real world understand that comes from building the actual software. We are falling into the same trap with Cloud Standards with all kinds of crazy assed architectural standards emerging that are devoid of implementation.

**[randybias](#1089 "2009-10-01 06:34:00"):** Great comment, Joe! You are, of course, correct. RFCs were about "rough consensus" and "running code". This is an oversight in this article. I will try and see if I can amend the article to call this out without changing it overly much. I expect you will see reference implementations start to appear next year along with their APIs, starting with VMware's vCloud product, when it ships.

**[edwardmgoldberg](#1125 "2009-10-30 11:22:00"):** Randy, You are missing my Layer: WaaS Watching as a Service. To make the Cloud work for real projects you still need OPs. The myCLoudWatcher project I provide adds the WaaS Layer to the Stack. Without a CloudWatcher like me in the equation you are still only an ISP. Edward M. Goldberg http://myCloudWatcher.com/

**[randybias](#1126 "2009-10-31 10:42:00"):** Thanks for the comment, Ed. The ops layer is definitely important!

**[Kim Won](#2250 "2010-07-09 22:42:00"):** Hi, Saltmarch Media is organizing its third season of Business Technology Summit which is going to take place on 11 and 12 Nov'10 in Bangalore. The summit features topics like Cloud Computing, Cloud standards, Cloud Services, Cloud Development, Soa, Saas and more. For details log on to www.btsummit.com

