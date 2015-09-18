---
author: Randy Bias
comments: true
date: 2009-11-21 02:59:23+00:00
layout: post
slug: more-on-amazons-sas70-type-ii
title: More on Amazon's SAS70 Type II
wordpress_id: 829
old_categories:
- Cloud Computing
tags:
- amazon
- audits
- aws
- cloud
- elastic compute cloud
- Security
- whitepapers
---

Amazon hasn't been forthcoming since my [last post](http://cloudscaling.com/blog/cloud-computing/why-amazons-sas70-is-bogus) on their control and control objectives, which is disappointing, but expected.  I still believe that transparency here is more important than [security through obscurity](http://en.wikipedia.org/wiki/Security_through_obscurity).  Hiding the controls and control objectives doesn't provide much in the way of particular security benefits, although I'm certain some will argue that it does.  Consider however, that while the [SAS70](http://en.wikipedia.com/wiki/SAS70) controls would tell what is being audited, that doesn't necessarily translate to all of the controls in place.

Regardless, a bit more light has been shed on Amazon's controls and measures in their recent security webinar.  You can access it [here](http://awsmedia.s3.amazonaws.com/Webinar_Overview_of_%20AWS_Security_Processes_102209_final.wmv).

At a high level, CJ Moses, who presents the webinar talks to the core areas they covered in the control objectives, which are:



	
  1. Security organization

	
  2. Amazon employee lifecycle

	
  3. Logical security

	
  4. Physical security

	
  5. Environmental safeguards

	
  6. Change management

	
  7. Data integrity, availability, and redundancy

	
  8. Incident handling


This looks pretty reasonable at a high level.  Of course, it would be nice to see the actual controls and objectives, but at least they are covering the appropriate areas of security.  I do notice that there isn't much around perimeter or related security.  I'm guessing they are trying to gloss over the AWS distributed firewall.  It would be nice if someone besides Amazon was vetting the way this was built.  They appear to consider it a piece of core intellectual property despite the fact it would be trivial to reproduce.  I'm not exactly certain why.
