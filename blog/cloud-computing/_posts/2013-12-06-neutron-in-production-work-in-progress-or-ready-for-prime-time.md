---
title: 'Neutron in Production: Work in Progress or Ready for Prime Time?'
link: http://cloudscaling.com/blog/cloud-computing/neutron-in-production-work-in-progress-or-ready-for-prime-time/
author: randybias
description: 
post_id: 7040
created: 2013/12/06 15:31:54
created_gmt: 2013/12/06 23:31:54
comment_status: open
post_name: neutron-in-production-work-in-progress-or-ready-for-prime-time
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Neutron in Production: Work in Progress or Ready for Prime Time?

_(UPDATED: Video embedded below)_

Earlier this week, we hosted an OpenStack Meetup at the offices of our customer, EVault, here in San Francisco. Titled “[Neutron Networking and SDN in Production](http://www.meetup.com/openstack/events/152128692/),” the Meetup featured panelists from major contributors to Neutron and those offering open source plugins that leverage Neutron. ([SiliconANGLE](http://siliconangle.com/) covered the event live<del>, and a replay will be embedded here as soon as it’s available</del>. Some slides used to set initial context are [here](http://www.slideshare.net/randybias/sfbay-openstack-meetup-neutron-and-sdn-in-production-20131203).)

Our panel set out to discern the reality from hype in SDN and Neutron Networking. We started off by asking:

> Do we really need Neutron? Is nova-network good enough since many of the biggest OpenStack deployments are using nova-network with their own plug-ins?

We came to a common conclusion – although I don't know that we had complete consensus – that Neutron would eventually give us additional networking capabilities that are a hard requirement for success with certain kinds of workloads and use cases.

Next, we took on a more challenging line of questioning:

> Given that Neutron will support some critical functionality that will never be in Nova, is it the right place to dump _all_ networking functionality in OpenStack like load balancing as a service, VPN as a service, you-name-it as a service?

We didn't get anything like consensus on that point. Both panelists and audience members had reservations, myself included. Several panelists were pretty enthusiastic about putting all networking behind Neutron and having one standardized API.

This led into a conversation about the fact that people want to expose certain functionality in the Neutron API, and that functionality might not exist across all of the different vendor plug-ins. This took us to some debate and contention over what the API exposes:

> Should the API expose the lowest common denominator of functionality, or should it allow vendors to have all kind of extended functionality that's specific to their products? Does it make sense to have all of the functionality of all networking abstractions possible in one single unified API, or does it make more sense for Neutron to be a lower-level system that stitches together higher-order network services and just does basic service chaining, allowing you to manage each of those other individual network services via their own API's directly?

A couple of the panelists (myself included) felt that it’s a better approach for Neutron to offer a lower-level API. Panelists heavily engaged with the Neutron technical committee – understandably perhaps – felt like you can add everything you’d ever need into the Neutron API over time. This is a great topic for a follow-up post, as I firmly believe this is an unworkable approach that would lead to value-subtracting complexity and eventually be crushed under its own weight.

Next, we explored the question:

> Given that we need Neutron and its added functionality over time, is vanilla Neutron ready for production today, without any vendor plug ins?

The agreement was as close to universal as you can get in an OpenStack technical conversation: vanilla Neutron is not production grade, and it is not ready for the prime time. It needs vendor plug-ins that fill in the blanks.

This was shocking to a number of people in the audience who came up to us afterwards and said they just weren't expecting to hear that.

This begs another big question:

> How do you get into production with Neutron today and still avoid vendor lock-in?

Of course, vendor lock-in is not an absolute. It’s a spectrum. Each OpenStack user going into production with Neutron today has to evaluate the degree of lock-in they are willing to accept in exchange for the confidence of knowing they’ve got a solution that’s ready to support workloads in production.

**Wrapping it Up**

Ultimately, it's unclear whether all networking functions ever will be modeled behind the Neutron API with a bunch of plug-ins. That's part of the ongoing dialogue we're having in the community about what makes the most sense for the project’s future.

The bottom-line consensus was is that Neutron is a work in progress. Vanilla Neutron is not ready for production, so you should get a vendor if you need to move into production soon.

## Comments

**[Lorin Hochstein](#6623 "2013-12-06 18:03:00"):** Can you elaborate on the issues with vanilla Neutron? I would really like to see this kind of info get into the docs so folks doing deployments for the first time can have a sense of what they're getting into.

**[randybias](#6624 "2013-12-06 18:10:00"):** The panelists did not go into a lot of detail although the fact that there are some SPOFs was mentioned. This seems like a good topic for a part 2.

**[Lorin Hochstein](#6625 "2013-12-06 18:27:00"):** Ah, yes, the lack of "multihost" support for Neutron is a big issue. I was particularly curious about whether there were issues with the use of Open vSwitch in the vanilla implementation, or whether that piece of technology was pretty solid.

**[randybias](#6626 "2013-12-06 18:40:00"):** I got the impression everyone was fine with OVS.

**[Lorin Hochstein](#6627 "2013-12-06 19:02:00"):** I have heard anecdotes that it does not scale up so well, e.g.: https://twitter.com/edolnx/status/409149602428772353

**[randybias](#6628 "2013-12-06 19:07:00"):** Hrm. That seems like something to dig into. I wonder if it's OVS or the broken messaging model being used to communicate to the Quantum agents that control OVS? Argonne National Labs use of VXLAN with nova-network still seems like a possible winner to me for simple use cases.

**[Tim Bell](#6629 "2013-12-07 08:42:00"):** Can you describe 'scale' ? Do you mean 100s, 1000s or 10000s VMs ?

**[Lorin Hochstein](#6630 "2013-12-07 12:33:00"):** That's a good question. I was just quoting eNovance's Carl Perry (@edolnx) here, and I don't have firsthand experience with production Neutron deployments with the default OVS plugin. I think this would be a good topic of discussion on the main openstack mailing list. I would like to have the install docs communicate some information about how many nodes can go into a deployment (e.g., 10s, 100s, 1000s, 10000s) with, say, the Neutron OVS plugin, before issues start to occur.

**[Narayan Desai](#6631 "2013-12-07 17:41:00"):** OVS itself is fine, but the way that Neutron exercises is it seems to ignore performance as a goal. I think that a major factor is that nova-network needed to work (and perform) from day one.

**[randybias](#6632 "2013-12-07 17:57:00"):** Narayan can you elaborate a bit more on nova-network? And also your thoughts on direct VXLAN support there? That would be awesome.

**[Narayan Desai](#6633 "2013-12-07 19:03:00"):** Well, it seems to me that software is developed (and tested/scaled/etc) differently when it needs to work on day 1. That means things like: \- you start with a small feature set and a simple model \- everything needs to integrate properly \- the software gets used (and hence tested) all of the time \- the centrality of deployments/users (not users meaning people who contribute code, but users who actually run the code) What this meant for nova-network was that it basically worked. if you ventured off of the beaten path (as we did with multiple n-net nodes in bexar+) things got dicey, but the regular stuff was *solid*. It could be a bear to deploy; I'd be lying if i said that i didn't need to use tcpdump a lot in the early days, but that largely revealed mistakes we'd made in configuration. And largely, it all hung together. The contrast with quantum/neutron is pretty stark, i think. Initially, it doesn't need to work, since nova-network was there. So it didn't originate with the needs of deployments at all. It did, on the basis of abstract requirements gathering, I'm sure -- I mean there is a lot of investment tied up on neutron. But at the same time, that is different from what you know when you have system availability skin in the game. We're not scared of new things; hell, my job is to make sense of them. But when we did our assessment, neutron came up lacking. The model is really complicated; I think that the additional features that it enables are not a serious value (for us at least) when compared with the featureset/ease of nova-network. The user interface was clearly designed by someone who didn't need to use it in anger -- it does you no favors in common operations requiring multiple steps, etc. So, our patch for VXLAN support in nova-network is pretty simple, as it is easy to map to full (minimal) model provided by nova-network to VXLAN provisioned networks. I'm not sure what more there is to say about that. It took about 20 minute to write. While nova-network could be structured to accommodate drivers like this slightly more easily, it isn't hard to write them now.

