---
author: Randy Bias
comments: true
date: 2010-01-19 14:50:12+00:00
layout: post
slug: debunking-the-no-such-thing-as-a-private-cloud-myth
title: Debunking the "No Such Thing as A Private Cloud" Myth
wordpress_id: 896
old_categories:
- Cloud Computing
tags:
- Automation
- aws
- centralization
- cloud
- cloudscaling
- commoditization
- decentralization
- private cloud
---

* * *

_Once upon a time, a network engineer scrawled an amorphous shape upon a whiteboard and wrote "Internet" thereon.  The amorphous circle, a 'cloud', soon became the de facto way that we represent "not my problem", or outsourcing.  Hence, the "cloud" in cloud computing means that cloud is predominantly an outsourcing business model.  Only large scale 'utilities' can provide the cost savings benefits associated with cloud computing. _ — The Private Cloud Myth



* * *

This myth is misguided because it assumes that all cloud computing is a financial model rather than a technology or service model.  Information Technology is rapidly changing from the older client/server and mainframe computing models to the cloud computing model.  This computing model has been pioneered by Amazon and Google, both of whom offer non-utility ‘cloud’ services. It is a model that embraces automation and on-demand self-service.  Providing a public utility service requires cloud computing, but cloud computing does not have to be delivered with a predetermined financial model.

An aside: a 'model' is a way of doing things.  Technology models are ways of putting technology together.  Financial models are ways to arrange finances.  Service models are ways of providing a service that is consumed by someone else.

There are two primary ways you can use cloud computing[1]:



	
  1. Outsourced to an external public utility that uses economies of scale to service many customers

	
  2. Maintained in-house as an internal shared infrastructure (aka ‘private’ or more properly 'internal' cloud)[2]


The myth about private clouds above conflates 3 ideas worth digging into:

	
  1. The cloud diagram was used only to represent the Internet by network engineers and means 'outsourcing'

	
  2. Cloud is a business model and must be delivered as a public utility

	
  3. Implied: clouds cannot be 'private' and owned by a single entity


Understanding the importance of private clouds is important, because the cloud computing model (like the client/server computing model before it) is about **how **IT works, not **where** it works.

Let's address each part of the “no such thing as an (internal) private cloud” myth.


**![simple-cloud](/assets/media/2010/01/simple-cloud-300x146.png)**





**The Cloud Picture**

I can say with 100% certainty that cloud pictures were used for much more than the Internet in the early 90s when the commercial Internet was forming. I know this because I was a network engineer.  My peers and I used clouds to represent any 'autonomous system' or group of such in a routing architecture.  It was a convenience mechanism to simplify network diagrams.

One example was using it to represent a large **private** wide area network (WAN), consisting of Frame Relay circuits or T-1s.  A cloud was also frequently used to represent the entire public switched telephone network (PSTN) or even, at times, entire groups of internal enterprise datacenters & networks.

One of my colleagues at Cloudscaling who is also a network engineering expert says:



* * *

_Clouds are also commonly used for exchange points like MAE-West, other geographies like ‘China’, security zones like ‘DMZ’, parallel networks like ‘Out of Band’, obfuscation networks like ‘Tor’ and layer 2 distinctions. In fact, the entire idea underlying TCP/IP and OSI models is the idea of abstraction and simplification which is what a cloud indicates. Anybody who thinks cloud equals Internet exclusively is misguided_ — Adam Waters, COO, Cloudscaling (Internet2, Level3, iAsiaworks, Calren)



* * *

The assertion that a cloud was used to exclusively represent the Internet is based on two things: a lack of understanding of network & Internet engineering history and the fact that in every network diagram there was inevitably a cloud with an "Internet" label.  The reason for this is that whenever you created a diagram you were required to show where your Internet connection was, but you weren't always required to show other WANs, the PSTN, etc.

