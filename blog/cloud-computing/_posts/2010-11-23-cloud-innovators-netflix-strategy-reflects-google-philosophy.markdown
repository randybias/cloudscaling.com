---
author: Randy Bias
comments: true
date: 2010-11-23 16:00:22+00:00
layout: post
slug: cloud-innovators-netflix-strategy-reflects-google-philosophy
title: 'Cloud Innovators: Netflix Strategy Reflects Google Philosophy'
wordpress_id: 1539
old_categories:
- Cloud Computing
tags:
- amazon
- aws
- cloud
- EC2
- netflix
---

Welcome to a new interview series we’re trying on at Cloudscaling.  This series is meant to highlight not just cloud adoption stories, but stories about how businesses, particularly enterprise businesses, are changing the way they provide Information Technology (IT).  As long time followers of the Cloudscaling blog know, our view is that “cloud computing” is neither [outsourcing](http://cloudscaling.com/blog/cloud-computing/the-cloud-is-not-outsourcing) (2009) or [virtualization-on-demand](http://cloudscaling.com/blog/technology/virtualization-is-not-the-answer-for-clouds) (2008), but something far more subtle and far-reaching:  a [20-year shift in the way that all IT is provided](http://cloudscaling.com/blog/cloud-computing/elasticity-is-not-cloud-computing-just-ask-google), much like the transition from mainframe computing to enterprise computing (aka ‘client-server computing’).

Just like when we transitioned from mainframes, a *lot* of change is going to happen.  In order to highlight this change, we wanted to start a series that really shows what is possible if you fully embrace cloud computing.

Our first interview is with [Adrian Cockcroft](http://perfcap.blogspot.com), Cloud Architect at Netflix.  Recently Netflix announced something incredible: their 24x7x365 video-on-demand streaming service, the largest of its kind in the world, had moved from their own datacenters onto Amazon Web Services EC2.  See this [QCon presentation](http://www.slideshare.net/adrianco/netflix-on-cloud-combined-slides-for-dev-and-ops) from Adrian on the technical details.

This interview, however, takes a different tack and looks at why Netflix chose to take this route, examining business drivers, and asking “what do you tell others who wish to follow in your footsteps?”

**The Interview**

**RLB:** _Could you describe at a high level what Netflix is doing on AWS?_

**AC:** Encoding movies for streaming, log analysis, production web site and API, most everything that scales with customers and streaming usage. Easier to say what we don’t have there: most internal IT that scales with employee count, legacy stuff, DVD shipping systems, account sign-up and billing systems. We use Akamai, Limelight and Level3 CDN’s for streaming the movies, which is a cloud based service. There is an AWS CDN service, but they aren’t a big enough player in this space at this point.

**RLB:** _What was the key business driver that led to deciding to use AWS rather than your own datacenters?_

**AC:** Business agility and the inability to predict how much capacity we would need when and where for a business whose growth is accelerating. Year on year customer growth is 52% (up from 42% last quarter), year on year customers using streaming is up 145% (from ~4M to ~11M). We need to be a small-ish fish in a big AWS pond to leverage AWS investment in datacenter build-out, rather than building our own pond.

**RLB:** _Many folks claim that they can deliver a private cloud at a similar price point to AWS. I assume you ran the numbers yourself.  In whatever detail you can share, what does the ROI look like for Netflix?_

**AC:** Our datacenter runs Oracle on IBM hardware, we could have switched to commodity hardware in a datacenter, but skipped that step by going to AWS. There are three points on cost, one is that Oracle on IBM is very expensive, so AWS looks cheap in comparison, and we have flat-lined our datacenter capacity.

The second point is that AWS costs are fully burdened, and we could not have hired enough SAs and DBAs to build out our own datacenter this fast. We have added 4-5x as many systems in the cloud as the total we have in our datacenter over the last year.

The third point is that the costs are elastic, you start paying for a resource just before it goes live, and if you stop using a resource you stop paying for it. If you own a resource it sits around a long time waiting to be delivered and installed, and if you no longer want to use that type of resource you are still paying for it for three years. When Amazon cuts prices, your installed capacity gets cheaper. When they install new instance types you can be running on them in hours, technology refresh in real time.

I don’t believe private clouds can compete with public on price, however if you have a bunch of empty datacenter space or want to re-organize your internal systems to be automated and API driven then there are real cost savings to building your own private cloud. I think VMware and Microsoft are going to own the private cloud space, but Amazon is going to continue to disrupt both of them at a lower price point for public cloud.

**RLB:** _You have a great presentation on SlideShare that describes your development and operations approach.  You were willing to rethink your entire approach to the Netflix system.  Why was your business leadership willing to take on this kind of risk/investment?_

**AC:** That’s the way they roll... The impetus to do this came from the top down. The leadership saw that the biggest technology risk we had was lack of agility, and wanted to invest in our ability to move faster than our competitors without being held back by scale (e.g. running out of datacenter capacity) or technical debt issues. The leadership had to drag the engineers along to some extent, wean them off SQL and established habits and processes.

**RLB:** _Our belief is that 'cloud computing' is a new way of providing IT that displaces 'enterprise computing' as enterprise computing displaced 'mainframe computing'.  Your work seems to epitomize this. What would you say to folks who are willing to re-architect/re-engineer their applications for this new world?  What are the top 3 challenges they need to consider?_

**AC:** The key challenge is to get into the same mind-set as the Google’s of this world, the availability and robustness of your apps and services has to be designed into your software architecture, you have to assume that the hardware and underlying services are ephemeral, unreliable and may be broken or unavailable at any point, and that the other tenants in the multi-tenant public cloud will add random congestion and variance. In reality you always had this problem at scale, even with the most reliable hardware, so cloud ready architecture is about taking the patterns you have to use at large scale, and using them at a smaller scale to leverage the lowest cost infrastructure.

The second challenge is mostly political, an enterprise CIO and IT/ops department would much rather build datacenters and private clouds than become irrelevant to their customers. However while they are struggling to get their private clouds to work, their end users will be using AWS and setting a fully burdened price point expectation that IT cannot get near to. I have heard of internal chargeback for resources being an order of magnitude higher than using AWS for the same kind of resources [1].

The third challenge is the obvious one that the organizations that run compliance audits are working to a rule-sheet that has no concept of cloud, and it will take a while for some applications and industries (like finance) to get permissions and processes in place. That’s a when not an if.

**RLB:** _I've heard from folks who think they are in the know that enterprises aren't adopting AWS, yet Netflix, a mid-tier enterprise now has 'thousands' of servers running its most mission critical service on AWS.  What do you say to these folks?_

**AC:** Netflix is pathfinding, others will follow, and tiny startups in the cloud can become very big very quickly like  Zynga, who are now one of the biggest games companies, from nowhere. Enterprises that don’t leverage the agility, scale and cost benefits of public cloud will lose out to those that do. For me, if its not multi-tenant, it’s not cloud, and only the biggest organizations should be building datacenters to host clouds, and they should be offering them publicly. If you are doing internal cloud and you have a dominant internal customer then you are doing it wrong, because you have to choose between baking in a lot of unused extra capacity or the risk that at some point that customer will blow up your cloud.

**Cloudscaling Perspective**
For us, the incredible lesson with Netflix has been how much value can be had in public clouds if one fully embraces the model.  We see several kinds of failures to embrace cloud computing that parallel Adrian’s notes above:



	
  1. Failure of understanding (“it’s just [mainframes|service bureaus|outsourcing|virtualization]”)

	
  2. Failure to re-engineer/re-architect applications

	
  3. Focus on building simplistic internal ‘private clouds’ (aka “your mess for less; only virtualized!”)


With understanding, the problem is the same as with the transition from the mainframe.  Mainframe operators and the vendors of that time did not want to believe things would change as dramatically as they did.  Many of them also looked at enterprise computing as a sort of ‘fad’ instead of seeing the underlying drivers at the time related to flexibility, agility, and expense (sound familiar?).

As far as re-engineering applications goes, we still see clients today asking us to build ‘five 9’ infrastructure clouds to support legacy enterprise applications they don’t want to re-architect.  Few of them understand what that means or how expensive a 99.999% uptime cloud infrastructure would be (hint: 10-100x the cost of AWS most likely).  I have seen so-called “private cloud” deployments where the 5-year TCO of a single virtual server ran close to USD $20,000.  Why virtualize in the first place if the resulting costs are similar to those of running physical servers?

Which brings me to that last point: private clouds designed to accommodate all of the “needs” of enterprise customers aren’t true clouds at all, but simply “your mess for less.”  Google can run 10,000 servers for a single headcount because their architecture is horizontal, homogeneous, and commoditized.  The worst enterprise clients we have seen manage as few as *5* servers per headcount with the average at *100*.  This is largely because of enterprise applications and legacy network architectures that require that the infrastructure is mapped to the applications instead of the other way around.  This process combined with heavily silo’ed teams and application architectures results in the operational costs overhead being enormous.

**Summary**
Adrian and other Cloud Innovators have proven that designing for cloud scale, means designing for failure and the same ‘always-on’ software architecture of an Amazon.com or Google, *not* something as simplistic as virtualizing your existing legacy enterprise applications and moving them over to someone else’s cloud.  It’s going to take a while for the market to wake up to this principle and we’ll see lots of failures or as I like to say “blood on the floor” over the next few years.

Those who embrace the disruption and use it to their advantage will win as the landscape shifts.  Those who do not will be on the receiving end.


_Disrupt.  Don’t be Disrupted._








* * *

[1] This is a number that the Cloudscaling team has confirmed with a number of large enterprise customers.
