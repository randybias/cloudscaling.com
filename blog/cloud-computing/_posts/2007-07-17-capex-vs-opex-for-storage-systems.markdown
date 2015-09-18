---
author: Randy Bias
comments: true
date: 2007-07-17 03:23:47+00:00
layout: post
slug: capex-vs-opex-for-storage-systems
title: CapEx vs. OpEx for Storage Systems
wordpress_id: 2333
old_categories:
- Cloud Computing
- Technology
tags:
- Virtualization
---

I read a number of blogs on a regular basis.  One category I watch fairly closely is storage, largely because it has a direct impact on the future of virtualization, but also because it is also going through some radical changes in terms of _[storage virtualization](http://en.wikipedia.org/wiki/Storage_Virtualization)_ and [commoditization](http://www.techworld.com/storage/features/index.cfm?featureid=2744).  Storage virtualization is going to be vitally important to the future of utility computing and how we think about running operational infrastructure in the future.
<!-- more -->
The CTO of Hitachi, [Hu Yoshida](http://www.hds.com/corporate/about-hds/executive-team/hubert-yoshida.html), has a great [blog](http://blogs.hds.com/hu/) on storage and so does [Dave Hitz](http://blogs.netapp.com/dave/), one of the [founders](http://investors.netapp.com/biodetail.cfm?BioID=1581) of NetApp.  I was reading Hu's blog today where he was talking about the cost of running storage in terms of CapEx vs. OpEx and again I'm struck by the parallels to virtualization.

Hu makes a [great argument](http://blogs.hds.com/hu/2007/07/opex_the_other_expense.html) regarding the Total Cost of Ownership (TCO) of storage.  The key observation I had was that, in the enterprise, it's easier for the finance folks to measure based on capital expenses (CapEx) than operational expenses (OpEx) because CapEx is an easily measurable expense.  I think this is somewhat human nature.  Folks simply walk away from deep analysis in those circumstances where qualifying and quantifying are difficult; settling for estimations and best guesses.

It's not just in storage where this attitude prevails though.  I see this playing out with [Amazon's Web Services](http://www.amazonaws.com) (AWS) now; particularly the [Elastic Compute Cloud](http://ec2.amazonaws.com) (EC2).  The commodity nature of the service means that it's trivial and cheap to get compute cycles, but the cost to run those servers is not.  Still, the uptake in terms of startups is tremendous.  I've been talking to investors on and off for the past 6-9 months and knowledge of EC2 has gone from "yeah, we've heard of it" to "every one of our investments is leveraging it" during that time.

EC2 provides great leverage in terms of CapEx, but almost increases corresponding OpEx.  It's hard to use in terms of design, monitoring, and maintenance and while [some](http://info.rightscale.com/) [folks](http://weoceo.weogeo.com/) are working on making it easier, it's still not 'easy'.  Still, it's trivial to quantify the CapEx costs in this case and AWS is getting great traction from this fact.

In the future, I expect reality to set in that the majority of the cost wasn't in the hardware to begin with.
