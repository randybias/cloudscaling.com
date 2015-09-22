---
author: Randy Bias
comments: true
date: 2010-02-02 17:49:01+00:00
layout: post
slug: hybrid-clouds-are-half-baked
title: '"Hybrid" Clouds are Half-Baked'
wordpress_id: 931
old_categories:
- Cloud Computing
tags:
- cloud
- enterprise
- hybrid
- standards
- vmware
---

It's difficult to throw a stone these days without hitting a so-called 'hybrid cloud.'  The problem is that the term hybrid, used in this context, appears to mean: "Put any two kinds of clouds together."  In fact, that's how NIST defines it in their [cloud definition document](http://csrc.nist.gov/groups/SNS/cloud-computing/cloud-def-v15.doc) [1].  The problem with this approach is that hybrid, as used commonly, means more than just 'put two things together'.  It means _put two things together to make a new thing_.

Here's the [Wikipedia page on hybrid](http://en.wikipedia.org/wiki/Hybrid).  As used in almost every case the result is that you have a kind of equation:



* * *






>     
>     A + B = C
> 
> 





* * *

Hybrid cars have a single kind of new engine & power train that use gas or electricity.  It's neither a gas engine, nor an electric engine; it's a new **kind** of engine: a hybrid engine.  A hybrid flower is a cross-breed of two flowers, containing the genetic descendent of both parents.  It's neither of its parents, but a new kind of flower that is a combination of both.

As used today in cloud computing, hybrid is abused to mean CONNECTING, not COMBINING two kinds of clouds:



	
  * [Private](http://en.wikipedia.org/wiki/Cloud_computing#Private_cloud) + public clouds

	
  * Internal + external clouds

	
  * Physical servers + virtual servers


The fundamental issue with all of these (except arguably the third, but I'll cover that shortly) is that the end result is **not _A + B = C_, but rather:**



* * *






>     
>     A + B = A + B
> 
> 





* * *

****When NIST, VMware, and others apply the term ‘hybrid’ they are referring to connecting two kinds of clouds.  Once connected however, the result is still two clouds, albeit connected; not a new cloud that is a union of the parts of the two.****

As long as the industry misuses (some might even say ‘abuses’) the term hybrid by using it any time they connect two clouds, more confusion is added to what is already a difficult conversation:



* * *



    
    <strong>Joe</strong>:  "Our new hybrid cloud is up and running!"
    <strong>
    Bob</strong>:  "Which kind of hybrid is that?  Public and private?  Private and



    
    private?  Internal and external? ..."




* * *

Connecting clouds together is best talked about in the context of[ cloud bursting](http://devcentral.f5.com/weblogs/macvittie/archive/2009/07/09/cloud-balancing-cloud-bursting-and-intercloud.aspx), [cloud bridging](http://blog.gogrid.com/2009/01/08/cloudcenters-are-datacenters-in-the-sky/), or [federating clouds](http://www.cloudswitch.com/page/2010-is-the-year-of-the-federated-cloud) [2] together.  Do we use the term 'hybrid' ISP?  Of course not.  If there are connections provided by two different service providers, even if they are connected together, it is clearly understood there are TWO service providers.  It's the same situation here.

The most accurate use of the term I've seen to date is GoGrid’s use for their combination of physical and virtual servers. However, the assumption is that cloud computing is about virtualized servers, which [it's clearly not](http://cloudscaling.com/blog/technology/virtualization-is-not-the-answer-for-clouds).  Virtualization is a multi-tenancy strategy.  It allows you to chop up a physical server into smaller bite-sized chunks.

Cloud computing is about on-demand self-service IT resources, whether it's servers (physical or virtual), storage, or network.  There is no need to make up a new marketing name for 'physical & virtual'.  Just say: "_Our cloud now provides physical servers on-demand for high performance workloads!_"  Everyone gets that.

Precise language, especially when discussing the confusing bleeding edge, is critical. Fuzzy terms, which can be perceived as marketing fluff, are best left at the door. We (those of us in the cloud industry) do ourselves and our customers a disservice by misuse of the term 'hybrid' unless we truly have figured out how to do the equation of _**A + B = C** _and **C** is something brand new. I challenge all thought leaders (myself included) to figure something else out or reuse one of the above terms.



* * *

[1] This is why I usually say in person that NIST is a good starting point only.  Their definitions leave a lot to be desired and clarified.
[2] The term "intercloud" still bugs me; why rename the Internet?  Connections between clouds will be tied together by the Internet with open standards.  There is no need for a new (and awful) name or buzzword.
