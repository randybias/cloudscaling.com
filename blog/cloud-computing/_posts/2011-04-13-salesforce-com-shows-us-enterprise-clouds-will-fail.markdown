---
author: Randy Bias
comments: true
date: 2011-04-13 18:09:19+00:00
layout: post
slug: salesforce-com-shows-us-enterprise-clouds-will-fail
title: Salesforce.com Shows Us Enterprise Clouds Will Fail
wordpress_id: 1858
old_categories:
- Cloud Computing
tags:
- SFDC
---

_NOTE: This posting will make a lot more sense if you read my previous posting on **[Enterprise Cloud Myths](http://cloudscaling.com/blog/cloud-computing/salesforce-com-shows-us-enterprise-clouds-will-fail)**._

The success of Salesforce.com (SFDC) can teach us a lot about cloud and the emergence of new disruptive business models.  In fact, SFDC can also educate us about why the notion of so-called "[enterprise clouds](http://cloudscaling.com/blog/cloud-computing/cloud-connect-2011-wrap-up)" may be essentially flawed.  Here, I'm referring specifically to infrastructure clouds or 'Infrastructure-as-a-Service' (IaaS).

SFDC popularized a whole new category of on-demand service called [Software-as-a-Service (SaaS)](http://en.wikipedia.org/wiki/SaaS), that most people are familiar with now.  SaaS was largely a response to an earlier failed business model called "Application Service Providers" or ASP.  The ASP model focused on delivering off-the-shelf applications in a hosted model over the Internet.  The Wikipedia article linked to above says:


Software as a service is essentially an extension of the idea of the ASP model. The term _Software as a Service (SaaS)_, however, is commonly used in more specific settings: whereas most initial application service providers focused on managing and hosting third-party [independent software vendors](http://en.wikipedia.org/wiki/Independent_software_vendor)' software, contemporary software-as-a-service vendors typically develop and manage their own software


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


This acronym refers to "Application Service Provider". ASPs generally load an application (like Oracle Small Business Suite or SAP) on a remote server, and then allow customers to access that application for a monthly or annual rental fee. This service is also referred to as "Hosting". Popular ASPs include IBM, EDS, Future-Link, and the Taylor Group.


While amusing, what can ASP teach us about SaaS and enterprise clouds vs. commodity clouds?

The most important attribute of the ASP model is that it's single-tenant and highly silo'ed.  Meaning that, unlike SaaS, multi-tenancy is not a critical element.  With SaaS, multi-tenancy being a first order attribute means that the addition of users or capacity is at a reduced marginal cost.  Whereas with ASPs, each new user/customer requires a whole new 'silo' or instantiation of the software and underlying hardware (virtualized or not) supporting it. Unlike SaaS, ASP's depend on delivering someone else's application with little or no value add.  It's not your own software.  Most ASPs required long term contracts and used monthly invoices instead of credit cards, like SaaS.

Does this sound familiar?  Amazon Web Services (AWS) has delivered a model for IT infrastructure (aka 'Infrastructure-as-a-Service') reminiscent of SaaS.  However, others who have copied AWS but 'fixed' their business model for enterprises, made some interesting compromises:



	
  * Reduce or eliminate multi-tenancy to guarantee 'performance', 'security', 'auditability'

	
  * Use someone else's software/hardware and simply 'assemble' the IaaS with little or no value add

	
  * Eliminate credit card charges in favor of contracts and monthly billing to make it 'easier' for enterprises to consume

	
  * Maintain a high end user price because they had no way to cut costs on software they didn't create and sprawling redundant infrastructure


So, of course, you can see where all of this is going.  Enterprise IaaS clouds are more like ASPs and the argument for enterprise clouds is a lot like suggesting we get rid of SaaS in favor of ASPs again, while ignoring the unique properties of SaaS that made it a compelling and successful business model.

And here's the punchline: regardless of whatever argument you can make for or against this line of thought, enterprises are **widely** adopting both SFDC/SaaS and AWS/IaaS. Commodity clouds are winning, not enterprise clouds and if this is true:


EnterpriseCloud : ASP :: CommodityCloud : SaaS


Then you would be better betting on the commodity cloud approach.
