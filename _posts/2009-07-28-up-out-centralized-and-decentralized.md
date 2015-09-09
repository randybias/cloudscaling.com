---
title: 'Up, Out, Centralized, and Decentralized'
link: http://cloudscaling.com/blog/cloud-computing/up-out-centralized-and-decentralized/
author: randybias
description: 
post_id: 433
created: 2009/07/28 08:30:51
created_gmt: 2009/07/28 15:30:51
comment_status: open
post_name: up-out-centralized-and-decentralized
status: publish
post_type: post
layout: post
---

# Up, Out, Centralized, and Decentralized

![vert-scaling-diagram1]({{ site.url }}/assets/media/2009/07/vert-scaling-diagram1-269x299.png)It can be confusing to understand how to scale computing systems, but it's not rocket science.  There are really only two main axes of scale: out and up.  Closely related to the axis of scale is the general type of architecture: centralized or decentralized.  In this article I'm going to briefly revisit scaling and then talk about centralized vs. decentralized architectures. 

**The Axes of Scale**

While ‘scaling’ is a popular topic, the scalability of a system is largely misunderstood.  You can scale ‘up’ (vertical) or ‘out’ (horizontal). Usually when people talk about scaling in the context of cloud computing, they mean a scale-out solution. This is because scale-up is not possible without control of the hardware, which you don't usually have in a cloud computing scenario. Still, scale-up is a valid tactic for many situations such as scaling databases and fileservers.

Scale-out means use more of a single unit of resource (below), while scale-up means using fewer units while increasing the size of resource of each unit (up and right).

![horizontal-scaling-diagram]({{ site.url }}/assets/media/2009/07/horizontal-scaling-diagram-1024x227.png)

I believe scaling a system from this perspective is relatively well understood, but not necessarily the main ways in which scaling is achieved.

**Centralized and Decentralized Systems**

At the heart of most architectural or design decisions is whether to build a centralized or decentralized system. Centralized systems can generally be purchased off the shelf, come in high-availability (HA) pairs, are technically simple to operate, provide vertical scaling capabilities, and are delivered at a premium price per unit. Well-designed centralized systems provide very high uptimes and availability. They can also be prone to catastrophic failures due to mis-configurations.  This happens because they usually have a synchronized configuration and a misconfiguration in one is propagated immediately to the other. Given that misconfiguration is the number one source of failures or security breaches, this can be a major concern. Examples of centralized systems include: redundant load balancer pairs, NAS / SAN systems delivered as HA units, and centralized network switches.

Decentralized systems by contrast are scaled horizontally, can be technically complex to operate, usually written in-house or built from open source, and priced such that individual units are relatively cheap. Distributed systems tend to be highly resilient in the face of the failure of a single unit because configurations are not shared. A unit’s failure has no impact on neighboring units. At most, the overall capacity is affected. Examples include: shared-nothing web/app tiers, pools of virtualized servers, top of rack switch deployments, and peer-to-peer (P2P) systems.

Most web systems do not require an either/or decision as they use a combination of centralized and decentralized components. A good example is a typical 2-tier web application stack like Ruby-on-Rails. The web/app tier will be scaled-out and the databases will be scaled-up.  Despite the hype around cloud computing, this is **still** the norm.  Even on Amazon's EC2, your typical web app starts with the smallest instance size possible and then when scaling limits are hit, is upgraded to the next biggest instance size.

The decentralized approach has been out of favor historically due to technical complexity and low margins.  Also larger enterprises tend to lean in the direction of simpler to manage, centralized, scale-up solutions. Vendors prefer to sell fewer, larger, high margin solutions while enterprises like technically simple solutions.  This is beginning to change as we can see with folks like [Cloudera](http://www.cloudera.com) providing commercial support for decentralized data processing systems like [Hadoop](http://en.wikipedia.org/wiki/Hadoop).

Centralized approaches have the distinct disadvantage of scale-up limits. Meaning you can only build a single server that is so large. If your growth needs fit neatly inside [Moore's Law](http://en.wikipedia.org/wiki/Moores_Law), you're in luck, if not, you'll have to scale-out instead of up. At some point only a scale-out approach can continue to grow capacity.  This is why companies like Google and Amazon have chosen their particular ‘web-scale’ approaches.

**Conclusion**

Scaling up via centralized systems is still a viable architectural decision for those whose growth needs fit Moore's Law.  Given the advent of cloud computing and the ability to add more servers when needed, scale-out tactics for building decentralized systems has been gaining more prevalence.  We will begin to see more and more scale-out solutions even within the enterprise as startups like Cloudera, [ParaScale](http://www.parascale.com), [StackJet](http://www.stackjet.com/), and many others build easier to manage decentralized systems.  I am very much looking forward to this new world as it solves a great many hard problems in a very efficient manner.  Just remember that scaling up will always be a viable and, in some cases, cost effective architectural decision.

## Comments

**[dnene (Dhananjay Nene)](#192 "2009-08-07 04:12:30"):** Simple intro to horizontal / vertical scaling in the cloud context: "Up, Out, Centralized and Decentralized" http://tinyurl.com/ktumt3

