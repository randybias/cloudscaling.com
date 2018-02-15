---
author: Randy Bias
date: 2017-07-18
layout: post
slug: aas-backwards-services-as-a-platform
title: "*aaS Backwards: Services as a Platform"
featured: true
---

Semantics.  You can’t get away from them.  

Any good argument worth having is full of nuance, articulated largely through differences in definitions.  When there is no disagreement, like "alternative facts aren’t facts", semantics don’t matter, because we all know it is just spin.  Real discussion comes through exploring the nuance in semantic differences.  That is where our story starts.  

Platform-as-a-Service (PaaS) simply doesn’t give us what we need to understand where cloud is going in the future.  A new phrase, coined by Lew Tucker and James Urquhart, needs to be brought into stark relief: [Services-as-a-Platform](https://gigaom.com/2014/01/25/enough-paas-vs-iaas-the-cloud-is-really-about-services-as-a-platform/) (SaaP).  In this article I want to go into much more detail about what Lew and James were talking about.  You need to understand it, because not only does it directly affect public cloud adoption, but it inherently affects private cloud strategy within the enterprise.

## Defining PaaS & SaaP

My definition of PaaS has been consistent from the beginning of this cloud journey more than 10 years ago:

**Platform-as-a-Service (PaaS)**: A "load your code and go" system for developers

What I mean by this is that developers want to develop within a relatively constrained framework, in a relatively deterministic manner, and push code from environment to environment by simply referring to a particular commit in a source code repository.  Examples of this are CloudFoundry, OpenShift, and AWS Elastic Beanstalk.

SaaP is quite a bit different.  My working definition is as follows:

**Services-as-a-Platform (SaaP)**: Composable, reusable services optimized for DevOps, managed via API, and meant to be assembled into a customized PaaS that is application specific by DevOps teams

Examples of the services that would be part of a SaaP include RDBMS, NoSQL, messaging/queuing, speech2text, MapReduce, DNS, and directory services.  None of these services are strictly part of Infrastructure-as-a-Service (IaaS).  Nor are they, by themselves, part of PaaS, although they are frequently a subset of PaaS.

### What’s the Difference?

The key difference between PaaS and SaaP is that a PaaS is more like a constrained system, whereas SaaP can be consumed a la carte.  Another difference is that unlike a PaaS, elements of SaaP may be used individually as a service that supports no specific application.  In fact, in this case a SaaP isn’t even specific to developers.  It could be used by infrastructure operators, individuals, or even business folks.  A good example of this is AWS Route53 (DNS-as-a-Service).

The following table is an attempt to sum up these differences.

| Aspect | PaaS | SaaP |
| --- | --- | --- |
| Consumer target | Developers | Developers and operators |
| Architectural model | Constrained | Microservices / composable |
| Consumption model | prix fixe | a la carte |

#### Understanding "Platforms" with Microsoft .NET

The term "platform" can be overused and underspecified.  Examples include Microsoft operating systems and their code development environments (.NET), the Android and iOS systems, and Java and its ecosystem.  Let’s take .NET as our example.

If you develop to the .NET framework and its ecosystem, you get a tremendous amount of leverage as a developer.  Many of the nuts and bolts of what you need to write your code, such as performing DNS lookups, accessing databases, looking up information in directory services, just works out of the box.  But, if you don’t like the way that these capabilities are provided to you it can be extremely difficult to swap them out.  And it can be completely onerous to write your own.

So, you develop within a constrained framework, knowing that you get a certain amount of leverage and acceleration by using the built-in capabilities and services.

This is what leveraging a platform means to a developer.  This is why PaaS is defined as above.  Platforms constrain choice.  That’s an inherent aspect of what building a platform means, and it’s integral to the value proposition of a platform.

SaaP is very different.  It is inherently about offering choice: 

> "Here, developer, is a smorgasbord of services that may be helpful in supporting your application.  Use one, some, or none.  Integrate to other external services, add your own, or however you like it." 

You, the developer—usually in concert with at least some operations-minded folks, if not operators themselves—assemble what you need into a true platform that is specific to your application needs.

An example of this at work is the highly visible work at Netflix, where they combined sets of AWS services with their [Netflix OSS](https://netflix.github.io/) (open source software) stack to create a [PaaS specific to Netflix needs](https://arstechnica.com/information-technology/2016/02/netflix-finishes-its-massive-migration-to-the-amazon-cloud/).

## A Picture is Worth a Thousand Words

What is Amazon building then?  IaaS, PaaS, or SaaP?  Well, all of the above, but in terms of the sheer number of services provided, SaaP dominates.  There is a huge variety of services that can be assembled to support your application needs.

The following diagram brings it home.

![AWS is SaaP](/assets/media/2017/saap-images.001.jpeg)

Yes, certainly more users take advantage of baseline capabilities like EC2 and S3. However, Amazon wouldn’t have invested so heavily in building out such a large set of services for developers if they didn’t see the value in SaaP.  This is their point of differentiation (and lock-in) and it is working fantastically for them so far.  If we were to map out Google Cloud Platform and Microsoft Azure you would see something very similar.

Over time expect the blue boxes in the graphic above to explode in quantity.

## What this Means for Public & Private Cloud

The first, most obvious thing, which I still find myself repeating to this day is:

> "Cloud" has little or nothing to do with VMs on demand (nor has it ever)

The second, less obvious thing to understand is that competing with the public cloud means developing an ecosystem of SaaP services.  Without this you simply cannot compete effectively.

_**Private cloud efforts focused only on VMs-on-demand are failed right out of the gate just by this alone.**_

A real private cloud mimics the value of the public clouds.  But developing all of this ecosystem is beyond the average enterprise?  Probably this is true, but the reality is that open source equivalents for most of those AWS SaaP services already exist:

![Building SaaP Internally](/assets/media/2017/saap-images.002.jpeg)

In other words, it is possible to build your own SaaP inside your business as a private cloud that enables developers.  In fact, when you look at the most successful private cloud deployments today, they all do this.  And they take it further, providing business-specific services as part of their SaaP that can be consumed across multiple applications.  Examples include payment processing, image processing, and the like.  It’s easier to develop "secret sauce" when you know that any new service like this is designed to be composable and reusable across multiple internal services and applications.

### A Brief Aside on Kubernetes and Helm

If you are reading between the lines you can see that one way to potentially enable your business is to take many of these open source technologies, load them into containers and [Kubernetes](https://kubernetes.io/), and to build [Helm](https://helm.sh/) charts to deploy and manage the full lifecycle of these deployed services.

It is beyond the scope of this particular blog posting to go into details on why this is the right approach, but it is.  I can already see many people backing into this methodology without realizing what they are doing, without understanding SaaP, and simply just trying to get to that end goal we all want.

## Cloud, You Could be Doing it Right

Clouds are a big deal and a big investment, whether public or private.  They are changing the way that we think about delivering IT services and capabilities.  In combination with DevOps and our changing relationship with data, they are helping to increase speed of delivery while also enabling greater nimbleness.  

However, they must be built correctly.  Infrastructure by itself is useless.  Constrained platforms by themselves cannot cover every contingency.  And software consumed as a service typically solves only point problems like CRM and billing.

To succeed in changing your business and entering the cloud game you must understand what SaaP is, why it is a bit different that what many of us have been thinking historically, and why embracing it, either as a consumer or an enabler, is at the heart of any cloud strategy.

SaaP now. The train is leaving the station...

