---
author: Randy Bias
comments: true
date: 2009-08-10 15:00:39+00:00
layout: post
slug: the-infrastructure-2-1-newsletter
title: The Infrastructure 2.1 Newsletter
wordpress_id: 489
old_categories:
- Cloud Computing
tags:
- Automation
- cloud
- databases
- definitions
- enterprise
---

There are many sources that feed my insatiable need for cloud computing and infrastructure news.  One of these that I have been following for a while I wanted to share with my readers.  It's the _Infrastructure 2.1 Newsletter_ from the [Internet Research Group](http://www.irg-intl.com) (IRG) and you can sign up [here](http://www.irg-intl.com/newsletter_signup2-irg.htm).  I've been following [John Katsaros](http://www.infrastructure2-1.com/john_katsaros/) and [Peter Christy](http://www.infrastructure2-1.com/peter_christy/) regularly and their newsletter is a great source of information.

With permission I wanted to reprint a few choice nuggets from the latest issue.

**Virtualization Wars**
IRG on VMware vs. Microsoft:




> 
> ![](http://origin.ih.constantcontact.com/fs074/1101654540507/img/39.gif)The Virtualization War — At the Microsoft Virtual Analyst Meeting, Muglia chirped happily that he was gaining hypervisor market share every day. Although we think that must be true, we couldn't get any of the underlying data so we couldn't de-spin it. As we continue to muck about in the Cloud and Utility Datacenter, it's pretty clear that's still all about VMware. So what does the future portend? I continue to think that Microsoft is strongly in the game. The most recent financial reports give an interesting perspective on this. VMware has suffered a year of quarter-over-quarter declines in license revenue, buffered somewhat by rising service revenues. This isn't necessarily a bad report, but at the most recent report Microsoft reported that System Center - the System Management tool that in the end is probably what VMware competes with - grew at a very healthy year-over-year rate of 30% (independently we have heard that it is about a $1.5B/year product. That suggest that System Center is significantly bigger than VMW (comparing apples to apple if that is possible) and growing much more rapidly. As we said, it would probably be premature to count Microsoft out now.
> 
> 



The IRG folks have a fairly good relationship with the folks in Redmond, so I'm inclined to take their number of 1.5B for Microsoft's [System Center](http://www.microsoft.com/systemcenter/en/us/default.aspx) at least somewhat seriously.  If true, it's clear that Microsoft is gaining some traction in the infrastructure automation and data center management space.  It also means that Microsoft might be the only folks with a shot at displacing VMware's [dominance of virtualization](http://cloudscaling.com/blog/cloud-computing/bifurcating-clouds) in enterprise data centers.  One main takeaway for me was: _the hypervisor (ESX vs. Xen) isn't where the real battle is_.  It's in the tools that manage the hypervisors.  The technology on which clouds are built, essentially.

**Real Cloud Value**
Another interesting nugget from their interviews with a number of cloud 'experts':


**The Cloud (Dessert Topping or Floor Cleaner)?** John and I have done a lot of interviews with Cloud "experts" over the last few months (this is the fun part of our business, hunting down and talking to really bright people). On the one hand, a lot of the analysis bandied about is malarkey (to be polite). Enterprises won't jump into public clouds to save buckets of money any more than we've all given up our cars to drive Hertz Rent-a-Cars instead (shouldn't they be a lot cheaper for the same reasons, huh?). On the other hand, we've been talking to many of the most successful ventures using Amazon (primarily, and other Cloud providers) and the stories are very interesting. There seem to be two important takeaways for me: (1) The cloud is software gurosity unleashed. A team of brilliant programmers and system architects can make incredible things quickly when unfettered from the nasty bits of buying and running the hardware infrastructure; (2) For speculative ventures, it's hard to beat the economics of pay-as-you-go


This jibes with my own experience and belies the typical cheerleader mentality of some cloud advocates who would have you believe that ['scaling' is non-trivial](http://cloudscaling.com/blog/technology/auto-magical-scaling) and the cloud is some kind of magic panacea.  I particularly like this part of the quote above: _A team of brilliant programmers and system architects can make incredible things quickly when unfettered from the nasty bits of buying and running the hardware infrastructure_.

This is really the nut.  Despite the hype around cloud computing, the initial set of early adopters on various clouds are, by definition, those with a higher than average set of skills or, at least, a certain level of tolerance for complexity.  As cloud computing is adopted more broadly, the set of cloud tools and the maturity of clouds will have to improve in order to increase the pace of adoption.

**Microsoft vs. Amazon Pricing**
And, finally, a nice little comparison of Amazon versus Microsoft cloud pricing, which I haven't seen elsewhere:


Keeping It Simple — Even just ten years ago you'd have thought it crazy that we'd be talking about 12 cents an hour for a server. Last week Microsoft announced its pricing model for Windows Azure making it clear that the company will play a very aggressive role to quickly develop usage once its cloud services become available. The table below compares Microsoft Azure's pricing to Amazon's cloud computing prices. Microsoft's pricing is simpler but Amazon's pricing has two years of experience behind it which account for it being more nuanced. The two charts below compare Microsoft and Amazon pricing for data transfer out of their Clouds. Microsoft is clearly being competitive in the small to medium categories which probably is illustrative of their overall strategy.


Comparison chart:
<table bordercolor="#111111" style="border-collapse: collapse;" border="1" width="590" cellpadding="0" cellspacing="0" dir="ltr" >
<tbody >
<tr >

<td width="81" bgcolor="#00458C" height="30" >


** **



</td>

<td width="212" bgcolor="#00458C" height="30" >


**Microsoft**




</td>

<td width="255" bgcolor="#00458C" height="30" >


**Amazon**




</td>
</tr>
<tr >

<td width="81" >


**Compute**




</td>

<td width="212" >


$0.120/hour




</td>

<td width="255" >


$0.10/hour to $1.20/hour depending on CPU and O/S




</td>
</tr>
<tr >

<td width="81" bgcolor="#F0F0F0" >


**Storage**




</td>

<td width="212" bgcolor="#F0F0F0" >


$0.150 / GB-month




Storage Transactions = $0.010 / 10K




</td>

<td width="255" bgcolor="#F0F0F0" >


$0.100 per GB-month




$0.100 per 1 million I/O requests




</td>
</tr>
<tr >

<td width="81" >


**Bandwidth**




</td>

<td width="212" >


$0.100 in / $0.150 out / GB




</td>

<td width="255" >


$0.100 in / GB




Data Transfer Out steps down from $0.170 to $0.100 /GB monthly usage.




</td>
</tr>
<tr >

<td width="81" bgcolor="#F0F0F0" >


**Storage**




</td>

<td width="212" bgcolor="#F0F0F0" >


**SQL Azure**




Web Edition - Up to 1 GB relational database = $9.99 / mo




Business Edition - Up to 10 GB relational db = $99.99 / mo




</td>

<td width="255" bgcolor="#F0F0F0" >


**S3**




$0.150 per GB - first 50 TB / month of storage used - ranging to:




$0.120 per GB - storage used / month over 500 TB




</td>
</tr>
<tr >

<td width="81" >


**Data Transfer**




</td>

<td width="212" >


$0.100 per GB in




$0.150 per GB out




</td>

<td width="255" >


$0.100 per GB - all data transfer in




$0.170 per GB - first 10 TB / month data transfer out - ranging to:




$0.100 per GB - data transfer out / month over 150 TB




</td>
</tr>
</tbody></table>


Diagrams showing Data Transfer pricing:




![](http://origin.ih.constantcontact.com/fs074/1101654540507/img/37.gif)




![](http://origin.ih.constantcontact.com/fs074/1101654540507/img/36.gif)




**Summary**







Highly recommended you sign up for this news letter!
