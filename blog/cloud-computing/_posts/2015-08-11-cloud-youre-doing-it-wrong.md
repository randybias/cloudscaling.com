---
title: "Cloud ... You're Doing it Wrong!"
link: http://cloudscaling.com/blog/cloud-computing/cloud-youre-doing-it-wrong/
author: randybias
description: 
post_id: 7806
created: 2015/08/11 08:47:47
created_gmt: 2015/08/11 15:47:47
comment_status: open
post_name: cloud-youre-doing-it-wrong
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Cloud ... You're Doing it Wrong!

I’ve been doing “cloud” for about as long as it’s been a “thing”.  It is safe to say that I’ve talked about every conceivable topic related to cloud and cloud computing.  Unfortunately, I still run into a common problem, which is that the average enterprise looking to adopt cloud or build their own, is usually doing it for the wrong reasons and in the wrong way.  So I frequently find myself retreading old territory.  This blog posting is an attempt to synthesize down what you need to know about cloud as you start your journey.

## Cloud <del>Definition</del> Value: Competitive Advantage

I’m half-tempted to define cloud, but honestly, that isn’t really necessary.  Regardless of what you think cloud is or isn’t, I’m seeing consistency in what people believe it will give them: agility, cost reduction, and future-proofing.  Put differently: move faster, cost less, and skate to the future.  Unfortunately, I still see the majority of businesses focused on only one of these aspects, reducing costs, which is arguably the least important.

What’s common across speed, cost, and future-proofing?  Gain a  competitive advantage.  Ask anyone today and it’s generally agreed that we are in a new, highly disruptive period, where business models, technology usage, and market position are all up for grabs. The vast majority of the Fortune 1000 have already turned over or are at risk according to the American Enterprise Institute [1], Forrester [2], and IDC [3]. The adage “adapt or die” is now widely applicable to even the most entrenched monopolies.  Even huge telcos, with massive barriers to entry protecting their marketplaces, like AT&T, are making aggressive moves into cloud.

All of this leads me to conclude that:

> The primary value of cloud is to generate competitive advantage.

If you aren’t thinking about cloud in this manner then you are simply doing it wrong.  Period.

# A Recent Example

What kind of company does this look like to you?

![citibank-greg-lavander-wordcloud]({{ site.url }}/assets/media/2015/08/citibank-greg-lavander-wordcloud-1024x379.jpg)

One might be tempted to say it looks like one of the webscale cloud pioneers like Google, Amazon, Microsoft, or Facebook.  It’s not.  It’s a very traditional business: Citi ([Citigroup](https://en.wikipedia.org/wiki/Citigroup)).

In January of 2015, Deloitte put out an interesting blog posting, entitled “[software-defined everything](http://dupress.com/articles/tech-trends-2015-software-defined-everything/).”[4]  It’s a bit overwrought as an article, but what I found interesting was the “My Take” by Greg Lavander of Citi.

Greg’s [summary](http://pages.citebite.com/p4i5v6q0y7rfu) says it all:

> Focusing IT on these three objectives—cloud scale, cloud speed, and cloud economics—has enabled Citi to meet our biggest challenge thus far: fostering organizational behavior and cultural changes that go along with advances in technology. We are confident that our software-defined data center infrastructure investments will continue to be a key market differentiator—for IT, our businesses, our employees, our institutional business clients, and our consumer banking customers.

Citi has embraced and adopted cloud in a very serious manner to help them create and maintain competitive advantage.  Choice pieces from this article:

  * [Adoption of modern cloud services like NoSQL](http://pages.citebite.com/f4r5g6o0t5rbj)
  * [Scale-out network architectures designed after large public clouds](http://pages.citebite.com/f4x5r6x0c6cjp)
  * [Cloud style scalability and elasticity](http://pages.citebite.com/u4l5c6l0q2hyj)
  * [Speed of cloud via DevOps and automation](http://pages.citebite.com/c4f5t6m0n3efm)
  * [Lowered TCO via standardization, re-architecting, and re-platforming](http://pages.citebite.com/b4e5r6s0u4igt)

Citi is not only embracing the most basic of cloud capabilities (VMs-on-demand), but also migrating towards more modern data storage and processing, scale-out-architectures, Platform-as-a-Service, DevOps, and application automation.

Most telling, they aren’t afraid to “re-architect” and “re-platform” existing applications, presumably moving them from the “second platform” to the “third platform”, a cloud-native approach.

Why do this unless there is a massive advantage to be gained?  Clearly Citi is all in.

## You Can’t Cherry Pick Your Way to the Future

I know quite a few businesses who attempt to “adopt cloud” by building a VMs-on-demand system using VMware or OpenStack and then call it done.  The reality though is that you can’t cherry pick some of cloud and reap the benefits.  Quite the opposite.  You have to go “all-in on cloud” in order to create and maintain a competitive advantage.  To stay relevant.  To skate to the future.

Here are the warning signs if you are doing it wrong or trying to cherry pick a solution:

  * You are trying to “get a cheaper VMware”
  * Reducing your “datacenter costs” is most important to your executives
  * Are “doing private cloud first and public cloud later”
  * Have teams engaging in CYA and stalling tactics
  * You are focused on “more automation” for second platform applications
  * Think that “third platform” is a “tiny fraction” of your application needs

This is bass ackwards.  Success in cloud means making IT more relevant to the business by driving competitive advantage.  Driving competitive advantage means speed, lowered TCO, and looking towards the future.  It means not being afraid to “re-platform” key applications.  It means extracting maximum value out of data.  It means looking to the webscale cloud pioneers for patterns that might be relevant to your business (e.g. Hadoop for analytics and ETL).

## Your Cloud Journey

If you are going to do it, do it right.  Deploying your Vblock and calling it a day isn’t enough.  Doing a couple of DevOps projects or deploying some NoSQL isn’t enough.  You’ve got to play to win and that means getting your executive team onboard, being an educator and instigator.  Explaining, re-explaining, and explaining again.  Adapt or die isn’t a platitude, it’s a watchphrase of our times.

Repeat after me: “cost savings is a side effect”.  Say that over and over until you have internalized it.

Then, get out there and get it done.

* * *

[1] “[Fortune 500 firms in 1955 vs. 2014; 89% are gone](http://www.aei.org/publication/fortune-500-firms-in-1955-vs-2014-89-are-gone-and-were-all-better-off-because-of-that-dynamic-creative-destruction/)” - American Enterprise Institute.  
[2] “[Seventy percent of the companies that were on the Fortune 1000 list a mere 10 years ago have now vanished – unable to adapt to change.](http://blogs.forrester.com/craig_le_clair/13-09-09-make_business_agility_a_key_corporate_attribute_it_could_be_what_saves_you)” - Craig Le Clair, Forrester  
[3