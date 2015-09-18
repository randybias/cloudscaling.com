---
author: Randy Bias
comments: true
date: 2007-06-20 14:54:03+00:00
layout: post
slug: when-utility-computing-matters
title: When Utility Computing Matters
wordpress_id: 2330
old_categories:
- Cloud Computing
- Technology
tags:
- Virtualization
---

This entry is partly a rebuttal to Billy Marshall's recent blog entry [Amazon and the CIO Nightmare](http://billyonopensource.blogspot.com/2007/06/amazon-and-cio-nightmare.html) and also partly an opportunity to transition this blog to a place to expound a bit on what interests me in technology and IT.

**Quick Background**
One of the things I did in my [first several jobs](http://www.linkedin.com/in/randybias) was try to automate myself out of those same jobs.  In fact, in one of my early positions I was actually chided for using so much automation, given the net result was that I had spare time to read [USENET news](http://en.wikipedia.org/wiki/USENET).  My immediate manager thought that I was wasting time, but the developers had a different perspective, assured by the fact that the systems just ran and they seemingly had no problems and zero outages.  (A very unusual circumstance in any organization)

Since then, reducing operational costs in terms of labor, capacity planning, and scalability has been something close to my heart.

**The Misconception**
This is why Billy's article feels off-track.  It propagates the myth that the costs of IT infrastructure are solely those of bits and bytes.  It's true, Amazon's Simple Storage Service (S3), Elastic Compute Cloud (EC2), and related services do bring new economies of scale to IT resources such as storage and compute.  These services are available to anyone with a credit card and surely this compelling cost structure will lead to wide adoption over time.

Or, it **would** except there is a major flaw in the theory.  It's not enough to compare these items without comparing the management costs involved.

<!-- more -->
**Operational Costs**
As everyone knows the costs of storage and compute (per unit) have been on [a steady decline](http://en.wikipedia.org/wiki/Moore's_Law) for as long as we can remember.  [Amazon Web Services](http://aws.amazon.com/) simply combine Amazon's buying power with today's already rock-bottom storage and compute costs to the masses in an [on-demand](http://en.wikipedia.org/wiki/On_Demand) fashion.

For storage this turns out be an amazing advantage.  Download one simple tool, upload your files to Amazon's S3 and voila you're done.  You can retrieve them or share them at your leisure.  My 10-year old cousin could do it.

But Amazon's Elastic Compute Cloud (EC2) is a whole different ball game.  In a matter of a few minutes my 10-year old cousin can instantiate a server.  A plain jane Amazon virtual machine, one customized by a third party or even a sophisticated [rPath](http://en.wikipedia.org/wiki/RPath) appliance.  And then?

A single virtual machine, even a virtual appliance, has little value in isolation for folks in the enterprise.  And probably little value to most enterprise employees given that any rPath appliance they instantiate on Amazon could disappear without notice and with complete loss of data (more below).

The reality is, for the enterprise, once the storage / compute have been commoditized the real cost that is left is human labor.  Again, a single server or virtual appliance has little value in isolation.  At the bare minimum it requires care and feeding, but in most cases it requires other servers or appliances to provide adjunct services.

**Appliance Clusters**
Servers and appliances work in groups to acheive a given effect.  For example, at the edge of your network an enterprise will monitor and protect against a multitude of potential malicious activities, including viruses, spam, automated attacks, real-time attackers, inappropriate content, information leaks, and many more.  There is not only one appliance to solve this problem, but savvy customers don't want a single appliance.  They want [one application on one server or appliance](http://neotactics.com/blog/technology/netapp-gets-virtualization/).

Soon your cluster (aka 'architecture') of security appliances is a large group requiring significant care and feeding.  Virtual appliances themselves don't provide this cluster management capability and neither do commodity virtual grids such as Amazon's Elastic Compute Cloud.

**The Devil in the Details**
But it's even more complex than this.  Let's say you want to deploy a full-scale production system to leverage Amazon's scale.  Many challenges will arise.

For one, Amazon doesn't guarantee your server will stay around.  It's a virtual server that goes away immediately upon being shutdown, whether due to a mistake, by maliciousness, or due to hardware failure.  All data is lost and nothing is recoverable.  There are ways to solve this particular problem, but it takes skill and expertise to build redundant systems / storage around Amazon's service offerings, particularly EC2.

Large scale systems don't run themselves.  They need to be tested, monitored, triaged (when problems arise), new code deployed, and capacity needs to be added when needed to handle load.  [sidenote: my personal opinion is that these are **all** [issues of "scale"](http://www.cloudscale.net/) obviously.]

_This matters to the enterprise._

Simply put, while most Amazon Web Services are self-service in the truest sense, the Elastic Compute Cloud is an order of magnitude (or more) complex in terms of management and usage.  Just provisioning a server on demand in minutes doesn't help one build real web-scale systems.

**The Real Cost Comparison**
There are different estimates of how many servers per sysadmin/IT staffer you can run, but they range between 20 and 100 servers per.  Let's look at both ends of the spectrum.  We'll assume a median income (Silicon Valley) of an IT worker of $80,000 per year.  And that all of your EC2 instances are wired up 24x365, which is 8760 hours total per year.

With 1 instance, that's $9.13/hour of time.  At 20, it's $.46/hour of time and at 100, it's a mere $.05.  Of course, this is just a back of the napkin calculation, but the point I'm driving to here is that at the low end of the spectrum your labor management costs are 5x the cost of your EC2 instance, not including non-labor related management costs.  At the high end, where a single administrator runs 100 servers, your labor costs are still 50% of your costs to use EC2.

**When Utility Computing Matters**
This is why utility computing (i.e. the 'compute' not the 'storage') will matter most when we have driven the costs of systems management to a place where they are reasonable.  Is it 10x the cost of the compute?  5x?  50%?  I don't know.  The market will tell us for sure, but I will put a stake in the ground and say that the compelling cost structure of utility computing will really matter when the operational costs to run that compute infrastructure are within 2x the costs of the infrastructure itself.
