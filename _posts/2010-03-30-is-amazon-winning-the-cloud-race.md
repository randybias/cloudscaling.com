---
title: 'Is Amazon Winning the Cloud Race?'
link: http://cloudscaling.com/blog/cloud-computing/is-amazon-winning-the-cloud-race/
author: randybias
description: 
post_id: 966
created: 2010/03/30 08:00:31
created_gmt: 2010/03/30 15:00:31
comment_status: open
post_name: is-amazon-winning-the-cloud-race
status: publish
post_type: post
layout: post
---

# Is Amazon Winning the Cloud Race?

From our perspective, it looks like Amazon is winning the cloud race.   Amazon and Google pioneered the notion of '[devops](http://blogs.the451group.com/opensource/2010/03/03/devops-mixing-dev-ops-agile-cloud-open-source-and-business/)', where agile practices are applied to [merging the disciplines of development and operations](http://somic.org/2010/03/02/the-rise-of-devops/).  Devops teams are inherent to cloud computing.  They are the only way to scale and compete. For example, in my conversations with Amazon it's been explained how their operations team is really only two parts: 

  1. Infrastructure Engineering: software development for automating hardware/software and building horizontal service layers
  2. Datacenter Operations: rack & stack and replace broken hardware
There isn't a team that manually configures software or hardware as in traditional operations teams or enterprise IT. ** This is by design**.  It's the only way to effectively scale up to running thousands of servers per operator. More importantly, by automating everything, you  become fast and agile, able to build an ecosystem of cloud services more rapidly than your competitors. With the possible exception of Rackspace Cloud, I'm not sure that anyone else is  in Amazon or Google's league.  Amazon in particular, has a track record that is incredibly impressive. From a  quick culling of all of the Amazon Web Services press releases since the launch of it's initial service (SQS in 2004), after removing non-feature press releases and minor releases of little value, we  came up with the following graph: 

![aws-feature-releases-by-year]({{ site.url }}/assets/media/2010/03/aws-feature-releases-by-year.png)

The trend is clear.  Since Amazon's start, they have accelerated rapidly, almost **doubling their feature releases** every year.  2009 was spectacular with 43 feature releases of note.  Since the beginning of 2010, Amazon already has 8 releases of note.

In contrast, traditional hosting companies moving into cloud computing are hobbled by running two teams: development and operations.  Expect the gap to widen as more hosting companies continue to misunderstand that this race isn't about technology; it's about people, software, and discipline.

So what's the takeaway?  Simply put, in order to be a major cloud player you need to change **how** you do IT and build clouds.  Either hire someone who can bring the devops practice into your shop or engage an cloud computing engineering services firm like Cloudscaling  to help you build fast, nimble teams that focus on automation and rapid release cycles.

## Comments

**[uberVU - social comments](#486 "2010-03-30 08:50:58"):** **Social comments and analytics for this post...** This post was mentioned on Twitter by Cloudscaling: Please RT: Is Amazon Winning the Cloud Race? http://goo.gl/fb/xPRJm...

**[Ray Nugent](#488 "2010-03-30 09:21:36"):** Amazon is redefining IT operations. It will eventually result in the elimination of OPs as it exist today all together. The traditional sys admin will become a specialized software developer just like any other software discipline. I think the Devops term will go the way of Webmaster indicating the early nature of this industry. You're right, Cloud is less about technology and more about people - for now.

**[JohnTreadwayCloudBzz](#490 "2010-03-30 15:25:46"):** Randy - not sure if your press release prediction will hold true. It's end of Q1 and they are at less than 1/4 of last year's total. That said, they are certainly winning the innovation race and everybody is playing catch up. Google and Microsoft have gone in different directions, so the comparison does not work. But for IaaS clouds it's hard to see anybody catching them on a pure features basis for general purpose workloads.

**[William](#491 "2010-03-30 16:10:15"):** Agree with CloudBzz that "hard to see anybody catching them on a pure features basis for general purpose workloads" (at least in the short to medium term) but I am not the IaaS battle is going to be won on "features".

**[randybias](#492 "2010-03-30 17:47:31"):** The primary point is that they have a tremendous pace and I don't see anyone else gearing up to play that game except maybe Rackspace Cloud. It's just not enough to 'play catchup'. AWS' EC2 went from zero to 40K machines in 3 years. At 100% growth they will be larger than every other hoster out there by end of 2010. It takes a couple of years to build a team that can execute like this. If other hosters and service providers don't build similar kinds of teams soon they will be at a serious disadvantage.

**[randybias](#493 "2010-03-30 17:51:10"):** I disagree. 'Features' here includes the EU rollout for S3/EC2 and the CloudFront rollout in Singapore/Asia. It also includes capabilities that clearly expand the offering out of the 'consumer' realm, like VPC. While it certainly doesn't mean that all enterprise use cases are handled, it continues to lower the barriers and provide access to a larger part of the market.  
  
Features in and of themselves perhaps won't 'win' the battle, but what they represent certainly can. As AWS continues to allow more different types of businesses & use case to onboard, expands their footprint globally, and fixes 'problems', they create an even larger feature gap between themselves and their competitors.  
  
Another way to say this is: "don't bring a knife to a gun fight." Most hosting and service providers are bringing knives. But that's not going to result in much besides blood on the floor.

**[JohnTreadwayCloudBzz](#494 "2010-03-30 18:16:04"):** You're right that they seem to be on a plane of their own at this point. However, in the scheme of things, especially where the real money is spent (enterpri$e), their cloud revenue is a rounding error. If and when the enterprise market truly arrives (it's just playtime now), Amazon's advantages may not be enough. When personal selling and relationships matter, the best and most innovative products don't always win. Beating Rackspace and a bunch of smaller cloud providers or slower telcos is one thing. Beating Microsoft, IBM, HP/EDS, and other giants when the applications matter is quite another.  
  
Whether Amazon maintains its dominance or not in the long run,they have the whole market marching to their drum and have changed the face of computing at a fundamental level.

**[randybias](#495 "2010-03-30 18:26:45"):** I agree. And the first true enterprise cloud platform that executes like AWS could have a tremendous advantage.

**[German Retana](#496 "2010-03-30 18:31:22"):** Could it be possible that at the pace Amazon is including features, it may end up with a product that is more complex and sophisticated than needed? What if IaaS as Amazon is building it ends up with features beyond what the majority of the users need?   
  
Think in terms of a disruptive innovation. Amazon's rapid growth (in any dimension, servers, consumers, features) might open the door for “cheaper, simpler, smaller, and … more convenient to use” (Clayton Christensen, 1997) solutions from other vendors. For a cloud newbie, perhaps the ability to talk to someone or have someone from the provider's to team help you out deploy might become more valuable.  
  
Now, this help does not necessarily come from the IaaS vendor, but can come from the bunch of brokers already out there. Is this money Amazon is leaving on the table?

**[randybias](#497 "2010-03-30 18:49:27"):** It's possible, but seems unlikely. Amazon is actually the disrupter in this case and is much simpler, cheaper, and easier to use than the old way of doing IT (e.g. buy hardware, rack & stack, hire operators, negotiate bandwidth, etc. etc.).  
  
Hard to see how the current disrupter would be disrupted so quickly. More likely, your scenario would come to fruition in another 5-10 years once cloud computing is the established incumbent.  
  
Right now cloud computing is the up and comer.

**[Jordan Braun](#498 "2010-04-07 08:05:03"):** Yes Amazon is the godfather of public cloud computing and their growth is tremendous. I do agree with others that the IaaS space is largely growing and gaining ground by adding feature sets that more enterprise organizations require. Better security, greater performance, stronger SLAs, and lets not for get the power of VMware and how widely those tools are being used with in the enterprise.

**[Ray Nugent](#2178 "2010-03-30 09:21:00"):** Amazon is redefining IT operations. It will eventually result in the elimination of OPs as it exist today all together. The traditional sys admin will become a specialized software developer just like any other software discipline. I think the Devops term will go the way of Webmaster indicating the early nature of this industry. You're right, Cloud is less about technology and more about people - for now.

**[JohnTreadwayCloudBzz](#2179 "2010-03-30 15:25:00"):** Randy - not sure if your press release prediction will hold true. It's end of Q1 and they are at less than 1/4 of last year's total. That said, they are certainly winning the innovation race and everybody is playing catch up. Google and Microsoft have gone in different directions, so the comparison does not work. But for IaaS clouds it's hard to see anybody catching them on a pure features basis for general purpose workloads.

**[William](#2180 "2010-03-30 16:10:00"):** Agree with CloudBzz that "hard to see anybody catching them on a pure features basis for general purpose workloads" (at least in the short to medium term) but I am not the IaaS battle is going to be won on "features".

**[randybias](#2181 "2010-03-30 17:47:00"):** The primary point is that they have a tremendous pace and I don't see anyone else gearing up to play that game except maybe Rackspace Cloud. It's just not enough to 'play catchup'. AWS' EC2 went from zero to 40K machines in 3 years. At 100% growth they will be larger than every other hoster out there by end of 2010. It takes a couple of years to build a team that can execute like this. If other hosters and service providers don't build similar kinds of teams soon they will be at a serious disadvantage.

**[randybias](#2182 "2010-03-30 17:51:00"):** I disagree. 'Features' here includes the EU rollout for S3/EC2 and the CloudFront rollout in Singapore/Asia. It also includes capabilities that clearly expand the offering out of the 'consumer' realm, like VPC. While it certainly doesn't mean that all enterprise use cases are handled, it continues to lower the barriers and provide access to a larger part of the market. Features in and of themselves perhaps won't 'win' the battle, but what they represent certainly can. As AWS continues to allow more different types of businesses & use case to onboard, expands their footprint globally, and fixes 'problems', they create an even larger feature gap between themselves and their competitors. Another way to say this is: "don't bring a knife to a gun fight." Most hosting and service providers are bringing knives. But that's not going to result in much besides blood on the floor.

**[JohnTreadwayCloudBzz](#2183 "2010-03-30 18:16:00"):** You're right that they seem to be on a plane of their own at this point. However, in the scheme of things, especially where the real money is spent (enterpri$e), their cloud revenue is a rounding error. If and when the enterprise market truly arrives (it's just playtime now), Amazon's advantages may not be enough. When personal selling and relationships matter, the best and most innovative products don't always win. Beating Rackspace and a bunch of smaller cloud providers or slower telcos is one thing. Beating Microsoft, IBM, HP/EDS, and other giants when the applications matter is quite another. Whether Amazon maintains its dominance or not in the long run,they have the whole market marching to their drum and have changed the face of computing at a fundamental level.

**[randybias](#2184 "2010-03-30 18:26:00"):** I agree. And the first true enterprise cloud platform that executes like AWS could have a tremendous advantage.

**[germanretana](#2185 "2010-03-30 18:31:00"):** Could it be possible that at the pace Amazon is including features, it may end up with a product that is more complex and sophisticated than needed? What if IaaS as Amazon is building it ends up with features beyond what the majority of the users need? Think in terms of a disruptive innovation. Amazon's rapid growth (in any dimension, servers, consumers, features) might open the door for “cheaper, simpler, smaller, and … more convenient to use” (Clayton Christensen, 1997) solutions from other vendors. For a cloud newbie, perhaps the ability to talk to someone or have someone from the provider's to team help you out deploy might become more valuable. Now, this help does not necessarily come from the IaaS vendor, but can come from the bunch of brokers already out there. Is this money Amazon is leaving on the table?

**[randybias](#2186 "2010-03-30 18:49:00"):** It's possible, but seems unlikely. Amazon is actually the disrupter in this case and is much simpler, cheaper, and easier to use than the old way of doing IT (e.g. buy hardware, rack & stack, hire operators, negotiate bandwidth, etc. etc.). Hard to see how the current disrupter would be disrupted so quickly. More likely, your scenario would come to fruition in another 5-10 years once cloud computing is the established incumbent. Right now cloud computing is the up and comer.

**[Jordan Braun](#2187 "2010-04-07 08:05:00"):** Yes Amazon is the godfather of public cloud computing and their growth is tremendous. I do agree with others that the IaaS space is largely growing and gaining ground by adding feature sets that more enterprise organizations require. Better security, greater performance, stronger SLAs, and lets not for get the power of VMware and how widely those tools are being used with in the enterprise.

**[Mathew Lodge](#3129 "2012-01-18 19:02:00"):** The interesting thing about their business is that the revenue growth rate is declining. That is, their AWS business is not growing at anything close to 100% -- more like 40-50%. The caveat here is that this is as far as anyone can tell, as we're all just guessing at what %age of Amazon's "other revenue" bucket is AWS, and what %age is their credit card and all the other stuff thrown in there. So, if I put this chart together with a declining growth rate, that suggests diminishing returns on new features. Maybe it isn't all about features after all. Maybe it's about customer acquisition and go to market :-)

**[randybias](#3130 "2012-01-19 10:19:00"):** I think that if you are going to make the assertion that the AWS business' growth rate is declining you should provide some data.  The latest 10-Q from late 2011 shows the AMZN 'Other' revenue line as now their fastest growing revenue line at 87% CAGR.  Electronics, their fastest in 2010 dropped from 75% CAGR to 50% CAGR in 2011.   http://cloudscaling.com/blog/cloud-computing/amzn-other-revenue-in-2011 We can argue to our hearts content about what the Other line is made up of, but neither can 'prove' what % AWS is of it.  Still, I think the numbers that myself, UBS, and other credible sources have derived hint it's at 70%. Regardless, even if we're wrong, for Other to be at 87% CAGR would mean that their credit cards and other-Other are at >100% CAGR to make up for that shortfall. The reality is that if we're just going to use a single proxy number, it's the % growth for AMZN Other, which is 87% and has been growing steadily for years with little signs of slowing down.  That's just a fact. Finally, perhaps it's a need on VMW's part to throw up FUD, and that's why you are posting this, but my experience in interviewing people coming out of AWS is that the Cloudscaling, UBS, and other numbers may be *low*.  It's going gangbusters over there.  VMW must interview their fair share of candidates.  Sure, this is anecdotal evidence, but it's telling combined with everything else. I bet Paul Maritz thinks AWS is a threat. BTW, my offer to debate VMware in a public forum, any time, on these issues, remains open.

**[Vaporfog](#3138 "2012-02-13 18:15:00"):** Matthew,  Did you know that Amazon doesn't publish their Kindle numbers either, so based on your previous assumption the Kindle business is waning as well. o_O BTW, that's called "Competitive Advantage" and Jeff Bezos knows how to play this game. http://www.bloomberg.com/video/69862112/ AWS opened up how many regions last year? They added how many new features and services? I would love to see a Thrilla in Manilla debate between a VMware exec and Randy or Werner. It  would be well worth the admission cost.  Ohh, and Matt I am very confused by your presentation and the presentation from the Cloud Foundry folks. http://blogs.vmware.com/files/cloud-connect-chaos-monkey-r3.pdf http://www.slideshare.net/chanezon/interop-2011-scaling-platform-as-a-service Ben Dover

