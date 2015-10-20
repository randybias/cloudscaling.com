---
author: Randy Bias
comments: true
date: 2015-05-06 16:30:54+00:00
layout: post
slug: introducing-coprhd-copperhead-the-cornerstone-of-a-software-defined-future
title: Introducing CoprHD ("copperhead"), the Cornerstone of a Software-Defined Future
wordpress_id: 7752
old_categories:
- Cloud Computing
---




You’ve probably been wondering what I’ve been working on post-acquisition and yesterday you saw some of the fruits of my (and many others) labor in the [CoprHD announcement](https://pulseblog.emc.com/2015/05/05/meet-project-coprhd-emc-delves-deeper-into-open-source/).  CoprHD, pronounced “copperhead” like the snake, is EMC’s first ever open source product.  That EMC would announce open sourcing a product is probably as big a surprise to many EMCers as it may be to you, but more importantly it’s a sign of the times.  It’s a sign of where customers want to take the market.  It’s also the [sign of a company willing to disrupt itself](http://www.cloudscaling.com/blog/cloud-computing/an-openstack-dream-team/) and it’s own thinking.




This is not your father’s EMC.  This is a new EMC and I hope that CoprHD, a core storage technology based on EMC’s existing [ViPR Controller product](https://www.emc.com/products/storage/software-defined-storage/vipr-controller.htm), will show you that we are very serious about this initiative.  It’s not a me too move.




This move is partly in direct response to enterprise customer requests and our own assessment of where the market is headed.  Perhaps more importantly, this move drives freedom of choice and the maintenance of control on the part of our customers.  Any community member (partner, customer, competitor) is free to add support for any storage system.  CoprHD is central to a vendor neutral SDS controller strategy.




For those of you not familiar with ViPR Controller, it is a “software-defined storage” (SDS) controller, much like OpenDaylight is a software-defined networking (SDN) controller.  This means that ViPR can control and manage a variety of storage platforms and, in fact, today it is [already multi-vendor, supporting not only EMC, but NetApp, Hitachi, and many others](/assets/pdf/h11750-emc-vipr-software-defined-storage-ds.pdf).  ViPR Controller has REST APIs, ability to integrate to OpenStack Cinder APIs, a pluggable backend, and is truly the only software stack I’ve seen out there that fulfills the hopes and dreams of a true SDS controller by not only providing heterogeneous storage management but also metering, a storage service catalog, resource pooling, and much, much more.




CoprHD is the open source version of ViPR Controller.  A comparison:




[![Comparing CoprHD vs ViPR Controller.001](/assets/media/2015/05/Comparing-CoprHD-vs-ViPR-Controller.001-1024x576.jpg)](/assets/media/2015/05/Comparing-CoprHD-vs-ViPR-Controller.001.jpg)




What is “Non-essential, EMC-specific code”?  In this case, it’s simply the part of the code that enables “phone home” support to EMC, which has no relevance to users of CoprHD’s SDS services with non-EMC data stores.  CoprHD is in every way ViPR Controller and the two are interchangeable, delivering on the promise of vendor neutrality and providing customers control, choice, and community.  A quick caveat: please be aware that at this time, although this is the same code base and APIs, a clean installation is required to convert CoprHD to ViPR Controller or vice versa.  There is no “upgrade” process and it’s unclear that it ever makes sense to create one, although we might eventually create a migration tool depending on customer demand for one.




The rest of this blog post seeks to answer the key questions many have about this initiative:





	
  * Why ViPR Controller?

	
  * Why now?

	
  * Why would EMC do this?




Exciting times.  Let’s walk through it!




## The Emerging Strategy for Enterprise: Open Source First




More and more we’re seeing from customers that proprietary software solutions have to be justified.  Today, the [default is to first use open source software and open APIs to solve 80% of the problem and only to move to proprietary software when it is truly required](https://reflectionsblog.emc.com/2015/04/open-source-first-strategy/).  This reflects the growing awareness of traditional enterprises that it is in their best interests to maintain control of their IT capabilities, reduce costs and increase agility.  This strategy, of course, mirrors what newer webscale enterprises such as Amazon and Google already knew.  Webscale players have been estimated to be as much as 80-90% open source software internally, compared to traditional enterprises which can be closer to 20-30% [1].




We heard from many enterprise customers that they were reluctant to adopt ViPR Controller, despite it being proven in production, simply because it was not open source.  No one wants “lock-in”, by which what they really mean is they desire vendor neutrality and maintaining control.




Businesses also want to know that not only could they switch vendors for support of an open source project, but perhaps more importantly, that they could directly affect the prioritization of roadmap features, by providing their own development resources or hiring outside engineering firms.




Finally, in any open source first strategy is the need and desire to have like-minded consumers of the same project around the table.  Businesses want to know that others like them are close by and available in public forums such as bug tracking systems, code review tools, and Internet Relay Chat (IRC).




This then is the “control” provided by an open source first strategy:





	
  1. Vendor neutrality and choice of support options

	
  2. Direct influence and contribution to the roadmap

	
  3. Ability to engage with like-minded businesses through public forums




You’ll probably notice that none of these equate to “free”.  Nowhere in our dialogues with customers has there been an overt focus on free software.  Certainly every business wants to cut costs, but all are willing to pay for value.




## EMC Puts Customers and Business Outcomes First




EMC is renowned for being the world’s leader in storage technology, but more than a storage business, EMC is an information management business.  We put a premium on helping customers succeed even when that means that there may be an impact to our business.  If you look at today’s EMC, it is organized in such a way that an entire division, Emerging Technologies Division, is dedicated to disrupting the old way of doing things.  Software-only technologies such as [ScaleIO](http://www.emc.com/storage/scaleio/index.htm), [ViPR](http://www.emc.com/vipr), and ECS (the non-appliance version) exist here.  Software that can run on anyone’s hardware, not just EMC’s.  All-flash technologies like XtremIO were birthed here.  ETD has led EMC’s community development with [EMC{code}](http://www.emccode.com) and is also leading the way in helping EMC become more involved with open source initiatives and delivering open source distributions of some of its products.




Our product strategy is to meet the customer where they are at and to be “flexible on the plan, while firm on the long term mission.”  Our broader strategy is to drive standardization and clarity in the industry around “Software-Defined Storage” (SDS), to help establish open and standard APIs, and to ease the management of storage through automation and vendor neutral management systems.  This means continually evolving and adjusting our business and our products.  It also implies a need to do more than storage (hence Emerging Technologies and not Emerging Storage Technologies Division) but more on that at a later date.




Achieving this vision requires leadership and forethought.  CoprHD is a sign of our willingness to go the distance, adapt and change, and disrupt ourselves.  Software-defined infrastructure and software-defined datacenters are a critical part of EMC II’s future and CoprHD is vital to enabling the SDS layer of any SDDC future.




## CoprHD Is Leading The Way in SDS




Make no doubt, [CoprHD](http://coprhd.github.io) (code available in June) is leading the way in SDS.  EMC welcomes everyone who wants to participate and we have already heard from customers who will ask their vendors to come to the party by adding support for their product to the open source project.  A truly software-defined future awaits and EMC is using its deep storage roots and focus on software to deliver on that future.




Again, this is NOT your father’s EMC.  This is a new EMC.




## Thank-Yous Are In Order




Finally, although I acted as a “lightning rod” to drive organizational change, I mostly educated, where others acted.  I want to thank a number of EMCers without whom the CoprHD open source project simply wouldn’t have happened.  A short and incomplete list of amazing people who made this possible follows:





	
  * Jeremy Burton: executive buy-in and sponsorship

	
  * Manuvir Das: engineering leadership

	
  * Salvatore DeSimone: architecture, thought-leadership, and co-educator

	
  * James Lally: project management

	
  * The entire ViPR Controller software team for being willing to make a change

	
  * Intel for stepping up and helping us become a better open source company

	
  * Canonical for validating our direction and intentions

	
  * [EMC{code}](http://emccode.github.io) team for encouragement and feedback







* * *




[1] An estimate from my friends at [Black Duck Software](https://www.blackducksoftware.com/).



