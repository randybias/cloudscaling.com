---
title: "The Future of OpenStack's EC2 APIs"
link: http://cloudscaling.com/blog/openstack/the-future-of-openstacks-ec2-apis/
author: randybias
description: 
post_id: 7721
created: 2015/02/12 13:29:12
created_gmt: 2015/02/12 21:29:12
comment_status: open
post_name: the-future-of-openstacks-ec2-apis
status: publish
post_type: post
layout: post
category: openstack
---

# The Future of OpenStack's EC2 APIs

Recently, some more talk was had around the future of the EC2 APIs, beginning with some [comments on the openstack-operators](http://lists.openstack.org/pipermail/openstack-operators/2015-January/006061.html) mailing list, followed by [threads on the dev and foundation](http://lists.openstack.org/pipermail/openstack-dev/2015-February/055730.html) mailing list.  This ultimately resulted in a suggested [commit to officially “deprecate”](https://review.openstack.org/#/c/150929/) the EC2 APIs from Nova.  This commit was rejected, but make sure you read through the commentary if you have time.  Some really great perspective.  If you don’t here’s my basic summation:

  * Many people still very much care about the EC2 and AWS APIs and are quite concerned about their state and the lack of attention to keeping them current
  * Some people are adamant about deprecating and then removing them as expeditiously as possible
  * Others are interested in keeping them around, but moving them out of the default distribution and making sure they have a good home

As many people know, I’m passionate about this subject.  If you missed the blog posting that caused a massive kerfuffle in summer of 2013, now is the time to take a look again: [OpenStack’s Future Depends on Embracing Amazon. Now.](http://www.cloudscaling.com/blog/cloud-computing/openstack-aws/) There was a pretty massive response to that original article, including a very vibrant OpenStack meetup with a [debate that was covered live](https://www.youtube.com/watch?v=W7H5zFWUSVI) between myself and Boris Renski, co-founder of Mirantis. 

I am proud of driving that conversation, but one pushback that arose could be summarized as: “put your money where your mouth is”.  At the time we were already working towards a goal that would have responded to this pushback but it’s taken alot longer than I would like to materialize.

We are finally there.  Let me explain.

**The StackForge Standalone EC2 API**

It’s taken a while and the entire backstory and history isn’t really relevant for this article, but Cloudscaling (now part of EMC) has been working diligently to build a drop-in replacement for the existing Nova EC2 API. This standalone [EC2 API can be found in StackForge](https://github.com/stackforge/ec2-api). This re-implementation of the EC2 APIs is now ready for prime time and serendipitously you can see from the opening comments that the community is very interested in adopting it.

Some details on the status of the new EC2 API can be found in the initial documentation in the [commit](https://review.openstack.org/#/c/147882/4/specs/kilo/ec2-api.rst).

To summarize, the new standalone API:

  * Is feature complete and at parity with the existing Nova EC2 API
  * Has equivalent or better test coverage to the existing Nova EC2 API
  * Is configured by default on a different port (can be run in parallel to all existing APIs)
  * Included a new set of features in the form of full coverage for the VPC APIs (a subset of EC2)
  * Has been tested exhaustively with the [AWS unified CLI](https://github.com/aws/aws-cli) tool, a python CLI for driving all of the AWS services
  * Calls the OpenStack REST APIs rather than any of the “internal API” or function calls for a clean separation of duties
  * AWS tempest tests have been expanded, tested against AWS itself as a baseline then used to validate this APIs behavior

This is very exciting and it’s what the community has been asking for.  More importantly, to me, at least, is that the EC2 API could potentially stay in StackForge and become an optional plugin to OpenStack, letting those who care use it while also allowing the team who is maintaining it to iterate at a slightly different speed from the current 6-month integrated release cycle.

For those who are wondering, it’s EMC’s intention to continue to invest into and maintain this API bridge to OpenStack. 

**The EC2 API Still Matters to OpenStack**

During the “debate” that occurred in 2013, I was frequently bemused by the attempts of community members to downplay the importance of the EC2 APIs. I think it’s all settled down now and generally accepted that we want the EC2 APIs to live on and succeed in OpenStack-land and hopefully we’ll even support other APIs down the road.

For those who are still holdouts though, I think the latest OpenStack User Survey data continues to reinforce how important the EC2 and other AWS APIs are:

![A Brief State of the Stack 2014 v3 - 2014-11-06 CSH Updates-09.019]({{ site.url }}/assets/media/2015/02/A-Brief-State-of-the-Stack-2014-v3-2014-11-06-CSH-Updates-09.019.jpg)

What’s enlightening here is that in 2013 I was hearing the constant refrain of “the EC2 APIs are used by only a ‘fraction’ of the community”.  That ‘fraction’ was *merely* ~30-35% at the time according to the user surveys.  As you can see, usage of the EC2 APIs has actually increased since that time and now we’re at 44% for production deployments, a 25% increase in roughly 18 months. This is very important.

_It means that usage of the EC2 APIs is increasing, fairly dramatically, over time._

I’ll reiterate again, since folks still sometimes get confused, I’m not advocating dropping the OpenStack APIs in favor of AWS.  I’m advocating embracing the AWS APIs, making them a first class citizen, and viewing AWS as a partner, not an enemy.  A partner in making cloud big for everyone.

This reality inside the OpenStack community is starting to materialize and I need your help.

**The Game Plan**

Awesome, we have a new set of improved EC2 APIs, a path towards supporting them and deprecating the old.  Whether you love the EC2 APIs or hate them, it’s good for everyone to move them out of the default deployment, create greater isolation between these APIs and OpenStack internals, and to have a path forward where they can be maintained with love. 

Everybody wins, even the detractors.

Well, to get this the rest of the way, we need to do the following:

  1. Test, test, test: if you are using the existing EC2 APIs, please give these a try, break them, and file bugs
  2. If you are a developer and want to help cover any gaps in functionality or bugs that have been found, then get involved now; this is a standard stackforge project, so anyone can get in the mix
  3. There are some known challenges in the existing OpenStack APIs that need to be addressed for a more robust solution; these are documented in a new [blueprint you can find here](https://review.openstack.org/#/c/153636/)
  4. Help update and maintain the documentation so people know that this capability is available for their OpenStack deployments/products, whether DIY or product based
  5. Add a set of testing capabilities to [RefStack](https://github.com/stackforge/refstack) to test for “AWS interoperability” alongside “OpenStack interoperability” 

I really appreciate all of the supporters and also detractors who have been involved in this discussion. I believe that this kind of debate and action, like the Internet before it and the IETF mantra of old (“running code and rough consensus”), is what makes OpenStack great. Completing this project will also provide us a blueprint for how we support the public APIs of other public clouds in OpenStack-land.

Finally, a big thanks to Alex Levine, Feodor Tersin, and Andrey Pavlov, for being the tip of the spear on this work.  Without them we wouldn’t have made it this far.