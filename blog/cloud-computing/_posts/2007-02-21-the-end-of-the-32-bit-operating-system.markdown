---
author: Randy Bias
comments: true
date: 2007-02-21 23:54:02+00:00
layout: post
slug: the-end-of-the-32-bit-operating-system
title: The end of the 32-bit Operating System
wordpress_id: 22
old_categories:
- Technology
---

We use, almost exclusively, [64-bit](http://en.wikipedia.org/wiki/64-bit) operating systems, for both Linux and Windows in our own virtualization systems and are convinced that 32-bit OSes are dead except for specialty purposes (e.g. mobile computing, embedded devices).

There are a number of contributing factors to this conclusion, but most important are processors and RAM.  All of today's shipping processors for desktops and servers are fully 64-bit capable.  In terms of RAM, the requirements for some large applications are already up against the 4GB barrier.  Both [Zimbra](http://en.wikipedia.org/wiki/Zimbra) and [Exchange](http://en.wikipedia.org/wiki/Microsoft_Exchange_Server) 2007 require 2GB RAM and recommend 4GB RAM.

Add to this the [inevitable trend of virtualization](http://www.virtualization.info/2006/12/virtualization-trends-in-2006.html) and most physical systems will have much more than 4GB of RAM in the future.  For example, some of our 1U production systems (Sun X2200 M2) have 8GB of RAM and can scale to much more.  Clearly physical servers have exceeded the 4GB barrier and virtual machines are close behind.

While it is true that 32-bit OSes and processors that support [PAE](http://en.wikipedia.org/wiki/Physical_Address_Extension) can scale to more than 4GB of RAM, but there are still per process limits and it seems pretty clear that the writing is on the wall for 32-bit systems for desktop/server usage.  I have a strong suspicion that this is the year we'll start seeing mainstream vendors pushing primarily the 64-bit versions of their operating systems, especially at the server level.  In fact, Microsoft's Exchange 2007 is a [64-bit only app](http://www.microsoft.com/exchange/evaluation/TopQuestions.mspx) and they do not plan on delivering a 32-bit version.

From an operational perspective, we've had many 64-bit systems up as both physical and virtual machines for 8 months now and not one problem as surfaced on 64-bit systems.  The only place where 64-bit systems aren't in regular usage is on Amazon's [EC2](http://aws.amazon.com/ec2), where only 32-bit Xen instances are currently supported.

One historic concern regarding the move to 64-bit has been driver support, but this appears to have largely disappeared.  Anecdotally, we supported a huge diversity of hardware at various customer locations last year and not once encountered a problem finding an appropriate 64-bit driver and, when running Linux, every built-in driver had 64-bit support out of the box.

We're going to move ahead with declaring 2007 the year of the 64-bit OS.  If you haven't switched yet, now is the time to start thinking about moving to 64-bit for all new OS deployments.
