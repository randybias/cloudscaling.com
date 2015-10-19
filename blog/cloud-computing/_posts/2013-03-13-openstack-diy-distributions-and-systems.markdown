---
comments: true
date: 2013-03-13 17:09:04+00:00
layout: post
slug: openstack-diy-distributions-and-systems
title: OpenStack DIY, Distributions and Systems
wordpress_id: 5799
old_categories:
- Cloud Computing
tags:
- OpenStack
---

As you know, [OpenStack](http://www.openstack.org/) is open source software for building private and public clouds.  When Cloudscaling took Series A funding and pivoted to a pure product company in late 2011, it was a strategic move to use OpenStack as the heart of our [Open Cloud System](http://www.cloudscaling.com/ocs-system-overview/) (OCS) product. Before this, we were a cloud consulting company that deployed most of the open source cloud software options available on the market, so we were aware of OpenStack’s capabilities and more importantly, its promise.  The bet we took on OpenStack is paying back in spades.     
  
But what if you aren’t a software vendor building a solution around OpenStack – what’s the right way to consume OpenStack as a product?  We hear this question from a fair number of prospects and customers.  Fortunately, as the OpenStack code base and ecosystem develops and matures, a clear spectrum of options is surfacing.  Here's a pass at summarizing the alternatives for deploying an OpenStack-based cloud.

**OpenStack Product Landscape — Option #1: DIY**

Option #1: DIY OpenStack: At first glance, the least expensive path to consuming OpenStack is via the Do It Yourself (DIY) route.  Adventurous DIY-ers can go to Github, download the OpenStack bits and crank through the installation. There are some basic guidelines and documentation available in the public domain to keep you on the well travelled path. If you don’t have available technical expertise on staff, you can outsource the work and let an OpenStack integrator do the work for you. There are benefits to using this product option – you learn a ton about OpenStack on the journey and you get your own custom OpenStack cloud running on the infrastructure you specify.   
  
Straightforward right?  Well, not quite.  It's not the typical path people pursue to stand up a production ready OpenStack cloud, especially given the pre-packaged OpenStack options available on the market.  You (or your OpenStack integrator of choice) are ultimately creating your own fork of OpenStack that you’ll have to maintain in perpetuity – this cost/benefit trade off should not be underestimated.  
  
Cost is the most important consideration for the DIY option – outside of free open source software, this choice can quickly lead to cost overruns if not well managed.   First, there's the fixed cost of employing a very capable OpenStack team to develop, maintain and operate your custom cloud.  Additionally, there is significant cost in reduced reliability of your infrastructure, lack of support options and higher operational effort of having your own OpenStack “island”.

**Option #2: OpenStack Distribution** 

What you get in this product category is a packaged and supported OpenStack software distribution.  The software is commonly delivered via a convenient downloadable ISO with documentation to assist the installation.  Most of the packaged OpenStack distributions in the market are made available by purveyors of Linux distributions – so some people will likely align with their Linux vendor's OpenStack solution.  It’s a great way to get acquainted with OpenStack, but it may not be the best path forward to actually running a production OpenStack cloud. Why is that?  
  
The scope for most OpenStack distributions is to provide a “try and buy” option for people interested in using OpenStack.  This allows prospects to deploy a handful of servers in a test environment where single points of failure and an inability to scale linearly over time are acceptable compromises.  However, these shortcomings are not acceptable for a production cloud.  
  
Many OpenStack distributions are only in preview mode today – which means you can’t buy support even if you wanted to.  When there is support available for the OpenStack distribution, it isn’t comprehensive.  Frequently, support is via the web only with no upgrade option for phone support.  Finally, the OpenStack distribution vendors will support only OpenStack software but not the running system (such as the hypervisor, hardware infrastructure and network elements).

**Option #3: Turnkey System** 

 This option pushes the effort of developing, maintaining and upgrading OpenStack to the ISV, thus freeing the customer to focus on technology areas that are more beneficial for their business.  The reality is if you want to build a production ready OpenStack cloud, you must curate, test, validate and support the whole stack – this is the approach Cloudscaling took.  What you get with an OpenStack system is 

  * A production ready OpenStack distribution
  * A reference architecture optimized to the type of cloud being built
  * A range of certified hardware components
  * Additional software components that streamline deployment and management

  
Choosing to deploy an OpenStack system eliminates the guesswork present in the OpenStack DIY and distribution product options, resulting in rapid deployment with reduced costs, higher infrastructure reliability and lower operational effort.  An OpenStack system is production ready on Day 1 because it is architected  to eliminate single points of failure and scale linearly over time.   
  
Customers choose OpenStack because of the project’s feature velocity, so seamless upgrades of the entire stack is a key value proposition.  Upgrades for an OpenStack system such as Cloudscaling OCS are predictable since the entire “stack” – OpenStack distribution, underlying hardware components and reference architecture – is treated as an atomic unit.    
  
Finally, support for OpenStack systems cover the entire “stack”.  Cloudscaling extends support beyond just the OpenStack software to include key areas such as the hypervisor, hardware infrastructure and network elements.   This comprehensive approach to support is unique in the OpenStack product landscape.

[![blog1](http://www.cloudscaling.com/wp-content/uploads/2013/03/blog1.jpg)](http://www.cloudscaling.com/wp-content/uploads/2013/03/blog1.jpg)

_— Summary of options for deploying OpenStack-based clouds. —_
