---
title: 'What AWS Revenues Mean for Public Cloud and OpenStack More Generally'
link: http://cloudscaling.com/blog/cloud-computing/what-aws-revenues-mean-for-public-cloud-and-openstack-more-generally/
author: randybias
description: 
post_id: 7747
created: 2015/04/27 08:20:10
created_gmt: 2015/04/27 15:20:10
comment_status: open
post_name: what-aws-revenues-mean-for-public-cloud-and-openstack-more-generally
status: publish
post_type: post
layout: post
category: cloud-computing
---

# What AWS Revenues Mean for Public Cloud and OpenStack More Generally

At the risk of sounding like “I told you so”, I wanted to comment on the recent Amazon 10-Q report.  If you were paying attention you likely saw it as it was the first time that AWS revenues were reported broken out from the rest of Amazon.com, ending years of speculation on revenue. The net of it is that AWS revenues for Q1 2015 were 1.566B, putting it on a run rate of just over 6B this year, which is almost on the money for what I predicted at the 2011 Cloud Connect keynote I gave [ [VIDEO](https://vimeo.com/21372341), [SLIDES](http://www.slideshare.net/randybias/enterprise-cloud-myths) ]. Predictions in cloud pundit land are tricky as we’re usually about as often wrong as we are right; however, I do find it somewhat gratifying to have had this particular prediction correct and I will explain why shortly.

## The 2015 Q1 AWS 10-Q

If you don’t want to [wade through the 10-Q](http://phx.corporate-ir.net/phoenix.zhtml?c=97664&p=irol-reportsother), there are choice pieces in here that are quite fascinating.  For example as pointed out [here](http://recode.net/2015/04/23/amazon-reveals-aws-is-a-nearly-5-billion-business-and-is-profitable/) AWS is actually the fastest growing segment of Amazon by a long shot.  It is also the most profitable in terms of gross margin according to the 10-Q.  I remember having problems convincing people that AWS was operating at a significant profit over the last 5 years, but here it is laid out in plain black and white numbers.

Other interesting highlights include:

  * Growth from Q1 2014 -> Q1 2015 is 50% y/o/y, matching my original numbers of 100% y/o/y growth in the early days scaling down to 50% in 2015/2016
  * Goodwill + acquisitions is 760M, more than that spent on Amazon.com (retail) internationally and a third of what is spent on Amazon.com in North America
  * 1.1B spent in Q1 2015 “majority of which is to support AWS and additional capacity to support our fulfillment operations”
  * AWS y/o/y growth is 49% compared to 24% for Amazon.com in North America and AWS accounts for 7% of ALL Amazon sales

Here is a choice bit from the 10-Q:

> Property and equipment acquired under capital leases were $954 million and $716 million during Q1 2015 and Q1 2014. This reflects additional investments in support of continued business growth primarily due to investments in technology infrastructure for AWS. We expect this trend to continue over time.

## The AWS Public Cloud is Here to Stay

I’ve always been bullish on public cloud and I think these numbers reinforce that it’s potentially a massively disruptive business model. Similarly, I’ve been disappointed that there has been considerable knee-jerk resistance to looking at AWS as a partner, [particularly in OpenStack land](http://www.cloudscaling.com/blog/cloud-computing/openstack-aws/) [1].

What does it mean now that we can all agree that AWS has built something fundamentally new?  A single business comparable to all the rest of the U.S. hosting market combined?  A business focused almost exclusively on net new “platform 3” applications that is growing at an unprecedented pace?

It means we need to get serious about public and hybrid cloud. It means that OpenStack needs to view AWS as a partner and that we need to get serious about the AWS APIs.  It means we should also be looking closely at the Azure APIs, given it appears to be the second runner-up.

As the speculation ceases, let’s remember, this is about creating a whole new market segment, not about making incremental improvements to something we’ve done before.

* * *

[1] If you haven't yet, make sure to check out the [latest release we cut](https://launchpad.net/ec2-api/trunk/0.1.0) of the [AWS APIs for OpenStack](https://github.com/stackforge/ec2-api)