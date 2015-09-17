---
title: 'Open Cloud System. Version 2.'
link: http://cloudscaling.com/blog/cloud-computing/open-cloud-system-version-2/
author: Randy Bias
description: 
post_id: 5270
created: 2012/10/15 08:00:01
created_gmt: 2012/10/15 15:00:01
comment_status: open
post_name: open-cloud-system-version-2
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Open Cloud System. Version 2.

In February, we announced Open Cloud System (OCS). That moment marked our transition to  a product company. Since then, a lot has happened. We have talked and engaged with a lot of customers, and they’ve told us in direct and unambiguous terms what they want from a cloud infrastructure system. That knowledge helped us forge a product roadmap that leads to today’s announcement of OCS version 2.0. The news release and our updated product section on the website tell the marketing story. What I want to do in this post is focus on what our customers have been telling us that set us on the road to build the new version. Across hundreds of conversations, the most-repeated wants and pain points we heard can be grouped into three buckets:

  * We want a private cloud like Amazon Web Services to run new, dynamic cloud apps (e.g. mobile, web, big data, and agile/devops )
  * That cloud infrastructure system has to be production-grade, not just a dev/test cloud.
  * We want to mix and match between private cloud and major public clouds (location should not matter).

That’s a tall order, but doable with the right mindset. So, we worked through much of last spring and summer writing code, selling software, deploying OCS and creating a product roadmap that would address these three areas. What we ended up with is OCS 2.0. Let’s take each of those three “must haves” in order.

**Elastic Clouds for Dynamic Apps **

****If you’re a regular reader of this blog, you know that we’ve been talking about elastic clouds (née “utility cloud”, “scale-out cloud”, “commodity cloud”, etc) and dynamic applications for six years. If you’re a new reader, the next three paragraphs are a distillation of many posts, presentations and articles.

Elastic clouds are optimized to support new, dynamic applications like mobile, web, big data, and software/platform-as-a-service. Basically, any app that takes advantage of API-driven, on-demand compute, storage and networking is an app that wants to run on an elastic cloud. The canonical examples of public elastic cloud providers are Amazon Web Services (AWS) and Google Compute Engine (GCE).

The dynamic apps running on elastic clouds share some common characteristics. They are self-managing and provision their own infrastructure resources via API calls. They are resilient to server/hardware failure and can move workloads to newly provisioned resources automatically. They manage their own data redundancy and replication.  And, they are designed to take advantage of on-demand scale-out capabilities in elastic clouds as user demand rises and falls.  Dynamic apps want responsive, inexpensive, performant, and secure elastic infrastructure.

Ideally, elastic clouds are open, but they’re always agile and deliver excellent economics when compared against complicated enterprise virtualization clouds. The canonical example of an enterprise virtualization cloud is one built with VMware’s vSphere.  Elastic clouds are NOT gold-plated infrastructure like the VMware’s of this world.  Quite the opposite, in fact.

Our customers have figured out that while it’s *possible* to run some dynamic cloud apps on those enterprise virtualization clouds, it’s a really dumb idea. You’re paying two, three or even seven times more than you need to. They can’t support aggressive scaling that many dynamic apps require. And, the architectural approach on which they’re built (specifically, managing failure through gold-plated proprietary hardware with massive redundancy) is a major source of conflict with dynamic apps that are built to manage themselves and handle hardware failure on their own. So, customers want an new cloud for their dynamic cloud apps, and they want a enterprise virtualization cloud to run their legacy apps. Two different clouds, two different sets of applications.

**Production-Grade**

