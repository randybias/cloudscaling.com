---
title: 'Micro Virtual Machines'
link: http://cloudscaling.com/blog/cloud-computing/technology/micro-virtual-machines/
author: randybias
description: 
post_id: 2331
created: 2007/07/12 06:51:11
created_gmt: 2007/07/12 14:51:11
comment_status: open
post_name: micro-virtual-machines
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Micro Virtual Machines

**Introduction** MicroVMs are a technology I was playing with for the first product [we](http://www.cloudscale.net) considered spinning out, the Virtual Server Room, a sort of virtual appliance micro-cluster in a box made up of back office IT servers. I thought I would write a bit about MicroVMs because I think they are going to have a special place in a future where virtualization is a dominant technology. MicroVMs are to [virtual appliances](http://en.wikipedia.org/wiki/Virtual_appliance) what small [embedded systems](http://en.wikipedia.org/wiki/Embedded_system) like Linksys routers are to larger scale hardware appliances, like a NetScreen-50 firewall. Today's typical virtual appliance is typically a simplistic packaging of a traditional OS and a bundled application. Some folks, like [rPath](http://www.rpath.com/) and [JumpBox](http://www.jumpbox.com/) have either created tools that more sophisticated packaging of these virtual appliances, like a traditional appliance, or, in the case of JumpBox, literally attempt to recreate the hardware appliance experience with a virtual machine. I think that over time we'll start seeing more sophisticated virtual appliances, but they will continue in the mold of the current crop and essentially under the hood is a general purpose OS that has been heavily customized. Contrast this to small embedded appliances we see every day like Linksys routers, the iPhone, and similar products. Or more esoteric embedded systems like those from [Dust Networks](http://www.dustnetworks.com/products/smartmesh-xd.shtml). Most embedded systems have [specialized operating systems](http://www.tinyos.net/). Even when based on a more general purpose OS, they tend to have been stripped of almost anything recognizable to the original OS and, becoming in effect an [embedded OS](http://www.busybox.net/). This is usually done for power or simplicity concerns.  In fact, the smaller the appliance, the less likely it is to share attributes with general purpose computers. Smaller appliances have no disk drives, no consoles, no serial port access, with only a single button to reset them to 'factory default'. Imagine the equivalent for today's virtual appliances. This is what I call a MicroVM. **MicroVMs** Given that resources such as disk, memory, and compute are so cheap why would a MicroVM that mimics a typical small form-factor embedded system be of interest? There are a number of reasons, which are generally similar to those for a virtual appliance, including: 

  * Increased security
  * Ease of deployment
  * Disposability
But in my mind, perhaps the most interesting usage is the temporary deployment of services at run-time in front of already deployed virtual machines. For example, say that you want to deploy a network sniffer in front of an already deployed virtual appliance? This is easy today. An IT staffer will simply put a laptop or a network sniffing device temporarily in-line with a physical server. But with a virtual server it is much harder. In fact, we're regularly seeing more complex network setups inside of a single physical server while the tools to troubleshoot and debug those setups have not become more sophisticated. **An Example** As part of the Virtual Server Room (VSR) project, which never saw the light of day outside of the lab, I developed a MicroVM based on the excellent [pfSense](http://www.pfsense.com/) (firewall) live CD-ROM. This firewall MicroVM built on top of VMware technology had some interesting characteristics: 

  * Booted from a 'live' CD-ROM
  * Configuration state was saved to a 'floppy disk'
  * RAM footprint was 64MB
  * No disk drives
This allowed me to install a network firewall in front of every customer's Virtual Server Room using a mere 64MB of RAM, 35MB of disk space for the ISO CD-ROM, and 1.44MB per MicroVM for the 'floppy disk' image. In return, for each customer I had a full-fledged, easy to use and maintain firewall including routing, NAT, and a dedicated DMZ segment for 'public' virtual appliances. (In this particular case, the pfSense live CD-ROM is a MicroVM out of the box essentially, I just added control, configuration, and provisioning tools on top of it). The embedded characteristics made adding a firewall to each VSR trivial and painless. **Wrapping Up** This is a very small example, but I think in the future we're going to see most virtualization platforms (what the folks at [CloudScale](http://www.cloudscale.net/) call a 'virtual fabric') such as [VMware Virtual Center](http://www.vmware.com/products/vi/vc/), [VirtualIron](http://www.virtualiron.com/), [EC2](http://www.amazon.com/ec2), and [XenSource](http://www.xensource.com/) make it very easy to change and modify the 'physical' structure inside the fabric itself at run-time. In those cases, adding MicroVMs on the fly for diagnostics, security, or similar capabilities is a no-brainer. How many security and network engineers would love the ability to slap a specialized tool into their current networks on-demand and in seconds? Most, I think. We're going to see a number of interesting use cases like this in the near future. MicroVMs, coming to you soon...

## Comments

**[Receipt Printer](#2 "2009-09-16 21:31:14"):** test

**[receipt printer](#1083 "2009-09-16 20:31:00"):** test

