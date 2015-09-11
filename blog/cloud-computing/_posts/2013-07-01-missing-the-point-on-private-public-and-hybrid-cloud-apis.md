---
title: 'Missing the Point on Private, Public, and Hybrid Cloud APIs'
link: http://cloudscaling.com/blog/cloud-computing/missing-the-point-on-private-public-and-hybrid-cloud-apis/
author: randybias
description: 
post_id: 6444
created: 2013/07/01 07:16:50
created_gmt: 2013/07/01 14:16:50
comment_status: open
post_name: missing-the-point-on-private-public-and-hybrid-cloud-apis
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Missing the Point on Private, Public, and Hybrid Cloud APIs

At the recent [Structure](http://event.gigaom.com/structure/) event in San Francisco, I watched Werner Vogels’ presentation, along with about 500 others in a packed auditorium. Werner is the CTO of Amazon Web Services and one of the industry’s more prophetic voices. (I was honored to share [the keynote stage](http://go.cloudscaling.com/randy-bias-keynote.html) with him at Cloud Connect a couple of years ago.)

During Werner’s [conversation with Jo Maitland](http://new.livestream.com/gigaom/structure/videos/21978827), he talked about the [Workday deal](http://www.crn.com/news/cloud/240157032/workday-breaks-silence-on-hp-amazon-controversy.htm), the [CIA contract win](http://gigaom.com/2013/06/26/cia-cloud-battle-redux-u-s-defense-agency-puts-cloud-work-out-to-bid/), and his [forecast for the cloud market](http://www.zdnet.com/structure-2013-amazon-cto-offers-forecast-for-cloud-market-7000017033/).

But it was a little more than eight minutes in when Werner’s comments really struck a chord with me. He talked about the importance of designing applications to fully leverage the scale-out architecture of AWS. His point was that business rules should drive automation decisions, not technical rules, but his comments underscored an unspoken assumption.

That assumption is that app architects and enterprise IT teams intuitively understand the intimate relationship between APIs and the infrastructure on which the app runs.

APIs usually reflect the underlying architectural assumptions of a given system. In the case of infrastructure clouds this means:

> **The capabilities of an API are only as good as that infrastructure’s ability to deliver on what the API promises. And elastic clouds like AWS deliver different services than enterprise architectures like VCE’s VBlock.**

 When an API is native, the implicit contract between the API and the infrastructure is well understood. However, when an API has been ported or copied – like the AWS and GCE APIs – this contract is at risk. How “true” your cloud is to a ported API depends on how well your new cloud’s architecture mimics, emulates, or recreates the native architecture that the API was attached to originally.

A real world example of this is the recent [tussle](http://www.informationweek.com/software/operating-systems/google-wins-another-round-in-oracle-laws/240001347) between Oracle and Google. Google had re-written, from scratch, the Java VM into a new VM called [Dalvik](https://en.wikipedia.org/wiki/Dalvik_\(software\)) that was faithfully API-compatible with Java and the Java VM. Dalvik is not the *same* architecture as the JVM. However, it’s very similar, which allowed unmodified Java code to run on Dalvik. If, for example, you put the Java APIs on top of [BEAM](http://en.wikipedia.org/wiki/Erlang_\(programming_language\)) (the Erlang VM) most Java bytecode would fail to run because the architectures are so fundamentally different.

This might seem intuitive and obvious, but what I’m hearing from the marketing departments of cloud software vendors and from enterprises we talk to suggests that there’s critical (purposeful?) confusion at work.

That got me thinking about the nature of our conversation in the industry about private and hybrid cloud API compatibility with public clouds like AWS and Google Compute Engine (GCE). If you swallow the marketing hype whole, you’ll believe that all you need to move workloads from AWS or GCE to your private cloud and back is access to the APIs.

Nothing could be further from the truth.

So, I spent a few minutes talking to Rich Miller, Editor of [Data Center Knowledge](http://www.datacenterknowledge.com/archives/2013/06/24/cloudscaling/) (and a GigaOm analyst) about what AWS compatibility really means.

 

 

Highlights from my conversation with Rich:

  * Customers are looking at how to deploy on the public cloud now, or future-proof app development for migration to public clouds like AWS and GCE later.

  * Accomplishing this means thinking about how applications will behave when API calls are made.

  * The key is *architectural* compatibility, not just API compatibility.

  * Cloudscaling’s product ([Open Cloud System](/products/ocs-system-overview/), or OCS) is a production-grade private cloud solution that’s compatible with AWS and GCE architecturally, not just at an API level.

  * Hardware management is an important part of architectural consistency with major public clouds. OCS’s Cloud Blocks architecture reproduces the way web-scale players think about hardware, including features like availability zones and virtual private cloud (available later this summer).

In short, it’s about ecosystem choice and flexibility. Enterprise IT buyers want the choice to run workloads on private cloud or public cloud depending on what makes the most sense given business circumstances (regulatory, agility, economics). Those circumstances change over time.

Choice is possible only when there’s architectural consistency between public and private cloud infrastructure. Those who focus only on API compatibility are either confused or intentionally misleading people. There is NO API COMPATIBILITY without architectural compatibility.

So, let’s talk about *architectural* consistency between private and public cloud, because hybrid cloud solutions are simply not possible without this.

APIs alone will never be enough.

## Comments

**[Mayur](#3888 "2013-07-09 17:03:00"):** "Cloudscaling’s product (Open Cloud System, or OCS) is a production-grade private cloud solution that’s compatible with AWS and GCE architecturally, not just at an API level." Really? Do you even know how AWS architecture looks like? Its just another marketing post wanted to prove how OCS is better.

**[randybias](#3889 "2013-07-09 19:28:00"):** Yes, I do. No, it's not another marketing post. From our website (http://www.cloudscaling.com/advisoryboard/): Chris Brown, CTO of Opscode, was 'Lead Developer for Amazon.com’s Elastic Compute Cloud (“EC2″)' also... Ben Black, formerly CEO of Boundary, was 'the manager of website engineering at Amazon, he lead the design and implementation of a new, layer 3 network for Amazon’s production network. As principal engineer for Amazon infrastructure, he co-authored the first documents on what later became EC2.' ... There is also tons of public data on how AWS and others have built their datacenters and architectures: http://highscalability.com/blog/category/example And here is me in quite some detail on a number of the architectural and other decisions made in the web-scale datacenters. None of this is exactly secret. http://www.slideshare.net/randybias/architectures-for-open-and-scalable-clouds I hope this helps. Regards, \--Randy

**[Boris Renski](#3890 "2013-07-12 16:57:00"):** Can't believe I am only reading this now. YES, YES and YES...fueling (no pun intended) the interop controversy here a bit?

**[randybias](#3891 "2013-07-12 17:03:00"):** What Boris? You don't obsessively watch what I'm doing? ;)

