---
author: Randy Bias
comments: true
date: 2010-07-05 15:00:34+00:00
layout: post
slug: rumor-mill-google-ec2-competitor-coming-in-2010
title: 'Rumor Mill: Google EC2 Competitor Coming in 2010?'
wordpress_id: 1174
old_categories:
- Cloud Computing
tags:
- amazon
- aws
- cloud
- EC2
- google
- google storage
- rumor mill
- S3
---

I've heard from a somewhat reliable source that Google is working on their Amazon EC2 competitor.  Yes, some kind of on-demand virtual servers.  I would have been the last person to guess that Google would take this direction[1], but you have to admit it makes a certain sense from their perspective.  Consider:



	
  * Amazon's EC2 is [clearly generating Real Revenue (TM)](http://cloudscaling.com/blog/cloud-computing/amazons-ec2-generating-220m-annually) and could be at 500-750M in revenue for 2010

	
  * Google has a massive global footprint and is north of [one million server](http://www.pandia.com/sew/481-gartner.html)s

	
  * The support structure for these servers includes a [huge investment](http://royal.pingdom.com/2008/04/11/map-of-all-google-data-center-locations/) in datacenters, networking, and related

	
  * The Googleplex houses an extremely large number of talented engineers in relevant areas: networking, storage, Linux kernel, server automation, etc.

	
  * Google Storage [recently went into BETA](http://code.google.com/apis/storage/) and is accepting developer signups


This last is perhaps one of the more telling signs.  As you may be aware, Amazon's Simple Storage Service (S3) pre-dates Amazon's Elastic Compute Cloud (EC2).  When Amazon launched in Europe they first deployed S3 followed by EC2.  The same happened with their Asia/Pac deployment.

Amazon has built AWS in such a way that all of the services are synergistic, but in particular, EC2 is dependent on S3 as a persistent storage [system of record](http://en.wikipedia.org/wiki/System_of_record).  EC2 AMIs originate from and are stored in S3, it's the long term backing store for [Elastic Block Storage](http://aws.amazon.com/ebs/) (EBS) and EBS snapshots, and it's safe to assume that many other kinds of critical data that AWS relies on are stored there.

Would Google take a different approach?  It's doubtful.  Amazon's S3 is built to be a highly scalable storage platform[2]. Google's own GoogleFS and BigTable server similar purposes.  It's certain that Google would use related design principles and hence we could see the Google Storage as a prelude to a Google on-demand virtual server service (Google Servers???).

Combined with the rumor I heard from a reasonably informed source I think we can look forward to an EC2 competitor, hopefully this year.

What I want to bring to folks attention here is that if another credible heavyweight enters into this market it will have a tremendous impact in further driving the [utilitization](http://cloudscaling.com/blog/cloud-computing/debunking-the-no-such-thing-as-a-private-cloud-myth) of cloud services.  In the medium term it will also threaten hosting providers and '[enterprise](http://cloudscaling.com/blog/cloud-computing/bifurcating-clouds) [clouds](http://cloudscaling.com/blog/technology/must-read-on-the-cloud)'.

Why?  I think what many hosting providers fail to understand is that Amazon and Google, particularly if fueled by direct competition, **must** grow up into the enterprise space.  Just as in the Innovator's Dilemma, they will eventually provide most of the features of any 'enterprise' cloud, which means that if you aren't building to be competitive with Amazon and Google, you aren't in the public cloud game.

Much more detail on this in a future posting.



* * *

[1] My best would have been that Google put more weight behind PaaS solutions like Google App Engine (GAE) and related, which are more 'google-y'.
[2] See the [whitepaper](http://s3.amazonaws.com/AllThingsDistributed/sosp/amazon-dynamo-sosp2007.pdf) (PDF) on their Dynamo technology behind S3.  Also check out [Riak](http://www.basho.com/Riak.html) from [Basho](http://www.basho.com/) that is designed around the same techniques.
