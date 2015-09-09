---
title: 'Virtual, Cloud, Datacenters?'
link: http://cloudscaling.com/blog/cloud-computing/virtual-cloud-datacenters/
author: su
description: 
post_id: 2396
created: 2009/04/13 10:54:42
created_gmt: 2009/04/13 18:54:42
comment_status: open
post_name: virtual-cloud-datacenters
status: publish
post_type: post
layout: post
---

# Virtual, Cloud, Datacenters?

As a new market or technology emerges there is always a search for new, hopefully better, nomenclature to explain and differentiate.  Cloud computing infrastructure is as much a victim of this search as anyone else.  Some consider "cloud computing" to encompass infrastructure only.  Others use "Infrastructure-as-a-service" ([IaaS](http://en.wikipedia.org/wiki/IaaS)) or even "Hardware-as-a-Service" (HaaS) to define that part of [Cloud Computing](http://en.wikipedia.org/wiki/Cloud_computing) that is infrastructure-oriented.  Regardless, we're starting to see the various infrastructure providers provide some new and interesting terms that can be slightly confusing.  When you order on-demand infrastructure are you getting a "datacenter", "virtual datacenter", or "cloudcenter"?  It depends on who you talk to, but  it all sounds the same.  It is, isn't it? No it isn't.  There are important differences and I'll explain them and why it matters. **Defining Infrastructure Delivery Models** There are really three emerging infrastructure delivery models: datacenters, cloudcenters, and virtual datacenters.  Datacenters have been around forever, but cloudcenters and virtual datacenters are largely brand new options created by the convergence of computer virtualization, automation, and the on-demand business model.  These delivery models are not exclusive, but rather decreasing subsets of functionality that represent differing levels of virtualization and customer viewpoints.  For example, a datacenter can deliver cloudcenter and virtual datacenter services.  Cloudcenters can deliver virtual datacenters.  A virtual datacenter cannot ever provide traditional datacenter functionality however.  The following diagram shows the relationships: ![IaaS Models](http://neotactics.com/wp-content/uploads/2009/04/iaas-models-300x196.png) _Datacenters_ represent the most control, but largest expense.  Building and running your own datacenter or taking down co-location space from a datacenter provider and building out your own infrastructure on top of it is not only capital intensive, but requires a certain level of sunk cost in terms of operational expenses (OpEx) to be cost-effective.  This is my main test:  Do you already have the specialists (network, systems, storage, and facilities) employed? Do you need 1,000+ servers?  Then a traditional datacenter is probably right for you. _Cloudcenters_ represent the next step up, providing significant control, similar to datacenters, but provided in an on-demand delivery model where your only costs are monthly recurring fees.  Usually you have no need for many of the specialists you would normally need (e.g. network and storage).  Cloudcenters also provide many hybrid options where you can mix and match datacenter and virtual datacenter technologies. _Virtual datacenters_ represent the last model which represents fully virtualized datacenter resources delivered on-demand.  They are much like cloudcenters, but with much less control and options as the physical infrastructure is typically completely hidden.  The upside is that the level of complexity is significantly reduced. Digging into each of these in detail will really highlight the differences.  I'm will dive into each below, but first I need to talk about the great unmentioned scaling problem. Workloads. **Understanding Workloads** VMware's documentation is littered with references to understanding server workloads because it's such a critical issue for virtualization, yet it's barely mentioned in the blogosphere or twitterverse when talking about cloud computing.  Simply put, server workloads define how a computing or storage resource is used. _Some workloads can be virtualized and some cannot._ Determining whether a given workload can be virtualized or not is actually relatively trivial.  Your workload is the application or set of applications that you need to run on a single server.  If this workload can use the total resources of a single physical server then it should not be virtualized.  When the workload results in a fraction of resource usage then you should move that workload into a virtual environment.  You must measure workload by many factors including CPU, RAM, and disk. The most obvious example would be a large database.  Take any large database on a typical physical server today that has 8 cores, 32GB RAM, and a local RAID array.  If at peak usage that physical server is under heavy load you know that moving it to a virtual environment where it would have significantly less resources makes no sense. This shows how not all workloads should be virtualized as you would wind up starving your application of valuable resources. Now let's see why this matters for each of the infrastructure delivery models. **Traditional Datacenters** Everyone is familiar with traditional datacenters and I've covered the topic a bit in the past in terms of how they are [different from clouds](http://neotactics.com/blog/uncategorized/clouds-are-not-datacenters), what is delivered in a [typical datacenter](http://neotactics.com/blog/cloud-computing/defining-infrastructure-clouds), and more.  For the purpose of this discussion I'm lumping "hosting", "co-location", "internal datacenters", and all of the other DIY datacenter solutions into one.  I'm also asserting that they are part of IaaS even though not traditionally seen as an on-demand or cloud service.  I think it's important to consider traditional datacenters as part of the IaaS eco-system.  They are still an option and many of the typical 'hosting' providers essentially package up datacenter capabilities (storage, networking, power, and cooling) into something you can buy over the Internet using only a credit card.  Understanding this option is important to contrasting and comparing with cloudcenters and virtual datacenters. Whether you build out your own datacenter or rent co-location space from someone there is a tremendous amount of work that needs to be done unrelated to your core product delivery.  This includes everything from the mundane (labeling cables, racking/unracking servers, replacing hardware failures) to the more specialized (configuring Internet connectivity, VLAN topology, internal network routing, virtualization strategies, etc).  For most businesses this work is a complete sideline to core features.  Only the largest web application providers (Google, Microsoft, Amazon, etc.) or datacenter-focused businesses (e.g. hosting providers) can really afford the time and resources to spend building and managing their own datacenters. Datacenters are where the rubber meets the road in Internet and web application delivery.  They must be power-efficient, well maintained, and run professionally to be competitive.  A typical datacenter is built to provide a plethora of different services including physical servers, virtualization, storage, networking, sub-tenancy (aka co-location), server hosting, and more.  At the end of the day you can put anything in the datacenter that needs power and a network cable, regardless of what "it" actually is. This means datacenters are ideal for customers who have unique or complex workloads that require them to really own and customize their environments.  The sky is the limit in a traditional datacenter.  You just have to pay for that flexibility in terms of capital and operating expenses. **Cloudcenters**

## Comments

**[HighTechDad (Michael Sheehan)](#81 "2009-04-13 20:53:05"):** Liking "Virtual, Cloud, Datacenters" - Breaks down Cloud Infrastructure into 3 layers - http://tinyurl.com/c4jvv4

**[KVM Switch](#82 "2009-04-13 22:21:50"):** Clouds cannot be considered as Data Centers...

**[Randy Bias](#83 "2009-04-14 10:55:40"):** Hi, thanks for your comment. I'm not exactly sure of your point. If it's that clouds are not datacenters, then yes, I agree. As you'll see in the linked blog postings I've made that exact point myself.  
  
However, cloud computing is delivered from datacenters and is a subset of datacenter functionality. Also, when considering Infrastructure options the entire spectrum of possible options includes datacenters.  
  
Finally, many different hosting providers already provide on-demand provisioning and deployment of dedicated servers. In this case you are purchasing a pre-packaged on-demand server that includes power, cooling, and networking in the same manner that you purchase GoGrid or EC2 virtual servers. Some companies, like [NewServers](http://www.newservers.com/) are already delivering physical servers on-demand en masse.  
  
As I've sent before, despite the hype, virtualization != cloud computing. Virtualization is simply a multi-tenancy strategy.

**[Ray](#84 "2009-04-18 09:40:45"):** Great Vision Randy! To see the real world manifestation of it check out [www.informascale.com](http://www.informascale.com)  
  
Ray

**[randybias](#85 "2009-04-19 00:02:07"):** Ray,  
  
Great to see your work coming together. When can I play with the technology?  
  
Best,  
  
  
\--Randy

**[area bay hosting services web](#86 "2009-04-23 18:30:30"):** **area bay hosting services web...** After reading this post, I am not sure I understand what you are trying to relate. Please expand on your thoughts a little more. Thanks...

**[Saili Chui](#87 "2010-08-11 02:11:43"):** what is ur working

**[My Homepage](#2335 "2013-06-08 20:30:19"):** **... [Trackback]...** [...] Read More here: cloudscaling.com/blog/cloud-computing/virtual-cloud-datacenters/ [...]...

**[useful resource](#2555 "2013-07-16 07:10:06"):** **... [Trackback]...** [...] Read More Infos here: cloudscaling.com/blog/cloud-computing/virtual-cloud-datacenters/ [...]...

