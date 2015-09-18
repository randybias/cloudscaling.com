---
author: su
comments: true
date: 2009-04-28 22:24:19+00:00
layout: post
slug: the-open-cloud-is-coming
title: The "Open" Cloud is Coming
wordpress_id: 2400
old_categories:
- Cloud Computing
- Technology
tags:
- cloud
- GoGrid
- infrastructure
- open
- standards
---

The rhetoric from open source pundits about the 'closed' cloud has already started.  From [Richard Stallman](http://www.guardian.co.uk/technology/2008/sep/29/cloud.computing.richard.stallman) to [others](http://www.geek.com/articles/news/fourteen-universities-to-study-cloud-computing-with-5m-grant-20090427/) there has been [nay-saying](http://www.maya.com/the-feed/the-wrong-cloud) related to the cloud being ultimately closed and proprietary.  This is a fundamentally misguided understanding.

Where ever you stand on 'free markets', there is no doubt that market forces play a major role in technology adoption.  In this case it means that not only can cloud computing be open.  It **will** be open because of market pressures.

**Open Source and Market Forces**
Without a doubt open source has benefited from market forces, becoming widely embraced.  For many (e.g. startups) the cost economics were too compelling.  Others (e.g. Google) reaped both the benefits of cost economics and the openness of the source code itself.  Certainly even those companies who embraced open source for the ability to see the source code first and foremost were looking at it with an eye towards saving money elsewhere, not from ideology.

Market forces that drive open source are the same as those that drove the opening of Internet walled gardens.

**Walled Gardens, Market Forces, & Democracy**
The openness of the Internet is certainly not in doubt.  Despite [ongoing attempts](http://en.wikipedia.org/wiki/Net_Neutrality#Legal_situation) by providers to profit by selling a better quality of service to those with bigger pocket books, [Net Neutrality](http://en.wikipedia.org/wiki/Net_Neutrality) advocates regularly stymie their efforts[1].  When large publishing sites and newspapers have closed off their access they are largely [scorned](http://www.nytimes.com/2007/09/18/business/media/18times.html) by the individual Internet user.  Back in the day, we used to paraphrase [John Gilmore](http://en.wikiquote.org/wiki/John_Gilmore) saying: 'the Internet routes around censorship, problems, or politics.'  Meaning that, like the network protocol (TCP/IP) upon which it is based, the Internet is largely immune to efforts to disrupt it.

Why is this and what are market forces really?  'Market forces' are the effect of **people** voting with their wallets.  People want open, cheap, and accessible on the Internet.  It's been proven over and over countless times now.  Internet-based [walled gardens](http://en.wikipedia.org/wiki/Walled_garden_(technology)) will eventually fail with few exceptions.[2]

_Cloud computing is no exception.  _It's got to be open, cheap, and accessible.

**Opening of the Cloud**
It's very easy to see the current advent of cloud computing as being closed.  It is.  Historically most new Internet markets and technologies are closed until they mature.  The cycle can be described as:



	
  1. A new Internet market/technology starts as closed and proprietary

	
  2. Under pressure in a high growth market it begins to open

	
  3. When market or technology matures many of the technologies are 'open' or 'open enough'


Consider for a moment the now standard [x86](http://en.wikipedia.org/wiki/X86) processor [instruction set](http://en.wikipedia.org/wiki/Instruction_set_architecture), the [SQL](http://en.wikipedia.org/wiki/SQL) relational database interface, or the [availability of APIs](http://code.google.com/apis/gdata/) for just about every Google service.

Already there are the inklings of people working on concrete standards including ones for cloud computing infrastructure (Open Cloud Computing Interface ([OCCI)](http://www.occi-wg.org/doku.php) a working group of the Open Grid Foundation (OGF)) and the portability of virtual machines (Open Virtualization Format ([OVF](http://en.wikipedia.org/wiki/Open_Virtualization_Format))).  Once these standards are finished and embraced by even a few clouds many customers will opt to choose cloud providers that use them, avoiding vendor lock-in and give choice to customers.

**Clouds are not Software**
Being 'open' means something different for Internet-based services, such as cloud computing, than it does for software.  The essence of cloud computing is that you are renting resources from someone else.  This is powerful and provides tremendous advantages to the customer.  It's also no different now than it was when it was calling '[hosting](http://en.wikipedia.org/wiki/Dedicated_hosting_service)'.  The very nature of this kind of offering is that customers won't have 100% control.  Someone has to run and maintain the system that you are renting in a professional fashion and retains control ... **up to a point**.

**Open Cloud Services?**
Where are the points of 'openness' for Platform-as-a-Service ([PaaS](http://en.wikipedia.org/wiki/PaaS)) and Infrastructure-as-a-Service ([IaaS](http://en.wikipedia.org/wiki/IaaS)) businesses?  It's fairly simple to assess this.  What is 'open enough' to allow you to take your application and move it from one PaaS or IaaS provider to another?  Some obvious points come to mind:



	
  * Data & code portability

	
  * Widely available programming languages and libraries

	
  * Interoperability through widely embraced and supported APIs

	
  * You 'own' _it_ and can take _it_ with you


Where '_it_' is your web application (PaaS), virtual server (IaaS), and data.  Vendor lock-in comes from disallowing you to leave and take your data, tools, or software with you.

**Platform Lock-in**
If we were to measure PaaS providers like Salesforce.com's [Force.com](http://www.force.com), [Google App Engine](http://appengine.google.com) (GAE), and [Heroku](http://www.heroku.com) they might be graded as follows:



	
  * Force.com:  'D-'

	
  * GAE: 'C'

	
  * Heroku: 'A'


Force.com creates extreme lock-in via its closed proprietary language [Apex](http://wiki.developerforce.com/index.php/Apex_Code:_The_World's_First_On-Demand_Programming_Language) that is unavailable outside their service.  GAE a bit less so as it supports widely available languages such as Java and Python.  On the flip side, in order to leverage GAE in a meaningful manner you must use Google proprietary libraries and technology to access [BigTable](http://en.wikipedia.org/wiki/BigTable) instead of a traditional database.  Heroku comes out smelling like roses allowing you to use a widely available language like Ruby with little or no modifications.

**Infrastructure Lock-in**
Unlike PaaS providers, infrastructure services do not dictate languages or libraries, meaning that there is even less areas for them to lock you in.  By providing a basic building block of a '[virtual machine](http://en.wikipedia.org/wiki/Virtual_machine) image' IaaS providers allow customers to 'own' and 'control' their servers.  Even now, the 800lb gorilla of cloud computing, Amazon Web Services, allows you to [download](http://blog.layerboom.com/2008/10/03/how-to-move-servers-between-xen-and-amazon/) their Amazon Machine Images (AMI).  You can download one now and run it on your own infrastructure.  You **can** take it with you.

The primary way in which infrastructure providers create lock-in is twofold.  First  by using a proprietary API that is not widely adopted and second by disallowing portability of virtual machine images.

Once tools are written for a closed API you'll get little or no reuse of those tools.  This is why folks like [GoGrid](http://www.gogrid.com), my employer, and our competitors are actively working together to create an open API for controlling IaaS systems.  As part of that discussion we're also actively working on supporting standards like OVF that allow virtual machine image portability across hypervisors and clouds.[3]

If you were to grade a bunch of us today, however, it wouldn't be bad, but it could be better:



	
  * VMware vCloud/vSphere: 'C-'

	
  * GoGrid: 'C-'

	
  * Amazon: 'C-'


You might score these differently, but for me VMware gets marks for widely adopted APIs, but demerits for dragging their feet on standards they helped create like OVF and being missing from conversations like the OCCI effort.  GoGrid has an open license on our API, but doesn't allow downloading or uploading virtual machine images [4].  Amazon has widely adopted APIs, but under ambiguous licenses and quite a few proprietary technologies (e.g. S3, SimpleDB, and SQS) that encourage lock-in.

The good news is that standards for cloud interoperability (OCCI) and virtual machine portability (OVF) are either here or imminent and many providers are planning to adopt them.

**Summing Up 'Open Services'**
It means something different to be an 'Open Service'.  We all want to be able to export and move our applications from Google App Engine or Force.com when we leave.  We also want to take the virtual machine images that we build on Amazon or GoGrid and move them elsewhere.  Today we  can, but it's just a nuisance.  New standards will make interoperability and portability easy and convenient. If anything, cloud computing is becoming 'open' faster than anything before it.

Ignore the naysayers.  Customers want choice and they will have it.  Choice is driven by open standards, cheap resources, and easy 'self-service' access.

The 'market' demands it. 

 



* * *

[1]  Yes the battle isn't over, but there is clear and unrelenting demand for Net Neutrality.
[2]  If in doubt compare the relative approaches of MySpace and Facebook.  Facebook, in opening it's platform, was able to make a [come-from-behind](http://blog.compete.com/2009/02/26/facebook-myspace/) 'win' because of this.  It's uncommon that the #2 player in a given market/space will blow past the #1 so quickly.  It's largely due to Facebook opening their platform.
[3] The differences between virtual machines running on different hypervisors is much smaller than people think.
[4] It's on the roadmap.
