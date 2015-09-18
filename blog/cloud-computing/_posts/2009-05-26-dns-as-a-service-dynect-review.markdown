---
author: Randy Bias
comments: true
date: 2009-05-26 18:04:15+00:00
layout: post
slug: dns-as-a-service-dynect-review
title: DNS-as-a-Service + Dynect Review
wordpress_id: 2407
old_categories:
- Cloud Computing
tags:
- api
- Automation
- cloud
- DNS
- scaling
---

Domain Name Service (DNS) is a crucial part of the cloud infrastructure stack that is often overlooked. All Infrastructure-as-a-Service (IaaS) cloud providers today deliver it in some form, from Amazon's automated, but unconfigurable service to GoGrid's manual, but highly configurable service. Fortunately, while compute clouds are new to this game, there are some old hands at work such as [Dynect](http://www.dynect.com) ([DynDNS](http://www.dyndns.com)) and [UltraDNS](http://www.ultradns.com/) ([Neustar](http://www.neustar.biz/)). It's to these old hands many turn when they want DNS to 'just work'. Since most of my personal experience is with Dynect, I'm going to talk about DNS services in the context of their business-class service.          
  

**Basic DNS Primer
** The Domain Name Service (DNS) does one thing very well. It translates IP addresses into hostnames and vice versa:


<blockquote>192.168.1.1 -> firewall.company.com

firewall.company.com -> 192.168.1.1</blockquote>


This makes it trivial to type URLs into your browser bar. For instance:


<blockquote>http://www.google.com</blockquote>


Behind the scenes DNS looks up the IP address(es) for 'www.google.com' and your computer can connect directly.

More importantly, for developers and web operators, it allows source code and configuration files to point to a DNS name rather than an IP address. This is critical when servers may change where they are on the network, which happens more frequently than you imagine. In cloud computing environments it happens quite a lot!

Without robust and effective DNS, your web application or cloud-based service will tend to be brittle, prone to outages.

**Advanced DNS Primer
** I won't cover how DNS works in detail behind the scenes, but do suggest you check out the comprehensive Wikipedia [article](http://en.wikipedia.org/wiki/Domain_Name_System) on the topic. I will provide you with some details on some of what has changed recently in DNS land that is highly relevant to cloud computing itself and explains why running DNS robustly is not just for anyone.

A major advance in the way that DNS services are deployed is the use of [Anycast](http://en.wikipedia.org/wiki/Anycast) technology. Simply put, Anycast is a 'trick' you can play whereby a host can appear to be in multiple places on the Internet at once. With DNS this trick is performed by doing the following:



	
  1. Deploy your DNS servers in a number of different global locations

	
  2. Configure each DNS server so it looks like all the others (same IPs, etc.)

	
  3. Employ a trick with Border Gateway Protocol (BGP) to route all traffic to all servers


I'm simplifying this a bit, of course, but the result is what matters. Effectively, now when a computer on the Internet does a DNS lookup against any of these hosts they will somewhat auto-magically reach the closest one to them. This makes DNS deployed in this manner very fast and resistant to failures.

This works well for DNS servers, but it's not the only advanced DNS feature that services like Dynect can provide. In addition to deploying Anycast servers, these DNS services frequently provide:

	
  * Load balancing across multiple locations or cloud providers

	
  * Geographically intelligent traffic management (route customers to 'closest' server)

	
  * Deeper reporting data

	
  * APIs for maintaing DNS


Needless to say these are all non-trivial capabilities for your average business to build into their own DNS structure[1].

**Dynect and Me
** First off, I need to be clear that I am a member of the Dynect customer council and may be a bit biased; however, while most of this review undoubtedly holds true for Dynect, it's probably somewhat true (at least) for their competitors. You'll need to try them out for yourself.

I've been using Dynect for well over a year now and during that time have experienced zero DNS service outages. There were a couple of speedbumps with API accessibility early on, but even those are long gone now. We used Dynect for the [CloudScale Project](http://neotactics.com/cloudscale) and were heavy API users. Although the user interface (UI) leaves something to be desired, the API has been outstanding. Generally speaking changes made via the API show up globally across all of their nameservers in a few seconds or less. This is an outstanding response time!  If you're a cloud provider and want to outsource DNS services I highly recommend using Dynect just because of this.

The UI, while clunky, is usable and there are a number of convenience features for experienced DNS admins like the ability to import a standard DNS zone file. More importantly, the reporting data is excellent allowing you to get detailed usage reports at any level of detail like the following:

![Dynect Reporting Example](http://cloudscaling.com/wp-content/uploads/2009/05/dynect-report1.jpg)

The only major downside I encountered with the Dynect service was that the API had not been designed well for concurrency, meaning that if you had multiple processes making updates at the same time with the same credentials they would run over each other. I believe the Dynect folks have either fixed this or a fix is in their current roadmap.

**Summing up DNS
** Domain Name Service is critical to a well functioning Internet infrastructure or cloud application. Building it yourself is possible for the basics, but achieving the same level of robustness and features of a DNS cloud service is difficult without considerable resources. Many of these DNS services provide good value for your money. I personally recommend Dynect as I have had great experiences with them from a reliability, support, and feature point of view. In the classic equation of build vs. buy, DNS definitely gets a 'buy' from me, a long time DNS administrator.

 
[1] If you insist, then start here with [RFC3258](http://tools.ietf.org/html/rfc3258)
