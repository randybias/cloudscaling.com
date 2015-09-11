---
title: 'Understanding Cloud Datacenter Economies of Scale'
link: http://cloudscaling.com/blog/cloud-computing/understanding-cloud-datacenter-economies-of-scale/
author: randybias
description: 
post_id: 1023
created: 2010/05/04 07:03:28
created_gmt: 2010/05/04 14:03:28
comment_status: open
post_name: understanding-cloud-datacenter-economies-of-scale
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Understanding Cloud Datacenter Economies of Scale

James Hamilton's recent [MIX'10 presentation](http://live.visitmix.com/MIX10/Sessions/EX01) on economies of scale for large cloud providers was quite impressive. James "gets it" like few others in the industry. If you haven't watched his hour-long presentation, I suggest you do. I also recommend this excellent response from [James Urquhart](http://news.cnet.com/8301-19413_3-20003591-240.html?part=rss&tag=feed&subj=TheWisdomofClouds).  My goal in this posting is to highlight, clarify and expand on a few of James Hamilton's points.  I will focus on Infrastructure-as-a-Service (IaaS) clouds, but the concepts are relevant for other kinds of cloud services. In his presentation, James focuses on power: utilization, distribution, etc., and while an important element, like him, I don't think it's the most important factor.  I also want to dispel the myth that only the largest companies can achieve these economies of scale. Don't get me wrong; providing a cloud service is a scale game. It requires a certain amount of buying power to compete. However,you don't need to be MSFT, YHOO, AMZN, or GOOG to compete effectively. Buying power can be had at levels much lower than you might think. In this article, I refer regularly to Jame's comments in his presentation, so I suggest you watch his video first. In order to minimize confusion, I've borrowed some pictures from  his slides and inserted them here for your reference. This is a long entry, but it will be worth the read as I've got numbers for you which I hope you will find interesting. **Background** Like James, the Cloudscaling team has a history of building large scale services. I've worked in this area for 16+ years as has our COO, Adam Waters, and several of our team members. Understanding of the economies of scale, especially for service providers, cloud or otherwise is fundamental to our DNA. For example, see my previous piece describing [how oversubscription works](/blog/cloud-computing/subscription-modeling-cloud-performance). Enough of that! Let's dig in and look at where **you** can achieve economies of scale, identifying areas James Hamilton may have neglected, and clarifying areas where I think there is still confusion.  **Economies of Scale** There are a number of areas where you can achieve economies. James touched on a few in his talk.  While this is not a 100% complete list, here are key areas of opportunity that I see: 

  * Datacenter and facilities architecture (power & cooling)
  * Buying power (COGS) for Networking, Compute (Servers), and Storage
  * Development & Labor Costs
  * Standardization & Homogenization
  * Cash Flow
In James Hamilton's model (see pie chart below) server costs are the dominant cost, but he critically left out development & labor costs.  This can be as much as 10% for a cloud and while it's possible for large clouds to drive this down to a marginal cost, in practice there are no _Infrastructure-as-a-Service_ clouds of sufficient size to achieve this yet. While James focuses primarily on power & cooling in his presentation, let's take a closer look at some other areas. [caption id="attachment_1026" align="alignnone" width="300" caption="Jame's Hamilton's Distribution of Cloud Datacenter Costs"]![james-hamilton-pie-chart]({{ site.url }}/assets/media/2010/05/james-hamilton-pie-chart-300x188.png)[/caption] 

**Networking** There are  two key areas of networking where you can achieve economies of scale: 

  * Buying IP (network) transit (OpEx)
  * Capital expense (CapEx)
Unfortunately, James provides one example with numbers from 2006 which compare two companies purchasing bandwidth. The larger company purchased bandwidth at $15 per Mbps per month at the [95th percentile](http://en.wikipedia.org/wiki/Burstable_billing) ($/Mbps/mo) vs the smaller company's expense of $95/Mbps/Mo. James uses this number to show a 6 or 7 to 1 buying power difference. The IP landscape has changed dramatically since 2006.  It's a dirty little secret in the hosting and cloud world that bandwidth is dirt cheap[1]. In fact, you need very little buying power  to get rock bottom prices. Street price for high quality [Tier-1](http://en.wikipedia.org/wiki/Tier_1_network) IP transit is <$5/Mbps/Mo if you buy 1Gbps commits. That's a mere $5,000/mo, which is well within the spending range of even small companies. My local coffee shop could probably afford it.  Yes, it's quite possible larger buyers are getting even lower rates than $5/Mbps, but there is a bottom and it's not much less than $5/Mbps/Mo so the disparity in buying power is closer to 3:1 or 2:1. To give you some perspective, I know for a fact that some Yahoo! datacenters push upwards of 40Gbps.  A lot, certainly, but at $1-3/Mbps, well within the buying capacity of even medium size businesses.  The second area is using buying power to purchase network hardware at much reduced rates. When buying bulk quantities of network gear, the theory is that network costs can be significantly reduced, hence larger players have significant cost advantages.  Unfortunately, this only works partially in practice.  Network equipment costs are still increasing significantly, not reducing as with compute and storage equipment costs.  Combined, networking equipment (CapEx) and power usage (OpEx) make up 21% (in the piechart above) of datacenter costs and **both** are steadily increasing. Large cloud providers are beginning to address this by systematically removing brand name networking vendors like Cisco and Juniper[2]. It is now possible to buy very high quality, exceptionally cheap networking gear direct from Taiwanese manufacturers. Many of these are the original equipment manufacturers for name brands. Most people don't realize how marked up Cisco/Dell/HP/Juniper gear is. For example, these Taiwanese OEMs have networking gear with price points as low as $100/10GE port. Yes, $100 per 10Gig Ethernet port. That's about 1/10 the Cisco price point. At the same time, the quality of the gear is quite high and in some cases the components and chips are a generation ahead of what's available from the name brands. In other words, times are changing. We're going to see a significant drop in the prices for networking gear across the board for the first time in ages and hopefully networking will get in line with the standard Moore's Law curve. **Servers** Flogged. Dead Horse. There isn't any significant buying power to be had in the commodity x86 server market. x86 server vendors, particularly those providing commodity offerings, have thin margins to begin with. 25% is typical. An Amazon or a Google can push these down somewhat by buying in bulk, but not enough to give them more than a marginal advantage. Anyone who can buy $1M USD of servers at once can negotiate a pretty steep discount. Many businesses can afford to buy at that price point. James Hamilton understands this and points out where the real buying power is: buying customized hardware in bulk that allows for datacenter optimization and cost reductions in power, cooling, and space. By purchasing customized server offerings from the likes of an [SGI/Rackable](http://www.sgi.com) or [Verari](http://www.verari.com) that include well spec'ed components, designing for their particular datacenter environment there are significant savings to be had. That's where the **real** opportunities lie.

## Comments

**[garnaat](#505 "2010-05-04 07:31:36"):** Good article. However, I think your estimates of AWS development and support resources are off. There are currently > 10 publicly launched AWS services. Plus, given the pace of innovation from AWS its safe to assume there are several other services (and therefore dev teams) in the offing. I don't think you can do that with 50 developers.  
  
I hope AWS eventually provides a more transparency around the financials of AWS. Until then, we are all guessing but I think most people are under-estimating the size and scope of AWS. They have now fully deployed their full range of services across four separate regions. It's a big operation.

**[Infrastructure Exec](#506 "2010-05-04 07:45:05"):** I think you are underestimating the number of heads dedicated to AWS. Last time I looked, Amazon had over 100 *open positions* on the team.

**[randybias](#507 "2010-05-04 07:52:15"):** It could certainly be more. 50 is my minimum. I think you are   
overestimating though. Smaller high quality teams building automation   
will be faster and leaner. The AWS team has always run lean. Much   
leaner than others. That is a contributing factor to being as agile as   
they are. Smaller lines of control and communication.  
  
  
\--Randy  
  
CEO, Cloudscaling  
+1 (415) 787-2253 [78-SCALE for SMS or voice] or +82 10 9974 1900   
[Korea]  
TWITTER: twitter.com/randybias  
LINKEDIN: linkedin.com/in/randybias  
CALENDAR: <http://tungle.me/randybias>  
  
*** Sent from mobile, pls forgive tpyoes ***

**[randybias](#508 "2010-05-04 19:02:46"):** Alright, fair enough, 100+ open engineering positions at AWS. I'm not sure what that says about their current staffing, but clearly I'm very far off. Will update the post.

**[Tryggvi Lárusson](#509 "2010-05-05 04:33:03"):** Great article Randy,  
  
Can you give more information on the Taiwanese Networking gear manufacturers that you talk about, any vendors you can by directly from?

**[randybias](#510 "2010-05-05 04:40:56"):** It's difficult to buy directly from these vendors unless you can purchase in reasonably large chunks. E-mail [info@cloudscaling.com](mailto:info@cloudscaling.com) and I'll see if I can make a connection.

**[randybias](#512 "2010-06-09 00:49:22"):** Got a new number from someone closer to 'in the know' of 200 engineers at AWS. Just an FYI.

**[Cradi67](#513 "2010-06-30 17:11:25"):** Why 75-80% capacity, we in fact overutilize our cloud and usually run at 97%. Once we pass this thresehold we move workloads around to underutilzed resources which are distributed usually in the same data center, although we are looking at moving them to AWS if the workloads meet certain SLAs. In otherwords, lower priority workloads get moved to the Public cloud in high demand times until we expand our cloud capicity and then move the workloads back on-premise.

**[randybias](#514 "2010-06-30 17:15:52"):** That sounds like a private cloud, not a public cloud. Public clouds must run with enough unused capacity to handle demand spikes. 97% would be untenable in a public cloud as a bursty spike could cause all capacity to be used and blow up the facade of 'infinite scalability'.

**[Mitch Garnaat](#2191 "2010-05-04 07:31:00"):** Good article. However, I think your estimates of AWS development and support resources are off. There are currently > 10 publicly launched AWS services. Plus, given the pace of innovation from AWS its safe to assume there are several other services (and therefore dev teams) in the offing. I don't think you can do that with 50 developers. I hope AWS eventually provides a more transparency around the financials of AWS. Until then, we are all guessing but I think most people are under-estimating the size and scope of AWS. They have now fully deployed their full range of services across four separate regions. It's a big operation.

**[Infrastructure Exec](#2192 "2010-05-04 07:45:00"):** I think you are underestimating the number of heads dedicated to AWS. Last time I looked, Amazon had over 100 *open positions* on the team.

**[randybias](#2193 "2010-05-04 07:52:00"):** It could certainly be more. 50 is my minimum. I think you are overestimating though. Smaller high quality teams building automation will be faster and leaner. The AWS team has always run lean. Much leaner than others. That is a contributing factor to being as agile as they are. Smaller lines of control and communication. \--Randy

**[randybias](#2194 "2010-05-04 19:02:00"):** Alright, fair enough, 100+ open engineering positions at AWS. I'm not sure what that says about their current staffing, but clearly I'm very far off. Will update the post.

**[Tryggvi Lárusson](#2195 "2010-05-05 04:33:00"):** Great article Randy, Can you give more information on the Taiwanese Networking gear manufacturers that you talk about, any vendors you can by directly from?

**[randybias](#2196 "2010-05-05 04:40:00"):** It's difficult to buy directly from these vendors unless you can purchase in reasonably large chunks. E-mail info@cloudscaling.com and I'll see if I can make a connection.

**[randybias](#2208 "2010-06-09 00:49:00"):** Got a new number from someone closer to 'in the know' of 200 engineers at AWS. Just an FYI.

**[Cradi67](#2216 "2010-06-30 17:11:00"):** Why 75-80% capacity, we in fact overutilize our cloud and usually run at 97%. Once we pass this thresehold we move workloads around to underutilzed resources which are distributed usually in the same data center, although we are looking at moving them to AWS if the workloads meet certain SLAs. In otherwords, lower priority workloads get moved to the Public cloud in high demand times until we expand our cloud capicity and then move the workloads back on-premise.

**[randybias](#2217 "2010-06-30 17:15:00"):** That sounds like a private cloud, not a public cloud. Public clouds must run with enough unused capacity to handle demand spikes. 97% would be untenable in a public cloud as a bursty spike could cause all capacity to be used and blow up the facade of 'infinite scalability'.

