---
title: 'The most advanced OpenStack-powered cloud infrastructure software just got better'
link: http://cloudscaling.com/blog/cloud-computing/the-most-advanced-openstack-powered-cloud-infrastructure-software-just-got-better/
author: Cloudscaling Staff
description: 
post_id: 5981
created: 2013/04/15 08:00:52
created_gmt: 2013/04/15 15:00:52
comment_status: open
post_name: the-most-advanced-openstack-powered-cloud-infrastructure-software-just-got-better
status: publish
post_type: post
layout: post
category: cloud-computing
---

# The most advanced OpenStack-powered cloud infrastructure software just got better

Today, Cloudscaling announced Open Cloud System 2.5, our next major OCS release scheduled for availability this summer. New feature highlights in OCS 2.5 include:

  * OCS Virtual Private Cloud (VPC)
  * OCS Block Storage snapshots plus production-ready enhancements
  * OpenStack Grizzly support, and
  * New certified hardware options from Juniper, Dell and Cisco

### OCS Virtual Private Cloud (VPC)

OCS Virtual Private Cloud (VPC) provides fine-grained networking control for customers deploying applications into elastic clouds. It supports provisioning of logically isolated, virtual networks with complete control and customization of the IP network constructs (address range, subnets, gateways, etc), delivers enhanced security via security groups and network ACLs, and enables traffic load balancing across groups of instances. OCS VPC supports the familiar network constructs and controls found in a typical enterprise network, but without sacrificing elastic cloud functionality such as tenant security groups and elastic IPs.

With OCS VPC, deploying cloud-ready dynamic and enterprise apps has never been easier or more secure. The additional control and flexibility simplifies application deployment as tenants have full control of the network and security access. It opens up a variety of application deployment options that simultaneously provide access to public resources while protecting private ones.

For example, a tenant can set up both a public subnet and a private subnet within a VPC. Instances launched within a public subnet will have both outbound and inbound connectivity but private subnets will not have internet connectivity by default. This separation allow tenants to simply place all public facing servers (such as web servers and search servers) in the public subnet while keeping private servers (such as database servers, cache nodes and application servers) in the private subnet. This is one of the many application deployment scenarios that are made possible by OCS VPC.

We are very excited to be [working with the great team at Juniper to deliver OCS VPC](/blog/company/cloudscaling-juniper-networks-innovation-for-dynamic-computing-environments/). Our CTO, Randy Bias, got an early glimpse into what the Contrail team was developing in late 2012 and he was very bullish by what he saw. Our customers expect production-ready solutions and now they will have a choice of deploying OCS Elastic Networking - VPC or Standard - depending on their cloud infrastructure networking needs.

### OCS Block Storage Product-Ready Enhancements

We announced [OCS Block Storage as part of OCS 2.5](/blog/company/engineering/the-most-advanced-openstack-powered-cloud-infrastructure-software-just-got-better/). With 2.5, we're enhancing the Block Storage service by allowing tenants to initiate snapshots of their volumes and store these snapshots in OCS Object Storage. In addition to providing cost-effective backups, volume snapshots provide an easy way to rapidly launch new instances when a dynamic app needs to auto-scale. The ability to capture block volume snapshots to object storage leverages the strength of each storage type – the performance and persistence of block storage and the low cost and scalability of object storage.

With 2.5, we have also focused on additional production-ready enhancements that simplify deployments and improve SLAs. We’ve automated the installation and deployment of OCS Block Storage blocks plus built redundant services and interconnects to protect against infrastructure failure. Finally, we’ve expanded the hardware choices available from Quanta and Dell that can be used to deploy OCS Block Storage.

### Grizzly Support

I called OpenStack Folsom “awesome” and I am sure in due time I’ll find more descriptive adjectives to describe OpenStack Grizzly (OpenStack 2013.1 release). More than 550 people contributed code, documentation, or infrastructure configurations plus resolving 1,900 development tickets within the various OpenStack projects. Our approach to building the best OpenStack-powered system starts with curating which components of OpenStack get enabled in OCS. With the Grizzly release, OCS 2.5 adds support for Quantum in addition to the already-supported Nova, Swift, Cinder, Glance and Keystone components.

### Certified hardware from Juniper, Dell and Cisco

Finally, our hardware team has been busy certifying hardware from Juniper, Dell and Cisco. Our CloudBlocks architecture already supports servers from Quanta and high-speed, 10GE top-of-rack switches from Arista. Based on customer feedback and our expanding technology ecosystem, we will support the Dell R620 and R720xd rack mount servers. We have also significantly added 10GE network switches with new choices including the Juniper QFX 3500, Quanta LY-2 and Cisco Nexus 3000. Our expanding certified hardware list enables a broader range of OCS configuration options and price points, and it allows our customers to leverage established relationships with existing, trusted infrastructure partners.

### OCS 2.5 is accelerating down the Turnkey, Production-grade System Path

Before pivoting to a pure product company in late 2011, Cloudscaling started as a cloud consultancy and developed extensive experience deploying most of the open source cloud software options out there. We’re well aware of the development, operational and maintenance challenges presented by customized cloud infrastructure. OCS 2.5 represents the third major release of our packaged cloud system designed to stand up cloud infrastructure quickly and reliably to support your production workloads. We look forward to continuing the investment as we continue to ramp up customers on the Open Cloud System.