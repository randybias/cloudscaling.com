---
title: 'VMware vs. Amazon ... ROUND TWO ... FIGHT! — VMW Conceding Impotence?'
link: http://cloudscaling.com/blog/cloud-computing/vmware-vs-amazon-round-two-fight-vmw-conceding-impotence/
author: Randy Bias
description: 
post_id: 5776
created: 2013/03/04 10:14:31
created_gmt: 2013/03/04 18:14:31
comment_status: open
post_name: vmware-vs-amazon-round-two-fight-vmw-conceding-impotence
status: publish
post_type: post
layout: post
category: cloud-computing
---

# VMware vs. Amazon ... ROUND TWO ... FIGHT! — VMW Conceding Impotence?

Two and a half years ago I wrote about the inevitable throwdown between VMware and Amazon Web Services (AWS), but recently VMware’s senior leadership appeared to [outright admit defeat](http://www.crn.com/news/cloud/240149626/vmware-top-execs-lash-out-at-amazon-public-cloud.htm).  The message to VMware’s partners was simple:

> "We want to own corporate workload," said Pat Gelsinger, VMware’s CEO. "We all lose if they end up in these commodity public clouds.”

James Staten, who has lately been on an incredible roll in terms of his vision and foresight in recent [research on cloud computing](http://www.forrester.com/The+Rise+Of+The+New+Cloud+Admin/fulltext/-/E-RES86901) (paid research), nailed it in a cogent [response on his blog](http://blogs.forrester.com/james_staten/13-02-28-the_vmware_community_has_the_innovators_dilemma).  
  
I want to fill in some of the gaps.  
  
**Background**  
At various times since pretty close to the inception of cloud computing, I have engaged with the leadership at VMware and explained what is required to help them maintain dominance.  Unfortunately, on all these occasions I was rebuffed.  VMW’s hubris is to believe that their lead in enterprise virtualization will translate into success in the public cloud space.  Other voices have since joined mine in making this point, yet Gelsinger’s recent admittal at the partner conference is nothing less than a public statement of VMware’s impotence in this regard.  
  
Simply put, VMware does not understand what is required to win in the public cloud space nor are they willing to listen to those who do.

  
  
**The Emperor Has No Clothes**  
VMware’s failure to ‘get it’ stems, classically, from [The Innovator’s Dilemma](http://www.claytonchristensen.com/), as Staten so righteously points out in his blog post.  In this case, their value chain of partners and technology has simply kept them from being effective in managing the transition in what is clearly a disruptive upheaval to their business.  
  
At Cloudscaling, I coined the phrase: “the two cloud model” which is at the heart of the disconnect.  Our product manager, Azmir Mohamed, put this into words and graphics in this [blog posting](http://www.cloudscaling.com/blog/cloud-computing/elastic-infrastructure-down-from-the-clouds/).  
  
Put more plainly, there is the way that cloud pioneers like Amazon and Google built their clouds and there is the way that VMware asks people to build clouds.  These are not the same in any manner.  The datacenter design, hardware, hardware architectures, network, networking architectures, software, software architectures, and applications, are all fundamentally different.  
  
**Enterprise Virtualization is the ASP Business Model Redux**  
In 1999 there were two competing business models: Application Service Providers (ASP) and Software-as-a-Service (SaaS).  The ASP model lost and SaaS won.  Why is that?  
  
A quick glance at a representative [1999 press release](http://news.centurylink.com/index.php?s=43&item=1797) from Oracle and Qwest at the time will tell you everything you need to know.  The ASP business model essentially said: “We’re going to use the same hardware, same software, and same labor pool as you.  We’re going to add a margin, own all of the hardware and software, and keep the entire bundle in our datacenter.  You’ll have your own isolated Sun server running Oracle software that you can access over the network.”  
  
It was in truth, a pure outsourcing play.  This model, of course, lost horribly to the likes of Salesforce.com (SFDC), the canonical SaaS company, who defined the category.  SFDC won because they rethought the entire stack: hardware, software, datacenters, labor pool, and business delivery model (signup with a credit card).  
  
Does that sound familiar?  That’s because it’s the exact same playbook as Amazon Web Services (AWS).  
  
Enterprise public clouds built to look like enterprise datacenters are operating at a significant competitive disadvantage to AWS.  They aren’t elastic clouds, but something else.  These enterprise public clouds are pure outsourcing plays that can’t ever be successful as long as they are designed, built and delivered the way they are today.  
  
So it’s a complete loss, right?  AWS has won?  Not so fast...  
  
**The Elastic Cloud Model for Enterprises**  
The advice I gave to VMW on many an occasion was to build like Amazon.  The reality of the situation is that unlike Salesforce.com (SFDC), much of what Amazon has built is easily reproducible and difficult to protect.  Certainly, higher level services such as DynamoDB would be hard or even impossible to duplicate, but the reality of the situation is that 90%+ of Amazon’s revenues come from just a handful of lower level services:

  * Elastic Cloud Computing (EC2)
  * Elastic Block Storage (EBS)
  * Simple Storage Service (S3)
  * Virtual Private Cloud (VPC)

This list of capabilities is easily reproduced unlike the difficulties with reproducing something proprietary like the SFDC CRM application.  In fact, three of the four are available in [Open Cloud System](http://www.cloudscaling.com/ocs-system-overview/) today, faithfully reproduced using [OpenStack](http://www.openstack.org/) as a core technology.

  
More importantly, enterprises can get these capabilities both outside and inside the firewall, which was not true for SFDC’s application.  This means that true hybrid cloud solutions are possible using the elastic cloud model.  
  
**VMware’s Missed Opportunity & How to Fix It**  
Why then, is VMware concerned about the flight of enterprise workloads to Amazon?  The concern is because they can see that enterprise virtualization clouds are like the ASP model and have a very short shelf life.  Enterprises need a different kind of cloud.  An elastic cloud.  Unfortunately, VMware’s key technologies don’t allow you to build an elastic cloud based on VMware.  
  
Why not?  
  
There are four key areas of de facto or explicit restriction:_  
_

  1. VMware best practices, hardware compatibility lists, and reference architectures all focus on legacy scale-up, gold-plated approaches that needlessly increase costs.
  2. The VMW end-user license agreement (EULA) disallows the use of any other technology for managing their hypervisor (ESX/ESXi), particularly for hosting providers. You must deploy vCenter, vSphere, and vCloud, and the like.
  3. VMW’s current business model and revenue stream is dependent on selling the more expensive enterprise licenses that focus on technology irrelevant to an elastic cloud such as DRS, HA, and similar.
  4. The vCloud API is too focused on enterprise virtualization use cases (e.g. the whole vApp mess).

 

As [Massimo Re Ferre’](http://it20.info/) of the VMware vCloud team has said before (apologies, I can’t find the exact article), it is possible to build a less expensive VMware-based cloud.  The cost of the hypervisor licensing itself is not the problem.  The problem is that a less expensive VMware cloud has none of the advanced capabilities desired by enterprise customers looking to outsource.  It also has none of the capabilities of an elastic cloud and does not look like AWS.  More importantly, VMW best practices and reference architectures will drive you towards hardware that is not as performant and storage and networking architectures that make no sense in an elastic cloud model.  
  
VMW can’t unlock the ability to build elastic clouds on ESX until it stops insisting that its own management stack is in use to manage ESX/ESXi.  Period.  Full stop.  
  
**Bringing it Home**  
Dear VMware, here’s what to do, although it may be too late:

  * Remove the EULA restrictions
  * Work with nimble startups that understand elastic cloud, like Cloudscaling
  * Focus on OpenStack as the next generation management technology
  * Aim for the elastic cloud model sans vCenter, vSphere, and vCloud director

If you do this, you will bridge the gap, cross the chasm, etc.  If you do not, we’ll be looking at a followup to this posting in 2014-2015 when Amazon’s incredible growth rate will begin to significantly impact your bottom line.  
  
Right now it’s looking like it’s going to be 3-0 Amazon.

## Comments

**[Richard Nicholson](#3870 "2013-03-05 01:44:00"):** Good article. However I think the vendors are fighting over how the world is today - not how it will be real soon now. The dynamic assembly of environment aware modular applications SEVERELY limits the value of any sort of 'virtual machine'.  As a good friend of mine said over coffee recently. Virtual Machines have simply been a distraction. They do not address fundamental issues. This change will impact Amazon and VMW - though VMW more so - as their whole value chain could simply - diss-assemble before them.

**[Ewan Leith](#3871 "2013-03-05 01:49:00"):** Interesting thoughts, but I suspect it's far too late for VMware to remove the EULA restrictions (which you're right, are stupid) and expect people to adopt ESXi for clouds - KVM has developed too far, and is developing new capabilities so quickly that ESXi itself is looking more likely to be the legacy piece that VMware drops, rather than opening it uip.

**[Mike Fishman](#3872 "2013-03-05 06:35:00"):** Virtualization, a key aspect of the software defined data center was Phase 1.  Hardware abstraction is essentially only one aspect of the SDDC.  The next secrets lie in the elasticity, in the security and in the ease-of-consumption.  He who makes it easiest, safest and scalable wins. - Watch as I help this tangled mess unravel @mike_fishman:twitter

**[rn82497](#3873 "2013-03-05 08:26:00"):** Still thinking about it the wrong way. Applications should be agile and rapidly adapt to the resource landscape - not the other way round. SDDC has a niche but - is a minor component of the overall solution. IMO. :)

**[randybias](#3874 "2013-03-05 08:43:00"):** I agree that it's possibly too little too late if VMW would even consider it, but I haven't seen any signs of life in this regard, so I doubt it's even on the table. Perhaps more importantly, as you rightly identified, is that their closed system approach in ESXi looks even more short-sighted now.  ESX, in this regard, has significantly more potential in that it has a real operating system and toolchain running in the console operating system (COS aka 'service console'). VMW would need to change the EULA and elevate ESX over ESXi, which is now too impaired to be effective. Is KVM so far ahead of ESX that it can't compete?  I think it's still a horse race, but I don't think it will be for long. Three of the Platinum spots of the OpenStack foundation are RedHat, SUSE, and Canonical, all of whom have long term vested interests in KVM being dominant, while VMW is the only one at the table able to innovate around their closed ESX ecosystem.

**[randybias](#3875 "2013-03-05 08:48:00"):** Richard, I agree that the discussion around on-demand VMs can be a distraction and I've addressed it previously here: http://www.cloudscaling.com/blog/cloud-computing/virtualization-is-not-the-answer-for-clouds/ And here: http://www.cloudscaling.com/blog/cloud-computing/the-evolution-of-it-towards-cloud-computing-vmworld/ My focus is infrastructure so I have not been as prolific in writing about the application stacks. While I agree with the general thrust of your comment, the reality is that virtual machines are here to stay for a good long while.  This is mostly because the application building blocks required to build true scale-out multi-core distribution applications is still far away.  PaaS, Big Data, and other similar tools promise that we will get developers further faster, but it's unlikely that the existing application tool chain will keep pace (at the moment) with the rate of hardware increases. VMs, in that environment, simply become a convenient way to slice and dice hardware, given that most tenant applications can't consume an entire physical server's worth of resources.

**[randybias](#3876 "2013-03-05 08:55:00"):** Mike, thanks for your comment.  I addressed the issue of virtualization many moons ago here: http://www.cloudscaling.com/blog/cloud-computing/virtualization-is-not-the-answer-for-clouds/ And here: http://www.cloudscaling.com/blog/cloud-computing/the-evolution-of-it-towards-cloud-computing-vmworld/ This second link in particular, goes into a lot more detail around our view on cloud computing. While I think the ideas around SDDC are sound, it's still a marketing term out ahead of itself.  SDN hasn't provoked a huge wave of adoption and software-defined anything has the same fundamental adoption blockers as general cloud computing does inside the enterprise. Namely, adoption of SDDC, SDN, or building clouds a la Amazon and Google, requires a pretty aggressive re-think of existing IT practices.  It requires homogeneous servers, systems thinking, layer-cake SOAs, and consideration of economies of scale. ALL of this is so new and requires such a different way of thinking for a typical enterprise IT infrastructure team that it is hard to see change happening any time soon.  Meantime, the bleeding of shadow IT will continue apace to large public cloud providers. The only chance I see is if a vendor can provide a boxed solution (so to speak) that allows enterprises to get most of the advantages of a large public cloud provider in a single system-based solution. Next generation systems companies, like Cloudscaling, are building systems very differently from legacy systems companies like EMC.  While integrated, the entire stack is 'open' and 'elastic' in a way that traditional systems companies are not. And therein lies the difference.

**[rn82497](#3877 "2013-03-05 08:59:00"):** Randy - I agreed VM's are not going away. They've just been a huge distraction. As you say - they are a useful for slice physical resource. And that's about it. ;)  I'm in the 'modularity' / dynamic assembly camp. The OSGi community have made progress on tooling - see bndtools. There is still more to do though. Again - nice article. Thank you.

**[Ewan Leith](#3878 "2013-03-05 09:07:00"):** I don't think it's necessarily that KVM is that far ahead today, just that it's now got a critical mass of developers from various organisations (Red Hat, IBM, Intel, etc), who would have little or no motivation to put the effort in to switch to contributing to ESX (or ESXi for that matter), and their contributions are going to push it further ahead. If KVM and Xen still lacked critical features, then there'd be more of a chance, but let's face it - a fraction of VMW's customers make use of the full functionality of vSphere 5 (Fault Tolerance is the obvious one that works brilliantly, but is not used that much).

**[randybias](#3879 "2013-03-05 09:37:00"):** Agreed.

**[Brian Butte](#3881 "2013-05-03 09:02:00"):** VM's, and in fact the concept of an operating system and a server, are constructs that provide little to no value beyond their use as an abstraction layer. We use VM's to slice and dice resources because applications don't play nicely together. Let's solve that problem. The future is a distributed model for which we need to re-evaluate our existing constructs. Simplicity scales, and VM's add complexity. Channeling my inner Dennis Miller, hey, I could be wrong...

**[Kurt Milne](#3883 "2013-05-09 11:46:00"):** Yeah - lets inform the typical big insurance company with 5000 applications in their portfolio that their apps are all built using the wrong architecture and that virtualization is a big distraction. I guess that the slice of physical resource that enables broad low cost HA/DR, and reduced capex/opex, and fewer service outages is also a distraction?

**[randybias](#3884 "2013-05-09 11:55:00"):** You mean like ING's experiments with Hadoop clusters running on AWS and RAX clouds? Reality is that the companies that will survive the disruption are those who will embrace the new model sooner and rebuild/re-architect their apps and business processes around that model. If they don't, then upstarts will threaten their business models using new technology and the leverage that comes from public cloud systems. Putting your head in the sand won't make any difference.

**[Richard Nicholson](#3885 "2013-05-09 11:55:00"):** Happy to. First I wouldn't classify the use of VM's as an 'architecture'. I'd also refer the Insurance company to Gartner cost analysis by Ann Thomas Manes (Berlin Conference) - and ask how virtualisation addresses the real issue - which is application maintenance. Of course It doesn't. Which is why the Insurance companies OPEX has increased despite 'virtualisation' Application modularity 'should' be the strategy - virtualisation - a secondary consideration.

