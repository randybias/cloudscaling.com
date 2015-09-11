---
title: "\"Vanilla OpenStack\" Doesn't Exist and Never Will"
link: http://cloudscaling.com/blog/openstack/vanilla-openstack-doesnt-exist-and-never-will/
author: randybias
description: 
post_id: 7704
created: 2015/02/03 08:45:26
created_gmt: 2015/02/03 16:45:26
comment_status: open
post_name: vanilla-openstack-doesnt-exist-and-never-will
status: publish
post_type: post
layout: post
category: openstack
---

# "Vanilla OpenStack" Doesn't Exist and Never Will

One of the biggest failures of OpenStack to date is expectation setting.  New potential OpenStack users and customers come into OpenStack and expect to find:

  * A uniform, monolithic cloud operating system (like Linux)
  * Set of well-integrated and interoperable components
  * Interoperability with their own vendors of choice in hardware, software, and public cloud

Unfortunately, none of this exists and probably none of it should have ever been expected since OpenStack won’t ever become a unified cloud operating system.

The problem can be summed up by a request I still see regularly from customers:

> I want ‘vanilla OpenStack’

Vanilla OpenStack does not exist, never has existed, and never will exist.

**Examining The Request**

First of all, it’s a reasonable request.  The potential new OpenStack customer is indirectly asking for those things that led them to OpenStack in the first place.  The bi-annual user survey has already told us what people care about:

![OpenStack User Survey Fall 2014 v1 copy.001]({{ site.url }}/assets/media/2015/02/OpenStack-User-Survey-Fall-2014-v1-copy.001.jpg)

The top reasons for OpenStack boil down to:

  * Help me reduce costs
  * Help me reduce or eliminate vendor lock-in

Hence the desire for “vanilla” OpenStack.

But what is “vanilla”?  It could be a number of things:

  1. Give me the “official” OpenStack release with no modifications
  2. Give me OpenStack with all default settings
  3. Give me an OpenStack that has no proprietary components

Which immediately leads into the next problem: what is “OpenStack”?  Which could also be a number of things[1