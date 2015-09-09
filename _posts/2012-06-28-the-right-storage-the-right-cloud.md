---
title: 'The Right Storage, the Right Cloud'
link: http://cloudscaling.com/blog/cloud-computing/the-right-storage-the-right-cloud/
author: randybias
description: 
post_id: 4044
created: 2012/06/28 14:01:27
created_gmt: 2012/06/28 21:01:27
comment_status: open
post_name: the-right-storage-the-right-cloud
status: publish
post_type: post
layout: post
---

# The Right Storage, the Right Cloud

We spend a lot of time in this blog talking about the architecture of elastic infrastructure clouds (EIC) like AWS and our own [Open Cloud System](http://www.cloudscaling.com/opencloud/). We contrast this against the architecture of enterprise virtualization clouds (EVC) like VCE’s Vblock. Nowhere are these differences more obvious than when you look at how storage systems are designed and built for these two types of clouds. In May, I attended the [OpenStorage Summit EMEA 2012](http://www.openstoragesummit.org/emea.html) in Amsterdam. The [Nexenta](http://nexenta.com/corp/) team asked me to explain how open storage fits into the cloud landscape, and why open storage is particularly well suited to the needs of elastic infrastructure clouds. I focused my remarks on the role of open storage in the evolution of cloud architectures. We looked at the fundamental differences between how open storage systems are built, compared to storage architectures found in the typical enterprise data center. Those differences are major, and it’s critical that cloud architects understand them if they’re going to design systems that perform -- financially and operationally -- as intended. Key points from the preso (video embedded below) include: 

  1. Two clouds, two needs. EICs are designed to enable new business models through agile and efficient systems. EVCs are designed to support existing apps and cost optimization.
  2. Mainstream adoption of EICs is accelerating. App and infrastructure design concepts that started with AWS, Google, SFDC, Facebook are filtering down to mainstream enterprises through the growth of open source projects like Hadoop.
  3. EICs represent a fundamental rethink of the IT stack. I’ve talked about this [before](http://www.cloudscaling.com/blog/cloud-computing/the-evolution-of-it-towards-cloud-computing-vmworld/), but it merits repeating: Cloud computing is a disruptive technology that requires a new approach to the IT function from the concrete through the apps.
  4. Open storage implies intelligent applications. Consider Hadoop DFS, Riak and Cassandra as examples of tools that permit applications to manage hardware. This means you continue running when hardware fails, something that’s unavoidable at scale. It also means you can manage networking and scaling from within the application.
  5. Know your storage failure “blast radius.” This clever metaphor explains the concept of failure domains. If you’re deploying SANs at scale, your blast radius will be large -- perhaps catastrophically so.
  6. Higher level abstractions are coming to a mission-critical app near you. Dynamo DB is a great example.
  7. Example: [Netflix’s](http://www.cloudscaling.com/blog/cloud-computing/cloud-innovators-netflix-strategy-reflects-google-philosophy/) move to AWS. A summary of the why and how.
  8. Replication in your datastores is critical in open storage. Again, don’t rely on the hardware.
  9. Object storage: cheap, easy and on the rise. It does not require RAID and works well with commodity hardware. And, it works. Consider AWS S3, with over a half exabyte of data.
The bottom line is that you have to build the right cloud for your application. That means building the right storage architecture for your cloud. Check out the video of my preso below (and [here](http://www.youtube.com/watch?v=xcz2E5ba-fw)):  (UPDATED: Embed of slides added, below.) 

**[2012 open storage summit keynote](http://www.slideshare.net/randybias/2012-open-storage-summit-keynote)**

View more presentations from [Randy Bias](http://www.slideshare.net/randybias)

## Comments

**[Atlantic.Net](#3855 "2012-10-23 20:44:00"):** I agree with you about the mainstream adoption of EICs and that cloud computing, being a disruptive technology requires a new IT strategy.

**[DCI Corporation](#3880 "2013-03-25 10:53:00"):** Great post, seems many people do not understand the importance of building the RIGHT cloud.

