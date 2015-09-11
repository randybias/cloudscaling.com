---
title: 'Debunking the "No Such Thing as A Private Cloud" Myth'
link: http://cloudscaling.com/blog/cloud-computing/debunking-the-no-such-thing-as-a-private-cloud-myth/
author: randybias
description: 
post_id: 896
created: 2010/01/19 06:50:12
created_gmt: 2010/01/19 14:50:12
comment_status: open
post_name: debunking-the-no-such-thing-as-a-private-cloud-myth
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Debunking the "No Such Thing as A Private Cloud" Myth

* * *

_Once upon a time, a network engineer scrawled an amorphous shape upon a whiteboard and wrote "Internet" thereon.  The amorphous circle, a 'cloud', soon became the de facto way that we represent "not my problem", or outsourcing.  Hence, the "cloud" in cloud computing means that cloud is predominantly an outsourcing business model.  Only large scale 'utilities' can provide the cost savings benefits associated with cloud computing. _ — The Private Cloud Myth 

* * *

This myth is misguided because it assumes that all cloud computing is a financial model rather than a technology or service model.  Information Technology is rapidly changing from the older client/server and mainframe computing models to the cloud computing model.  This computing model has been pioneered by Amazon and Google, both of whom offer non-utility ‘cloud’ services. It is a model that embraces automation and on-demand self-service.  Providing a public utility service requires cloud computing, but cloud computing does not have to be delivered with a predetermined financial model. An aside: a 'model' is a way of doing things.  Technology models are ways of putting technology together.  Financial models are ways to arrange finances.  Service models are ways of providing a service that is consumed by someone else. There are two primary ways you can use cloud computing[1]: 

  1. Outsourced to an external public utility that uses economies of scale to service many customers
  2. Maintained in-house as an internal shared infrastructure (aka ‘private’ or more properly 'internal' cloud)[2]
The myth about private clouds above conflates 3 ideas worth digging into: 
  1. The cloud diagram was used only to represent the Internet by network engineers and means 'outsourcing'
  2. Cloud is a business model and must be delivered as a public utility
  3. Implied: clouds cannot be 'private' and owned by a single entity
Understanding the importance of private clouds is important, because the cloud computing model (like the client/server computing model before it) is about **how **IT works, not **where** it works. Let's address each part of the “no such thing as an (internal) private cloud” myth. 

**![simple-cloud]({{ site.url }}/assets/media/2010/01/simple-cloud-300x146.png)**

**The Cloud Picture ** I can say with 100% certainty that cloud pictures were used for much more than the Internet in the early 90s when the commercial Internet was forming. I know this because I was a network engineer.  My peers and I used clouds to represent any 'autonomous system' or group of such in a routing architecture.  It was a convenience mechanism to simplify network diagrams. One example was using it to represent a large **private** wide area network (WAN), consisting of Frame Relay circuits or T-1s.  A cloud was also frequently used to represent the entire public switched telephone network (PSTN) or even, at times, entire groups of internal enterprise datacenters & networks. One of my colleagues at Cloudscaling who is also a network engineering expert says: 

* * *

_Clouds are also commonly used for exchange points like MAE-West, other geographies like ‘China’, security zones like ‘DMZ’, parallel networks like ‘Out of Band’, obfuscation networks like ‘Tor’ and layer 2 distinctions. In fact, the entire idea underlying TCP/IP and OSI models is the idea of abstraction and simplification which is what a cloud indicates. Anybody who thinks cloud equals Internet exclusively is misguided_ — Adam Waters, COO, Cloudscaling (Internet2, Level3, iAsiaworks, Calren) 

* * *

