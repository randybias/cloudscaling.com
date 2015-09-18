---
author: su
comments: true
date: 2009-04-13 18:54:42+00:00
layout: post
slug: virtual-cloud-datacenters
title: Virtual, Cloud, Datacenters?
wordpress_id: 2396
old_categories:
- Cloud Computing
- Technology
tags:
- GoGrid
- Networking
- Storage
- Systems
- Virtualization
---

As a new market or technology emerges there is always a search for new, hopefully better, nomenclature to explain and differentiate.  Cloud computing infrastructure is as much a victim of this search as anyone else.  Some consider "cloud computing" to encompass infrastructure only.  Others use "Infrastructure-as-a-service" ([IaaS](http://en.wikipedia.org/wiki/IaaS)) or even "Hardware-as-a-Service" (HaaS) to define that part of [Cloud Computing](http://en.wikipedia.org/wiki/Cloud_computing) that is infrastructure-oriented.  Regardless, we're starting to see the various infrastructure providers provide some new and interesting terms that can be slightly confusing.  When you order on-demand infrastructure are you getting a "datacenter", "virtual datacenter", or "cloudcenter"?  It depends on who you talk to, but  it all sounds the same.  It is, isn't it?

No it isn't.  There are important differences and I'll explain them and why it matters.

**Defining Infrastructure Delivery Models**
There are really three emerging infrastructure delivery models: datacenters, cloudcenters, and virtual datacenters.  Datacenters have been around forever, but cloudcenters and virtual datacenters are largely brand new options created by the convergence of computer virtualization, automation, and the on-demand business model.  These delivery models are not exclusive, but rather decreasing subsets of functionality that represent differing levels of virtualization and customer viewpoints.  For example, a datacenter can deliver cloudcenter and virtual datacenter services.  Cloudcenters can deliver virtual datacenters.  A virtual datacenter cannot ever provide traditional datacenter functionality however.  The following diagram shows the relationships:

![IaaS Models](http://neotactics.com/wp-content/uploads/2009/04/iaas-models-300x196.png)

_Datacenters_ represent the most control, but largest expense.  Building and running your own datacenter or taking down co-location space from a datacenter provider and building out your own infrastructure on top of it is not only capital intensive, but requires a certain level of sunk cost in terms of operational expenses (OpEx) to be cost-effective.  This is my main test:  Do you already have the specialists (network, systems, storage, and facilities) employed? Do you need 1,000+ servers?  Then a traditional datacenter is probably right for you.

_Cloudcenters_ represent the next step up, providing significant control, similar to datacenters, but provided in an on-demand delivery model where your only costs are monthly recurring fees.  Usually you have no need for many of the specialists you would normally need (e.g. network and storage).  Cloudcenters also provide many hybrid options where you can mix and match datacenter and virtual datacenter technologies.

_Virtual datacenters_ represent the last model which represents fully virtualized datacenter resources delivered on-demand.  They are much like cloudcenters, but with much less control and options as the physical infrastructure is typically completely hidden.  The upside is that the level of complexity is significantly reduced.

Digging into each of these in detail will really highlight the differences.  I'm will dive into each below, but first I need to talk about the great unmentioned scaling problem.

Workloads.

**Understanding Workloads**
VMware's documentation is littered with references to understanding server workloads because it's such a critical issue for virtualization, yet it's barely mentioned in the blogosphere or twitterverse when talking about cloud computing.  Simply put, server workloads define how a computing or storage resource is used.

_Some workloads can be virtualized and some cannot._

Determining whether a given workload can be virtualized or not is actually relatively trivial.  Your workload is the application or set of applications that you need to run on a single server.  If this workload can use the total resources of a single physical server then it should not be virtualized.  When the workload results in a fraction of resource usage then you should move that workload into a virtual environment.  You must measure workload by many factors including CPU, RAM, and disk.

The most obvious example would be a large database.  Take any large database on a typical physical server today that has 8 cores, 32GB RAM, and a local RAID array.  If at peak usage that physical server is under heavy load you know that moving it to a virtual environment where it would have significantly less resources makes no sense.

This shows how not all workloads should be virtualized as you would wind up starving your application of valuable resources.

Now let's see why this matters for each of the infrastructure delivery models.

**Traditional Datacenters**
Everyone is familiar with traditional datacenters and I've covered the topic a bit in the past in terms of how they are [different from clouds](http://neotactics.com/blog/uncategorized/clouds-are-not-datacenters), what is delivered in a [typical datacenter](http://neotactics.com/blog/cloud-computing/defining-infrastructure-clouds), and more.  For the purpose of this discussion I'm lumping "hosting", "co-location", "internal datacenters", and all of the other DIY datacenter solutions into one.  I'm also asserting that they are part of IaaS even though not traditionally seen as an on-demand or cloud service.  I think it's important to consider traditional datacenters as part of the IaaS eco-system.  They are still an option and many of the typical 'hosting' providers essentially package up datacenter capabilities (storage, networking, power, and cooling) into something you can buy over the Internet using only a credit card.  Understanding this option is important to contrasting and comparing with cloudcenters and virtual datacenters.

Whether you build out your own datacenter or rent co-location space from someone there is a tremendous amount of work that needs to be done unrelated to your core product delivery.  This includes everything from the mundane (labeling cables, racking/unracking servers, replacing hardware failures) to the more specialized (configuring Internet connectivity, VLAN topology, internal network routing, virtualization strategies, etc).  For most businesses this work is a complete sideline to core features.  Only the largest web application providers (Google, Microsoft, Amazon, etc.) or datacenter-focused businesses (e.g. hosting providers) can really afford the time and resources to spend building and managing their own datacenters.

Datacenters are where the rubber meets the road in Internet and web application delivery.  They must be power-efficient, well maintained, and run professionally to be competitive.  A typical datacenter is built to provide a plethora of different services including physical servers, virtualization, storage, networking, sub-tenancy (aka co-location), server hosting, and more.  At the end of the day you can put anything in the datacenter that needs power and a network cable, regardless of what "it" actually is.

This means datacenters are ideal for customers who have unique or complex workloads that require them to really own and customize their environments.  The sky is the limit in a traditional datacenter.  You just have to pay for that flexibility in terms of capital and operating expenses.

**Cloudcenters**
An emerging trend pioneered by [GoGrid](http://www.gogrid.com) and also pre-announced by [RackSpace Cloud](http://www.rackspace.com/solutions/cloud_hosting/index.php) is the "[cloudcenter](http://blog.gogrid.com/2009/01/14/building-a-house-in-the-cloud-cloudcenters-vs-infrastructure-web-services/)", a datacenter-in-the-sky.  Cloudcenters are an intermediate step between no virtualization and full virtualization.  They provide some of each, allowing maximum flexibility.  Like datacenters, cloudcenters will provide infrastructure services that encompass both the physical and the virtual.  A cloudcenter can allow you to run complex and mixed workloads.  Some cloudcenters even provide a co-location option for those who have very specific needs.

Unlike datacenters, cloudcenters typically deliver their services in an on-demand fashion allowing customers to avoid most capital expenses (CapEx).  There is also a direct impact to OpEx as well given that cloudcenters essentially package power, cooling, space, networking, and storage as services.  This obviates the need to hire the specialists to manage those parts of your infrastructure.

Recently, I wrote a [whitepaper](http://www.gogrid.com/cloud-hosting/scaling-with-cloud-computing.php) for GoGrid that talks about scalability issues with web applications that has a decided bias towards cloudcenters.  I invite you to read it as it highlights further how they are different from the other options.

**Virtual Datacenters**
The virtual datacenter was pioneered by [3tera](http://www.3tera.com), an early leader in providing software that created fully virtualized datacenter environments.  More recently, Sun Microsystems announced [foray](http://www.sun.com/solutions/cloudcomputing/index.jsp) into cloud computing uses the virtual datacenter model as well and is likely to further popularize the approach.  While fully virtualized datacenters provide much less control and can only support limited sets of workloads they are the easiest to approach and consume for those who want to minimize both CapEx and OpEx.

Typical virtual datacenters provide servers, storage, and possibly some network control, but because virtualization technology is used at all layers they are currently unable to handle heavier workloads.  It is likely that as virtualization matures and [Moore's Law](http://en.wikipedia.org/wiki/Moores_Law) continues they will become the de facto standard.  Unfortunately, one major issue is that virtualization still needs more and better ways to guarantee service-level-agreements (SLAs) for CPU, RAM, and disk in multi-tenant environments.  The technology is still far from where it needs to be, although some (e.g. [VMware](http://www.vmware.com)) clearly have some capability in this regard.

Virtual datacenters still require at least a server specialist, but are the final step before that next layer of Cloud Computing called "platforms" or "Platform-as-a-Service" where even servers are fully abstracted from the customer.

**Visualizing IaaS Options**

The following diagram visualizes how the three IaaS delivery models work within the famous Cloud Pyramid:

 


![revised-pyramid-iaas-detail1](http://neotactics.com/wp-content/uploads/2009/04/revised-pyramid-iaas-detail1.png)



**Summary**
So whether it's a traditional datacenter, a cloudcenter, or a virtual datacenter that serves your needs, the important thing (as in all of IT) is to use the right tool for the job.  Determine your workload requirements and find the right solution for your needs.  When in doubt, I recommend the cloudcenter as the best interim solution.  Admittedly I'm biased, but after spending a lot of time running my own startup before joining GoGrid and looking at these issues in detail I'm convinced that it is ill-advised to spend significant resources on 'horizontal scaling' of database workloads until absolutely necessary.  As always, YMMV.

Hope this helps when trying to understand your cloud computing infrastructure options.
