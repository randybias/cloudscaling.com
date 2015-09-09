---
title: 'OCS 2.6 is Now Available !'
link: http://cloudscaling.com/blog/openstack/ocs-2-6-is-available-now/
author: Cloudscaling Staff
description: 
post_id: 7127
created: 2014/02/06 11:01:56
created_gmt: 2014/02/06 19:01:56
comment_status: open
post_name: ocs-2-6-is-available-now
status: publish
post_type: post
layout: post
---

# OCS 2.6 is Now Available !

OpenStack is a powerful way of providing and consuming IaaS to achieve scale and agility, but its very nature as an open source project raises IT management challenges. Removing some of the implementation complexity and management obstacles from the equation is vital to enterprise adoption. Cloudscaling is committed to advancing OpenStack to meet the needs of the enterprise through advanced features in our core product [Open Cloud System (OCS)](http://www.cloudscaling.com/products/ocs-system-overview/).

To that end, we are excited to announce that our latest release - **Open Cloud System (OCS) 2.6** \- is available today. This release marks a key milestone in the evolution of OpenStack, making it easier to deploy and consume.

**The major features in this release include**

  * Our control plane is radically simplified since all cloud services now run on the OCS Clustered Zone Nodes. Critical cloud services - including zone management, OpenStack and EC2 API endpoints, resource schedulers, logging, monitoring and secure operator access - are distributed and load balanced across the Clustered Zone Nodes. Starting with a minimum of three Zone Nodes in HA mode, the cloud can sustain multiple Zone Node failures and still continue operating. The same architecture can be scaled down for small deployments since a single Zone Node can run in a non-HA configuration. Adding capacity and redundancy is as easy as adding a pair of Zone Nodes to the pool.
  * OCS Block Storage performance is improved across all major performance metrics. How did we do it? First, we split the read (L2ARC) and write (ZIL) caches onto optimized SSDs. Then we transitioned to using Linux IO (LIO), which is natively supported in OpenStack. The results? 
    * Block Storage performs consistently across sequential & random read and write operations. This allows apps with sensitive read and write requirements to be easily deployed in the private cloud.
    * Block Storage performs at an order of magnitude faster than AWS EBS - we measured in excess of 40,000 IOPS for 4K blocks. For enterprises that cannot get the performance they crave from AWS now have another reason to repatriate their apps to the private cloud.
  * Support for Dell servers using the Intel "Ivy Bridge" processors.
  * Dell Compellent SC280 JBOD. This high density JBOD provides a great alternative for customers who want to build a high density object storage solution.
  * Dell Force10 networking gear is now an option so Dell customers and reseller partners can spec out an “all Dell” cloud infrastructure stack for OCS pilot and production deployments.
  * OCS System Profiler is a feature that discovers and validates hardware for OCS deployments. Our system can now “see” the hardware it’s installed on and hands off this information to the various subsystems to use. System Profiler simplifies inventory of the underlying hardware so it accelerates all types of OCS deployments.
  * And finally, we are unveiling OCS Web UI - our single pane of management for the Enterprise Cloud Administrator. Dashboard is a service that also runs on the Clustered Zone Nodes and uses the OCS Cloud Operator API - so it’s fully integrated into our system.

    **       Initially we are addressing two key use cases with our Web UI:**

  * Initial setup
  * Moves/add/changes of users and resources

But it does not end there. We are investing heavily on this graphical user interface        (GUI) because it is a critical component of how enterprises can realize the promise of life cycle managing hundreds of cloud nodes per cloud administrator. You can expect the list of capabilities and use cases to expand in the coming months. Visit our [Resources](/resources/) page to learn more about our latest release.

In addition to OCS 2.6, Cloudscaling’s value extends through our Professional Services and Support teams. Visit our [Cloud Concierge](/services/cloud-concierge-services/) and [Training](https://www.cloudscaling.com/services/training/) pages to learn more about how we can help you put OpenStack to work for your business.