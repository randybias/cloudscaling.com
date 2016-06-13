---
author: Randy Bias
comments: true
date: 2009-08-06 15:30:19+00:00
layout: post
slug: bifurcating-clouds
title: Bifurcating Clouds
wordpress_id: 403
old_categories:
- Cloud Computing
tags:
- api
- cio
- cloud
- enterprise
- GoGrid
- infrastructure
- open
- saas
- scaling
- standards
- summary
- vmware
---

![Spectrum of Cloud Computing Providers](/assets/media/2009/08/premium-commodity-cloud-spectrum-300x57.png)
<cite>Spectrum of Cloud Computing Providers</cite>

There will soon be two major paths for cloud computing providers: commodity and premium.  If you read my series, [Cloud Futures](http://cloudscaling.com/blog/cloud-computing/cloud-futures-pt-4-the-culling), you'll know that I broke down cloud service providers into three major old_categories: [service clouds](http://cloudscaling.com/blog/cloud-computing/cloud-futures-pt-1-service-clouds), [consumer clouds](http://cloudscaling.com/blog/cloud-computing/cloud-futures-pt-2-commodity-clouds) (previously 'commodity')[1], and [focused clouds](http://cloudscaling.com/blog/cloud-computing/cloud-futures-pt-3-focused-clouds).  In retrospect I realize now that there are possibly four, not three major categories.  The missing category is premium enterprise clouds.  Previously I had lumped these under focused clouds, but I now realize that, in fact, there are likely to be so many of these that they deserve their own category.  I'll go even further and suggest that in terms of markets targeted, there will really only be two ends of a spectrum: enterprise and non-enterprise.

Most clouds will fit towards one of this spectrum or the other.  In essence, you're targeting small businesses (startups, SaaS providers, and SMBs) or you are targeting larger businesses (SME or Fortune 2000).  The former are extremely cost conscious while the latter may have a number of other equally important drivers, such as security (e.g. VPN access), high availability (HA), SLAs, application portability without modification[2] and similar.  Clearly large enterprises will consume services at both ends of the spectrum, but they will have many use cases (mostly 'production') that can only be serviced by a premium service running VMware's forthcoming [vCloud](http://cloudscaling.com/blog/technology/deep-dive-on-vmware-vcloud-by-orran-krieger) product.

This means we will have a large bifurcation in the cloud computing space with two very different kinds of solutions. Clouds will either target commodity customers or premium customers.  Very few clouds will actually fit in the middle of this spectrum initially, although I expect providers on both sides will grow towards the middle.  In quite a few cases (AT&T and Rackspace come to mind) cloud providers will build two offerings at both ends of the spectrum, but we haven't seen this quite yet.

**Premium vs. Commodity**

Ultimately, commodity clouds will be forced via pricing pressure to continue to drive down capital expenses and operating costs.  As we can already see in the public cloud space, providers have largely standardized on the Xen open source hypervisor.  This is the de facto standard because it is free.  In contrast, premium enterprise clouds will necessarily spend more on their infrastructure to provide advanced features like HA.  Their pricing will reflect this, but it also means they will use VMware's products and hence have unique opportunities for integrating with internal clouds at large enterprises (more on this below).

This table summarizes the differences.
<table bordercolor="#000000" style="background-color: #ffffff;" border="1" width="400" cellpadding="3" cellspacing="3" >
    <tbody >
        <tr >
            <td ></td>
            <td >**Commodity**</td>
            <td >**Premium**</td>
        </tr>
        <tr >
            <td >Focus</td>
            <td >Price</td>
            <td >Value</td>
        </tr>
        <tr >
            <td >Hypervisor</td>
            <td >Xen</td>
            <td >VMware ESX/vSphere</td>
        </tr>
        <tr >
            <td >Pricing</td>
            <td >$</td>
            <td >$$$$</td>
        </tr>
        <tr >
            <td >"Enterprise" Features</td>
            <td >No</td>
            <td >Yes; lots</td>
        </tr>
        <tr >
            <td >Your App Needs Changing?</td>
            <td >Yes</td>
            <td >No</td>
        </tr>
    </tbody>
</table>
**Enterprise Clouds Are Already Here**

[![Slide show of Terremark's Enterprise Cloud](/assets/media/2009/08/right-click-server-small.tiff)](http://www.flickr.com/photos/32650501@N08/sets/72157621835294123/)If you were paying close attention this year, you'll have noticed that both Savvis and Terremark are [working on](http://www.cloudave.com/link/savvis-aims-at-the-enterprise-cloud-market) or have [delivered](http://www.theenterprisecloud.com) enterprise cloud offerings.  There are many  more on the way.  These providers are delivering VMware-based platforms specifically for enterprise customers and pricing reflects that[3].  Terremark even labels itself 'The Enterprise Cloud'.  I had hoped to release a full review of Terremark, but due to time constraints haven't been able to complete it.  If you click on the screenshot to the right it will take you to a set of Flickr photos that are an extensive tour of the Terremark Enterprise Cloud product.

What's most interesting about this is that two major players have entered into this space **and** at the same time VMware's vCloud is unreleased.  Nor are there any other shrink-wrapped software packages for building a cloud based on VMware.

**VMware's Dominant Position for Building Internal Clouds**

But why VMware?  What's so important about it?  For those of you who may not be aware, VMware's enterprise-class hypervisor ([ESX](http://en.wikipedia.org/wiki/VMware_ESX_Server)) is the de facto standard inside the enterprise, in much the same way the Cisco routers & switches are a standard.  This means that as enterprises move towards building internal clouds (an [inevitability](http://cloudscaling.com/blog/cloud-computing/the-cloud-is-not-outsourcing)), they will be more likely to build clouds based on VMware's ESX, which they are already comfortable with.

A-ha! Surely there is a startup or major player who has already delivered a software offering that allows enterprises to build their own internal clouds?

**No.** There is no credible contender to VMware's crown.  Even though they did not see cloud computing coming, even though they are a large organization and slow to move, there is still not a single credible contender with a released product that manages the VMware ESX hypervisor and allows you to build a real self-service internal cloud.  Nada.  Zip.  Zilch.

There are some prospects like [Platform's ISF](http://www.platform.com/Products/platform-isf)[4] that could be contenders, but by the time they are released in the wild, VMware's vCloud will also be released.  The window of opportunity for making significant inroads into the enterprise is closing quickly[5].  Once VMware's vCloud is released, who will risk averse IT managers and CIOs in enterprises go to?  A new player or someone already trusted and embedded like VMware?  There is no doubt.  _They will largely select vCloud unless VMware fails to execute._

**Can VMware Fail to Execute?**
Is it possible for VMware to fail to execute in it's sweet spot?  It's area of expertise?  Yes.  Is it likely?  No.  If you look at the DNA of the business they already have the kinds of talent necessary for building a strong product in their [acquisition of Akimbi](http://searchservervirtualization.techtarget.com/news/article/0,289142,sid94_gci1228418,00.html), the folks upon whom the [VMware Lab Manager](http://www.vmware.com/products/labmanager/) product was built.  That team already knows how to build a self-service portal and a large scale VM deployment system including scheduler as these were integral for the lab manager product.

In other words, the writing is on the wall.

**The Power of Internal + External Clouds**
For many smaller business, moving everything to the cloud will always be a very compelling solution, but for the enterprise it will never be acceptable.  For various reasons (regulatory, political, legal, and others) enterprises must maintain a certain amount of infrastructure.  Also, I've heard fairly compelling arguments that large enterprises have sufficient scale to build and operate their own clouds at a cost advantage to external clouds.  Regardless, **some** capacity will reside outside of the firewall.

The usage of external clouds will largely be dictated by use case and in order for enterprises to derive maximum value from both internal and external clouds they will want a single internal portal that manages both.  They will want minimal friction for internal customers to be able to pick the best cloud for the job/cost.  It will also be important to allow some amount of portability (moving VMs and their workloads across the firewall).

While this doesn't require a VMware hypervisor on both sides of the firewall, it will be greatly facilitated if that is the case.  Tools written against the vCloud API will likely work with vCloud-based external clouds without modification.  There is simply far too much synergy possible once both internal and external clouds are based on the same cloud platform.

**Summary**
There will be two paths for clouds: premium & commodity.  Premium clouds will focus on the enterprise and delivering value they are concerned about.  Commodity clouds will largely be forced to compete on pricing and features irrelevant to the enterprise.  VMware's vCloud will be the dominant player behind the firewall because there is no credible contender.  The synergistic effects of internal & external clouds being based on the same vendor's software will provide powerful and compelling reasons for enterprises to adopt those external clouds.  Enterprises will use commodity clouds, but mostly for batch processing and non-production workloads that are pricing sensitive.  The bulk of enterprise cloud spending will be on vCloud-based public cloud providers.



* * *

[1] I realize, also in retrospect now, that I should have chosen a better name than 'commodity clouds'.  To avoid confusion in this article, I'm going to call them 'consumer' clouds.  Any suggestions?
[2] This is still pretty much impossible for Amazon to do for many architectures.  When you go to the Amazon or Google 'clouds' you're making a choice to port your application.  Some clouds, like GoGrid with their CloudCenters, do make it portability easier.
[3] I didn't get it nailed down for this article, but if memory serves Terremark's entry-point offering is about $2,150/month for 10 cores, 10GB RAM, 100GB storage divided up however you like across up to 10 servers.  You can add more of each incrementally and there are pricing discounts on volume.
[4] Platform has been delivering grid solutions, very similar to technology that powers today's clouds, for many years and has great DNA to build a compelling offering.
[5] Honestly, it's probably already a done deal.
