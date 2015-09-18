---
author: Randy Bias
comments: true
date: 2011-08-31 16:23:46+00:00
layout: post
slug: the-evolution-of-it-towards-cloud-computing-vmworld
title: The Evolution of IT Towards Cloud Computing
wordpress_id: 2170
old_categories:
- Cloud Computing
- Technology
---

I've talked about this idea many times and it's been picked up and echoed by many in the mainstream media.  The idea is this:


<blockquote>Cloud computing is a new paradigm for IT that displaces the current dominant paradigm, enterprise computing.  This is in the same way that enterprise computing (or "client/server") displaced mainframe computing as the dominant paradigm.</blockquote>


This is a powerful and important idea to understand and internalize.  It sets some of the common misconceptions about cloud on their head such as it being about [virtualization](http://www.zdnet.com/blog/virtualization/virtualization-isnt-cloud-computing/2182) (incorrect), [outsourcing](http://cloudscaling.com/blog/cloud-computing/the-cloud-is-not-outsourcing) (incorrect), or business models like "pay-as-you-go" (incorrect).

Cloud computing is a new paradigm for IT in the same way that robotics automation for automobile manufacturing transformed the car industry.  It's completely disruptive and it has less to do with specific implementations than it does with vast and drastic changes to how we think about information technology.

This is why in many of my [presentations](http://www.slideshare.net/randybias/cloudscaling-presentation-at-tm-forum-management-world-dublin-2011) I say:


<blockquote>While the terms "cloud" and "cloud computing" may be hotly debated, I have never once heard anyone credibly refute that these ideas were pioneered and implemented by today's web giants such as Amazon, Google, and Facebook.</blockquote>


This is where we get back to that first statement.  I'm not throwing around words like 'paradigm' because I feel like being a marketing drone.  I'm talking about fundamental and deep changes to how the entire IT stack is designed, delivered, and managed.  Try taking the Open Compute project hardware as-is and putting it in any modern enterprise datacenter.  Try taking one of Google's custom Ethernet switches and doing the same.  Or perhaps you could take a typical enterprise IT admin and give him a week to try and figure out how to administer Amazon EC2.

If you believe this is a fundamental shift in IT, as I do, then the #1 misconception (below), still being bandied about by technologists, pundits, and reporters needs to be taken out back and shot ...

**The #1 Cloud Misconception: Virtualization is fundamental to Cloud Computing**
Virtualization is NOT fundamental to cloud computing.  Salesforce.com didn't use it for the first 10 years of it's existence and still mostly doesn't.  Google never used it.  Amazon doesn't always use it.  I doubt Facebook uses it except where necessary.  I said it three years ago [here](http://cloudscaling.com/blog/cloud-computing/virtualization-is-not-the-answer-for-clouds) on the blog and I will say it again: _virtualization is one, of **many**, multi-tenancy strategies._

Even Paul Maritz, the CEO of VMware, "gets it", at least as much as is possible for a traditional enterprise vendor.  Why did VMware acquire SlideRocket and Mozy? Because these teams have built web-scale and cloud-style hosted services. Other investments in vFabric and Cloud Foundry, very much next generation cloud-type technologies, are no accident.  SlideRocket, Mozy, vFabric, and CloudFoundry have **nothing** to do with virtualization.

VMware's stated intention is to be a key "cloud" player and _many of their recent investments are not core virtualization technology_!  That's a very smart recognition of the gaps that VMware needs to fill in it's DNA and product portfolio to be a true cloud player.

_A quick aside_: I find it odd how the senior VMware exec who followed Paul Maritz for the VMworld 2011 keynote stated that "x86 virtualization is the fundamental underpinning to all clouds", which is clearly wrong.  Why is it that even inside of VMware only a very small number of people 'get it' when the rest of the org is trapped thinking in virtualization terms only?  That's probably another whole blog posting ...

**Back to Cloud Computing's Promise**
The confusion we see around virtualization and cloud computing is because the change is so big, it's hard for people to wrap their head around it.  Folks struggle to find simple answers to a complex, multi-pronged, disruptive change.

Ask yourself this: if cloud computing was as simple as delivering virtual servers on-demand, then wouldn't there be a credible competitor to Amazon Web Services by now?

We are on a continuum of change, moving from mainframes, to client/server (enterprise), and now to the cloud & post-PC era (more on that topic in another posting soon).  There is a very clear progression from one to the other.

The following diagram, which I use in a lot of presentations, helps with understanding what I mean:


[![](http://cloudscaling.com/wp-content/uploads/2011/08/evolution-it-diagram.png)](http://cloudscaling.com/blog/cloud-computing/the-evolution-of-it-towards-cloud-computing-vmworld/attachment/evolution-it-diagram)


This is a simplified diagram.  You could pick a number of dimensions to show the continuum we are on.  On the far left think [Control Data Computers](http://en.wikipedia.org/wiki/Control_Data_Corporation) and on the far right, think Google.  The transition and direction seem obvious when looked at like this.

**Wrapping Up**
If you want to build a 'cloud', create new cloud technology, be competitive, or be part of the disruption, you have to get your head around the **fact** that what is important isn't evolving something as simple as virtualization, but evolving the entire IT stack.

So here's my message to you:

_You need to watch the people and organizations who are part of the change.  Watch Amazon.  Watch Google.  _Watch [OpenStack](http://openstack.org) and [Open Compute](http://opencompute.org/).  Watch Cloudera and Hadoop.  Watch Salesforce, Heroku, and Engine Yard.  You can e_ven watch VMware and what they do with [CloudFoundry](http://cloudfoundry.com). (Just don't watch what VMware is doing with virtualization, because mostly they are headed the wrong direction, which is yet another blog posting I owe you faithful reader).  You can safely ignore IBM, HP, and all of the legacy enterprise vendors._

Are you going to skate to where the hockey puck was ... or is?  **OR** are you going to skate to where it's headed?  Because if you don't, you aren't going to score big in cloud computing.  Period.
