---
title: 'Private Clouds Matter'
link: http://cloudscaling.com/blog/cloud-computing/private-clouds-matter/
author: randybias
description: 
post_id: 2411
created: 2009/06/04 09:00:27
created_gmt: 2009/06/04 16:00:27
comment_status: open
post_name: private-clouds-matter
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Private Clouds Matter

Some folks think that there is no such thing as a 'private' cloud.  By definition all clouds are public.  Unfortunately, some times the confusion is around whether a cloud exists internally or externally rather than if it's public or private.  Yet, even in the case where this confusion doesn't exist, the notion of a private cloud is sound.  What it means is that there is value in cloud technologies being deployed behind the firewall in a corporate environment.  Why is this? It's because _cloud computing provides it's primary value through __[self-service_](/blog/cloud-computing/clouds-are-inherently-self-service). **Enterprise IT, Utilization Rates, Hoarding and the Procurement Nightmare** Today's average enterprise IT shop has arcane interfaces for getting help, usually through some kind of help desk ticketing system.  I once saw the ticketing systems for Microsoft.  There were at least 4 or 5 different systems and it was never clear which one to start with.  This is a very common issue. Combined with procurement times that some times reach into the 6 month range, any request to get your own IT infrastructure can become a show stopper for your department's project.  Even virtual machine requests can take days to weeks as there is usually no self-service method and if there was, no usage metrics or charge back mechanisms exist. Typically this leads to hoarding where departments and managers purchase far more than they need to make sure resources are available when needed.  Is it any wonder that the recent [McKinsey cloud computing report](http://uptimeinstitute.org/content/view/353/319) predicts that even with virtualization enterprise datacenters can't exceed 39% utilization? **Internal or Private, It Matters** The CIO must learn how to drive new efficiencies into corporate datacenters while showing how IT can provide direct business value.  The primary strategy, despite McKinsey's bleak assessment, is to embrace the notion of _self-service_, preferably in the form of internal cloud computing resources. This is the future.  This is the way to make IT the corporate star instead of the corporate cost center.

## Comments

**[Chris Marino](#137 "2009-06-04 10:16:08"):** Yes, but......I was talking to someone this week and they described their product as 'PaaS for Private Clouds'. They said that they were providing an alternative to [Force.com](http://Force.com) for people that didn't want their data outside their firewall.....  
  
I fully understand the desire not to run things or have your data on [Force.com](http://Force.com), however, security issues aside, I'm wondering about the legitimacy of this approach, and more broadly, the fundamental premise. Does 'PaaS for Private Clouds' even make sense?  
  
Separate topic, but it relates to your previous post on 'Service Clouds'.  
  
I'm not sure how you can really differentiate PaaS for private clouds from IaaS for private clouds? If I'm writing my own code (a defining characterisic of PaaS) and want to run it on a private cloud (a legitimate deployment requirement), why not use my familiar toolchain, build some VMs, and deploy them on an IaaS platform internaly?  
  
That way you'd get the benefits of the cloud (elasticity, self-service, etc., provided by the IaaS framework), without being locked in to a specific language and/or constrained by whatever sandboxing that might be required for PaaS?

**[randybias](#138 "2009-06-04 10:40:36"):** That's a great observation, Chris. I think the reason folks want PaaS for private clouds is again this notion of self-service. Enterprise businesses will need both PaaS and IaaS for their internal customers.  
  
Many internal development projects will simply need 'load-your-code-and-go' PaaS options. This is the lowest friction, highest value of 'self-service' for them.  
  
Others, like QA teams, will need to model more specific kinds of infrastructure and topologies, requiring more customization and only IaaS will do.  
  
With regards to PaaS for the private cloud, you have hit on an important notion. Successful PaaS providers for the enterprise are going to provide choice to the end-user. It's going to be important for those PaaS offerings to use the pre-existing toolchains or something very similar where possible. Someone to watch in this space in particular is EngineYard who's Solo and Flex offerings are more of a PaaS self-service portal, returning choice to Ruby-on-Rails developers who want their internal PaaS to look like pre-existing tooling.

**[Ray](#139 "2009-06-04 13:22:10"):** Randy, who is the customer for this type of self service? Would it be other IT groups? If so this makes some sense. Would it be the business? Makes less sense as they would need an entire app not just automated infrastructure. Now if you had VMs with canned apps like Jira or Sugar or XYZ open source app I could start to see that as a value add.  
  
Ray

**[scott_hammond](#140 "2009-06-04 14:32:30"):** Self-service is key, but you also need to address the rest of the policies that create delays in ordering new VM's. First, the consumer needs to know what to order. The specification/design/configuration phase can be painstaking with today's manual processes and reviews with each of the towers. A service catalog can be used to specify all relevant attributes (price, performance, availability, DR, security, storage, data center services, etc.) of each of the standard machines so the requester can quickly compare their requirements to the available choices and select the correct machine(s). The next hurdle is getting the machine approved. By automating the approval process you can shorten the time to get clearance from the interested parties and enforce compliance with corporate policies and procedures on security, IP protection, financial controls, and other matters that are required to deliver secure, reliable, scalable, cost-effective infrastructure. You also need to enforce financial controls and lease terms to reduce sprawl. You should also capture the business context so the ops team knows what the machines are being used for and can support them appropriately.  
  
Lots more thoughts behind this but the key issue is self-service is critical but you also need a comparative shopping experience, controls, and governance to accelerate the adoption of this low cost utility model. Without these the virtual environment is not cost effective, people will request the wrong things really quickly, and it will jeopardize the security of data.

**[randybias](#141 "2009-06-04 22:00:01"):** Ray, you're right, but it doesn't matter. The internal IT folks will need to deploy PaaS platforms to service the developers and web apps for the business users. We're still talking about self-service regardless of whether it's infrastructure, platforms, or applications.  
  
And you're exactly right re: canned apps. We'll start seeing much broader adoption of the kinds of pre-canned apps-in-a-VM like those from VMware's VMA, rPath, Jumpbox, and CohesiveFT. This will be especially compelling once the market matures and image management systems get better.

**[randybias](#142 "2009-06-04 22:05:50"):** Scott, thanks for your comment. I agree with the general thrust of your point, but I'm a little confused. I think what you are saying is that by using a service catalog combined with policy-based decisions you can optimize the self-service experience while also providing governance.  
  
Is that right? If so, it makes perfect sense to me. I would consider all of that part of making the cloud self-service. Self-service is about reducing friction. What you describe further builds upon self-service.

**[scott_hammond](#143 "2009-06-04 22:30:05"):** Yes, I like your emphasis on self-service and reducing friction. I am expanding that point to include a rich comparative catalog experience to further reduce friction and adding the controls and governance required to protect the corporate assets. Doing the wrong thing quickly doesn't help.

**[David Chow](#144 "2009-06-09 20:35:16"):** I think cloud computing is only a broad term which stands for:  
  
'A computing methodology where it's based on the Internet, whereas, other key elements like Web 2.0, Software as a Service (SaaS), Data as a Service (DaaS) and Infrastructure as a Service (IaaS) supporting this concept' (Shaw & Evans 2009).  
  
It's private or not, doesn't matter at all. As long as CIO could make good use of this technology, develop a sustainable ICT strategy to cope with company's visions and missions does matter.  
  
ICT strategy matters all.  
  
Reference: Shaw, J & Evans, S 2009, Pro ADO.NET Data Services-Working with RESTful Data, Apress, US.

