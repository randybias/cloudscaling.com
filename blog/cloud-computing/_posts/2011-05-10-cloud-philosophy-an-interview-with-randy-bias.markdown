---
author: Randy Bias
comments: true
date: 2011-05-10 15:30:48+00:00
excerpt: I recently did an interview with Michael Coté of Redmonk. We've posted a
  PDF transcript <LINK> of the audio interview on our website. It's a lengthy conversation,
  so we thought we'd post a text version here, with key parts excerpted. Enjoy!
layout: post
slug: cloud-philosophy-an-interview-with-randy-bias
title: 'Cloud Philosophy: An Interview with Randy Bias'
wordpress_id: 1887
old_categories:
- Cloud Computing
tags:
- cloud
- Cote
- OpenStack
- Randy Bias
- Redmonk
---

I recently did a [podcast interview](http://www.redmonk.com/cote/2011/04/04/there-is-no-half-steppin-in-cloud-guest-randy-bias-of-cloudscaling-it-management-and-cloud-podcast-087/) with Michael Coté of Redmonk. We've posted a [PDF transcript](http://cloudscaling.com/pdf/CRN-20-Cool-Cloud-Infrastructure-Vendors.pdf) on our website. It's a lengthy conversation, so we thought we'd post a text version here, with key comments underlined and bolded.

It's an hour long interview, but with a lot of high quality content, so it's worth your time. Enjoy!

<!-- more -->


<blockquote>

> 
> 

**Michael Coté:** Well, hello everybody! It's a special edition of the IT Management & Cloud Podcast. This week it's just me, Michael Coté, at RedMonk and I have got a guest on to kind of just go over some exciting, sort of, real cloud stuff. I guess you could call it the real cloud on the ground kind of business, not just the theoretic stuff up in the sky.

So with that, you want to introduce yourself guest?

**Randy Bias:** Hi! I am Randy Bias, the CTO and Co-Founder of Cloudscaling.

**Michael Coté:** And if I remember recently you were the CEO for quite some time. And so I imagine -- I always -- I have been covering tech business long enough that when I see a Founder move from [being] CEO, it's usually a tremendous relief. You can, sort of, -- you can focus on the more technical things and, sort of, operational stuff rather than running around unclogging toilets and stuff that startup CEOs are always doing.

**Randy Bias:** It certainly was for me. I think I was a great Founding CEO, but I was quickly getting to the point where I was not really doing any of my CEO duties and there was a clear gap. And so I was happy to stop doing that 10% of the times -- a 10% CEO is almost worse than no CEO.

**Michael Coté:** Exactly, yeah, sort of, things pile up at the best case and at worst you start to just damage things. So it's always a nice sign of maturity like I was saying.

So for people who don't know Cloudscaling and haven't heard of you guys, you want to give us an overview of what it is you guys do?

**Randy Bias:** So Cloudscaling is a bunch of veterans who worked on Amazon Web Services, GoGrid, Engine Yard, and several other either platform or infrastructure clouds, who got together and we see ourselves as the real deal implementers for clouds at scale. So we have got several engagements that are well publicized, including bringing up both private and public clouds for Korea Telecom and then also bringing the first OpenStack storage cloud to market after the Rackspace Cloud Files.

**Michael Coté:** So how long have you guys been around for?

**Randy Bias:** Cloudscaling in this instantiation has really been around for about a year. So the current business model and team has been around for about a year, and in that time there is really just the two co-founders almost a year ago, and now we are 25, going on 30, and we will probably double again by the end of the year. So we have been under very rapid growth.

**Michael Coté:** And would you characterize yourself as a services organization largely or is there a product that you have?

**Randy Bias:** We are getting to the area where like I have to be careful about what I share. I will simply say this. We are currently a services organization. We have a new CEO who is not a services person. He has a history and track record of building product. And if I were looking at the organization from the outside I would think that, that was a clear signal. But it's for other people to decide.

**Michael Coté:** That's right. Everyone can cut open the bird and read the guts for the future on their own, right? They can do that on their own. The old osprey if I remember.

Yeah. So I mean, you guys have like -- I have been kind of knowing a few, like Andrew Shafer who is, if I recall, the VP of Engineering, like, having spoken with him while he has been working there. I mean, you guys have -- as a sort of credit to your name, rapidly scaled up staffing wise. I mean, there has been kind of phenomenal growth that you guys have been through.

**Randy Bias:** Yeah. We have been -- we have still been tremendously lucky. We have got a lot of A-players like Andrew Shafer who have come on board, who have got a ton of domain knowledge to help us out.

We also recently acquired a gentleman by the name of Zed Shaw, who is rather infamous in both the Ruby and Python communities. He is awesome, absolutely awesome.

We have got a bunch of the backend engineers from GoGrid who are really great. We just
had one Amazon Web Services Product Manager start with us.

We have got a really all-star cast of folks who have just got a ton of experience in this area. Like I said, our forte has really been on the implementation side. We think of ourselves as cloud builders and operators who have practical experience. And sort of when you look out there in the ecosystem of folks who are offering product or services today, there is actually very few people who can make that claim, so pretty proud of that.

**Michael Coté:** So when you guys -- when you and sort of the other initial clutch of people started out and you were, kind of, looking at the cloud opportunity, how did you end up, kind of, dividing [the market] into, kind of, [what companies were] ready to do cloud stuff, if you will? I mean, you, kind of, had to do sort of a market study, if you will, and kind of figure out: okay, these are the people who actually can build like full scale, and I am putting this in air quote, “real clouds.” And I am curious like how you kind of sorted that out initially and how that’s been evolving over time?

**Randy Bias:** Man, that’s a really good question actually. So the history of the business is funny, because it really -- I have been working on this cloud stuff in one way or another since sort of late 2006 when I did my first kind of cloud startup, which didn’t go anywhere, but was sort of a competitor to RightScale, sort of a Cloud Application Management Framework for originally both Amazon Web Services and then eventually GoGrid, and that was one of the first cloud management platforms I had seen. In fact, RightScale wasn’t even launched at the time that I started working on it.

And during that whole time, from late 2006 till now, I have been blogging about this and thinking about it and I spent some time at GoGrid as a VP, Technology Strategy, where I was trying to help them with product direction and vision.

And when I left there and I formed Cloudscaling in the current incarnation, a couple of things were interesting for me. The first was that, the blog had really attracted a lot of readers. And the second was that I felt that I had a chance to step back from, kind of, what people were talking about and try to assess what I felt was happening from a big picture point of view and then try to build a business model towards that, which is a little bit different than most folks who I think have a product or a service that they are offering already and then they are trying to see how it can fit into cloud computing.

**Michael Coté:** Yeah, the so-called “cloud washing,” if you will, in the worst case.

**Randy Bias:** Right. So I started doing consulting and strategy and architecture engagements with, like, large enterprise companies. I worked with VMware on the vCloud API, and I worked with Kaiser Permanente on some of their internal private cloud stuff and a handful of other large enterprises.

It seemed to me like the enterprises were missing something, and I kept coming back and noticing that what Amazon, and to some degree Google, and some of the large Internet properties was doing was just building a fundamentally different kind of information technology.

And then sometime along though I just had this epiphany and part of it was that I read Clayton Christensen’s The Innovator's Dilemma, which is a must read on disruption in the technology business, and then the second was I read Nick Carr’s Does IT Matter? And my “a-ha” moment was like, hey, **what Amazon has really done is they have cracked the nut on this new way of doing information technology**, and it's more of a way -- it's sort of -- the way I like to highlight it is it's the difference between building robotics factories for automobile manufacturing versus kind of having an assembly line for automobile manufacturing. It's a fundamental transformation of the way that you actually build IT systems.

And when I figured that out I realized that a lot of folks were just really trying to take the assembly line model for it and call it cloud.

**Michael Coté:** Yeah, and that’s something that in a funny way has become unique about your voice in a lot of cloud discussion is, you are still very focused on, I am overstating it to some extent, but everything is fundamentally different. That like it's not sort of just like some little things that you can tack on here and there, but to really get the full benefit and to make doing cloud in whatever sense worth it. There is a lot of things that you have to change and a lot of dramatic change to it.


> 
> 

> 
> 

Whereas, originally a lot of cloud computing, like the Nicholas Carr’s other famous book The Big Switch is sort of like equally dramatic, in that there is one mega cloud in the sky that all this utility computing comes from.

Then at some point, I think especially to be both fair and a little cynical, I think when a lot of existing vendors came into the market, they couldn’t just wholesale throw everything that they had so they wanted to adapt what they had, and there is a bit of a moderation of this cloud stuff. But you are still very much still one of the people who kind of goes out and says “no, no, no, [cloud] stuff is very, very different.”

And more importantly, the point that you have been making recently is that, if you don’t change as close to the floor, so to speak, as possible, then you are really not going to get all the benefits of doing cloud stuff.

And kind of my thing to tack onto that is, like, with any sort of technological change if you are not getting the full benefit, it's probably not worth your time to some extent. And I don’t know, it's interesting to see you speaking to trying to push people over the edge even further than they want to go, so to speak.

**Randy Bias:** Yeah. I mean, I have realized that people get really uncomfortable when I am talking about some of this stuff. But the thing is, is that I want to try to understand if this had happened before and I kind of looked back and I sort of saw that there was this fairly large transition from mainframe computing to what I call enterprise computing, and that transition took 20-30 years.

I mean, mainframe computing was dominant in the 1960s moving into the 1970s, and then the 1980s we sort of had this revolution where suddenly it wasn’t this big huge box in the corner that only a few people knew how to use and controlled access to, now there is greater and wider access to both the servers and the clients, and that really changed the whole model for how we think about computing. And I think we are in the midst of that same kind of change today.

And my thinking isn't exactly along Nick Carr's line. The thing I love about Nick Carr the most is that he has got these historical examples of how other business infrastructure, like power systems, electrical power systems, telecommunications, railways, air transportation, have followed these same kind of commoditized move towards utility models, and that's what I really find valuable about his writing.

But then when I look at sort of this transition from enterprise computing to cloud computing, you can kind of see it happening, right? It's that -- we are just moving further along that same trajectory from mainframe, which is that, now you have got all these mobile devices that are -- you are hyperconnected all the time. You have got something with the power in your pocket today, an iPhone or Android, that is significantly more powerful than anything we had in the 80s, and you can connect it to a data center full of thousands or tens of thousands of servers to do processing on in little and no time at all.

I think **that changes the whole dynamics of pretty much everything, both how we build the applications, how we consume them, how the infrastructure underneath them that powers the applications**, I mean it's just shifting everything around.

**Michael Coté:** Yeah. I want to -- I usually skirt away from sort of definitional things, but I want to ask you in a little while about, like, what this fundamental shift is that you have to go through, like what the “changed IT” is, if you will.

But you just brought us something that I also kind of kick around in my head quite a bit. I was watching I think, I forget if it was your Cloudscaling talk or the one you did at the, like, in Seoul at the Korea Cloud Foundations thing.

**Randy Bias:** Cloud Frontiers?

**Michael Coté:** Yeah, there you go. And you mentioned people having mobile devices and this constant connectivity, and so I am kind of curious in the work, whether it's kind of looking out at things theoretically or the work you are doing for clients. Like, what are, sort of, like, the business drivers that are pushing people towards cloud computing and beyond sort of like, as you would put it, beyond kind of, like, bottom line growth, if you will, kind of cutting cost and saving money - but what are these new lines of businesses or business models that companies are wanting to do or being enabled to do with cloud computing?

And the reason - I am kind of infamous for asking long questions with a bunch of statements, so if you will pardon me. And the reason I ask this is, a lot of the examples that you and other cloud people use are -- I divide them into two types, they are either external facing things like Netflix, which makes perfect sense, right? You have got thousands and thousands of people accessing your IT essentially and you need to scale it. Or they are kind of batch jobs, like something Eli Lilly might do, or maybe kind of Animoto is [one] of these, where they just seem to do a lot of processing all at once.

And so I am curious like beyond those two types of, if you will pardon the old phrase, “workloads,” like are there other kind of business models or drivers that you are seeing businesses really lust after cloud computing for?

**Randy Bias:** The simple answer, my oversimplification is basically, you just have to ask yourself, **what can you do differently if you can get 10,000 servers for an hour for $100? I mean, that’s sort of my litmus test**.

**Michael Coté:** Yeah. That's a very concise way of putting it.

**Randy Bias:** And then, actually I have this blog posting I think from 2008, I have to go back and search for it, but basically at that time I said, hey, here is the big use cases; one is speed, sort of time to market. So can I get something up and running now, and you actually see that in AWS, you see a lot of media companies, they don't really have elastic workloads, so to speak, they have their need to be able to bring something up for a period of time very quickly and then tear it down.

The second big use case I had was leverage, and this is sort of the equalizing effect. It means that any small startup now can actually get enough compute power to be able to compete with the larger business.

So the barriers to entry for a lot of use cases, batch processing or processing a market data are pretty much going away or are much smaller than they used to be.

The third was sort of that classic elasticity use case, which I think it more applies to that batch processing or sort of the Animoto use cases.

And then a fourth, which I think we are going to see -- which we are starting to see now, but hasn't quite got there, is what I call sort of the reach use case, which is that, you see a lot of -- as there gets to be more and more clouds globally, you see a lot of use cases that are about being able to put your infrastructure in another country or your application in another country with very little friction. So that really changes the dynamics.

The two examples I like to give are Friendster, which I don't know how many of your listeners know the history about it. Friendster was one of the first social networking sites and it was based in the U.S., but then was run over by Facebook and MySpace, and it wound up that the vast majority of their users were in the Philippines, but they were servicing them from the U.S., and they had no way to pivot and go move their application to the Philippines, and if they had, it might have made a difference for their longevity.

And then the next use case is 99designs. They are a small Australian outfit that puts their production servers on Amazon in the U.S. to sell to U.S. customers’ logos and graphic designs that are contributed by people from second and third world countries.

So you have got a guy in Latvia with the laptop contributing an entry. And so you have got folks in Australia basically bringing up application on demand in the United States and then servicing the global market.

I just see that those dynamics really -- all four of those use cases are sort of the big buckets I kind of put all those cloud use cases in.

**Michael Coté:** Yeah, it's kind of like the last case, really, that I feel like I have been -- I have this kind of hope, where I have kind of been searching mentally in my head for like -- if I were to go to any given medium to large size business and tell them, like, here is why you should do cloud and why it's generative beyond, like, you will just be able to do stuff better, right?

Because I am always trying to avoid like, well, it just lets you do things better, because that's kind of what IT has done since the dawning of time, since probably the stone wheel I guess.

And it's almost like to some extent every business would like to increase its reach and interaction with its customers or whoever is sort of moving the money primarily that comes in and out of the business. And I sort of feel like that kind of brings in all of the aspects you were just talking about.

Like one: you want to be able to spin up different pieces of IT or applications to do different little business models here and there in a cheap way so that -- it's almost like you are lowering the bar for how IT can help with the business. Like with the more traditional IT, enterprise sort of applications, if you will, or enterprise IT, there is sort of like this minimum buy-in, like, well, anything we do is going to cost like $2 million.

So to some extent it better be like a big business if you are going to do -- a moderately sized new business. Whereas with the speed that you can do and the certain amount of leverage and everything, essentially a business of any size, including businesses and smaller ones, can start to use IT in ways that were just very cost prohibitive to do in the past.

And more importantly, to the speed that you were talking to, it's not necessarily all about the money side of cost, but also just the time and opportunity.

And so I think that's a lot of the more interesting things that I am starting to see recently of people using cloud is that: it may not be sort of like a traditional or legacy type of IT application, but it's a business figuring out something new that they can do with IT, which I think is somewhat -- I mean, that's another thing that you get into quite a bit is the idea that a lot of what you see people using cloud for is not necessarily like legacy app migration or something like that.

**Randy Bias:** Right. I mean, if you go and you look at it right now, most larger enterprises are sort of split into two kind of what I will call adoption groups. So adoption group number one are sort of the app developers and the folks in line of business who are trying to get things done in order to help the business succeed. Mostly what they are looking at is top line revenue generation opportunities.

Adoption group number two is really a centralized IT department which is looking at ways that they can reduce cost and get bottom line efficiencies, and mostly they are looking at preexisting legacy applications. They are saying, well, I have got a bunch of virtualization deployed, I am going to automate it, and then I have got a cloud and things are going to be rosy and sunny.

I think part of the problem, part of the disconnect here is that, there is a certain amount of the app developers line of businesses going around centralized IT to adopt a certain amount of flight and it looks very similar to -- the drivers and motivators look very similar to the ones that are around sort of the Salesforce.com use case, which is, **I could go to centralized IT and I could try to get their help, but the red tape, the length of time it will take me to get service, the responses, all of that is sort of problematic. So instead I am just going to put my credit card online and get going, because I am trying to get something done for the business in time.**

**Michael Coté:** Yeah. I mean, it's kind of like -- you could call up a company's customer service line and go through their IVR system, their Interactive Voice Prompt or talk to a person or you could just go to Google and like search for it. It's, like, so often the case that the services set up by a company are the last place you actually want to go to get help with that company.

**Randy Bias:** Yeah, and to be fair to the centralized IT teams, I mean to some degree they have been set up for failure. I mean, what's happened is that they have been sort of in an inherent monopoly, whether intentionally or not, over the past 30 years and they are on the hook for the service levels that they provide internally, and so they have gotten more and more risk averse.

And this really comes out when you look at buying decisions, because I sort of see this like very dysfunctional relationship between the centralized IT department and typical enterprise vendors.

So what tends to happen is that -- that’s an old saw of, nobody ever got fired for buying IBM or Cisco or whatever. And part of what that deal is, is there’s a somewhat inherent deal that whenever there is any large infrastructure undertaking, centralized IT will go at their strategic enterprise suppliers, and if there’s a failure or a problem, those suppliers will fall on their sword and kind of save that person.

So I think there’s a lot more motivation for typical centralized IT folks to focus on what I call CYA decisions, Cover Your Ass. And if you go and you look at a service provider whose very lifeblood is on the line, I mean whatever they are providing in terms of information technology services to their customer base directly impacts the liability of the business that they have to make ROI decisions all the time. They can't make CYA decisions. If they make a CYA decision, the business dies.

Whereas, the large financial institution might be, “hey, 10% of our revenue just goes right into the IT budget, it's cost of doing business, we don’t know what happens to it. We have to get value.”

**Michael Coté:** That’s funny. I was just reading, like, a review of a book about the history of hedge funds and they kind of made exactly that same point about hedge funds versus institutional investors, like big banks, that people at large banks, it's sort of like, I don’t know, they are not -- their success and their wealth, actually in this case, is not really directly tied to the performance of the work that they are doing in the same way that hedge funds investors are. It's very similar to a service provider. A service provider needs something that works, not just something that looked good on paper, therefore it's not their fault when it breaks.

**Randy Bias:** Right, which is why -- it's part of why I have had this kind of like rant about the enterprise cloud lately is because, I really figured out lately that **this whole approach to building sort of these “enterprise clouds” is fundamentally broken from the ROI point of view**.

I mean, you have sort of got this weird disconnect or you have got the larger service providers, I don’t want to name anybody’s name, they are pretty obvious when you go out there and look at them, they have got these big enterprise spaces and they are saying, “hey, enterprises don’t want what Amazon has got, they want something different, they need to support all these legacy applications.”

So they are trying to build these very complex, very expensive clouds that are not going to be anywhere near cross-competitor with Amazon. And at the same time you look at the centralized IT department and they are making a decision. They are like, “well, are we going to outsource all these legacy apps and our jobs go away, or do we just build our own internal private cloud?” Most of them are choosing to go down building that internal private cloud route.

So **you have got centralized IT going to the enterprise vendors to build an infrastructure that looks exactly the way these external public enterprise clouds look, same people, same technology, same management processes. I don’t see success in the future for either of those paths, and they are inherently competing with each other as well, and Amazon has kind of run away**.

**Michael Coté:** If we can construct a strawman, as it were, like what are the arguments people are using to build their own private cloud, if you will, or enterprise cloud, like what's motivating, beyond the losing their job like what are the other -- what's the checklist of things that don’t work out for them?

**Randy Bias:** Well, I just want to draw a distinction because it's not as clear in some of their presentations, it's like there is a difference between an enterprise cloud and a private cloud in my mind. The enterprise cloud is using enterprise computing techniques to build a cloud whereas a private cloud is a cloud for a single tenant. So you could use enterprise cloud to build a private cloud or you could use commodity cloud to build a private cloud, either one. So you can build your cloud like AWS or you can build it like how Cisco and EMC built it, and those are very different.

**Michael Coté:** Right, that makes sense.

**Randy Bias:** Yeah. Sorry.

**Michael Coté:** Oh, no, no, no, it's good to -- I always joke that there is about 50 different words you can stick in front of cloud nowadays, so it's always good to define what -- that’s right, what the combinations are.

So what do you see is motivating people to use enterprise techniques to build their own cloud? I imagine there’s something they are fearing or they think is lacking from just running it on Amazon or something.

**Randy Bias:** Right. So the key driver I think is when you look at a lot of the legacy applications, they have some needs that to be honest are not met by Amazon Web Services.

The best way to think about this, and Lew Tucker had a great presentation on Cloud Connect right before mine, is what the history -- how we got here is that everybody kind of came in and they said, “okay, I have got a new application that’s going to go in the data center, and these are the requirements for my application in terms of compute, storage, and networking, and then those requirements were fulfilled.”

So **when you look inside of a typical enterprise data center, you have silos all over. Every single application has its own stack. So you might have the Exchange Server running on top of EMC and then you might have some databases running on top of NetApp Storage, and it's different everywhere**.

**Michael Coté:** It's almost as if each application has its own cloud that it's running on.

**Randy Bias:** Exactly. The way that I sort of recently have been sort of talking about this is, imagine that you were sitting at a desk and you have got ten different appliances in front of you, and one takes like 8 volts DC, another takes 12 volts DC, one takes 120 volts AC single phase, and then another one takes 220 volts three phase. Now, if you go to the power company and you say, I want you to deliver the power that each of my appliances needs exactly as it needs it, no transformation. The power company’s cost jump up 5-10x.

Now, if instead each appliance has its own transformer and then the power comes in as a
single type of power and then it's changed, then you get -- now everybody who builds an appliance takes on the responsibility of having to transform the power to their needs. But on the other hand, the power itself can be very reliable, it can be very cheap, and it can be the same everywhere.

So I think that’s part of what we are looking at, and part of what makes it that hard to swallow for a lot of the legacy apps is that they are preexisting appliances that don’t have those power transformers in them. I mean, you have to make a decision, are you going to refactor them so that they are cloud ready? Are you going to migrate off of them to some other new Software-as-a-Service based application or rewrite them from scratch? I mean, how do you handle that?

**I think most people are trying to figure out a way to get the value that Amazon brings while taking legacy apps as they are and putting them on top of it. And while I think that’s possible, it's not going to be done through building very expensive 10x, 8-10x more expensive clouds**.

**Michael Coté:** Yeah. I mean, it's kind of -- it's almost impossible to, sort of, quantify what it would take to modernize all those applications out there. I mean, I think -- I guess like the only touch point I can think of is like the Y2K scare where everyone was sort of forced to go make this very small change, or relatively small change to every application that was out there, because they thought it was going to be Mad Max the next day or whatever. As I recall, that was not cheap.

So like changing the nature of an application that it can run on a different platform is, there will be things that like will work out, but it's quite an onerous process.

**Randy Bias:** The thing here is that **Moore's Law is basically our friend**, and if you go and look at a bunch of the capabilities that Amazon has added over the past couple of years like virtual private cloud, the dedicated instances now, the new networking features in the virtual private cloud, I mean, you can see that they are slowing eating away at a lot of the core use cases that legacy apps require. And I think what we are going to see is a combination of features added on top of commodity clouds like Amazon Web Services, plus just the hardware gets that much better.

We have a big -- our big client in Korea was in the process of doing their [migration] and they got concerned because they had some databases running on some Pentium IIIs from 2000 on Windows. And I said, look, as soon as you virtualize those, they are going to be blazing fast. Because the hardware under the cloud is just so much better than those Pentium IIIs that the overheard just doesn’t matter, and there will be tons and tons of that stuff that over the next three to five years it will be easier and easier going to cloud, because the impedance mismatch will lessen.

**Michael Coté:** Yeah. I mean, they are going to need one of those turbo buttons from the old 386, where you had to slow the computer down so you use old software without it going crazy.

**Randy Bias:** I still play those old games.

**Michael Coté:** That’s right, little Lode Runner here and there or whatever, or Sopwith or something.

**Randy Bias:** I have a soft spot for Ultima actually.

**Michael Coté:** Oh, yeah, yeah, and there was always plenty of editions of that to play on. Being in Austin, Ultima was a very popular thing around here since --

**Randy Bias:** Oh yeah, of course.

**Michael Coté:** Yeah. In fact, while we are ratholing here on games, like Richard Garriott, like he is renowned for his Halloween party every year, because as you can imagine being the Ultima guy, he has like a castle somewhere around here.

**Randy Bias:** Awesome!

**Michael Coté:** And there is like 20 secret doors and all sorts of things like that, so he invites some people out every Halloween to, like, go to the Richard Garriott Haunted House Castle thing. I have never been, but it’s supposed to be pretty awesome.

So yeah, anyhow, getting out of that rathole, going through a secret door back to our main conversation. I mean, I am curious, like you were saying you can see Amazon eating away at these enterprise concerns like -- not that I want you to detail like a list of 50 things, but like what's kind of like the handful of top things that are like enterprise concerns? What do you see those requirements being, whether they are good requirements or not that enterprises are coming out with?

**Randy Bias:** So I mean, there are three that people like to trot out regularly as sort of the high level bullet points, which I don’t necessarily agree with, but there is security, availability, and performance, those are the three that get trotted out.

**Security is sort of a nonstarter. You can build a cloud to be as secure as you want, doesn’t matter what techniques you use. I just pretty much ignore that. And performance, that’s more related to the underlying hardware than anything else. So again, I would pretty much ignore it**, because I think it’s very easy to build a commodity cloud that’s got significantly better performance characteristics or at least on par with any kind of enterprise cloud, no matter how much it is spent.

And then the third is, sort of, availability. There is something here that kind of gets to a little bit of the heart of the matter, which is that there is an assumption that legacy applications need the infrastructure to be fairly robust because they aren’t. So there is a need to have a lot more HA and redundancy all throughout the infrastructure. So when Amazon says, hey, just assume that these virtual machines can disappear at any time, for most legacy apps that’s a nonstarter.

And one way to get around that is to make the cloud ready to refactor them or rebuild them. Another way is to adopt somebody else’s service and just deprecate your old application.

But I think we are going to see probably some things out of the AWS pipeline and other commodity cloud’s pipelines that deal with sort of that persistency and availability issue without necessarily adding in all of the HA and redundancy that a lot of the enterprises want.

**Michael Coté:** Yeah, yeah. No, that reminds me -- I mean, perhaps as one specific thing like I remember back when I first got into working at an enterprise software ISV. I was sort of shocked to discover how often, like, shared network drives were, like, a fundamental part of the way a lot of enterprise applications ran. It was kind of to what you are saying, is, like -- I mean, shared network drives are kind of none of those three things.

Like they are very unreliable, they are very unsecure, and their performance is always questionable, and there is always stuff happening. Yet, it’s kind of like that’s a huge successful anti-pattern, so to speak, of enterprise application design. So like I said, it’s kind of an example of, if you have an application that’s depending on that, it’s not really going to work out extremely well in a cloud situation.

I mean, you can kind of rewrite it to be the equivalent of doing something like that, but there is all these sorts of networking things that don’t really work out very well. And also like you are saying, dedicated nodes in your cluster, so to speak, are not -- there is a certain amount of redundancy that you need.

**Randy Bias:** And the thing about redundancy that I am not sure that people get is, **when you look at typical redundancy in an enterprise data center, this is what I call the design for failover model as opposed to the design for failure model**. But you see all throughout the enterprise data center this kind of pairing. So it’s HA pairs everywhere, you have got pairs of load balancers, pairs of switches, pairs of file servers, and it kind of turtles all the way down, it’s just pairs everywhere.

**And the thing is, by pairing everything you increase the cost 2x right off the bat, almost all the time**. And some people will make an argument, well, you can run them active-active, but most people don’t run them active-active, because -- or if they do, they get bigger boxes, because they want in their failure condition not to lose any capacity. So even if you are running active-active, you are trying to run both those boxes at 50%, so you overbuild them both, so that when you failover, you can run one 100%.

So the pattern -- I mean, you go and you look at sort of the cost of rebuilding a new application, a greenfield application that you -- or building a greenfield application versus adopting sort of that design for failure methodology where you actually build and assume that any of the virtual machines or instances can go in anytime, and you move away from the HA. When you do that and you look at the price differential, suddenly that 2x doesn’t look very good for the greenfield applications. I think that that’s going to drive a lot of change.

**Michael Coté:** Yeah. There is another interesting sub-point that you raise up, and to ask a question around it: how important do you see the role of comparing cost of doing something versus one way or the other? How important does that become at every level of thinking about using cloud? Like is it something that like architects think about or is it only the manager who thinks about it? Because the sense that I get is, if you are not thinking about cost as something that drives possibilities, if you pay less for something you can do more stuff I guess, then you are kind of also missing out on some of the advantages of cloud stuff you are doing.

**Randy Bias:** So I think that if you -- sort of the way that utility providers arise, going back to Nick Carr’s Does IT Matter?, and the utility providers arise because there is an opportunity in the marketplace for somebody to specialize in a particular kind of business infrastructure, whether it’s power or telecommunications or something else.

What that means is that by doing only that one thing and making it a core competency, you can be extremely successful at it. And if we look at Amazon and Google, in many ways they backed into being some of the largest information technology infrastructures in the world that have provided as a service.

When you are up against that, and they are ruthlessly cutting out the cost of everything, their data center and power cooling, the cost of their server hardware, the cost of their software, their development cost, as they are ripping all that out, I mean if you are not thinking about that, you windup trying to compete against somebody who is continually dropping their cost and passing that on in their pricing.

We have done several blog post on this in the past and if you go and you look at it. **Amazon just keeps reducing their prices, I mean, it’s relentless. They know the game they are in and they are playing it to win from the get-go and so one of the things that I find humorous here is that I don’t think a lot of the enterprise cloud guys are actually baking in the price drops into their model**.

**Michael Coté:** Yeah. It’s always easy to be sort of two-faced or talk out of both faces of your mouth -- I mean both corners of your mouth about cost and cloud. Because on the one hand, like you are exactly right, like if -- and as I was saying at the beginning, like if you are not concerned -- if you are not driving down the cost, then you might kind of be wasting time essentially, or if you are not paying attention to that, things will get overrun. Then on the other hand, you also want to have that not be the only thing that you are focusing on.

So what I have kind of discovered is, it seems like good advice for people is, not that you only pay attention to cost but make sure you are at least paying attention to that as one of the criteria for doing cloud stuff. And it’s just sort of like -- it sounds kind of ridiculous because it’s dealing with money, which is always supposed to be very important and precise, but it’s almost as if, like, thinking about cost is a good rule of thumb to judge if you are doing the right thing.

Just like you are saying, if you are paying a lot more than you would just be getting for off the shelf cloud stuff, so to speak, then you are probably doing something a little wonky. So it is -- I don’t know, it does seem like it plays a pretty important role.

And it’s funny when you were going through that I was thinking it’s kind of analogous to the -- in the realm of U.S. politics to this theory of starve the beast. The way you are going to make any bureaucracy efficient is basically to deny it money and then figure out.

Because any sort of organization or organism, if you will, including a bureaucracy, wants to save itself, so even if they don’t have money, they will figure out something in order to not die I guess. But that’s perhaps a little Draconian for what IT people want to hear.

**Randy Bias:** Well, I mean, I really want IT folks to be successful, but I mean there is a big transition happening and people need to think about what that means. I don’t think the IT that we see today is going to be the same as the IT of tomorrow. **I think the IT of tomorrow is going to be a lot more application focused and a lot less infrastructure focused**.

I am not sure people really want to except that, because in many ways it’s easy to let things remain as a status quo, but I mean, the disruption is so industry wide and you can -- **Amazon Web Services has turned into a billion dollar business in about five year’s time. That’s a huge wake up call. You don’t see those levels of growth very often. So something very fundamental is happening here**.

**Michael Coté:** Yeah. I mean, one of the things you use and that other people mention a lot -- I am surprised more people don’t mention it but that comes up is that, the Bechtel CIO did, like, a study of storage cost and other things when it comes to cloud and that kind of shocking moment. I mean, I forget what the multiplier is, but that kind of shocking moment where there is a huge difference between their most optimal way to do storage and what Amazon charges for it.

And if you get over the sort of like the trinity of FUD, like security, availability, and performance, you start to wonder like why am I paying so damn much for storage. And it just gets to that point that you keep butting up against is that, there is just this kind of fundamentally different way of operating your IT that you get to, where things change quite a bit and the cost go down dramatically.

**Randy Bias:** Yeah. And that’s what I am really seeing right now across the board. We focus on service providers and telcos because we think they have the DNA to be the next generation service providers, but even still now talking to certain enterprises, I mean, they are either trying to figure out what Amazon and Google are doing differently, the smart ones that are kind of visionaries, or they are trying to figure out how to get used to [cloud].

I guess what I mean by that is, they are either trying to figure out how to reproduce that internally or they are trying to figure out how to get immediate leverage from it and get competitive advantage from today, and then looking at their long-term roadmaps.

So it’s going to be a longer term shift, there is no doubt about it, but it’s hard not to see it taking place today. And it’s a little confusing to me when you get some of the fear, uncertainty, and doubt coming from big enterprise vendors, and there is a certain need they seem to have to try to protect the existing infrastructure, IT infrastructure spend from large enterprises without regard for what those large enterprises actually mean, and I think a lot of times they need to just use a proper cloud, not necessarily build their own.

**Michael Coté:** Yeah. Well, let’s kind of close out with that thing I kind of earmarked at the beginning which was, for us talking about how dramatically things shift and with the changes and everything, I mean: can you give us a sense of what it does look like if you are running sort of a legit cloud? I mean, we have talked a little bit about kind of, like, needing to change applications to run on that kind of infrastructure, but in the work that you have been doing, like what is the end result of this shift that people go through so that they can actually have, I don’t know, to use a cheesy phrase, better cloud economics and get those advantages of doing cloud without kind of getting stuck in the enterprise cloud cul-de-sac, if you will?

**Randy Bias:** **Any kind of infrastructure cloud is basically going to look a lot like Amazon**. Your CAPEX costs are going to be reduced by something like 75%. Your operational costs are going to be reduced similarly, at least for the infrastructure side. And you will probably see a change of a factor of 10 or a 100x in the number of infrastructure people you need to run a successful private cloud.

I think that one of the other key things is that they will be a lot more focus on what do we actually need to run on it versus what needs to go outside and be run on somebody else’s.

So what I mean by that is, if you are running Microsoft Exchange today, rather than putting your email through somebody else’s on-demand service, whether it’s Microsoft or Gmail, that just doesn’t really make any sense, because the reality is, is that, that provides you no competitive differentiation, there is no business advantage. I mean, it’s IT that is just there, it just provides some basic service to the business.

Any kind of IT that provides simply basic services to the business probably shouldn’t be run by the internal IT department. The internal IT department should be focused on those parts of the business that are fundamentally differentiating and that should be what your private cloud is focused on.

**Michael Coté:** Right, right. Like you said, this transition, like, takes several years or some long time, but like how -- at this point, like with the people that you are seeing doing this, how are people gearing up for it? I mean, are they really charting out like multiyear projects, or did they start with small things? I mean, you are kind of laying out a pretty dramatic goal, if you will, as far as like different from the here and now. I mean, how are people taking on that challenge? And part of what you said, MSPs are a lot more likely to get it than enterprises I guess.

Randy Bias: **What most enterprises are doing right now is they are buying very expensive solutions from their strategic enterprise vendors, they are slapping a little bit of automation on top of virtualization, and they are declaring a win**. So what we are going to see is, what we think of as sort of fail forward, which is that as those victories are declared and then they fail to deliver business value, there is going to be more retrenchments to figure out how to get it done properly.

A few things are going to happen, either CIOs and CTOs are going to figure it out and they are going to go to the next generation suppliers and move away from the enterprise suppliers and actually get something done inside the business that makes sense, or heads are going to roll and people are going to be brought in that will more broadly adopt public cloud services or some combination.

**Michael Coté:** Yeah, to use another fantastic model next to the disruptive one, that’s the Trough of Disillusionment, if I remember from the Hype Cycle, which is always an exciting time. I think that’s one of my favorite points of any model that’s existed for a while. I mean, you never really come across disillusionment in the model.

So like you are saying, people now are buying kind of like these expensive solutions, if you will, or systems to be all inclusive of the hardware and the software and everything, and I guess what I have been wondering recently is like what are the alternatives, like is there sort of like the cloud hardware and stack that you can buy or acquire nowadays? I mean, I guess I am kind of unclear like if I wanted to do cloud the right way, like what would I assemble together to do it the right way or is it sort of like a one-off each time?

**Randy Bias:** It’s very challenging, because there are a few different dimensions here that have to be conquered. The first is capital efficiency parts. Second is the operational efficiency parts. And then the third is sort of the cultural change.

And there is really nothing today that addresses all three of those things, but there might be in the future, wink-wink, nudge-nudge.

But I think the things there that people are still looking at this as sort of a product problem instead of a transformation problem, and I have literally had senior enterprise people say to me, “wow, we are buying this new automation software, we are going to put it in our data center and we are going to turn our data center into a cloud,” and I just tragically fell off my chair laughing it was like, there is no software you can buy to automate your data center and turn it into a cloud, if there was somebody would have been successful with all the attempts that have happened over the past 30 years to automate data centers. I mean, that’s not what’s happening.

So I think it’s a holistic problem, it’s a systems level problem, it’s like sort of turn the data center into like a gigantic IT service, but people look at it as sort of being solved by products, and I don’t think it can be solved by products, it has to be solved by a combination of products, architecture, and cultural change. And **products will get us part of the way but they won’t get us all the way there, and it certainly won’t be any of the old products**.

**Michael Coté:** Right. Let me ask you another question along those lines, because I have been in thinking about this. Recently I have been wondering if there is a certain, I don’t know what to call it, so I will just come up with something, a certain line of scale, where if you are not past this line then building your own sort of private cloud is not really going to be worth it.

Like it’s almost as if to do the capital lay-out and to go through the cultural change and to do all this stuff, it’s kind of ironically like I was describing enterprise software earlier, that it’s going to be a multimillion dollar thing, if you will, so whatever it is you end up with, you better generate a lot more revenue than that. And if you are not past this line, then you should just use public cloud, if you will. But I don’t know, like I said, that’s just some wacky theory on my part.

I wonder if you are seeing that there is a certain scale of business you have to be in order to sort of justify caring about having your own private cloud?

**Randy Bias:** I certainly think there is. I think people get confused though because they think it’s about buying power, and it’s actually not that hard to get enough buying power to get things like servers inexpensive, that’s not really the challenge.

The scale problem is around, if you look at just taking the Amazon as an example, I mean they are reducing prices every year while increasing features. I mean, if you can’t do that, and that’s a significant change, then you shouldn’t be in the game. And I think to do that you are looking at an investment between $10 million and $100 million and it’s going to be very difficult for you to find the kind of talent, and there is going to be a lot of failures to get you there.

Now, I am not saying people shouldn’t go do that when it makes sense for their business, it’s just, if you are not ready to put that kind of new investment into being a successful cloud based business with those core technology, then I don’t think it makes any sense to build your own private cloud.

**Michael Coté:** Yeah, yeah. It’s interesting that -- I guess they call it economies of scale, if you will, which is one of the motivators to be a big company is that, you can drive down your operating cost per whatever unit you measure, if you will.

And I guess to some extent, aside from like negotiating enterprise agreements and stuff, I don’t know if that’s always applied in IT as much as it has, for example, with Walmart and their vendor relationships. Walmart can make things really cheap because they just buy so much, whereas just the cliché mom and pop store can’t necessarily get cheap stuff from their suppliers. So there is that certain -- I don’t know, if you can operate with those economies of scale the way you are deploying your own IT then it would make sense, otherwise you want to go with the utility, as you keep saying.

**Randy Bias:** Yeah. I mean, the economies of scale argument -- an important thing to remember is just that, it’s not purely about buying power. Getting buying power is not very difficult, **there are other economies of scale. I mean, how has Amazon got 400 engineers and data center techs basically running 80,000 plus physical servers? I mean, it’s because they are doing things very differently**.

**Michael Coté:** And that’s the cultural stuff you are talking about essentially.

**Randy Bias:** Right. And part of the economies of scale is like very homogenous environments. Like **Google is reputed to have five hardware configurations across one to two million servers, whereas in a typical enterprise environment I have seen hundreds of hardware configurations across a much smaller footprint**.

So it’s not -- that’s part of that whole transformation, that completely new way of doing things that is fundamental. It’s software development and automation, that’s one piece. It’s homogenization, commoditization, and standardization, that’s another piece. It’s service based delivery models. So I think the part of the focus of an Amazon or a Google is 24x7 service delivery that in many cases, many enterprise use cases, doesn’t really exist.

And the fourth is what I call sort of more the layered service architecture. So if you look at Google, I have got these data centers that are designed for certain efficiencies around power and cooling. And then I put in very inexpensive hardware. And then I put in software like Google FS which turns a bunch of that hardware into storage. And then I layer BigTable on top of that which gives me a columnar database, which leverages Google Storage, Google FS. And then I put MapReduce on top of BigTable, which leverages the columnar database to do data processing. And so then I put my applications on top of that.

So I have got Gmail and I have got Search and I have got Google Apps and all of those things share that same stack of software and hardware. Every single one of them uses Google FS. Every single one of them uses BigTable and MapReduce. And you just don’t -- they are getting a certain amount of efficiency, both at the hardware and at the capital and the operational side by doing that, and that’s very, very difficult for an enterprise which is used to having very specific bespoke requirements for every single application that gets deployed in the data center.

**Michael Coté:** Yeah. I mean, that’s interesting because that makes me think of that -- one of the things that cloud computing has done is, it has introduced the next generation of legacy software, if you will. I mean, I used to think of legacy software as sort of like AS/400 stuff and things on mainframes and kind of like that weird gray area between mainframe and enterprise computing before Windows came around.

But to some extent, like drawing from what you were just saying, there is sort of this new class -- there is a ton of legacy software out there now that most people don’t think of as legacy software, assuming this cloud thing has legs, if you will, which -- it’s kind of instructive to think of it that way, because people like IBM and other people have figured out how to keep legacy software alive, if you will.

And it’s kind of -- I mean, it’s not cheap necessarily, but it’s sort of possible. But I think what’s interesting is to sort of apply those same strategies to, like, the bulk of software that we have now and start thinking about what -- if you believe in all this cloud stuff like what you would need to do to get to those greenfield things? Because that does seem to be a lot of what the painfulness of cloud transitions that I hear about is, is essentially all that software that you have, it’s not really going to work in this new way of doing things.

And it’s almost like it is what it is and the cost structures are only going to be improved a little bit by -- you can virtualize something and do some things here and there, but there is a certain ceiling you are going to hit that you are not -- or a floor I guess, that you are not really going to get much past unless you do a lot of serious rewriting.

**Randy Bias:** Right. Again, I like to go back in history, and if you look at some of the transition from mainframe computing to enterprise computing, people made a lot of these same kinds of decisions there as well.

One of the examples I like to give is Kaiser Permanente. I mean, they have their electronic healthcare record system is still running 100% on mainframes. They have spent 10 or 100x, but it’s the core competitive differentiation as a business, and it works, and they are happy. So maybe they will never move it off a mainframe, and that’s totally okay.

And then you have got some other businesses, like there is a financial company in Korea that we spent some time with, and they started out on mainframes but now everything runs on RISC UNIX boxes, but it’s all COBOL. They use a mainframe emulation technology called Mainframe Rehosting. So Mainframe Rehosting basically allowed them to deprecate all those mainframes and to adopt and mask without changing their business process or their applications, which don’t run like they are on the mainframe.

And I think we are going to see all of that and we are also going to see sort of that same kind of Salesforce.com adoption model, which is, I have got us AP deployed and I can keep spending millions to maintain it to map it to my business process, or I can just go outside the firewall and use somebody else’s service, because it’s CRM, I just need my sales guys to be effective.

So I think we are going to see everything between, it’s never moving, to it’s moving with some kind of enabling technology. Like the current example of this is CloudSwitch, which allows you to take sort of that legacy application and just wrap it in a bubble and stick it out there unchanged, to I am going to adopt something new and I am just going to migrate away from my current application usage. And it’s going to be either a new service I rebuild internally that’s cloudy or somebody else’s service outside.

**Michael Coté:** Yeah, yeah. I have been using the phrase recently, “if ain’t broke, don’t cloud it,” which sort of -- it applies to -- that’s kind of like a legacy modernization term. To exactly your point, like there are plenty of people, not a lot, but there are plenty of people running stuff on mainframes and it works perfectly fine so why would you screw with it? Assuming that the costs are fine and all that kind of business, but if there is not something fundamentally wrong with some piece of technology or something wrong with it, including the cost, then it’s better to kind of look at other stuff that you would move along the technology spectrum, if you will, or modernize it seems.

Anyhow, well, I think we have kind of filled up an hour, so that was very exciting. I knew we would have a lot of fun stuff to talk to. We’ve gone through all sort of exciting scheduling carouseling to finally find a time that works for both Randy and I. So, I am glad we found the time to set aside and just kind of a chatter about the stuff you see in the cloud area.

**Randy Bias:** Yeah, that was awesome Coté. Thanks.

**Michael Coté:** Yeah, and we’ll see everyone next time.

**About RedMonk**
RedMonk is the first and only "maker" focused industry analyst firm. We believe that developers, operations staff, and those who are on the front lines of implementing and using IT are the most important constituency in technology.

We focus on how new and old technologies are being applied by these makers to run businesses and help achieve the goals of their organizations. RedMonk advises both buyers and sellers of technology, providing all of our research for free at RedMonk.com in the form of blogs, podcasts, videos, presentations, and other mediums.

While it’s impossible given the breadth to simply distill our coverage and views, the core thesis that guides much of our work is that technology adoption is increasingly a bottom up proposition. The supporting evidence abounds; think Linux, Apache, MySQL, PHP, Firefox, Cloud Computing, Eclipse, and the consumerization of IT. All of these are successful because they’ve built from the ground floor, often in grassroots fashion.


> 
> 
So the question we pose to you is this: you may have analysts that help you understand top down. Who do you have that does bottom up?

www.RedMonk.com Copyright © RedMonk, LLC 2011</blockquote>
