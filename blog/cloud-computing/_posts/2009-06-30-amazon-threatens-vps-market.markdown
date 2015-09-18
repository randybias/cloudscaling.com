---
author: Randy Bias
comments: true
date: 2009-06-30 16:00:42+00:00
layout: post
slug: amazon-threatens-vps-market
title: Amazon Threatens VPS Market
wordpress_id: 367
old_categories:
- Cloud Computing
---

One of the more overlooked aspects of the cloud computing market is the imminent threat to the [Virtual Private Server](http://en.wikipedia.org/wiki/Virtual_private_server) (VPS) market.  Many look to the stardom success of Web 2.0 startups like [Animoto](http://blog.rightscale.com/2008/04/23/animoto-facebook-scale-up/) and [SmugMug](http://blogs.smugmug.com/don/2008/06/03/skynet-lives-aka-ec2-smugmug/), who clearly derive tremendous value from Amazon Web Services ([AWS](http://aws.amazon.com)), as a measure of cloud computing adoption.  Others point to the imminent embrace of 'the Enterprise' although uptake is still slow.

Unaccounted for in all of this is where the real dollars in today's market are.  The reality is that they are largely provided by VPS customers.  Possibly as much as 50% of today's cloud computing market is a single customer buying a single server and leaving it on indefinitely.

One has to wonder what might happen if large 'hosters' became aware of this (they are) and how current cloud providers might capitalize on it in the short term (they will).

<!-- more -->**VPS Hosting**

Virtual Private Server (VPS) hosting is a subset of the larger web and dedicated hosting market.  VPS can be thought of as an interim step between dedicated (physical) server hosting and Infrastructure-as-a-Service ([IaaS](http://en.wikipedia.org/wiki/IaaS)) on-demand hosting.  Essentially you could order a virtual server at a lower price point than a full physical server.  Virtual servers, but not on-demand.  Instead you used the older hosting model of:



	
  1. talk to a sales person or fill out an online order form

	
  2. get a quote

	
  3. sign a contract

	
  4. wait for your virtual server to be provisioned (usually 1-2 days)


I wasn't able to find detailed numbers on the size of VPS hosting, but I did find some numbers for the overall hosting market.  It was 12.3B in 2007 and predicted by [T1R](http://www.t1r.com/) to be 24.4B by 2010.  In the years directly prior to 2008, when cloud computing took off, VPS was gaining very steady traction into the hosting market.  It's hard to say how much of that 12.3B was VPS, but by all reports it was a fast growing segment.

Add to this that I have heard that large hosting providers like [Peer1](http://www.peer1.com) and [The Planet](http://www.theplanet.com) are seeing a significant impact to their VPS businesses.  Enough to cause them to start moving sooner rather than later on formulating their cloud computing plans.  There are already whispers that both of these folks are building up specialized cloud teams and working on formulating their cloud strategies.

Given that the pricing of many cloud providers is more expensive that VPS from a typical provider, why is this happening?  Simply put, customers are showing the hosting market that they value [self-service](http://cloudscaling.com/blog/cloud-computing/clouds-are-inherently-self-service) enough to pay a premium for it.  Self-service means:_ on-demand, pay-as-you-go, _and_ use-only-what-you-need._

**Amazon a Near Term Threat?**

Given that it's common knowledge that most cloud providers are seeing a bulk of their customers from the VPS segment of hosting and given that Amazon is the 800 lb. Behemoth of cloud computing, they must have a plan.  Right?  One can only speculate, but given that VPS plans are typically at a lower price point and providing a smaller footprint server (i.e. less RAM, less disk) you would think they could accelerate capture of this market by providing smaller server sizes at a lower price point.  This is almost certainly in the cards.

Another point that potentially backs up this thinking is the recent release of Amazon's reserved instance pricing, which allows you to pay for your server a year in advance in a single lump sum and receive a steep discount in return (~70%).  You'll notice that Amazon [announced](http://aws.amazon.com/about-aws/whats-new/2009/03/12/amazon-ec2-introduces-reserved-instances/) reserved instances the day after [Rackspace](http://www.rackspace.com) [announced](http://blog.mosso.com/2009/03/breaking-news-mosso-the-rackspace-cloud-announces-availability-of-cloud-servers-and-more/) and launched their [Cloud Servers](http://www.rackspacecloud.com) offering.  As you might expect, Rackspace, a savvy and experienced hosting provider, priced their offering very aggressively and catered towards the low end VPS market from day one.

**Amazon Instance Size Changes in the Cards?**

The smallest current server available in the Amazon Elastic Compute Cloud (EC2) is a 'small' instance that provides 1.7GB RAM, 160GB disk space, and a single core for $0.10/hr.  Presumably Amazon would either cut that in half (e.g. 758MB RAM) or possibly even smaller (e.g. 512MB or 256MB RAM).  These offerings would compete directly against both VPS and Rackspace's Cloud Server pricing.

If Amazon follows their current model and simply slice in half, thirds, or quarters their small instances, pricing might look like:



	
  * 768MB: $.05/hr, $.015/hr for a reserved instance

	
  * 512MB: $.03/hr, $.009/hr for a reserved instance

	
  * 256MB: $.015/hr $.0045/hr for a reserved instance


This is $30, $22, and $11 per month at full price or $10, $6.50, and $3.25 per month for reserved instances respectively.  Obviously this would have a tremendous impact on the VPS segment of the hosting market.

**Summary**

There is an imminent threat to hosting companies of any kind that provide VPS services today.  Larger clouds, including the AWS behemoth and Rackspace, are already launching and preparing to launch price competitive services to capture the VPS market.  The threat is serious in that not only do these clouds provide value based on pricing, but they also provide the traditional values of cloud computing around self-service.  This is a double threat against the VPS market and combined there will likely be a rapid exodus from hosting providers that don't have their own cloud strategy.
