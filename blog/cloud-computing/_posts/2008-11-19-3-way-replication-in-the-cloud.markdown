---
author: Randy Bias
comments: true
date: 2008-11-19 10:41:06+00:00
layout: post
slug: 3-way-replication-in-the-cloud
title: 3-way Replication in the Cloud
wordpress_id: 2367
old_categories:
- Cloud Computing
- Technology
tags:
- Storage
---

It's been busy here.  I'll announce why soon, but one thing that caught my eye recently that just can't go by is the imminent [open sourcing of DRBD+](http://fghaas.wordpress.com/2008/11/17/drbd-plus-is-going-open-source/).  DRBD+ is the commercial version of DRBD.  This has serious implications for anyone who is serious about building real world cloud applications.

[DRBD](http://en.wikipedia.org/wiki/DRBD) can be thought of as network-based disk drive mirroring (aka 'RAID-1').  Essentially, you make sure that all writes to a local disk happen to a remote disk simultaneously or near-simultaneously.  Combined with today's modern [journaling filesystems](http://en.wikipedia.org/wiki/Journaling_filesystem) and you have pretty a pretty bullet-proof solution.  In the past I've used DRBD to build very robust HA clustered appliances and the like.  I was also one of the first folks to test it on EC2, although I did not publish results at the time.[1]

DRBD worked extremely well on EC2, but there was always one key drawback:  It only mirrors disks between two hosts.  Dual redundancy, in this case, isn't sufficient on EC2.  It is quite possible you could lose two hosts; however, the odds of losing three of three are extremely small.  That's where DRBD+ comes in.

One of the most compelling features of DRBD+ is that it allows 3-way or 4-way replication.  So, now if you need to build a redundant HA cluster that can **not** fail on a cloud computing system it's much much easier than before.

Many kudos to the [Linbit team](http://www.linbit.com/en) for taking this direction.  I think they have opened up an opportunity for cloud solution providers to do some very interesting things.



* * *


1.  Works great.  Very fast replication on EC2 between nodes.  Probably even faster on a hardware virtualization platform like GoGrid or FlexiScale.