Customers are also telling us that they don’t want an [OpenStack](http://openstack.org) private cloud toy. To be sure, they see great promise in OpenStack, and they want something they can evaluate and do dev/test on. But they have figured out that raw OpenStack and current OpenStack ‘products’ largely aren’t ready for prime time, production environments. So, when customers say “production-grade,” what do they mean? It’s a topic that deserves its own blog post (stay tuned), but here’s a condensed set of questions that must be answered:

  * Performance — Can the system guarantee quality of service, responsiveness, scalability, and economic performance?
  * Availability — Does the system offer redundancy, resiliency, fault isolation, graceful degradation, and scale-out engineering?
  * Security — Are best practices of default deny, least privilege, a minimal attack surface, and encryption/data privacy followed?
  * Maintainability  — Does the system provide a reliable upgrade path for new enhancements & system updates, transparency & measurability of performance, comprehensive lifecycle management, and predictable behavior?

A cloud system that can answer that list of questions stands in stark contrast to any commercially available OpenStack-powered cloud products prior to OCS 2.0. And that’s a problem for the enterprises and service providers who want to deploy OpenStack-based clouds in production. So, we set out to build OCS 2.0 to be the most production-ready cloud system built using OpenStack technology. It’s a journey, no doubt – and there are significant, new capabilities in the roadmap – but we’ve taken big steps in that direction. You can check out the details on the website and decide for yourself.

**Federation to Public Clouds**

Customers also want the freedom to marry their private cloud with public provider infrastructure to support a different application deployment options if needed. They want to...

  * build a dynamic app,
  * run it on their private elastic cloud,
  * run it on public clouds when they choose, and
  * know that it will deliver the same performance and experience wherever it runs.

A popular way to attempt this is to offer public cloud APIs and call your solution a so-called “hybrid cloud.” Unfortunately, that only solves the easy part of the problem. For dynamic apps to deliver similar performance between a public and private infrastructure, the private cloud must have *architectural and behavioral* fidelity with the public cloud in addition to API compatibility. Federation between public and private clouds requires both, and OCS 2.0 delivers it for both AWS and soon, GCE.

**Wrapping it All Up**

OCS 2.0 will cap off a big year for Cloudscaling. In 2012, we have completed our transition to a product company, shipped v1 of OCS to customers, and laid down a roadmap taking our customers to the product they *really* want. We’ve made useful contributions back to the OpenStack community that we helped launch two years ago. And, by year’s end, we will have opened source the OCS 2.0 core. If you’re in San Diego this week for the OpenStack Summit, we invite you to stop by our booth and see what we've been working on.

## Comments

**[Massimo Re Ferre' (VMware)](#3391 "2012-10-18 08:37:00"):** *********** The canonical example of an enterprise virtualization cloud is one built with VMware’s vSphere.  Elastic clouds are NOT gold-plated infrastructure like the VMware’s of this world.  Quite the opposite, in fact. Our customers have figured out that while it’s *possible* to run some dynamic cloud apps on those enterprise virtualization clouds, it’s a really dumb idea. You’re paying two, three or even seven times more than you need to. ********** Well I guess it depends how you implement it. if you implement it "right" it may even cost less than Amazon. Example: http://it20.info/2012/03/the-cost-of-doing-public-cloud-with-vmware/  Massimo.

**[randybias](#3392 "2012-10-18 09:15:00"):** I am not going to get into a long argument with you on this. It boils down to several key issues: 1) MOST VMware environments are built gold-plated; can you do otherwise? Sure, but people don't which is because ... 2) ... The ecosystem around VMW is all about gold-plating the software and hardware. This is not easily fixable given large vendors have business models used to specific kind of margins. Classical innovators dilemma disruption. 3) VMW is addicted to vSphere which has technical issues for building an elastic cloud. The entire set of existing best practice, tools, recent acquisitions and so on are all focused on better server consolidation and legacy apps. The impediments to build a true scale-out cloud on ESX are huge because VMW has no true conviction to make it possible. Thanks. \--Randy

**[Massimo Re Ferre' (VMware)](#3395 "2012-10-19 01:01:00"):** Randy, I agree with (almost) everything you said. But I think you missed my point (which by the way isn't so much to argue but to understand). The point I was trying to make is that... even though VMware "cloud" offerings are built gold-plated (the one I linked is built with tier 1 hardware, tier1 SAN storage etc) it comes out 30/40% cheaper than Amazon. Although an apple to apple comparison is difficult, other OpenStack based clouds comes out in a similar pricing ballpark (ie 30/40% cheaper than AWS).  Given I know the SP I linked is making money on that offering (ie it's not operating at a loss) I am wondering what these numbers mean. My guess is that Amazon is making more money (ie profits) than most think. It does also appear that OpenStack based clouds are EITHER making tons of profits too OR the saving in using free software and commodity hw (eg no SAN) is offset by the cost of setting it up.  I am sure you have a different opinion and I'd be interested in your perspective on how to read those numbers.

**[randybias](#3396 "2012-10-19 10:58:00"):** I'm with you Massimo. I don't know how to respond without more details though. As I said, a VMware cloud using enterprise technology can be built cheaper but usually isn't. When it is built cheaper, not only are gold-plated hardware skipped but often the same kind of tradeoffs that AWS makes are used. Examples might include: \- single PSU \- single ToR switch \- ephemeral vs persistent local VM storage \- non-HA VMs and no DRS \- .... And more There isn't enough information in your article to really assess this Italian cloud provider. I can tell you that in my experience if you follow all of the tricks AWS EC2 uses you could deploy a similar system at roughly 20-25% the cost of EC2. So a 75% margin. Now if your Italian provider claims all of the availability benefits of a typical enterprise style cloud, says they have redundancy everywhere, and simultaneously is 30% less than AWS then someone is telling tall tales. No way to know for certain without more data. Best, \--Randy

