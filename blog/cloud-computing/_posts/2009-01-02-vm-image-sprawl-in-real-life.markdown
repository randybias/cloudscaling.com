---
author: Randy Bias
comments: true
date: 2009-01-02 07:45:12+00:00
layout: post
slug: vm-image-sprawl-in-real-life
title: VM Image Sprawl in Real Life
wordpress_id: 2382
old_categories:
- Cloud Computing
- Technology
tags:
- Virtualization
---

A while back, [Geva Perry](http://gevaperry.typepad.com/) and I were chatting about the issue of [virtual machine image sprawl](http://www.google.com/search?hl=en&client=safari&rls=en-us&q=virtual+machine+image+sprawl&btnG=Search) (Google Search), which is really little more than an extension of [not-so-new](http://techupdate.zdnet.com/techupdate/stories/main/0,14179,2844412,00.html) traditional physical server sprawl problem.  It's hard to get really hard data on how bad the vm sprawl problem is since most images exist behind firewalls or other walled gardens.  However, there is one good place to get solid data and that's Amazon's own public image repository.

**Real Data**
So, around the time we were chatting I started collecting some information on the number of public Amazon Machine Image (AMIs).  This isn't a perfect sampling, but should be pretty good for most purposes.

Here's what the data looks like as of today:![Amazon Machine Image (AMI) Count](/assets/media/external/Amazon-AMI-Count-Q4-08.png)

As you can see there is quite a steady stream of new images added to EC2.  The data flatlines during the holiday break, but I'm sure we'll see it pick back up starting next week.

Main takeaway is the 12% month-over-month growth of AMIs from 11/24 to 12/24.  That's pretty amazing when you consider this is the **public** images only.

**Amazon Private Images**
_Private_ images might range somewhere between 10 and 100x public images.  I can tell you that [CloudScale](http://neotactics.com/cloudscale) had approximately 90 private AMIs created over it's lifetime (~1 year).  CloudScale would probably be considered more of a 'power user' though, so it's more realistic to assume something closer to 10 total private AMIs per average AWS user.

Hard to say how that relates to the images in the public repository.  I can't even really hazard a guess, but we're probably talking on the order of 20,000 AMIs minimum and quite possibly towards the higher end of the spectrum.

**Conclusion**
Anyway you measure it, while virtualization 'solved' the datacenter efficiency and server usage problem, it also uncorked the bottle in terms of sprawl.  At least with physical servers you were constrained by hardware, power, and cooling.  Now the only constraint is disk space, which is basically no constraint.

This problem is only going to get dramatically worse as we move forward.  You're going to see a lot of folks trying to solve the sprawl problem in a variety of ways.  I'm 100% certain, for example, that Amazon's November [pre-announcement](http://aws.amazon.com/contact-us/new-features-for-amazon-ec2/) of an AWS GUI in '09 is a result of their need to put a rich UI around their public images.  We'll see ratings, social networking, and possibly versioning baked in when it releases.
