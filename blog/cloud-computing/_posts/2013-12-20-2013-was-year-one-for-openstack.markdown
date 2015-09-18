---
author: Randy Bias
comments: true
date: 2013-12-20 21:17:29+00:00
layout: post
slug: 2013-was-year-one-for-openstack
title: 2013 Was YEAR ONE for OpenStack
wordpress_id: 7065
old_categories:
- Cloud Computing
- OpenStack
tags:
- OpenStack
- predictions
---

It’s useful for all in the OpenStack community to remember that many believe OpenStack was not ready for prime time until Essex or possibly Folsom. Some might even claim Grizzly was the first true production release. My money is on Folsom for what it’s worth.

What this means is that 2013 was **YEAR ONE** for OpenStack in terms of potential enterprise adoption. Think of 2010 and 2011 as the ALPHA and BETA years. Similarly, 2012 can be thought of as the 1.0 release and Grizzly as 1.1.

As you know, enterprise products don’t have thousands of customers in year one. In fact, according to a friend, Michael Mullany, previously VP of Marketing at VMware now CEO of Sencha, “Server units were ... very slow for ESX in year 1.”  Given that we are year one for OpenStack enterprise adoption, the recent [user survey](https://www.openstack.org/user-survey/Login) can be seen in a very different light:

  * 387 deployments, doubled from 6 months ago

  * almost 200 of these deployments are for production workloads

  * 47 of these deployments are over 100 physical servers in size

  * continued doubling every 6 months would result in ~3,000-6,000 deployments by year three, on par with VMware’s [announced](http://www.vmware.com/company/news/releases/momentum.html) 5,500 server customers in year three

So, how did we do in year one of enterprise adoption?

**The Year in Review**

OpenStack began this year with three major discussion themes:

  1. rapid expansion of service provider and web app use cases

  2. ecosystem wars (OpenStack v Eucalyptus v CloudStack)

  3. anticipation of Grizzly and the maturity it would bring

Fast forward 12 months and you can see just how much ground the OpenStack community has covered. And, when you consider that the Foundation is a little more than a year old, you begin to appreciate the progress that’s been made.

**1. Growth, growth, growth**

The OpenStack Foundation’s [second user survey](http://www.slideshare.net/openstack/openstack-user-survey-october-2013?from_search=1) shows 822 respondents from 539 companies running 387 deployments, 165 of which are in production. The majority of these deployments are on-premise private cloud (58%), and while a bunch of them are less than 500 compute instances, there are a significant number in the 500-5,000 range.

Compare these numbers to the [first user survey](http://www.slideshare.net/noggin143/havana-survey-resultsfinalv2?from_search=7) and extrapolate the trend (dangerous with two data points, granted), and you see impressive growth across the board. In six months, we’ll have another survey and can more confidently project growth. Until then, it’s safe to say OpenStack is growing where it counts: deployments.

**2. Enterprise traction**

Enterprises achieving success with OpenStack fall into two camps: those who already have substantial open infrastructure expertise in house, and those who hired that expertise via a vendor with a supported distro or product. There are few enterprises that fit the former case, and commercial products based on OpenStack are only now maturing to serve the latter case.

OpenStack is a less mature analogue to the Linux kernel, not a Linux operating system. It’s a framework and a centerpiece for a full cloud operating system. Most enterprises are not going to have the patience or risk tolerance to build their own OpenStack-based deployment from raw code, then bear the cost of supporting it. Doing so is much like rolling your own Linux operating system distribution, which few do.

We see enterprises embracing OpenStack in our sales pipeline and in boot camps like the one we ran at Cloud Connect Chicago. It’s going to be a year or more before those enterprises work their way from deployment strategy through standup and on to production. Then, they’ll have to decide how much they want to talk about it.

**3. OpenStack spreads its umbrella**

OpenStack, as of Havana, is now 13 separate projects, including the four new projects in incubation status. These new projects provide key capabilities requested by the enterprise such as support for bare metal instances for better support of big data and advanced hardware. Database as a service is another new feature of interest to enterprise buyers.

**4. Rackspace diminishes in OpenStack influence**

Rackspace is now the #5 contributor and we are seeing their community influence diminish. With all due respect to Rackspace, this is good for the project: it shows the maturation of our democratic meritocracy, where it’s crucial that no one company is overly influential.

**5. Demand for hybrid cloud is real**

Hybrid cloud is the near term future. Even Andy Jassy of AWS has [admitted it](http://www.itworld.com/cloud-computing/382784/amazon-web-services-grudgingly-accepts-hybrid-cloud) at the recent re:Invent conference. [RightScale’s State of the Cloud presentation](http://www.rightscale.com/lp/state-of-the-cloud-report.php) shows extensive interest from enterprises in multi-cloud and hybrid cloud solutions.

OpenStack is the best positioned project to deliver hybrid cloud. It’s got the most flexible architecture, extensive support for AWS APIs, growing GCE API support, and obviously, Rackspace API support is already there. That means that OpenStack is the only open source project with support for the top three public clouds. Most importantly, the community seems committed to working harder than ever on delivering public cloud compatibility.

**Summarizing**

There are challenges for OpenStack. We must come to terms with architecture and API frameworks. Technical and Board leadership must determine what is “core”. The community has to become disciplined and avoid the distractions of pet projects. And the disconnect among users, operators, and developers needs to be addressed. All of this will happen within the structure of an open source project that’s governed by a technical meritocracy, not a benevolent dictatorship. A tall order for 2014 to be certain.

Time to get back to work. Onward to Icehouse and the J release. See you in Atlanta next May.
