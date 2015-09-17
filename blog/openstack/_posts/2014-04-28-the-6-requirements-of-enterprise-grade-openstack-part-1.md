---
title: 'The 6 Requirements of Enterprise-grade OpenStack, Part 1'
link: http://cloudscaling.com/blog/openstack/the-6-requirements-of-enterprise-grade-openstack-part-1/
author: Randy Bias
description: 
post_id: 7365
created: 2014/04/28 09:47:01
created_gmt: 2014/04/28 16:47:01
comment_status: open
post_name: the-6-requirements-of-enterprise-grade-openstack-part-1
status: publish
post_type: post
layout: post
category: openstack
---

# The 6 Requirements of Enterprise-grade OpenStack, Part 1

## **Introduction**

OpenStack is an amazing foundation for building an enterprise-grade private cloud. The great OpenStack promise is to be the cloud operating system kernel of a new generation. Unfortunately, OpenStack is not a complete cloud operating system, and while it might become one over time, it’s probably best to look at OpenStack as a kernel, not an OS. [1]

In order to become widely adopted by the enterprise, OpenStack **must** ultimately be delivered via robust, enterprise-grade products that close the gap on the key areas where OpenStack has challenges. These products are delivered today by businesses that can provide support, ease-of-installation, tools for day-to-day management, and all of the other pieces necessary for achieving acceptance. Without these vendors who have a stake in enterprise adoption, OpenStack can never be widely adopted. OpenStack isn’t MySQL. It’s the Linux kernel, and like the Linux kernel, you need a complete operating system to create success.

So what’s required? There are 6 key elements:

  1. 99.999% Uptime APIs & Scalable Control Plane
  2. Robust Management & Security Models
  3. Open Architecture
  4. Hybrid Cloud Interoperability
  5. Scalable & Elastic Architecture
  6. Global Support & Services

![6 Requirements for Enterprise-grade OpenStack Supporting Material.002](http://www.cloudscaling.com/wp-content/uploads/2014/04/6-Requirements-for-Enterprise-grade-OpenStack-Supporting-Material.002.jpg)

If your business requires an enterprise-ready OpenStack solution, read on to learn more about what a true enterprise-grade OpenStack-powered private cloud can - and should - offer. Over the next two weeks, I’m going to do a multi-part blog series entitled “_6 Requirements of Enterprise-grade OpenStack_” - where I will detail these six requirements.

To get started, lets look at OpenStack’s place in the enterprise.

### **OpenStack in the Enterprise Data Center**

Agility is the new watchword for cloud and DevOps is seen as the path to realizing agility. OpenStack provides the ideal platform for delivering a new developer experience inside the enterprise, just as Linux provided a new experience for web applications and Internet adoption. If OpenStack was just a “cheaper VMware,” then it would have little or no real value to the enterprise. Instead, OpenStack provides a shining example of how to build a private elastic cloud like major public clouds such as Amazon Web Services (AWS) and Google Cloud Platform (GCP). Just as Hadoop brought Google’s MapReduce (plus it’s reference architecture) to the masses, OpenStack brings the AWS/GCP-style Infrastructure-as-a-Service (IaaS) offering to everyone. This is what makes DevOps inside the enterprise ultimately shine.

Any discussion about DevOps, like so many of the recent buzzwords, can quickly become mired in semantic arguments. However, the one truism we can all agree on is that the traditional barriers between application developers and IT infrastructure operators need to be broken.

Time after time, I hear a similar story from our customers that goes like this: “We went to the infrastructure teams with our long list of requirements for our new application. They told us it would take 18 months and $10M before it would be ready. So we went to Amazon Web Services. We didn’t get our list of infrastructure requirements and we had to change our application model, but we got to market immediately.” That’s because the inherent value of AWS has less to do with cost and more to do with the on-demand, elastic and developer-centric delivery model.

OpenStack levels the playing field inside the enterprise. Private clouds can be built on the public cloud model, enabling developers while simultaneously giving centralized IT control and governance. In essence, it’s the best of both worlds, which is the true value of OpenStack-powered private clouds.

### **Why Does Agility Matter?**

While I think it’s self-evident that agility is the driving light behind cloud computing, it’s worth a quick refresh. The need for businesses to move now has driven [ridiculous growth for AWS](http://news.netcraft.com/archives/2013/05/20/amazon-web-services-growth-unrelenting.html) (see growth below and notice this is a **log** chart):

[caption id="" align="aligncenter" width="499"]![](http://news.netcraft.com/wp-content/uploads/2013/07/AMZN-growth.png) Netcraft AWS Growth Relentless[/caption] 

This growth is all net new applications, or what Microsoft calls next generation applications. The vast majority of these new applications are focused on creating entirely new business value, typically around mobile, social, web applications, and big data. In fact, this category of application is growing so fast that analysts such as IDC and Gartner have started tracking it [2]:

![Agility Driven by Next Gen Apps](http://www.cloudscaling.com/wp-content/uploads/2014/04/6-Requirements-for-Enterprise-grade-OpenStack-Supporting-Material.003.jpg)

At its current rate of growth, next generation cloud applications will equal the size of all existing applications by 2018:

![](http://www.cloudscaling.com/wp-content/uploads/2014/04/6-Requirements-for-Enterprise-grade-OpenStack-Supporting-Material.004.jpg)

Next generation applications are the source for future competitiveness for most enterprises, which has led them to accelerate their cloud adoption process and rethink their cloud strategy.

Observing this phenomenon is what led Forrester analyst Craig Le Clair to [say](http://blogs.forrester.com/craig_le_clair/13-09-09-make_business_agility_a_key_corporate_attribute_it_could_be_what_saves_you):

> Seventy percent of the companies that were on the Fortune 1000 list a mere 10 years ago have now vanished – unable to adapt to change …

We have now entered an adapt or die moment for enterprises, and OpenStack will be key to agility adaptation and the successful support of DevOps.

Over the next few weeks leading up to the OpenStack Summit I’m going to cover all 6 Requirements of Enterprise-grade OpenStack in detail.  Today I am going to handle the first two requirements: high uptime APIs and robust management of your cloud.

## **Requirement #1 – 99.999% Uptime Control Plane: High Uptime Apps Require a High Uptime API**

Continuing our discussion around delivering enterprise-grade OpenStack, let’s discuss how critical API availability and scaling out the cloud control plane are to delivering next gen applications.

### **Cloud API Uptime & Availability**

A critical capability for moving to a new cloud and devops model is the ability of cloud native applications to route around failures in an elastic cloud. These applications know that any given server, disk drive, or network device could fail at any time. They look for these failures and handle them in real-time. That’s how Amazon Web Services (AWS) and Google Cloud Platform (GCP) work and why they can run these services at a low cost structure and with greater flexibility. For an application to adapt in real-time to the normal failures of individual components, the cloud APIs must have higher than normal availability.

### **Your Cloud Control Plane’s Throughput**