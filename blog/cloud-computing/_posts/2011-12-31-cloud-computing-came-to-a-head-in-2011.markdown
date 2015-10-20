---
author: Randy Bias
comments: true
date: 2011-12-31 00:42:39+00:00
layout: post
slug: cloud-computing-came-to-a-head-in-2011
title: Cloud Computing Came to a Head in 2011
wordpress_id: 2637
old_categories:
- Cloud Computing
tags:
- amazon
- Asymco
- Automation
- aws
- cloud futures series
- cloudscaling
- commoditization
- EC2
- enterprise
- iaas
- infrastructure
- OpenStack
- predictions
- scaling
- vmware
- web-scale
---

Happy New Year!  I hope you are all having a fantastic holiday.  This is a year end posting that I think you will find particularly compelling.  Rather than predicting the future I thought I would take a look back at five long years of ‘cloud computing’.

The Cloudscaling blog has a loyal following as can be seen from the website and RSS feed stats.  As many of you long time readers know, I’ve been ‘in the game’ working on cloud computing technology or blogging about as long as anyone except perhaps those at AWS.  In all of that time, my thinking and assessment of what’s happening and how it’s evolving has changed continuously.  What was interesting for me this year is that this continuously changing perspective slowed to a crawl or perhaps even stopped.  2011 is the year that much of my thinking and perspective on cloud computing, particularly infrastructure clouds (aka “IaaS”) hardened.

That sounds tough.  “Hardened.”  I don’t mean hardened in the sense of rigid, but rather in the notion of wet cement drying.  Many things that have seemed up in the air now seem settled and my doubts about the future of infrastructure clouds are gone.  They are not only here to stay, but the shape and direction of them seem very clear.  I’m not certain everyone else is clear, but I am.  Perhaps I will be wrong, but I doubt it.

Let’s take a look back at the arc of my thinking and how things did NOT change in 2011.  That will tell us what 2012 is likely to look like.

**The Evolution of My Cloud Thinking**
My thinking evolved through three clear phases:


Automation -> VMs & Virtual Datacenters -> New IT Paradigm


_Phase 1: Automation_
About this time of year, in late 2006, a short time after Amazon EC2 launched, myself and others prototyped a cloud application management framework similar to RightScale.  At that time RightScale was named something else and had not been funded or publicly launched.  These were early days.

As someone with a deep passion for automation, I remember thinking then that a lot of my lifetime interests (networking, storage, security, and systems management) were all converging and being managed by automation.  For me, what was happening was all about automation … and lots of it.

