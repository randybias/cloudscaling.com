---
author: Randy Bias
comments: true
date: 2008-04-28 11:05:11+00:00
layout: post
slug: storage-storage-storage
title: Storage, Storage, Storage
wordpress_id: 2348
old_categories:
- Technology
tags:
- Storage
---

Storage requirements are exploding causing more and more small and medium businesses to employ creative solutions to stem the tide.  In December, Hu Yoshida, CTO of Hitachi Data Systems (HDS), posted a [blog entry](http://blogs.hds.com/hu/2007/12/the_changing_enterprise_data_profile-_idc.html) about projected enterprise data growth.  The entire posting is worth a read, but the included chart really paints the picture well:

![](http://farm3.static.flickr.com/2230/2093807115_1deacbc95e.jpg)

Experience with our clients bears this out and we think most organizations are 'feeling the pinch'.  Perhaps most interesting about this trend is that, as Hu points out in the article, data falls into different kinds of buckets.  He chooses to talk about structured vs. unstructured data, but there are other ways to slice this pie.

**Case In Point**
For example, we find that most clients are struggling with price/performance issues for large pieces of data.  To take an extreme case, a friend of ours at [LucasFilm](http://www.lucasfilm.com/) is currently struggling with increasing the cost-effectiveness of their storage solutions.

LucasFilm has three types of storage solution:



  * Tier-1, high speed, low capacity disk storage


  * Tier-2, average speed, high capacity disk storage


  * Tier-3, slow speed, medium capacity long term tape storage (AKA 'archives')
New Solutions**
Fortunately, there is a very compelling new solution to this problem.  Sun's [ZFS](http://en.wikipedia.org/wiki/ZFS) is now available and production worthy.  ZFS is a revolutionary new open source filesystem that provides all of the capabilities of a [NetApp](http://www.netapp.com/us/) storage appliance, in terms of redundancy, ease of use, and capabilities (e.g. NFS, iSCSI, Windows File Sharing).  It requires [Solaris](http://www.sun.com/software/solaris/get.jsp), [OpenSolaris](http://www.opensolaris.org), [NexentaOS](http://www.nexenta.org), or [FreeBSD](http://www.freebsd.org) to run, but will work on most modern hardware.

ZFS provides a cost-effective option for tier-2 (and some tier-1) storage solutions.  No special hardware or RAID controllers are necessary.  It is designed to work on both inexpensive commodity and enterprise class hardware.

Using ZFS you can now build high-capacity, redundant storage systems for as little as $.25-.50/GB, which is pretty close to street price for the drives themselves.  Alternatively, you can build tier-1 high-performance redundant storage systems, roughly equivalent in quality to enterprise solutions, for as low as $2/GB, which is practically unheard of.

For example, recently we priced a StoreVault S550 (NetApp's SMB targeted appliances) vs. a 'roll your own' ZFS appliance using NexentaStor (see below).  Total cost for a 10TB solution was $23K vs. $6K for a NexentaStor-based ZFS appliance.  List price for a 1TB 7200 RPM SATA drive for StoreVault?  $1500.  List price for buying your own 1TB SATA drive?  [Less than $200](http://www.google.com/products?q=1TB+SATA+7200+-500GB+-750GB+-%22500+GB%22+-%22500+GIGABYTE%22&btnG=Search+Products&show=dd&scoring=p).

**When 'New' Works**
Some might consider ZFS too 'new' to put in production; however, we have been running it successfully in production for over a year and are very happy with it.  It's reduced our storage and storage management costs dramatically and allowed a small consulting business to have enterprise class storage without enterprise class prices.

Still, if you need more or desire enterprise support, you can get it.  We recommend one of the following two options:



  * Solaris + Sun support


  * NexentaStor from Nexenta


Right now we prefer Nexenta as they are 100% focused on delivering a ZFS-based storage solution.  They provide a commercial solution and enterprise support using a specialized NexentaOS-based storage distribution called **[NexentaStor](http://www.nexenta.com/store)**.

**NexentaStor**
NexentaStor turns commodity hardware into a sophisticated storage appliance, like NetApp, but at a quarter the cost.  Best of all, the NexentaStor solution is based on NexentaOS, itself a re-packaging of OpenSolaris using Debian (Linux) userland and utilities.  This means network-based upgrades, easier management, and a very small distribution.

Some items in the pipeline from Nexenta that are very exciting include compact-flash based versions of NexentaStor.  With judicious selection of your hardware you can reduce most, if not all points of failure in your storage systems, dramatically increasing MTBF (mean time between failures) and putting your 'commodity' hardware into the same class as similar enterprise solutions such as EMC or NetApp.

**Conclusion**
Whichever way you go, ZFS is a rock-solid production capable filesystem with a compelling value proposition.  We especially like it's use as a tier-2 storage solution.

I'll follow up shortly and talk about some specific exciting use cases for ZFS, including it's capabilities for compression at the filesystem level and it's use as a backing store for virtual machines.


Disclaimer:  neoTactics is a Nexenta certified partner and a proud member of the [Sun Startup Essentials](http://www.sun.com/emrkt/startupessentials/index.jsp) program.
