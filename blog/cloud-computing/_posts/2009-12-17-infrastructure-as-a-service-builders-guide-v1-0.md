---
title: "Infrastructure-as-a-Service Builder's Guide v1.0"
link: http://cloudscaling.com/blog/cloud-computing/infrastructure-as-a-service-builders-guide-v1-0/
author: Randy Bias
description: 
post_id: 867
created: 2009/12/17 08:00:57
created_gmt: 2009/12/17 16:00:57
comment_status: open
post_name: infrastructure-as-a-service-builders-guide-v1-0
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Infrastructure-as-a-Service Builder's Guide v1.0

Just in time for the New Year, we're releasing a short 12 page whitepaper on building Infrastructure-as-a-Service (IaaS) clouds.  This whitepaper is targeted at folks building public or private clouds who want to understand our general take on clouds, cloud computing, and Infrastructure-as-a-Service.  In particular, we highlight some of the important areas to think about when you are planning and designing your infrastructure cloud. Of course, we welcome comments and feedback.  They will be incorporated into future revisions.  The paper itself does go into some technical depth in a few areas, but we can provide quite a bit more color in our [workshops](/services#3). For your reading pleasure, I present our first big technical whitepaper: 

  * [The Infrastructure-as-a-Service Builder's Guide v1.0 (PDF)](/files/iaas-building-guide-v1.pdf) ![](/wp-content/themes/CloudScaling/images/pdficon_large.gif)
Thanks! _The Cloudscaling Team_ Ps. We realize the definition of 'workload' or 'cloud workload' is not as crisp as it could be and request your feedback and thinking on better nomenclature or definitions.  Credit will be given as appropriate. 

* * *

## Comments

**[uberVU - social comments](#425 "2009-12-17 15:04:30"):** **Social comments and analytics for this post...** This post was mentioned on Twitter by Cloudscaling: Infrastructure-as-a-Service Builder's Guide: http://cloudscaling.com/blog/cloud-computing/infrastructure-as-a-service-builders-guide-v1-0...

**[John Gannon](#426 "2009-12-28 12:49:25"):** Randy -- this is a nice primer. Question: At what size (measured in VMs, hosts, apps, or whatever metric you like) are today's CCS's likely to sweat and what are the factors that cause a CCS to hit scalability limits? Put another way, what 'resource' in the cloud management infrastructure (be it technical, people, or process) is likely to be the bottleneck as you grow your IaaS cloud?

**[randybias](#427 "2010-01-07 22:04:07"):** John, apologies for the delay. It depends on the CCS. It looks like the low end for a pod is about 50 physical servers running ~30 VMs each and the high end is probably more like 500 physical servers running ~30 VMs each. A CCS could conceivably manage a fairly large number of pods without too much trouble. I expect in the thousands. Any CCS that is designed in a loosely-coupled fashion should be able to be horizontally scaled using regular techniques. At the end most of them are simple batch processing systems.  
  
I don't know that there is a single resource constraints in scaling an IaaS cloud. The biggest issue is more one of scaling factor. As the margins get thinner, the ability to manage 10, 100, or 1,000 servers per operator will be crucial, but also reach a point of diminishing returns. The cost of a single operator spread across 10 vs. 100 servers is big, but between 1,000 and 10,000 servers is pretty marginal.  
  
Or to put it slightly differently, IaaS providers need to optimize their cost structures and that will be the primary source of any 'bottleneck' in that it will directly impact scalability. But over optimization is dangerous. At some point those resources are better spent on sales & marketing.

**[jdebaer](#428 "2010-01-13 04:16:38"):** Good read. Just to confirm some of the definitions you guys use :  
  
\- a "pod" is basically any arbitrary grouping of VM hosts. Maybe it's based on physical infrastructure boundaries (the VLAN example), maybe it's based on end customer identity (all VMs of customer A have to go on that pod), maybe it's based on workload type (all Apaches have to go there).  
  
\- an "availability zone" is a collection of one or more pods, where you have protection against individual VM host crashes (H/A), but not against "disasters" in the sense of traditional DR. In case of such a disaster you better have a replica in another zone.  
  
Are these definitions in-line with your thinking ? If so - would you agree then that in most case an availability zone will map onto one physical data center ?

**[randybias](#429 "2010-01-13 10:38:12"):** Yes. That's correct. Mostly. A pod isn't an arbitrary grouping though. It's a grouping based on scale, which is related to architecture decisions made in designing the pod. Google's pods for their infrastructure are 10,000 servers, because they rely on all of the servers in a given pod being on the same switch. (they build their own custom switches for this purpose). It's both a design decision and a scaling constraint.  
  
VMware pods will almost certainly be designed around Virtual Center, which has a stated limit of 256 ESX hosts, but most folks I've talked to say realistically it's 50. I've also heard inklings that if you use DRS this number is much, much, smaller. So if you decide that DRS is a requirement for a VMware-based IaaS offering, then your pod size might be only 30 ESX hosts (or less).  
  
Another scaling constraint (business, not technical this time) is capex. You might have a design that allows for 1,000+ nodes, but design a pod at a smaller size initially due to the realities of how much you can build out at once.  
  
I would say that when well designed an availability zone == a datacenter, but I'm not certain that is always the case. It's fairly likely that over time folks will have more than one availability zone within a single datacenter, assuming each avail zone is isolated in power, network, and cooling.  
  
The primary idea here is that availability zone is cribbed directly from Amazon's usage: facility infrastructure is guaranteed to be redundant, but not the facility itself. For a redundant facility you would need to be A) in a different building and B) have that additional building far enough away to be unaffected by acts of god. That range varies, but my personal number is 250 miles.

**[Teambuilding2009](#431 "2010-07-01 04:13:40"):** We welcome comments and feedback.They will be incorporated into future revisions.The paper itself does go into some technical depth in a few areas which result into better position in it.

**[Kim Won](#432 "2010-07-09 22:31:41"):** Hi,  
Saltmarch Media is organizing its third season of Business Technology Summit 2010 which is going to take place on 11 and 12 Nov'10 in Bangalore. The summit feature topics like Soa, Cloud Computing, Cloud Development, Cloud Service and more. For details log on to [www.btsummit.com](http://www.btsummit.com)

**[seema](#433 "2010-12-01 13:19:00"):** To teach vim using the author's method, one could start by removing all but the most basic commands. Then, these missing commands could be introduced to the user one at a time, in a controlled environment where there is a clear task (eg. jump the cursor to a particular point in the text) that can be measured as success or failure.

**[Quora](#434 "2011-03-14 09:10:26"):** **Is there a technical whitepaper available for Cloudscale? Where?...** cloudscaling.com has an good guide to start of with Infrastructure-as-a-Service Builder's Guide v1.0 http://cloudscaling.com/blog/cloud-computing/infrastructure-as-a-service-builders-guide-v1-0...

**[John Gannon](#2141 "2009-12-28 13:49:00"):** Randy -- this is a nice primer. Question: At what size (measured in VMs, hosts, apps, or whatever metric you like) are today's CCS's likely to sweat and what are the factors that cause a CCS to hit scalability limits? Put another way, what 'resource' in the cloud management infrastructure (be it technical, people, or process) is likely to be the bottleneck as you grow your IaaS cloud?

**[randybias](#2144 "2010-01-07 23:04:00"):** John, apologies for the delay. It depends on the CCS. It looks like the low end for a pod is about 50 physical servers running ~30 VMs each and the high end is probably more like 500 physical servers running ~30 VMs each. A CCS could conceivably manage a fairly large number of pods without too much trouble. I expect in the thousands. Any CCS that is designed in a loosely-coupled fashion should be able to be horizontally scaled using regular techniques. At the end most of them are simple batch processing systems. I don't know that there is a single resource constraints in scaling an IaaS cloud. The biggest issue is more one of scaling factor. As the margins get thinner, the ability to manage 10, 100, or 1,000 servers per operator will be crucial, but also reach a point of diminishing returns. The cost of a single operator spread across 10 vs. 100 servers is big, but between 1,000 and 10,000 servers is pretty marginal. Or to put it slightly differently, IaaS providers need to optimize their cost structures and that will be the primary source of any 'bottleneck' in that it will directly impact scalability. But over optimization is dangerous. At some point those resources are better spent on sales & marketing.

**[Jo De Baer](#2145 "2010-01-13 05:16:00"):** Good read. Just to confirm some of the definitions you guys use : \- a "pod" is basically any arbitrary grouping of VM hosts. Maybe it's based on physical infrastructure boundaries (the VLAN example), maybe it's based on end customer identity (all VMs of customer A have to go on that pod), maybe it's based on workload type (all Apaches have to go there). \- an "availability zone" is a collection of one or more pods, where you have protection against individual VM host crashes (H/A), but not against "disasters" in the sense of traditional DR. In case of such a disaster you better have a replica in another zone. Are these definitions in-line with your thinking ? If so - would you agree then that in most case an availability zone will map onto one physical data center ?

**[randybias](#2147 "2010-01-13 11:38:00"):** Yes. That's correct. Mostly. A pod isn't an arbitrary grouping though. It's a grouping based on scale, which is related to architecture decisions made in designing the pod. Google's pods for their infrastructure are 10,000 servers, because they rely on all of the servers in a given pod being on the same switch. (they build their own custom switches for this purpose). It's both a design decision and a scaling constraint. VMware pods will almost certainly be designed around Virtual Center, which has a stated limit of 256 ESX hosts, but most folks I've talked to say realistically it's 50. I've also heard inklings that if you use DRS this number is much, much, smaller. So if you decide that DRS is a requirement for a VMware-based IaaS offering, then your pod size might be only 30 ESX hosts (or less). Another scaling constraint (business, not technical this time) is capex. You might have a design that allows for 1,000+ nodes, but design a pod at a smaller size initially due to the realities of how much you can build out at once. I would say that when well designed an availability zone == a datacenter, but I'm not certain that is always the case. It's fairly likely that over time folks will have more than one availability zone within a single datacenter, assuming each avail zone is isolated in power, network, and cooling. The primary idea here is that availability zone is cribbed directly from Amazon's usage: facility infrastructure is guaranteed to be redundant, but not the facility itself. For a redundant facility you would need to be A) in a different building and B) have that additional building far enough away to be unaffected by acts of god. That range varies, but my personal number is 250 miles.

**[Teambuilding2009](#2218 "2010-07-01 04:13:00"):** We welcome comments and feedback.They will be incorporated into future revisions.The paper itself does go into some technical depth in a few areas which result into better position in it.

**[Kim Won](#2249 "2010-07-09 22:31:00"):** Hi, Saltmarch Media is organizing its third season of Business Technology Summit 2010 which is going to take place on 11 and 12 Nov'10 in Bangalore. The summit feature topics like Soa, Cloud Computing, Cloud Development, Cloud Service and more. For details log on to www.btsummit.com

**[seema](#2324 "2010-12-01 06:19:00"):** To teach vim using the author's method, one could start by removing all but the most basic commands. Then, these missing commands could be introduced to the user one at a time, in a controlled environment where there is a clear task (eg. jump the cursor to a particular point in the text) that can be measured as success or failure.

**[Cloud Consulting](#3035 "2011-04-27 23:29:00"):** Infrastructure-as-a-Service (IaaS) is the delivery of computer infrastructure as a service. This is the base layer of the cloud stack. It serves as a foundation for the other two layers, for their execution.

**[Valeria](#3062 "2011-07-14 01:32:00"):** Really a good post!.I appreciate it very much. Keep up the good work.

**[Marco](#3298 "2012-02-14 03:48:00"):** Is there an available link somewhere to this whitepaper?

**[randybias](#3300 "2012-02-16 18:09:00"):** It is temporarily pulled to redraft it.

