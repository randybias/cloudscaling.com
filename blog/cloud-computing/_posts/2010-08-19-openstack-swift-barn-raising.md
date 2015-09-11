---
title: 'OpenStack: Swift Barn Raising'
link: http://cloudscaling.com/blog/cloud-computing/openstack-swift-barn-raising/
author: su
description: 
post_id: 1280
created: 2010/08/19 12:35:49
created_gmt: 2010/08/19 19:35:49
comment_status: open
post_name: openstack-swift-barn-raising
status: publish
post_type: post
layout: post
category: cloud-computing
---

# OpenStack: Swift Barn Raising

At Cloudscaling, we're getting closer to putting OpenStack into production services. This is the first installment chronicling that journey and opening some of the tools that we are developing along the way. ![OpenStack]({{ site.url }}/assets/media/2010/08/OpenStack-Logo.png) [OpenStack](http://openstack.org/) is a cloud computing framework for building infrastructure as a service, and [Swift](https://launchpad.net/~swift) is a subproject which provides a scalable distributed object store. We have already expressed opinions about how a community of [service providers all running an open platform would do to the cloud computing ecosystem](http://cloudscaling.com/blog/cloud-computing/does-openstack-change-the-cloud-game) (think Linux kernel of cloud). To support our own work, we try to make it as simple and easy as possible to build and configure clusters. We want to make it simple and easy for everyone else too. Today we are releasing '[swift-solo](https://github.com/cloudscaling/swift-solo)' on github, which is essentially a chef automated install of the [instructions for setting up an Ubuntu 10 VM for swift development](http://swift.openstack.org/development_saio.html). (We took inspiration from [Opscode's OpenStack Swift cookbook](http://github.com/opscode/openstack-cookbooks/tree/master/cookbooks/swift/), but you'll see a lot of things have been split out and extended. Thanks to [Adam Jacob](http://twitter.com/adamhjk) for those cookbooks and chef.) The way it works now, after installing git and chef, one command will deploy and start swift on a single machine. The chef recipe can be configured to sync code from a git or bzr repository so you can quickly deploy changes in your development environment. There are also scripts to setup testing (basically install python-cloudfiles) and make sure the service is working (store an object and retrieve it). ![old fashion barn raising](http://cloudscaling.com/wp-content/uploads/2010/08/old-fashion-barn-raising.jpeg) Swift is actually 5 separate services, object, container, account, auth and proxy. In theory, each of those can be scaled separately, but in practice the [documentation says Rackspace](http://swift.openstack.org/deployment_guide.html) runs the object, container and account services together and breaks out the proxy and auth. Object, container and account servers are members of partitioned consistent hash rings mapping names to physical locations. Object servers index the actual blobs, container servers index the objects and the account servers index the containers. Auth servers provide authentication and the proxy servers are the API gateway that coordinates request and responses with the rest of the services. There are some other moving parts to do things like handle replication, auditing the integrity of objects and rebalance the rings. The [Swift documentation](http://swift.openstack.org/) has a lot more information about the architecture, operational considerations and the code. Dig in. Cloudscaling is interested in creating an open cloud ecosystem and we'll keep sharing our work and trying to lower the barrier to participation. In the future, we plan to explain and open some of the work we are doing to handle authentication, automating the installation/configuration across clusters and other operational lessons we learn along the way. Your first running Swift service is only [a git clone away](https://github.com/cloudscaling/swift-solo). We would love to hear your feedback, suggestions and issues. Finally, a shout out and thanks to the Scalers working on OpenStack/Swift: Big ups to Caleb Tennis for working on these chef recipes, Blake Barnett, and Joe Arnold. Want to hack on OpenStack or Chef? We're looking for good people to build open source [automation tools](http://cloudscaling.com/contact/jobs/openstack-ruby-developer) and [cloud infrastructure](http://cloudscaling.com/contact/jobs/openstack-python-developer). Join us. [Drop us a line...](mailto:jobs@cloudscaling.com)

## Comments

**[woodworkingbooks](#577 "2010-10-25 22:27:15"):** There are some other moving parts to do things like handle replication.

**[woodworkingbooks](#2292 "2010-10-25 22:27:00"):** There are some other moving parts to do things like handle replication.