Want more?  Here are three of the first page of network diagrams that came up on a Google image search for ‘network diagram’: [1](http://www.conceptdraw.com/products/img/cd5/article/part2/ActiveDir_4.jpg), [2](http://www.webvisions.co.in/services/network-diagram-small.gif), [3](http://www.nxicom.com/documents/Tech%20Notes/NTS%20Typical%20Architecture%20Diagram.jpg).  As you will see there is liberal usage of the cloud picture for purposes other than representing the Internet.  Many of these clouds also represent 'private' areas of the network.

Without the historical context, it is understandable how one could conclude that the term “the cloud” was used as another term for "The Internet”.

**Clouds Are Shared Infrastructure, not Utilities** 

Let’s explore the “utility” concept outside the context of the IT function[3]. A common definition of a 'utility' amongst cloud pundits today is: _a shared infrastructure with metered usage, which has a pay-as-you-go model_. An example of a non-IT utility is power companies like Pacific Gas & Electric (PG&E) which are energy utilities.  [Nick Carr](http://www.roughtype.com/)'s famous books, [Does IT Matter?](http://www.amazon.com/exec/obidos/ASIN/1591394449/amazingbooks0b0) and [The Big Switch](http://www.amazon.com/exec/obidos/ASIN/0393062287/amazingbooks0b0) extensively examine the concept of shared infrastructures leading to the rise of utility computing.

Nick posits that all shared infrastructures, including roads, telegraph, the national air system, railroad system, electrical system, and gas system, are utilities.  Do you think of a road as a utility?  What about the air traffic control system?  I don’t and neither does Wikipedia nor is that term used commonly.  A public utility is “a company that performs a public service; subject to government regulation” according to [WordNet](http://wordnetweb.princeton.edu/perl/webwn?o2=&o0=1&o7=&o5=&o1=1&o6=&o4=&o3=&s=public+utility).  In other words, a utility is a for-profit entity entrusted to perform an important public function and is commonly regulated.

There is a common notion in the discussion of cloud today, which is that "utility" or “utility billing” is a financial arrangement where usage is “metered” and you “pay-as-you-go”, paying only for actual consumption.  This idea comes directly from the way true public utilities such as water, gas, electricity, and telecommunications operate.  These are all systems we commonly consider to be utilities.

But other shared infrastructures do not use the utility billing model.  Certainly, some roads have tolls, but the bulk of roadways are paid for with public money and are unmetered.  The railroad system is not metered.  Neither is air travel.  You do not 'pay-as-you-go.'  While these systems aren’t labeled as ‘utilities’, Nick Carr lumps them into the same bucket.

It might be heresy, but I think there are essentially two big buckets: shared infrastructure and utilities.  Public utilities are a subset of shared infrastructure as is illustrated in the Venn diagram below.


![venn-diagram-shared-infra-public-utilities](/assets/media/2010/01/venn-diagram-shared-infra-public-utilities-300x300.png)



**Infrastructure Can Be a Public Utility OR a Private Shared Infrastructure**

Infrastructure is frequently deployed by private individuals or entities for the purpose of sharing with others. Private road and highways **are commonly** shared.  No, I'm not referring to a simple driveway; I'm talking about large-scale construction efforts in which on-campus roads are built on university campuses, enterprise businesses, military bases, etc.  People fly private planes all the time, yet they share the national air infrastructure in terms of air controllers and air space, but not the planes themselves.  The military or large federated organizations also have large-scale shared infrastructure that is not a ‘public’ service.  There are many more examples and it is clear that not all shared infrastructure is a public utility.

We now have a conundrum.  The  'utility' concept isn't as clear-cut as being simply a shared infrastructure.  It clearly implies a financial arrangement.  What do we do?

For me it's clear:  There is 'shared infrastructure' and there are 'utilities'.  Utilities are usually shared infrastructure, but not all shared infrastructure is a utility.  _Utilitization_ is the act of taking a shared infrastructure and applying a financial model to it that charges for metered usage.  **_That means that utilitization is a business model that can be layered on top of a shared infrastructure_** (aka ‘public cloud’).

“Cloud” or “cloud computing” are limited terms. Nick Carr predicted the rise of utility computing.  He did not call it 'cloud' or 'cloud computing', nor did he coin those terms.  Nick correctly predicted the advent of a cost/economics model that inevitably moves large amounts of computing infrastructure to specialized providers who operate as public utilities and can use their scale to cost effectively deliver this service.  That's the utility model and there is absolutely no doubt that it exists, is real, and will eventually apply to **every shared infrastructure** that human beings will create now and in the future.

**So What's a Private Cloud?
** To better understand the concept of a ‘private’ cloud, we need to explore the concept of cloud computing itself.

Cloud computing can be seen not as a utility business model, but as a technology infrastructure model. The infrastructure in play is 'data infrastructure', not electrical infrastructure, people moving infrastructure, or others.  This new model determines how data infrastructure will be delivered and was pioneered by Google and Amazon among others.  Amazon used their data infrastructure to drive new revenue (AWS), and Google later introduced its Google App Engine (GAE) to do the same.

Were Amazon and Google clouds before they added revenue generation models?  I, and many others, would say “yes”.  The utility financial model for revenue generation _is_ being applied to their clouds, but it does not, and never has, _defined_ their clouds.

What defines their clouds is the method by which they built the actual IT infrastructure.  It was designed to be completely self-service, has no major single points of failure, and relies on commodity software and hardware.

That's cloud computing.  Cloud computing is a methodology for delivering IT that changes everything. This is similar to how client/server computing disrupted mainframe computing changing IT in the process. The diagram below clearly illustrates my point.


![mainframe-clientserver-cloud-evolution-blue](/assets/media/2010/01/mainframe-clientserver-cloud-evolution-blue-1023x722.png)

This diagram shows the evolution to client-server from mainframe computing. Cloud computing is the next progression in the evolution of IT. Public cloud proponents want us to believe that everything in that third column is subsumed by the financial & business model, which is not true.  If you extract cloud computing from the public utility business model, there are significant and important advantages to moving away from the client-server model.  These advantages will be embraced by larger businesses that cannot easily progress to the public cloud model. **_ In fact, the private cloud model is a critical transitional step. It is an essential component to help larger organizations move their compute capacity to the public cloud._**[4]

Just what is a private cloud?  Private clouds are the cloud computing methodologies that Amazon and Google pioneered but applied in such a fashion that only a single tenant uses them.  They are owned by a single entity and **optionally** shared.  If Amazon deploys a copy of their Elastic Compute Cloud (EC2) for a customer, that copy of EC2 is a little private cloud used only by that customer.  It's the same technology and methodology wrapped up in one little neat 'cloud' ball for the client.  It's private, it's a cloud, and the financial model it uses is not the utility billing model.

**Summary**

Will cloud be delivered as a utility?  Absolutely.  It is today.  In fact, the public utility model will be the dominant financial paradigm for cloud computing within the next two decades.  Most people will consume cloud computing built and delivered by others.  The cost economics are too compelling.

However, there will always be a demand for a private, unshared, cloud option.   This option could be outsourced or not, but it is 'private’ because organizations will have some kind of requirement that disallows public cloud usage.  It could be security, regulatory, performance, or just plain old paranoia driving these requirements that prevent the ‘public cloud option’.

The old client/server computing paradigm is no longer good enough, just as the mainframe computing model before it wasn’t good enough.  The cloud computing model is displacing both client/server computing as the de facto way to deliver IT services.  At the same time, cloud computing pioneers (i.e.Amazon and Google) are finding that by utilitizing their cloud services, they can leverage their leadership while offering unprecedented value. Large enterprises will eventually move much of IT outside their walls. However, there will be areas which cannot be moved. That which remains inside their walls will be delivered using internal private cloud technologies.

I predict that 2010 will be the year of the private cloud.  We are at the beginning of a huge growth curve and this is the year it will start to see significant traction.



* * *

[1] There are really two 'private cloud' options: outsourcing and insourcing.  Outsourced or 'external private' clouds are a single-tenant cloud outsourced to a third party while 'internal private' clouds are those run by the same entity that uses them.
[2] Yes, this only makes sense for the largest businesses, but the majority of IT spending happens there and hence it will be very significant how they embrace both internal and external private clouds.
[3] See my earlier posting on why cloud isn’t about outsourcing
[4] When asked, most large enterprises rank cost savings well below rapid provisioning as their reasons for embracing cloud technologies; they care more about driving top-line revenue opportunities than bottom-line cost savings.
