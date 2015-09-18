---
author: Randy Bias
comments: true
date: 2015-05-27 15:05:19+00:00
layout: post
slug: emc-and-canonical-expand-openstack-partnership
title: EMC and Canonical expand OpenStack Partnership
wordpress_id: 7771
old_categories:
- OpenStack
---




[As you saw at last week’s OpenStack Summit](http://www.storagereview.com/emc_announces_two_new_openstack_solutions), EMC® is expanding its partnership with Canonical amongst others. I want to take a moment to talk specifically about our relationship with Canonical. We see it as a team up between the world’s #1 storage provider and the world’s #1 cloud Linux distribution.




For the last two years, EMC has been a part of Canonical’s Cloud Partner Program and OpenStack Interoperability Lab (OIL). During this time EMC created a new Juju [Charm](http://en.wikipedia.org/wiki/Juju_(software)#Juju_Charms) for EMC VNX technology. This enables deployment by Canonical’s Juju modeling   software. This past week, we specifically announced the availability of a new [OpenStack solution](https://community.emc.com/docs/DOC-44853) with Ubuntu OpenStack and Canonical as part of the Reference Architecture Program [announced](http://pulseblog.emc.com/2014/11/04/emc-doubles-openstack/) last November in Paris. The solution is built in close collaboration with Canonical in EMC labs then tested, optimized, and certified.




Cloud workloads are driving storage requirements, making it a crucial part of any OpenStack deployment. Companies look for scalable systems that leverage features of advanced enterprise storage while also avoiding complexity. EMC and Canonical created an easily modeled and reference architecture using EMC storage platforms (VNX® and EMC XtremIO™), Ubuntu OpenStack and Juju. This allows for repeatable and automated cloud deployments.




According to the [OpenStack User Survey](http://superuser.openstack.org/articles/openstack-users-share-how-their-deployments-stack-up), 55% of production clouds today run on Ubuntu. Many of these deployments have stringent requirements for enterprise quality storage. EMC and Canonical together fulfill these requirements by providing a reference architecture combining the world’s #1 storage, #1 cloud Linux distribution, and tools for repeatable automated deployments.




We will be releasing an XtremIO (our all flash array) Charm and eventually ScaleIO (our software-only distributed block storage) as well. ScaleIO is a member of EMC’s Software Defined Storage portfolio, has been proven at massive scale, and is a great alternative to Ceph. You will soon be able to [download](https://www.emc.com/products-solutions/trial-software-download/scaleio.htm) a free, unsupported and unlimited version of ScaleIO to evaluate yourself.  Look for these products and others, such as ViPR Controller, to be available in Canonical’s Charm Store and through Canonical’s Autopilot OpenStack deployment software later this year.




This work is in support of eventually making all of EMC’s storage solutions available via OpenStack drivers available for use with Ubuntu OpenStack. Given the wide acceptance of Ubuntu with the OpenStack community, EMC will use Ubuntu internally and in future products. We believe that these efforts coupled with the quality professional services and support customers have come to expect from us will help give enterprise customers peace of mind. This will accelerate adoption of OpenStack Cloud solutions in the enterprise.




With EMC storage and Canonical solutions, customers realize these benefits:





	
  * A repeatable deployable cloud infrastructure

	
  * Reduced operating costs

	
  * Compatibility with multiple hardware and software vendors

	
  * Advanced storage features only found with enterprise storage solutions




Our  reference architecture takes the Ubuntu OpenStack distribution, and combines it with EMC VNX or XtremIO arrays, and Brocade 6510 switches. Automated with Juju, the time to production for OpenStack is dramatically reduced.




The solution for Canonical can be found at [this link](https://community.emc.com/docs/DOC-44853) and a brief video with John Zannos can be found [here on EMCTV](https://www.emc.com/emc-plus/emc-tv/watch-video.htm?type=vids&pid=na&vid=4238371593001). The EMC and Canonical  architecture is below for your perusal.




![EMC and Canonical Ubuntu OpenStack Reference Architecture](http://www.storagereview.com/images/StorageReview-EMC-Canocial.png)




This reference architecture underscores EMC commitment to providing customers choice. EMC customers can now choose to build an Ubuntu OpenStack cloud based on EMC storage, and use Juju for deployment automation.




It’s an exciting time for Stackers as the community and customers continue to demand reference architectures, repeatable processes, and support for existing and future enterprise storage systems.



