---
author: Randy Bias
comments: true
date: 2012-02-17 01:07:55+00:00
layout: post
slug: open-cloud-confusion
title: Open, Cloud, Confusion
wordpress_id: 3575
old_categories:
- Cloud Computing
---

This weeks’ re-launch of Cloudscaling was amazing. It was all we could have expected and more. My only regret was not being able to walk the halls at Cloud Connect as much as I would have liked, but I think I made up for that during our reception, which was a blowout. A weeks’ worth of hallway conversations in only 3-hours time.

That being said, no launch goes flawlessly. We had some misfires early on and some controversy right after the new website launch. I have a well deserved reputation for being controversial in the cloudosphere so it would probably be a very disappointing launch if I didn’t cause at least a *little* stir. :)

I thought it made sense to address some of these questions and concerns, while also owning up to any of the criticisms I felt were warranted.

**Open + Cloud**
We took a little [heat](http://www.rationalsurvivability.com/blog/?p=3429) from Chris Hoff, a friend a fellow ‘clouderati’, about so-called ‘[openwashing](https://twitter.com/#!/Beaker/status/170177546955141122).’ I think some of Chris’ criticisms are fair[1], but mostly I think his concerns highlight a failure to communicate on our part. This is the great thing about public forums and market feedback. It makes you a better company and frankly those that are sincere and authentic can thrive in that environment. I believe that’s Cloudscaling and so I would like to explain briefly the disconnect.

Chris’ argument boils down to a perceived overloading of ‘open’ as meaning ‘scalable’, such that my litmus tests for ‘open cloud’ are bogus. Except, we aren’t claiming that open is scalable. We’re claiming that ‘open cloud’ is scalable. It’s not open applied to cloud. It’s open AND cloud, where by cloud we mean scalable infrastructure a la AWS.

As long time readers know, I’ve always been uncomfortable with the term ‘enterprise cloud’. Two years ago I was [crystal clear about my thinking](http://www.cloudscaling.com/blog/cloud-computing/debunking-the-no-such-thing-as-a-private-cloud-myth/) and haven’t changed my position since. The basic gist is this: so-called ‘enterprise clouds’ aren’t really clouds, they are virtualization 2.0 cloudwashed til it glows. At Cloud Connect 2011 (last year), my keynote reiterated that [enterprise clouds are a myth](http://www.slideshare.net/randybias/enterprise-cloud-myths).

Hey, give me points for consistency!

Here’s the problem: everyone with an ‘enterprise cloud’ believes it’s a cloud and their vendors tell them it’s a cloud[2]. It’s hard to throw this term away as much as I would like to, but in this case I need to use the term everyone else does in order to get my point across. In this way it reminds me of the co-opting of ‘hacker’ in the general populace. All of the old skool UNIX folks were unhappy with it, trying to push ‘cracker’ instead, but generally failed. ‘Hacker’ is now synonymous with [black hat](http://en.wikipedia.org/wiki/Hacker_(computer_security))[3] types. Enterprise clouds will ultimately be synonymous with virtualization 2.0, not clouds in the long run.

So, here’s where we failed. We didn’t make it clear that we are talking about open (freely available, no-vendor-lock-in, preferably open-licensed) PLUS cloud (elastic, scalable, secure, robust). This is our fault. The challenge being, of course, it’s difficult to have any kind of nuanced discussion while creating bite-sized marketing that is easily consumed and tastes great.

No problem. We’ll work on making that part more clear, but hopefully you can see that there is no disconnect between what we’ve said all along, how we are positioning, our marketing message, or are choice to push for a greater understanding of what open clouds are.

**Open or Open First as a Strategy**
For some, our announcement is seen as a way to justify their early positioning. That’s fine. We think that many people can build open clouds and open cloud products. It’s an umbrella we welcome others to be a part of, even non-OpenStack vendors and solutions companies.

For others, it’s easy to see Cloudscaling ‘jumping on the open bandwagon’. It’s really not for me to say if we are ‘openwashing’ and I’m not going to claim to have been ‘open first’ (does it really matter??). The marketplace will determine that and folks will get their pound of flesh as they see fit. From where I am standing we have been consistent and true.

We are committed to open-ness, open source and open projects. Both my credentials and Cloudscaling’s predate our announcement by a long time. Here’s a taste:



	
  * I [open-licensed the GoGrid API](http://www.prweb.com/releases/GoGrid/OpenSpec/prweb1889224.htm) in January 2009

	
  * We were part of the original OpenStack launch in 2010 and I [wrote](http://www.cloudscaling.com/blog/cloud-computing/does-openstack-change-the-cloud-game/) about it shortly after

	
  * Cloudscaling stood up the[ first OpenStack Storage (Swift) production public system](http://gigaom.com/cloud/openstack-based-storage-cloud-launches-iaas-next/) outside of Rackspace in January 2011 mostly on relatively open hardware and open networking gear [4]

	
  * Our new VPE, hired fall of 2010, ran [OpenSolaris](http://www.cloudscaling.com/blog/author/williamfranklin/) development for years; that's not an accident


More importantly, we see being open as a legitimate business strategy. Perhaps Dave Asprey’s [analysis](http://cloudsecurity.trendmicro.com/cloudscalings-litmus-test-enterprise-cloud-vs-open-cloud/) at the TrendMicro cloudsecurity blog sums it up best. We are pushing open cloud because we think it matters AND we’re open because we think it’s the right business move.

**Understanding Production Open Clouds**
****Cloudscaling’s engineering and architecture teams includes myself, key back-end engineers from GoGrid and other large scale systems (e.g. eBay). We also lean heavily on [Chris Brown](http://www.cloudscaling.com/advisoryboard/) (the original lead developer for Amazon’s EC2) and Ben Black (one of the core AMZN/AWS network architects) who are both on our technical advisory board. Cloudscalers know a few things about building production-grade cloud services.

All of the above is public information. The following is internal Cloudscaling lore that you’ll have to take my word on.

In early 2009 my engineering team lobbied hard to build our own IaaS software stack, just like OpenStack. They had the experience and DNA to do this. It would be go number 3 or 4 for some of them. The problem was that there was a long list of commercial and open source entities out there already with IaaS stacks. We were a young business and I didn’t want to be IaaS stack #26. The other major problem is that we knew what it takes to build a production cloud service and allocating a VM to a hypervisor was the trivial part. The much harder problems are in operations and ongoing management and still under appreciated area.

So, I resisted and believe me, people were unhappy. Worse yet, I asked them to use one of the existing commercial stacks, now open source, that was poorly architected Java and just about had a revolt.

When I found out about OpenStack in mid-2010, I was relieved. This was what we needed. An open source project with real momentum creating a greater community we could be a part of. I didn’t want to own the creation of the IaaS stack, I just wanted to participate and make someone else’s stack better. That was when the first parts of our generally open strategy started to form. That was also when we knew our future course was software + services. It didn’t hurt that Cloudscaling had a bunch of Pythonistas and that OpenStack was built around Python.  We also felt that the core Nova and Swift architectures were sound.

**Summing It Up**
We don’t claim to be the most open company out there. Openness is a spectrum and we want to be as open as possible. Other than what we are doing already (see below), we will continue to learn and evolve. We plan to monetize our business outside of the core open components of [OCS](http://www.cloudscaling.com/solution/). We are going to give back network architecture blueprints and documentation, hardware blueprints, open source software, and a raft of other ‘trade secrets’ we have kept close for a long time. I want everyone to build awesome open and scalable clouds. I expect that Cloudscaling will be one of the best and we’re fine competing with the other great teams out there.

The truth however is that we have been interested and committed to open for a long time because our approach is a full-stack approach and we can’t build it all. The only way to succeed is to leverage what exists, which is other open projects. What we plan to monetize is outside of the core open components so there is no conflict. We aren’t open to be cool. We’re open because we care, we want to make great products, and we want to compete effectively against folks in the marketplace. Just like everyone else.

So, feel free to criticize, and we welcome the feedback, but I prefer you do it in context.  Disagree with my definition of cloud if you like.  Meanwhile, we'll get to work fixing some of our marketing content.

No harm, no foul.



* * *



[1] They also deserve to be addressed en masse; however, for this article, I’m choosing to stay focused on the core issue: “open”
[2] Not only this, but honestly, I’ll probably just as criticised for walking around slinging the ‘truth’ in our marketing material that enterprise clouds aren’t ‘true cloud’; damned if you do and damned if you don’t.
[3] Sorry, I still can’t bring myself to use the term ‘hacker’ since it’s been co-opted and even the Wikipedia page is a travesty in that it’s taken on the popular term. C’est la vie.
[4] Amongst a number of others notable production OpenStack deployments, both storage and compute, some of which I can’t talk about unfortunately, but the Intertubes will mostly tell you if you search for it.
