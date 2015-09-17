---
title: 'Amazon Threatens VPS Market'
link: http://cloudscaling.com/blog/cloud-computing/amazon-threatens-vps-market/
author: Randy Bias
description: 
post_id: 367
created: 2009/06/30 09:00:42
created_gmt: 2009/06/30 16:00:42
comment_status: open
post_name: amazon-threatens-vps-market
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Amazon Threatens VPS Market

One of the more overlooked aspects of the cloud computing market is the imminent threat to the [Virtual Private Server](http://en.wikipedia.org/wiki/Virtual_private_server) (VPS) market.  Many look to the stardom success of Web 2.0 startups like [Animoto](http://blog.rightscale.com/2008/04/23/animoto-facebook-scale-up/) and [SmugMug](http://blogs.smugmug.com/don/2008/06/03/skynet-lives-aka-ec2-smugmug/), who clearly derive tremendous value from Amazon Web Services ([AWS](http://aws.amazon.com)), as a measure of cloud computing adoption.  Others point to the imminent embrace of 'the Enterprise' although uptake is still slow. Unaccounted for in all of this is where the real dollars in today's market are.  The reality is that they are largely provided by VPS customers.  Possibly as much as 50% of today's cloud computing market is a single customer buying a single server and leaving it on indefinitely. One has to wonder what might happen if large 'hosters' became aware of this (they are) and how current cloud providers might capitalize on it in the short term (they will). **VPS Hosting** Virtual Private Server (VPS) hosting is a subset of the larger web and dedicated hosting market.  VPS can be thought of as an interim step between dedicated (physical) server hosting and Infrastructure-as-a-Service ([IaaS](http://en.wikipedia.org/wiki/IaaS)) on-demand hosting.  Essentially you could order a virtual server at a lower price point than a full physical server.  Virtual servers, but not on-demand.  Instead you used the older hosting model of: 

  1. talk to a sales person or fill out an online order form
  2. get a quote
  3. sign a contract
  4. wait for your virtual server to be provisioned (usually 1-2 days)
I wasn't able to find detailed numbers on the size of VPS hosting, but I did find some numbers for the overall hosting market.  It was 12.3B in 2007 and predicted by [T1R](http://www.t1r.com/) to be 24.4B by 2010.  In the years directly prior to 2008, when cloud computing took off, VPS was gaining very steady traction into the hosting market.  It's hard to say how much of that 12.3B was VPS, but by all reports it was a fast growing segment. Add to this that I have heard that large hosting providers like [Peer1](http://www.peer1.com) and [The Planet](http://www.theplanet.com) are seeing a significant impact to their VPS businesses.  Enough to cause them to start moving sooner rather than later on formulating their cloud computing plans.  There are already whispers that both of these folks are building up specialized cloud teams and working on formulating their cloud strategies. Given that the pricing of many cloud providers is more expensive that VPS from a typical provider, why is this happening?  Simply put, customers are showing the hosting market that they value [self-service](/blog/cloud-computing/clouds-are-inherently-self-service) enough to pay a premium for it.  Self-service means:_ on-demand, pay-as-you-go, _and_ use-only-what-you-need._ **Amazon a Near Term Threat?** Given that it's common knowledge that most cloud providers are seeing a bulk of their customers from the VPS segment of hosting and given that Amazon is the 800 lb. Behemoth of cloud computing, they must have a plan.  Right?  One can only speculate, but given that VPS plans are typically at a lower price point and providing a smaller footprint server (i.e. less RAM, less disk) you would think they could accelerate capture of this market by providing smaller server sizes at a lower price point.  This is almost certainly in the cards. Another point that potentially backs up this thinking is the recent release of Amazon's reserved instance pricing, which allows you to pay for your server a year in advance in a single lump sum and receive a steep discount in return (~70%).  You'll notice that Amazon [announced](http://aws.amazon.com/about-aws/whats-new/2009/03/12/amazon-ec2-introduces-reserved-instances/) reserved instances the day after [Rackspace](http://www.rackspace.com) [announced](http://blog.mosso.com/2009/03/breaking-news-mosso-the-rackspace-cloud-announces-availability-of-cloud-servers-and-more/) and launched their [Cloud Servers](http://www.rackspacecloud.com) offering.  As you might expect, Rackspace, a savvy and experienced hosting provider, priced their offering very aggressively and catered towards the low end VPS market from day one. **Amazon Instance Size Changes in the Cards?** The smallest current server available in the Amazon Elastic Compute Cloud (EC2) is a 'small' instance that provides 1.7GB RAM, 160GB disk space, and a single core for $0.10/hr.  Presumably Amazon would either cut that in half (e.g. 758MB RAM) or possibly even smaller (e.g. 512MB or 256MB RAM).  These offerings would compete directly against both VPS and Rackspace's Cloud Server pricing. If Amazon follows their current model and simply slice in half, thirds, or quarters their small instances, pricing might look like: 

  * 768MB: $.05/hr, $.015/hr for a reserved instance
  * 512MB: $.03/hr, $.009/hr for a reserved instance
  * 256MB: $.015/hr $.0045/hr for a reserved instance
This is $30, $22, and $11 per month at full price or $10, $6.50, and $3.25 per month for reserved instances respectively.  Obviously this would have a tremendous impact on the VPS segment of the hosting market. **Summary** There is an imminent threat to hosting companies of any kind that provide VPS services today.  Larger clouds, including the AWS behemoth and Rackspace, are already launching and preparing to launch price competitive services to capture the VPS market.  The threat is serious in that not only do these clouds provide value based on pricing, but they also provide the traditional values of cloud computing around self-service.  This is a double threat against the VPS market and combined there will likely be a rapid exodus from hosting providers that don't have their own cloud strategy.

## Comments

**[Steve](#157 "2009-06-30 11:22:09"):** Good article, always well thought out. I have an observation that contradicts some of your statements, so you can make what you want out of it. Customer's want automation when it's convenient, not all the time. They want it when they are building servers and customizing images, but they don't want it when sales is involved or when things aren't behaving. Your examples of success with amazon have outsourced components that deal with support (Rightscale?), which obfuscates this problem of customers who can't afford a tacked on support.  
  
99.9% of all customers need the warm fuzzies of having someone to speak with when they have concerns that text on a page can't address. For instance, bandwidth. I can't imagine a customer would be comfortable signing up for a service that could potentially cost them thousands of dollars as a result of a hacker turning them into a spam bot or a DDos box.  
  
I guess I'm saying that customer want the Billing model that amazon presents, not necessarily the product. Thanks for the article Randy!

**[Wade M](#158 "2009-06-30 11:53:16"):** Totally agree! I've got a few VPS servers and from time to time look over to AWS looking to see if they've added a cheaper, more VPS like option.  
  
A Image running CentOS & cPanel OOTB will change the VPS landscape entirely.

**[randybias](#159 "2009-06-30 11:54:34"):** Steve, that's not a contradiction. That's a great observation. Certainly you are right about low end customers wanting customer support. This is almost certainly why many of them pick a GoGrid or Rackspace Cloud for their VPS needs rather than an Amazon. Certainly any well-formulated strategy here will complement allowing self-service cloud VPS replacement with a strong support service. Here I think GoGrid and Rackspace have an advantage with their service team models.

**[randybias](#160 "2009-06-30 11:55:40"):** Wade, great point. Yes, cPanel on these smaller instances would go a long way towards further accelerating this change.

**[virtual_host (Virtual Hosting News)](#167 "2009-07-01 04:02:50"):** Amazon Threatens VPS Market | Cloudscaling http://tinyurl.com/mbxonu

**[erincarter (Erin Carter)](#170 "2009-07-01 15:41:54"):** Please RT: [@randybias](http://twitter.com/randybias) Amazon Threatens VPS Market http://tinyurl.com/mbxonu

**[dcsalesservices (Data Center Sales)](#171 "2009-07-02 00:17:38"):** Amazon threatens VPS market:http://cloudscaling.com/blog/cloud-computing/amazon-threatens-vps-market

**[Ellen](#174 "2009-07-05 23:41:33"):** Those are some amazingly low prices. I imagine they will be bought up by people who have had a successful site for less than a year and aren't that experienced.

**[Anonymouse](#179 "2009-07-06 13:11:56"):** This jives with the marketing term "Whole Product". Would you buy a PC if the case were welded shut and you couldn't upgrade the CPU/RAM/HD? Probably not, or at least you'd expect a discount.  
  
The same thing applies to VPS vs Cloud. The VPS "product" doesn't have all the features of a cloud. Even if the customer doesn't want to invest in auto-scaling/code-as-infrastructure/fault-tolerence/etc right now, the customer may be willing to invest in "easy migration path to auto-scaling/etc down the road". The customer pays an extra $10-$20 per month right now, but saves the pain of migrating from a VPS to a cloud provider next year.  
  
Worse news for the VPS vendors is that they are fragmented (tools, walk-thrus, how-tos, resources, etc.) compared to the "one" AWS. That means customers may be willing to pay a premium for AWS. Are we ready to say "nobody ever got fired for choosing AWS"?  
  
I totally agree that AWS hasn't even started to tap that market (and they could/should/will).

**[Eric Novikoff](#180 "2009-07-31 16:25:33"):** There are some serious problems with the cheerleading for AWS going on here. Clearly Amazon has to keep large numbers of servers idle and ready for use to provide the value proposition of massive scalability. Yet, the cost of that overhead (estimated to be 66% by some) doesn't seem to appear on their prices. It's because they're buying the market. And they can afford to. But I don't think it's realistic to base one's business plan on those prices remaining low. And now here we have a discussion about replacing VPSes with EC2. I think it's a long way off. The VPS providers have been honing their economics for much longer than Amazon, often starting with budget Cpanel or colo offerings. Their prices are insanely low - and often (like Amazon in some respects) it truly is insane in that you're getting less than you pay for. I also disagree with the high value of control. We have quite a few erstwhile VPS customers in our cloud and what they want is not control but the opposite: freedom from having to be in control. They want us to manage everything: administration, auto-scaling, incident response, etc. Software has progressed to the point where you can run a high tech business successfully if only you could get away from the whole administration racket, but here we have Amazon training a new generation of "cloud administrators." I think VPSes will be here for a long time, both due to their price advantages as well as the fact that they have more mature support models.

**[randybias](#181 "2009-07-31 17:30:30"):** @Eric Novikoff Eric, Thanks for your comment. You are correct that Amazon needs to keep some capacity available for burst; however, this capacity can be as low as 20%. In addition, as your pool gets larger the % of reserved capacity shrinks. At Amazon's current scale they likely need only 15% or less excess capacity in each availability zone. Also, FYI, I have spoken to many of the original EC2 team and the excess capacity is nowhere near 66%. It's roughly 20%, as it is for most cloud providers. I do not know Amazon's margins, but I suspect them to be at least 50% or higher. In addition, the common trend I'm seeing right now is that hosting providers do the math and realize that cloud computing is a much, much, better business that dedicated servers. There are major efficiency gains for both capex and opex. In capex and opex, because using homogeneous hardware allows buying in bulk and also reduces costs associated with stocking parts and equipment for many configurations. There are major advantages to the hosting providers as well in the costs associated with running the cloud compared to a traditional hosting facility. I'm confused about what you are describing. You're comparing managed VPSes vs. unmanaged VPSes. A managed VPS is more of a managed service product than a straight VPS product. If you abstract away all of the management then of course customers won't care. Regardless, I know for a fact that Amazon is eating away at the VPS market and that larger players see this and are responding to it. I agree with your premise about the value of managed services and abstracting the underlying cloud further. It's absolutely true that there is major value here and likely an area of ENKI's focus, I presume. Regardless, customers will choose what they want and while many want the problem to just go away, others are looking for the ability to get into the guts because they have special requirements. These are typically not the same VPS customers however, but larger web application businesses that need [secret sauce](http://cloudscaling.com/blog/cloud-applications/the-secret-sauce-problem). Best, \--Randy

**[fred](#182 "2010-01-29 05:55:54"):** Hi Ellen, why would they only be bought up by inexperienced site owners. I am currently trying to grapple with what would be the best option for me as a new site owner.

**[fred](#2154 "2010-01-29 06:55:00"):** Hi Ellen, why would they only be bought up by inexperienced site owners. I am currently trying to grapple with what would be the best option for me as a new site owner.

**[Ethen Coreseo](#3064 "2011-09-06 04:44:00"):** Nice Post,Thanks for sharing......

**[Virtual Server Hosting](#3123 "2012-01-04 08:46:00"):** Did the amazon really threaten VPS market about this? VPS today is now on rapid growth infrastructure for most advanced user who are using this for their small and mid sized business.

**[Virtual Server Hosting](#3135 "2012-02-09 11:24:00"):** I like to visit this good post. VPS Hosting is a subset of a larger network and dedicated hosting market. VPS can be considered as a transitional step between the demand for managed dedicated server hosting and infrastructure services.

