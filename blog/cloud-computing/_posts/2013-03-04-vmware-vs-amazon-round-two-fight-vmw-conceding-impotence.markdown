---
author: Randy Bias
comments: true
date: 2013-03-04 18:14:31+00:00
layout: post
slug: vmware-vs-amazon-round-two-fight-vmw-conceding-impotence
title: VMware vs. Amazon ... ROUND TWO ... FIGHT! — VMW Conceding Impotence?
wordpress_id: 5776
old_categories:
- Cloud Computing
tags:
- elastic cloud infrastructure
- vmware
---

Two and a half years ago I wrote about the inevitable throwdown between VMware and Amazon Web Services (AWS), but recently VMware’s senior leadership appeared to [outright admit defeat](http://www.crn.com/news/cloud/240149626/vmware-top-execs-lash-out-at-amazon-public-cloud.htm).  The message to VMware’s partners was simple:

"We want to own corporate workload," said Pat Gelsinger, VMware’s CEO. "We all lose if they end up in these commodity public clouds.”
> 
> </blockquote>

James Staten, who has lately been on an incredible roll in terms of his vision and foresight in recent [research on cloud computing](http://www.forrester.com/The+Rise+Of+The+New+Cloud+Admin/fulltext/-/E-RES86901) (paid research), nailed it in a cogent [response on his blog](http://blogs.forrester.com/james_staten/13-02-28-the_vmware_community_has_the_innovators_dilemma).  
  
I want to fill in some of the gaps.  
  
**Background**  
At various times since pretty close to the inception of cloud computing, I have engaged with the leadership at VMware and explained what is required to help them maintain dominance.  Unfortunately, on all these occasions I was rebuffed.  VMW’s hubris is to believe that their lead in enterprise virtualization will translate into success in the public cloud space.  Other voices have since joined mine in making this point, yet Gelsinger’s recent admittal at the partner conference is nothing less than a public statement of VMware’s impotence in this regard.  
  
Simply put, VMware does not understand what is required to win in the public cloud space nor are they willing to listen to those who do.

<!-- more -->  
<!-- more -->  
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
