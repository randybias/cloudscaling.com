---
title: '"Hybrid" Clouds are Half-Baked'
link: http://cloudscaling.com/blog/cloud-computing/hybrid-clouds-are-half-baked/
author: randybias
description: 
post_id: 931
created: 2010/02/02 09:49:01
created_gmt: 2010/02/02 17:49:01
comment_status: open
post_name: hybrid-clouds-are-half-baked
status: publish
post_type: post
layout: post
---

# "Hybrid" Clouds are Half-Baked

It's difficult to throw a stone these days without hitting a so-called 'hybrid cloud.' The problem is that the term hybrid, used in this context, appears to mean: "Put any two kinds of clouds together." In fact, that's how NIST defines it in their [cloud definition document](http://csrc.nist.gov/groups/SNS/cloud-computing/cloud-def-v15.doc) [1]. The problem with this approach is that hybrid, as used commonly, means more than just 'put two things together'. It means _put two things together to make a new thing_. Here's the [Wikipedia page on hybrid](http://en.wikipedia.org/wiki/Hybrid). As used in almost every case the result is that you have a kind of equation: 

* * *

> 
>     A + B = C

* * *

Hybrid cars have a single kind of new engine & power train that use gas or electricity. It's neither a gas engine, nor an electric engine; it's a new **kind** of engine: a hybrid engine. A hybrid flower is a cross-breed of two flowers, containing the genetic descendent of both parents. It's neither of its parents, but a new kind of flower that is a combination of both. As used today in cloud computing, hybrid is abused to mean CONNECTING, not COMBINING two kinds of clouds: 

  * [Private](http://en.wikipedia.org/wiki/Cloud_computing#Private_cloud) \+ public clouds
  * Internal + external clouds
  * Physical servers + virtual servers
The fundamental issue with all of these (except arguably the third, but I'll cover that shortly) is that the end result is **not _A + B = C_, but rather:**

* * *

> 
>     A + B = A + B

* * *

****When NIST, VMware, and others apply the term ‘hybrid’ they are referring to connecting two kinds of clouds. Once connected however, the result is still two clouds, albeit connected; not a new cloud that is a union of the parts of the two.**** As long as the industry misuses (some might even say ‘abuses’) the term hybrid by using it any time they connect two clouds, more confusion is added to what is already a difficult conversation: 

* * *
    
    
    **Joe**:  "Our new hybrid cloud is up and running!"
    **
    Bob**:  "Which kind of hybrid is that?  Public and private?  Private and
    
    
    private?  Internal and external? ..."

* * *

Connecting clouds together is best talked about in the context of[ cloud bursting](http://devcentral.f5.com/weblogs/macvittie/archive/2009/07/09/cloud-balancing-cloud-bursting-and-intercloud.aspx), [cloud bridging](http://blog.gogrid.com/2009/01/08/cloudcenters-are-datacenters-in-the-sky/), or [federating clouds](http://www.cloudswitch.com/page/2010-is-the-year-of-the-federated-cloud) [2] together. Do we use the term 'hybrid' ISP? Of course not. If there are connections provided by two different service providers, even if they are connected together, it is clearly understood there are TWO service providers. It's the same situation here. The most accurate use of the term I've seen to date is GoGrid’s use for their combination of physical and virtual servers. However, the assumption is that cloud computing is about virtualized servers, which [it's clearly not](/blog/technology/virtualization-is-not-the-answer-for-clouds). Virtualization is a multi-tenancy strategy. It allows you to chop up a physical server into smaller bite-sized chunks. Cloud computing is about on-demand self-service IT resources, whether it's servers (physical or virtual), storage, or network. There is no need to make up a new marketing name for 'physical & virtual'. Just say: "_Our cloud now provides physical servers on-demand for high performance workloads!_" Everyone gets that. Precise language, especially when discussing the confusing bleeding edge, is critical. Fuzzy terms, which can be perceived as marketing fluff, are best left at the door. We (those of us in the cloud industry) do ourselves and our customers a disservice by misuse of the term 'hybrid' unless we truly have figured out how to do the equation of _**A + B = C** _and **C** is something brand new. I challenge all thought leaders (myself included) to figure something else out or reuse one of the above terms. 

* * *

[1] This is why I usually say in person that NIST is a good starting point only.  Their definitions leave a lot to be desired and clarified. [2] The term "intercloud" still bugs me; why rename the Internet?  Connections between clouds will be tied together by the Internet with open standards.  There is no need for a new (and awful) name or buzzword.

## Comments

**[lmacvittie](#460 "2010-02-02 10:25:23"):** Randy,   
  
Excellent post. I had been preparing to call you out but find I can't because you've made your case admirably. The only exception to I can see is in the case of COMBINING of the private (internal) cloud with a private (external) cloud via some type of VPN to form an extended, new network. I'd make the case that in this scenario A+B=C because the network might actually be extended to include the "new" network, i.e. a union formed by the combining of two sets, in its definition rather than just connected, which seems to be at the core of your argument.   
  
That very specific use-case might justify the use of the term "hybrid" because the network created is a new kind of network, but then again I might just be grabbing at straws. ;-)   
  
I'll certainly be more thoughtful when considering the use of the term "hybrid" henceforth, as I agree completely that precision in the language we use is important.   
  
Lori

**[randybias](#461 "2010-02-02 10:57:47"):** Good point. I think you're right that it's potentially a case where it's a 'hybrid', unfortunately, I think this is a very unlikely scenario. The issue is that most of the time if you do this at Layer 2 there are significant ramifications. Suddenly introducing 50+ms between two servers on the same Ethernet segment could cause unexpected issues (e.g. app -> DB server incurring 50ms latency in an app requiring low latency DB transactions).  
  
I think the reality is that most of the time we won't transparently put together two clouds at layer 2 because of latency, architecture incompatibility, etc. For example, just looking at the current vCloud Express offerings from [hosting.com](http://hosting.com), Savvis, and Terremark, you'll see fairly significant differences in architecture. These can't be easily ignored.  
  
So, until we get a little further down the road of de facto standards in terms of architectures used to build clouds it's unlikely this scenario will actually exist.

**[Sam Johnston](#462 "2010-02-02 11:35:59"):** I find it hilarious that you use the terms "cloud bursting", "cloud bridging" & "federating clouds" with a straight face and then bitch about the term "Intercloud" (which necessarily focuses the discussion on INTERoperability). So what do you call an architecture with some private and some public components? What about public/public and private/private setups? "Hybrid cloud" is probably the most innocuous term of the lot - hardly worth getting your knickers in a twist over. Sam

**[randybias](#463 "2010-02-02 11:43:33"):** Intercloud is awkward and unnecessary. Explaining how clouds are joined is necessary and informative. As usual, we'll just have to disagree on this. I think intercloud is a mess and cloudbridging is relatively crap free.

**[daveshac](#464 "2010-02-02 13:49:46"):** Randy - It's an interesting topic, and well stated. I agree that how we use language is critically important to overall industry/market advancement.   
  
When we use the term "hybrid" at Savvis when working with customers, it's usually directed at the overall solution we're building for some segment of the customer's enterprise architecture.   
  
By combining elements of our product set - say, a colocation environment with server capacity in our Symphony cloud - it allows customers to design a new type of datacenter that they couldn't do before. I would suggest that a legacy data warehouse (running in colo) connected to burstable analysis capacity (running in cloud) is an example of A+B=C. The CIO in charge of that data warehouse didn't really have the opportunity to build the business intelligence solution he/she really wanted ("C") until such a hybrid solution became available.   
  
Taken from the networking perspective, I agree that connecting two things together is connecting two things together. Taken from a business perspective, combining service provider paradigms can result in enterprise architectures that weren't available previously.  
  
I do agree with the essence of your point - don't call a solution "hybrid" unless you really did create a new capability which didn't exist before.

**[krishnan](#465 "2010-02-02 23:21:33"):** Randy,  
  
I was initially reluctant to embrace your argument and I think you nailed it in this post. RIP Hybrid Clouds.

**[randybias](#466 "2010-02-03 20:56:29"):** @daveshac, thanks for the reply. Still going to have to disagree on calling that hybrid. It's still connecting and not combining into a brand new thing.  
  
Don't get me wrong, it's clear you are creating value, I just believe that calling it hybrid makes it hard to understand. That's a pretty clearcut case of cloud bursting IMHO.

**[randybias](#467 "2010-02-03 20:56:44"):** @krishnan cheers!

**[daveshac](#468 "2010-02-04 06:28:28"):** Fair enough, Randy. I can see it from both sides. I think it's also a matter of perspective. For IT Pros that think about service models and enabling technology, it feels like bursting/connecting. For CIOs/EAs that think about their entire approach to budgeting and problem-solving, it feels like something new.  
  
Anyway, thanks again - this is good dialogue and will certainly influence me in the way I use these terms in the future.

**[Jakewk](#469 "2010-02-04 10:26:25"):** What if it's new to the customer? A lot of customers? What exactly is the harm in calling it hybrid? Are we opening up a worm hole somewhere? ;)

**[Erik Sebesta](#470 "2010-02-08 07:07:47"):** Good point. Updated our presentations to drop the use of Hybrid and use "Connected clouds" instead.

**[randybias](#471 "2010-02-08 18:01:45"):** It's something 'new' if you can't take it apart afterwards. Combined vs. connected. If two clouds are connected into a so-called 'hybrid cloud' and you remove the connection, you still have two kinds of clouds. If you take a hybrid engine out of a Prius and try to make one gas and one electric engine it won't work. That's because they were combined.  
  
It's just not good enough to conflate combined and connected. They are different beasts.

**[JohnTreadwayCloudBzz](#472 "2010-02-15 05:57:28"):** I've been having this argument a lot recently. I agree that the term "hybrid cloud" typically refers to the combination of one or more TYPES of clouds, and not necessarily a new type itself. If you create an application that spans AppEngine, EC2 and SQL Azure, what you have is a distributed composite application running across heterogeneous clouds. Have you created a hybrid cloud? Of course not.  
  
Now, if you create an application that spans your internal vSphere and an external vCloud with integrated DRS and Site Recovery Manager, and you manage both infrastructures from a single pane of glass with integrated security, policy management and internal accounting, you might have created something new at the integration layer. The new thing doesn't run the workloads, but it does provide new capability you might not have had previously. So perhaps there are no "hybrid clouds" but only tools that enable integrated cross-cloud management. If they control movement of workloads between the clouds, in some intelligent way, you might call these tools hybrid cloud brokers.

**[randybias](#473 "2010-02-15 12:52:51"):** Always good to hear from you John. I understand your point of view vis a vis connecting two vCloud instances, but I don't think that's a new 'hybrid' either. Besides the fact that it isn't new and hence hasn't created a new thing by COMBINING clouds, there is also the fact that even VMware doesn't call this hybrid. They call it federation and understandably so.

**[JohnTreadwayCloudBzz](#474 "2010-02-15 13:08:30"):** That was my point -- you haven't created a new set of clouds, but perhaps you have created a new thing that glues them together. Federation is a good way to describe how clouds can be combined.

**[randybias](#475 "2010-02-15 13:23:43"):** Gotcha.

**[pricejonathan](#476 "2010-02-16 07:46:39"):** Another term recently used by Logicalis is ‘Co-operative Enterprise Cloud’, which comprises an onsite Cloud capability underpinned by CA, Cisco and Netapp. A mirrored central, UK hosted equivalent infrastructure provides elasticity, with portability between hosted and a company’s onsite infrastructure. Whether you agree with the term used, the value for IT in this sort of offering is immense. See details at [http://www.ca.com/us/insights/collateral.aspx?c...](http://www.ca.com/us/insights/collateral.aspx?cid=227646)

**[randybias](#477 "2010-02-16 10:44:23"):** Yes, of course connecting clouds is important. My only concern is over using clearer terminology. Co-operative cloud works for me.

**[Lori MacVittie](#2157 "2010-02-02 11:25:00"):** Randy, Excellent post. I had been preparing to call you out but find I can't because you've made your case admirably. The only exception to I can see is in the case of COMBINING of the private (internal) cloud with a private (external) cloud via some type of VPN to form an extended, new network. I'd make the case that in this scenario A+B=C because the network might actually be extended to include the "new" network, i.e. a union formed by the combining of two sets, in its definition rather than just connected, which seems to be at the core of your argument. That very specific use-case might justify the use of the term "hybrid" because the network created is a new kind of network, but then again I might just be grabbing at straws. ;-) I'll certainly be more thoughtful when considering the use of the term "hybrid" henceforth, as I agree completely that precision in the language we use is important. Lori

**[randybias](#2158 "2010-02-02 11:57:00"):** Good point. I think you're right that it's potentially a case where it's a 'hybrid', unfortunately, I think this is a very unlikely scenario. The issue is that most of the time if you do this at Layer 2 there are significant ramifications. Suddenly introducing 50+ms between two servers on the same Ethernet segment could cause unexpected issues (e.g. app -> DB server incurring 50ms latency in an app requiring low latency DB transactions). I think the reality is that most of the time we won't transparently put together two clouds at layer 2 because of latency, architecture incompatibility, etc. For example, just looking at the current vCloud Express offerings from hosting.com, Savvis, and Terremark, you'll see fairly significant differences in architecture. These can't be easily ignored. So, until we get a little further down the road of de facto standards in terms of architectures used to build clouds it's unlikely this scenario will actually exist.

**[daveshac](#2159 "2010-02-02 14:49:00"):** Randy - It's an interesting topic, and well stated. I agree that how we use language is critically important to overall industry/market advancement. When we use the term "hybrid" at Savvis when working with customers, it's usually directed at the overall solution we're building for some segment of the customer's enterprise architecture. By combining elements of our product set - say, a colocation environment with server capacity in our Symphony cloud - it allows customers to design a new type of datacenter that they couldn't do before. I would suggest that a legacy data warehouse (running in colo) connected to burstable analysis capacity (running in cloud) is an example of A+B=C. The CIO in charge of that data warehouse didn't really have the opportunity to build the business intelligence solution he/she really wanted ("C") until such a hybrid solution became available. Taken from the networking perspective, I agree that connecting two things together is connecting two things together. Taken from a business perspective, combining service provider paradigms can result in enterprise architectures that weren't available previously. I do agree with the essence of your point - don't call a solution "hybrid" unless you really did create a new capability which didn't exist before.

**[krishnan](#2160 "2010-02-03 00:21:00"):** Randy, I was initially reluctant to embrace your argument and I think you nailed it in this post. RIP Hybrid Clouds.

**[randybias](#2161 "2010-02-03 21:56:00"):** @daveshac, thanks for the reply. Still going to have to disagree on calling that hybrid. It's still connecting and not combining into a brand new thing. Don't get me wrong, it's clear you are creating value, I just believe that calling it hybrid makes it hard to understand. That's a pretty clearcut case of cloud bursting IMHO.

**[randybias](#2162 "2010-02-03 21:56:00"):** @krishnan cheers!

**[daveshac](#2163 "2010-02-04 07:28:00"):** Fair enough, Randy. I can see it from both sides. I think it's also a matter of perspective. For IT Pros that think about service models and enabling technology, it feels like bursting/connecting. For CIOs/EAs that think about their entire approach to budgeting and problem-solving, it feels like something new. Anyway, thanks again - this is good dialogue and will certainly influence me in the way I use these terms in the future.

**[Jakewk](#2164 "2010-02-04 11:26:00"):** What if it's new to the customer? A lot of customers? What exactly is the harm in calling it hybrid? Are we opening up a worm hole somewhere? ;)

**[Erik Sebesta](#2165 "2010-02-08 08:07:00"):** Good point. Updated our presentations to drop the use of Hybrid and use "Connected clouds" instead.

**[randybias](#2166 "2010-02-08 19:01:00"):** It's something 'new' if you can't take it apart afterwards. Combined vs. connected. If two clouds are connected into a so-called 'hybrid cloud' and you remove the connection, you still have two kinds of clouds. If you take a hybrid engine out of a Prius and try to make one gas and one electric engine it won't work. That's because they were combined. It's just not good enough to conflate combined and connected. They are different beasts.

**[JohnTreadwayCloudBzz](#2167 "2010-02-15 06:57:00"):** I've been having this argument a lot recently. I agree that the term "hybrid cloud" typically refers to the combination of one or more TYPES of clouds, and not necessarily a new type itself. If you create an application that spans AppEngine, EC2 and SQL Azure, what you have is a distributed composite application running across heterogeneous clouds. Have you created a hybrid cloud? Of course not. Now, if you create an application that spans your internal vSphere and an external vCloud with integrated DRS and Site Recovery Manager, and you manage both infrastructures from a single pane of glass with integrated security, policy management and internal accounting, you might have created something new at the integration layer. The new thing doesn't run the workloads, but it does provide new capability you might not have had previously. So perhaps there are no "hybrid clouds" but only tools that enable integrated cross-cloud management. If they control movement of workloads between the clouds, in some intelligent way, you might call these tools hybrid cloud brokers.

**[randybias](#2168 "2010-02-15 13:52:00"):** Always good to hear from you John. I understand your point of view vis a vis connecting two vCloud instances, but I don't think that's a new 'hybrid' either. Besides the fact that it isn't new and hence hasn't created a new thing by COMBINING clouds, there is also the fact that even VMware doesn't call this hybrid. They call it federation and understandably so.

**[JohnTreadwayCloudBzz](#2169 "2010-02-15 14:08:00"):** That was my point -- you haven't created a new set of clouds, but perhaps you have created a new thing that glues them together. Federation is a good way to describe how clouds can be combined.

**[randybias](#2170 "2010-02-15 14:23:00"):** Gotcha.

**[pricejonathan](#2171 "2010-02-16 08:46:00"):** Another term recently used by Logicalis is ‘Co-operative Enterprise Cloud’, which comprises an onsite Cloud capability underpinned by CA, Cisco and Netapp. A mirrored central, UK hosted equivalent infrastructure provides elasticity, with portability between hosted and a company’s onsite infrastructure. Whether you agree with the term used, the value for IT in this sort of offering is immense. See details at http://www.ca.com/us/insights/collateral.aspx?cid=227646

**[randybias](#2172 "2010-02-16 11:44:00"):** Yes, of course connecting clouds is important. My only concern is over using clearer terminology. Co-operative cloud works for me.

