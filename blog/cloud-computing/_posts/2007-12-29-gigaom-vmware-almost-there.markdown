---
author: Randy Bias
comments: true
date: 2007-12-29 07:40:14+00:00
layout: post
slug: gigaom-vmware-almost-there
title: GigaOM & VMware … almost there!
wordpress_id: 2342
old_categories:
- Cloud Computing
- Technology
tags:
- Virtualization
---

I hate to be the contrarian, but we're so close to getting to the ultimate conclusion on virtualization, but keep missing the point.  It's about more than just increasing datacenter utilization. It's about a **lot** more in fact.

In a recent [new interview](http://gigaom.com/2007/12/26/vmware-mendel-roseblum-interview/) by the GigaOM with Chief Scientist Mendel Roseblum of VMware, Mendel touches very briefly on the core issue.  A choice selection in particular is [here](http://blogs.vmware.com/vmtn/2007/12/gigaom-intervie.html) on the VMTN blog:




People are now beginning to utilize virtualization and federate these pizza-box servers. I think if you start to view them as one unit, you can get more utilization out of them. I think in coming months you are going to see a big push to make all servers (and other hardware) inside a data center look more like a single unit. Ironically, if you look at the future â€” low-end pizza box servers with multicore CPUs running our software â€” you will start to see the big machine we were building where we got started.




I talked about this same issue briefly [ before](http://neotactics.com/blog/technology/gigaoms-pizza-boxes-need-new-toppings/).


This isn't just about utilization, although I'll grant that it's the most pressing current issue.  The solution for under-utilization is clearly virtualization and it's implementation is well under way.  I don't meet anyone any more who isn't actively deploying virtualization in order to increase utilization.

Unfortunately, this just puts us back to the real problem:

_How do we manage an ever greater proliferation of systems.  **And do it efficiently?**_

Turning the datacenter into a single large virtualized computer (aka 'virtual fabric') is the future.  Big players, like Google, have [custom solutions](http://en.wikipedia.org/wiki/Google_File_System) to allow effective management of large scale systems, but similar technology for the average company is far out of reach.

Ultimately, if virtualization is only a tool for increasing utilization, but goes no further, then we've failed.  We need to move towards a longer term model where:




  
  * Virtual machines are effectively abstracted from the hardware that they run on
  
  * Virtualized infrastructure can be created and run in an [agile manner](http://www.cloudscale.net/2007/7/31/agile-it-environments)
  
  * The systems management discipline develops common [design patterns](http://en.wikipedia.org/wiki/Design_patterns)


It just isn't enough to utilize physical infrastructure better.  Virtualization also brings with it whole new possibilities in terms of systems management, IT design patterns, and new operational management techniques.