The assertion that a cloud was used to exclusively represent the Internet is based on two things: a lack of understanding of network & Internet engineering history and the fact that in every network diagram there was inevitably a cloud with an "Internet" label.  The reason for this is that whenever you created a diagram you were required to show where your Internet connection was, but you weren't always required to show other WANs, the PSTN, etc. Want more?  Here are three of the first page of network diagrams that came up on a Google image search for ‘network diagram’: [1](http://www.conceptdraw.com/products/img/cd5/article/part2/ActiveDir_4.jpg), [2](http://www.webvisions.co.in/services/network-diagram-small.gif), [3](http://www.nxicom.com/documents/Tech%20Notes/NTS%20Typical%20Architecture%20Diagram.jpg).  As you will see there is liberal usage of the cloud picture for purposes other than representing the Internet.  Many of these clouds also represent 'private' areas of the network. Without the historical context, it is understandable how one could conclude that the term “the cloud” was used as another term for "The Internet”. **Clouds Are Shared Infrastructure, not Utilities ** Let’s explore the “utility” concept outside the context of the IT function[3]. A common definition of a 'utility' amongst cloud pundits today is: _a shared infrastructure with metered usage, which has a pay-as-you-go model_. An example of a non-IT utility is power companies like Pacific Gas & Electric (PG&E) which are energy utilities.  [Nick Carr](http://www.roughtype.com/)'s famous books, [Does IT Matter?](http://www.amazon.com/exec/obidos/ASIN/1591394449/amazingbooks0b0) and [The Big Switch](http://www.amazon.com/exec/obidos/ASIN/0393062287/amazingbooks0b0) extensively examine the concept of shared infrastructures leading to the rise of utility computing. Nick posits that all shared infrastructures, including roads, telegraph, the national air system, railroad system, electrical system, and gas system, are utilities.  Do you think of a road as a utility?  What about the air traffic control system?  I don’t and neither does Wikipedia nor is that term used commonly.  A public utility is “a company that performs a public service; subject to government regulation” according to [WordNet](http://wordnetweb.princeton.edu/perl/webwn?o2=&o0=1&o7=&o5=&o1=1&o6=&o4=&o3=&s=public+utility).  In other words, a utility is a for-profit entity entrusted to perform an important public function and is commonly regulated. There is a common notion in the discussion of cloud today, which is that "utility" or “utility billing” is a financial arrangement where usage is “metered” and you “pay-as-you-go”, paying only for actual consumption.  This idea comes directly from the way true public utilities such as water, gas, electricity, and telecommunications operate.  These are all systems we commonly consider to be utilities. But other shared infrastructures do not use the utility billing model.  Certainly, some roads have tolls, but the bulk of roadways are paid for with public money and are unmetered.  The railroad system is not metered.  Neither is air travel.  You do not 'pay-as-you-go.'  While these systems aren’t labeled as ‘utilities’, Nick Carr lumps them into the same bucket. It might be heresy, but I think there are essentially two big buckets: shared infrastructure and utilities.  Public utilities are a subset of shared infrastructure as is illustrated in the Venn diagram below. 

![venn-diagram-shared-infra-public-utilities]({{ site.url }}/assets/media/2010/01/venn-diagram-shared-infra-public-utilities-300x300.png)

**Infrastructure Can Be a Public Utility OR a Private Shared Infrastructure**

## Comments

**[Jeff Darcy](#445 "2010-01-19 09:55:50"):** Agreed, Randy. I just re-checked my list of essential cloud characteristics, and NIST's, and a few others. As far as I can tell, none of them preclude private clouds. It's semi-reasonable to say that public clouds are the best kind, or that they'll become the dominant kind, etc., but IMO it's not at all reasonable to say that they're the only kind.

**[Parcels](#446 "2010-01-19 11:17:24"):** I work for a relatively large business's internal IT department. We still use the 'cloud' icons we used back in the mid 90's. This is not because we're necessarily behind the times but more that this is what our internal customers understand. It will change but for now these images are what make sense to these guys who don't know much about IT.

**[randybias](#447 "2010-01-19 12:19:37"):** Thanks for your comment, Jeff. I am glad my central point came through for you.

**[Tom Benson, Yahoo Cloud](#450 "2010-01-24 19:26:24"):** Agree completely. The "transition" you describe (to private clouds) will be a profound operational change for big web organizations. The act of changing over from existing legacy infrastructure to virtualized cloud infrastructure, is, by itself, a big thing. The cost savings will be big enough, but the improvements in speed of deployments and easier support of legacy applications will be just as important.

**[D Kennedy](#451 "2010-01-28 10:26:17"):** Private clouds can certainly be built and used by anyone with the resources to do so. But the benefits that make cloud compelling derive from large scale. Very large data centers may be well served by setting up internal clouds, but SMBs are better off using a cloud service provider and sticking to their core competencies. [www.cloudtp.com](http://www.cloudtp.com)

**[zestinfotech](#452 "2010-02-01 00:04:49"):** Nice and informative article. Thanks

**[Canvas Stretching Machine](#454 "2010-03-19 02:47:59"):** very informative...

**[RV](#455 "2010-03-23 21:27:37"):** yup this is such a worth reading material...

**[Kia](#457 "2010-07-10 07:50:39"):** Very good awakening article for me....thks! One question- can u share more on the financial model for private cloud based on your comment above

**[randybias](#458 "2010-07-11 11:21:47"):** I will providing more information on the financial models around clouds over the next 6 months at various conferences and on the blog. Please stay tuned.

**[Rick Parker](#459 "2010-07-12 21:46:47"):** Private clouds exist. I know because I have been running them for about 3 years now.   
[http://www.networkworld.com/news/2008/012908-be...](http://www.networkworld.com/news/2008/012908-bedouin.html)  
  
I used what I learned setting up Bedouin for my current company and a private cloud is cost effectivce even for small companies if you know what you are doing. It's a combination of vmware virtual infrastructure, SAN storage and Platform ISF cloud management software.   
Just because most people think it can't be done does not mean it cant be, I know it works because I have done it and more than once.

**[My Homepage](#1173 "2012-12-21 11:45:37"):** **... [Trackback]...** [...] Informations on that Topic: cloudscaling.com/blog/cloud-computing/debunking-the-no-such-thing-as-a-private-cloud-myth/ [...]...

**[Obdurodon](#2148 "2010-01-19 10:55:00"):** Agreed, Randy. I just re-checked my list of essential cloud characteristics, and NIST's, and a few others. As far as I can tell, none of them preclude private clouds. It's semi-reasonable to say that public clouds are the best kind, or that they'll become the dominant kind, etc., but IMO it's not at all reasonable to say that they're the only kind.

**[Parcels](#2149 "2010-01-19 12:17:00"):** I work for a relatively large business's internal IT department. We still use the 'cloud' icons we used back in the mid 90's. This is not because we're necessarily behind the times but more that this is what our internal customers understand. It will change but for now these images are what make sense to these guys who don't know much about IT.

**[randybias](#2150 "2010-01-19 13:19:00"):** Thanks for your comment, Jeff. I am glad my central point came through for you.

**[Tom Benson, Yahoo Cloud](#2152 "2010-01-24 20:26:00"):** Agree completely. The "transition" you describe (to private clouds) will be a profound operational change for big web organizations. The act of changing over from existing legacy infrastructure to virtualized cloud infrastructure, is, by itself, a big thing. The cost savings will be big enough, but the improvements in speed of deployments and easier support of legacy applications will be just as important.

**[D Kennedy](#2153 "2010-01-28 11:26:00"):** Private clouds can certainly be built and used by anyone with the resources to do so. But the benefits that make cloud compelling derive from large scale. Very large data centers may be well served by setting up internal clouds, but SMBs are better off using a cloud service provider and sticking to their core competencies. www.cloudtp.com

**[zestinfotech](#2156 "2010-02-01 01:04:00"):** Nice and informative article. Thanks

**[Canvas Stretching Machine](#2176 "2010-03-19 02:47:00"):** very informative...

**[data recovery](#2200 "2010-05-26 02:58:00"):** Still cloud computing is not clear for me though I read this blog 2 times.

**[Kia](#2253 "2010-07-10 07:50:00"):** Very good awakening article for me....thks! One question- can u share more on the financial model for private cloud based on your comment above

**[randybias](#2254 "2010-07-11 11:21:00"):** I will providing more information on the financial models around clouds over the next 6 months at various conferences and on the blog. Please stay tuned.

**[Rick Parker](#2257 "2010-07-12 21:46:00"):** Private clouds exist. I know because I have been running them for about 3 years now. http://www.networkworld.com/news/2008/012908-bedouin.html I used what I learned setting up Bedouin for my current company and a private cloud is cost effectivce even for small companies if you know what you are doing. It's a combination of vmware virtual infrastructure, SAN storage and Platform ISF cloud management software. Just because most people think it can't be done does not mean it cant be, I know it works because I have done it and more than once.

