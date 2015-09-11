---
title: 'A CoprHD Status Update'
link: http://cloudscaling.com/blog/cloud-computing/a-coprhd-status-update/
author: randybias
description: 
post_id: 7793
created: 2015/07/31 16:03:05
created_gmt: 2015/07/31 23:03:05
comment_status: open
post_name: a-coprhd-status-update
status: publish
post_type: post
layout: post
category: cloud-computing
---

# A CoprHD Status Update

I wanted to provide you a big update on [Project CoprHD](http://coprhd.github.io) and a mea culpa.  As many of you know, EMC launched CoprHD during EMC World 2015 and made the code generally available on June 5th.  Unfortunately, we are learning the hard way about proper follow through when open sourcing a project.  As you probably noticed, since June 5th, we have “gone dark” and there hasn’t been a lot of information.  Our bad.  That wasn’t intentional, but simply a lot of focus on our part on execution and not so much on communication.

So this blog posting is an attempt to get us back on track.  We’ll also be trying to communicate better on the mailing lists and [project website](https://coprhd.atlassian.net/wiki).  We do believe in openness and transparency, we just aren’t very good at it yet.  :)

You can find out more about CoprHD at my previous blog postings: [introducing CoprHD](/blog/cloud-computing/introducing-coprhd-copperhead-the-cornerstone-of-a-software-defined-future/) and [CoprHD's architecture](http://cloudscaling.com/blog/cloud-computing/project-coprhds-architecture/).

## CoprHD Update

One of the biggest problems to date is that we don’t have a clearly published timeline on the follow through to the original open sourcing of the project.  We’re working on providing more regular updates via the [Google Group](https://groups.google.com/forum/#!forum/coprhddevsupport).  Meanwhile, here’s a quick list of what happened over the past 45 days and where we are headed in the future. This includes the big news that as of today (July 31st, 2015) we can accept outside pull requests!

  * Our development team is swapped over and developing off of the public repository 
    * Kick ass job, people!
    * You can see that the [number of commits has increased dramatically](https://github.com/CoprHD/coprhd-controller/graphs/contributors)
  * The Jira ticketing system is open, but you’ll have to create an account to create new tickets 
    * [Jira is here](https://coprhd.atlassian.net/browse/COP-13138?jql=)
  * July 31st: open for bidness (i.e. external contributions) 
    * “[Get started with developing](https://coprhd.atlassian.net/wiki/display/COP/Getting+started+guide+for+developers)” wiki articles
    * Developer contribution agreement / licensing finalized (DCO and Mozilla Public License)
    * Sanity tests
    * Posted community rules / governance structure (NOT a foundation!)
    * Ability for non-EMCers to [perform an upstream pull request via Stash](https://review.coprhd.org/projects/CH/repos/coprhd-controller/commits)
    * Public continuous integration / testing environment
  * August 13th: open architectural discussion for CoprHD projects
  * April is next planned major release
  * Expect on a weekly basis every Friday for the next several months at least for a tutorial video to be posted. 
    * These will be videos ranging from simply how to request your dev accounts and get CoprHD up and running to whiteboarding the architecture of CoprHD and walking through our directory structure

We also have some very exciting upcoming events:

  * August 17-19th: Join us at the [Intel Developer Forum](https://www-ssl.intel.com/content/www/us/en/intel-developer-forum-idf/san-francisco/2015/idf-2015-san-francisco.html) in San Francisco for a demonstration of CoprHD with Intel running CoprHD on Intel’s Rack Scale Architecture (RSA) and managing EMC’s distributed block storage software system, ScaleIO.
  * September 1st-3rd: CoprHD’s first ever developer meetup in Cambridge, MA; we are actively soliciting as many folks to come as possibly, particularly other storage vendors who want to help with this initiative.  Meet the core developers f2f, ask questions, and probably some focused “hacking” sessions, particularly on parts of the code that need to change to allow a “bigger tent”.

## Summary

Again, a brief mea culpa.  We didn’t quite mean to take so long to give everyone an update.  We are super excited over here.  So far everything has been a success and I think we’ve been caught up in the headiness of it all.  Next step is to get as many more people on board as possible, particularly our fellow storage companies.