---
title: 'CloudBeat 2011: Uncomfortable Choices on the Road to Cloud Computing'
link: http://cloudscaling.com/blog/cloud-computing/cloudbeat-2011-uncomfortable-choices-on-the-road-to-cloud-computing/
author: Teri Elniski
description: 
post_id: 2465
created: 2011/12/05 08:00:09
created_gmt: 2011/12/05 16:00:09
comment_status: open
post_name: cloudbeat-2011-uncomfortable-choices-on-the-road-to-cloud-computing
status: publish
post_type: post
layout: post
category: cloud-computing
---

# CloudBeat 2011: Uncomfortable Choices on the Road to Cloud Computing

![]({{ site.url }}/assets/media/2011/12/iStock_000017079014XSmall-300x200.jpg) Building a cloud that works like AWS or Google involves a complete rethink of just about every concept considered canonical in enterprise IT for the past 20 years. This is the message Randy Bias and [Lew Tucker (Vice President and CTO, Cloud Computing at Cisco)](http://newsroom.cisco.com/dlls/ekits/Lew_Tucker_Bio.pdf) delivered on the main stage [CloudBeat 2011](http://venturebeat.com/tag/cloudbeat-2011/) last Wednesday. High-level takeaways from the video (embedded below) include: **Enterprise IT is not ready to do real cloud.** AWS is growing phenomenally: perhaps $1b in 2011 revenue and a 100% CAGR. But even with this market approval, enterprise IT is not psychologically prepared to run their infrastructure the way AWS does. Most large enterprises and service providers still design with the philosophy that each application architecture drives its own infrastructure architecture. The only successful public clouds turn that idea on its head. **Uptime at scale is in the software, not the hardware.** Designing failover into the software – rather than the hardware – is another source of dissonance when moving from the enterprise IT mindset to cloud design. At scale, you cannot avoid hardware failure, so successful public clouds manage it though software architecture. **Open source is only part of the answer.** Open source software is the only way to go if you want to build a cloud the way AWS and Google do. It’s not easy, though. More than 80% of your time will be spent dealing with issues beyond the cloud OS. **People do not need need to know what’s in the box.** The box delivers an SLA and a set of services. It’s an appliance. This defines the move toward a utility computing model. You get one of 2-3 configurations for different classes of workloads, and that’s it. If you skip through the introductions, the video is just under 20 minutes. [iframe_vimeo video="32994957"]

## Comments

**[Phil Cox](#3109 "2011-12-06 06:03:00"):** Enjoyed the discussion. I think the future of federate clouds is an interesting one. Hopefully we'll get there sometime as Randy said.

**[Guest](#3111 "2011-12-10 17:05:00"):** If you believe this "Open source software is the only way to go" ... No wonder "More than 80% of your time will be spent dealing with issues beyond the cloud OS."

**[randybias](#3112 "2011-12-10 17:15:00"):** The amount of time you spend is irrelevant. The cost is relevant. TCO includes both software costs and costs of labor. For an experienced team open source software is usually cheaper for building a cloud. This is because most enterprise software is not suitable and the integration costs alone are usually more than rolling your own from base principles. The KT cloud to which I refer went to market at 20% under AWS pricing with at least a 50% margin baked in. So I guess roll your own with open source worked just fine in this case. Regardless, taking aside the cost issues and whether open source makes sense or not which is presumably your concern, there is no fully baked end-to-end solution out there right now that is non open source. You *will* have to use open source in some way, some where in your cloud. Even if it's just Linux.

