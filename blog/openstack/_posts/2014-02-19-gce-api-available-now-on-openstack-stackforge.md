---
title: 'GCE API - Available Now on OpenStack StackForge'
link: http://cloudscaling.com/blog/openstack/gce-api-available-now-on-openstack-stackforge/
author: Cloudscaling Staff
description: 
post_id: 7198
created: 2014/02/19 08:04:06
created_gmt: 2014/02/19 16:04:06
comment_status: open
post_name: gce-api-available-now-on-openstack-stackforge
status: publish
post_type: post
layout: post
category: openstack
---

# GCE API - Available Now on OpenStack StackForge

For Cloudscaling, the journey to the hybrid cloud begins (but does not end) with API compatibility between the OpenStack powered private cloud and leading public clouds such as Amazon Web Services (AWS). Cloudscaling customers run OCS, our OpenStack powered private cloud solution, because it enables them to burst to and repatriate from AWS. Leveraging an OCS private cloud as part of their hybrid cloud strategy provides agility, choice and flexibility to the application and infrastructure teams.

The AWS EC2 API has been part of the OpenStack Compute (Nova) since the project’s inception - Cloudscaling have been a beneficiary of this initial community investment and we have built a robust business around it. A typical AWS customer has invested heavily on AWS specific tooling and training so the cost of change is high. Cloudscaling OCS makes the transition to an OpenStack private cloud palatable for these enterprises because the same tools (Rightscale, Dell Cloud Manager, AWS CLI, etc) and training are fully compatible. Customers do not have to start from scratch when transitioning from AWS to OpenStack using OCS.

However, we have always felt that the AWS API was not the end all be all for our customers and the broader OpenStack community. Today, we are changing that by making the [GCE API available](http://github.com/stackforge/gce-api) to the OpenStack community via StackForge. We believe the GCE API provides the same [benefits](http://go.cloudscaling.com/hybrid-cloud-demonstration-signup) as the AWS EC2 API to the community - agility, choice and flexibility .

**More About StackForge**

For those not familiar with StackForge, it’s the OpenStack incubator - it allows the broader community to see contributions and kick the tires on OpenStack related projects. StackForge is also the way that OpenStack related projects can consume and make use of the OpenStack project testing and continuous integration (CI) infrastructure. The ultimate goal of any StackForge project is the same - inclusion into OpenStack. We are passionate about GCE and why we have expended considerable energy to make the API set available on StackForge.

How passionate? For starters, take a look [here](http://www.stackalytics.com/?release=icehouse&metric=loc&project_type=stackforge&module=&company=&user_id=). As you can see, Cloudscaling is keeping great company in StackForge - IBM, HP, RedHat and Mirantis are among the stable of companies that have contributed code to it. Our GCE API contribution is also significant - more than 27,000 lines of code broken across the GCE API, JSON with API definitions, OpenStack Commons, Unit and Tempest Tests. Finally, our GCE API contribution is covered under the Apache Project Licence (APL) v2, just like OpenStack.

**Take GCE API For A Spin**

Get started with GCE API [here](https://github.com/stackforge/gce-api/blob/master/README.rst) \- simply enable it as a service on your Grizzly or Havana based OpenStack cloud. It’s also enabled on [OCSgo](http://go.cloudscaling.com/OCSgo-FreeTrial), our evaluation private cloud where you can also experience all the functionality available in the [latest OCS release](http://www.cloudscaling.com/blog/openstack/ocs-2-6-is-available-now/). We are initially validating functionality using [gcutil ](https://developers.google.com/compute/docs/gcutil/)and will include other GCE compatible tools in the future. The Cloudscaling team believes we have done all the right things to make GCE API another choice in OpenStack. What do you think?

**UPDATE**: Broken link fixed to the repos.