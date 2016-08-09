---
author: Randy Bias
date: 2016-05-10
layout: post
slug: you-are-locked-in-deal-with-it
title: "You Are Locked In ... Deal With It!"
featured: true
old_categories:
- OpenStack
---

You don't want lock-in?  Great.  Find another universe.  In this universe everyone is locked in.  Seriously, stop deluding yourself and trying to get something you can never have.  Didn't your parents tell you?  There is no Santa Claus.  Nor Unicorns ([storage or otherwise](http://cloudscaling.com/blog/cloud-computing/killing-the-storage-unicorn-purpose-built-scaleio-spanks-multi-purpose-ceph-on-performance/)).  Really, I am just trying to help you out here.  Your expectations are not only unreasonable, but will lead to failure.

Here's what you *really* want: control.  Let me explain.

## Debunking the No-Lock-In Myth

Open source can't save you.  You're locked in.  Don't believe me?  Using RedHat?  It's open source.  Try switching to SUSE or Ubuntu across your enterprise.  Right.  It won't happen.  Or, more accurately, it won't happen easily.  Because switching from RedHat means you have to deal with all of these issues:

- all new tooling around package management
- differences in layout of the Linux filesystem
- differences in kernel versions and kernel loadable modules
- completely different support model (no RedHat Network / Satellite!)
- retraining and skillset differences
- potential issues with your legal team[1]

And that isn't even a complete list.  The reality of the situation is that you're just as locked in to open source as anything else.  "Wait," you might say, "at least I'm less locked in!", which is true in a way, but it still confuses things, because you don't really care about being locked in.  "Locked in" is a codeword for something else: "giving the vendor control."

How do you retain control?

**By reducing switching costs.**

It must be possible to switch to a new system/product/platform and this is why open source can seem like a compelling solution.

## Switching Cost Reduction: The True Lever We All Need

Whether you're EMC or another business, what you're looking for in open source isn't really no lock-in, it's reducing switching costs.  Open source at least gives you the option of switching.  It's hard (per my examples above), but doable.  Being doable means you have a big lever you can use against the vendors who support you.  It means you get to invert the relationship between buyer and vendor such the buyer has the power, as it should be.  This is similar to what Apple did in [inverting the power dynamics with the carriers](https://archive.wired.com/gadgets/wireless/magazine/16-02/ff_iphone?currentPage=all).  It's also similar to what the [Open Compute Project](http://opencompute.org) hopes to achieve.

In fact, this is fundamentally at the heart of what is necessary for your business to succeed in the future: *being able to fire your vendor*.

There are also a few other things that are desirable, but not nearly as large of an imperative.

### Open Source's Contribution to "Control"

While reducing switching costs is the primary vehicle to controlling the relationship to the vendor, open source, specifically, provides a couple of other big values:

1. Influence the roadmap
2. Be a part of a community

The ability to influence the roadmap is important.  Not nearly as important as inverting the power dynamics of the vendor relationship, but still important.  It allows a business to contribute code back or to hire someone else to contribute specific code back.  That means you might be able to get more of what you need sooner.

Community means having other businesses like you around the table, with the same stake, and an interest in seeing the community-driven project made to work for all.  It also means that if you are having problems, it's more likely that someone else like you in the community is seeing the same things and you can share notes and work on the issues together, rather than being dependent on a vendor and their support team.

## The Vendor Power Dynamic is Inverting ... Period

Customers want the power dynamic with their vendors to change.  "Oracle" is a four-letter word inside the enterprise.  Enterprise software vendors who insist on maintaining lock-in of their customer base are going to be surprised as the power dynamic shifts.  Let me be clear here.  I believe it is no longer a case of "if" but "when".  Many enterprises are [switching to an "open source first" strategy](http://reflectionsblog.emc.com/open-source-first-strategy/).  I see this more and more as I talk to businesses and I don't think this is a "pendulum swing".  I think it's a permanent change in perspective.

### But is Open Source Really Required to Change the Vendor Dynamic?

One thing I find startling though, is the over reliance on open source to change this dynamic.  You all know I'm a big fan of open source, yet building great business models around it is still something we're learning.[2]  The world's greatest open source software won't be written for "free".  Someone has to fund it.  Community efforts like [OpenStack](http://www.openstack.org) are a agglomeration of businesses deriving value from open source while also monetizing it.  So open source has to be written by someone and that someone needs a pay check.

Is there another way?  You betcha.[3]  Vendors can take the initiative to create solutions for migrating off of their proprietary software systems.  Sounds crazy doesn't it?  It also doesn't give you the other two elements of "control" (above).  Yet, it's worth consideration.  If the new enterprise buyer simply won't tolerate the existing power dynamics, then you have the opportunity to change them by making it easy to leave you.

You can do this by creating migration tools, adhering to open standards, and making certain our customers have a switching path.

Then you are competing on support, relationships, and innovation track.  I think you can handle it.  If you're dependent on locking your customers into proprietary systems to keep them, then your product probably sucks anyway.  I don't know many who would admit that.

Ultimately, this path might actually be better for everyone.  The Internet is run using proprietary hardware (routers), which all speak a standardized protocol (TCP/IP), which means that while they aren't "open source", they do use "open standards", and switching costs for ISPs is lower.  Effectively we created a commons that is of value to all, using proprietary systems, but open standards.

It also means that enterprise software businesses might be able to build compelling business models that provide shareholder value, while allowing buyers to control the power dynamic.  This means there are more great software companies writing software, with hopefully fair bits of it, if not all, as open source.

That's good for everyone.

## A Brief Aside on The "Other" Open Source Software Model

I'll blog about this soon, but there is another open source software model.  You can run it as software as a *aaS company.  Most prominent of these are companies like Amazon and Google.  Running open source as a service means you are usually buying into a walled garden, in other words, another form of lock-in.  I thought you went to open source to "avoid lock-in" and maintain control?  Why are you suddenly in such a hurry to cede control?  This model for open source is why people like Richard Stallman started freaking out and why the [Affero GPL (AGPL)](http://www.gnu.org/licenses/why-affero-gpl.en.html) was created.  This isn't a new issue.

More soon.

## Do You Hear Me?

Let me run it down as clearly as possible.

1. You can't avoid lock-in, so stop trying, it's just making you dumber, because ...
2. The discussion around "no lock-in" makes people think that Santa Claus exists (sorry, kids, he doesn't)
3. The primary objective is reducing switch costs, to maintain control and invert the vendor power dynamic
4. Vendors may be able to solve for reducing switch costs without going to open source
5. Which means we continue to have a robust enterprise software ecosystem
6. A rich enterprise software ecosystem is intertwined with a rich open source software ecosystem, one way or another[4]

I'm trying to draw a picture of another path besides "open source software eats the world" that is good for everyone and achieves all objectives simultaneously.  If you like, think of it as a cooperative game where everyone wins.  Nothing wrong with that, is there?[5]


* * *

[1] Legal teams do their best of course, but the point is getting every version of Linux through your legal team for indemnity or OEM agreements just isn't easy.  
[2] Many point to RHAT as the canonical example of what an open source business looks like.  I'm not really buying it.  I don't think we actually know if that is the best and final business model for enterprise open source software.  I suspect it is not.  
[3] I just moved to the Pacific Northwest and this appears to be a common catchphrase out here, so I'm thinking of adding it to my repetoire. ;)  
[4] Meaning, even if you believe that all enterprise software is open source eventually, *someone* is writing it and making money from it.  There is no path where enterprise software vendors disappear.  
[5] [Our](http://twitter.com/donnabias) new favorite is [Pandemic](https://boardgamegeek.com/boardgame/30549/pandemic), although I have to admit I'm still a fan of winner takes all.  Something in my DNA.
