---
title: 'The Case for Tiered Storage in Private Clouds'
link: http://cloudscaling.com/blog/uncategorized/the-case-for-tiered-storage-in-private-clouds/
author: randybias
description: 
post_id: 7217
created: 2014/02/23 09:09:22
created_gmt: 2014/02/23 17:09:22
comment_status: open
post_name: the-case-for-tiered-storage-in-private-clouds
status: publish
post_type: post
layout: post
---

# The Case for Tiered Storage in Private Clouds

Fall of last year I wrote a controversial whitepaper detailing my concerns about how distributed storage was being marketed.  The blog introduction and the whitepaper were both entitled [Converged Storage, Wishful Thinking, and Reality.](http://www.cloudscaling.com/blog/company/you-cant-collapse-tiered-storage-in-private-clouds-built-on-openstack-whitepaper/)  There was a certain amount of expected blowback from folks at [RedHat](http://www.gluster.org/2013/09/san-stalwarts-and-wistful-thinking/) and [Ceph](http://ceph.com/openstack/distributed-storage-and-thinking-inside-the-box/) as well as more thoughtful replies from [Dreamhost](http://www.dreamhost.com/dreamscape/2013/09/12/cloud-storage-architectures/) and [Solidfire](http://solidfire.com/blog/distributed-storage-picking-the-right-tool-for-the-job/).  Some of the feedback was pure screed, some was worthy of considered thought, and much of it missed the mark.  I realized however that it was *my* failure to communicate clearly that caused a considerable amount of the feedback to be erroneous.

So I wrote an update to that whitepaper that I think helps clarify my thinking in this area.  Fortuitously, the recent Google outage really helps to emphasize what I am talking about.  If you haven’t been paying attention, you can find out more about it [here](http://www.washingtonpost.com/blogs/the-switch/wp/2014/01/24/heres-what-caused-that-massive-gmail-outage/) and from [Google](http://googleblog.blogspot.com/2014/01/todays-outage-for-several-google.html) themselves.  In a nutshell, Google, who runs a [3-4 nine operation](http://downloadsquad.switched.com/2011/01/17/google-pushes-for-99-99-uptime-for-google-apps-removes-downtim/) for most services (meaning 99.9-99.99% uptime), had a 35-minute outage due to a software bug.  It’s noteworthy that an event like this is so heavily [scrutinized](https://www.google.com/search?hl=en&gl=us&tbm=nws&authuser=0&q=google+outage&oq=google+outage&gs_l=news-cc.3..43j43i53.1261.2558.0.2776.13.8.0.4.1.1.111.587.7j1.8.0...0.0...1ac.1.PMC90D8wF74) given that the vast majority of businesses struggle to achieve three nines of uptime.

More importantly, this outage highlights what I was trying to say in my original paper, which is that large homogeneous software systems are inherently dangerous to uptime.  Systems fail because of hardware failure, operator error, or software bugs.  Traditional high availability (HA) pairs solve for the hardware failure problem, but typically ignore operator error or software bugs.  Newer distributed software systems *still* predominantly solve for hardware failure, ignoring the more likely failure scenarios of operator error and software bugs.  This is a major problem.

There are a number of ways to solve these problems, including but not limited to: running more than one kind of software system (i.e. moving to a more heterogeneous set of systems), using sharding techniques, and applying disaster recovery techniques.  All of these approaches are essentially doing the same thing, which is limiting the failure domain size.  Not having fault isolation means you will see cascading failures as AWS has seen [several](https://aws.amazon.com/message/680342/) [times](http://aws.amazon.com/message/67457/) when it violated some of these basic principles. Operator errors combined with software bugs caused massive EBS failures, which spilled across Availability Zones because the EBS control plane spanned the AZes.

This is my problem with how distributed storage systems are being marketed.  I love distributed storage.  I think it has a place in the datacenter.  Cloudscaling is currently evaluating our options for integrating open source distributed storage software in our product.  The problem is that it’s place is not to run everywhere in the datacenter and the marketeers at various storage startups who believe so and market so-called “unified” storage solutions are really setting everyone up for failure.  There is no spoon.

For more details, here is my updated storage whitepaper, now entitled [The Case for Tiered Storage in Private Clouds](http://www.cloudscaling.com/wp-content/themes/cloudscaling/assets/downloads/cloudscaling_whitepaper_tiered_storage_private_clouds.pdf), that hopefully furthers the conversation on the appropriate best practices and patterns to use for deploying storage in private clouds today.

In the interest of transparency, I will say that this new revision was kindly reviewed by the team at SolidFire, who have a similar viewpoint to mine.  Much thanks to [Dave Wright](https://twitter.com/jungledave), [Dave Cahill](https://twitter.com/dcahill8), and [John Griffith](https://twitter.com/jdg_8) (PTL for OpenStack Cinder) for their feedback.