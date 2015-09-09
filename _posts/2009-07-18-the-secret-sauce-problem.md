---
title: 'The Secret Sauce Problem'
link: http://cloudscaling.com/blog/uncategorized/the-secret-sauce-problem/
author: randybias
description: 
post_id: 406
created: 2009/07/18 20:25:38
created_gmt: 2009/07/19 03:25:38
comment_status: open
post_name: the-secret-sauce-problem
status: publish
post_type: post
layout: post
---

# The Secret Sauce Problem

The vast majority of web applications have what I call _The Secret Sauce Problem_.  Every commercial web service of any kind needs to be differentiated in order to be interesting and attractive to customers.  There isn't any kind of differentiation in a typical 3-tier or N-tier[1] web application stack. This leads to needing secret sauce of some kind.  Secret sauce varies widely from application to application, but even between applications of the same kind there is a need to be differentiated. Two photo-sharing sites would typically build their backend photo processing and storage systems in different ways depending on the market they were trying to serve. **The Secret in the Sauce** Secret sauce comes in many flavors and sizes.  Some sites need software, some need hardware, and others need special architectures.  More and more frequently cloud computing systems are used for those types of secret sauce that require some kind of batch processing.  Examples of batch processing applications include photo resizing and transcoding.  Cloud vendors like [RightScale](http://www.rightscale.com) address the problem by providing a primary product that manages N-tier web applications and another one ([RightGrid](http://support.rightscale.com/12-Guides/RightGrid_User_Guide/01-RightGrid_Overview)) that manages batch processing. Many also try to roll-their-own using technologies like [Hadoop](/blog/technology/big-data/hadoop-101-by-chris-wensel). This diagram illustrates how these particular solutions work: 

![secret-sauce-diagram]({{ site.url }}/assets/media/2009/07/secret-sauce-diagram-1024x549.jpg)

**Secret Sauces of the World** Taking a look at some real-world examples will bring it home.  I've got a few below that I think will help us understand better. 

  * [Scribd](http://www.scribd.com): Windows clusters for processing and transforming documents
  * [SmugMug](http://www.smugmug.com): Photo [resizing](http://blogs.smugmug.com/don/2008/06/03/skynet-lives-aka-ec2-smugmug/) and [storage](http://blogs.smugmug.com/don/2006/11/10/amazon-s3-show-me-the-money/)
  * [FaceBook](http://www.facebook.com): [Highly scalable memcached](http://www.facebook.com/note.php?note_id=39391378919) clusters, [Haystack](http://www.facebook.com/note.php?note_id=76191543919) super scalable image storage system
  * [Runa](http://www.runa.com): Real-time consumer purchasing analytics
In each of these cases, the web service needs to differentiate.  I'm particularly fond of Scribd's secret sauce. The Scribd folks are largely a bunch of Linux & Ruby-on-Rails geeks who realized early on that the majority of document processing tools were on the Microsoft Windows platform.  So, they built their own Windows document processing clusters for secret sauce.  That's pragmatic **and** clever. **Conclusion** Every web application needs something special to make it compelling to it's chosen customer base.  This defines _The Secret Sauce Problem_ that confronts every web service that grows to any significant size.  Although secret sauce can come in many forms, it is very common to be a batch processing application of some kind.  The interesting parts of any web application or service are not the web app itself, but the secret sauce. If you don't have the sauce, you'll need it. Get some now. 

* * *

[1] N-tier is essentially the same as a 3-tier, but represent web apps where there might be more than one app-tier

## Comments

**[geetanjalid (Geetanjali Dighe)](#187 "2009-07-19 08:34:38"):** There is no future in vanilla for companies in a flat world. From The world is Flat.RT: [@DailyCloud](http://twitter.com/DailyCloud) Secret Sauce http://tinyurl.com/lpru7b

**[data recovery](#188 "2010-05-26 01:29:38"):** I ususally use N-tier application to sort out database structure and it works well.

**[data recovery](#2199 "2010-05-26 01:29:00"):** I ususally use N-tier application to sort out database structure and it works well.

