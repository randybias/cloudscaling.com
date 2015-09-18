---
author: Randy Bias
comments: true
date: 2007-12-19 00:47:18+00:00
layout: post
slug: another-take-on-web-scale-computing
title: Another take on Web-Scale Computing
wordpress_id: 2338
old_categories:
- Cloud Computing
- Technology
tags:
- Security
---

Greg Borenstein, principal behind [Music for Dozens](http://mfdz.com/) and [out loud thinker](http://www.urbanhonking.com/ideasfordozens) sums up the potential [long term impact of Amazon's successful cloud computing model](http://www.urbanhonking.com/ideasfordozens/archives/2007/12/what_happens_wh.html).  It's an insightful article and I think worthy of a close read, including the comments.

First Greg correctly sums up the obvious:



<blockquote>
With the announcement of Amazon's much-anticipated SimpleDB service this week, we now officially live in a world where the kind of enormous systems run by Google, Yahoo, Ebay, et al â€” systems that power huge portions of the web (where 500+ million users is totally mundane) â€” are available on demand in small doses and at reasonable prices to anyone who needs them.
</blockquote>



And then talks about the impact on typical web developers:



<blockquote>
On this infrastructure, the only real difference between running a small application (a custom CMS for a medium-sized non-profit, for example) and a large one (say, Digg) is the size of your monthly bill.
...
Within a few years, a scale of computation that is currently only available to a handful of multi-billion dollar companies will be available to any pair of dorm room-bound hacker kids with $30/mo. and a pair of MacBooks.
</blockquote>



Unfortunately, Greg misses the mark here.  While [Amazon Web Services](http://aws.amazon.com) (AWS) are a strong evolutionary step forward, it's clear that by themselves, despite Amazon's excellent marketing, they do not create 'web-scale' (we prefer 'cloud-scale') systems.  They only enable developing web-scale systems without deploying your own infrastructure.
<!-- more -->
Even today's giants, like Amazon, rely heavily on know-how and expertise that is not readily available to the masses.  There are no systematic approaches to building scalable, distributed, secure, and reliable systems.  Well, not yet anyway . . . (more below)

Greg makes some additional comparisons to watershed technology moments:



<blockquote>
For a few clues as to what happens when the current, if obscure, state of the art becomes an industry-standard lowest common denominator, it helps to look at some history. This has happened at least twice in the last thirty years: once when industry standardization around x86 hardware lead to the collapse in prices for DOS- and then Windows-compatible PCs that made them ubiquitous around the world; and again when these same PCs reached a level of power and the open source software written to run on them reached a level of affordability and reliability that, together, they displaced the expensive and proprietary server systems and radically lowered the barrier to entry for web-development leading, as Tim O'Reilly has clearly outlined, to Web 2.0.
</blockquote>



I think these are apt, comparisons, but not taken to their logical conclusion.  It's truly the synergy of commodity hardware and commodity (open source) software that allowed cheap x86 systems to displace Big Iron.  The software, in this case, provides the systematic mechanisms for repeatably leveraging cheap hardware.  Without it, people would have to individually cook their own operating system and the applications on top of it **or** pay for expensive enterprise software.

You can think of open source software in this context as the institutionalized know-how for running cheap commodity hardware.

There is currently no parallel for web-based cloud computing services

Tools like Amazon's S3, EC2, SimpleDB, and the others are simply one-off point services.  They are more akin, respectively, to a disk drive, a CPU, and a rolodex.  By themselves they have only minimal use.  It is only when they are combined together well (and with other services?) by an operations or development architect with knowhow that you have a synergistic effect that allows the creation of cloud-scale computing infrastructure.

Greg's first [commenter](http://www.linkedin.com/in/thomaslockney) hits the nail on the head:



<blockquote>
The mere existence of these services is far from breaking down the barrier necessary for *anyone* to scale to amazon/ebay/google size services. There are at least, as I see it, 2 things still missing that won't be "commoditized."

First, is the know how. Building a scalable application (really, application infrastructure) is not the same as building a basic app. And if anything, the general trends have shown that there is a great wide void of knowledge in the market about how to do this successfully.

Second, is the management of this architecture. Ask any company running a large number of EC2 instances how they are managing it. Most likely, they are using a number of custom built tools. If they're lucky, they managed to shoehorn some of the existing systems management tools into doing what they need. Either way, there's a lot that goes into making this work.
</blockquote>



Which is accurate and part of why [CloudScale Networks](http://www.cloudscale.net) exists.  It is possible to write a new generation of software that institutionalizes the running of Internet infrastructure.  Possible and inevitable.

Greg follows through to the crux of the matter by highlighting how the new economics suddenly make it feasible for folks to pursue long tail plays or other business models that were previously not possible.

Cloud computing is here to stay and it is absolutely a game-changing evolution of Internet infrastructure.  We need to embrace and hasten the arrival of this model.
