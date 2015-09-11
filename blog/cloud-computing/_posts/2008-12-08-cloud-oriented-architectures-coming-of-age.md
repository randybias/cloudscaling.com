---
title: 'Cloud-Oriented Architectures Coming of Age?'
link: http://cloudscaling.com/blog/cloud-computing/cloud-oriented-architectures-coming-of-age/
author: randybias
description: 
post_id: 2375
created: 2008/12/08 06:46:17
created_gmt: 2008/12/08 06:46:17
comment_status: open
post_name: cloud-oriented-architectures-coming-of-age
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Cloud-Oriented Architectures Coming of Age?

Cloud-Oriented Architectures (COA) mentioned briefly [before](http://neotactics.com/blog/uncategorized/clouds-are-not-datacenters/) by me look to be coming of age with this [latest announcement](http://www.techcrunchit.com/2008/12/07/forcecom-google-app-engine-cloud-relationship-management/) from Force.com and Google App Engine. Hopefully this will help get the message across. Building your entire application stack is soooo 1999...

## Comments

**[Andrew Younge](#44 "2008-12-08 22:13:28"):** Whats the difference between COA and Service Oriented Architectures (SOA), other than the buzzword reference? D. Krafzig, K. Banke, and D. Slama, Enterprise SOA: Service-Oriented Architecture Best Practices, Krafzig, Ed. Prentice Hall Ptr, 2004.

**[randybias](#45 "2008-12-10 00:51:01"):** Andrew, that's a little like asking what's different between EDA and SOA. The short answer is that COA is another permutation of SOA in my book. I would say that the main relevant difference is that COA is largely a grass roots driven standard and SOA is largely a large committee-based standards-driven movement. Top-down vs. bottom-up. Another main feature of COA, from my perspective is that it presumes no walled gardens. This is somewhat anti-thetical to the Enterprise where each is usually highly silo'ed. Or, to put it in an overly simplistic manner it's SOA outside or across the Enterprise firewall sans top-down standards.

**[Shane Brauner](#46 "2008-12-11 22:56:53"):** Hey Randy, I agree - that's exactly where we're going at 10gen. We're building that platform layer for developers to build upon. The platform takes care of everything below the app layer (scaling, replication, etc). We're open source, and in alpha right now. Testing is open to the public and we'd love to get more developers to bang on it. You can check it out at http://www.10gen.com/ Cheers, Shane

