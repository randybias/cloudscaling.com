---
title: 'OpenStack Object Storage Moves Beyond Rackspace'
link: http://cloudscaling.com/blog/cloud-computing/openstack-object-storage-moves-beyond-rackspace/
author: su
description: 
post_id: 1575
created: 2011/01/31 16:27:23
created_gmt: 2011/01/31 16:27:23
comment_status: open
post_name: openstack-object-storage-moves-beyond-rackspace
status: publish
post_type: post
layout: post
---

# OpenStack Object Storage Moves Beyond Rackspace

Earlier this week, one of our clients, a Tier 1 ISP, launched an object storage cloud based on [OpenStack](http://www.openstack.org/), an open source compute and storage framework created by [Rackspace](http://www.rackspace.com/index.php) and NASA. The new storage cloud is the first commercial OpenStack-based storage offering in the market after Rackspace itself, which is based on the same technology. Cloudscaling assisted in developing this solution for the new product, including hardware, networking, configuration, systems integration, monitoring and management. 

![](https://lh6.googleusercontent.com/DOeRQlnZaAlkGsJkwp7zRNmf3plTugOpQax-riTabw_JyaR3DtKgs3LkaiF-5ZYrnGnJq59Y-sxcUQVwfh-CSVflXl3O90UJn0ZANkKcXN1A7YwRrQ)

To understand why this is important, let’s look at why object storage is different than block storage, as well as the cases where each excels. [Back in 2006](http://techcrunch.com/2006/03/14/amazon-grid-storage-web-service-launches/), Amazon introduced a novel approach to storage when it launched S3 (Simple-Storage Service). It was tuned for web workloads that could benefit from high amounts of read/write concurrency such as media assets, application data and user-generated content. To take advantage of cloud-based object stores, applications had to be architected to use them rather than rely on traditional block-based or file-based storage systems. This is because object stores are not traditional file systems. For example, they are not suitable for transactional databases or running operating systems. And they can’t be accessed like a traditional file system -- it’s just objects accessed via an API. In exchange for these limitations, users received virtually unlimited storage, a huge and flat namespace, highly scalable read/write access, and the ability to serve the content directly to clients from the cloud storage system. These storage systems were also designed to be incredibly robust; [Amazon claims](http://aws.typepad.com/aws/2010/05/new-amazon-s3-reduced-redundancy-storage-rrs.html) 99.999999999% durability of files stored on S3. As more and more applications began using cloud-based object storage systems over the past few years, there has been tremendous growth in tools, native language bindings, and application development frameworks that conform to these same object storage APIs, making it easier and easier for developers to work with these types of data stores. As a result of the better tooling, usage has dramatically increased. Amazon’s own Object storage service (S3) has posted impressive growth. [The company states](http://aws.typepad.com/aws/2011/01/amazon-s3-bigger-and-busier-than-ever.html) that S3 grew from 40 billion objects at the end of Q4 2008 to 102 billion in Q4 2009 and 262 billion in Q4 2010. Peak requests now top 200,000 per second. Another data point is that Amazon’s S3 is used by 1.48% of all websites (according to [Buildwith](http://trends.builtwith.com/cdn)). It’s clear that most developers needing large pools of data content would not consider using anything but an object store. In the summer of 2010, Rackspace open-sourced a version of their object storage system as part of the larger OpenStack project. This meant that with some extra work, others could both use and build on the work that they had done. It’s possible to deliver object storage services based on the same software as Rackspace has in production at scale, taking advantage of the same design philosophies that S3 pioneered. We at Cloudscaling are part of the growing community of designers who believe that clouds should be built the way Google and Amazon build them: wih inexpensive but reliable commodity hardware, running open source software, and leveraging high-levels of automation. These combine to create clouds that are perform well both technically and economically at web scale. This is the same philosophy that our client adopted on its object storage cloud. OpenStack’s Object Storage services was the foundation of a design that, when combined with the appropriate hardware, resulted in a complete top-to-bottom object store. It’s a powerful storage service that they can add to their many other service offerings. We think that OpenStack has a very bright future ahead of it and we’re happy to be working to help build that future. _by Joe Arnold_

## Comments

**[Quora](#709 "2011-02-10 03:15:06"):** **Is anyone using OpenStack yet? If so, for what?...** Swift (OpenStack Object Storage), is in use at Rackspace and is actually the Rackspace CloudFiles product offering. There are also Swift deployments in use outside of Rackspace at NASA and a recent deployment by CloudScaling for one of their clients. (...

**[World Spinner](#710 "2011-02-11 01:32:17"):** **OpenStack Object Storage Moves Beyond Rackspace | Cloudscaling...** Here at World Spinner we are debating the same thing......

**[Quora](#712 "2011-02-23 11:19:30"):** **Who has successfully deployed OpenStack based private clouds?...** I came across this article, which might be related. OpenStack Object Storage Moves Beyond Rackspace > one of our clients, a Tier 1 ISP, launched an object storage cloud based on OpenStack...

**[cloudberryman](#3012 "2011-02-01 02:09:00"):** I always enjoy learning what other people think about Amazon Web Services and how they use them. Check out my very own tool CloudBerry Explorer that helps manage S3 on Windows . It is freeware. http://s3.cloudberrylab.com/

