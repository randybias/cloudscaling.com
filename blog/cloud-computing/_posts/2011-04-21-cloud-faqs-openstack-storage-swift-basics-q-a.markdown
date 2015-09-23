---
author: su
comments: true
date: 2011-04-21 17:19:04+00:00
layout: post
slug: cloud-faqs-openstack-storage-swift-basics-q-a
title: 'Cloud FAQs: OpenStack Storage (Swift) – Basics Q & A'
wordpress_id: 1873
old_categories:
- Cloud Computing
tags:
- cloudscaling
- faq
- iaas
- infrastructure
- OpenStack
- S3
- Storage
- Swift
---

We get a lot of inquiries from clients, potential clients, friends of the family, and strangers, particularly about cloud computing and Infrastructure-as-a-Service (IaaS).  Recently, we had someone ask us a series of questions about [OpenStack](http://www.openstack.org/) Storage ([Swift](http://swift.openstack.org/)).  Given that the [OpenStack Design Summit](http://www.openstack.org/blog/2011/03/openstack-conference-design-summit-2011-sponsored-by-citrix/) is next week, we thought it would make more sense to answer these questions through the blog for others who might have similar questions.

<!-- more -->

Some of this will seem self-evident to those in the OpenStack community, but for those outside, I think they represent a fairly common set of questions that folks ask when trying to understand where Swift is at.


** Q**: Are there commercial installations of Swift ? Any changes to the code in those deployments?

A: Outside of Rackspace, we know of three additional commercial deployments: Internap's XIPCloud, KT's ucloud and Nephoscale. We are aware of a number of other folks working on deployments, but can't name names. Altogether, these are some very large deployments outside of Rackspace that are running Swift in production. The core of Swift has been battle-tested not just by Rackspace, but by these other service providers as well.

Swift provides the core functionality of the object storage system.  There are many systems that need to be designed and built around the core of OpenStack. This includes:

> 
> 
	
>   * network and load balancing architecture
> 
	
>   * authentication/user management systems
> 
	
>   * billing
> 
	
>   * portal development
> 
	
>   * customer support tools
> 
	
>   * installation tools
> 
	
>   * operations tools/processes
> 
	
>   * hardware selection
> 

These do not include the many configuration decisions that depend on cluster configuration. While we are running (and we believe the other deployments are as well) mainline versions of Swift, there is still much to build for a commercial install of Swift.

**Q**: Is Swift deployed at Rackspace ?

A: Yes! Swift wasn't the original implementation of their Rackspace CloudFiles product. They implemented a more robust and more scaleable solution and began running it in production around the same time as the OpenStack release in July.

**Q**: Conversely, does Swift have all the code that is running at Rackspace or are there important parts that Rackspace runs, that are not in the Swift code ?

A: As mentioned above, much of the system is context-specific and isn't fully open-sourced.

**Q**: When one is implementing an object store with Swift, any limitations or "gotchas" that one should be aware of ?

A: There are many. We're constantly learning about how our customers' clusters behave. Nothing is going to teach us how these clusters operate quite like having a cluster that's in production serving real customers.

On the whole, Swift behaves well. When properly configured, the zone architecture delivers exceptional durability of data and configuring a separate 'front-end' tier for the proxy and authentication services ensures scale-out for incoming API requests.

Early in a client deployment we went into pre-production (closed BETA) without monitoring and a server had failed without noticing it.  There was no service interruption and Swift dutifully replicated data across to other nodes to keep 3 copies of data in place. We finally noticed when peak throughput numbers weren't quite as high as they were previously.  This really points out the robustness of the Swift architecture.

**Q**: From your experience, what are the top 4 or 5 lessons learned?

**A**: There are many lessons we've learned along the way:

> 
> 
	
>   1. Develop a repeatable deployment process early on. Misconfigured nodes will disrupt the normal operations of the cluster. Have a strong DevOps team in place to develop the software to manage the install & configuration of the cluster.
> 
	
>   2. Have deep knowledge on the inter-workings of the cluster. The documentation is good and the code is very well written and understandable. Spend time to get to know the internals of how the system is supposed to behave based on your configuration. For Cloudscaling, this deep knowledge has made it much easier for us to deal with issues in product, fix bugs that we come across and make the enhancements/integrations that are needed to get our customers online.
> 
	
>   3. Share your questions or comments about Swift or other OpenStack projects. We’re strong supporters of the OpenStack community, and we’d love to hear what you’re working on.
> 
	
>   4. Assemble a cross-functional team as there are many hats that are needed for a successful standup. Data center technicians to help plan the power/cooling needed at the DC, networking experts to help design and plan out the network, a great software development team to write the integrations needed and fix issues related to the software systems of the cluster, Swift is built around common unix tools and folks who are good systems administrator skills can really help tune a running system.
> 




_________________

Have more questions?  Send us an email: info@cloudscaling.com.
