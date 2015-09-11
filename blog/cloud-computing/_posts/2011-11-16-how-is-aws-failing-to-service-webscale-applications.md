---
title: 'How is AWS Failing to Service Webscale Applications?'
link: http://cloudscaling.com/blog/cloud-computing/how-is-aws-failing-to-service-webscale-applications/
author: randybias
description: 
post_id: 2440
created: 2011/11/16 12:54:55
created_gmt: 2011/11/16 20:54:55
comment_status: open
post_name: how-is-aws-failing-to-service-webscale-applications
status: publish
post_type: post
layout: post
category: cloud-computing
---

# How is AWS Failing to Service Webscale Applications?

I've made the argument on [numerous occasions](/blog/cloud-computing/cloudscaling-presentation-roundup) that Amazon Web Services (AWS) is essentially the quintessential cloud computing offering, particular for infrastructure.  To boil down my argument again, it's essentially: 

  * Cloud computing is an entirely new model for IT
  * This model displaces 'enterprise computing' (or 'client/server') just as that model displaced 'mainframe computing'
  * "Enterprise clouds" are therefor just 'virtualization 2.0' or 'false clouds' as some  would call them
  * AWS growth is largely driven by next generation applications that CANNOT be serviced by enterprise clouds: big data, mobile applications, SaaS, and others with very elastic and scale-hungry workloads
  * Next generation apps are designed for the AWS-style cloud (aka 'web scale') where typical enterprise concerns (e.g. "I need my VM to *never* fail") are immaterial
For the sake of argument, let's assume this is all correct.  Trust me, there are plenty of people who would argue I'm wrong, but let's just say that the above argument is correct. In this world, what more can AWS do to help web-scale applications succeed?  They already provide infinite, or near infinite, computing capacity, storage, and networking on-demand.  They also provide a bevy of higher order services from queuing to relational databases and PaaS. AWS is very effectively removing the need for typical IT infrastructure staff by delivering developer centric offerings. Assuming this continues, what more can they do to enable next generation web-scale applications and the developers who are building them?  I am extremely interested in your thoughts. For further background, please [see my answer to the Quora question](http://www.quora.com/In-what-ways-is-AWS-better-than-most-of-its-competitors/answer/Randy-Bias): "In what ways is AWS better than most of it's competitors."

## Comments

**[Quora](#762 "2011-11-16 13:02:31"):** **How can AWS Better Enable Web-scale Applications?...** What more can AWS do to help web-scale applications succeed?  They already provide infinite, or near infinite, computing capacity, storage, and networking on-demand.  They also provide a bevy of higher order services from queuing to relational database...

**[Ken Rugg](#3096 "2011-11-16 14:02:00"):** One gap we see is in providing truly elastic relational database capacity.  RDS is great as a "Database Server as a Service", but not true Database as a Service with the same level of flexibility as other "on-demand" services such as raw storage or compute.

**[randybias](#3097 "2011-11-16 14:29:00"):** Thank you. That's perfect. Do you want scalable RDBMS as a service or will NoSQL type solutions work?

**[Dmitriy](#3098 "2011-11-16 14:57:00"):** Innovate on pricing. They are ahead of the curve with on-demand, spot and reserved instances already, but they could do more and probably are already working on this (or they better be).

**[randybias](#3099 "2011-11-16 15:06:00"):** Pricing seems like a given or perhaps a less interesting place to put effort, BUT I'd like to understand better. Can you provide some examples or ideas about how Amazon can better enable web scale applications using pricing techniques?

**[Ewan Leith](#3100 "2011-11-17 02:47:00"):** 2 areas that I think they can work on: 1) Disaster Recovery / Business Continuity - You can say this has to be part of the application design (and you'd probably be right), but AWS could make this much easier and cheaper. Things like syncronous S3 bucket replication direct from region to region, reduced inter-region traffic costs to encourage take-up, stuff like that. 2) A much improved RDBMS service, which doesn't have all the issues that come up time and again with RDS. This probably means moving it off of EBS, and onto a different storage infrastructure, as EBS is the core problem much of the time. Point 2 hints at perhaps the bigger issue with AWS - it's offering tools which people misuse, mostly through misunderstanding of the capabilities. Perhaps they'd be better off removing services like EBS and RDS, rather than face the constant complaints from people who expected EBS to perform consistently and reliably, like a physical disk would, rather than a shared resource, which it actually is. That would be a very brave step for them though, and I think they'd be better off making these "legacy-like" services behave more like their legacy counterparts first.

**[randybias](#3101 "2011-11-17 07:51:00"):** Awesome. This is great info and feedback. Thank you.

**[Wes Felter](#3102 "2011-11-17 08:02:00"):** The fact that AWS doesn't offer flash at all seems like a big hole. In some cases flash's price/performance beats disk by a wide margin. I would second the comment that they should make EBS work. (I don't think it's an option to remove it; that puts them back into "how do I run MySQL?" "you don't" territory.) It's cool to talk about being hip and webscale and all enterprise stuff being old and busted, but when enterprise SANs actually work and EBS doesn't or when an ARP IP takeover takes seconds and an elastic IP takeover takes a minute...

