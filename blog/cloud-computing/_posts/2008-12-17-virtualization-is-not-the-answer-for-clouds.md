---
title: 'Virtualization is not ‘The Answer’ for Clouds'
link: http://cloudscaling.com/blog/cloud-computing/virtualization-is-not-the-answer-for-clouds/
author: randybias
description: 
post_id: 2377
created: 2008/12/17 22:32:49
created_gmt: 2008/12/17 22:32:49
comment_status: open
post_name: virtualization-is-not-the-answer-for-clouds
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Virtualization is not ‘The Answer’ for Clouds

There is a myth going around about virtualization and cloud computing. It's expressed in a variety of ways, but the takeaway is always the same: "Public clouds are big virtual server clouds." Sounds good, but untrue once you look under the covers. For good reason, since virtualization isn't a panacea. Here's the deal. Public clouds (IaaS, PaaS, or SaaS) are all multi-tenant. It's a fundamental definition. Multi-tenancy is one of the core properties of any cloud. Whether it's a cloud like ours ([GoGrid](http://www.gogrid.com)), EC2, Google App Engine (GAE), or [Salesforce.COM](http://www.force.com) (SFDC). Multi-tenancy is a mechanism whereby public cloud providers give customers cost efficiencies by aggregating capex at scale and providing it as a subscription service.     _Virtualization is just a multi-tenancy strategy._ **Virtualization as Multi-Tenant Solution** That's right. It's only a multi-tenancy strategy. Not all clouds will use virtualization. Clouds like GAE and SFDC use completely different technologies to create multi-tenancy, but even for strict compute clouds, folks like [AppNexus](http://www.appnexus.net/) surface physical hardware that customers then carve up themselves into virtual machines. While others, like [NewServers](http://www.newservers.com/), serve up completely physical clouds. For those folks their multi-tenant strategy is more coarse, based simply on a single piece of physical hardware. **Scaling Up Still Matters** Simply put, for the foreseeable future there are many pieces of software that do better scaling 'up' versus 'out'. For example, your traditional RDBMS is much easier to scale by throwing physical iron (instead of virtual) at the problem. A well known Web 2.0 company recently expressed to me that they are running with 100s of thousands of customers on big database servers with 128GB of RAM and lots of high speed disk spindles. This is one of the poster children of the Web 2.0 movement. If they can scale out their RDBMS by simply throwing iron at it, why would they re-architect into (for example) 10 extra large EC2 instances and deal with the engineering effort involved with a heavily sharded database? To put this in perspective, you could do this:

  * 10 extra large EC2 instances
    * 16GB RAM each
    * ~8 EBS _network-based_ storage devices
    * 2 cores each
    * ~$6000/month including storage
    * $ X to engineer for sharding at application level
OR:
  * 2 redundant big iron physical servers
    * 128GB RAM each
    * 16 high-speed spindles on local disk
    * 8-12 cores each
    * $40,000 in capex or ~7,500/month for servers+storage
**Conclusion** It's kind of a no brainer. For certain use cases it's more economical to scale using bigger hardware. There are two key reasons why this won't change in the near future. The first is that many folks are working hard to make database software scale better across more cores. The second is that we'll be at 16 and 32 cores per 1U server in the not so distant future. Scaling up will continue to be a viable option for the future. Period. Clouds need to enable this in the same way they enable virtualized servers for scaling out. It's not an either/or proposition. 

* * *

**Update:** The 'well known' Web 2.0 company I mentioned has informed me that my estimate on dedicated hardware was far too high. Something around $5,000 for those servers is more accurate, meaning there is even less reason to consider scale-out as an option.

## Comments

**[Vitor Domingos](#48 "2008-12-17 23:50:07"):** Lesson to learn from this: you can actually be crappy on your software, database schemas/models and development. Hardware is cheap. That will be the *real problem* for some in a not so distant future. I, for once, like to target clean code that can, by itself, scale.

**[Mike Kavis](#49 "2008-12-18 04:26:46"):** I agree with your database use case but only for relational databases. For massive datawarehouses in the billions or trillions of rows, a massively parallel and distributed database is required (ie. Map Reduce). These types of databases perform better on smaller nodes and many of them. Big iron just isn't as feasible for this type of problem. I have read several articles today that have said that databases are better off not being in the cloud. I think we should clarify that this is only true for traditional DBMS's only (which are gradually falling out of favor for non OLTP processing). My 2 cents!

**[randybias](#50 "2008-12-18 07:03:23"):** @Vitor Domingos Agreed. @Mike Kavis Yes, definitely only relevant for relational databases and agree with your assessment about a shift of some RDBMS use to distributed database systems. I think that just reinforces my point, though. Relational DBs will have a place for quite a while, regardless of certain loads moving to distributed database-like systems (Hadoop, etc.). That just means scale-up will take what pieces you need in your RDBMS even further. Thanks!

