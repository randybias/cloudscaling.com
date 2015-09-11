---
title: 'The 6 Requirements of Enterprise-grade OpenStack, Part 2'
link: http://cloudscaling.com/blog/openstack/the-6-requirements-of-enterprise-grade-openstack-part-2/
author: randybias
description: 
post_id: 7385
created: 2014/05/01 09:10:38
created_gmt: 2014/05/01 16:10:38
comment_status: open
post_name: the-6-requirements-of-enterprise-grade-openstack-part-2
status: publish
post_type: post
layout: post
category: openstack
---

# The 6 Requirements of Enterprise-grade OpenStack, Part 2

In [part 1](/blog/openstack/the-6-requirements-of-enterprise-grade-openstack-part-1/) of this series earlier this week, I introduced The 6 Requirements of Enterprise-grade OpenStack.  Today, I'm going to dig into the next two major requirements: Open Architectures and Hybrid Cloud Interoperability.

Let's get started.

## Requirement #3 – Open Architectures & Reducing Vendor Lock-in

We already covered building a robust control plane and cloud management system. One of the attractions of OpenStack is removing vendor lock-in by moving to an open source platform. This is a key value proposition and deserves a complete dialog about what is realistic and what is not in an Enterprise-grade version of OpenStack.

### “No Vendor Lock-in” is Snake Oil Salesmanship

Are you being promised that OpenStack provides “no lock-in?” No vendor lock-in is a platonic ideal - something that can be imagined as a perfect form, but never achieved. Any system always has some form of lock-in. For example, many of you probably use RedHat Enterprise Linux (RHEL), a completely 100% open source Linux operating system, as your default Linux within your business. Yet, RHEL is a form of lock-in. RHEL is a specific version of Linux designed for a specific goal. You are locked into their particular reference architecture, packaging systems, installers/bootloaders, etc., even though it is open source.

In fact, with many customers I have seen less of a fear about lock-in and more of a concern about "more lock-in." For example, one customer, who will remain anonymous, was concerned about adopting our block storage component, even though it was 100% open source due to lock-in concerns. When probed, it became clear that what the customer wanted was to use their existing storage vendors (NetApp and Hitachi Data Systems) and did not want to have to train up their IT teams on a completely new storage offering. Here the lock-in concerns were predominantly about absorbing more lock-in rather than removing it entirely.

What is most important is assessing the risks your business can take. Moving to OpenStack, as with Linux before it, means that you are mitigating certain risks in terms of training your IT teams on the new stack and hedging your bets by being able to get multiple vendors in-house to support your open source software.

In other words, OpenStack can certainly reduce lock-in, but it won’t remove it. So, demand an _open architecture_, but expect an enterprise product.

### Lock-in Happens, Particularly with Enterprise Products

I wish it didn’t, but lock-in does happen, as you can see from above. That means that rather than planning for no lock-in, start planning for what lock-in you are comfortable with. An Enterprise-grade version of OpenStack will provide a variety of options via an open architecture so you can hedge your bets. However, a true cloud operating system and enterprise product cannot ever provide an infinite variety of options. Why not? Because then the support model is not sustainable and that vendor goes out of business.  Not even the largest vendors can provide all options to all people.

If you want to build your own customized cloud operating system[1] built around OpenStack, go ahead, but that isn’t a product. That’s a customized professional services path.  Like those who rolled their own Linux distributions for a while, it leads to a path of chaos and kingdom-building that is bad for your business. Doing it yourself is also resource intensive. You’ll need 20-30 Python developers with a deep knowledge of infrastructure (compute, storage, and network) who can hack full time on your bastardized version of OpenStack.  A team that looks something like this:

![Cloud OS Development Team Requirements](http://www.cloudscaling.com/wp-content/uploads/2014/04/6-Requirements-for-Enterprise-grade-OpenStack-Supporting-Material.009.jpg)

So, ultimately, you’re going to have to pick a vendor to bet on if you want enterprise-grade OpenStack-powered cloud solutions.

## Requirement #4 – Hybrid Cloud Interoperability

Hybrid is the new cloud. Most customers we talk to acknowledge the reality of needing to provide their developers with the best tool for the job. Needs vary, requirements vary, concerns vary, compliance varies. Every enterprise is a bit unique. Some need to start on public cloud, but then move to private cloud over time. Some need to start on private, but slowly adopt public. Some start on both simultaneously.  RightScale's recent State of the Cloud 2014 report has some great survey data backing this up:

![RightScale-State-of-the-Cloud-2014-hybrid-cloud-strategy](http://www.cloudscaling.com/wp-content/uploads/2014/04/RightScale-State-of-the-Cloud-2014-hybrid-cloud-strategy.jpg)

Let’s talk about why your enterprise-grade OpenStack-powered cloud operating system vendor had better have a **great** hybrid cloud story.

### A Hybrid-first Cloud Strategy

Every enterprise needs a hybrid-first cloud strategy. Meaning, hybrid cloud should be your first and primary requirement. Then, plan around hybrid with a single unified governance model that delivers the best of both world’s for your constituencies. Finally, plan on a process where you will triage your apps/needs and determine which cloud is right for the job.  The following diagram highlights this process, but your mileage may vary as criteria are different from business to business:

![Triaging and Mapping Apps to the Right Cloud](http://www.cloudscaling.com/wp-content/uploads/2014/04/6-Requirements-for-Enterprise-grade-OpenStack-Supporting-Material.010.jpg)

### Understanding Cloud Interoperability & It’s Role In Hybrid Cloud

I have been through quite a number of interoperability efforts, the most painful of which was IPSEC for VPNs. Interoperability between vendors is not free, usually takes a fairly serious effort, and ultimately is worth the pain. Unfortunately, interoperability is deeply misunderstood, particularly as it applies to public/private/hybrid cloud.

The challenge in hybrid cloud is about addressing the issues of application portability. If you want a combination of public and private clouds (hybrid) where an application can be deployed on either cloud, moved between the clouds, or [cloudbursted](http://searchcloudcomputing.techtarget.com/definition/cloud-bursting) from one cloud to another, then application portability is required. When you pick up and move an app and it’s cloud native automation framework[2] from one cloud to another, a number of key things need to remain the same:

  * Performance must be at relative parity
  * Underlying network, storage, and compute architectures must be the same or similar
  * Your automation framework must support API compatibility with both clouds
  * The TCO of running the app must be within ½-2x of each other
  * There must be behavioral compatibility, meaning non-API “features” are matched
  * You must support API compatibility with the relevant public clouds

Here is a slide I used in a recent webinar to help explain these requirements.