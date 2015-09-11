---
title: 'OpenStack at 3: This is What Winning Looks Like'
link: http://cloudscaling.com/blog/cloud-computing/openstack-at-3-this-is-what-winning-looks-like/
author: randybias
description: 
post_id: 6493
created: 2013/07/19 10:44:08
created_gmt: 2013/07/19 17:44:08
comment_status: open
post_name: openstack-at-3-this-is-what-winning-looks-like
status: publish
post_type: post
layout: post
category: cloud-computing
---

# OpenStack at 3: This is What Winning Looks Like

![](https://lh5.googleusercontent.com/_iAumNHX0L39ptBhu9JBZ_e76r1sb4qEQNn8MLLCxHQviZgf38bmETZsqpvpkWZjNjQBY64Q8M0qLa9eX-idzh-tlPwbeX1ugPqDwAW7WWtCNDo_WiLa9Vg)

If winning derives from [rapid iteration](http://hbr.org/2013/05/why-the-lean-start-up-changes-everything) of a [minimum viable product](http://en.wikipedia.org/wiki/Minimum_viable_product), then all indications are that the momentum driving OpenStack will only continue.

Consider three facts that demonstrate the rapid iterations driving OpenStack skyward:

**1\. Technology is Keeping Up With Hype**

There’s no shortage of hype in the OpenStack community. Vendors, pundits and competitive ecosystems are all vying to see who can deliver the greatest OpenStack hyperbole or invective.

Hype is deadly when it *consistently* writes checks that the technology can’t cash. And in the case of OpenStack, the technology is evolving as rapidly as the hype. We know this by simple observation: if it wasn’t the case, we’d all be screwed.

**2\. The SDLC Has Greatly Matured**

The leadership of people like [Thierry Carrez](http://engineering.cloudscaling.com/stacker-voices-thierry-carrez-openstack-foundation/), Release Manager of OpenStack, and [Monty Taylor](http://engineering.cloudscaling.com/stacker-voices-monty-taylor-hp/) of HP has resulted in a continuous integration (CI) process that has greatly improved the reliability of the OpenStack code base and allowed for maintaining momentum, all while the software has grown from two projects (Nova and Swift) to nine.  The CI system depends heavily on the Tempest integration tests in OpenStack that have grown from just over 70 integration tests in January 2012 to over 700 integration tests last month. ([More at SimplicityScales]( http://engineering.cloudscaling.com/happy-3rd-birthday-openstack))

Check out [jenkins.openstack.org](http://jenkins.openstack.org) to get an example of the magnitude of OpenStack’s automated testing system. Over 700 test clouds are deployed every day. Awesome stuff, and it helps assure the quality of the code pushed with each release.

No other competing open source cloud project has this scale of testing.

**3\. Interest is High. And Growing**

The Grizzly release of OpenStack has 230 new features and 7,620 patches from 517 contributors. Developer growth, diverse corporate support and accumulated community have all surpassed Eucalyptus, CloudStack and OpenNebula, and not even close. Check out Qingye (John) Jiang’s compilation and analysis of [community contribution statistics](http://www.qyjohn.net/?p=3120) for more on this.

![](https://lh4.googleusercontent.com/DFYfDvvyupY2YdoahFQDsVqDvO8eNTBQmm8BVAFW2Ni2K7lX0oKwem3H3aBX0L28KXpX0W6wSU25IwAq5dMrxhBIQ51JEtIEEywBc2a5JJvxKwdEY4U36AE)

_Above: A comparison of open source cloud software project community participation, from "[State of the Stack](http://www.slideshare.net/randybias/state-of-the-stack-april-2013)."_

Also, consider the growing number of [production clouds](/blog/press-releases/livingsocial-chooses-open-cloud-system/). They run the gamut from big service providers (AT&T, Comcast, Rackspace) to SaaS providers (PayPal, [Living Social](http://cloudscaling.com/blog/press-releases/livingsocial-chooses-open-cloud-system/), [Ubisoft](http://cloudscaling.com/blog/press-releases/ubisoft-chooses-cloudscaling-open-cloud-system/)) and enterprises (Fidelity).

Awhile back, [Charlie Babcock of Informationweek said](http://www.informationweek.com/cloud-computing/infrastructure/openstack-fights-cloud-lock-in-worries/240047880), “OpenStack appears to be a more advanced or more modern open source project than some of its predecessors because it’s a highly coordinated effort.”

True. And in the time since he wrote it (last November), it’s only become more coordinated.

**The Next Three Years**

We’ve advocated adoption of OpenStack [since it was launched](/blog/cloud-computing/does-openstack-change-the-cloud-game/) and were responsible for some of it’s earliest public cloud wins. Having designed and deployed open source IaaS (CloudStack, Eucalyptus, OpenNebula) and closed source IaaS (GoGrid, VMware, DynamicOps), we saw great promise in OpenStack. It was one of the first open source IaaS solutions that was a distributed scale-out software system and showed promise for creating a vibrant community. The right architecture with the right community is the killer combination for success.

We wanted something that would be as compatible as possible with Amazon Web Services (AWS) and [our version of OpenStack](/products/ocs-system-overview/) delivers on this promise.  

Looking ahead to the next three years, there are significant threats to the ability of OpenStack to continue on the route to AWS compatibility. We cannot let that happen.

Simon Wardley, a Cloudscaling advisor and prominent thought leader in elastic cloud computing, is [fond of saying](http://blog.gardeviance.org/2013/07/could-cloudstack-eucalyptus-open-nebula.html) that OpenStack’s only chance of survival is to immediately embrace the AWS API set, supported by architectural configurations that allow the infrastructure to deliver services that are behaviorally consistent with their AWS counterparts.

Simon and I agree on this. By its sixth birthday, OpenStack needs to have accomplished this objective if not as an exclusive path then as a fully supported alternative to a differentiated API set.

But more on that later.

For today, happy birthday, OpenStack. Congratulations on a job well done.

**(JOIN US in Portland next week at OSCON for the [OpenStack 3rd birthday bash](http://openstack3rdbirthday.eventbrite.com/).)**