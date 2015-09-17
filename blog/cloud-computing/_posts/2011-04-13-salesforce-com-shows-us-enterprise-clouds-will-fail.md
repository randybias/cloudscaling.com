---
title: 'Salesforce.com Shows Us Enterprise Clouds Will Fail'
link: http://cloudscaling.com/blog/cloud-computing/salesforce-com-shows-us-enterprise-clouds-will-fail/
author: Randy Bias
description: 
post_id: 1858
created: 2011/04/13 11:09:19
created_gmt: 2011/04/13 18:09:19
comment_status: open
post_name: salesforce-com-shows-us-enterprise-clouds-will-fail
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Salesforce.com Shows Us Enterprise Clouds Will Fail

_NOTE: This posting will make a lot more sense if you read my previous posting on **[Enterprise Cloud Myths](/blog/cloud-computing/salesforce-com-shows-us-enterprise-clouds-will-fail)**._ The success of Salesforce.com (SFDC) can teach us a lot about cloud and the emergence of new disruptive business models.  In fact, SFDC can also educate us about why the notion of so-called "[enterprise clouds](http://cloudscaling.com/blog/cloud-computing/cloud-connect-2011-wrap-up)" may be essentially flawed.  Here, I'm referring specifically to infrastructure clouds or 'Infrastructure-as-a-Service' (IaaS). SFDC popularized a whole new category of on-demand service called [Software-as-a-Service (SaaS)](http://en.wikipedia.org/wiki/SaaS), that most people are familiar with now.  SaaS was largely a response to an earlier failed business model called "Application Service Providers" or ASP.  The ASP model focused on delivering off-the-shelf applications in a hosted model over the Internet.  The Wikipedia article linked to above says: 

> Software as a service is essentially an extension of the idea of the ASP model. The term _Software as a Service (SaaS)_, however, is commonly used in more specific settings: whereas most initial application service providers focused on managing and hosting third-party [independent software vendors](http://en.wikipedia.org/wiki/Independent_software_vendor)' software, contemporary software-as-a-service vendors typically develop and manage their own software

So, for example, you might see a list of off-the-shelf ASP applications from ISVs such as: 

  * SAP
  * Oracle Financials
  * Discrete and Flow Manufacturing
  * Order Management
  * Self-Service Applications
  * Human Resources
  * Projects
  * Business Intelligence
  * Sales Applications
As we all know, the ASP business model bombed and bombed hard.  Looking back at [some](http://news.centurylink.com/index.php?s=43&item=1735) of [these](http://www.kmworld.com/Articles/Editorial/Feature/Application-service-providers-Evolving-to-meet-market-needs-9187.aspx) [websites](http://accountingsoftwareworld.com/index.php?option=com_content&view=article&id=65&Itemid=161) that talk about ASP during it's heyday (~2000) is enlightening.  That last link provides us with this (at the time) crisp definition of ASP: 

> This acronym refers to "Application Service Provider". ASPs generally load an application (like Oracle Small Business Suite or SAP) on a remote server, and then allow customers to access that application for a monthly or annual rental fee. This service is also referred to as "Hosting". Popular ASPs include IBM, EDS, Future-Link, and the Taylor Group.

While amusing, what can ASP teach us about SaaS and enterprise clouds vs. commodity clouds? The most important attribute of the ASP model is that it's single-tenant and highly silo'ed.  Meaning that, unlike SaaS, multi-tenancy is not a critical element.  With SaaS, multi-tenancy being a first order attribute means that the addition of users or capacity is at a reduced marginal cost.  Whereas with ASPs, each new user/customer requires a whole new 'silo' or instantiation of the software and underlying hardware (virtualized or not) supporting it. Unlike SaaS, ASP's depend on delivering someone else's application with little or no value add.  It's not your own software.  Most ASPs required long term contracts and used monthly invoices instead of credit cards, like SaaS. Does this sound familiar?  Amazon Web Services (AWS) has delivered a model for IT infrastructure (aka 'Infrastructure-as-a-Service') reminiscent of SaaS.  However, others who have copied AWS but 'fixed' their business model for enterprises, made some interesting compromises: 

  * Reduce or eliminate multi-tenancy to guarantee 'performance', 'security', 'auditability'
  * Use someone else's software/hardware and simply 'assemble' the IaaS with little or no value add
  * Eliminate credit card charges in favor of contracts and monthly billing to make it 'easier' for enterprises to consume
  * Maintain a high end user price because they had no way to cut costs on software they didn't create and sprawling redundant infrastructure
So, of course, you can see where all of this is going.  Enterprise IaaS clouds are more like ASPs and the argument for enterprise clouds is a lot like suggesting we get rid of SaaS in favor of ASPs again, while ignoring the unique properties of SaaS that made it a compelling and successful business model. And here's the punchline: regardless of whatever argument you can make for or against this line of thought, enterprises are **widely** adopting both SFDC/SaaS and AWS/IaaS. Commodity clouds are winning, not enterprise clouds and if this is true: 

> EnterpriseCloud : ASP :: CommodityCloud : SaaS

Then you would be better betting on the commodity cloud approach.

## Comments

**[Russell Wurth](#3028 "2011-04-13 11:47:00"):** Great blog, but I'm not sure I agree with the tag 'commodity' to define the widely adopted SaaS services. It implies that there is little/no differentiation between the SaaS offerings. But I see what you are getting at, the shared resource model (sharing infrastructure, logic, processes) is winning out versus the dedicated resource model (single tenant infrastructure, logic, and processes with no reuse, higher cost to provision and manage). It seems as if the enterprise cloud offerings are chasing after the very small handful of large niche enterprises that need this type of solution, rather than the SaaS and AWS models that are seeing much larger adoption in numbers of companies, not necessarily their size of consumption

**[Darryl Eaton](#3029 "2011-04-13 12:49:00"):** Not only are enterprises widely adopting both SFDC/SaaS and AWS/IaaS, many companies are ditching or avoiding on-premise products to focus solely on SaaS/Cloud, betting that this is the end game. Just last week, Aprigo said [they too are end-of-lifing their on-premise software](http://blog.cloudlock.com/2011/04/05/whats-in-a-name-change-aprigo-becomes-cloudlock/). They even went so far as to rename their whole company CloudLock. Enterprises change slowly, though. There may be a market for these Enterprise clouds during this transition. And hopefully companies like CloudLock can survive long enough w/o on-premise software until they do come around.

**[vCider](#3030 "2011-04-13 19:40:00"):** Hey Randy, great post. However, let me just say that I agree 100% with your facts, but don't reach the same conclusion. I don't hear anyone suggesting we get rid of SaaS. And even if commodity clouds are winning (to which I agree), that doesn't mean that enterprise clouds can't win too. I think your argument has convinced me that these two markets are sufficiently distinct that each can thrive. Success for an enterprise cloud will not be measured against what might be possible with a commodity cloud, but rather by what it replaced within the enterprise. And we all know that that's a low bar to clear.

**[randybias](#3031 "2011-04-13 19:42:00"):** I guess the article is not clear enough. I'm referring to IaaS clouds exclusively here.

**[vCider](#3032 "2011-04-13 19:49:00"):** Some nomenclature confusion on my part. After listening to your podcast w/Cote, I should have understood that...

**[randybias](#3033 "2011-04-13 19:59:00"):** No worries. I updated to clarify. You weren't the only one confused.

**[Isaac Rabinovitch](#3034 "2011-04-24 21:32:00"):** "NOTE: This posting will make a lot more sense if you read my previous posting on Enterprise Cloud Myths." Alas, the link you provide is to this page!

