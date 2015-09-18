---
author: Randy Bias
comments: true
date: 2011-12-07 18:36:10+00:00
layout: post
slug: aws-rebooting-100s-or-1000s-of-ec2-instances-for-security-update
title: AWS Rebooting 100s or 1000s of EC2 Instances for Security Update
wordpress_id: 2615
old_categories:
- Cloud Computing
---

I was just informed anonymously about AWS scheduling reboots across hundreds or even thousands of AWS EC2 instances.  This is to "receive some patch updates".  As some in the twitterverse have speculated, this is likely a security issue and most likely related to the hypervisor.

<!-- more -->A copy of one of the emails that was sent out by AWS is below, with the customer information redacted, of course.  Apparently many of these have been received.  My source claims this is one of several they received.  They are running 100s of instances and about 80% are affected.

Please comment or email info@cloudscaling.com if you have any additional information!

**UPDATE**: Good catch from [@johnleach](https://twitter.com/#!/johnleach) finding [this](http://www.debian.org/security/2011/dsa-2337) recent Debian/Xen security announcement that may be relevant.

**UPDATE2**: I am [live-tweeting](http://twitter.com/randybias) new information as it comes in.  Latest is that we have confirmed that both 32-bit and 64-bit instances affected.  Some speculation that any instance booted before 12/5/2011 is affected, which is probably most of AWS globally.  Best guess is the above security advisory is the root cause ([CVE-2011-1166](http://security-tracker.debian.org/tracker/CVE-2011-1166)) of the reboots and AWS is probably just being cautious rebooting 32-bit instances.


<blockquote>From: Amazon Web Services
Subject: Amazon EC2 Maintenance - Reboot Required
Date: December 6, 2011 11:35:53 AM EST

Dear Amazon EC2 Customer,

**One or more of your Amazon EC2 instances have been scheduled for a reboot in order to receive some patch updates. **Most reboots complete within minutes, depending on your instance configuration. The instance(s) that will be rebooted and your scheduled reboot time(s) are listed below.

Region        Instance ID    Maintenance Window
=================================================================
us-east-1	i-xxxxxxxx	2011-12-15 04:00:00 UTC - 2011-12-15 10:00:00 UTC instance-reboot
us-east-1	i-xxxxxxxx	2011-12-15 04:00:00 UTC - 2011-12-15 10:00:00 UTC	 instance-reboot
us-east-1	i-xxxxxxxx	2011-12-18 04:00:00 UTC - 2011-12-18 10:00:00 UTC	 instance-reboot
us-east-1	i-xxxxxxxx	2011-12-18 04:00:00 UTC - 2011-12-18 10:00:00 UTC	 instance-reboot
us-east-1	i-xxxxxxxx	2011-12-18 04:00:00 UTC - 2011-12-18 10:00:00 UTC	 instance-reboot
us-east-1	i-xxxxxxxx	2011-12-18 04:00:00 UTC - 2011-12-18 10:00:00 UTC	 instance-reboot
us-east-1	i-xxxxxxxx	2011-12-21 04:00:00 UTC - 2011-12-21 10:00:00 UTC	 instance-reboot
us-east-1	i-xxxxxxxx	2011-12-21 04:00:00 UTC - 2011-12-21 10:00:00 UTC	 instance-reboot
us-east-1	i-xxxxxxxx	2011-12-21 04:00:00 UTC - 2011-12-21 10:00:00 UTC	 instance-reboot
us-east-1	i-xxxxxxxx	2011-12-21 04:00:00 UTC - 2011-12-21 10:00:00 UTC	 instance-reboot
us-east-1	i-xxxxxxxx	2011-12-21 04:00:00 UTC - 2011-12-21 10:00:00 UTC	 instance-reboot
us-east-1	i-xxxxxxxx	2011-12-21 04:00:00 UTC - 2011-12-21 10:00:00 UTC	 instance-reboot
us-east-1	i-xxxxxxxx	2011-12-21 04:00:00 UTC - 2011-12-21 10:00:00 UTC	 instance-reboot
us-east-1	i-xxxxxxxx	2011-12-21 04:00:00 UTC - 2011-12-21 10:00:00 UTC	 instance-reboot
us-east-1	i-xxxxxxxx	2011-12-21 04:00:00 UTC - 2011-12-21 10:00:00 UTC	 instance-reboot
us-east-1	i-xxxxxxxx	2011-12-21 04:00:00 UTC - 2011-12-21 10:00:00 UTC	 instance-reboot

No action is required on your part. Each reboot will occur during the corresponding scheduled maintenance window listed above. Note that when a reboot is done, all of your configuration settings are retained. You also have the option to manage these reboots yourself at any time prior to the scheduled maintenance window.

If you do want to manage your reboots for yourself, or simply want more information on the reboot process, please visit the Amazon EC2 Maintenance Help Page at: http://aws.amazon.com/maintenance-help/

All scheduled events for your Amazon EC2 instances can also be found on the Scheduled Events page in the AWS Management Console at:
https://console.aws.amazon.com/ec2/home?#s=ScheduledEvents

Additional details on how to see your scheduled events, as well as additional details on how to manage them yourself can be found in the Amazon EC2 User Guide at: http://docs.amazonwebservices.com/AWSEC2/latest/UserGuide/monitoring-instances-status-check.html

Should you have any questions or concerns, the AWS Support Team is available on the community forums and via AWS Premium Support at:
http://aws.amazon.com/support

Sincerely,
Amazon Web Services

This message was produced and distributed by Amazon Web Services LLC, 410 Terry Avenue North, Seattle, Washington 98109-5210</blockquote>
