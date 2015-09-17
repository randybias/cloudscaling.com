---
title: 'Looking in the Mirror: A Response to My Open Letter'
link: http://cloudscaling.com/blog/company/looking-in-the-mirror-a-response-to-my-open-letter/
author: Randy Bias
description: 
post_id: 6587
created: 2013/08/06 07:16:20
created_gmt: 2013/08/06 14:16:20
comment_status: open
post_name: looking-in-the-mirror-a-response-to-my-open-letter
status: publish
post_type: post
layout: post
category: company
---

# Looking in the Mirror: A Response to My Open Letter

Last week I published an [open letter](/blog/cloud-computing/openstack-aws/) to the OpenStack community calling for more focus on Amazon Web Services (AWS) compatibility. I feel strongly about this, as do others. However, in retrospect, I could have gone about elevating this issue in a different manner. I realize now that it might have been better had my letter called for a community-based approach to focusing on AWS compatibility.

For that, I apologize.

Regardless, it did create discussion, and that was the objective. In fact, a lot of discussion was created, and I feel pretty good about that. Surprisingly, much of it was supportive of the general thesis with only a minority of dissenters.

**Miscommunications & Misunderstandings**

Among the dissenting responses were four general categories of reactions that were categorically incorrect:

  * Randy is calling for the removal of the Nova API (incorrect)

  * Randy is calling for only Amazon compatibility at the expense of OpenStack innovation (incorrect)

  * Randy doesn’t want the OpenStack community to control their own API (incorrect)

  * Randy is calling for slavish replication of AWS APIs *only* in OpenStack (incorrect)

 

Just to be clear, what I’m saying is:

  1. Nova should have its own API that is controlled by the community

  2. That API should be a low-level API without an “opinion”

  3. The Rackspace API is NOT the right low-level API or abstraction layer

  4. Amazon compatibility must happen in addition to all other OpenStack innovations

  5. OpenStack can and should innovate in parallel with efforts around AWS compatibility

I don’t think any of this is actually counter to how most people feel. The only problem I see is that folks tend to have a lot of feelings about moving the current Rackspace (Nova) API elsewhere. I’m not really certain why since it is no more “native” to OpenStack than the EC2 API. Both are relatively alien. Both have an opinion that limits innovation on some axis.

My advocacy for embracing Amazon and the AWS API set has everything to do with positioning OpenStack for leveraging its private cloud advantage and absolutely nothing to do with slavish replication of features found in other clouds or other cloud software.

In short, I'm advocating that OpenStack innovate separately from AWS while maintaining compatibility.

I think this is important given that in the most recent OpenStack User Survey, 33.5% of OpenStack deployments are actively using the EC2 APIs.  I’m not certain why this has been casually referred to as “very few” in some articles.  It’s a third of all OpenStack deployments telling us that EC2 API compatibility is, in fact, important.  We can’t turn our back on a third of the OpenStack community!

**Understanding My Stance on Innovation**

My stance on OpenStack innovation is quite clear, and the responses suggested that most people understood what I was proposing. (Although, a recent response to my letter posted by a Rackspace spokesperson indicates that not everyone got my point.)

