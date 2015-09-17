---
title: 'Defining Infrastructure Clouds'
link: http://cloudscaling.com/blog/cloud-computing/defining-infrastructure-clouds/
author: Randy Bias
description: 
post_id: 2389
created: 2009/01/28 00:26:21
created_gmt: 2009/01/28 08:26:21
comment_status: open
post_name: defining-infrastructure-clouds
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Defining Infrastructure Clouds

Unsurprisingly there is still a lot of confusion around 'cloud computing' and it's definition. This even trickles down into attempts by the cloud community to create standards and/or a '[cloud taxonomy](http://news.cnet.com/8301-19413_3-10148806-240.html)'. The fundamental problem is that we're still trying to 'boil the ocean' when pursuing these exercises.  'Cloud' covers so much ground it's pointless to try to a one-size-fits-all approach. So let's just talk about infrastructure. **IaaS** Infrastructure-as-a-Service (IaaS) is that lowest tier of the [cloud pyramid](http://blog.gogrid.com/2008/06/24/the-cloud-pyramid/) where you have the most control, but also require the most management.  IaaS and Internet infrastructure in general isn't nearly as ill-defined as some would have you believe.  It's actually rather straightforward. **Traditional Datacenters & Infrastructure Taxonomies** The traditional datacenter is where we need to go to understand what 'Internet infrastructure' really means.  We've been deploying it in one form or another for 20+ years now.  Here is an example based on my experience (from a recent presentation) as a talking point: [caption id="" align="aligncenter" width="485" caption="Traditional Datacenter Stack"]![Traditional Datacenter Stack](http://neotactics-public.s3.amazonaws.com/traditional-datacenter-stack.png)[/caption] This is pretty close to a canonical infrastructure taxonomy.  We can add/remove some bits,  and I would appreciate input to make this diagram better, but this is essentially the entire story for Internet and datacenter infrastructures. **Infrastructure Services** It's interesting, but you'll probably notice that there are a few of areas that have long had niche IaaS players (although we didn't think of them like that) such as: 

  * [DynDNS](http://www.dyndns.com) / [Dynect](http://www.dynect.com) / [NeuStar](http://www.neustar.biz/) (managed DNS)
  * [pool.ntp.org](http://www.pool.ntp.org/) (global NTP server pool)
And now we also have the standard who's who list of IaaS cloud computing players that provide most of the bottom five layers of the stack. 
  * Amazon Web Services
  * GoGrid
  * FlexiScale
  * ElasticHosts
  * RackSpace / Mosso
Soon we'll have some new players in that 'Essential Infrastructure Services' layer at the top.  Eventually we'll see consolidation with folks wrapping most of this entire stack up end-to-end in an on-demand service. **A Fine Point** My point is simply this.  We don't need to thrash on defining the cloud, building cloud taxonomies, and coming together on open standards if we just stop trying to do it all at once.  What we really need is for folks to work together at each 'layer' of the pyramid and work towards the common goals we each have.

## Comments

**[Matthew Small](#69 "2009-01-30 07:14:34"):** Your fine point is indeed that! The discussion boards are overloaded trying to roll all these problems into one conclusion. The cloud is much larger and more complicated then that would allow anyway. Divide and conquer.  
  
Great new blog Randy. Keep up the good work.

**[randybias (Randy Bias)](#70 "2009-01-28 08:38:48"):** Defining Infrastructure Clouds http://tinyurl.com/cvq9ly

**[jtimberman (jtimberman)](#71 "2009-01-28 16:00:37"):** http://is.gd/hxks - Concise summary of Infrastructure, excellent points about DNS and NTP services! (Thanks [@randybias](http://twitter.com/randybias))

**[Article Submission](#72 "2010-07-02 17:21:07"):** Cloud computing is the future. I love google's cloud apps

**[Bo Cramer](#73 "2010-07-06 12:41:54"):** Nice article, here's just another post about the strength and security within cloud infrastructure. [Cloud Infrastructure has a Hard Core Centert](http://blog.sonian.com/bid/30404/The-Cloud-has-a-Hard-Core-Center-Archiving-Safe-in-the-Cloud)

**[800 calorie diet](#74 "2010-07-12 20:22:17"):** Golden. Great, useful info.

