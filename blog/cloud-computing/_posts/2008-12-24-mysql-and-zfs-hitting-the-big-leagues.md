---
title: 'MySQL and ZFS Hitting the Big Leagues'
link: http://cloudscaling.com/blog/cloud-computing/mysql-and-zfs-hitting-the-big-leagues/
author: randybias
description: 
post_id: 2379
created: 2008/12/24 03:16:47
created_gmt: 2008/12/24 03:16:47
comment_status: open
post_name: mysql-and-zfs-hitting-the-big-leagues
status: publish
post_type: post
layout: post
category: cloud-computing
---

# MySQL and ZFS Hitting the Big Leagues

Another outstanding [writeup](http://blogs.smugmug.com/don/2008/12/23/great-things-afoot-in-the-mysql-community/) from Don MacAskill on MySQL performance improvements, including some notes on using the new [Sun Unified Storage Appliances](http://www.sun.com/storage/disk_systems/unified_storage/index.jsp) (aka 'Amber Road'). I'm glad Don is sharing his crib notes as I've been unable to work on my own tests of MySQL+ZFS due to time constraints. This is a no-brainer folks. ZFS support of solid-state-drives (SSDs) for read & write caches mean that we're going to see a massive revolution in the speed and quality of commodity open source-based storage systems. Already folks like Nexenta are building [software only appliances](http://www.nexenta.com/corp/index.php?option=com_content&task=blogsection&id=4&Itemid=128). And [OpenSolaris is available on EC2](http://www.sun.com/third-party/global/amazon/). ZFS + EC2's Elastic Block Storage (EBS) works like a charm. Consider this: you could run all of your crucial data (including databases) on ZFS in your datacenter and then do block level (delta's only) replication (a la NetApp's [SnapMirror](http://www.netapp.com/us/products/protection-software/snapmirror.html) feature) up to the cloud creating an instantly scalable and clean DR site in the sky. For free. There isn't another solution for this right now. NetApp is hardware constrained and there isn't a comparable software-only solution to ZFS in play right now. I've talked briefly about ZFS in the cloud, MySQL, and related [here](http://neotactics.com/blog/technology/massive-mysql-zfs-scale-up-capability/), [here](http://neotactics.com/blog/technology/zfs-to-go-gpl/), [here](http://neotactics.com/blog/technology/more-zfs-on-ec2/), [here](http://neotactics.com/blog/technology/zfs-in-the-cloud/), and [here](http://neotactics.com/blog/technology/storage-storage-storage).