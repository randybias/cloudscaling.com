---
title: 'Production Engineering and OpenStack'
link: http://cloudscaling.com/blog/cloud-computing/production-engineering-and-openstack/
author: Cloudscaling Staff
description: 
post_id: 3986
created: 2012/06/07 10:02:58
created_gmt: 2012/06/07 17:02:58
comment_status: open
post_name: production-engineering-and-openstack
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Production Engineering and OpenStack

_(A version of this post [originally appeared](http://constructolution.wordpress.com/2012/05/21/lspe-presentation-on-openstack-6-2/) at my personal blog.)_ On [April 19th](http://www.meetup.com/SF-Bay-Area-Large-Scale-Production-Engineering/events/48901162/), I gave a brief presentation at the San Francisco Large Scale Production Engineering ([LSPE](http://www.meetup.com/SF-Bay-Area-Large-Scale-Production-Engineering/)) meetup group.  The night’s topic was “Private Clouds.” I talked about an OpenStack-based private cloud deployment that we at Cloudscaling have done for a large enterprise. Despite all the buzz around and interest in OpenStack, there’s a relatively small amount of real production deployments that have happened so far, so I wanted to reassure people that yes, petunia, you can deploy a real production cloud using OpenStack. I covered the high points of planning, building, and running an OpenStack-based cloud and also gave some specifics about what tools and techniques Cloudscaling is using in our builds. There are two points from the talk that I'd like to draw out. One is organizational, not technological. Cloud is a different kind of IT, and it requires different skillsets and mindsets in an IT group. Because of that, I recommend building a new Ops group to run your cloud. However in any good-size deployment you’re likely to be integrating with an existing IT Ops team at some point or another – and probably right before you launch. In order for this to work, you need to build bridges to that team from day one. Nothing can derail a new cloud like resistance (active or passive) from an entrenched Ops team – so make sure they’re on your side from the start. Second, building a production environment in OpenStack means adding  capabilities to vanilla OpenStack. Things like configuration management, capacity management, user management, remote access, high availability, upgrading, troubleshooting, monitoring and auditing are all necessary -- and they're not in vanilla OpenStack. Take a look at the presentation, embedded and linked below, then let me know your thoughts in the comments. 

**[Openstack In Real Life](http://www.slideshare.net/pgutheb/openstack-in-real-life)**

View more [presentations](http://www.slideshare.net/) from [Paul Guth](http://www.slideshare.net/pgutheb)

## Comments

**[Josh Baverstock](#3366 "2012-06-07 22:49:00"):** This is a great summary, thank you for sharing it.

