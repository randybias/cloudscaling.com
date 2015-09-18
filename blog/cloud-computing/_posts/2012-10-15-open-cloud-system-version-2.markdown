---
author: Randy Bias
comments: true
date: 2012-10-15 15:00:01+00:00
layout: post
slug: open-cloud-system-version-2
title: Open Cloud System. Version 2.
wordpress_id: 5270
old_categories:
- Cloud Computing
---

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