Through my [State of the Stack](http://www.slideshare.net/randybias/state-of-the-stack-april-2013) presentation, I've been one of the key advocates of OpenStack's innovation. In my original post I clearly said that Amazon and Google will win the *PUBLIC CLOUD* innovation game. Conversely, OpenStack will likely win the *PRIVATE CLOUD* innovation game.

This is a fair assessment, and my stance can only be misunderstood by public cloud companies who feel like OpenStack gives them a competitive advantage.

It does not.

How can I say this?  The closest analogy to bring clarity here is to look at OpenStack as Google's Android and AWS as Apple's iPhone that runs iOS. This analogy is incomplete, but it will suffice. Firstly, iOS and Android are at rough parity in terms of market share. There is data showing that the two solutions serve fairly different market segments. Neither is good nor bad and neither is a “winner” over the other; each simply solves different problems.

Secondly, iOS and Android are fundamentally different approaches, where iOS is constrained to run in a very specific environment (tightly controlled hardware) and where Android is designed to run on anything from TVs to phones to tablets made by a wide variety of vendors (an “open” platform). It's so "open" that someone like Amazon can fork it for their Kindle Fire and run off and do their own Apple tablet competitor.

Does this sound familiar?

It should, because OpenStack is the open platform in this analogy. OpenStack is to Android as AWS is to iPhone. Not Android to iOS. Not Google Nexus to iPhone. Android to iPhone. Open software to tightly integrated hardware+software system. AWS and OpenStack don't have competing innovation tracks. They have largely orthogonal innovation tracks with some overlap. AWS is a tightly integrated system and OpenStack is open source software that can be used to build a similar system or something else quite different. Your choice.

Rackspace Cloud Servers can try and compete with the AWS innovation curve, but OpenStack is, thankfully, able to compete on its own terms against direct competitors. This allows it to do things like support AWS compatibility AND drive its own private cloud software innovations.

**What Cloudscaling is Doing About the AWS APIs in OpenStack**

I received some fair criticisms with regards to working on the AWS EC2 API in OpenStack. We are a small startup, so resources are always stretched between community and product development. Since the EC2 APIs mostly “just work” in OpenStack we haven’t needed to do much work on them so far; however, this is beginning to change as we catch up on our roadmap. I thought I should detail what we’re doing regarding the AWS APIs in OpenStack.

Today we are working with Juniper closely on adding the [subset of VPC calls](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-CreateVpc.html) to the EC2 API (won’t make Havana, but should be out in time for consideration for the ‘I’ release).

Since last week, we have begun working with others in the community to plan and sponsor two events: a hack-a-thon for adding AWS compatibility testing to the Tempest tests and an AWS Compatibility Forum.

We are also responding to customer requests for certain newer EC2 API features such as [tagging](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html), which we will investigate, prioritize, and create a blueprint for once we have a plan.

**Next Steps: Hack-a-thon for Compatibility Testing and AWS Compatibility Forum** 

Some time in September (date TBA), several OpenStack community members will host a hack-a-thon for adding AWS EC2 and hopefully S3 API testing to the Tempest tests. This will make certain that these tests are run as a standard part of all CI (continuous integration) testing in OpenStack. As soon as the date is set, we’ll announce and post a link to a page for content, registration and more info.

Beyond the hack-a-thon, I’ve talked to several members of the OpenStack community about hosting an AWS Compatibility Forum in conjunction with the spring Summit (it’ll be in Atlanta or Chicago, TBA). This co-hosted event would be an opportunity for those interested in AWS compatibility to gather within the context of a larger community gathering and discuss what needs to be done and priorities. The fruits of this gathering can then be shared with the relevant technical committees. If you’re interested in participating, let me know.

**In Summary**

I am very much looking forward to making OpenStack as compatible as possible with Amazon. This is our focus area. Others in the OpenStack community are focusing elsewhere and that’s really where the true power of OpenStack lies. It’s a cloud OS kernel that can be used to build many different kinds of solutions.

Best,

\--Randy

## Comments

**[VirtualizedGeek](#3937 "2013-08-07 16:48:00"):** Randy, this is really well written. I'm looking at this thing from the outside in. I'm wondering why there is such resistance to AWS compatibility. To me it's like say OpenStack shouldn't support vSphere environments because the community doesn't want VMware to hijack the project. Isn't the point of these projects to give the user more control over their solutions even if it includes doing things it wasn't initially designed to do?

**[randybias](#3938 "2013-08-07 16:52:00"):** Yes. That's right. I think that is where some, but not all or even most, of the community has lost perspective. We all want OpenStack to win and be ubiquitous and robust. Thanks for your comment. Best, \--Randy

