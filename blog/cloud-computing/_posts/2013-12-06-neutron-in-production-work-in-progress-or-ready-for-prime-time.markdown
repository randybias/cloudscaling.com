---
author: Randy Bias
comments: true
date: 2013-12-06 23:31:54+00:00
layout: post
slug: neutron-in-production-work-in-progress-or-ready-for-prime-time
title: 'Neutron in Production: Work in Progress or Ready for Prime Time?'
wordpress_id: 7040
old_categories:
- Cloud Computing
- OpenStack
tags:
- Meetups
- Networking
- Neutron
- Nova
- OpenStack
- SDN
---




_(UPDATED: Video embedded below)_




Earlier this week, we hosted an OpenStack Meetup at the offices of our customer, EVault, here in San Francisco. Titled “[Neutron Networking and SDN in Production](http://www.meetup.com/openstack/events/152128692/),” the Meetup featured panelists from major contributors to Neutron and those offering open source plugins that leverage Neutron. ([SiliconANGLE](http://siliconangle.com/) covered the event live<del>, and a replay will be embedded here as soon as it’s available</del>. Some slides used to set initial context are [here](http://www.slideshare.net/randybias/sfbay-openstack-meetup-neutron-and-sdn-in-production-20131203).)










Our panel set out to discern the reality from hype in SDN and Neutron Networking. We started off by asking:




<blockquote>

> 
> Do we really need Neutron? Is nova-network good enough since many of the biggest OpenStack deployments are using nova-network with their own plug-ins?
> 
> </blockquote>




We came to a common conclusion – although I don't know that we had complete consensus – that Neutron would eventually give us additional networking capabilities that are a hard requirement for success with certain kinds of workloads and use cases.




Next, we took on a more challenging line of questioning:




<blockquote>

> 
> Given that Neutron will support some critical functionality that will never be in Nova, is it the right place to dump _all_ networking functionality in OpenStack like load balancing as a service, VPN as a service, you-name-it as a service?
> 
> </blockquote>




We didn't get anything like consensus on that point. Both panelists and audience members had reservations, myself included. Several panelists were pretty enthusiastic about putting all networking behind Neutron and having one standardized API.




This led into a conversation about the fact that people want to expose certain functionality in the Neutron API, and that functionality might not exist across all of the different vendor plug-ins. This took us to some debate and contention over what the API exposes:




<blockquote>

> 
> Should the API expose the lowest common denominator of functionality, or should it allow vendors to have all kind of extended functionality that's specific to their products? Does it make sense to have all of the functionality of all networking abstractions possible in one single unified API, or does it make more sense for Neutron to be a lower-level system that stitches together higher-order network services and just does basic service chaining, allowing you to manage each of those other individual network services via their own API's directly?
> 
> </blockquote>




A couple of the panelists (myself included) felt that it’s a better approach for Neutron to offer a lower-level API. Panelists heavily engaged with the Neutron technical committee – understandably perhaps – felt like you can add everything you’d ever need into the Neutron API over time. This is a great topic for a follow-up post, as I firmly believe this is an unworkable approach that would lead to value-subtracting complexity and eventually be crushed under its own weight.




Next, we explored the question:




<blockquote>

> 
> Given that we need Neutron and its added functionality over time, is vanilla Neutron ready for production today, without any vendor plug ins?
> 
> </blockquote>




The agreement was as close to universal as you can get in an OpenStack technical conversation: vanilla Neutron is not production grade, and it is not ready for the prime time. It needs vendor plug-ins that fill in the blanks.




This was shocking to a number of people in the audience who came up to us afterwards and said they just weren't expecting to hear that.




This begs another big question:




<blockquote>

> 
> How do you get into production with Neutron today and still avoid vendor lock-in?
> 
> </blockquote>




Of course, vendor lock-in is not an absolute. It’s a spectrum. Each OpenStack user going into production with Neutron today has to evaluate the degree of lock-in they are willing to accept in exchange for the confidence of knowing they’ve got a solution that’s ready to support workloads in production.




**Wrapping it Up**




Ultimately, it's unclear whether all networking functions ever will be modeled behind the Neutron API with a bunch of plug-ins. That's part of the ongoing dialogue we're having in the community about what makes the most sense for the project’s future.




The bottom-line consensus was is that Neutron is a work in progress. Vanilla Neutron is not ready for production, so you should get a vendor if you need to move into production soon.






