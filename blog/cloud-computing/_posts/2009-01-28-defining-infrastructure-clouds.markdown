---
author: Randy Bias
comments: true
date: 2009-01-28 08:26:21+00:00
layout: post
slug: defining-infrastructure-clouds
title: Defining Infrastructure Clouds
wordpress_id: 2389
old_categories:
- Cloud Computing
---

Unsurprisingly there is still a lot of confusion around 'cloud computing' and it's definition. This even trickles down into attempts by the cloud community to create standards and/or a '[cloud taxonomy](http://news.cnet.com/8301-19413_3-10148806-240.html)'. The fundamental problem is that we're still trying to 'boil the ocean' when pursuing these exercises.  'Cloud' covers so much ground it's pointless to try to a one-size-fits-all approach.

So let's just talk about infrastructure.

**IaaS**

Infrastructure-as-a-Service (IaaS) is that lowest tier of the [cloud pyramid](http://blog.gogrid.com/2008/06/24/the-cloud-pyramid/) where you have the most control, but also require the most management.  IaaS and Internet infrastructure in general isn't nearly as ill-defined as some would have you believe.  It's actually rather straightforward.

**Traditional Datacenters & Infrastructure Taxonomies**

The traditional datacenter is where we need to go to understand what 'Internet infrastructure' really means.  We've been deploying it in one form or another for 20+ years now.  Here is an example based on my experience (from a recent presentation) as a talking point:

![Traditional Datacenter Stack](/assets/media/external/traditional-datacenter-stack.png)
<cite>Traditional Datacenter Stack</cite>

This is pretty close to a canonical infrastructure taxonomy.  We can add/remove some bits,  and I would appreciate input to make this diagram better, but this is essentially the entire story for Internet and datacenter infrastructures.

**Infrastructure Services**

It's interesting, but you'll probably notice that there are a few of areas that have long had niche IaaS players (although we didn't think of them like that) such as:



	
  * [DynDNS](http://www.dyndns.com) / [Dynect](http://www.dynect.com) / [NeuStar](http://www.neustar.biz/) (managed DNS)

	
  * [pool.ntp.org](http://www.pool.ntp.org/) (global NTP server pool)


And now we also have the standard who's who list of IaaS cloud computing players that provide most of the bottom five layers of the stack.

	
  * Amazon Web Services

	
  * GoGrid

	
  * FlexiScale

	
  * ElasticHosts

	
  * RackSpace / Mosso


Soon we'll have some new players in that 'Essential Infrastructure Services' layer at the top.  Eventually we'll see consolidation with folks wrapping most of this entire stack up end-to-end in an on-demand service.

**A Fine Point**

My point is simply this.  We don't need to thrash on defining the cloud, building cloud taxonomies, and coming together on open standards if we just stop trying to do it all at once.  What we really need is for folks to work together at each 'layer' of the pyramid and work towards the common goals we each have.
