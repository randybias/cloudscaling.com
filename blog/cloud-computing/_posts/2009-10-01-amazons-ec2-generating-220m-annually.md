---
title: "Amazon's EC2 Generating 220M+ Annually"
link: http://cloudscaling.com/blog/cloud-computing/amazons-ec2-generating-220m-annually/
author: randybias
description: 
post_id: 569
created: 2009/10/01 08:00:45
created_gmt: 2009/10/01 15:00:45
comment_status: open
post_name: amazons-ec2-generating-220m-annually
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Amazon's EC2 Generating 220M+ Annually

Today I'm going to tell you how much revenue Amazon's Elastic Compute Cloud (EC2) is generating. After all, you, my regular readers, come to this blog for its insight, original thinking, and gems of wisdom. Today I have something particularly juicy for you: _real-world numbers on Amazon's EC2 size and revenue._ Recently [Ruv Cohen](http://twitter.com/ruv) talked about how cloud computing is [taking off](http://www.elasticvapor.com/2009/09/business-of-cloud-computing-is-booming.html) and [Guy Rosen](http://twitter.com/guyro) made an [attempt](http://www.jackofallclouds.com/2009/09/anatomy-of-an-amazon-ec2-resource-id/) to derive EC2 usage information. What I have today is actual verified EC2 numbers plus some guesses and a rough model of it's current annual usage. Not only do I have a pretty good line on Amazon EC2's size and usage, but we can use that to infer revenue to a fairly close approximation. Once we have EC2's revenue numbers we also have a good notion of the overall size of the current infrastructure cloud computing (IaaS) market. Looking at Amazon's most recent [10-Q](http://investing.businessweek.com/research/stocks/financials/secfilings.asp?ric=AMZN.O) we can even make a guess about the annual growth rate. **How Big is Amazon's EC2?** Big. 40,000 servers. I have independently confirmed this with at least two sources close to EC2. Obviously, I can't reveal them, but they are personally known to me and reliable. The first source gave me the 40,000 number and the second confirmed that the number is close. At most, we're talking +/- 10,000 servers, so within 25%, but I'm guessing I'm very close.  More like +/- 5K. Regardless, within 25% is more than close enough for us to get a pretty good gauge. For our purposes today we'll go with the 40K number. Before we dive in, I have to tell you that it's pretty amazing to see a real number for the size of the largest part of Amazon Web Services (AWS). What's even more amazing is that I can tell you a whole lot more about EC2 and it's revenue. **EC2's Characteristics** Let me tell you a bit about EC2. There are roughly three buckets of certainty here and I'll divide these appropriately. For the sake of brevity I'll deliver these in a bullet list. _Known For Reasonably Certain_

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
**Instance Size Usage** Most of the above is either very close to the truth or an educated guess. In order to make any kind of real revenue projections I have to go out on a limb and make some kind of assumptions about what percentage of each instance size is in use. Of course, this number fluctuates significantly, but there is an average. Before I go out on a limb, let me say that neither the educated guesses above and wild guesses below are completely without merit.  You can see more about my background [here](/blog/main/randy-bias), but very quickly, I've been running large scale infrastructures since 1990, have helped build multiple 100,000+ sq ft datacenters, was formerly in a senior leadership position at one of the top IaaS clouds in the U.S., and am running what I believe is destined to be the pre-eminent gold standard in cloud computing consulting (Cloudscaling.com)[3].  So, the educated guesses are probably pretty good and the wild guesses might not be completely wrong.  :) So here's my wild-ass guess on AWS instance size usage rates: 

  * m1.small 21%
  * m1.large 35%
  * m1.xlarge 20%
  * c1.medium 13%
  * c1.xlarge 11%
It's hard to ballpark these, but I'm basically assuming something like the following: 
  * Most folks start on an m1.small until they go to production, then they move up to the m1.large, because it's got decent I/O characteristics (this is a well known phenomena in EC2)[3]
  * m1.small was the dominant size initially (100% of all instances), but continues to lose ground as more people use faster instances, but it's still at a highly desirable price point for 'testing' so it remains under heavy rotation
  * m1.xlarge's are where the 'big' production databases are and they are fairly steady state; people with larger sites 'shard' their database to continue scaling
  * I've been told the high-CPU instances are under high demand, so while they are relatively new, I believe combined they are around 25% total, mostly for batch processing & high-performance computing (HPC) tasks[4]
