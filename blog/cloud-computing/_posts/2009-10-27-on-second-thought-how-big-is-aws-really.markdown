---
author: Cloudscaling Staff
comments: true
date: 2009-10-27 18:11:24+00:00
layout: post
slug: on-second-thought-how-big-is-aws-really
title: On Second Thought...How Big Is AWS Really?
wordpress_id: 605
old_categories:
- Cloud Computing
tags:
- amazon
- aws
- business modeling
- cloud
- elastic compute cloud
- Rackspace
---

_We are trying something new at Cloudscaling and inviting a few of the more interesting cloud computing bloggers to provide some alternative viewpoints.  We thought we would start with Andy Schroepfer. His additional analysis of AWS revenue is thoughtful and worth consideration.  --Randy Bias, Founder and Cloud Strategist, Cloudscaling_

_**Guest Author Andy Schroepfer is VP of Strategy at [Rackspace](http://www.rackspace.com). You can follow Andy's content on [www.NoMoreServers.com](http://nomoreservers.com) and via Twitter [@shrepfur](http://twitter.com/shrepfur). **_

Determining the exact revenue size of Amazon’s Web Services (AWS) unit is akin to finding the exact server that an Amazon customer's code is running on in the cloud. In both cases, only Amazon knows the specifics whereas the rest of us are left to guesstimate. I have previously [praised](http://nomoreservers.com/mentions/rackspace/cloudscaling-amazons-ec2-generating-200m-annually/) a few blog researchers for their [good](http://nomoreservers.com/best-of-the-web/joac-anatomy-of-an-amazon-ec2-resource-id/) efforts and wanted to contribute to the discussion with an analysis of a different type. My approach, using just the financial detail in Amazon’s SEC filings, suggests AWS might be smaller than the much more detailed assessments grounded in usage data. To that end, I suggest that all of AWS is below $200 million annually, and perhaps closer to $150 million.

<!-- more -->

Before the detail and thought process, I want to begin by noting that whether Amazon’s Web Services unit has $150 million, or well above $200 million, they have achieved success. As a competitor, we both admire their accomplishments and remain steadfast in our pursuit to catch and surpass Amazon since this is a multi-decade opportunity. The game is already on, but before I put my gloves back on, here is some detail worth considering.

The infamous “Other” revenue bucket is where Amazon counts the sales from AWS. While EC2 is well understood, and agreed, to be the likely dominant component of revenue within the AWS portfolio, there are several services that combine to equal the AWS component. The first service launched out of beta was S3 (online storage) in March of 2006. The SQS (hosted message queue) followed in July 2006. While EC2 (compute) entered limited beta in August 2006, unlimited beta was not until October 2007 and then the production launch in October 2008. Of note, the European launch for S3 was not until November 2007 the European release of EC2 happened last December (2008). A few other offerings remain in limited beta (Mechanical Turk, SimpleDB, Import/Export). [This link](http://solutions.amazonwebservices.com/connect/thread.jspa?threadID=34999&tstart=-1) shows where I gathered these dates.

With only the tiniest of exceptions, the AWS revenue stream would have only started adding in any noticeable way in 2006 given these release dates. Even for 2006, the revenue generated from AWS is likely to have been minimal. The year of 2007 is sure to have included some noticeable revenue, but it would be 2008 and especially 2009 where most of the revenue from AWS services would be showing. These general assumptions, based largely on release dates, guide my thinking in the following analysis.

I begin with a look at the annual totals reported in Amazon’s “Other” bucket. In 2004, Amazon achieved $132mn of Other revenue. This grew by 74% in 2005 to $230mn. Growth then slowed back to 23% in 2006 when Other revenue totaled $283mn. In 2007, growth increased to 35% bringing Other to $383mn. Other revenue accelerated again in 2008 to 41% such that Other reached $542mn. Lastly, when annualizing 3Q09 "Other" revenue of $163mn, we find a yearly run-rate of $652mn in Other revenue. All of these numbers can be found in the [10-K filings with the SEC](http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001018724&type=10-K&dateb=&owner=exclude&count=40) and are worldwide totals.

Before I continue, we believe analysis is more accurate when looking at the North America revenue line for “Other,” rather than the worldwide totals listed above. Why? Because as shown from the release dates of the AWS offerings, there should be minimal revenue until 2008. This is interesting since International “Other” revenue was:



	
  * $2mn in 2004

	
  * $8mn in 2005

	
  * $20mn in 2006

	
  * $57mn in 2007

	
  * $94mn in 2008


Of course, some of the $94mn in 2008 should be from AWS services, but how much? Since Amazon has been expanding its core business internationally over these years, and presumably is garnering the same growth of non-AWS-other revenue from this international expansion. It is even possible that all of AWS revenue is counted in the North America segment. Why would I even suggest this? Because the 3Q09 “Other-International” revenue line shows $25mn, which when annualized equals $100mn…barely up from the 2008 total. Since I doubt Amazon has less than 10% growth from international customers for AWS services (especially in the year following the full production version of EC2 and S3), I am giving Amazon the benefit of the doubt that AWS revenue is either being under-reported for some reason (accounting rules or otherwise) in the International-Other revenue reporting line, or is completely included in the North America-Other reporting line.

Accordingly, looking just at the North America-Other revenue line, we find the following from the past five years. “Other” revenue was $130mn in 2004 and grew 71% in 2005 to $222mn. In 2006, growth slowed to 18% as revenues totaled $263mn for the year. As a reminder, I noted above that given the release dates of the AWS services, this $263mn in 2006 Other-North America revenue likely has minimal AWS revenues. This means the debate of figuring out AWS’ contribution should start with the assumption for 2007 where Other-No.America revenue grew 24% to $326mn. This continues with estimating the contribution as Other-No.America revenue grew 37% in 2008 to $448mn and has grown 23% to $552mn when comparing the annualized 3Q09 Other-No.America revenue.

If one were to assume AWS was $10 million in 2006 and is responsible for all growth above 20% in the Other-No.America revenue line, this would lead one to a finding AWS revenue of $22mn in 2007, $84mn in 2008, and $115mn of the annualized 3Q09 results. These are not poor results at all since this would still represent growth of 120% in 2007, 281% in 2008, and 37% for the annualized 3Q09 results over the calendar year of 2008. However, these are meaningfully lower than the recent estimates proposed by other bloggers.

If I use a different estimate, we still conclude there is a smaller outcome for the AWS contribution. As a reminder, this is merely a back-check on the plausibility of Amazon’s AWS revenue estimates made by third-parties such as Cloudscaling.com. However, if we give AWS credit for all growth above 15% starting in 2007 (instead of the 20% used in the preceding paragraph), we would find AWS growing from:

	
  * $10mn in 2006 to

	
  * $36mn in 2007

	
  * growing 214% to $113mn in 2008, and

	
  * growing 48% to $167mn within the annualized 3Q09 results


Essentially, one would need to assume that all of the non-AWS components within the Other revenue line have generated less than 10% of the reported annual growth in 2007, 2008, and the annualized 3Q09 results in order for the AWS portion to equal over $200mn on an annualized basis within the 3Q09 results.

To save some of you from needing to post “what-if” corrections and comments, I will admit (again) that none of this is definitive or factual. This is merely one man playing with the numbers that are publicly reported by the company and mixing in some context. [Randy Bias did a great job with starting the discussion of how big is AWS](http://cloudscaling.com/blog/cloud-computing/amazons-ec2-generating-220m-annually) really! Until Amazon confirms the actual size, I thought this would be a useful contribution to the discussion.

Issues such as currency impacts on the reported numbers could, and likely do, influence each of the reported revenue figures that this analysis draws upon. Amazon's A9 service likely has declining revenue, which if significant in prior size and pace of decline, would justify altering the assumptions used herein. Also, there is no description in the Amazon filings of whether the reported revenue is counted net of credits, or not. There are basically many different revenue recognition accounting details that would need to be described by Amazon to truly know how to best interpret the reported numbers.

With the disclaimer out of the way, I will point out that even if the $167mn tally for AWS within the annualized 3Q09 results is closer to reality, this would represent 30% of Other-No.America revenue (and just shy of 25% of worldwide Other revenue). I mention this point because during the [Q&A portion of Amazon’s earnings call](http://seekingalpha.com/article/168333-amazon-q3-2009-earnings-call-transcript), the only question into AWS/Other was one asking for which AWS services were seeing stronger uptake. To paraphrase the response, Amazon said AWS in total is certainly part of the “Other” revenue increase along with marketing and Amazon Enterprise Services, which are the larger pieces of “Other.” I hear/read this to mean that Amazon had three core items with Other that are all meaningful to the “Other” total. One-third equals 33%. I am not taking this as validation of our attempts to better pick an estimate of AWS revenue, but I am inclined to think that if AWS was the largest of the “Other” components, the comments from management might have suggested this in their remarks.

As always, your thoughts, comments, objections, criticisms, support, and even praise are invited and welcome in the comment section below, or in the [comment section](http://nomoreservers.com/best-of-the-web/onsecondthought) of [www.NoMoreServers.com](http://nomoreservers.com). Regardless, I hope you will become a regaular at [NoMoreServers](http://nomoreservers.com)!

OK, I am getting my gloves back on and simply concluding that Amazon is a good competitor, but mindful that this is a long war where there will be many battles as businesses of all sizes continue to trial both [Amazon](http://aws.amazon.com) and [Rackspace](http://cloudscaling.com/blog/cloud-computing/amazons-ec2-generating-220m-annually)’s cloud offerings. The market is big enough for both of us to succeed, but that won’t stop [Rackspace](http://www.rackspace.com) one bit from our pursuit of long-term leadership.
