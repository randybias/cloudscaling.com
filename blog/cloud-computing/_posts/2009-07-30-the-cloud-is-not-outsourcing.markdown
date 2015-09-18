---
author: Randy Bias
comments: true
date: 2009-07-30 22:13:17+00:00
layout: post
slug: the-cloud-is-not-outsourcing
title: The 'Cloud' Is NOT Outsourcing
wordpress_id: 451
old_categories:
- Cloud Computing
tags:
- Automation
- cio
- cloud
- definitions
- enterprise
- vmware
---

There was recently a small brouhaha on twitter regarding whether a 'private' or 'internal' cloud is really a 'cloud'.  There was a very high level of chatter including a ton of the clouderati such as [@jamesurquhart](http://twitter.com/jamesurquhart), [@samcharrington](http://twitter.com/samcharrington), [@boblozano](http://twitter.com/boblozano), [@jesserobbins](http://twitter.com/jesserobbins), [@ITKLcameron](http://twitter.com/ITKLcameron), [@samj](http://twitter.com/samj), and many more.  The argument of the folks who claim that internal clouds aren't **really** clouds is best [summarized](http://twitter.com/GeorgeReese/status/2895192297) by [@GeorgeReese](http://twitter.com/GeorgeReese), who essentially said clouds must be:



	
  1. Virtualized

	
  2. Outsourced

	
  3. Utility Charge Model (pay by the hour, with no contracts)


My purpose in this particular post is not to pick on George.  He's a super sharp guy, who literally wrote the book on [Cloud Application Architectures](http://oreilly.com/catalog/9780596156367/) (with an Appendix by yours truly).  George has a point of view that is worthy of consideration; however, I disagree with it and I want people to understand why internal clouds are still 'cloudy'.  More importantly, I'd like them to know that internal clouds are going to be where some of the biggest game-changing in the cloud computing space happens.

<!-- more -->

**The Problem with the Outsourcing Argument**
The fundamental issue with the outsourcing argument is the perspective viewpoint.  It's best summed up, again by @GeorgeReese as "[not my problem](http://twitter.com/GeorgeReese/status/2895495010)":


<blockquote>@samcharrington Not having hardware or assets to manage is the most interesting part of the cloud (not my problem)</blockquote>


What I think George means here is that from the perspective of the cloud consumer a primary value proposition of the cloud is that it abstracts and hides away the details and pains normally associated with delivering these services.  He argues this is why you can never have an internal cloud, because you own the hardware, you must deal with the 'pain' associated with managing those assets, both operationally and fiscally.

This is where the argument breaks down.  If I'm a developer in a departmental team inside a large enterprise and I can go to either a public cloud or an internal cloud and the experience is just the same then from my perspective they are both clouds.  Both are "not my problem".

One can argue that from the perspective of that particular business it's clearly got ownership and as an entity that means their internal cloud is 'not cloud', but if we spend only a few seconds looking at this it breaks down quickly:



	
  * What if the 'internal cloud' is run by someone else (like IBM)?

	
  * What if it's part of a separate business unit that is spun out into a separate business?


The notion that outsourcing is special about cloud is wrong, but the notion of "it's not my problem" is spot on.

**It's Not My Problem**
Perhaps one of the more interesting arguments of the anti-"internal cloud" crowd is the "it's not my problem" claim.  I think this is just another way of saying '[self-service](http://cloudscaling.com/blog/cloud-computing/clouds-are-inherently-self-service)'.  Again, as is becoming a mantra for me, self-service means on-demand, pay-as-you-go, and use-only-what-you-need.  The consumer of cloud services does not want to deal with the pain of running the service itself.  They simply wish to consume those cloud services quickly and efficiently.

_This holds true whether the cloud is internal or external._

**What Problem Does the Internal Cloud Solve?**
There is an imminent issue for large enterprises around how they deliver IT services internally.  The problem is that they are now under increasing competitive pressue from external services such as public clouds and Software-as-a-Service (SaaS) offerings.  This trend will continue, but it's extremely unlikely that the CIO and internal IT folks are going to give up the ghost and walk away from their jobs.  It means that they are going to get competitive instead.

Many vendors, right now, are gearing up to deliver offerings that will allow IT departments to deliver competitive internal cloud services, including VMware's vCloud, EUCALYPTUS, Nirvanix, ParaScale, and many, many more.  CIOs everywhere are already engaged in evaluating and understanding these new software packages that they can use for internal cloud offerings and yet this is simply the tip of the iceberg.  It's imminent that enterprises (and others) will adopt these technologies and capabilities in order to remain competitive.

So what is the problem the internal cloud solves?  As a wise person ([@samhahn](http://twitter.com/samhahn)) once said to me, there are only a couple of reasons someone buys a new product: to get a promotion or to keep their job.  Internal clouds allow CIOs to remain relevant and IT departments to compete against external services.  _This is a great thing!_

... and from the internal enterprise consumer's perspective, it's still "not their problem".

**(Re)defining Cloud**
I'm certain to provoke more controversy with this since so many folks can't agree on what 'cloud' is.  Originally, I was inspired by a hallway conversation turned [blog post](http://news.cnet.com/8301-19413_3-10249486-240.html) of James Urquhart's assertion that cloud is really "just an operational model".

For me there are two aspects to this operational model: one from the perspective of the consumer and one from the perspective of the cloud operator.

From the perspective of the consumer, any cloud service is a self-service offering that they can consume as they desire.  Meaning that there is minimal or no lock-in.  They can pay as they like (utility pay-by-the-hour model, pay one year in advance, use a PO, use a credit card, etc).  There are no or minimal contracts so they can leave any time.  The services consumed this way are always on-demand and the consumer can get up and going with little or no interaction with a human.  In effect, _consumers get i__nstant gratification_.

From the perspective of an operator, clouds must be highly automated, requiring minimal operational overhead.  How else can they deliver the self-service that their consumers desire?  If you need to pick up the phone to call a sales person the operator has #failed.  If you need to spend a week reading the documentation, the operator has #failed.  As on-demand services, clouds **must** be delivered in a highly automated and relatively[1] easy-to-use fashion.

Those are the two aspects of the cloud operational model in my mind:



	
  1. self-service operational model for consumers

	
  2. highly automated, low opex, operational model for operators


**The Sum of the Parts Argument**
Jumping back to the earlier twitter thread, George Reese, in particular, argued that while outsourcing, virtualization, and the utility charge model aren't individually 'cloud', together they are more than the parts and create a 'cloud'.  Hopefully my definition above rings true with you.  If it does, then it's clear how adding these three components together doesn't create a cloud.

Virtualization is simply a means of creating [multi-tenancy](http://cloudscaling.com/blog/technology/virtualization-is-not-the-answer-for-clouds) in clouds.  People like Google and Salesforce.com don't use virtualization at all.

The utility charge model has been a red herring about the cloud from day one.  Many people do want to pay by hourly usage, but just as many want to pay in advance for a year and receive a discount.  In fact, that model is even possible for some real world utilities, such as gas and electric, but it's often overlooked by people's zeal.  Hourly pay models aren't new or interesting.  They are simply cost effective and in fact, provide one aspect of 'self-service' by allowing the customer to be in control of their payment model.  _Control is what's important_ to the consumer.  The utility charge model is just one aspect of control and hence a sub component of 'self-service'.

**Conclusion**
Cloud computing is an incredibly disruptive force that is going to provide the first real competition to internal IT resources ever in the short history of modern computing as we know it.  Pressures will increase, forcing CIOs and IT departments at large and small businesses alike to compete effectively.  Consumers will look to both internal and external cloud resources based on needs and both corporate & security policies.



* * *

[1] Of course, for a developer exposing a bare API as Amazon does *is* easy-to-use.  For an end-user consuming a SaaS service the experience is necessarily different.
