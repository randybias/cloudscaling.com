---
author: Randy Bias
comments: true
date: 2013-07-01 14:16:50+00:00
layout: post
slug: missing-the-point-on-private-public-and-hybrid-cloud-apis
title: Missing the Point on Private, Public, and Hybrid Cloud APIs
wordpress_id: 6444
old_categories:
- Cloud Computing
tags:
- APIs
- hybrid cloud
- OpenStack
- private cloud
---

At the recent [Structure](http://event.gigaom.com/structure/) event in San Francisco, I watched Werner Vogels’ presentation, along with about 500 others in a packed auditorium. Werner is the CTO of Amazon Web Services and one of the industry’s more prophetic voices. (I was honored to share [the keynote stage](http://go.cloudscaling.com/randy-bias-keynote.html) with him at Cloud Connect a couple of years ago.)

During Werner’s [conversation with Jo Maitland](http://new.livestream.com/gigaom/structure/videos/21978827), he talked about the [Workday deal](http://www.crn.com/news/cloud/240157032/workday-breaks-silence-on-hp-amazon-controversy.htm), the [CIA contract win](http://gigaom.com/2013/06/26/cia-cloud-battle-redux-u-s-defense-agency-puts-cloud-work-out-to-bid/), and his [forecast for the cloud market](http://www.zdnet.com/structure-2013-amazon-cto-offers-forecast-for-cloud-market-7000017033/).

But it was a little more than eight minutes in when Werner’s comments really struck a chord with me. He talked about the importance of designing applications to fully leverage the scale-out architecture of AWS. His point was that business rules should drive automation decisions, not technical rules, but his comments underscored an unspoken assumption.

That assumption is that app architects and enterprise IT teams intuitively understand the intimate relationship between APIs and the infrastructure on which the app runs.

APIs usually reflect the underlying architectural assumptions of a given system. In the case of infrastructure clouds this means:

**The capabilities of an API are only as good as that infrastructure’s ability to deliver on what the API promises. And elastic clouds like AWS deliver different services than enterprise architectures like VCE’s VBlock.**
> 
> </blockquote>

 When an API is native, the implicit contract between the API and the infrastructure is well understood. However, when an API has been ported or copied – like the AWS and GCE APIs – this contract is at risk. How “true” your cloud is to a ported API depends on how well your new cloud’s architecture mimics, emulates, or recreates the native architecture that the API was attached to originally.

A real world example of this is the recent [tussle](http://www.informationweek.com/software/operating-systems/google-wins-another-round-in-oracle-laws/240001347) between Oracle and Google. Google had re-written, from scratch, the Java VM into a new VM called [Dalvik](https://en.wikipedia.org/wiki/Dalvik_(software)) that was faithfully API-compatible with Java and the Java VM. Dalvik is not the *same* architecture as the JVM. However, it’s very similar, which allowed unmodified Java code to run on Dalvik. If, for example, you put the Java APIs on top of [BEAM](http://en.wikipedia.org/wiki/Erlang_(programming_language)) (the Erlang VM) most Java bytecode would fail to run because the architectures are so fundamentally different.

This might seem intuitive and obvious, but what I’m hearing from the marketing departments of cloud software vendors and from enterprises we talk to suggests that there’s critical (purposeful?) confusion at work.

That got me thinking about the nature of our conversation in the industry about private and hybrid cloud API compatibility with public clouds like AWS and Google Compute Engine (GCE). If you swallow the marketing hype whole, you’ll believe that all you need to move workloads from AWS or GCE to your private cloud and back is access to the APIs.

Nothing could be further from the truth.

So, I spent a few minutes talking to Rich Miller, Editor of [Data Center Knowledge](http://www.datacenterknowledge.com/archives/2013/06/24/cloudscaling/) (and a GigaOm analyst) about what AWS compatibility really means.

 

 

Highlights from my conversation with Rich:

  * Customers are looking at how to deploy on the public cloud now, or future-proof app development for migration to public clouds like AWS and GCE later.

  * Accomplishing this means thinking about how applications will behave when API calls are made.

  * The key is *architectural* compatibility, not just API compatibility.

  * Cloudscaling’s product ([Open Cloud System](http://cloudscaling.com/products/ocs-system-overview/), or OCS) is a production-grade private cloud solution that’s compatible with AWS and GCE architecturally, not just at an API level.

  * Hardware management is an important part of architectural consistency with major public clouds. OCS’s Cloud Blocks architecture reproduces the way web-scale players think about hardware, including features like availability zones and virtual private cloud (available later this summer).

In short, it’s about ecosystem choice and flexibility. Enterprise IT buyers want the choice to run workloads on private cloud or public cloud depending on what makes the most sense given business circumstances (regulatory, agility, economics). Those circumstances change over time.

Choice is possible only when there’s architectural consistency between public and private cloud infrastructure. Those who focus only on API compatibility are either confused or intentionally misleading people. There is NO API COMPATIBILITY without architectural compatibility.

So, let’s talk about *architectural* consistency between private and public cloud, because hybrid cloud solutions are simply not possible without this.

APIs alone will never be enough.
