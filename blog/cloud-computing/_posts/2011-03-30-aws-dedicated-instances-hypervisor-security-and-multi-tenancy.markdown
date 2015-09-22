---
author: Randy Bias
comments: true
date: 2011-03-30 22:55:02+00:00
layout: post
slug: aws-dedicated-instances-hypervisor-security-and-multi-tenancy
title: AWS Dedicated Instances, Hypervisor Security, and Multi-tenancy
wordpress_id: 1831
old_categories:
- Cloud Computing
tags:
- amazon
- audits
- aws
- cloud
- cloudscaling
- commoditization
- EC2
- enterprise
- predictions
- Security
- Storage
- Virtualization
---

Most everyone in the blog ecosystem has missed both the point and some of the economics of [AWS Dedicated Instances](http://aws.amazon.com/dedicated-instances/) that were recently announced.  Folks like The Register focus on how a single virtual instance can cost [$109,324 for a year](http://www.theregister.co.uk/2011/03/29/amazon_dedicated_ec2_instances/) without really understanding the positioning and value proposition of this AWS offering.  Another blog posting claims dedicated instances are "[Un-cloudy](http://www.readwriteweb.com/cloud/2011/03/amazon-web-services-adds-an-un.php)". Let's be honest folks, we might be able to claim Amazon is a lot of things, but foolish or 'un-cloudy' is not one of them.  Frankly, I think since AWS is pretty much driving the definition of IaaS/"infrastructure cloud" right now, calling them 'Un-cloudy' is unreasonable.

Let's put this all to bed right now.  We're going to look at the issues around multi-tenancy, security, pricing, and positioning.

<!-- more -->

**Market Positioning**
I'll go into depth on this in the near future as it's tightly related to my recent [postings](http://cloudscaling.com/blog/cloud-computing/cloud-connect-2011-wrap-up) and [presentations](http://www.slideshare.net/randybias/enterprise-cloud-myths) on 'enterprise clouds' (cloud-washed enterprise computing & virtualization systems).  Right now though, the key thing to understand is that AWS is *already* in the business of servicing enterprise customers regardless of security concerns.

Enterprises, like most other businesses, have two key adoption types: greenfield applications and legacy applications.  Greenfield enterprise applications have been adopting AWS and other commodity clouds for some time now.  During that same time, AWS has been very busy adding enterprise friendly features to increase the ability for legacy enterprise applications to adopt EC2.

A great example of this is [Virtual Private Cloud (VPC)](http://aws.amazon.com/vpc/), which originally provided simple layer-2 VLAN/Ethernet emulation combined with a VPN termination point.  Now, as of their latest release it also allows creating complex networking topologies, just like in a traditional enterprise datacenter.

Dedicated Instances are yet another arrow in the AWS quiver that reduces friction for enterprise adoption of existing legacy applications.  This is an enterprise focused feature.  It reduces concerns around security of the hypervisor and 'sharing'.  Reduces, not eliminates.

It's also worth noting that while billed as 'Dedicated Instances', Amazon has already been effectively selling dedicated VMs/instances in their HPC offering. [1]

**Hypervisor Security**
Whether you or I believe hypervisor security issues are relevant doesn't matter.  Some people clearly do and not sharing the hypervisor may be a requirement in some regulatory and audit situations.  Providing customers a dedicated physical server and reducing sharing to only the network and (maybe) storage[2] is seen as a win by some security and compliance people.

For large enterprises, getting over that security and compliance hump is important. Frankly, my recent observation is that when a massive disruption is happening the incumbents will focus on creating Fear, Uncertainty, and Doubt (FUD) in key areas.  One is security.  Many of the threatened enterprise IT vendors specifically throw this up as a reason to avoid adopting public commodity clouds or using their same approaches to build your own cloud.  Dedicated Instances remove this obstacle.

**Multi-Tenancy**
Perhaps the most pernicious idea out there is that this is somehow 'Uncloudy' because the hypervisor is not shared.  I'm not sure how this kind of thing gets started, but at it's roots it assumes that multi-tenancy is a core property of infrastructure clouds and that it is only achieved via the hypervisor.  Taking aside the definition of 'multi-tenancy' and whether it's a core property, it should be noted that clouds 'share' many resources, of which the CPU/server is only one.  They also can share storage, networking, billing systems, etc.

Don't misunderstand me.  I *do* think some kind of multi-tenancy is important, but there is a spectrum of multi-tenancy from 'a little' to 'a lot'.  Also, what you call a 'tenant' is critical.  Finally, tenancy happens differently in SaaS from PaaS and IaaS.  The tenancy models are very very different.

So, let's dig into this notion of hypervisor tenancy.  I have a couple of diagrams to show my point.  Assume we have 6 customers with 4 instances each on a cloud with 6 compute nodes.  Randomly distributed we see something roughly like this:


[![](/assets/media/2011/03/hypervisor-shuffle-pt1.png)](/assets/media/2011/03/hypervisor-shuffle-pt1.png)




Voila!  Multi-tenancy.  Everyone is happy.  We have a cloud, people.




However, if we re-shuffle these instances and 'bin pack' them onto dedicated servers, we suddenly turn off the multi-tenancy:




[![](/assets/media/2011/03/hypervisor-shuffle-pt2.png)](/assets/media/2011/03/hypervisor-shuffle-pt2.png)




What's different here?  Have we truly lost multi-tenancy?  Customers are no longer sharing hypervisors and nothing has changed but that we've reshuffled the instances.  But perhaps we haven't lost multi-tenancy.  Networking, storage, and other resources are still shared.




Let's look at a more real world example, though, since most clouds don't run at 100% capacity[3]:




[![](/assets/media/2011/03/hypervisor-shuffle-pt3.png)](/assets/media/2011/03/hypervisor-shuffle-pt3.png)


Here we have a cloud running at about 75% utilization rate with instances randomly distributed.  This is in pretty good shape, but of course, all of these open 'slots' aren't generating revenue anyway.  Of course, that's part of the business model, so no harm, no foul.

Time to reshuffle!


[![](/assets/media/2011/03/hypervisor-shuffle-pt4.png)](/assets/media/2011/03/hypervisor-shuffle-pt4.png)


Right, so now we're still running at 75% for the entire cloud, but some customers are 25% utilization for their dedicated servers, some 50%, and some 100%.  Our cloud wide efficiency hasn't been reduced significantly, but per customer it has.  This also means that customers are going to control the efficiency rate quite a bit more we would like, holding certain physical servers to themselves if this is the same as the AWS Dedicated Instances model.

This is where AWS rather clever pricing comes in.  They simply charge a sort of 'tax' across a single region of $10/hr if you choose to use this capability.  This tax effectively makes up for any inefficiency created by allowing customers to hold open a few more instance slots than normal.

**AWS Dedicated Instances Pricing**
Again, the confusion on whether this feature is 'cost effective' mostly comes from the Register's [biased assessment](http://www.theregister.co.uk/2011/03/29/amazon_dedicated_ec2_instances/) of the costs.  This feature is not targeted at individual consumers, but large enterprises looking to adopt en masse.  For such customers I've heard of monthly run rates between 100K-1M in usage charges.  $12M/year for a large enterprise is a drop in the bucket.  $1.2M/year doesn't even touch the radar.

As an example, if a large enterprise was spending $1M/month and wants to get slightly better security, much better compliance, they would have to spend a whopping $10/hr per AWS region, roughly $7200/month[4].  That's $86,400/year.  Let's see, that's an addition of .7% to their total annual spend on AWS.  Is slightly better security and ability to meet compliance standards worth >1% in additional cost?

If that same enterprise was only spending $100K/month, then we are looking at a 7% addition to total annual spend.  I don't know what the value is of the AWS Dedicated Instances feature is to such a large customer, but I'm certain it's more than 1-7% addition in additional spending.  Probably much more.

This pricing makes AWS Dedicated Instances extremely good value for money for a large business.  Combined with the [new VPC features](http://aws.typepad.com/aws/2011/03/new-approach-amazon-ec2-networking.html) and being able to ride [Amazon's innovation curve](http://cloudscaling.com/blog/cloud-computing/amazon-web-services-rapid-release-cycle), constant [cost reduction cycle](http://cloudscaling.com/blog/cloud-computing/aws-price-reduction), and the other benefits of a large commodity public cloud provider, it's hard not to find the whole offering rather compelling.

**Conclusion**
Better security, better compliance, less impedance mismatch with legacy applications, ability to onboard enterprise customers, and still cloudy.  This is a net win for everyone involved: AWS, enterprise customers, and the cloud community as a whole.

BTW, there are whispers that AWS has significant amounts of other related features that will further reduce impedance mismatch with enterprise clouds.  I expect that anyone sitting on an enterprise cloud (public or private) that doesn't have an innovation cycle matching Amazon's is going to get run over in the next year or two.  More from us on remaining competitive soon, though.

**UPDATE**: Cleaned up some language and fixed some typos.



* * *

[1] I know this because the [AWS HPC GPU offering](http://aws.amazon.com/ec2/hpc-applications/) provides 2xNvidia GPUs for advanced HPC use cases; you can only have 2 GPUs in a single box because server boards only have 2 PCI-E x16 slots; in addition, each HPC system gets 8 full Nehalem cores and AWS is known not to oversubscribe cores.
[2] Ephemeral storage on instances is not shared.  Only Elastic Block Storage (EBS) is shared.  So it's really your call on whether or not you share disk or not.
[3] As I said before, most target about 80% utilization rates.  Anything under 70% sinks the business model.
[4] I'm glossed over the additional per instance fee here for brevity's sake.  It doesn't change the numbers significantly.  It's still a nominal increase in costs for a significant increase in value no matter how you slice it.
