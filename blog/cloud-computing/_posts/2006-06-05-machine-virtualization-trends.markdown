---
author: Randy Bias
comments: true
date: 2006-06-05 02:16:23+00:00
layout: post
slug: machine-virtualization-trends
title: Machine Virtualization & Trends
wordpress_id: 15
old_categories:
- Technology
tags:
- Virtualization
---

What are 'Virtual Machines' and why should you care?  This article explores that question with an eye to the impact on startups in particular.

**Background**
Machine virtualization technology has existed for a very long time.  From the days of IBM's VM/CMS operating system, created in 1996, in fact.  Although treated as a fairly serious technology in mainframe environments it has long languished in terms of it's support in x86 hardware.  Some of the latest processor technology from Intel and AMD however brings real hardware support for virtualization.  Combined with today's dual core 64-bit processors, it is now possible to run a single machine that hosts 8 or even 16 smaller profile 'virtual machine' servers.

For more background, I recommend this [article](Whitepaper: The Rise of the Virtual Machine and the real impact it will have (pdf)) from Thomas Weisel Partners and Wikipedia's entries on [Virtualization](http://en.wikipedia.org/wiki/Virtualization) and [Virtual machines](http://en.wikipedia.org/wiki/Virtual_machine).

**The State of Play**
Today virtualization of machines is on the rise, due in part to new hardware support virtualization, the rise of 64-bit processors, Moore's Law, and the continued commoditization of x86 hardware.  It is now possible to build a single 64-bit system with 4 processors (2 x dual-core AMD or Intel Xeon) and 16+GB of RAM in a single 1U or 2U form factor for less than $2500.  This system could in turn host up to 16 guest 'virtual machines', each with ~1GB of RAM.  Combined with the incredible low cost of storage today and the costs involved with deploying 16 servers (virtual in this case) have dropped dramatically.

But is the added complexity worth the cost savings?
<!-- more -->
Virtual machine (VM) technology provides more than cost savings.  By adding a layer of abstraction between the hardware and the OS a number of tremendous advantages are realized, including:



	
  * Increased redundancy and resilience for mission critical servers

	
  * Ability to 'snapshot' a system for easy system restore or system duplication (e.g. testing changes/upgrades)

	
  * 'One server - one service' principle increases up-time and eases maintenance hassles

	
  * Server portability from your provider to you

	
  * Server as a file on disk


On the other hand, this layer of abstraction does provide an impediment for any application that relies on speaking directly to hardware.

**Bringing it Home**
It was not immediately obvious to me how VM technology could save time and increase uptime when I first encountered it and bringing it home with concrete examples will help cement understanding here.

Example #1: Server Upgrades
VMs are simply files on a disk when powered off.  This means that is quick and easy to make a complete backup or snapshot of these disks in a known good state.  If performed immediately before a system upgrade you a 'known good' state to roll back to in case of problems during your upgrade or update process.  Many VM products even make this process extremely simple for you with a single button to click to 'snapshot' or 'restore' a machine.  This significantly reduces the risk involved with server upgrades.

On top of this, if you wanted to test an upgrade or reproduce and environment it is as simple as copying the VM files, copying them to another system, and booting them back up.  In effect, a 100% exact duplicate of the environment in production.  The advantages for QA groups seem obvious.

Example #2: The Server in the Network
If a server is a file that resides on disk.  And if the 'disk' in question is a LUN out in the network, either a SAN or NAS on a Gigabit Ethernet network, then the question of hardware failures becomes moot.  In today's environment hardware failures are most frequently due to problems with RAM or disk drives.  Deploying RAID in every system is complex and painful.  Running Fiber Channel to all of the 16 hosted systems mentioned above would have been painful at best compared to connecting 1 or 2 host hardware platforms.

And, in the case of NAS, when using pre-existing Gigabit Ethernet networks and iSCSI it is possible to simply centralize all storage in a few places and access it using the infrastructure you have in place today.

Now your server is a file in the network on redundant storage, capable of being easily moved between host hardware, resilient against failure and with proper architecting capable of being failed over in real time between hosts.

Some VM vendors are in the process of making it easy to move your VM server between **while it is running**.

Example #3: Server!  Server!  Get your Server here!
Need a web server quick?  Or perhaps you need a custom mail or groupware server in a hurry?  With servers as simply files, the day of simply purchasing a ready-to-use custom server are here.  Technology is being built today, by folks such as [rPath](http://www.rpath.com), that even allows you to 'cook' your own server up from components and download it as a virtual machine.  And this technology is nascent.  I fully expect that someone like Microsoft will simply deliver you new servers on-demand in the future.

**VM in the Future**
The advantages of virtual machine technology seem apparent, even given the obvious drawbacks.  However, with new hardware support for virtualization, new techniques for creating and deploying virtual machine technology, and the ever increasing power of today's x86 machines it seems a matter of time before virtual machine technology has a far deeper penetration than it's current 6%.  I might even speculate that longer term VMs might be the rule instead of the exception, especially for simple appliance servers.

**Conclusion**
Virtual machine technology is an important new IT tool beginning to reach maturity and acceptance that can deeply impact your business.  For smaller organizations it allows better utilization of hardware resources, eases the pain of moving or upgrading hardware, and allows much more agility than ever before for IT tasks.  Both the cost savings in hardware and in maintenance strongly suggest that everyone should look at the benefits of virtualization.  With the advent of cheaper, easier NAS, more powerful machines, ubiquity of Gigabit networks, and mainstream acceptance and support of VM it is 'no-brainer' to begin exploring how your organization can use this technology today.
