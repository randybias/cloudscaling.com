---
title: "You Can't Collapse Tiered Storage in Private Clouds Built on OpenStack: Whitepaper"
link: http://cloudscaling.com/blog/company/you-cant-collapse-tiered-storage-in-private-clouds-built-on-openstack-whitepaper/
author: randybias
description: 
post_id: 6743
created: 2013/09/10 12:10:00
created_gmt: 2013/09/10 19:10:00
comment_status: open
post_name: you-cant-collapse-tiered-storage-in-private-clouds-built-on-openstack-whitepaper
status: publish
post_type: post
layout: post
category: company
---

# You Can't Collapse Tiered Storage in Private Clouds Built on OpenStack: Whitepaper

Fantastical thinking by private cloud builders has led to a deep misunderstanding of cloud storage technologies. If you are building a private cloud, you MUST understand the realities of cloud storage and not just think in terms of buying a single simple solution to what is ultimately a very complex problem.

  
![](https://lh3.googleusercontent.com/0ZIf7DeOnR7GRp_cvGp3B2eXMd2fSjffGLBwmBuDAI_Ht6ADQb0ikFoPibvFoGiu_paV7BeWQdLfnn8dltE4pBfwLHQFXn2UyqB88eVOFKDQVIUmonTEjEE)

[I've written a detailed whitepaper called “Converged Storage, Wishful Thinking and Reality”](/assets/pdf/cloudscaling_whitepaper_converged_storage.pdf), which you can download from our resources page that explains:

  * Cloud storage marketing is selling pipe dreams

  * Distributed storage technologies will not solve the cloud storage problem

  * Tiered storage is here to stay due to economic and technical realities

  * You can’t ignore small failure domains, which are a key cloud principal

  * Use the right storage system to solve the right storage problem

This is a must read if you are evaluating storage options, distributed storage technology like Ceph, Gluster, or Sheepdog, traditional storage systems like EMC, NetApp, or ZFS, and will help you in your quest to build the best private cloud out there.

// [DOWNLOAD THE WHITEPAPER: [Converged Storage, Wishful Thinking and Reality](/assets/pdf/cloudscaling_whitepaper_converged_storage.pdf)](/assets/pdf/cloudscaling_whitepaper_converged_storage.pdf) //

## Comments

**[jiangangduan](#3939 "2013-09-11 01:01:00"):** randy, nice post.one more question: in your three tier theory, it seems you only use cost and performance as the indicator. do you consider any other factor, e.g. managibility or other advanced function. i think that may be more important .

**[randybias](#3940 "2013-09-11 04:32:00"):** Sure I think there are other factors and I do highlight them, such as latency Manageability is interesting but isn't that a key requirement that is equal for all tiers? I don't recall manageability being substantially different between tiers. Perhaps you have some other suggestions?

**[jiangangduan](#3941 "2013-09-12 11:23:00"):** i am just curious when people want to pay different price for those three tiers. do they only pay for the performance or there are other factors which are more important? e.g. better management functions. i don,t have ideas and want to understand your thoughts here. thanks.

**[Man Of Few Words](#3942 "2013-09-12 12:14:00"):** 1) Availability (RAID level, local replication, clustering) 2) DR (remote replication, stretch clusters) 3) Backup (snaps, clones, remote replication) 4) Reporting and chargeback 5) Different storage connects (FC, iSCSI, NAS, IB)

