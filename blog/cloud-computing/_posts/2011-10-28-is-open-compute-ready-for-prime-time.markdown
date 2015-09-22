---
author: Randy Bias
comments: true
date: 2011-10-28 19:00:45+00:00
layout: post
slug: is-open-compute-ready-for-prime-time
title: Is Open Compute Ready for Prime Time?
wordpress_id: 2414
old_categories:
- Cloud Computing
---

I just returned from the [Open Compute Project (OCP) Summit](http://opencompute.org/summit/) in NYC.  It was an eye opening experience.  I thought I would share my take aways plus talk about what I perceive as a core issue: can the Open Compute Project (OCP) grow beyond Facebook?  By that, I mean there is a clear challenge right now.  Most of the OCP Summit seemed to be Facebook telling vendors what they needed.  That's great for Facebook, but doesn't advance the ball for the rest of us.

For those of you who may not have heard of the Open Compute Project, it's an attempt to 'open source' hardware design and specifications, in much the way that software is open sourced.  Here is the OCP mission statement:


The Open Compute Project Foundation is a rapidly growing community of engineers around the world whose mission is to design and enable the delivery of the most efficient server, storage and data center hardware designs for scalable computing. We believe that openly sharing ideas, specifications and other intellectual property is the key to maximizing innovation and reducing operational complexity in the scalable computing space. The Open Compute Project Foundation provides a structure in which individuals and organizations can share their intellectual property with Open Compute Projects.</blockquote>


Facebook hopes to gain by seeding a community and providing their own designs such that others will provide their own to that community in an open manner.  In this way they will be able to learn and grow from the greater community over time.  No one has ever really tried this before so it's a big question mark if they will succeed.

My money is on the success of OCP and Cloudscaling has designs we hope to push back.  But will Facebook accept designs of others?  What if they aren't 'efficient' enough or 'cutting edge' enough?  Much of what Facebook has seeded the OCP with is impractical in today's datacenters.  For OCP to thrive it's going to have to spread it's arms wide while maintaining the high level of quality it appears to expect.

Let's get into it.

**OCP Summit Take Aways**
The OCP Summit seemed to be a much better organized event than some of the other early open source events I attended.  Most likely this is the effect of having a single primary driver in Facebook.  There were a number of keynotes in the morning following by break out sessions in the afternoon.  I am sure these are covered in other blogs, but what you should know is that the keynotes were composed of outstanding speakers from Facebook, AWS, RedHat, and Dell, while the breakout sessions appeared to be all, or mostly, Facebook employees.

I had some observations while seeing the various presentations and Q&A sessions:



	
  * Facebook seems to have a very FB-centric world view, which is to be expected; e.g. thinking on virtualization was completely missing and while it's unlikely Facebook uses much virtualization in their system, any IaaS provider will find the current OCP designs seriously lacking

	
  * OCP, in general, wants to set a high bar of professionalism and rigor; they want participants who participate in action, not just name; "we aren't a marketing umbrella"

	
  * Pragmatic thinking about the millions and millions of unused or underused square feet of already existing datacenter space was completely missing; how to retrofit, or how to get 'part of the way' towards the current OCP designs was missing

	
  * Some of the designs being discussed are useful in the 3-5 or even 10 year time frame, but not now

	
  * OCP is providing very clear guidelines on how to participate and incubate new projects, which is awesome

	
  * There is some danger this community will be only Facebook and hardware vendors who want to sell to them


One thing that really struck me was how on one side you would see folks panning blade servers, but then advocating some very advanced and specialized designs like [Open Rack](http://arstechnica.com/business/news/2011/10/facebook-friends-open-source-hardware-for-data-centers.ars), which are another kind of specialized design.  Certainly the Open Rack project is not blade servers, but if there is one thing I feel like we should have learned from ATM, FDDI, Token Ring, blade servers, and a host of other specialized technologies it's that 'good enough' + 'cheap' usually wins.

Now, the counter argument from folks would be that OCP is attempting to get the vendors to follow their lead and manufacture at scale such that the cost of these specialized solutions is competitive with standard 1U/2U rackmount servers; however, this hasn't worked before, why would it now?  This is a key chicken and egg problem and part of why rackmount servers are still the standard Field Replaceable Unit (FRU) for most large scale datacenters.

This is not to say I think the Open Rack design is bad, it's just **very** forward thinking and I don't think it has a lot of practical application any time soon.

Remember, [57% of large scale datacenter costs are servers](http://perspectives.mvdirona.com/2010/09/18/OverallDataCenterCosts.aspx), so paying *any* premium above what a rackmount server costs can't be justified easily.

**Practical Compute**
Given the above, I'd like to call for those involved with OCP to start thinking about not just 'open compute', but 'practical compute'.  We have customers now who have many thousands of square feet of datacenter space that is a sunk cost.  These facilities are largely paid for and can be retrofitted to some degree, but there are limits.  DC space is 4-5% of overall costs, which is not insignificant, especially if that facility is already paid for.

What's more important?  Designing a new 1.07 PUE datacenter for 100M or retrofitting 3-5 existing smaller DCs and getting them down from 2-3 PUE to 1.25-1.5 PUE for closer to 10M per DC [1]?  To really bring this home, during Jame's Hamilton's keynote at OCP Summit, he specifically said that hot aisle containment could drop a 3 PUE facility to 2.5 or even 2 PUE.

My view is that over the 5-10 year time frame retrofitting existing empty DCs to have much better power, cooling, and more efficient servers is a more practical approach.  There are a lot of customers who fit this bill.  Unfortunately, the current OCP designs assume that everyone will build new DCs that are designed to wring the last oodle of efficiency out of every step of the process.

In some ways, this reminds me of how people approach 'availability' or 'security'.  There is almost an infinite amount of resource you can dump into either bucket, but you quickly reach a point of diminishing returns.  Smart business people look very carefully at the risk/reward tradeoffs of availability and security and find a 'sweet spot' for those diminishing returns.

For Facebook that point is **very** different from many of the others who can benefit from the Open Compute Project (OCP).

**OCP's Future is Bright ... I Hope**
I believe OCP's future is bright.  As I said, we're working on some designs we hope to push back.  I am concerned that the focus on Facebook's needs, the high bar that is being set, and some of the focus on forward thinking designs may blind the OCP community to the need for pragmatic designs for today's datacenters.  On the other hand, it is important for someone to hold us all to a higher standard when it comes to energy efficiency.  We all want to be good citizens.  Can OCP strike the right balance and become more broadly meaningful?  I believe it can if it keeps in mind that retrofitting existing datacenters is an important short to medium term goal that needs attention.

Big props to Facebook for continuing to open up OCP's processes and providing guidance on how to participate.  Here I think is the seed for how OCP can be wildly successful.  We need more constituents with clear pragmatic designs that are based on real world usage and use cases, not overly futuristic thinking.

My message to the greater OCP community is that this is a great start, but the sooner there is a broad base of customers who are not Facebook within the Open Compute Project, the better.  Let's get some real practical computing designs out there for today's datacenters.  OCP could be a tremendous vehicle for change with more active participants with real world problems.



* * *

[1] Yes, I'm making these numbers up.  It's more of framing how to evaluate which approach to take rather than any particular facts or data I have.  What's important is that it's a business evaluation, not an assumption that we need yet more datacenter space.
