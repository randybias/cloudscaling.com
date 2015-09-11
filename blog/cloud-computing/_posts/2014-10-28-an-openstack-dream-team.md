---
title: 'An OpenStack Dream Team: EMC + Cloudscaling'
link: http://cloudscaling.com/blog/cloud-computing/an-openstack-dream-team/
author: randybias
description: 
post_id: 7637
created: 2014/10/28 08:01:27
created_gmt: 2014/10/28 15:01:27
comment_status: open
post_name: an-openstack-dream-team
status: publish
post_type: post
layout: post
category: cloud-computing
---

# An OpenStack Dream Team: EMC + Cloudscaling

If you’re following the buzz surrounding the EMC acquisition of Cloudscaling, you might wonder:

> Is this a mismatch, or am I missing something?

Yes. You’re missing something. Let me explain.

First, you’ll want to take a closer look at the [announcements by EMC today](http://www.emc.com/about/news/press/2014/20141028-02.htm) [1]. We will join the EMC Emerging Technologies Division led by CJ Desai. Cloudscaling OCS is now a core part of EMC’s Enterprise Hybrid Cloud Solutions. The Enterprise Hybrid Cloud Solutions powered by Openstack will be available in 2015. But this only paints half of the bigger picture to help you understand why this is a match made in heaven.

The other half of the backstory can be found in the Cloudscaling blog and in a few of my more notable presentations. Here is the synopsis:

  * Cloud computing is NOT virtualization on demand
  * Cloud computing was created by web-scale pioneers like Google and AWS
  * Cloud computing is a completely new kind of computing, fundamentally different from legacy enterprise computing

A couple of solid resources that will help deepen your understanding of these three points can be found in this [presentation for NIST](http://www.slideshare.net/randybias/clouds-openness-and-it-patterns-for-nist) and in an older [interview with Adrian Cockroft](http://www.cloudscaling.com/blog/cloud-computing/cloud-innovators-netflix-strategy-reflects-google-philosophy/) of Netflix.

This view of the world is the cornerstone of Cloudscaling’s product strategy. Essentially, we believe that two kinds of clouds are needed for two different types of applications:

![Cloudscaling OCS Product Deck - 2014-08-17 - DRAFT.083](http://www.cloudscaling.com/wp-content/uploads/2014/10/Cloudscaling-OCS-Product-Deck-2014-08-17-DRAFT.083.jpg)

Yes, part of this was driven by pragmatism. VMware is king of the hill in enterprise virtualization and it’s hard to imagine a universe where that changes. But once nascent “cloud-native” applications are emerging very rapidly. Cloud-native apps manage their own availability and uptime, and they’re designed for scale-out with minimal or zero human engagement. This is where [DevOps](http://en.wikipedia.org/wiki/DevOps) comes in. It’s the primary vehicle by which enterprises can successfully build cloud-native applications. It also brings into focus the prevalent [“pets vs. cattle” meme](http://www.cloudscaling.com/blog/cloud-computing/pets-vs-cattle-the-elastic-cloud-story/) that describes in a nutshell what a cloud-native application is: treating servers as disposable field replaceable units (FRUs) rather than critical pieces of infrastructure that must never fail.

EMC’s strategy is consistent with this approach to infrastructure and applications. They use a term that IDC coined called “third platform apps” to describe these new cloud-native applications. The speed at which the third platform is growing is almost unprecedented:

![6 Requirements for Enterprise-grade OpenStack Supporting Material.003](http://www.cloudscaling.com/wp-content/uploads/2014/10/6-Requirements-for-Enterprise-grade-OpenStack-Supporting-Material.003.jpg)

We didn’t realize it during our first conversations back in 2012, but EMC and Cloudscaling were slowly moving towards each other, even though we didn’t quite see eye to eye on how to get there. EMC made some impressive moves in pursuing its scale-out architecture portfolio, including the [acquisitions of Isilon](http://www.emc.com/about/news/press/2010/20101115-01.htm) and ScaleIO, and internal developments such as ViPR.

Through our interactions with EMC it became clear to our leadership team that EMC was more closely aligned philosophically to Cloudscaling than anyone else.

**EMC Understands Disruption**  
Smart companies [disrupt](https://en.wikipedia.org/wiki/The_Innovator's_Dilemma) themselves. Apple and Amazon get this. EMC does, too.

This becomes clear when you look at EMC's philosophy of purchasing companies like VMware and Greenplum, spinning off Pivotal, and the acquisition of their own all flash arrays with XtremIO. It demonstrates an appetite and willingness to take on risk and move boldly into the future.

It’s here that you see proof of EMC’s belief in the rise of “third platform” or “cloud-native” or “scale-out” applications, three concepts for describing the same phenomenon. Cloudscaling's delivery of the first enterprise-grade OpenStack-powered cloud operating system with [Open Cloud System](http://www.cloudscaling.com/products/ocs-system-overview/), surely did not go unnoticed. EMC saw the value in our shared vision and that a deep collaboration could mean great things.

**Delivering on Greatness the EMC Way**  
As the _Innovator’s Dilemma_ illustrates, a well-run company could pay too much attention to existing customers at the expense of identifying, adopting, and nurturing new technologies that new market entrants could use to disrupt existing business lines. EMC knows this, and it’s planning for it.

Look at the [recent reorganization](http://www.channelregister.co.uk/2014/10/15/core_divisional_duo_at_emc/) of all of EMC’s scale-out technologies under CJ Desai in the Emerging Technologies Division (ETD). This group now includes:

  * XtremIO, the leader in all flash arrays
  * ViPR, software defined storage
  * ScaleIO, scale-out block storage
  * Atmos, scale-out object storage
  * Cloudscaling, scale-out cloud operating system powered by OpenStack

What you will notice about ETD is that it is fundamentally about incubating and delivering new technologies that are potentially disruptive to the existing EMC product lines.

For these reasons, Cloudscaling finds itself in excellent company.

**The Cloudscaling and EMC Dream Team**  
This is why EMC+Cloudscaling makes sense. Both companies are planning for cloud-native apps to be embraced by the enterprise. And OpenStack will be key to delivering the infrastructure to support these apps.

The mission, vision and go-to-market execution proof-points driving EMC toward cloud computing are perfectly aligned with Cloudscaling. The quality of EMC's leadership team and the company’s commitment to making things happen impress me every day.

Here’s to the future. It’s going to be bright!

![randyb-signature-page1](http://www.cloudscaling.com/wp-content/uploads/2014/10/randyb-signature-page11.gif)

 

 

 

—Randy Bias

[1] Also make sure to check out Ken Hui's blog posting [What EMC is up to with OpenStack solutions](http://cloudarchitectmusings.com/2014/10/28/what-emc-is-up-to-with-openstack-solutions/)