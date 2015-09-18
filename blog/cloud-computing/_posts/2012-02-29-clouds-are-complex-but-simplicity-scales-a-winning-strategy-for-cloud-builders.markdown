---
author: Randy Bias
comments: true
date: 2012-02-29 17:54:25+00:00
layout: post
slug: clouds-are-complex-but-simplicity-scales-a-winning-strategy-for-cloud-builders
title: Clouds are complex, but simplicity scales; a winning strategy for cloud builders
wordpress_id: 3606
old_categories:
- Cloud Computing
- Technology
---

All cloud systems are inherently complex, and complexity is inherently evil. You can’t avoid complexity, since the size and scale that drives efficiency also adds complexity.  However, you can choose how complex to make your basic system.  A winning strategy for any team of cloud builders is to start simple and then get more complex organically over time.  Starting with a complex system means multiplying that complexity as you scale, multiplying the risk of a major failure.

This article aims to talk about complexity.  I hope for cloud building teams to understand this issue better.  In particular, I hope for many of the [OpenStack](http://www.openstack.org/) folks to gain some insight into this way of thinking.

It will help us all to make a better open source project.

**Systems & Complexity**
I am no expert on [systems theory](http://en.wikipedia.org/wiki/General_System_Theory).  A lot of what I know is based off of 20+ years of hands-on experience or anecdotes with building ISP backbones, datacenters, security systems, storage systems, and writing automation tools.  (Lots and lots of automation tools. I never could stand doing anything by hand.)  That said, over time I have slowly learned and inferred a number of lessons, the most important being


a. Complex systems fail.




b. People love to build complex systems.


In particular, many engineers see understanding and developing complex systems as a rite of passage.  In reality, the true test of a great engineer is their ability to make things simpler, not more complex. In software development, this is talked about as “elegance” or “code elegance”.  An excellent definition can be found in [SearchSOA](http://searchsoa.techtarget.com/definition/elegant-solution)[1]:

_“The word elegant, in general, is an adjective meaning of fine quality. **Refinement** and **simplicity** are implied, rather than fussiness, or ostentation. An elegant solution, often referred to in relation to problems in disciplines such as mathematics, engineering, and programming, is one in which **the maximum desired effect is achieved with the smallest, or simplest effort**. Engineers, for example, seek the elegant solution as a means of solving a problem with the least possible waste of materials and effort.” [emphasis mine]_

Complexity is the opposite of elegance.  Complexity breeds failures.  Systems [that are not designed for failure](http://it20.info/2012/02/the-cloud-magic-rectangle-tm/), which are complex or sprawling, will fail catastrophically.  Frequently catastrophic failure will turn into a [cascading failure](http://en.wikipedia.org/wiki/Cascading_failure).  “High availability” (HA) as typically implemented in an enterprise datacenter will not protect a system from cascading or catastrophic failures.  More importantly, in my experience, HA is a leading cause of catastrophic failures. Traditional HA stems from the idea of _risk mitigation_, predominant in how enterprise systems are designed today. However, it is simply not possible to ensure robustness by [predicting what could go wrong](http://www.cs.washington.edu/homes/gribble/papers/robust.pdf) and adding complexity to handle a predicted range of failures. Cloud systems must embrace _risk acceptance and planning_, the new emerging approach for building **reliably unreliable** cloud systems.

**Failures in Systems**
There are a number of works on systems and failures, but my favorite is [Systemantics](http://www.amazon.com/Systemantics-Systems-Work-Especially-They/dp/070450331X/ref=sr_1_1?s=books&ie=UTF8&qid=1330466840&sr=1-1) or the [Systems Bible](http://www.amazon.com/Systems-Bible-Beginners-Guide-Large/dp/0961825170) by John Gall.  Considered somewhat facetious or tongue-in-cheek by many, much of its kernels of wisdom ring true.  The entire body of work is best summarized by “[Gall’s Law](http://en.wikipedia.org/wiki/Gall's_law)”:

_“A complex system that works is invariably found to have evolved from a simple system that worked. The inverse proposition also appears to be true: A complex system designed from scratch never works and cannot be made to work. You have to start over, beginning with a working simple system.”_

Gall’s Law is a synopsis of Systemantics ‘laws’ 12-16 listed on the [Wikipedia](http://en.wikipedia.org/wiki/Systemantics)page:


12. A complex system cannot be "made" to work. It either works or it doesn't.




13. A simple system, designed from scratch, sometimes works.




14. Some complex systems actually work.




15. A complex system that works is invariably found to have evolved from a simple system that works.




16. A complex system designed from scratch never works and cannot be patched up to make it work. You have to start over, beginning with a working simple system.


The inherent truth in Gall’s Law should be self-evident, but what’s important to understand is that many of the current approaches to building Infrastructure-as-a-Service (IaaS) clouds are deeply rooted in complexity.  In this regard, they look similar to how enterprise datacenters and applications are constructed today: _heterogeneous, sprawling, multiplicity of silos with no prevailing design patterns or reusability_. These kinds of approaches are difficult to scale, to secure, or to maintain with high levels of uptime. Systemantics talks very specifically about failures.  The subtitle of the book is “How systems work and especially how they fail.”  I want to bring a few of the more interesting, but pithy ‘laws’ to your attention including some brief commentary, particularly in the context of large cloud systems (numbered according to how they are found on the Wikipedia page for reference; will not match original text):


_#22 - “A system can fail in an infinite number of ways.”_


While infinite is an exaggeration, the larger a system is and the more moving parts it has, the more likely you are to encounter unplanned for [edge cases](http://en.wikipedia.org/wiki/Edge_case).  You cannot plan for all edge cases.  You can only try to reduce the number of edge cases by having simpler systems with fewer moving parts.


_#2 - The Fundamental Theorem: “New systems generate new problems.”_


Systems are created to solve a problem.  Unfortunately, new systems bring new problems in addition to the ones you are trying to solve for.  People, and particularly engineers, want to solve problems by designing new systems.  Whenever possible, use existing systems to solve a problem.  If you must build a new system to solve a problem, make it the smallest possible solution possible to solve the problem.  Solve it as elegantly as possible.  Minimalism.  Simplicity.


_Not in WP list - “If a problem seems unsolvable, consider that you may have a metaproblem.”_


If a problem doesn’t look tractable then there is a deeper underlying problem that should be addressed.  A great example of this is that AWS doesn’t guarantee virtual server uptime through ‘HA’ or ‘server HA’.  Rather than trying to make virtual servers automatically recover, they simply addressed the metaproblem: the cloud app should handle server failures itself.


_#31 - “Loose systems last longer and work better. (Efficient systems are dangerous to themselves and to others)”_


This is what’s behind the notions of ‘loose-coupling’ and ‘failure domains’.  We see transient, isolated failures when systems are loose.  We see big, catastrophic, cascading failures when systems or subsystems are tightly bound or integrated together.  A few transient failures that are expected and planned for are always better than a very small number of very big, very spectacular failures.

**Complexity in Software Systems**
I can only touch on this briefly, but suffice it to say that software system complexity most often comes from more code.  In this regards, one of the main metrics in the OpenStack community (code check-ins and/or lines of code) is a bit broken.  What we really want is a metric for how people are simplifying the OpenStack code base, and making it more elegant.  Perhaps code check-ins where lines of code are REDUCED while maintaining functionality? Less code means less complexity, which means fewer edge cases and fewer failure points.

To see simplicity in action, let’s go back to AWS.

**How Amazon EC2 Started (Simple)**
When AWS EC2 launched, in [August of 2006](http://aws.amazon.com/about-aws/whats-new/2006/08/24/announcing-amazon-elastic-compute-cloud-amazon-ec2---beta/), you could get an m1.small for $0.10/hr in one region using an API.  That was it.  That was *all* of it.  You couldn’t even get m1.large or m1.xlarge instances until [over a year later](http://aws.amazon.com/about-aws/whats-new/2007/10/22/amazon-ec2-now-in-unlimited-beta-and-launching-new-instance-types/). There is a key lesson here: No one will compete successfully with Amazon by trying to build AWS as it is in 2012.  You’re going to build AWS as it was in 2008, or perhaps 2009, and then iterate fast.  As fast as you can.

**Examples of AWS EC2’s Design Elegance**
Even as AWS grows in scope, Amazon maintains simplicity in individual services, such as EC2. Some highlights:



	
  * Only one hypervisor is supported [2]

	
  * The default networking model is a simple flat layer-3 routed networking model

	
  * Instance disk storage is ephemeral, meaning there are no SANs or NAS, just regular old DAS

	
  * Elastic Load Balancing (and similar services) are ‘lowest common denominator’ capabilities: you get just simple L4 load balancing, not a complex L7 load balancer

	
  * EC2 evenly subdivides physical hosts and ‘bin packs’ VM instances onto the same kind of physical hardware designed for that workload/VM-type

	
  * Every VM instance has one network interface (NIC)


Some will undoubtedly point to the complexity of AWS’ Virtual Private Cloud (VPC) as a counter-example.  It’s important to note that VPC is a set of very complex networking designed to provide an emulation layer for legacy enterprise applications that were built in an era that required this kind of solution.  Most of these apps are not highly elastic and do not have large scale needs.  Solving for them with a VPC style solution is appropriate and sensible.  But you won’t ever see Netflix or use cases like Netflix adopting VPC.

**Examples of Failures in Designing Scalable IaaS**
This article is really becoming [tl;dr](http://en.wikipedia.org/wiki/Wikipedia:Too_long;_didn't_read), but before summarizing, I want to discuss some examples of what I see to be missteps in building IaaS cloud software and systems.


_“Multi-hypervisor”_




__End-users don’t care about hypervisors.  Hypervisors are a commodity.  They are the new ‘bare metal’.  Multi-hypervisor adds code, complexity, creates edge cases galore, and creates all kinds of new requirements such as maintaining VM image repositories for each kind of hypervisor.  This is bad inside of a single system.




If you need multi-hypervisor, the right solution is to do what [Christian Reilly](https://twitter.com/#!/reillyusa) did at Bechtel: deploy a number of systems and then use a cloud management system like [enStratus](http://www.enstratus.com/) or [RightScale](http://www.rightscale.com/) to bridge them with a unifying UI.




_“Redundancy for redundancy’s sake”_




__Redundancy can be evil if done wrong.  Every redundant system adds complexity.  Redundancy adds moving parts.  Determine what is an acceptable and expected failure for the system and don’t add any more redundancy than necessary. For example, if we consider an individual compute node as disposable, investment in redundancies at the hardware level is not the best use of resources.


**Build It Right**
There are many other examples I could give, both positive and negative.  The challenge in building robust and scalable IaaS systems isn’t “will there be enough features?”, it’s “will we simplify and grow organically what we know works?” Right now I see more of the former and not nearly enough of the latter. In looking at your own systems, I would keep asking questions about the main inputs of complexity at the outset:


1) Features: What is the minimal set of services that you need to provide to your users to be a viable solution?




2) Options: Do your users really need more than one way to do things, to start? Flexible systems are rarely simple, ask [Larry Wall](http://en.wikipedia.org/wiki/Larry_Wall).




3) ‘Best’ practices: Tried and true IT practices for small systems do not automatically improve a production cloud system.  They can, in fact, weaken it!  Context is key.


Let me know your take on this. Thanks.



* * *



[1] See also this piece on [elegant code](http://wordaligned.org/articles/elegance-and-efficiency).
[2] Although in two modes now: PVM and HVM
