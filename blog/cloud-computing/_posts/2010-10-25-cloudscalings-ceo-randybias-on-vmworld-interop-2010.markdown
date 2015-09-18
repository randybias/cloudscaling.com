---
author: Randy Bias
comments: true
date: 2010-10-25 18:42:24+00:00
layout: post
slug: cloudscalings-ceo-randybias-on-vmworld-interop-2010
title: '@Cloudscaling CEO @randybias on #VMworld & #Interop 2010'
wordpress_id: 1478
old_categories:
- Cloud Computing
tags:
- amazon
- Automation
- aws
- cloud
- cloudscaling
- commoditization
- conferences
- enterprise
- infrastructure
- scaling
- vmware
---

During my most recent trip I was speaking at both [VMworld Europe 2010](http://www.vmworld.com/community/conferences/europe2010/) and [Interop NYC 2010 - Enterprise Cloud Summit](http://www.interop.com/newyork/conference/overview.php). This update attempts to provide a candid look at some of the trends, thoughts, and insights that occurred to me while engaging with customers, vendors, and the greater cloud community at these two events.

Here I will briefly cover the following points:



	
  * Disconnects in Telco/SP Cloud Strategy

	
  * ‘Hybrid Cloud’ Still Causing Confusion

	
  * Public Cloud Hits a Tipping Point?

	
  * Enterprise IT Governance


**Telco/SP Enterprise Cloud Strategy Doomed to Failure?**
How many of the large telecommunications and service providers have ‘enterprise’ cloud strategies? Their basic strategy boils down to:



	
  1. Deploy an ‘enterprise cloud’, usually with VMware

	
  2. Farm current customer base for cloud customers

	
  3. Create a suite of services around the cloud offering that make it compelling


In talking to folks at VMware and various telcos and service providers, I heard a tremendous amount of focus on #3.  Many times I heard that "_infrastructure is just a commodity_” and “w_e’ll compete by providing value-added services._”  This is clearly a sound strategy, except that most of these providers are **not** building commodity infrastructure.  Most enterprise clouds have a very expensive cost-basis for their build-outs.  The most stark difference can be seen with [VCE Vblocks](http://www.emc.com/campaign/global/vce/index.htm) clouds, which are almost 10x the cost of a commodity cloud[1].

Taking aside a number of the other issues with these enterprise clouds[2], how can you sell enough value-added services on top of a 10x more expensive infrastructure solution to make up the difference?  The answer is that you can’t and most telcos and SPs with this strategy will eventually have to face the math.

Related to this, #2 above seems to have telcos and SPs focusing on protecting existing customers.  How much more failed can a cloud strategy be than if it’s defensive?  The only good strategy here in response to the Amazon juggernaught is a frontal assault using those assets and capabilities you have and Amazon does not.

It’s interesting that even VMware, [probably Amazon’s key competitor](http://cloudscaling.com/blog/cloud-computing/vmware-vs-amazon-round-one-fight), is preaching along with EMC, a ‘Journey to the Private Cloud’ and [pounding the pulpit](http://www.redmonk.com/jgovernor/2010/10/22/vmware-ceo-django-rails-open-frameworks-apps-as-commodity-and-the-new-kingmakers) for enabling developers.  This quote from Paul Maritz, CEO of VMware is choice:



* * *




<blockquote>_In the final analysis they [purchasers] are not the people making strategic decisions in the business. Developers have always been at the leading edge, because that’s where business value is generated. Things that don’t differentiate you at a higher level will be SaaS apps – which will also be purchased at a higher level. The differentiated stuff you have to do yourself, and that means software development”._</blockquote>




* * *

Most of the current VMware-based enterprise clouds are simply trying to sell a pure virtualization outsourcing play to IT admins of their existing customer base.  If a developer friendly strategy is working for Amazon and VMware is pushing a similar vision, then it’s incumbent on those who want to be successful in the emerging cloud computing space to think about where developer enablement fits in their strategy.

I very much hope that telcos and SPs will start to develop some strategies and cloud solutions that are ultimately competitive.  The worst thing that can happen here is to have a GOOG/AMZN duopoly. (Please see my [earlier post on the rumor of Google launching their own EC2-like service](http://cloudscaling.com/blog/cloud-computing/rumor-mill-google-ec2-competitor-coming-in-2010).)

**‘Hybrid Cloud’ Confusion**
In a panel at Interop on adoption of public clouds by enterprise customers there was a heated debate about the meaning of ‘hybrid cloud’.  This debate, mostly between myself and Paddy Srinivasan of [Cumulux](http://www.cumulux.com), was helpful for attendees, although as in most conversations of this type there is danger of devolving into an argument on semantics.  I made some pretty strong assertions about the general lack of usefulness in **any** context of the term ‘hybrid cloud’[3].  Essentially I simply reprised my posting from February this year: [Hybrid Clouds are Half-baked](http://cloudscaling.com/blog/cloud-computing/hybrid-clouds-are-half-baked).

Why stick on this?  For me, this is a question of straight talk.  We all live with the confusion of ‘cloud’ every day in our work, but when vendors use the term as something new to denote simple [Service-Oriented Architecture](http://en.wikipedia.org/wiki/Service-oriented_architecture) (SOA) or the joining of two clouds (aka ‘cloud bridging’), that muddies the conversation further. The arbitrary creation of fuzzy marketing terms and pretending as if they have meaning does a disservice to all those who are trying to understand how to move forward in this new world.  Even the Wikipedia entry for [Hybrid Cloud](http://en.wikipedia.org/wiki/Cloud_computing#Hybrid_cloud) is a mess.

Another key reason to push on avoiding this term is that it ‘over promises’ on cloud.  Most companies don’t need a hybrid solution at the moment.  Certainly, some services, like identity management and authentication need to ‘bridge’ the firewall, but a single app doesn’t need to exist in both places nor does it need to move back and forth.  Neither do virtual machines (VM).  In fact, if you are following best practices using tools like [libcloud](http://incubator.apache.org/libcloud/), [fog](http://github.com/geemus/fog), or [jclouds](http://www.jclouds.org/) to manage instances and [Chef](http://www.opscode.com/chef) and [Puppet](http://www.puppetlabs.com/) to package your app deployments, then you can deploy to any cloud on demand.  This approach makes far more sense than trying to move large VMs back and forth across wide area networks.

It’s just like buying two Internet connections from two separate ISPs, which certainly isn’t a ‘hybrid network’.  Using multiple clouds is a best practice enabled by proper tooling that increases portability & interoperability while reducing risk, not some kind of 'hybrid'.

**Public Cloud Hitting the Big Time?**
Just before the enterprise public cloud adoption panel [Brian Butte](http://www.linkedin.com/pub/brian-butte/1/767/462), the moderator, informed me that a poll of the audience had found that 95% of the enterprise attendees were using public clouds or planning on it.  A stark turn around from the beginning of the year when most were focused on private cloud development.

This parallels our experience that most enterprises will ‘fail forward’ trying to build private clouds.  By fail forward, we mean here that IT departments will attempt to deploy highly automated virtualization systems thinking they are private clouds, but not hitting the mark.  As Nick Carr [pointed out](http://hbswk.hbs.edu/archive/4137.html) earlier in [Does IT Matter](http://books.google.com/books?id=wrROE6SLJFEC&pg=PA111&lpg=PA111&dq=9%25+of+large+IT+projects+fail+does+IT+matter&source=bl&ots=hv-k0_2b3i&sig=TM879MDB4wtVSebnsGjn2ZtFFdg&hl=en&ei=vMzFTIKFI4K0lQfF0ZwD&sa=X&oi=book_result&ct=result&resnum=4&ved=0CC4Q6AEwAw#v=onepage&q&f=false):



* * *




<blockquote>_Of the more than eight thousand systems projects Standish examined, only 16 percent were considered successes—completed on time and on budget and fulfilling the original specifications. Nearly a third were canceled outright, and the remainder all went over budget, off schedule, and out-of-spec. **Large companies—those with more than $500 million in annual sales—did even worse than the average: Only 9 percent of their IT projects succeeded.** [ed. emphasis mine]_</blockquote>




* * *

As I said in my Interop keynote presentation on Monday for the private cloud track of the Enterprise Cloud Summit, it’s not a real private cloud unless it’s built like a public cloud.  Most enterprise IT folks have little idea how to move forward, either culturally or technologically in building a true private cloud.  How much worse is the 9% success rate likely to be in this case?

So what we’re probably seeing now is that enough early attempts at private cloud have failed or have been so slow that business unit owners are pushing for public cloud solutions and demanding immediate success.

**Enterprise IT as Governor, not Control-Freak**
I hit on this point repeatedly, but I also heard it from a number of other folks.  We’re clearly moving into a world of mixed IT capacity.  Some will be onsite and much will eventually be offsite and run by a multiplicity of cloud vendors; infrastructure, platforms, **and** applications.  In this new world, it’s more important for enterprise IT to provide governance rather than direct control.  This is very similar to how modern manufacturing or facilities management works.

Apple, Inc, for example, does not manufacture it’s hardware.  Instead, this key capability is outsourced, yet Apple has become an expert in managing a large extended supply chain of vendors and ultimate responsibility for delivering high quality hardware goods.

Similar to the process of managing global manufacturing relationships, I predict enterprise IT will shift to spend more time governing a large supply chain, not running each individual solution themselves.

**Wrap-Up**
All of this just further reinforces my thinking about Cloudscaling’s general approach to the market place.  We want to help telcos and service providers compete with AMZN/GOOG, while helping enterprises to understand how to embrace and manage the transition to cloud computing.  We think this means that telcos and service providers have inherent advantages that AMZN/GOOG can’t compete with.  Unfortunately, when these advantages are coupled with expensive ‘enterprise cloud’ infrastructure, much of the potential competitive opportunity is lost.

Imagine instead, that the inherent advantages of a large telco, such as geographical dominance, access to wireless networks, advanced networking capabilities such as MPLS networks, cheap IP backbones, were coupled with a cost-competitive Amazon EC2-like cloud infrastructure.  This ‘consumer cloud’ infrastructure combined with the telco’s natural advantages makes for a formidable competitive advantage in picking up all of the new cloud apps, particularly those that service mobile device developers.

When looking at how the marketplace appears to be unfolding, it seems clear that enterprises will continue to be confused with hype and promises such as that of ‘hybrid clouds’, miss the boat on delivering in the short term, pushing IT departments into adopting public cloud solutions whether they like it or not.  It also seems clear that servicing these new cloud apps is also critical.

To us, this means it’s important to have *both* an enterprise cloud to capture and retain existing enterprise customers while also deploying a low-cost commodity cloud, built like Amazon and Google, targeted at consumers, developers, and new cloud applications.  Particularly those apps that drive the burgeoning smart phone market and play to any telcos inherent strengths.



* * *

[1] I have a detailed analysis in the pipeline and I will be showing some of these numbers in upcoming presentations at conferences as well.
[2] We’ll cover this in much more depth in the near future.
[3] This will likely cause some negative feedback from legacy enterprise vendors whose marketing folks use this term extravagantly.
