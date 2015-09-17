---
title: 'Citrix Joins Apache and Contributes CloudStack: Bold Move or Brash Decision?'
link: http://cloudscaling.com/blog/cloud-computing/citrix-joins-apache-and-contributes-cloudstack-bold-move-or-brash-decision/
author: Randy Bias
description: 
post_id: 3839
created: 2012/04/02 21:30:27
created_gmt: 2012/04/03 04:30:27
comment_status: open
post_name: citrix-joins-apache-and-contributes-cloudstack-bold-move-or-brash-decision
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Citrix Joins Apache and Contributes CloudStack: Bold Move or Brash Decision?

**UPDATED**: link added to actual Citrix announcement; clarification re: story sources added at end; clarification of "contributor community" in 8th paragraph. As I write this, Citrix is preparing a [big announcement tomorrow](http://www.citrix.com/English/NE/news/news.asp?newsID=2323072). The details are sketchy, but apparently they are joining the [Apache Software Foundation](http://www.apache.org) (ASF) and contributing back Cloud.com’s [CloudStack](http://www.cloudstack.org/) infrastructure-as-a-service (IaaS) software. It’s possible they may even contribute Xen, although I don’t have any indications of such. Citrix paid a pretty penny for Cloud.com. At reportedly 200M[1] and possibly as much as 40x revenue, it was a huge bet and now it appears destined to be transferred over to ASF lock, stock, and barrel. At the time of the acquisition, it wasn’t clear what the Citrix strategy was given they had made a [big public commitment to the OpenStack project](http://www.citrix.com/English/ne/news/news.asp?newsID=2311980) (whither art thou, Project Olympus?). It was never clear if they could bring the two projects together as they claimed they would given the likely tissue rejection (Java vs. Python anyone?). Now, it appears Citrix is not only going their own way, but possibly planning to leave OpenStack behind. So, what’s happening? Is this Citrix throwing in the towel or is it a new opportunity to drive greater awareness of open source and to foster the cloud computing space in general? It’s hard to say, but we can be certain of a number of things. First, Citrix’s focus has always been VMware. Their virtualization strategy has largely been focused on building a fast-follow model (XenServer+XenCenter) to VMware’s wildly successful vSphere system. The more cynical might see the Cloud.com acquisition as a similar move to create an alternative to VMware’s vCloud Director. Second, Citrix has struggled to integrate CloudStack and OpenStack or to have a cohesive strategy or statement on how integration could even be done. Meanwhile, the pressure to see a return on investment for CloudStack must be very high. Remember, this is the second major open source project they have invested in. It’s unclear if XenSource, [acquired 4.5 years ago for $500M](http://www.citrix.com/English/NE/news/news.asp?newsID=683171), was ever a net win. Third, many believe there is currently a three-way ecosystem race: Amazon Web Services, VMware, and OpenStack. Certainly Citrix doesn’t want to be left out of the party. If they are moving away from OpenStack and can’t move towards VMware, that only leaves two options: move towards Amazon or try and create a fourth ecosystem. Perhaps that is a major motivation for joining ASF? Fourth, while Citrix’s CloudStack has been officially open source for a while now (GPL, to be exact), it hasn’t seen the uptake or contributor community traction that OpenStack has seen. As the fastest growing open source project in history, OpenStack can make some serious claims in terms of the number of contributors and velocity. CloudStack, meanwhile, has been predominantly an open source project of one, first Cloud.com and now Citrix. Joining ASF adds a sense of open source legitimacy and may be a defensive strategy on Citrix’s part to avoid obsolescence in the face of OpenStack’s mindshare dominance, while trying to gain more mindshare against their old rival, VMware. As an aside, it’s great to see more validation that open source solutions are highly desirable for building **open cloud infrastructure**. We welcome as many companies into the fold as possible. Hopefully CloudStack will have more success as an Apache Software Foundation (ASF) open source project than it has enjoyed solo. So what’s happening here? Is Citrix giving up? That seems unlikely. Are they giving new life to CloudStack as an open source project? All of the momentum continues to be with OpenStack at the moment. Joining ASF seems like a bold and smart business move, but it could also wind up being quite a big flop if a community doesn’t form. Bold move or brash decision? Only time will tell. 

* * *

[1] Their most recent 10-K says 158M in cash with 500,000 in stock + options or roughly 40M at today's close of $80/share. **Story sourcing clarification**: Some folks in the twitter verse were annoyed that I broke this story early.  These bloggers/pundits had been briefed in advanced of the Citrix announcement.  I was not briefed in advance.  I was notified through a tip.  I confirmed with a second source and then wrote this article.  Neither myself nor my sources were under any kind of embargo or NDA.

## Comments

**[James Urquhart](#3326 "2012-04-02 21:39:00"):** The one thing to note about CloudStack is it's existing user base. Not it's open source community, but it's actual user base. I would be willing to bet the number of service providers on CloudStack vastly outnumbers those running OpenStack…today. The big question, to me, is whether CloudStack's existing install base (such as it is) gives it some advantage over the relatively young install base of OpenStack, especially given OpenStack's continuing struggles with providing stable, scalable releases. (It's possible, but it's not "out of the box" yet.) As you say, the outcome is far from pre-determined. However, I think an Apache-supported alternative to OpenStack is a great shot in the arm for both projects, and the cloud community in general.

**[Massimo](#3327 "2012-04-03 02:38:00"):** 200M$ for ClouStack and 500M$ for XEN both donated to the open source community make Citrix the biggest charity organization in the world.  Joking aside... interesting that you listed AWS, OpenStack and VMare as a three-way ecosystem race. Not complaining but wondering why you left out Microsoft?  Massimo.

**[Jimjag](#3328 "2012-04-03 05:58:00"):** OpenStack had the opportunity to finally go its own way, and get out from under RackSpace's shadow and control. Moving outwards was a step in the right direction, but now its mired in debates about what "kind of foundation" they want to create. The ASF has a proven track record and is *really* a neutral ground that all players can be a part of on an equal footing.

**[hogstrom](#3329 "2012-04-03 07:16:00"):** It's clear that developers and providers are looking for a standard.  We've got several attempts at IaaS either through APIs (OpenStack, CloudStack, DeltaCloud, DMTF) and implementations (same list sans DMTF).  I think the one that wins will be simple (something that can be built upon) and open (non-GPL) so that others can build upon it.  IaaS is needed but not where the value is, the value is really on the software and systems built on top of the IaaS.

**[randybias](#3330 "2012-04-03 07:25:00"):** I agree with that, mostly.

**[randybias](#3331 "2012-04-03 07:26:00"):** Communities create foundations, not the other way around.

**[randybias](#3332 "2012-04-03 07:26:00"):** Microsoft doesn't really operate at the IaaS layer in a meaningful way.

**[Daniel Lopez](#3333 "2012-04-03 08:16:00"):** Given the kind of community that needs to form around a cloud infrastructure project as opposed to, say, an XML parsing library, Jim is spot on that the ASF has a track record of neutrality.

**[randybias](#3334 "2012-04-03 08:24:00"):** I don't think it's clear that a large community is advantageous for a cloud infrastructure project at all. The jury is out since its just being done now. Second what has neutrality got to do with building a community if it's required? It hasn't slowed OpenStack down.

**[Daniel Lopez](#3335 "2012-04-03 08:43:00"):** Sorry, I should have been more specific. I am not referring to a large community, but rather to a reduced community of large entities such as corporations. While a lot of individual developers may be able to use and contribute patches to an XML library, that is likely not the case for a cloud infrastructure project (I am generalizing here, just wanted to illustrate the idea). In this regard companies like HP, IBM, etc. see the ASF as a truly neutral entity  that they know how to get involved with. That is the "kind of community" that I was referring to. The Rackspace foundation does not look like such a place (at least from the outside, you probably have much more first-hand knowledge that I do).

**[randybias](#3336 "2012-04-03 09:12:00"):** Ah... Yes I generally concur with this although neutral environments sometimes harm. Witness the vendor madness around XML/SOAP standards that was the WS-I mess. Re the OpenStack Foundation, it's structure is such that Rackspace will clearly no longer be the center of gravity. The governance model would marginalized their influence and the resulting foundation is relatively neutral.

**[Twirrim](#3337 "2012-04-03 10:01:00"):** This maybe a stupid question, but what is Microsoft doing by way of IaaS?  It doesn't seem like anything on a scale of OpenStack, CloudStack etc.

**[OBA17](#3338 "2012-04-03 10:29:00"):** This statement is interesting. "Joining ASF adds a sense of open source legitimacy and may be a defensive strategy on Citrix’s part to avoid obsolescence in the face of OpenStack’s mindshare dominance". Why would a company that is winning the battle for paying customers and large scale production implementations be concerned about 'avoiding obsolescence'? To me this looks like a bold move from a position of strength. Citrix already owns the 'paying market' and now they are trying to steal Openstack's open source street cred. It will be interesting to hear what, if anything, Citrix has to say about their experience as an  Openstack contributer. I am guessing that like others they considered the process to be highly dysfunctional.

**[Ed Laczynski](#3339 "2012-04-03 11:13:00"):** Agreed.  When measuring the value of a platform,  is the value in the # of open-source contributions to date, or the # of actual customers/market revenue attained?  I'd argue the later.

**[randybias](#3340 "2012-04-03 11:17:00"):** There are 15 production OpenStack deployments. There are less than 50 CloudStack customers. That's not exactly a huge gap especially given CloudStack's 2.5 year lead.

**[randybias](#3341 "2012-04-03 11:23:00"):** Measuring open source project success by revenue doesn't make sense. It's about adoption and deployments. By that measure the two projects are not very far apart.

**[OBA17](#3342 "2012-04-03 14:44:00"):** You would also have to reference the size of those deployments and any open source cloudstack deployments (non-customer) for those numbers to be interesting. Also selling private cloud 2.5 years ago - massively different than today where every enterprise, hosting provider and telco seems to have a project. It will be interesting to see how it all plays out.

**[randybias](#3343 "2012-04-03 14:59:00"):** I don't think anyone has real numbers, but my point is that it's just as much hand-waving to say CloudStack is 'winning' based on what's certainly < 5M in annual revenue as it is to say OpenStack is winning because they have a bigger contributor community. The closest thing you can do is measure size and/or number of deployments (paid or not). No one has exact numbers there, but as one of the earliest CloudStack deployers and now one of the key members of the OpenStack community, I've got a pretty good bead on where things are at. I'd say CloudStack is in the lead here for sure, but nearly as much as people think. Most people have been on the sidelines and are just now starting to spin up efforts. So, it's going to be a real race and I think that's just fine.

**[Peder Ulander](#3344 "2012-04-04 11:33:00"):** Randy - we have 100 commercial/paid cloud deployments and significant number of deployments above that based on our OSS community.    We are adding, on average, 10 new commercial clouds per month and that is on the rise.

**[Peder Ulander](#3345 "2012-04-04 11:35:00"):** You're revenue numbers are incorrect, by a significant discount.

**[randybias](#3346 "2012-04-04 11:36:00"):** Please feel free to correct. I'm sure people would like to know. They are only estimates based on your previous run rate.

**[Peder Ulander](#3347 "2012-04-04 11:46:00"):** You know that I can't give specific comments on that as a public company and your claims that you have any idea of our revenue and then making that claim was unnecessary.  I will assert that your number is not far off, if we are talking about quarterly revenues

**[randybias](#3348 "2012-04-04 11:57:00"):** My information is old. It sounds like you are growing faster than I expected; however, Citrix can break out the CloudStack revenues in their 10-K numbers any time. The numbers available in the 2011 10-K are grouped under 'Cloud' which includes NetScalers and XenServer much more established product lines. Here is what the 2011 10-K says: "Product License revenue increased during 2011 when compared to 2010 primarily due to increased sales of our Desktop Solutions, led by XenDesktop of $141.5 million and increased sales of our Datacenter and Cloud Solutions, led by NetScaler, of $86.9 million." So, the 10-K claims 86.9M for NetScaler, surely next largest is XenServer, followed by CloudStack. So, a 20M annual run rate is pretty good, if accurate. If Cloud.com was on this trajectory last year, then why sell?

**[Peder Ulander](#3349 "2012-04-04 12:52:00"):** You have the approx number, and yes, our trajectory was fantastic.  There are many reasons to go through an exit, especially when dealing with strategic vs accretive valuations.  Additionally, aligning with a big player that shares the same vision and has the ability to drive the right position in the market is a 1+1=3 move.

**[OBA17](#3350 "2012-04-05 08:03:00"):** MSFT will be launching an IaaS version of Azure supporting Windows and Linux. http://www.zdnet.com/blog/microsoft/microsoft-to-enable-linux-on-its-windows-azure-cloud-in-2012/11508

**[randybias](#3351 "2012-04-05 08:10:00"):** No opinion until its launched and I can see it. I am pessimistic but open to it being awesome.