_Phase 2: Virtual Machines & Virtual Datacenters_
Roughly summer of 2008, the first “[CloudCamp](http://en.wikipedia.org/wiki/CloudCamp)” was thrown where a number of the cloud bloggers and thought leaders came together for the first time.  Unknowingly we all centered about using the term ‘cloud computing’ to explain what this new emerging phenomena was.  It was right after this event and over the summer of 2008 that the term “[cloud computing](http://www.google.com/trends?q=%22cloud+computing%22&ctab=0&geo=all&date=2008&sort=0)” really took hold.  This also led to the formation of the “[clouderati](http://twitter.com/clouderati)”  and I simultaneously [joined GoGrid](http://cloudscaling.com/blog/cloud-computing/what-i-did-in-2008) as the VP Technology Strategy.

Perhaps GoGrid biased my thinking, but I started to move from a perspective that was cloud application centric back into my sweet spot of physical infrastructure and a focus on virtual datacenters or what I called at the time, “[cloud centers](http://blog.gogrid.com/2009/01/08/cloudcenters-are-datacenters-in-the-sky/)”.  In this view, virtual machines were king and inevitably, the question was: “how will we model existing datacenter environments?”

_Phase 3: Cloud Computing is a new kind of IT_
After leaving GoGrid in the summer of 2009 I had the opportunity to step back and take a fresh look at how things had evolved.  I wanted to build my own cloud business again, but I wanted to skate to where the puck would be, not where it was today.  I also could see that most everyone involved in the cloud computing space was spending time trying to retrofit the notion of ‘cloud computing’ to their existing business models and technology.  Simultaneously, I still didn’t see any serious competitors to AWS.

**What** were they doing that was so different??

It’s not well known, but in the beginning of Cloudscaling’s (re)formation in fall of 2009 into mid 2010, I did a number of strategic and due diligence engagements on various IaaS vendors for VC firms, Platform-as-a-Service startups, enterprises, and enterprise vendors.  During that time I was involved in deep technical dives on the technology and business models for these IaaS vendors.  They ranged from GoGrid competitors to more of an enterprise cloud model.  By late 2010 Cloudscaling, collectively, had deep architectural and business model understanding of roughly 10 different Infrastructure-as-a-Service (IaaS) players, not including the IaaS clouds that we helped build [1].  I am not sure anyone else had or has that understanding today.  What we saw, was telling.

My primary takeaway was that even when it came to startups and direct AWS competitors, absolutely none of the infrastructure cloud players were developing their clouds like AWS.  For the most part, they were simply integrating common-off-the-shelf (COTS) components to mimic an AWS-like environment. None of them had [AWS velocity](http://cloudscaling.com/blog/cloud-computing/amazon-web-services-rapid-release-cycle) [2], nor were they paying attention to what made AWS special [3].  All too often, they identified ‘flaws’ in AWS that were instead unrecognized strengths. Examples of this include:



	
  * [Constrained feature set](http://cloudscaling.com/blog/cloud-computing/what-is-amazons-secret-for-success-and-why-is-ec2-a-runaway-train)

	
  * Standardized instance sizes

	
  * Lack of VLANs [4]

	
  * Ephemeral storage

	
  * Generic load balancing service without fancy vendor lock-in features [5]


That’s when I began to understand that ‘cloud computing’ had less to do with automation or virtual machines/datacenters on demand and more to do with *how* AWS was building their infrastructure cloud.

Ask yourself these questions:

	
  * Why isn’t VMware more successful in the public cloud space if it’s just VMs and VDCs?

	
  * Why isn’t there a VMware-based competitor at similar scale to AWS?  Or even close?

	
  * There are now 100+ “VMs on demand” competitors, but almost none have the same growth rate as AWS … why not?

	
  * What do the largest Internet giants (Amazon, Google, Facebook, SFDC) all have in common from an architectural standpoint and how is that different from a typical enterprise datacenter?


**Cloud Computing vs. Enterprise Computing**
I gave the [third opening keynote at Cloud Connect 2011](http://vimeo.com/21372341), behind Werner Vogels of Amazon and Lew Tucker of Cisco.  That keynote drove much of the discussion during the first day around ‘enterprise clouds’ and their viability.  In that talk was also the initial crystallization of my infrastructure cloud thinking:

_We didn’t have one way to build infrastructure clouds … we had two._

One was rooted in the old modalities and thinking around existing datacenters and enterprise applications.  The other was rooted in a new way of thinking about Information Technology (IT) that uprooted every approach that had gone before.

Enterprise Computing applied to ‘infrastructure cloud’ [6]:



	
  * How do I virtualize and manage my existing datacenter apps?

	
  * How do I achieve bottom line cost savings and extend server consolidation?

	
  * How can my existing vendors help me create a ‘private cloud’?

	
  * How can I be compatible with everything I own today?


Cloud Computing applied to ‘infrastructure cloud’:

	
  * What can we do to allow application developers to experience ‘infinite scalability’?

	
  * How can we simplify the allocation of traditional IT resources of networking, storage, and compute?

	
  * What will it take to help next generation web applications ‘scale’ by simply adding more of these IT resources?

	
  * How do we make it continually less expensive such that application developers can consume as much as they need?

	
  * How can I, the service provider, make my cost of capital equipment and operational management as low as possible so I can pass those savings on to app developers? [7]


These are two very different schools of thought.  One is about saving money for existing datacenters and applications.  The other is about enabling new revenue streams via new applications and unlocking the potential for developers to add value to the business.  The starkest example of this I can think of can be found in my blog [interview with Adrian Cockcroft](http://cloudscaling.com/blog/cloud-computing/cloud-innovators-netflix-strategy-reflects-google-philosophy), the chief architect at Netflix on their adoption of Amazon Web Services [8].

A brief aside: This is why I think the [NIST definition of cloud computing](/assets/pdf/SP800-145.pdf) is such a huge FAIL.  It’s focus is on the superficial aspects of ‘clouds’ without looking at the true underlying patterns of how large Internet businesses had to rethink the IT stack.  They essentially fall into the error of staying at my 'Phase 2: VMs and VDCs' (above).  No mention of [CAP theorem](http://en.wikipedia.org/wiki/CAP_theorem), understanding the [fallacies of distributed computing](http://en.wikipedia.org/wiki/Fallacies_of_Distributed_Computing) that lead to successful scale out architectures and strategies, the core socio-economics that are crucial to meeting certain capital and operational cost points, or really any acknowledgement of this very clear divide between clouds built using existing 'enterprise computing' techniques and those using emergent 'cloud computing' technologies and thinking. [9]

**How 2011 Unfolded ...**
Ever since that keynote at Cloud Connect, it’s become more and more clear that not only is cloud computing a new disruptive displacement of the existing IT model (see blog link just above) in the same way that enterprise computing (aka ‘client-server’) displaced mainframe computing, but that it’s directly intersecting with other major trends in technology.

Infrastructure cloud computing directly intersects and either enables or works with:



	
  * _Big data_, the explosion of data and data processing needs

	
  * [_The post-PC era_](http://www.asymco.com/2011/07/06/the-post-pc-era-will-be-a-multi-platform-era/), or the notion of the rise of appliances and mobile platforms as the long term predominant platform, and the shift to ‘apps’ from ‘desktops’ [10]

	
  * [_Consumerization of IT_](http://us.trendmicro.com/imperia/md/content/us/pdf/trendwatch/consumerization/wp2_consumerization_110510us_pdf.pdf) (TrendMicro whitepaper in PDF), or the notion that knowledge workers prefer more adaptive and flexible environments to get their work done such as they experience in their private lives with the large web application providers (Google, Amazon, Facebook, etc.)


I’m probably overlooking other related trends here, but what is blindingly obvious is that all of these trends are new opportunities, not old.  Nor are they a re-hash of old opportunities.  Every single one of them are driving infrastructure cloud computing growth.  From the hidden, such as Apple’s iCloud, to the obvious, such as becoming the de facto platform for building big data or mobile app backend services.

As 2011 draws to a close this weekend, I’m beginning to see the upcoming ‘[trough of disillusionment](http://en.wikipedia.org/wiki/Hype_cycle)’ or ‘[chasm](http://en.wikipedia.org/wiki/Crossing_the_Chasm_(book))’ as Geoffrey Moore called it.

**Writing -> Wall**
We are five years in and no one has emerged as a legitimate challenger to AWS’s market dominance.  And, frankly, none are on the horizon.  The enterprise infrastructure cloud providers I’m aware of have terminally poor growth rates (<10% [CAGR](http://www.investopedia.com/terms/c/cagr.asp) in many cases) and most of them won’t see a return on investment before they hit their five-year hardware refresh cycle.  Translation: **_these enterprise clouds are essentially net losses when evaluating them on a 5-year TCO basis_**.  The hardware itself won’t even be paid for during that time, much less the cost of operations.

Meanwhile, [AWS will reach $1 billion in revenue this year](http://cloudscaling.com/blog/cloud-computing/amzn-other-revenue-in-2011) and those few that are following roughly the same trajectory as AWS have at least similar growth rates, if not scale ([see slide 11](http://www.slideshare.net/randybias/enterprise-cloud-myths)).

While VCE touts $1 billion in vBlock sales [11], the onslaught of so-called ‘[shadow IT](http://en.wikipedia.org/wiki/Shadow_IT)’ hasn’t ceased or slowed down if AWS growth is any indication.  Most of these ‘private cloud’ deployments have failed to deliver on the promise of cloud computing, hence app developers still adopt AWS in droves.  Frankly, it’s stunning how many of the Fortune 1000 are running production apps, mostly next gen web apps or re-architected versions of last gen web apps, on AWS, but won’t talk about it.

**The Road Ahead: 2012**
In 2012, we’re going to see the gap between ‘enterprise clouds’ and ‘web-scale clouds’ widen as we enter the chasm.  At Cloudscaling we are already seeing just about everyone with an ‘enterprise cloud’ out researching ‘low cost’ alternatives.  Unfortunately, this is still missing the forest for the trees, as business agility and top-line revenue growth is a far more compelling value proposition for web-scale clouds.

I believe that 2012 will be a time of experimentation, learning, and quite possibly even larger ‘cloud failing’ than has gone before.  Before it can get brighter, it’s got to get darker.

I don’t know the ultimate solution, but one thing is for certain, we’re all going to learn a lot making it through the chasm to the other side.  The only other thing I can tell you for certain is that mimicking existing enterprise datacenters is a ‘looking back’ rather than ‘leaning forward’ strategy.

In this coming year I plan to spend a lot more time on this blog and in speaking engagements exploring all of  these ideas, thoughts, and revelations in more depth.

--Randy Bias
Co-Founder & CTO, Cloudscaling



* * *

[1] KT’s [private](http://cloudscaling.com/www/news-events/press-releases/kt-and-cloudscaling-launch-korea’s-first-major-private-cloud) and public compute clouds, their OpenStack storage cloud, Internap’s [OpenStack storage cloud](http://gigaom.com/cloud/first-openstack-cloud-now-open-for-business/), and another I can’t currently discuss.
[2] By my current estimation AWS is closing out at 71 significant feature releases this year, up 5 from my estimate of 66 for 2011.  I will provide a more detailed update soon.
[3] The one possible exception here is the Rackspace team who I give full props to for understanding the nature of the change and doing their best to adapt.
[4] I plan to explore VLANs and the confusion there and explain why VPC is meaingful, but mostly for legacy apps in a future posting; the biggest AWS users, like Zynga and Netflix don’t use VPC or VLANs at all.
[5] Surfacing vendor specific ‘features’ to differentiate your load balancing service simply provides a layer of lock-in that end-users don’t want while making your infrastructure cloud less compatible with others.
[6] I strongly recommend reading Simon Wardley’s piece on [enterprise clouds](http://blog.gardeviance.org/2011/02/private-vs-enterprise-clouds.html).
[7] If you haven’t you *really* should watch this great [video interview](http://vimeo.com/32994957) I did with Lew Tucker, CTO of Cisco Cloud Computing on operational and capital costs for building infrastructure clouds.
[8] Also be sure to watch this [video interview](http://vimeo.com/32951599) I did with Adrian Cockcroft at CloudBeat 2011.
[9] I think my posting from late 2010 on why ‘[Elasticity is NOT Cloud Computing](http://cloudscaling.com/blog/cloud-computing/elasticity-is-not-cloud-computing-just-ask-google)’ still holds up well in this context.
[10] You really should listen to this great podcast ([audio](http://5by5.tv/criticalpath/14), [text summary](http://cloudscaling.com/blog/cloud-computing/two-disruptions-for-the-price-of-one))I did with Horace Dediu of Asymco where we cover a lot of crowd in the relationship between the post-PC era and cloud computing.
[11] Unfortunately, I don’t have a reference for this.  I’ve heard it ‘off the record’ from a number of sources at Cisco and VCE, but I can’t find a public reference on it.  If anyone has such a reference I would appreciate a link in the comments below.  Full credit will be provided.
[Freebie] Quora question: [In what ways is AWS better than it’s competitors?](http://www.quora.com/In-what-ways-is-AWS-better-than-most-of-its-competitors)
