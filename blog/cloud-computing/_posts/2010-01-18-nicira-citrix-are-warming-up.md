---
title: 'Nicira & Citrix are Warming Up'
link: http://cloudscaling.com/blog/cloud-computing/nicira-citrix-are-warming-up/
author: randybias
description: 
post_id: 916
created: 2010/01/18 16:58:39
created_gmt: 2010/01/19 00:58:39
comment_status: open
post_name: nicira-citrix-are-warming-up
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Nicira & Citrix are Warming Up

Some exciting [news](http://blog.xen.org/index.php/2010/01/18/xen-cloud-platform-code-update/) on the open cloud front.  [Nicira's](http://www.nicira.com) [openvswitch](http://openvswitch.org/) (think: open source Cisco Nexus 1000V) made it in as the default vSwitch in the latest release of the Xen Cloud Platform.  For those who aren't aware, the [Xen Cloud Platform](http://www.xen.org/products/cloudxen.html) is an open source provider/cloud-focused management framework for clouds.  The website says: 

* * *
    
    
        Xen Cloud Platform offers ISVs and service providers a complete cloud
        infrastructure platform with a powerful management stack based on
        open, standards-based APIs, support for mutli-tenancy, SLA guarantees
        and deteailed metrics for consumption based charging.

* * *

I've mentioned Nicira before in public forums and videos made with [John Willis](http://www.johnmwillis.com/), but I haven't posted here about them.  Nicira is commercializing the [OpenFlow](http://www.openflowswitch.org/) switch specification.  OpenFlow is a very important change in the way we build, design, and manage network infrastructure. From the website: 

* * *
    
    
        In a classical router or switch, the fast packet forwarding (data path)
        and the high level routing decisions (control path) occur on the same
        device. An OpenFlow Switch separates these two functions. The data
        path portion still resides on the switch, while high-level routing decisions
        are moved to a separate controller, typically a standard server. The
        OpenFlow Switch and Controller communicate via the OpenFlow protocol,
        which defines messages, such as packet-received, send-packet-out,
        modify-forwarding-table, and get-stats.

* * *

What this means is that instead of allowing the switch to make routing/switching decisions, you can have centralizing control of the entire network topology.  OpenFlow has two types of switches: software switches like the openvswitch and firmware that can be loaded onto cheap switch hardware.  Combined you can create fully virtualized networking.  A single centralized control system that is integrated to your cloud layout can reprogram your logical network topology on-demand.  A virtual server moves from one host to another?  Switches are reprogrammed dynamically and the move is never noticed. This means you can create a fully multi-tenant, highly secure, extremely flexible, cloud network topology that maps exactly to your requirements.  This contrasts starkly to the current cloud networking today, which is either extremely restrictive (Amazon's EC2), has scaling problems (e.g. 802.1q VLAN tagging), or doesn't give you complete control (Rackspace Cloud, et al). Let me clarify what I mean by complete control before anyone is offended. Rackspace Cloud does provide more control than EC2, but it doesn't put you in the driver's seat.  Imagine that instead of having a fixed network architecture like, every customer has a 'frontend public network' and a 'backend private network', you have something that allows arbitrary network configurations?  Customers get a 'private' network by default and buy networks as their applications need them.  Now having a separate network for database servers per PCI compliance (or other) rules is trivial. Many other things are possible if you move towards an OpenFlow-based network architecture with a centralized control system, including: 

  * Distributed firewall just like Amazon EC2's distributed firewall
  * On-demand network introspection / tapping
  * On-demand in-line firewall / IPS
  * N-tier network topologies
  * Distributed Virtual Switch (a la Cisco Nexus 1000V)
There are many other possibilities.  The eventual promise here is network virtualization as good as storage or computing virtualization is today. Way to go Nicira and Citrix!

## Comments

**[virtualizationtimes.com](#442 "2010-02-08 17:58:11"):** **Story added...** Your story was featured in virtualizationtimes.com! Here is the link to vote it up and promote it: http://www.virtualizationtimes.com/node/2876...

**[Quora](#443 "2010-11-02 11:28:38"):** **What is Nicira Networks building?...** I've heard from multiple sources they are building a network virtualization product. I've also heard that Vmware is trying to acquire them. This seems consistent with the following: http://cloudscaling.com/blog/cloud-computing/nicira-citrix-are-warm...

