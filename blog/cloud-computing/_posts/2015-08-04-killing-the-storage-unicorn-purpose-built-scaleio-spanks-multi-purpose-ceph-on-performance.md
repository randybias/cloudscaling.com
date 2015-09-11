---
title: 'Killing the Storage Unicorn: Purpose-Built ScaleIO Spanks Multi-Purpose Ceph on Performance'
link: http://cloudscaling.com/blog/cloud-computing/killing-the-storage-unicorn-purpose-built-scaleio-spanks-multi-purpose-ceph-on-performance/
author: randybias
description: 
post_id: 7796
created: 2015/08/04 08:30:51
created_gmt: 2015/08/04 15:30:51
comment_status: open
post_name: killing-the-storage-unicorn-purpose-built-scaleio-spanks-multi-purpose-ceph-on-performance
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Killing the Storage Unicorn: Purpose-Built ScaleIO Spanks Multi-Purpose Ceph on Performance

Collectively it’s clear that we’ve all had it with the cost of storage, particularly the cost to maintain and operate storage systems.  The problem is that data requirements, both in terms of capacity and IOPS are exploding and growing exponentially, while the cost of storage operations and management is growing proportionally to those data needs.  Historically the biggest culprit is “storage sprawl” where we have pairs of arrays throughout the datacenter, each of which has to be managed individually.  Silo after silo, requiring specialized training, its own HA and resiliency, monitoring, and so on.  It’s for this reason that many turned to so-called “unified storage.”  This, unfortunately, is a terrible idea for larger deployments and those running production systems.

Let me explain.

## The Storage Unicorn & a Rational Solution

We all want what we can’t have: a single globally distributed, unified storage system, that is infinitely scalable, easy to manage, replicated between datacenters and serves block devices, file systems, and object, all without hiccups.  Bonus points if you throw in tape as well!  This is the Storage Unicorn.  No such beast exists and never will.  Even before the EMC acquisition of Cloudscaling I was talking about these issues in my white paper: [The Case for Tiered Storage in Private Clouds](/assets/pdf/cloudscaling_whitepaper_tiered_storage_private_clouds.pdf).

The nut of that white paper is that tier-1, mission critical storage, is optimized for IOPS, while tier-3 is optimized for long term durability.  Think of flash vs. tape.  These are not the same technologies nor can they serve the same purpose or use cases.

A multi-purpose tool is great in a pinch, but if you need to do real work, you need a purpose-built tool:

![Ceph testing-13-RLB-edits.002]({{ site.url }}/assets/media/2015/08/Ceph-testing-13-RLB-edits.002.jpg)

The issue remains though; how do we reduce storage management costs and manage the scaling of storage in a rational manner?  There is no doubt, for example, that the multi-purpose tool is lower overhead.  It’s simply less things to manage. That is a pro and a con.

The challenge then is to walk away from the Unicorn.  You can’t have a single storage system to solve all of your woes.  However, you probably don’t have to live with tens or hundreds of storage systems either.

Dialing down your storage needs to a small handful of silos would probably have a dramatic effect on operational costs!  What if you only had something like this in each datacenter:

  * Scalable distributed block storage
  * Scalable distributed object storage
  * Scalable distributed file system storage
  * Scalable control plane that manages all of the above

There isn’t any significant advantage in driving these four systems down to one.  The real optimization is from tens or hundreds of managed systems to a handful.  Everything else is unnecessary optimization at best or mental masturbation at worst.  Perhaps most egregiously, any gut check tells us that while 100 -> 4 managed systems is likely a 10x change in cost of management, 4 -> 1 is probably a small fraction of savings by comparison. [1]

## Multi-Purpose Tool Example: Taking A Look at Ceph’s Underlying Architecture

The fundamental problem with any multi-purpose tool is that it makes compromises in each “purpose” it serves.  Multi-purpose tools do this because two tools frequently are designed for different purposes.  If you want your screwdriver to also be a hammer, you have to make some kind of tradeoff.  Ceph’s tradeoff, as a multi-purpose tool, is the use of a single “object storage” layer.  You have a block interface (RBD), an object interface (RADOSGW), and a filesystem interface (CephFS), all of which talk to an underlying object storage system (RADOS).  Here is the Ceph architecture from their documentation:

![](http://ceph.com/docs/dumpling/_images/stack.png)

Glossed over is that RADOS itself is reliant on an underlying filesystem to store its objects.  So the diagram should actually look like this:

![Ceph testing-13-RLB-edits.003]({{ site.url }}/assets/media/2015/08/Ceph-testing-13-RLB-edits.003.jpg)

So in a given data path, for example a block written to disk, there is a high level of overhead:

![Ceph testing-13-RLB-edits.005]({{ site.url }}/assets/media/2015/08/Ceph-testing-13-RLB-edits.005.jpg)

In contrast, a purpose-built block storage system that does not compromise and is focused solely on block storage, like EMC ScaleIO, can be significantly more efficient:

![Ceph testing-13-RLB-edits.006]({{ site.url }}/assets/media/2015/08/Ceph-testing-13-RLB-edits.006.jpg)

This allows skipping two steps, but perhaps more importantly, it avoids complications and additional layers of indirection/abstraction as there is a 1:1 mapping of the ScaleIO client’s block and the block(s) on disk in the ScaleIO cluster.

By comparison, multi-purpose systems need to have a single unified way of laying out storage data, which can add significant overhead.  Ceph, for example, takes any of its “client data formats” (object, file, block), slices them up into “stripes”, and distributes those stripes across many “objects”, each of which is distributed within replicated sets, which are ultimately stored on a Linux filesystem in the Ceph cluster.  Here’s the diagram from the [Ceph documentation describing this](http://ceph.com/docs/master/architecture/#data-striping):

![](http://ceph.com/docs/master/_images/ditaa-92220e0223f86eb33cfcaed4241c6680226c5ce2.png)

This is a great architecture if you are going to normalize multiple protocols, but it’s a terrible architecture if you are designing for high performance block storage only.

## Show Me the Money!

We recently put our performance engineering team to the task of comparing performance between Ceph and ScaleIO.  Benchmarks are always difficult.  A lot depends on context, configuration, etc.  We put our best performance engineers on the job though, just so we could see if our belief that a purpose-built block storage system was better than a multi-purpose Swiss army knife.

  * _Goal_: evaluate block performance between Ceph and ScaleIO as fairly as possible
  * _Assumptions_: same hardware (servers, drives, network, etc.) and same logical configuration (as best as possible)
  * _Test cases_: “SSD only”, “SSD+HDD”, and “hybrid mode” with SSD as cache for HDD
  * _Workload_: 70% reads / 30% writes with 8KB blocks