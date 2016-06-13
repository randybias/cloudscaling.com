---
author: Randy Bias
comments: true
date: 2009-09-15 15:00:37+00:00
layout: post
slug: vmware-vs-amazon-round-one-fight
title: VMware vs. Amazon ... ROUND ONE ... FIGHT!
wordpress_id: 531
old_categories:
- Cloud Computing
tags:
- amazon
- api
- aws
- cloud
- commoditization
- enterprise
- infrastructure
- standards
- vcloud
- vmware
---

More and more it's becoming apparent that [VMware](http://en.wikipedia.org/wiki/VMware) and [Amazon](http://en.wikipedia.org/wiki/AMZN) are headed for a serious collision.  Amazon is eager to capture more of the enterprise business market, VMware's bread and butter.  Meanwhile, VMware is actively supporting a new crop of Amazon competitors with its recent [vCloud Express](http://cloudscaling.com/blog/cloud-applications/vmwares-vcloud-api-forces-cloud-standards) release.  More importantly, what perhaps neither have realized or, at least as far I can tell Amazon hasn't realized, is that the battle isn't ultimately about so-called 'public' or 'private' clouds[1], but about standards, de facto or otherwise.

**Infrastructure History & Standards**
Like railways, the telephone system, or any other kind of infrastructure that supports business today, IT is quickly commoditizing and turning from a competitive advantage into a cost of doing business.  Cloud computing is an accelerator in this process.  As I've asserted before, the 'cloud' is less about technology or where the resources reside and more about a fundamental change in the way that we use and understand IT infrastructure.

I like to think of 'cloud' as a group 'A-HA!' moment, much like the one that happened with other foundational infrastructure changes.  Early in the advent of railroads, trains, track gauges, switching equipment was all custom and had little or no interoperability.  Eventually it became apparent that standards would allow greater aggregate value to all involved.  Nicholas Carr nails it in his book Does IT Matter?:


As was true with railroads and electricity and highways, it is only by becoming a shared and standardized infrastructure that IT will be able to deliver its greatest economic and social benefits, raising productivity and living standards and serving as a platform for a range of new and desirable consumer goods and services.  History reveals that IT needs to become ordinary—needs to lose its strategic importance as a differentiator of companies—if it is to fulfill its potential.


The primary point being here that market demands will essentially force standardization, one way or another.  Of course, we would all like to see open standards, but even de facto standards will work.  This is what's at stake in this battle.

**The Contenders & Their Market Positions**
It's interesting how two such different businesses can suddenly see themselves at odds, but with a multi-billion dollar future market in cloud computing at stake, it's not surprising that we may see all kinds of players emerge.  Looking at the relative market cap (AMZN @ 36.5B and VMW @ 15.5B) and stock performance of the two tells one story:

![VMW vs. AMZN](/assets/media/2009/09/vmw-vs-amzn.jpg)
<cite>VMW vs. AMZN</cite>

Digging into this a bit more we can see that the story is a lot bigger than a simple tale of revenues, especially as it relates to enterprise businesses.

_Amazon_
Amazon (AMZN), as a whole, is roughly 3x in employees and 10x the size of VMware (VMW) in revenue.  The vast majority of this revenue comes from Amazon's online retail business, which is consumer focused, while VMware is almost exclusively focused on large enterprise customers[2].  More telling are the recent 10-Q reports of both companies.

Amazon, unfortunately, does not provide the revenue numbers for Amazon Web Services (AWS) as part of their reports.  It is bundled into an 'Other' line, which includes a number of Amazon revenue streams.  Their most recent [10-Q](http://investing.businessweek.com/research/stocks/financials/drawFiling.asp?docKey=137-000119312509154174-1SVDP3T6MG8HDMHHJ1GQQ6LQ3H&docFormat=HTM&formType=10-Q) reports the North American revenue for 'Other' as 217M for the 6 months ending June 30th, 2009.  I'm going to go out on a limb and suggest that AWS revenues are half of this number, but it's certainly a wild guess.  Assuming that's the case, the AWS business is a 200M annual business and undoubtedly growing rapidly.  It is very difficult to know what percentage of that revenue is large enterprise customers, but I feel safe concluding it can't be more than 25-35% total.  My conclusion is based on the fact that enterprises are slow to adopt and that most of their current use cases are almost certainly non-production ones like batch processing.

If this is true, Amazon's AWS business for enterprise is unlikely to be more than 70M annually.  This is a very impressive number given that Amazon is not traditionally an enterprise-focused business.  We should give them credit where credit is due.  By all accounts Amazon has generally had a large number of challenges shifting from it's consumer, one-size-fits-all, business model, which is certainly a put-off for large enterprise customers.

_VMware_
In comparison, VMW's recent [10-Q](http://investing.businessweek.com/research/stocks/financials/drawFiling.asp?docKey=137-000119312509167229-06U2VLCFLAU6MEBNTDGM4MQ941&docFormat=HTM&formType=10-Q) report shows a healthy 926M in revenues for the 6 months ending June 30th, 2009.  VMware's license revenues dropped pretty significantly from the year before, but annual support licenses made up for it.  Most of this is certainly attributable to the current economic climate and their enterprise customer base.  Given that VMware's customer base is largely enterprise customers, they are a roughly 2B dollar enterprise business.  About half of which is new license sales.

VMware has a long track record of providing tremendous value to enterprise customers, but by most reports, the penetration of virtualization inside the enterprise is still less than 20%.  This is due to a variety of factors, but anecdotally, it appears that virtualization and server consolidation suffers from many of the traditional issues that plague IT initiatives within the enterprise.  McKinsey's cloud report predicted that enterprises, with tremendous effort, could reach virtualization rates of 38%.

Unless perhaps cloud computing, as an operational model change, can _completely change_ the way that IT delivers it's services.

_AMZN vs. VMW in the Enterprise_
So, while at a glance, Amazon is a bigger business, inside the enterprise VMware is actually a 10x bigger business with relatively low penetration of it's technology and a lot of room to grow.

Now the 100B dollar question: _Will enterprise business move outside to public clouds like Amazon OR use VMware and internal private clouds to change the way that IT does business?_

It's anyone's guess how this will play out in the long term, but in the short term, we're likely to see both routes taken.  While predicting the long term is outside the scope of this posting, I think the short to medium term fight ("ROUND ONE!") that will directly impact how this plays out is cloud computing standards.

**The Standards Collision**
It's clear from history that standards combined with infrastructure technology create a transformative opportunity.  While cloud computing has enjoyed some serious traction, we're still early on and standards have not evolved yet.  Amazon and VMware, as standards competitors, are a bit like having two different railroad track gauges.  You won't be able to run the same kind of trains on both sets of track gauge or connect railways based on either together.  Standards matter and making sure we have the same gauge rails everywhere is incredibly important to the rapid adoption of cloud computing[3].

At VMworld, VMware announced vCloud Express including the vCloud API.  The vCloud API was released under a very open license.  One that even allows building a cloud with alternative non-VMware hypervisors that provides this API.  As I mentioned at the time, it seems to me that this is going to drive de facto cloud computing standards.  In fact, VMware's announcement included five new clouds supporting the standard and one very important cloud management vendor (RightScale).  In one fell swoop, VMware provided a standard across five clouds and one vendor.  This is certainly just the beginning.  Without a doubt many more will adopt the vCloud API.  Perhaps most telling of all is that VMware's own cloud infrastructure product isn't even shipping yet.  Once it ships, it will most certainly work with existing VMware products like vSphere and every new enterprise vCloud-based installation will have the same vCloud API.

But what about Amazon's AWS APIs? Could those be a standard too?  They could be, but Amazon has been deliberately vague about the license for it's cloud APIs.  Although certain vendors support AWS APIs, like EUCALYPTUS and OpenNebula, it has not been clear what their legal status is.  This is also why AWS competitors like GoGrid and RackSpace chose to develop their own APIs, when clearly supporting AWS-compatible APIs would have been more desirable.  Will Amazon license their APIs under an open license in response to VMware?  I think the answer is obvious.  Amazon Web Services must open license their cloud APIs or it will be one of the biggest mistakes they have made to date[4].  Clearly, they will make the standard Amazon play and only do the absolute minimum necessary, which likely means an open license on EC2 (Elastic Computing Cloud).

When AWS opens the EC2 API it will open the floodgates for folks like EUCALYPTUS, OpenNebula, DynamicOps, VMops, and other cloud vendors, effectively allowing them to compete against vCloud in the enterprise.

In effect, we'll have two major competing cloud standards: the vCloud API and the EC2 API.

**What Happens When Worlds Collide?**
So, we have VMware moving into Amazon's 'public' cloud territory by enabling AWS competitors, while Amazon is extremely likely to reciprocate by enabling VMware competitors for internal 'private' clouds.  Given that both external public and internal private clouds will see significant growth over the medium term and that there is tremendous value from joining external and internal clouds via standards, the writing is on the wall.

A standard has to win or, at least, dominate.  While Amazon is the 800lb gorilla in the public cloud computing space, VMware has a massive lead in the enterprise.  It really depends on where you think the enterprise is going to go.  Will they put more money into transforming the way IT works via internal clouds or begin to move to external clouds right away?

My bet is that enterprises are going to go for internal clouds before external clouds, at least for the majority of their sensitive and mission critical workloads.  If that's the case then vCloud looks like a good bet and Amazon looks like they could eventually be playing second fiddle as the #1 player in the #2 market.



* * *

[1] 'Private' and 'public' can be confusing terms.  Usually people mean 'internal' clouds when they say 'private'.  But a 'private' cloud could be both 'internal' or 'external'.  I'll mostly try to talk about 'internal private' or 'external public' in this article.
[2] As many of you may know, the prevailing wisdom is that the majority of 'dollars' in IT are spent by large enterprises, not smaller businesses.
[3] Of course, it will probably turn out, like railroad track gauges, that different standards or technology are good for different use cases.
[4] There is another possibility, although seemingly improbable, that Amazon could adopt the vCloud API.
