---
author: Randy Bias
comments: true
date: 2012-04-09 18:49:59+00:00
layout: post
slug: citrix-blows-off-steam-defends-poor-marketing
title: An Appliance Does Not Make Your Software Architecture AWS Compatible
wordpress_id: 3858
old_categories:
- Cloud Computing
---

On Saturday morning, an article I wrote went out on GigaOm entitled "[True or false: Citrix is more compatible with AWS](http://gigaom.com/2012/04/07/true-or-false-citrix-is-more-compatible-with-aws/)."  Reactions were generally very positive, with only a a small minority reaction, mostly from Citrix or Citrix fans. Some of those negative reactions deserve a response that is greater than 140 characters in length.

The basic premise of the article was that Citrix was making pretty outlandish claims about being the only one who "even comes close" to "meeting [the] requirements]" for "AWS-style architecture", "proven at scale in real production clouds", and is "compatible with the Amazon architecture."

These are big claims on Citrix's part and an attempt to set themselves apart from everyone else primarily on the strength of their Amazon compatibility.  To let such claims go unanswered, when they are formed on such a weak basis, is not possible.

**The Article & It's Reception**
There isn't much reason to retread my article on GigaOm.  It speaks for itself.  I focused not on CloudStack vs. OpenStack, but endeavored to talk about the claims around AWS compatibility and Amazon-style architecture.

Tweets were exchanged with the chief cloud architect from Citrix and Christian Reilly, one of their big customers, proponents, and briefly, an employee of Cloud.com/Citrix.  The result was that Citrix made it clear that AWS compatibility *is* possible with CloudStack 3.0, since February 2012, **if** you buy a Citrix NetScaler.

_In other words, on an open source project to open source project comparison, CloudStack has no more additional AWS network compatibility than does OpenStack._

Here's what I said in the GigaOm article[1]:


 The default AWS networking is a flat layer-3 network, which CloudStack can support, but typically does not. Much of their value-added functionality (e.g. load balancing, network area translation) disappears when using flat networking. Default CloudStack deployments aren’t network compatible with AWS.</blockquote>




My stance was clear in the original and stays the same.  If you download CloudStack, turn it on in flat network mode, like Amazon networking, you lose a bunch of CloudStack's purported value add and are not any more compatible with AWS networking than OpenStack.  Citrix stance is simple: buy a NetScaler to fix this.




**"Designed From the Ground Up"**
Here's the CloudStack 3.0 [release notes](http://download.cloud.com/releases/3.0.0/CloudStack3.0.0ReleaseNotes.pdf) declaring support for the Citrix NetScaler.  CloudStack 3.0 (Acton) was [released](http://cloudstack.org/blog/117-cloudstack-acton-released.html) on February 28th, 2012.  So native support of their "designed from the ground up for AWS compatibility" for ELB, Elastic IP, and NAT in flat networking mode (Amazon's default) is now 2 months old.  This support is provided by purchasing a Citrix hardware appliance, which is the only load balancer currently supported by CloudStack today.




**Citrix Isn't More Designed to be AWS Compatible Than Anyone Else**
I called Citrix out on some outrageous marketing claims that are minimally supported by the evidence.  CloudStack was not designed from the ground up to be AWS compatible or in the Amazon architectural model.  Nor is it significantly ahead  of projects like Eucalyptus or OpenStack in terms of [AWS API features supported](http://wiki.openstack.org/Nova/APIFeatureComparison).




This isn't about OpenStack vs. CloudStack though some are trying to make it that.  This isn't about whether CloudStack is more open source than OpenStack or vice versa.  It's about these marketing claims.




It comes down to this: You can build an Amazon-style and possibly even somewhat AWS compatible cloud using CloudStack **IF** you also buy the Citrix NetScaler.  The same can also be said of OpenStack and possibly even Eucalyptus with a modest amount of integration work.




Adding integration to hardware projects in the last two months does not make true the claims of CloudStack software being "designed from the ground up" to be the "only one who comes close" to AWS compatibility.






* * *



[1] This is backed up when you read the CloudStack 3.0 [Advanced Installation Guide](http://download.cloud.com/releases/3.0.0/CloudStack3.0InstallGuide.pdf), which shows that you must purchase a 'physical' device to get NAT, ELB, Elastic IP, and firewall capabilities.
