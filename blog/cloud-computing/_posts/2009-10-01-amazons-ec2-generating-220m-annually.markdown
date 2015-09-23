---
author: Randy Bias
comments: true
date: 2009-10-01 15:00:45+00:00
layout: post
slug: amazons-ec2-generating-220m-annually
title: Amazon's EC2 Generating 220M+ Annually
wordpress_id: 569
old_categories:
- Cloud Computing
tags:
- amazon
- aws
- cloud
- cloudscaling
- elastic compute cloud
---

Today I'm going to tell you how much revenue Amazon's Elastic Compute Cloud (EC2) is generating.  After all, you, my regular readers, come to this blog for its insight, original thinking, and gems of wisdom.  Today I have something particularly juicy for you: _real-world numbers on Amazon's EC2 size and revenue._

Recently [Ruv Cohen](http://twitter.com/ruv) talked about how cloud computing is [taking off](http://www.elasticvapor.com/2009/09/business-of-cloud-computing-is-booming.html) and [Guy Rosen](http://twitter.com/guyro) made an [attempt](http://www.jackofallclouds.com/2009/09/anatomy-of-an-amazon-ec2-resource-id/) to derive EC2 usage information.  What I have today is actual verified EC2 numbers plus some guesses and a rough model of it's current annual usage.  Not only do I have a pretty good line on Amazon EC2's size and usage, but we can use that to infer revenue to a fairly close approximation.  Once we have EC2's revenue numbers we also have a good notion of the overall size of the current infrastructure cloud computing (IaaS) market.  Looking at Amazon's most recent [10-Q](http://investing.businessweek.com/research/stocks/financials/secfilings.asp?ric=AMZN.O) we can even make a guess about the annual growth rate.

**How Big is Amazon's EC2?**
Big.  40,000 servers.  I have independently confirmed this with at least two sources close to EC2.  Obviously, I can't reveal them, but they are personally known to me and reliable. The first source gave me the 40,000 number and the second confirmed that the number is close.  At most, we're talking +/- 10,000 servers, so within 25%, but I'm guessing I'm very close.  More like +/- 5K. Regardless, within 25% is more than close enough for us to get a pretty good gauge.  For our purposes today we'll go with the 40K number.

Before we dive in, I have to tell you that it's pretty amazing to see a real number for the size of the largest part of Amazon Web Services (AWS).  What's even more amazing is that I can tell you a whole lot more about EC2 and it's revenue.

**EC2's Characteristics**
Let me tell you a bit about EC2.  There are roughly three buckets of certainty here and I'll divide these appropriately.  For the sake of brevity I'll deliver these in a bullet list.

_Known For Reasonably Certain_



	
  * Amazon does not oversubscribe cores

	
  * Amazon uses Rackable servers, mostly 2U dual-socket systems, with 8 cores, probably the [S2108](http://www.sgi.com/products/servers/standard_depth/s2108.html) models

	
  * Some of their older systems are 2U dual-socket systems with 4 cores total

	
  * The AWS target cost for servers is roughly $2-2.5K

	
  * Initial overall target utilization rate for EC2 was 70-75%

	
  * Recently AWS has been having regular capacity issues (due to growth?)

	
  * Amazon is beginning to move some retail site capacity onto EC2

	
  * RAID is used for the disk subsystem, probably in a RAID-0 (striped) configuration[1]


_Mostly Sure_



	
  * Most of the servers are likely in the US availability zones vs. the EU zones, maybe 75-80% of total capacity

	
  * Amazon probably runs 8 500GB SATA drives per system

	
  * At 2U, Amazon runs 16-18 servers per rack, probably 16

	
  * Amazon uses the same, or a very similar, physical hardware platform for all instances sizes; it has changed over time and there are a few generations, but they don't buy or 'silo' the hardware if they can help it[2]


_Inferred or Assumed_



	
  * At 40,000 servers evenly distributed across 6 availability zones we know:

	
  * ___ 6,700 servers per zone

	
  * ___ 417 racks per zone, 2,500 racks total

	
  * ___ 2 * 30A circuits per rack (assuming no redundant PSUs) at a draw of probably 6.5kw

	
  * ___ That's roughly 16.25MW of total power, not including that of the critical systems (HVAC, etc.) or the other AWS services

	
  * ___ 95,000 used sq ft, which probably means 200K total sq footage including support systems

	
  * Taking a good guess, I'd say as many as 20% of instances are '[reserved](http://aws.amazon.com/ec2/faqs/#What_is_a_Reserved_Instance)', meaning purchased at a 70% discount one year in advance

	
  * Another good guess is that up to 20% of EC2 capacity is being reserved for the retail site (Amazon.com)


**Instance Size Usage**
Most of the above is either very close to the truth or an educated guess.  In order to make any kind of real revenue projections I have to go out on a limb and make some kind of assumptions about what percentage of each instance size is in use.  Of course, this number fluctuates significantly, but there is an average.

Before I go out on a limb, let me say that neither the educated guesses above and wild guesses below are completely without merit.  You can see more about my background [here](http://cloudscaling.com/blog/main/randy-bias), but very quickly, I've been running large scale infrastructures since 1990, have helped build multiple 100,000+ sq ft datacenters, was formerly in a senior leadership position at one of the top IaaS clouds in the U.S., and am running what I believe is destined to be the pre-eminent gold standard in cloud computing consulting (Cloudscaling.com)[3].  So, the educated guesses are probably pretty good and the wild guesses might not be completely wrong.  :)

So here's my wild-ass guess on AWS instance size usage rates:



	
  * m1.small	21%

	
  * m1.large	35%

	
  * m1.xlarge	20%

	
  * c1.medium	13%

	
  * c1.xlarge	11%


It's hard to ballpark these, but I'm basically assuming something like the following:

	
  * Most folks start on an m1.small until they go to production, then they move up to the m1.large, because it's got decent I/O characteristics (this is a well known phenomena in EC2)[3]

	
  * m1.small was the dominant size initially (100% of all instances), but continues to lose ground as more people use faster instances, but it's still at a highly desirable price point for 'testing' so it remains under heavy rotation

	
  * m1.xlarge's are where the 'big' production databases are and they are fairly steady state; people with larger sites 'shard' their database to continue scaling

	
  * I've been told the high-CPU instances are under high demand, so while they are relatively new, I believe combined they are around 25% total, mostly for batch processing & high-performance computing (HPC) tasks[4]


I believe that m1.large is on track to be the new m1.small.  The de facto size instance that people use for most purposes.  With the m1.xlarge for databases.  That should account for roughly 55% (as you can see above), high-CPU instances account for a larger than expected share at 24% roughly (per my sources), and the remaining 21% is the the small instances, which will continue to decline in popularity, but ever so slowly.

**Utilization Rates**
Given that the initial utilization rate target was 70-75%, I'm putting the minimum rate at 70%, the max at 80%, and the average is 75% assuming AWS is hitting it's targets.  After several years in operation I'm sure they are managing it reasonably well.

**EC2 Revenues**
Putting all of the above together into a spreadsheet, assumptions, known facts, and my wild guess at instance usage, we wind up at average utilization and revenues as follows.

_EC2 Instance Usage Numbers_



	
  * m1.small        34,675

	
  * m1.large        28,896

	
  * m1.xlarge       8,256

	
  * c1.medium       5,366

	
  * c1.xlarge       2,270


_EC2 Instance Revenue Run Rates_



	
  * Hourly          $25,264

	
  * Monthly         $18,190,195

	
  * Annually        **$218,282,342**


Please keep in mind that this number does not account for Elastic Block Store (EBS), bandwidth transfer in/out, or anything except EC2 instances.  The actual revenue number is likely to be a fair bit higher (+25%?).

You can [download the spreadsheet](/assets/media/2009/10/amazon-size-revenue-estimates.xlsx) yourself to play around with, but be forewarned, it's barebones and I make no claims of being a business analyst.  I'm just clueful enough to be dangerous. ;-)

**EC2 Revenues as 'Other' & Rate of Growth**
What's interesting about Amazon's reporting of it's Amazon Web Services (AWS) revenues is that it's part of the ambiguous "Other" line in their financial reports.  Looking at the most recent 10-Q shows us that the total revenue for "Other" _for six months ending June 24th, 2009_ was 260M.  In talking to my original sources, a number of 109M (half my annual estimated run rate) as part of the 260M Other line sounds 'reasonable'.  Revenues for S3, a much lower margin business are 'probably' 1/10th the size of EC2, and the only other items in 'Other' of note are [IMDB](http://www.imdb.org) and A9, both probably in the 10-20M range.  The other large unknowns are AWS credit card revenues and revenue related to bandwidth in/out of EC2.

So, in essence we now know with a reasonable degree of certainty that EC2 is, in fact, the majority of the 'Other' line in Amazon's revenues. I think we can safely assume that EC2 accounts for most of the growth as well.  Looking at year-over-year from 2008, the change is +23M or roughly 10%.  Which is impressive in the face of the general downturn.  Of course, this number could be much higher if EC2 is replacing the loss of other revenues (A-9?), which seems quite possible.

**Infrastructure Cloud Market Size?**
From the grapevine, I understand that Rackspace (and probably others) are also growing very rapidly, but likely even [Rackspace Cloud](http://www.rackspace.com/cloud/), the nearest competitor is around 10% the size of EC2 at best.  Using that assumption and EC2 as a guidepost, the total Infrastructure-as-a-Service (IaaS) market is likely around 400-600M in size and growing at a clip of 10-20% annually in a major economic downturn.  Pretty impressive given that the overall hosting market has been depressed.

**Summary**
It feels good to have more light shined on what has been an unknown.  As you can see this is a real and rapidly growing market.  We're still in the 'early' phases of the adoption curve.  If cloud computing gains more traction, a broader audience, and the economy recovers, it won't take long before this is a billion dollar a year business.

--Randy

Ps.  For bonus points, multiply the target server cost for AWS by the number of servers, work out the CapEx costs, derive the monthly amortization and compare to revenue.  You'll see why I've been telling people that this is not a 'low' margin business.

**UPDATE**: @ruv, et. al. helped me see a flaw in my calculations where I was using the 6 month 10-Q number for the annual Amazon 'Other' revenue.  Updated to make the comparison correct.  Still standing by a 220-260M EC2 run rate, which is in-line with my knowledge of the general size of other smaller clouds and more realistic in terms of the makeup of the 'Other' revenue line.



* * *

[1] Meaning that when the drive fails, the RAID is trashed and all instances on the system are gone
[2] By 'silo' I mean they try to reuse the hardware across all instance sizes as much as possible; they do not buy and keep one piece of hardware for each instance size
[3] Look for more announcements soon; what was my personal consulting business has taken off like a rocket and we're now 8 going on 20 people; interested?  email jobsnospam@cloudscaling.com (yes, that email address is a Turing test).
[4] We have clients who do this and I've seen it with just about every startup or large business we (Cloudscaling) has helped onboard to EC2