I believe that m1.large is on track to be the new m1.small.  The de facto size instance that people use for most purposes.  With the m1.xlarge for databases.  That should account for roughly 55% (as you can see above), high-CPU instances account for a larger than expected share at 24% roughly (per my sources), and the remaining 21% is the the small instances, which will continue to decline in popularity, but ever so slowly. **Utilization Rates** Given that the initial utilization rate target was 70-75%, I'm putting the minimum rate at 70%, the max at 80%, and the average is 75% assuming AWS is hitting it's targets. After several years in operation I'm sure they are managing it reasonably well. **EC2 Revenues** Putting all of the above together into a spreadsheet, assumptions, known facts, and my wild guess at instance usage, we wind up at average utilization and revenues as follows. _EC2 Instance Usage Numbers_

  * m1.small 34,675
  * m1.large 28,896
  * m1.xlarge 8,256
  * c1.medium 5,366
  * c1.xlarge 2,270
_EC2 Instance Revenue Run Rates_

  * Hourly $25,264
  * Monthly $18,190,195
  * Annually **$218,282,342**

## Comments

**[Mark Imbriaco](#295 "2009-10-01 08:41:06"):** Randy, I'm curious how you're defining "oversubscription" for cores. Are you really saying that one VCPU = one physical core? That seems unlikely based on the performance characteristics of m1.small instances -- I'd expect them to be faster if that were the case.

**[randybias](#296 "2009-10-01 10:36:19"):** Mark the m1.smalls are generally on much older hardware. This is why a single core is 1 ECU, not 2 ECUs, like the other instance sizes. In addition, while the VMs are not oversubscribed and are sold at a 1-1 ratio VCPU <-> Physical core, the reality is that the host server does use CPU for things like EBS, processing network traffic, etc. so each VCPU does not get exactly 100% of a core. Obviously the effect would be more pronounced on older hardware.

**[jcloudm](#297 "2009-10-01 13:05:58"):** One quick comment. Your HTTP server isn't set up with the appropriate MIME types for the new Microsoft Office 2007 file types. This means the .xlsx file you linked to in this story get downloaded as a .zip MIME type.

**[randybias](#298 "2009-10-01 13:15:35"):** Fixed. Would you be kind enough to test again? I don't have a Windows box ready to hand.

**[Name](#300 "2009-10-01 16:30:33"):** It's fixed

**[James Watters](#301 "2009-10-01 17:04:50"):** Cool details here. That damn other bucket is just big and squishy enough to make this a good detective game.   
  
I'm curious as to why you think S3 is such a small slice of the mix?

**[Caleb](#302 "2009-10-01 17:09:17"):** Randy - one metric you might be able to use to help is EC2 IP space allocation, which is defined here: [http://developer.amazonwebservices.com/connect/...](http://developer.amazonwebservices.com/connect/thread.jspa?messageID=51028&#51028)  
  
EU has an /18, and the US has a /20, /19, /18, /17, and /16.  
  
Since each instance only gets one IP address, you can use this to also infer some info about # of total instances in each zone.

**[randybias](#303 "2009-10-01 18:18:51"):** S3 doesn't seem like it could be very big in revenue. My two basic reasons though are:  
  
1) Because I was told that it's an 'order of magnitude' less  
2) Because math on storage says it's not that great a revenue driver  
  
1PB is only 158K /month. 100PB is roughly 20M a year in run rate. Could AWS have significantly more than this? Yes, but probably not 10x. Most of the 50B+ objects are probably relatively small.

**[randybias](#304 "2009-10-01 18:19:11"):** Thanks Caleb. If I re-work it, I'll take this into account.

**[Thorsten, CTO RightScale](#306 "2009-10-01 22:04:08"):** Randy this is a very cool analysis! One comment: your guesses about the instance size distributions are off compared to what we observe. We see a lot more m1.small, fewer m1.xl, and about the same qty of m1.lg and c1.med. But it actually doesn't matter for your calculation because EC2 splits up the machines in proportion to cost. E.g. an m1.xl costs 8x an m1.sm and it also uses 8x the capacity. And an xl uses the full host capacity. So I believe you can ignore the m1/c1 difference as well as instance size distribution and simply calculate 40'000 hosts * 0.75% utilization * $0.80 per hour = $24'000 per hour, which is actually very close to what you have above.

**[randybias](#307 "2009-10-01 22:09:45"):** Thanks Thorsten! Appreciate your comment and will simplify and integrate this if/when I update this.

**[Alex Norcliffe](#311 "2009-10-02 04:37:19"):** Very interesting figures. Do you have any insight on major-traffic, high profile websites that are hosted on EC2?

**[ajfisher](#312 "2009-10-02 07:11:00"):** Hi Randy. Really interesting numbers these. On the S3 thing I reckon it could be a lot higher than you think. Current #s are about 64B objects now I think from the las couple of weeks. Even at 1k each and each item only being requested 1 time in a month you're at $75k base. Whilst S3 storage is cheap all those GET & PUT requests add up. All those objects on 2 requests a month goes to $175k base with data transfer too.  
  
We use a lot of S3 for campaigns and whilst our total storage is in tens of GB our GETs are often in the millions each month (one client at peak was doing 250000 GETs a minute!). It still works out heaps cheaper but I reckon all those gets add up as I think a lot of S3 usage is exactly this type of behaviour though i'm sure there's a ratio of 'real storage' use versus cheap 'cdn' use.  
  
So I think there might be some interesting S3 numbers in there too.  
  
Its really interesting seeing numbers around this and when you take into account SaaS, PaaS and emerging Data services the future #s will be massive

**[Pär Winzell](#313 "2009-10-02 08:20:35"):** Great reading. I was curious if there are any numbers on Amazon's MapReduce service, and precisely how they're able to offer instance hours there so much more cheaply. It's a very fault-tolerant execution model; perhaps this is where dodgy instances go to show they still have some juice in them before the scrap heap?

**[theflyingmindy](#314 "2009-10-02 09:10:59"):** I just wish it was a bit cheaper for the individual consumer as I produce video and have about 2 terabytes of video I'd like to upload to Amazon, though last I costed it out it still cheaper to purchase cheap USB external drives and just lock in a safe at home

**[randybias](#315 "2009-10-02 09:58:25"):** I'm afraid not.

**[randybias](#316 "2009-10-02 10:01:06"):** I was told this AM by someone close to the biz owner for EC2 that S3 could be as much as 25% of EC2 revs, so you could be right. This source had fresher information than the other.  
  
If so, then on the high-side, including a +25% for b/w charges, etc., EC2 could be 260M with S3 around another 75M. Of course, we're way off in speculation land now, but interesting nonetheless and certainly roughly in the realm of where the numbers are.

**[randybias](#317 "2009-10-02 10:04:32"):** I don't have any information on the Amazon MapReduce product at all, but I like your thinking about it being a dumping ground for older hardware. That's possible, although I get the impression, from talking to some of the early EC2 engineers, that this would NOT be very AWS-like. Mostly they seem to want to 'build it right'. OTOH, it's a great way to continue to see revenue from those older systems.

**[randybias](#318 "2009-10-02 10:13:02"):** Yes, S3 is less compelling for folks who need bulk storage and don't necessarily need it to be professionally managed.

**[pgbobo](#319 "2009-10-02 12:10:03"):** Randy, you missed a "0" in your math... 1PB is only $158K/month X 12= $1.896M/yr Round it to $2M/PB/Year... So it follows that 100PB /year = $200M (NOTE: I am not saying they have this volume... Just correcting your math.)  
  
It also follows that the majority of the objects are probably relatively small due to the fact the the Max file size is 5GB.

**[randybias](#321 "2009-10-02 14:55:24"):** You're right. I meant 1PB is 2M a year in run rate. I should have pulled out a calculator. LOL. Thanks for catching it. I will correct.

**[Eric Hammond](#324 "2009-10-03 12:16:30"):** Randy, the m1.smalls are 1 EC2 Compute Unit not because they are running on older hardware with slower CPUs, but because EC2 uses virtualization to only give the instance that percentage of a real CPU matching the promised metrics. In practice an m1.small seems to generally get about 50% of the slower CPUs (where m1.large would get 100% x 2) and about 40% of the faster CPUs (where c1.medium would get 100% x 2). These percentages will vary as Amazon rolls out different types of hardware, but they work to keep the perceived performance matching the specs you're paying for.

**[sapenov](#330 "2009-10-04 20:29:57"):** Hi Randy,  
Good job on approximating Amazon's revenues and infrastructure.  
I'd also wait for another part of the equation as well - cost of their cloud (IT load, HW load, overall PUE across all facilities, HW depreciation, licensing costs, administration etc), to get an idea on profitability of their cloud products portfolio.  
  
regards,  
Khazret Sapenov

**[randybias](#334 "2009-10-07 20:22:49"):** Sorry for the delay on this. I was trying to find out if I could get some confirmation one way or the other, but was unable to. My basic understanding is that the original system was NOT designed for oversubscription; however, I do know what you mean about the average 50% steal rate on some of the m1.smalls, so it is possible that AWS is oversub'ing those instances and not the others.  
  
Frankly I don't know, but I'll keep trying to find out.

**[Alex Norcliffe](#335 "2009-10-07 20:35:27"):** Pity the Amazon sysadmins: 32.5PB would take over 8 years to copy across a 1Gb network connection  
  
[http://www.google.co.uk/search?hl=en&safe;=off&r...;](http://www.google.co.uk/search?hl=en&safe=off&rlz=1C1GGLS_en-GBGB348GB348&q=32.5PB+divided+by+1Gb/s&btnG=Search&meta=)  
  
You could set off the copy on a Friday and come back when you've had kids

**[erichammond](#336 "2009-10-07 22:01:53"):** The CPUs can be shared by different instances, but not oversubscribed. I.e., if you're paying for performance that equals half of a given CPU, then that entire half is reserved for you and nobody else gets any ticks on that half. If they try by running heavy processes, then those CPU ticks are "steal"ed from them even if your processes don't actively need them.

**[randybias](#337 "2009-10-08 23:36:10"):** In theory. My understanding however is that the current resource sharing algorithms in the Xen hypervisor can't really enforce this. So, effectively, how you 'reserve' half a core is by pinning two virtual cores to a single physical core.  
  
If their is an updated Xen scheduler that can guarantee CPU resource usage, I would love to know about it. I don't know anyone who can do this right now.

**[Shlomo](#340 "2009-10-10 15:04:54"):** EC2 runs a custom version of Xen. Perhaps this is one of the customizations.

**[Reinout Schotman](#346 "2009-11-04 02:03:23"):** Randy, in addition to your spreadsheet and assuming wholesale cost of a MWh of $80, the energy bill is roughly US 949,000 per month or roughly half the CapEx.

**[timmw](#350 "2009-11-30 20:08:23"):** Any idea how frequently they violate their 99.95% availability commitment. I'm assuming they use servers with redundant power supplies to redundant power rails, however the 8 SATA drives in a raid 0 config is concerning. I also wonder what the network topology looks like.

**[randybias](#351 "2009-11-30 20:39:44"):** It's unlikely they use redundant power supplies or power rails. The extra expense isn't justified in their eyes. You are supposed to design your application for a single server failure.  
  
With regards to the network topology, it's hard to say in detail, although it seems like they are doing layer-3 IP routing down to the physical nodes. Probably BGP.

**[Simon](#353 "2010-01-19 20:59:13"):** The vCPU's dont match 1:1 because there is the dom0 Xen controller also sucking cycles?

**[206585](#357 "2010-05-26 04:38:28"):** If I look at the last AWS 10-Q it reads as follows  
Three Months Ended   
March 31,   
2010 2009   
(in millions)   
Net sales:   
  
Consolidated   
  
Media   
$ 3,430 $ 2,723   
Electronics and other general merchandise   
3,513 2,046   
Other (1)   
188 120   
  
The (1) is a footnote saying AWS and some items sounding marginal are included in Other. Now the catch is this is per quarter. If I assume exponential growth between the two quarters ended March 31st I get to about 12% growth PER QUARTER and  
  
$M / qtr   
120 134 150 168 188   
  
I.e. in the last 3 quarters of 2009 and the first in 2010, we have a total of   
640M$.   
  
That's a lot more than what the article says.  
  
What do people think????

**[randybias](#358 "2010-05-26 06:06:59"):** The article you are responding to is a year old. That's why your number is bigger. Most clouds are at 100% year over year growth. So that's about right. Amazon should be around 520M for EC2 by now. The Other line will be the 520M for EC2 plus some additional revenue for non-EC2 revenue (e.g. S3, Amazon credit cards, etc.).   
  
  
  
\--Randy  
  
  
CEO, Cloudscaling  
+1 (415) 787-2253 [78-SCALE for SMS or voice] or +82 10 9974 1900 [Korea]  
TWITTER: twitter.com/randybias  
LINKEDIN: linkedin.com/in/randybias  
CALENDAR: <http://tungle.me/randybias>

**[Matt](#359 "2010-05-30 07:20:15"):** Randy, how do you reconcile this "100% year over year growth" with your comment "the total Infrastructure-as-a-Service (IaaS) market is likely around 400-600M in size and growing at a clip of 10-20% annually" in the initial article?  
  
Thanks,  
Matt

**[randybias](#360 "2010-06-04 14:33:20"):** The initial article is over a year old at this point. Since then I   
have a lot of new data. It's also possible that I was wrong about my   
initial estimate, but more likely is that things have simply taken off   
for a certain segment of the marketplace. Most of the larger clouds   
have tremendous growth at the moment. The only public data point are   
the RAX 10-Qs, but from the couple of other private data points I have   
the 100% growth number looks reasonable. It's definitely way over 40%.  
  
I don't believe this is for all clouds. Some categories seem to be a   
bit challenged. Mostly it's the consumer-oriented, commodity clouds   
like EC2.

**[Matt](#362 "2010-06-07 04:59:01"):** Thanks for the reply, very helpful.  
  
Matt

**[Android Blog](#363 "2010-07-19 14:12:19"):** So it really means that the ability of CPUs can be shared, so from it I am concluded that its not oversubscribed. So the performance will become half of it.

**[liliag](#365 "2010-08-18 07:23:17"):** It never crossed my mind that EC2 is bringing home the big dough. I know the product is awesome but I had no idea there was such a big demand for it.   
Lilia gephardt @ [Windows dedicated server](http://www.webfusion.co.uk/dedicatedservers/windows-dedicated-server-hosting.php)

**[In the Cloud Virtualisation Infrastructure](#369 "2010-09-17 00:24:50"):** **Cloud Hosting Virtualisation...** Virtualisation and the delivery of virtual IT services through the cloud...

**[Quora](#370 "2010-09-19 23:15:35"):** **How many servers are in EC2 total?...** 40,000, according to http://cloudscaling.com/blog/cloud-computing/amazons-ec2-generating-220m-annually...

**[Quora](#824 "2012-03-11 18:52:49"):** **How many servers does Amazon have?...** In October 2009, Randy Bias gave an estimate, backed by "information from reliable sources", that Amazon EC2 had ~40,000 servers. Since then, they have been adding new data centers (Singapore, Japan, Oregon...) and growing the business, so the number...

**[Mark Imbriaco](#1090 "2009-10-01 07:41:00"):** Randy, I'm curious how you're defining "oversubscription" for cores. Are you really saying that one VCPU = one physical core? That seems unlikely based on the performance characteristics of m1.small instances -- I'd expect them to be faster if that were the case.

**[randybias](#1091 "2009-10-01 09:36:00"):** Mark the m1.smalls are generally on much older hardware. This is why a single core is 1 ECU, not 2 ECUs, like the other instance sizes. In addition, while the VMs are not oversubscribed and are sold at a 1-1 ratio VCPU Physical core, the reality is that the host server does use CPU for things like EBS, processing network traffic, etc. so each VCPU does not get exactly 100% of a core. Obviously the effect would be more pronounced on older hardware.

**[jcloudm](#1092 "2009-10-01 12:05:00"):** One quick comment. Your HTTP server isn't set up with the appropriate MIME types for the new Microsoft Office 2007 file types. This means the .xlsx file you linked to in this story get downloaded as a .zip MIME type.

**[randybias](#1093 "2009-10-01 12:15:00"):** Fixed. Would you be kind enough to test again? I don't have a Windows box ready to hand.

**[Name](#1094 "2009-10-01 15:30:00"):** It's fixed

**[James Watters](#1095 "2009-10-01 16:04:00"):** Cool details here. That damn other bucket is just big and squishy enough to make this a good detective game. I'm curious as to why you think S3 is such a small slice of the mix?

**[Caleb](#1096 "2009-10-01 16:09:00"):** Randy - one metric you might be able to use to help is EC2 IP space allocation, which is defined here: http://developer.amazonwebservices.com/connect/thread.jspa?messageID=51028&#51028 EU has an /18, and the US has a /20, /19, /18, /17, and /16. Since each instance only gets one IP address, you can use this to also infer some info about # of total instances in each zone.

**[randybias](#1097 "2009-10-01 17:18:00"):** S3 doesn't seem like it could be very big in revenue. My two basic reasons though are: 1) Because I was told that it's an 'order of magnitude' less 2) Because math on storage says it's not that great a revenue driver 1PB is only 158K /month. 100PB is roughly 20M a year in run rate. Could AWS have significantly more than this? Yes, but probably not 10x. Most of the 50B+ objects are probably relatively small. UPDATE: pgbobo pointed out my math is all wrong. I meant: 1PB == 158K/mo, which is roughly 2M annually. That means that 10PB is 20M and 100PB is 200M. According to another person I spoke with S3 might be equivalent to 25% of EC2 revenue, which means that if EC2 is 260M including additional services (EBS, bandwidth, etc.), then S3 might be as large as 65M, which would equate to 32.5PB of used (unreplicated) storage. That would also then equate to roughly 100PB of total managed storage assuming AWS replicates a given piece of data three times.

**[randybias](#1098 "2009-10-01 17:19:00"):** Thanks Caleb. If I re-work it, I'll take this into account.

**[Thorsten, CTO RightScale](#1099 "2009-10-01 21:04:00"):** Randy this is a very cool analysis! One comment: your guesses about the instance size distributions are off compared to what we observe. We see a lot more m1.small, fewer m1.xl, and about the same qty of m1.lg and c1.med. But it actually doesn't matter for your calculation because EC2 splits up the machines in proportion to cost. E.g. an m1.xl costs 8x an m1.sm and it also uses 8x the capacity. And an xl uses the full host capacity. So I believe you can ignore the m1/c1 difference as well as instance size distribution and simply calculate 40'000 hosts * 0.75% utilization * $0.80 per hour = $24'000 per hour, which is actually very close to what you have above.

**[randybias](#1100 "2009-10-01 21:09:00"):** Thanks Thorsten! Appreciate your comment and will simplify and integrate this if/when I update this.

**[Alex Norcliffe](#1103 "2009-10-02 03:37:00"):** Very interesting figures. Do you have any insight on major-traffic, high profile websites that are hosted on EC2?

**[AJFisher](#1104 "2009-10-02 06:11:00"):** Hi Randy. Really interesting numbers these. On the S3 thing I reckon it could be a lot higher than you think. Current #s are about 64B objects now I think from the las couple of weeks. Even at 1k each and each item only being requested 1 time in a month you're at $75k base. Whilst S3 storage is cheap all those GET & PUT requests add up. All those objects on 2 requests a month goes to $175k base with data transfer too. We use a lot of S3 for campaigns and whilst our total storage is in tens of GB our GETs are often in the millions each month (one client at peak was doing 250000 GETs a minute!). It still works out heaps cheaper but I reckon all those gets add up as I think a lot of S3 usage is exactly this type of behaviour though i'm sure there's a ratio of 'real storage' use versus cheap 'cdn' use. So I think there might be some interesting S3 numbers in there too. Its really interesting seeing numbers around this and when you take into account SaaS, PaaS and emerging Data services the future #s will be massive

**[Pär Winzell](#1105 "2009-10-02 07:20:00"):** Great reading. I was curious if there are any numbers on Amazon's MapReduce service, and precisely how they're able to offer instance hours there so much more cheaply. It's a very fault-tolerant execution model; perhaps this is where dodgy instances go to show they still have some juice in them before the scrap heap?

**[theflyingmindy](#1106 "2009-10-02 08:10:00"):** I just wish it was a bit cheaper for the individual consumer as I produce video and have about 2 terabytes of video I'd like to upload to Amazon, though last I costed it out it still cheaper to purchase cheap USB external drives and just lock in a safe at home

**[randybias](#1107 "2009-10-02 08:58:00"):** I'm afraid not.

**[randybias](#1108 "2009-10-02 09:01:00"):** I was told this AM by someone close to the biz owner for EC2 that S3 could be as much as 25% of EC2 revs, so you could be right. This source had fresher information than the other. If so, then on the high-side, including a +25% for b/w charges, etc., EC2 could be 260M with S3 around another 75M. Of course, we're way off in speculation land now, but interesting nonetheless and certainly roughly in the realm of where the numbers are.

**[randybias](#1109 "2009-10-02 09:04:00"):** I don't have any information on the Amazon MapReduce product at all, but I like your thinking about it being a dumping ground for older hardware. That's possible, although I get the impression, from talking to some of the early EC2 engineers, that this would NOT be very AWS-like. Mostly they seem to want to 'build it right'. OTOH, it's a great way to continue to see revenue from those older systems.

**[randybias](#1110 "2009-10-02 09:13:00"):** Yes, S3 is less compelling for folks who need bulk storage and don't necessarily need it to be professionally managed.

**[pgbobo](#1114 "2009-10-02 11:10:00"):** Randy, you missed a "0" in your math... 1PB is only $158K/month X 12= $1.896M/yr Round it to $2M/PB/Year... So it follows that 100PB /year = $200M (NOTE: I am not saying they have this volume... Just correcting your math.) It also follows that the majority of the objects are probably relatively small due to the fact the the Max file size is 5GB.

**[randybias](#1115 "2009-10-02 13:55:00"):** You're right. I meant 1PB is 2M a year in run rate. I should have pulled out a calculator. LOL. Thanks for catching it. I will correct.

**[Eric Hammond](#1116 "2009-10-03 11:16:00"):** Randy, the m1.smalls are 1 EC2 Compute Unit not because they are running on older hardware with slower CPUs, but because EC2 uses virtualization to only give the instance that percentage of a real CPU matching the promised metrics. In practice an m1.small seems to generally get about 50% of the slower CPUs (where m1.large would get 100% x 2) and about 40% of the faster CPUs (where c1.medium would get 100% x 2). These percentages will vary as Amazon rolls out different types of hardware, but they work to keep the perceived performance matching the specs you're paying for.

**[sapenov](#1117 "2009-10-04 19:29:00"):** Hi Randy, Good job on approximating Amazon's revenues and infrastructure. I'd also wait for another part of the equation as well - cost of their cloud (IT load, HW load, overall PUE across all facilities, HW depreciation, licensing costs, administration etc), to get an idea on profitability of their cloud products portfolio. regards, Khazret Sapenov

**[randybias](#1118 "2009-10-07 19:22:00"):** Sorry for the delay on this. I was trying to find out if I could get some confirmation one way or the other, but was unable to. My basic understanding is that the original system was NOT designed for oversubscription; however, I do know what you mean about the average 50% steal rate on some of the m1.smalls, so it is possible that AWS is oversub'ing those instances and not the others. Frankly I don't know, but I'll keep trying to find out.

**[Alex Norcliffe](#1119 "2009-10-07 19:35:00"):** Pity the Amazon sysadmins: 32.5PB would take over 8 years to copy across a 1Gb network connection http://www.google.co.uk/search?hl=en&safe=off&rlz=1C1GGLS_en-GBGB348GB348&q=32.5PB+divided+by+1Gb/s&btnG=Search&meta= You could set off the copy on a Friday and come back when you've had kids

**[erichammond](#1120 "2009-10-07 21:01:00"):** The CPUs can be shared by different instances, but not oversubscribed. I.e., if you're paying for performance that equals half of a given CPU, then that entire half is reserved for you and nobody else gets any ticks on that half. If they try by running heavy processes, then those CPU ticks are "steal"ed from them even if your processes don't actively need them.

**[randybias](#1121 "2009-10-08 22:36:00"):** In theory. My understanding however is that the current resource sharing algorithms in the Xen hypervisor can't really enforce this. So, effectively, how you 'reserve' half a core is by pinning two virtual cores to a single physical core. If there is an updated Xen scheduler that can guarantee CPU resource usage, I would love to know about it. I don't know anyone who can do this right now.

**[Shlomo Swidler](#1122 "2009-10-10 14:04:00"):** EC2 runs a custom version of Xen. Perhaps this is one of the customizations.

**[Reinout Schotman](#1127 "2009-11-04 02:03:00"):** Randy, in addition to your spreadsheet and assuming wholesale cost of a MWh of $80, the energy bill is roughly US 949,000 per month or roughly half the CapEx.

**[timmw](#2129 "2009-11-30 21:08:00"):** Any idea how frequently they violate their 99.95% availability commitment. I'm assuming they use servers with redundant power supplies to redundant power rails, however the 8 SATA drives in a raid 0 config is concerning. I also wonder what the network topology looks like.

**[randybias](#2130 "2009-11-30 21:39:00"):** It's unlikely they use redundant power supplies or power rails. The extra expense isn't justified in their eyes. You are supposed to design your application for a single server failure. With regards to the network topology, it's hard to say in detail, although it seems like they are doing layer-3 IP routing down to the physical nodes. Probably BGP.

**[Simon](#2151 "2010-01-19 21:59:00"):** The vCPU's dont match 1:1 because there is the dom0 Xen controller also sucking cycles?

**[206585](#2202 "2010-05-26 04:38:00"):** If I look at the last AWS 10-Q it reads as follows Three Months Ended March 31, 2010 2009 (in millions) Net sales: Consolidated Media $ 3,430 $ 2,723 Electronics and other general merchandise 3,513 2,046 Other (1) 188 120 The (1) is a footnote saying AWS and some items sounding marginal are included in Other. Now the catch is this is per quarter. If I assume exponential growth between the two quarters ended March 31st I get to about 12% growth PER QUARTER and $M / qtr 120 134 150 168 188 I.e. in the last 3 quarters of 2009 and the first in 2010, we have a total of 640M$. That's a lot more than what the article says. What do people think????

**[randybias](#2203 "2010-05-26 06:06:00"):** The article you are responding to is a year old. That's why your number is bigger. Most clouds are at 100% year over year growth. So that's about right. Amazon should be around 520M for EC2 by now. The Other line will be the 520M for EC2 plus some additional revenue for non-EC2 revenue (e.g. S3, Amazon credit cards, etc.). \--Randy CEO, Cloudscaling +1 (415) 787-2253 [78-SCALE for SMS or voice] or +82 10 9974 1900 [Korea] TWITTER: twitter.com/randybias LINKEDIN: linkedin.com/in/randybias CALENDAR: http://tungle.me/randybias

**[Matt](#2205 "2010-05-30 07:20:00"):** Randy, how do you reconcile this "100% year over year growth" with your comment "the total Infrastructure-as-a-Service (IaaS) market is likely around 400-600M in size and growing at a clip of 10-20% annually" in the initial article? Thanks, Matt

**[randybias](#2206 "2010-06-04 14:33:00"):** The initial article is over a year old at this point. Since then I have a lot of new data. It's also possible that I was wrong about my initial estimate, but more likely is that things have simply taken off for a certain segment of the marketplace. Most of the larger clouds have tremendous growth at the moment. The only public data point are the RAX 10-Qs, but from the couple of other private data points I have the 100% growth number looks reasonable. It's definitely way over 40%. I don't believe this is for all clouds. Some categories seem to be a bit challenged. Mostly it's the consumer-oriented, commodity clouds like EC2.

**[Matt](#2207 "2010-06-07 04:59:00"):** Thanks for the reply, very helpful. Matt

**[iPhone 5 Release Date](#2260 "2010-07-19 14:12:00"):** So it really means that the ability of CPUs can be shared, so from it I am concluded that its not oversubscribed. So the performance will become half of it.

**[liliag](#2277 "2010-08-18 07:23:00"):** It never crossed my mind that EC2 is bringing home the big dough. I know the product is awesome but I had no idea there was such a big demand for it. Lilia gephardt @ [Windows dedicated server](http://www.webfusion.co.uk/dedicatedservers/windows-dedicated-server-hosting.php)

**[スニーカー 激安通販"&gt;スニーカー 通販](#2535 "2013-07-10 23:24:54"):** **スニーカー 激安通販">スニーカー 通販...** eコマースは、Web購買に、彼らのトップクラスの特性を利用して外出先悪い顧客に常にあるため、多くの買い物好きのための欲求の特定のセットをリードされます。ワールドワイドウェブの購買はあなたに、過去に多くの年のカップルを考慮するのは難しいされている特定の容易さを与える。ウェブ購買でそれだけで大規模な選択のように提供していますいくつかの報酬、楽トランザクション代替、どこでも簡単に購買、いつなどにできるように評判を負っています。それにもかかわらず人々がウェブ上を見て見つける理由は非常に最高の理由は、すべての...

