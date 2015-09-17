---
title: 'Bifurcating Clouds'
link: http://cloudscaling.com/blog/cloud-computing/bifurcating-clouds/
author: Randy Bias
description: 
post_id: 403
created: 2009/08/06 08:30:19
created_gmt: 2009/08/06 15:30:19
comment_status: open
post_name: bifurcating-clouds
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Bifurcating Clouds

[caption id="attachment_470" align="alignright" width="300" caption="Spectrum of Cloud Computing Providers"]![Spectrum of Cloud Computing Providers]({{ site.url }}/assets/media/2009/08/premium-commodity-cloud-spectrum-300x57.png)[/caption] There will soon be two major paths for cloud computing providers: commodity and premium.  If you read my series, [Cloud Futures](http://cloudscaling.com/blog/cloud-computing/cloud-futures-pt-4-the-culling), you'll know that I broke down cloud service providers into three major categories: [service clouds](http://cloudscaling.com/blog/cloud-computing/cloud-futures-pt-1-service-clouds), [consumer clouds](http://cloudscaling.com/blog/cloud-computing/cloud-futures-pt-2-commodity-clouds) (previously 'commodity')[1], and [focused clouds](http://cloudscaling.com/blog/cloud-computing/cloud-futures-pt-3-focused-clouds). In retrospect I realize now that there are possibly four, not three major categories. The missing category is premium enterprise clouds. Previously I had lumped these under focused clouds, but I now realize that, in fact, there are likely to be so many of these that they deserve their own category. I'll go even further and suggest that in terms of markets targeted, there will really only be two ends of a spectrum: enterprise and non-enterprise. Most clouds will fit towards one of this spectrum or the other. In essence, you're targeting small businesses (startups, SaaS providers, and SMBs) or you are targeting larger businesses (SME or Fortune 2000). The former are extremely cost conscious while the latter may have a number of other equally important drivers, such as security (e.g. VPN access), high availability (HA), SLAs, application portability without modification[2] and similar. Clearly large enterprises will consume services at both ends of the spectrum, but they will have many use cases (mostly 'production') that can only be serviced by a premium service running VMware's forthcoming [vCloud](http://cloudscaling.com/blog/technology/deep-dive-on-vmware-vcloud-by-orran-krieger) product. This means we will have a large bifurcation in the cloud computing space with two very different kinds of solutions. Clouds will either target commodity customers or premium customers.  Very few clouds will actually fit in the middle of this spectrum initially, although I expect providers on both sides will grow towards the middle.  In quite a few cases (AT&T and Rackspace come to mind) cloud providers will build two offerings at both ends of the spectrum, but we haven't seen this quite yet. **Premium vs. Commodity** Ultimately, commodity clouds will be forced via pricing pressure to continue to drive down capital expenses and operating costs.  As we can already see in the public cloud space, providers have largely standardized on the Xen open source hypervisor.  This is the de facto standard because it is free.  In contrast, premium enterprise clouds will necessarily spend more on their infrastructure to provide advanced features like HA.  Their pricing will reflect this, but it also means they will use VMware's products and hence have unique opportunities for integrating with internal clouds at large enterprises (more on this below). This table summarizes the differences. 

**Commodity**
**Premium**

Focus
Price
Value

Hypervisor
Xen
VMware ESX/vSphere

Pricing
$
$$$$

"Enterprise" Features
No
Yes; lots

Your App Needs Changing?
Yes
No
**Enterprise Clouds Are Already Here** ![Slide show of Terremark's Enterprise Cloud]({{ site.url }}/assets/media/2009/08/right-click-server-small.tiff)If you were paying close attention this year, you'll have noticed that both Savvis and Terremark are [working on](http://www.cloudave.com/link/savvis-aims-at-the-enterprise-cloud-market) or have [delivered](http://www.theenterprisecloud.com) enterprise cloud offerings.  There are many  more on the way.  These providers are delivering VMware-based platforms specifically for enterprise customers and pricing reflects that[3].  Terremark even labels itself 'The Enterprise Cloud'.  I had hoped to release a full review of Terremark, but due to time constraints haven't been able to complete it.  If you click on the screenshot to the right it will take you to a set of Flickr photos that are an extensive tour of the Terremark Enterprise Cloud product. What's most interesting about this is that two major players have entered into this space **and** at the same time VMware's vCloud is unreleased.  Nor are there any other shrink-wrapped software packages for building a cloud based on VMware. **VMware's Dominant Position for Building Internal Clouds** But why VMware?  What's so important about it?  For those of you who may not be aware, VMware's enterprise-class hypervisor ([ESX](http://en.wikipedia.org/wiki/VMware_ESX_Server)) is the de facto standard inside the enterprise, in much the same way the Cisco routers & switches are a standard.  This means that as enterprises move towards building internal clouds (an [inevitability](http://cloudscaling.com/blog/cloud-computing/the-cloud-is-not-outsourcing)), they will be more likely to build clouds based on VMware's ESX, which they are already comfortable with. A-ha! Surely there is a startup or major player who has already delivered a software offering that allows enterprises to build their own internal clouds? **No.** There is no credible contender to VMware's crown.  Even though they did not see cloud computing coming, even though they are a large organization and slow to move, there is still not a single credible contender with a released product that manages the VMware ESX hypervisor and allows you to build a real self-service internal cloud.  Nada.  Zip.  Zilch. There are some prospects like [Platform's ISF](http://www.platform.com/Products/platform-isf)[4] that could be contenders, but by the time they are released in the wild, VMware's vCloud will also be released.  The window of opportunity for making significant inroads into the enterprise is closing quickly[5].  Once VMware's vCloud is released, who will risk averse IT managers and CIOs in enterprises go to?  A new player or someone already trusted and embedded like VMware?  There is no doubt.  _They will largely select vCloud unless VMware fails to execute._ **Can VMware Fail to Execute?** Is it possible for VMware to fail to execute in it's sweet spot?  It's area of expertise?  Yes.  Is it likely?  No.  If you look at the DNA of the business they already have the kinds of talent necessary for building a strong product in their [acquisition of Akimbi](http://searchservervirtualization.techtarget.com/news/article/0,289142,sid94_gci1228418,00.html), the folks upon whom the [VMware Lab Manager](http://www.vmware.com/products/labmanager/) product was built.  That team already knows how to build a self-service portal and a large scale VM deployment system including scheduler as these were integral for the lab manager product. In other words, the writing is on the wall. **The Power of Internal + External Clouds**

## Comments

**[Steve_Holcombe (Steve Holcombe)](#224 "2009-08-07 00:56:45"):** Reading Bifurcating Clouds RT [@randybias](http://twitter.com/randybias) http://tinyurl.com/mxg6yw

**[Ewan Leith](#228 "2009-08-14 07:52:54"):** I agree with most of what you're saying, but the split between Xen as Commodity or consumer, and VMware as Enterprise is something I can't agree with.  
  
Currently VMware is used on one of the largest commodity cloud providers, Rackspace Mosso, and that's unlikely to be unique amongst the providers.  
  
Also, you seem to have kind of drawn together Amazon EC2 and Xen as the standard "consumer" model, but while Amazon use Xen as their hypervisor, the rest of their infrastructure is pretty unique, mostly because it existed before anyone else really had a large scale public cloud computing environment.   
  
Most of the Xen based clouds out there don't need you app changing any more than they do to run under VMware - that is, not at all unless you want to implement some kind of cloud-bursting ability.

**[randybias](#229 "2009-08-14 12:03:03"):** Ewan,  
  
Thanks for your comment. I am glad you agree regarding the main thrust of the article. I would like to clarify a couple of things for you.  
  
First, the Rackspace Cloud Servers offering does not use VMware. They use Xen. I have very good relationships with that team so can say this with authority. Also, as far as I am aware this is fairly public knowledge. The reason that commodity clouds cannot use VMware currently is that the pricing model does not easily allow for it. I believe this is due to change soon.  
  
You might possibly be talking about VMware deployments at Rackspace's dedicated hosting business. Rackspace is one of the largest VMware customers and they have a great relationship with VMware, but none of the VMware technology is currently deployed in their cloud computing offerings.  
  
I couldn't agree more that Amazon has a unique infrastructure. In fact, I would consider them to be largely proprietary, which will be a fairly large impediment to their business moving forward. It will certainly cripple their efforts to entice the Enterprise for non-batch processing jobs (e.g. production web applications).  
  
To clarify, I'm not saying that Amazon EC2+Xen is the de facto consumer model. I'm saying that Xen is the de facto consumer model simply because it is free and hence allows commodity clouds to reduce their cost structure.  
  
As I mentioned in the footnotes, outside of Amazon, portability *is* much easier; however, it's still non-trivial for many applications. For example, the majority of public cloud providers are unable to create arbitrary network topologies. Some use cases, for example those trying to achieve PCI compliance, require using multiple networks with security devices in between. Others require load balancing capabilities, which are available on some clouds and not others. VMware-based clouds won't have any inherent advantage here, *except* that because they are targeted at the Enterprise they are *more* likely to work towards allowing easier portability.  
  
If you re-read that section of my post, I'm asserting that this isn't an inherent ability of Enterprise clouds, but a requirement of the Enterprises. And if you read my previous posting regarding Orran Krieger's vCloud presentation ([http://cloudscaling.com/blog/technology/deep-di...](http://cloudscaling.com/blog/technology/deep-dive-on-vmware-vcloud-by-orran-krieger) ; slide 57) you will notice that VMware is embedding OVF in their vCloud API, which means that they will be able to model more complex network architectures than possible in today's public cloud offerings. In other words, the Enterprise requirement combined with the VMware technology will likely lead to much greater/easier application portability.

**[Ewan Leith](#230 "2009-08-14 13:17:38"):** Regards Mosso/Rackspace Cloud and VMware, they've pretty publically stated that they switched to VMware in 2007:  
  
[http://searchservervirtualization.techtarget.co...](http://searchservervirtualization.techtarget.com/news/article/0%2C289142%2Csid94_gci1282889%2C00.html)  
  
Are you saying they've since switched from ESX to Xen, or that this was only part of the Mosso infrastructure?  
  
Either way, Mosso were a self-professed "cloud" company before Rackspace bought them, so whether it was one of their platform as a service offerings like the websites rather than infrastructure offerings i'd suggest it was still a low-end cloud using VMware.  
  
ESXi is as free as Xen, I think the major limitation is in the API's that VMware will let people use to manage it, rather than the price of the hypervisor itself.  
  
In the next 6 months to a year, I think KVM will also emerge as a significant low-end hypervisor, assuming Redhat can deliver on their cut-down KVM based hypervisor

**[randybias](#231 "2009-08-14 14:30:47"):** Ewan,  
  
The disconnect appears to be that you are referring to Mosso, which is the Cloud Sites offering. Cloud Sites (Mosso) is a PaaS, "load-your-code-and-go" offering. It never was an infrastructure cloud. The choice of hypervisor is irrelevant on such systems as the customer A) generally does not have login access to the servers in question (<http://www.rackspace.com/cloud/cloud_hosting_faq/>) and B) must conform to the architecture deployed.  
  
Regarding B this goes towards my point. You absolutely CANNOT get 100% application portability to a PaaS offering that constrains you to their architecture, be it the Mosso/Cloud Sites system or Google App Engine.  
  
I was referring to RackSpace Cloud's Cloud Servers offering, which is based on SliceHost ([www.slicehost.com](http://www.slicehost.com)). It is absolutely based on the Xen hypervisor. In fact, it's the Xen hypervisor running in paravirtualized mode, just like Amazon's EC2. This is why the offering is unable to currently provide Windows (<http://www.rackspace.com/cloud/cloud_hosting_products/servers/>). They must retool to support the Xen hardware virtualization mode.  
  
The major limitation of ESXi is not the APIs, but the licensing. The EULA says it may not be used for infrastructure cloud purposes. See section 9.1.b.ii, where it says you have a license granted to you ONLY for:  
  
"use the Software and each Licensed Additional Module solely for information processing and computing purposes, including the hosting of computer application-based services from a Virtual Machine and provisioning of such services via an internal or external network for third parties, provided such services do not allow the third parties to install, upload, or uninstall computer application(s) to and from the Virtual Machine(s)"  
  
As you can see, this would allow ESXi for Cloud Sites, but NOT for Cloud Servers. The EULA is here ([http://www.vmware.com/download/eula/esx_esxi_eu...](http://www.vmware.com/download/eula/esx_esxi_eula.html)).  
  
I believe the ESXi and ESX APIs are essentially the same, but I could be wrong.  
  
I agree that KVM will help commodity clouds. In particular, it will reduce some of the cost and pain associated with managing Xen, which can be difficult at times.  
  
  
Best,  
  
  
\--Randy

**[Ewan Leith](#1048 "2009-08-14 06:52:00"):** I agree with most of what you're saying, but the split between Xen as Commodity or consumer, and VMware as Enterprise is something I can't agree with. Currently VMware is used on one of the largest commodity cloud providers, Rackspace Mosso, and that's unlikely to be unique amongst the providers. Also, you seem to have kind of drawn together Amazon EC2 and Xen as the standard "consumer" model, but while Amazon use Xen as their hypervisor, the rest of their infrastructure is pretty unique, mostly because it existed before anyone else really had a large scale public cloud computing environment. Most of the Xen based clouds out there don't need you app changing any more than they do to run under VMware - that is, not at all unless you want to implement some kind of cloud-bursting ability.

**[randybias](#1049 "2009-08-14 11:03:00"):** Ewan, Thanks for your comment. I am glad you agree regarding the main thrust of the article. I would like to clarify a couple of things for you. First, the Rackspace Cloud Servers offering does not use VMware. They use Xen. I have very good relationships with that team so can say this with authority. Also, as far as I am aware this is fairly public knowledge. The reason that commodity clouds cannot use VMware currently is that the pricing model does not easily allow for it. I believe this is due to change soon. You might possibly be talking about VMware deployments at Rackspace's dedicated hosting business. Rackspace is one of the largest VMware customers and they have a great relationship with VMware, but none of the VMware technology is currently deployed in their cloud computing offerings. I couldn't agree more that Amazon has a unique infrastructure. In fact, I would consider them to be largely proprietary, which will be a fairly large impediment to their business moving forward. It will certainly cripple their efforts to entice the Enterprise for non-batch processing jobs (e.g. production web applications). To clarify, I'm not saying that Amazon EC2+Xen is the de facto consumer model. I'm saying that Xen is the de facto consumer model simply because it is free and hence allows commodity clouds to reduce their cost structure. As I mentioned in the footnotes, outside of Amazon, portability *is* much easier; however, it's still non-trivial for many applications. For example, the majority of public cloud providers are unable to create arbitrary network topologies. Some use cases, for example those trying to achieve PCI compliance, require using multiple networks with security devices in between. Others require load balancing capabilities, which are available on some clouds and not others. VMware-based clouds won't have any inherent advantage here, *except* that because they are targeted at the Enterprise they are *more* likely to work towards allowing easier portability. If you re-read that section of my post, I'm asserting that this isn't an inherent ability of Enterprise clouds, but a requirement of the Enterprises. And if you read my previous posting regarding Orran Krieger's vCloud presentation (http://cloudscaling.com/blog/technology/deep-dive-on-vmware-vcloud-by-orran-krieger ; slide 57) you will notice that VMware is embedding OVF in their vCloud API, which means that they will be able to model more complex network architectures than possible in today's public cloud offerings. In other words, the Enterprise requirement combined with the VMware technology will likely lead to much greater/easier application portability.

**[Ewan Leith](#1050 "2009-08-14 12:17:00"):** Regards Mosso/Rackspace Cloud and VMware, they've pretty publically stated that they switched to VMware in 2007: http://searchservervirtualization.techtarget.com/news/article/0,289142,sid94_gci1282889,00.html Are you saying they've since switched from ESX to Xen, or that this was only part of the Mosso infrastructure? Either way, Mosso were a self-professed "cloud" company before Rackspace bought them, so whether it was one of their platform as a service offerings like the websites rather than infrastructure offerings i'd suggest it was still a low-end cloud using VMware. ESXi is as free as Xen, I think the major limitation is in the API's that VMware will let people use to manage it, rather than the price of the hypervisor itself. In the next 6 months to a year, I think KVM will also emerge as a significant low-end hypervisor, assuming Redhat can deliver on their cut-down KVM based hypervisor

**[randybias](#1052 "2009-08-14 13:30:00"):** Ewan, The disconnect appears to be that you are referring to Mosso, which is the Cloud Sites offering. Cloud Sites (Mosso) is a PaaS, "load-your-code-and-go" offering. It never was an infrastructure cloud. The choice of hypervisor is irrelevant on such systems as the customer A) generally does not have login access to the servers in question (http://www.rackspacecloud.com/cloud_hosting_products/sites/faq) and B) must conform to the architecture deployed. Regarding B this goes towards my point. You absolutely CANNOT get 100% application portability to a PaaS offering that constrains you to their architecture, be it the Mosso/Cloud Sites system or Google App Engine. I was referring to RackSpace Cloud's Cloud Servers offering, which is based on SliceHost (www.slicehost.com). It is absolutely based on the Xen hypervisor. In fact, it's the Xen hypervisor running in paravirtualized mode, just like Amazon's EC2. This is why the offering is unable to currently provide Windows (http://www.rackspacecloud.com/cloud_hosting_products/servers/specifications). They must retool to support the Xen hardware virtualization mode. The major limitation of ESXi is not the APIs, but the licensing. The EULA says it may not be used for infrastructure cloud purposes. See section 9.1.b.ii, where it says you have a license granted to you ONLY for: "use the Software and each Licensed Additional Module solely for information processing and computing purposes, including the hosting of computer application-based services from a Virtual Machine and provisioning of such services via an internal or external network for third parties, provided such services do not allow the third parties to install, upload, or uninstall computer application(s) to and from the Virtual Machine(s)" As you can see, this would allow ESXi for Cloud Sites, but NOT for Cloud Servers. The EULA is here (http://www.vmware.com/download/eula/esx_esxi_eula.html). I believe the ESXi and ESX APIs are essentially the same, but I could be wrong. I agree that KVM will help commodity clouds. In particular, it will reduce some of the cost and pain associated with managing Xen, which can be difficult at times. Best, \--Randy

