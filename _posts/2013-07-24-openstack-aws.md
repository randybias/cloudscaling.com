---
title: "OpenStack's Future Depends on Embracing Amazon. Now."
link: http://cloudscaling.com/blog/cloud-computing/openstack-aws/
author: randybias
description: 
post_id: 6503
created: 2013/07/24 07:29:02
created_gmt: 2013/07/24 14:29:02
comment_status: open
post_name: openstack-aws
status: publish
post_type: post
layout: post
---

# OpenStack's Future Depends on Embracing Amazon. Now.

## **An Open Letter to the OpenStack Community:**

## **Our Future Depends on Embracing Amazon**

 <**UPDATE**: Please see [the follow up response](/blog/company/looking-in-the-mirror-a-response-to-my-open-letter/) to this letter .>

Dear Stackers, 

For three years, elements of the OpenStack community have arbitrarily and unfairly positioned OpenStack against incumbents, especially Amazon Web Services (AWS) and VMware (VMW). The practical expression of this view is that OpenStack should build and maintain its own set of differentiated APIs.

I’ve made no secret of my belief that this choice will harm OpenStack, and perhaps already has. Now, the issue has become urgent, and I hope to convince you to join me in advocating that OpenStack immediately and deliberately embrace the APIs and features of established public clouds. Doing so is critical to the success of a project that we all have labored to build. More importantly, doing so is precisely aligned with the [OpenStack mission](https://wiki.openstack.org/wiki/Main_Page).

To convince you, I will first explain the history that brought us to a differentiated API set. Then, we’ll look at why AWS and GCE domination of the public cloud is inevitable. I will debunk the fear, uncertainty and doubt surrounding legal issues of copying APIs, and finally, we’ll directly take on the nonsense about controlling of the “innovation curve” in cloud computing.

**How We Got Here**

When OpenStack launched in the summer of  2010 there were no “native” APIs in one of the two components. Nova initially provided only the EC2 APIs. This part of the project, contributed by NASA, was focused on recreating a private cloud system compatible with EC2. The Rackspace APIs were added after the EC2 APIs and just ahead of the 2010 summer launch of the OpenStack project.(1)

Quoting the original [README](https://github.com/xtoddx/nova/blob/master/README.rst) from the Nova project:

> You have come across a cloud computing fabric controller. It has identified itself as "Nova." It is apparent that it maintains compatibility with the popular Amazon EC2 and S3 APIs.

Notice the lack of any  mention of “native APIs” in the Nova project description and compare it to today’s Nova [README](https://github.com/openstack/nova/blob/master/README.rst).

Swift (the other half of the project), used its own native APIs, which were created by Rackspace as part of their Cloud Files service, the origin of Swift’s code.

More concisely, OpenStack originated with “native” APIs, where one half was AWS compatible (Nova) and one half was Rackspace public cloud compatible (Swift).

Then, [Rackspace acquired ANSO Labs](http://allthingsd.com/20110209/exclusive-rackspace-to-acquire-anso-labs/) and it effectively “owned” the other half of OpenStack code contributors. More importantly, most of the project team leads (PTLs) who would make decisions about the overall technical direction of the project were now employees of Rackspace.

Around the time that ANSO Labs was acquired, the Rackspace API was [renamed](https://github.com/openstack/nova/commit/1e403e56dc1147ce3feea1b8931948bc35f23a44) to “nova-api” and this is what is now referred to as the “native API” of Nova.(2) This API is largely identical to the Rackspace Cloud Servers public cloud service API. It still is mostly this API today, deeply influencing the nomenclature of the project (e.g. “floating IPs” vs. “elastic IPs”) and to some degree the direction of Nova.

There is nothing “native” about the Nova API. In fact, calling the Rackspace Cloud Servers API the “native API” promulgates the notion that there is an OpenStack Nova API that is separate from Amazon’s. It’s now obvious that the original native API for OpenStack was in fact its AWS EC2 API.

***We* Control OpenStack**

The governance of OpenStack has matured since 2010 when the decisions described above were made. The [OpenStack Foundation](http://www.openstack.org), an independent organization, now guides the strategic and business aspects of OpenStack, while its developer base runs the project as a technical meritocracy.

In short, the community controls the direction of the project, and it’s time we advocate a public cloud compatibility strategy that is in all our best interests, not just those of a single, albeit substantial, contributor. Failing to make this change in strategy could ultimately lead to the project’s irrelevance and death.

**Amazon Dominates Public Cloud**

It is clear that AWS (and quite likely GCE) will utterly dominate the public cloud race. But more importantly, who cares? Dominance by AWS and GCE does not mean that OpenStack fails. In fact, OpenStack is clearly [on a trajectory to “win” the private cloud race](http://www.slideshare.net/randybias/state-of-the-stack-april-2013), and a rapid embracing of Amazon will put OpenStack in the pole position to dominate hybrid cloud.

At Cloud Connect in February of 2011, I gave a [keynote](http://vimeo.com/21372341) outlining the “[two cloud story](/elastic-cloud/)” with numbers on the size and growth of AWS and Rackspace Cloud Servers. At that time, I believed Rackspace had a shot at success in the public cloud space because their annual growth rate put them in a dead heat with AWS: ~100% for AWS and ~90% for Rackspace.

But in the 2.5 years since then, much has changed. AWS’s growth has continued unabated, and GCE entered the race in earnest. Rackspace, meanwhile, faces declining growth velocity. If Rackspace earnings for Q2-Q4 of this year match Q1, they will have declined from that high of ~90% annual growth for their public cloud down to ~30% annual growth, a staggering decline in the past few years. See the following chart, which assumes that quarter over quarter growth in 2013 stays constant.

  
![rackspace-yearly-growth-numbers \(2\)](http://www.cloudscaling.com/wp-content/uploads/2013/07/rackspace-yearly-growth-numbers-2-1024x619.jpg)

There is no public information about GCE’s growth, but I believe it to be on par with AWS. This is based partly upon learning that the level of interest in their service was so high that their wait list queue was longer than the customer list of most other public clouds actually in production. And that was while they were still in private beta.

Why bring up Rackspace public cloud’s sudden decline? Simply to illustrate that the available information shows that AWS and quite possibly GCE are the leading public cloud services and present an obvious alignment choice for the OpenStack community.(3)

**Amazon Controls the Innovation Curve in Public Cloud**

In 2010, some argued that standardizing on the Rackspace public cloud APIs would allow OpenStack to control the innovation curve instead of Amazon. Since then, Amazon has continued to push new features into production at a breathtaking pace. They are, quite simply, in control of the innovation curve in public cloud. Every public cloud feature added by an AWS competitor is measured directly against what AWS has already built.

OpenStack can be in control of the innovation curve in private and hybrid cloud, but doing so requires that we support the services that are leading the innovation curve in public cloud. For OpenStack to dominate innovation in private and hybrid, it must embrace the public clouds to which enterprises want to federate.

**OpenStack Can Dominate the Hybrid Cloud Future**

While [I once panned the term](/blog/cloud-computing/hybrid-clouds-are-half-baked/), I have long believed that private and public clouds needed to look similar and connect if we’re to have massive cloud adoption. We are now seeing enterprise customers demand a hybrid cloud solution: a private cloud connected to a public cloud so they can run workloads in both places and generally have choice and control that drive positive economics and business agility.

What is perhaps at contention is the idea that a set of public clouds based on OpenStack will arise to serve one half of this equation. The likelihood of such public clouds seems low to miniscule at this point. AWS and GCE already have position, global reach, rapid feature iteration and growth rates that establish their leadership. What can stop them? Frankly, there are no contenders on the radar. 

In a world where AWS and GCE dominate the public cloud market, private clouds that wish to provide a hybrid option must embrace these leaders.

All this leads to an inevitable conclusion: OpenStack’s future is predicated on driving hybrid cloud compatibility with the major public clouds, and those are AWS and perhaps GCE. If others arise, we should debate and evaluate embracing them only when their market position is established.

**Fear of Legal Action is Ungrounded**

Because of the [Oracle vs. Google ruling](http://en.wikipedia.org/wiki/Oracle_v._Google) on the Java Virtual Machine vs. Davlik Virtual Machine, it’s likely impossible to protect a set of public APIs in court. 

Fear, uncertainty, and doubt on public cloud API protectability is complete foolishness. There is no legal basis for stopping the OpenStack community from copying the AWS and GCE APIs. Also keep in mind that Amazon’s APIs have already been copied. Their ability to succeed in a new legal action would therefore be compromised by the fact that they’ve not fought copying in the past.

**The *Entire* OpenStack Community Wins**

Embracing Amazon serves the interests of all community members by positioning OpenStack as the best choice for enterprises and SaaS providers that want an ecosystem approach to public cloud, one in which their applications can move to the infrastructure best suited to the job at that time.

Put differently: if OpenStack-based public clouds embrace the major public cloud APIs, they put themselves in a position to benefit from the AWS ecosystem, allowing them to carve at pieces of the pie. Similarly hosting companies have the opportunity to sell hosted private clouds that are public cloud compatible to solve the the hybrid cloud problem for enterprises. In fact, this is probably the strategy that Rackspace should have been pursuing.

It is for this reason that Rackspace is also a winner under my proposal. They are in a unique position to deploy private hosted OpenStack hybrid clouds that are compatible with whatever public cloud the customer wants.

**The Time is Now: Embrace Amazon and the AWS APIs**

The time has come for the OpenStack community to choose a public cloud compatibility strategy that will position the project for dominance in the private and hybrid cloud markets.

Time is of the essence. AWS is already dabbling with providing private AWS regions for the government (AWS GovCloud) and even specific agencies (CIA/NSA). It is reasonable to conclude that they might expand this program, threatening to dull OpenStack’s present opportunity. 

**My proposal is as follows:**

****1. Embrace major public cloud APIs

GCE, AWS, Azure, and possibly vCloud

2\. Rename the Nova API to the Rackspace Cloud Servers API

3\. Create a new low level API(4) and move to the bridged API model

4\. Expand testing and the work around [refstack](http://www.openstack.org/summit/portland-2013/session-videos/presentation/heat-refstack-a-reference-implementation-of-openstack)

Refstack should focus on public cloud interoperability & hybrid cloud

5\. Embrace existing AWS interoperability testing frameworks

The Cloudscaling aws-compat and the Eucalyptus eutester library are examples

 

Amazon and Google are our friends because they are spreading awareness and adoption of cloud computing. They are “making the pie bigger” for us all. Together, they are creating a rich and vibrant public cloud ecosystem, and OpenStack and can connect to it with a rich and vibrant  private cloud ecosystem. I want OpenStack to be the dominant hybrid cloud solution. Please help me make this a reality.

Sincerely,

Randy Bias

 

(1) For those interested, here is the [original check-in](https://github.com/openstack/nova/commit/d6c78d600091f476e360371df033be7eda1b749b) of the Rackspace (nee “Nova”) API by Todd Wiley of ANSO Labs at the time.  Note that the files are “rsapi” and “rackspace.py” NOT Nova.

(2) It looks like the rename happened 8/17/2010, so post-launch and pre-ANSO acquisition, which was February 2011.  All of the references to a Rackspace API were finally [removed](https://github.com/openstack/nova/commit/7a95f73ad7b295ddd2313152973c6da2c78fac76) in September 23rd, 2011.

(3) The last estimates were that AWS Elastic Compute Cloud (EC2) closed off 2012 with roughly 2B in revenue and 2M+ virtual servers, numbers that eclipse all other major clouds besides GCE, which should be considered the #2 public cloud already.

(4) A low level API without an opinion would have allowed for having multiple API “bridges” similar to how CloudStack has an EC2 API bridge to easily and cleanly support multiple higher level “opinionated” APIs with much less effort and with much higher levels of maintainability. Imagine Nova with the AWS, GCE, Rackspace Cloud Servers, and vCloud/vSphere APIs. That would have been straightforward using this kind of architecture. [OCCI](http://occi-wg.org/about/specification/) is a good example and a strong candidate.

## Comments

**[Geoff Arnold](#3892 "2013-07-24 08:45:00"):** I think this gets it exactly right. To complement this, we need a post (from Randy, or maybe over at http://speakingofclouds.com ) which spells out the implications for OpenStack in terms of architecture, functional constraints, and what constitutes the core of the project. See also Rob's timely series of blog pieces on OpenStack core and the dependency situation: http://robhirschfeld.com/2013/07/23/introducing-the-openstack-spider-graph-untangling-our-web-of-interdependencies/ This analysis would definitely be affected by a commitment to AWS API compatibility. UPDATE: Let's start with this: http://www.speakingofclouds.com/?p=327

**[Boris Renski](#3893 "2013-07-24 09:00:00"):** I'll play devil's advocate, as always... The question I have is this... how much value to the end user is there in being able to interact with OpenStack via an EC2 API? Nova lags behind EC2 on feature-function and is quite different inside. Because of that, today and in the near term OpenStack EC2 API will only expose a subset of functions that EC2 offers. So if you are used to EC2, Nova with EC2 API emulation over it is a questionable substitute. My gut feel is that the vast majority of those that started out on Amazon and adopted native EC2 APIs are unlikely to switch over or start using OpenStack... it almost seems to me that the value is rather in allowing one to access EC2 (and GCE and vCloud) via an OpenStack API and baking that into Nova rather than the other way around. What am I missing?

**[randybias](#3894 "2013-07-24 09:23:00"):** Boris, This isn't what we are seeing. Many of our customers want this compatibility and it has been key to buying decisions. With regards to the architectural gap in OpenStack, it's not very large. We did significant work on OCS to make it the most AWS compatible system out there. In fact, we would be happy to contribute some of this back. Cloudscaling could also publish a guide to configuring OpenStack for maximum AWS compatibility. OpenStack was originally designed as an AWS knockoff so it's not nearly as different as many think. And it's very configurability is what has allowed Open Cloud System to be configured to maximize AWS compatibility. \--randy

**[Sriram Subramanian](#3895 "2013-07-24 11:06:00"):** 1) +1 to Bori's comments 2) AWS APIs are a developer's nightmare and Amazon has shown no indications to fix it. By aligning with these, we are missing the only opportunity to standardize. 3) If someone counter argues that developers are not worried that AWS APIs are poorly designed, but only for the capabilities it provides, then why bother with embracing at all. Some end developer anyway is going to write code to enable hybrid cloud. There is no question of standardization or embracing at all then.

**[Bradley777](#3896 "2013-07-24 11:29:00"):** Hi Randy, I have a hard time believing AWS would build a private region for anyone who wants one -- that will probably only be available to those will really deep pockets. So what beyond that happens if OpenStack does not use the AWS API? Does AWS penetrate the private/hybrid cloud with Eucalyptus? Thanks, Brad

**[randybias](#3897 "2013-07-24 11:30:00"):** 1) See my comments on Boris note 2a) Bad or poor APIs win all the time, bad technology wins all of the time; only market adoption really matters 2b) It's not about standardized APIs; it's about a standardized reference architecture or architectures and OpenStack is miles away from this, if it's even possible 2c) One standardized reference architecture for OpenStack could be about AWS compatibility; what possible downside is there? None. 3) Because AWS is going to be north of 10M VMs under management in another few years? I think it's short sighted to assume that end developers are going to write some kind of magical code that enables hybrid clouds. That isn't the problem. The problem is that the two connected clouds have to look somewhat like each other. It's like saying you are going to wire together IPX and TCP/IP into a united global network. The closest we got were the crappy Novell gateways and IPX eventually lost. OpenStack could be the next IPX if we aren't careful. There is no credible reason for not embracing Amazon and the AWS APIs. Asserting that the APIs are "poor" is a developer argument, which has nothing to do with market forces and dynamics. The best technology or APIs *rarely* win. It's a miracle when that happens. You shouldn't bet on miracles. Pragmatism over ideology, please.

**[Sriram Subramanian](#3898 "2013-07-24 12:07:00"):** Randy, thanks for the replies - I agree with you on best technology rarely ever wins. But with rest of the comments, No. Blog post seem to talk about APIs, and comments are about standardized architecture. Your comments seem to mean that the interfaces can be different, but the connected clouds need to look the same. Asking to implement my private cloud like AWS is like having hammer as the solution for all my carpentry needs. I get that your customers need AWS compatibility. That doesn't mean all of them would want it or need it. In fact, most of them wouldn't want it. Credible reason for not embracing AWS is, it is not enterprise ready (not the usual FUD people have on 'cloud security' but about enterprise workloads). AWS Private Cloud/ regions is like VmWare's cloud strategy built on top of vSphere and other components.

**[randybias](#3899 "2013-07-24 12:14:00"):** Yes, it's not about APIs, it's about standardized architectures, which require the APIs: http://www.cloudscaling.com/blog/cloud-computing/missing-the-point-on-private-public-and-hybrid-cloud-apis/ And I think you missed the point. I'm not advocating that all OpenStack clouds mimic AWS. I'm advocating that the community stop treating AWS like the enemy and instead treat them like a partner, including making certain OpenStack can be as compatible as possible. OpenStack is very flexible. You can use it to build all kinds of clouds. One major flavor that needs attention is AWS compatible clouds. I'm sure there will be many other flavors. All of those can exist too. Again, this is NOT a zero sum game. It's not about AWS loses or OpenStack loses. It's not about OpenStack having to be like AWS or vCloud or anything else. It's about not pretending that there is a mythical reference architecture for OpenStack. There is none. There is not one common reference architecture for OpenStack anywhere. Which means that it's very flexibility should be used to support a number of different reference architectures of which AWS is a key one in order to support hybrid cloud deployments.

**[Sriram Subramanian](#3900 "2013-07-24 12:19:00"):** Oh OK. That explains! This comment clarifies your stand. I agree, thanks!

**[Frank Cohen](#3901 "2013-07-24 13:51:00"):** Good open-letter, Randy. I'm just not convinced that any API effort should try to adopt another API internally. And, besides, it's not a battle of APIs. The war here is waged on the infrastructure behind the APIs and the price policy of the vendors. I wish the debate included: 1) Using the Cloud infrastructure as a software app deployment mechanism, and 2) enabling apps that run on local and remote Cloud services (the "hybrid"). My company, Appvance (formerly PushToTest with TestMaker), intends to release its next software performance testing infrastructure using Eucalyptus tech. Our Ant build scripts output AMI and EMI files! Is there a reason not to adopt Eucalyptus in OpenStack? -Frank Cohen http://www.appvance.com

**[Justizin](#3902 "2013-07-24 14:41:00"):** Heya Frank! Eucalyptus is an EC2 workalike written in Java, while OpenStack is written in Python. One of Eucalyptus' early shortcomings was its' inability to handle accounting which is necessary for a public cloud provider and for many is necessary in private clouds, so that departments can be billed out of the IT budget. Companies using AWS to the greatest advantage have little choice but to marry its' API a bit, and there's no good reason for OpenStack to try to 'innovate' in such a manner that actually makes Rackspace's (unimpressive) API the de-facto. This is similar to a debate I've had with members of the GIMP team a number of times that adopting the same menu items and hotkeys as PhotoShop would be advantageous and is upheld by a court decision, but most professional designers I know have a reaction to GIMP that's something like, "It's wierd". Having it work like the system they're trying to move away from is the obvious answer to that. Noone sold an electric car by making it a substantially different experience to the type of cars people grew up being taught to drive.

**[Justizin](#3903 "2013-07-24 14:42:00"):** Here's one functional constraint: Rackspace doesn't have anything like availability zones.

**[randybias](#3904 "2013-07-24 14:59:00"):** No, but they may build AWS-in-a-box.

**[randybias](#3905 "2013-07-24 15:00:00"):** They are overlapping solutions. eucatools already works with OpenStack. OpenStack already supports both the EC2 APIs and the Rackspace APIs.

**[Frank Cohen](#3906 "2013-07-24 15:09:00"):** Thanks, Randy. So lets say I am an electronics retailer and I run my marketing campaign apps on a combination of internal (Grid/Datacenter) and external (Cloud) servers. Euca EMIs seem like a good deployment mechanism. Same true for OpenStack?

**[Frank Cohen](#3907 "2013-07-24 15:10:00"):** Thank you Justin. Great reply. Yeah, I want the gas pedal in the same location too. Think we'll ever get that far with the Cloud?

**[duyujie](#3908 "2013-07-24 15:35:00"):** Hi Randy, I have translate this articles into Chinese. Maybe there will be more discussion about OpenStack's future. http://duyujie.org/post/56367280481/openstack-amazon-openstack -Ben http://www.trystack.cn/

**[Dmitri Kalintsev](#3909 "2013-07-24 15:58:00"):** It is also worth remembering the Netflix OSS.

**[adrian cockcroft](#3910 "2013-07-24 16:39:00"):** I think OpenStack has been incredibly successful at solving the "Operations" problem of how to turn datacenters into clouds - automated hardware provisioning etc. The permutations and complexity of doing this across many vendors has sunk many previous attempts over the last decade. There is a lot of value and revenue in selling this solution to CIOs. The argument about APIs is about the "Developer" problem of how to turn clouds into applications. This is where OpenStack has fallen short and is the area where AWS has built a big ecosystem. Depending on how end user companies are setup, the CIO may be optimizing for developer productivity, or for low cost, or may not even have a seat at the table for the discussion of what technologies the developers use to deliver applications. My thoughts on this from almost two years ago still seem relevant: http://perfcap.blogspot.com/2011/08/i-come-to-use-clouds-not-to-build-them.html The release of NetflixOSS has made it easier for me to measure progress in this area. NetflixOSS is roughly based on the AWS 2009 era feature set, and so far Eucalyptus have shown that it's possible to implement this in a useful way. There is work going on in both the CloudStack and OpenStack communities to close the functionality and compatibility gaps, and other cloud vendors are also showing interest. You can look on NetflixOSS as a collection of things that Netflix found useful or wished that the cloud already did, that made us more productive at developing our applications. It can also be used as part of a compatibility test.

**[Robot](#3911 "2013-07-24 16:59:00"):** Can be argued that GovCloud and the yet-to-be-settled CIA Cloud are "private regions for" Someone who wants one (and can pay)

**[Ryan Lane](#3912 "2013-07-24 17:09:00"):** You mention the trajectory of private clouds and then propose a change that will very badly harm private clouds. I can't change AWS's API. I can't extend it. I can't even propose changes to it. From an evolutionary point of view, making AWS the primary API is an innovation dead end. We're stuck only implementing features that AWS has, in the way that AWS does it. We'll always trail AWS because it's actually impossible to surpass them. OpenStack *is* its APIs. Take that away and we're just another clone.

**[Josh](#3913 "2013-07-24 17:15:00"):** In discussions with colleagues, compatibility with AWS APIs is a significant factor. OpenStack having clear support for those APIs would make it a much more attractive option. Otherwise, we face "lock-in".

**[randybias](#3914 "2013-07-24 18:07:00"):** I don't think that is accurate. You are promulgating the zero sum game theory of OpenStack which is harmful. OpenStack can have its own APIs and support the AWS APIs as first order components. OpenStack will never win the public cloud race. It's not even close. Hybrid clouds are a reality today where customers are asking for real solutions. OpenStack artificially limits itself by saying no AWS APIs. What possible logical reason can there be for not supporting both or even more APIs? Also, sure it's chasing AWS but those APIs have been exceptionally stable. Actually much more stable than the OpenStack APIs. Stable APIs are good. How can OpenStack be a clone of AWS? It's like saying that the BSD kernel is a clone of RedHat Enterprise Linux or Ubuntu. AWS is a complete online service. OpenStack is software that can be used to build such a service. OpenStack will be used to build many kinds of clouds of which some will be AWS compatible. Some will be for other special purposes. This is OpenStack's strength and weakness. I think it's a huge mistake to believe OpenStack is some kind of monolithic complete solution with a standardized reference architecture. It's not even close. It's just a cloud OS kernel not the cloud OS itself.

**[Ryan Lane](#3915 "2013-07-24 18:33:00"):** I support embracing other major cloud APIs, assuming they are properly maintained and their inclusion doesn't limit OpenStack's behavior. The approach you suggest, however, supports those non-native APIs at the expense of the native one. I'm unsure why you recommend the renaming of Nova's API to a vendor specific name, as it's used by a number of different organizations and it's community maintained. I also don't see why this focuses on Nova. OpenStack is a set of components, and any AWS bridge really needs to sit outside of all of them. It would make more sense to have an API bridge service that talks to the various OpenStack components using their native API (which would be your low-level API). Then we could completely rip out any non-native APIs from projects, to reduce their complexity. In that scenario, if you only ever want native APIs, you'd just not install the API bridge service.

**[randybias](#3916 "2013-07-24 18:39:00"):** The Nova API is a direct copy of the Rackspace Cloud Servers APIs with all of the good and bad that implies. It is not a "native" API. It was adopted in the same way as the EC2 APIs were adopted. It's selection was deliberate on the part of Rackspace because it served their corporate interests. Given that the EC2 APIs existed in Nova first it would have been just as easy to fork those and move forward with an OpenStack derivative of the EC2 APIs. Nova has no native API. if it had one it would be something smarter than what exists. The Rackspace Cloud Servers API is decent but has its own baggage. We swapped one opinion (EC2) for another opinion and what we should have done was sit down and figure out what Nova and its user community actually needed instead of using the RAX opinion which is ONLY in Rackspace's interests.

**[Lydia Leong](#3917 "2013-07-24 18:40:00"):** And arguably there's a reasonably-sized constellation of organizations that can consume enough compute resources to warrant a private region, especially if it's stripped-down in feature set (for instance, having only reduced-redundancy S3).Or consortiums of community clouds.

**[Ryan Lane](#3918 "2013-07-24 18:52:00"):** Take a proprietary API and fork it? That would just confuse things. We'd have an API that is incompatible with EC2, but confusingly looks a lot like it, then we'd need to create a bridge for proper EC2 support. Rackspace gave their API away. The fact that they designed it doesn't really give them any advantage now since they don't control the future of it. If you dislike the Nova API, you should participate in the process for designing new versions of it. The beauty of having our own API is that we can iteratively improve it.

**[Ryan Lane](#3919 "2013-07-24 18:59:00"):** Follow up: Another strong incentive to having an API bridge service is that it could be used both ways. You could have drivers that take native OpenStack calls and post them to AWS/Google/Etc.. That would be an effective mechanism for Hybrid clouds for customers that prefer the OpenStack APIs.

**[randybias](#3920 "2013-07-24 19:05:00"):** It's not about disliking the Nova API. It's interesting how much you continue to deliberately misunderstand me. This is about OpenStack end users having choice. Hybrid clouds are important. Compatibility with major public clouds is critical to that end. The Rackspace Cloud Servers API does not help with this. The AWS APIs are critical to OpenStack's future because consumers of OpenStack clouds want them to facilitate migration on/off AWS and running hybrid clouds. Period.

**[Ryan Lane](#3921 "2013-07-24 19:30:00"):** I'm not misunderstanding you. Being compatible with other cloud services is an admirable goal, and one that would be great to support, if there's organizations that are willing to support these implementations. You seem to be suggesting CloudScaling is willing to maintain the AWS compatibility and that's great! My point, though, is that your suggested approach doesn't properly address the issue. There's no single component that covers all AWS API calls. Service groups, floating IPs, etc. are handled by Nuetron. Compute services by Nova. Block services by Cinder. Heat provides autoscaling and orchestration. Etc. etc.. That's why I was saying that limiting this to Nova makes no sense. It makes a lot more sense to remove any non-native API from many of the OpenStack services (to simplify them) and to have a translator service that sits on the outside. It lets OpenStack keep control of the APIs while still allowing a compatibility layer for a number of other APIs.

**[Ryan Lane](#3922 "2013-07-24 19:43:00"):** Are your customers filling out the user survey[1]? Can you please encourage them to do so? All the information they provide is private unless they mark them as public. Only aggregate statistics are given. Our survey statistics[2] show that the compatibility APIs are not strongly represented in deployments (~30% EC2, %25 S3). It would be great to get better statistics on this. [1]: https://www.openstack.org/user-survey [2]: http://www.openstack.org/summit/portland-2013/session-videos/presentation/openstack-user-committee-update-and-survey-results

**[Cloud Guy](#3923 "2013-07-24 21:16:00"):** Great post. No point trying to fight the unstoppable force. Instead, figure out the best way to leverage their strengths in a complementary manner, and dominate areas (hybrid cloud) that AWS chooses not to play in

**[Jeremy Jarvis](#3924 "2013-07-25 03:04:00"):** Anyone writing code to interact directly with APIs of popular clouds is probably doing something wrong (and certainly wasting effort). There are a number of cloud abstraction libraries which are doing a great job in providing a unified interface to multiple clouds. Fog (Ruby) is a great example - sponsored by Heroku no less - of how a community/ecosystem is developing around multi-cloud interaction. Heck, we even use Fog in our own CLI to interact with our own API!

**[Nati Shalom](#3925 "2013-07-25 05:03:00"):** Randy to Boris point above if there are missing features in the current NOVA API wouldn't it be simpler to fill in the gaps under the current (Rackspace driven) implementation and use that as the Native API and add the API gateway ontop of that? Also in your suggestion do you suggest that the "Native API" would be underlying substrate that support ALL the aggregated features of all the supported API's?

**[Bob Wise](#3927 "2013-07-29 16:10:00"):** A reason not to adopt Eucalyptus in Openstack is highly incompatible open source licensing. Openstack is Apache. Eucalyptus is GNU V3. This is a non-trivial issue.

**[randybias](#3928 "2013-07-29 17:11:00"):** I don't actually disagree with any of this. In fact, in some ways it's what I'm advocating. The difference is that you think that the current Rackspace (Nova) API is "native". I do not. This API is just as limiting as the EC2 API, just in different ways. For example, I was talking to some Foundation folks with more direct experience with the Rackspace API than me. They felt that the password reset functionality did not make a lot of sense. What if the community wanted to remove this functionality and the Rackspace public cloud is dependent on it? What if they had to re-factor to push this into extensions. The Nova API should be something other than it is. It should be owned and driven by what the community wants to add as features. It should have little or no opinion such that it can provide a great way for us to add more and more features over time. I think we all agree on this. Where we don't agree is that I simply think that the current Rackspace (Nova) API does not belong as that abstraction layer. I mean, just look at how much networking control still runs through the Nova API vs. Neutron. My suggested approach is a common low level API and then a series of bridged APIs that talk to it. It sounds like we're in alignment on that already.

**[Ryan Lane](#3929 "2013-07-29 17:36:00"):** Indeed. This is of course why the APIs are versioned. It's possible to modify the Nova API as much as the community desires in the next API version and Rackspace can continue to use the older version until they have time to move to the new one. Rewriting from scratch is almost always a bad idea[1]. We already have the code written, let's just incrementally improve it via API versions. [1]: http://www.joelonsoftware.com/articles/fog0000000069.html

**[randybias](#3930 "2013-07-29 17:56:00"):** We're just going to have to agree to disagree. I don't believe this is the right approach. I've read Joel's piece before. The only absolute is that there are no absolutes. Put more simply, none of the EC2, Rackspace (Nova), or GCE API code is rocket science. It's very simple and the line count is relatively small. Re-factoring out into a simple low level API would be low effort, high value. All of the existing APIs would map more cleanly to a lower level API with less of an "opinion" rather than the Rackspace API. New APIs could be added more trivially (e.g. Azure and vCloud Director) if they talked to a lower level API. It's not really a re-write anyway, it's just moving the Rackspace (Nova) API up a layer and adding a clean low level abstraction. This is done all the time in software development. The Rackspace API is not designed as an abstraction layer.

**[Ryan Lane](#3931 "2013-07-29 19:51:00"):** Right. I get your point. Makes sense.

**[G. Simonson](#3932 "2013-07-30 13:42:00"):** Randy, commenting on "...the idea that a set of public clouds based on OpenStack will arise to serve one half of this equation. The likelihood of such public clouds seems low to miniscule at this point" - HP Public Cloud is based on Openstack, right? If so, then we have at least one case of above. Agree, being only one and so fresh is not enough, but still.

**[randybias](#3933 "2013-07-30 17:08:00"):** It would have been more accurate for me to say "successful public clouds based on OpenStack." I apologize for that. I may update the blog posting. HP Cloud is minuscule compared to even Google Compute Engine, which in turn, is dwarfed by AWS. I believe AWS is north of 200K servers, but some folks estimate AWS is closer to 500K. HP Cloud is a few thousand. It's really an altogether different scale and the chances of HP Cloud catching up seem remote. How exactly do you catch up to something like AWS at 200K servers when they are still growing ~100% year over year? At 5,000 servers you would have to growing at more like 500% year over year to catch up in 2 years. That seems improbable, but I'll give HP Cloud full props if they make that happen.

**[Dan Farfan](#3934 "2013-07-31 10:11:00"):** There's a lot right in Randy's analysis, conclusion and call to action, imo. But what there isn't is a lot of science. And that's what the cloud folks, in all their incarnations (even the ones making money) seem to have forgotten, the science. I realize this may be uncomfortable for some people, but.. Not all tech is science. Not all software is computer science. I'm not blaming anyone. After all, today's thought leaders are the same folks who were tricked into believing extortion is okay if it's in a licensing agreement (and no one goes to jail), that GUI and OS are synonyms, that an OS is a revolution because its authors weren't paid (and the price tag is 0) and that it's okay for programmers to hardcode decisions into software (because they always have). The good news is, help is on the way. How can I be so sure? Throughout history, when science doesn't lead, it catches up. Always has and always will. :-) In fact, I feel so confident that help is on the way that I predict we will witness a truly rare phenomenon in the next year or two - a 2.0 of a thing will wipe out the 1.0 of a thing (and its head-in-the-sand advocates) before it ever really fully takes hold. @DanFarfan

**[Adrian Otto](#3935 "2013-08-03 10:03:00"):** This issue is covered well in the following video: http://www.rackspace.com/blog/lew-moorman-at-structure-beware-lock-in-embrace-open-cloud-video/

**[Adrian Otto](#3936 "2013-08-03 10:09:00"):** Why are you having this fringe discussion rather than just submitting a pull request? If the line count is low, and this is all simple, then contribute it.

