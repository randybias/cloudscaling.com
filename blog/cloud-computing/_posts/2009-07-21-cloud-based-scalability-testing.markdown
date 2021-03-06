---
author: Randy Bias
comments: true
date: 2009-07-21 15:30:15+00:00
layout: post
slug: cloud-based-scalability-testing
title: Cloud-Based Scalability Testing
wordpress_id: 425
old_categories:
- Cloud Computing
tags:
- cloud
- cloudscaling
- enterprise
- performance
- scaling
---

Today [SOASTA](http://www.soasta.com) announced their [performance certification program](http://www.soasta.com/company/news/pr20090721.html) for websites.  This is a pretty interesting development as far as I am concerned.  I've watched SOASTA from afar since their inception and I have always though it was a particularly clever use of cloud computing.  Their approach is essentially to use someone else's resources, Amazon in this case, to scale their test systems up and down based on customer demand and scalability testing requirements.

I'm enamored of the use cases that are relatively unique to cloud computing.  Before cloud computing someone like SOASTA would have had to build out their own infrastructure, much like their predecessor Keynote Systems.  The elasticity of cloud computing is more amenable to use cases like scalability and performance testing.  Quality Assurance gains quite a bit of leverage from cloud computing; more than just performance & scalability testing.  For instance, my reference customer for the CloudScale Project was [eGain Communications](http://www.egain.com) who were massively parallelizing test cases to reduce full regressions of their enterprise software suite 10x.  This is something that wasn't possible before truly elastic computing.

As an aside, one minor quibble I have with the SOASTA announcement is the notion that it's _performance_ rather than _scalability_.  I think the difference can be hard to understand for many, but essentially, performance is generally considered the measurement of latency or user experience for a given system.  Performance would be measured by a single actor in a system (i.e. customer in the case of most web apps).  Whereas [scalability testing](http://lethargy.org/~jesus/archives/91-Scalability-vs.-Performance-it-isnt-a-battle.html) determines if an overall system is able to maintain it's performance as more actors are added.

So while it's disappointing that SOASTA (and others like [Keynote](http://www.keynote.com)) choose to talk 'performance', it's still great to see use cases that are clearly cloud enabled start to become very effective product offerings.
