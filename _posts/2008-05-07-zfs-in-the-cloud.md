---
title: 'ZFS in the Cloud'
link: http://cloudscaling.com/blog/cloud-computing/zfs-in-the-cloud/
author: randybias
description: 
post_id: 2350
created: 2008/05/07 17:29:17
created_gmt: 2008/05/07 17:29:17
comment_status: open
post_name: zfs-in-the-cloud
status: publish
post_type: post
layout: post
---

# ZFS in the Cloud

I'm quite pleased to see that you can now get [OpenSolaris with Amazon's EC2](http://www.amazon.com/gp/browse.html?node=643950011). OpenSolaris on EC2 means that you can now run your storage and/or databases in the cloud on top of the [ZFS](http://en.wikipedia.org/wiki/ZFS) filesystem. Among the number of truly outstanding capabilities of ZFS are, snapshots, cloning, compression and soon [encryption](http://opensolaris.org/os/project/zfs-crypto/). A little known feature is the ability to send a ZFS filesystem as a data stream. More importantly, you can send 'incremental' data streams. **What does this mean?** First and foremost it means that replicating data inside the EC2 cloud just got a *lot* easier. It also means it is now feasible to have a replica of your data off-site at your office or another datacenter without paying exorbitant transfer prices. You'll pay once to take make a 'full' replica and then afterwards you can keep that replica up-to-date by sending 'incremental' snapshot streams on an hourly (or more frequent) basis. This will work quite well and be extremely cost-efficient even with a large dataset as long as you aren't changing large amounts of data over short periods of time. Given that a [Yottabyte](http://en.wikipedia.org/wiki/Yottabyte) of capacity [is on the horizon](http://www.computerworld.com/action/article.do?command=viewArticleBasic&taxonomyName=storage&articleId=9083198&taxonomyId=19&intsrc=kc_top), this is welcome news for effectively managing your data.