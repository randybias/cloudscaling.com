---
author: Randy Bias
comments: true
date: 2012-04-03 04:30:27+00:00
layout: post
slug: citrix-joins-apache-and-contributes-cloudstack-bold-move-or-brash-decision
title: 'Citrix Joins Apache and Contributes CloudStack: Bold Move or Brash Decision?'
wordpress_id: 3839
old_categories:
- Cloud Computing
---

**UPDATED**: link added to actual Citrix announcement; clarification re: story sources added at end; clarification of "contributor community" in 8th paragraph.

As I write this, Citrix is preparing a [big announcement tomorrow](http://www.citrix.com/English/NE/news/news.asp?newsID=2323072). The details are sketchy, but apparently they are joining the [Apache Software Foundation](http://www.apache.org) (ASF) and contributing back Cloud.com’s [CloudStack](http://www.cloudstack.org/) infrastructure-as-a-service (IaaS) software. It’s possible they may even contribute Xen, although I don’t have any indications of such.

Citrix paid a pretty penny for Cloud.com. At reportedly 200M[1] and possibly as much as 40x revenue, it was a huge bet and now it appears destined to be transferred over to ASF lock, stock, and barrel. At the time of the acquisition, it wasn’t clear what the Citrix strategy was given they had made a [big public commitment to the OpenStack project](http://www.citrix.com/English/ne/news/news.asp?newsID=2311980) (whither art thou, Project Olympus?). It was never clear if they could bring the two projects together as they claimed they would given the likely tissue rejection (Java vs. Python anyone?). Now, it appears Citrix is not only going their own way, but possibly planning to leave OpenStack behind.

So, what’s happening? Is this Citrix throwing in the towel or is it a new opportunity to drive greater awareness of open source and to foster the cloud computing space in general?

It’s hard to say, but we can be certain of a number of things.

First, Citrix’s focus has always been VMware. Their virtualization strategy has largely been focused on building a fast-follow model (XenServer+XenCenter) to VMware’s wildly successful vSphere system. The more cynical might see the Cloud.com acquisition as a similar move to create an alternative to VMware’s vCloud Director.

Second, Citrix has struggled to integrate CloudStack and OpenStack or to have a cohesive strategy or statement on how integration could even be done. Meanwhile, the pressure to see a return on investment for CloudStack must be very high. Remember, this is the second major open source project they have invested in. It’s unclear if XenSource, [acquired 4.5 years ago for $500M](http://www.citrix.com/English/NE/news/news.asp?newsID=683171), was ever a net win.

Third, many believe there is currently a three-way ecosystem race: Amazon Web Services, VMware, and OpenStack. Certainly Citrix doesn’t want to be left out of the party. If they are moving away from OpenStack and can’t move towards VMware, that only leaves two options: move towards Amazon or try and create a fourth ecosystem. Perhaps that is a major motivation for joining ASF?

Fourth, while Citrix’s CloudStack has been officially open source for a while now (GPL, to be exact), it hasn’t seen the uptake or contributor community traction that OpenStack has seen. As the fastest growing open source project in history, OpenStack can make some serious claims in terms of the number of contributors and velocity. CloudStack, meanwhile, has been predominantly an open source project of one, first Cloud.com and now Citrix. Joining ASF adds a sense of open source legitimacy and may be a defensive strategy on Citrix’s part to avoid obsolescence in the face of OpenStack’s mindshare dominance, while trying to gain more mindshare against their old rival, VMware.

As an aside, it’s great to see more validation that open source solutions are highly desirable for building **open cloud infrastructure**. We welcome as many companies into the fold as possible. Hopefully CloudStack will have more success as an Apache Software Foundation (ASF) open source project than it has enjoyed solo.

So what’s happening here? Is Citrix giving up? That seems unlikely. Are they giving new life to CloudStack as an open source project? All of the momentum continues to be with OpenStack at the moment. Joining ASF seems like a bold and smart business move, but it could also wind up being quite a big flop if a community doesn’t form.

Bold move or brash decision? Only time will tell.






* * *



[1] Their most recent 10-K says 158M in cash with 500,000 in stock + options or roughly 40M at today's close of $80/share.

**Story sourcing clarification**: Some folks in the twitter verse were annoyed that I broke this story early.  These bloggers/pundits had been briefed in advanced of the Citrix announcement.  I was not briefed in advance.  I was notified through a tip.  I confirmed with a second source and then wrote this article.  Neither myself nor my sources were under any kind of embargo or NDA.
