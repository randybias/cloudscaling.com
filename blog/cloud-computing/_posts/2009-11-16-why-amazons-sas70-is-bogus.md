---
title: "Why is Amazon's SAS70 Audit Bogus?"
link: http://cloudscaling.com/blog/cloud-computing/why-amazons-sas70-is-bogus/
author: Randy Bias
description: 
post_id: 805
created: 2009/11/16 07:39:29
created_gmt: 2009/11/16 15:39:29
comment_status: open
post_name: why-amazons-sas70-is-bogus
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Why is Amazon's SAS70 Audit Bogus?

At first glance it seems like Amazon's [recent announcement](http://aws.amazon.com/about-aws/whats-new/2009/11/11/aws-completes-sas70-type-ii-audit/) of a successful [SAS70](http://en.wikipedia.org/wiki/SAS70) audit is grounds for celebration[1]. Certainly it has met with fanfare on [Twitter](http://search.twitter.com/search?q=&ands=SAS70+AWS&phrase=&ors=&nots=&tag=&lang=all&from=&to=&ref=&near=&within=15&units=mi&since=&until=&rpp=15) and [blogs](http://blogsearch.google.com/blogsearch?client=safari&rls=en&q=sas70%20amazon%20web%20services&oe=UTF-8&um=1&ie=UTF-8&sa=N&hl=en&tab=wb). Unfortunately, a SAS70 audit isn't what most people think it is. Worse yet, Amazon's reluctance to provide details of the audit provides a false sense of security with no tangible benefits. Let me explain. **Understanding the SAS70 Audit **The SAS70 is a methodology for performing an audit, not the audit rules themselves. The SAS70 can prove whatever you decide it needs to prove. From taking the garbage out to turning the lights on. From [Wikipedia](http://en.wikipedia.org/wiki/SAS70): 

* * *

_SAS 70 defines the professional standards used by a service auditor to assess the internal controls of a service organization and issue a service auditor’s report._

* * *

Here's how it works. For a SAS70, you must specify a series of "controls" and "control objectives". Like it sounds, you are asserting that a given 'control' meets a goal or objective. An example of a control might be the 'new user creation process' or a 'firewall'. An example of a control objective might be the following[2]: 

* * *

_The new user creation process MUST guarantee that a user's password is at least 8 characters long and composed of a mix of at least one uppercase, one lowercase, and one numerical character._

* * *

Once all of the control objectives are in place an outside auditor, like Deloitte & Touche, comes in and verifies that you are compliant with the stated control objectives over a period of time. If it is a Type 1 audit the period is 3 days. If it is a Type 2 the period is 6 months. Now here's the rub: Who decides what the control objectives are? An outside agency? A regulatory body? None of the above. The company being audited decides and can make the control objectives anything they like. Here's a [SAS70 FAQ response](http://www.sas70.com/faq/faq14.html) on the topic right from the SAS70.com website. Again, _the SAS70 is just an auditing framework_. Why then do so many think it's useful? **Background on the SAS70 Audit** The SAS70 comes out of the financial industry and is a relatively generic framework for that reason. The financial industry has tons of different regulatory requirements that vary from state to state and country to country. Moreover, within the financial industry these kinds of audits are undertaken all of the time, the parties involved know what they are testing for, and how to negotiate it. For example, a large bank might outsource work to a secondary institution and have a desire to see that institution provide proof they are following certain guidelines or regulations. A good example is the [Bank Secrecy Act](http://en.wikipedia.org/wiki/Bank_Secrecy_Act). The large bank in this case knows what the BSA requires and how to evaluate the secondary institution's SAS70. This knowledge allows them to assess secondary institution's level of compliance with the BSA. At the same time, the secondary institution is familiar with what its large partners will require and sets up its annual Type 2 to cover the 'usual suspects' of controls and control objectives. So how did we get here? **Hosting Companies and the SAS70** In recent years as financial institutions began to outsource they required that various hosting (and other) businesses perform the audit as well. Unlike their usual partners it hasn't been clear what hosters need to be compliant with. Because of this most folks have simply done these SAS70s as simple Type 1s that are one-offs. This allowed the hosters to keep their costs down while allowing the bank to outsource and the hosters to generate revenue. Here's the problem: _Cloud computing is ushering in whole new ways of delivering IT services._ It demands greater transparency than ever, especially when it comes to security. If the average person doesn't understand the SAS70 and if you don't provide your control objectives so that others can vet the objectives you sold then you are creating a false sense of security. You could have one control objective that simply says: "we must keep the power in the data center on" and successfully pass by fulfilling that over 3 days or 6 months. **The Need For A Cloud Security Standard** There are a couple of security and IT standards that can be used as the basis for a **good** SAS70 audit. For example there is [CoBIT](http://en.wikipedia.org/wiki/Cobit) and the [ISO27002](http://en.wikipedia.org/wiki/ISO17799) (formerly ISO17799). There are probably others I'm unfamiliar with. Unfortunately, most of these standards really focus on the Enterprise and not on a multi-tenant public cloud or hosting companies, who have some issues specific to their particular business models and architectures. So, even if Amazon used one of these, _it's still not good enough_ for them to keep their controls and control objectives hidden from public view. How are we to be certain that they are sufficient? [3] **Summary** Until there is a security standard for running a cloud then SAS70 audits with unpublished controls and control objectives like the recent AMZN announcement are simply smoke and mirrors. They provide little or no real assurance to the average consumer of the AWS public cloud and serve only to provide a false sense of security. **UPDATE**: @wpauley says he has a copy of the AWS controls, but I haven't seen them yet. When I get a copy I will post them. **UPDATE2**: Apparently @wpauley was a special case. AWS is keeping the controls under wraps. If you have a copy send them to me anonymously and I will get them posted. 

* * *

[1] Even the recent refresh of the [Amazon Security Whitepaper](http://bit.ly/kUFig) (PDF) does not include details on the controls or control objectives [2] Been a while since I was involved in a SAS70 and there is a specific language they use that I've forgotten. Did not find any examples on the net. Appreciate clarifications in comments below if you have them. [3] I think this raises a broader question, which is should **any** public cloud ever be allowed to keep their SAS70 controls and control objectives hidden? There is a very nominal argument for security through obscurity, but the reality is that many people will have to see them anyway, so why not shed some light?

## Comments

**[wpauley](#388 "2009-11-16 08:24:01"):** Randy,  
  
I think there is more to this than that the audit is "worthy of fanfare" or it is "bogus".   
  
I ran the technical side of a managed service provider for 5 years and have also been responsible for some fairly large operations in and around New England. We had external parties come in and do security audits, PII audits, etc. When we had the results we shared the outcome of the audits with our paying customers. We also messaged the use of the auditing process as a differentiator in our sales and marketing. But we didn't just post the audit information to the public. A good example of this is what ADP does (<http://www.adp.com/advisor/vol17no1/4.html>) - they have the audits done, they share the applicable elements of the audit on request to their paying customers.   
Now will AWS share their audit results with a paying customer? I don't know (though I have asked them via email earlier today).   
  
In the end cloud is still evolving and providers are still learning to adapt and adjust to the needs of their customers and what it takes to land "new customers". After reviewing a good number of different cloud providers SLA's, Security whitepapers, and privacy statements - I've come away with the following:  
  
\- Transparency isn't the goal - the goal is to provide reliable services to customers with adequate protections.  
\- There is a need for the standards that do exist to be adapted to service providers (e.g. ISO 27005, NIST SP80-300, etc.).  
\- Service levels vary a lot – 99.5%, 99.95%, a lack of aggregate levels, some with guarantee’s, and ITIL doesn’t seem to be in the US providers vocabulary yet which is a shame because v3 has some excellent service provider extensions.  
  
I will be posting a blog on my findings soon – I’m trying to study a few more providers to look at and to see if they respond to some of my direct (via email) questions first.  
  
Great topic - Thanks.  
  
/wayne

**[randybias](#389 "2009-11-16 08:55:22"):** Hi Wayne,  
  
  
Thanks for your thoughtful reply. I am not asking for the audit   
results, just the controls and control objectives themselves. There is   
a difference.  
  
I am aware of how these audits are used within the hosting   
industry. Regardless, the lack of a cloud specific set of practices is   
a serious problem.  
  
With regard to Amazon, we are talking about a business that   
embraces opacity as modus operandi. It's no secret that they are   
widely known for sharing little or no information and that larger   
enterprises consider them hard to work with.  
  
My point being that greater transparency by pushing clouds and   
hosting providers to provide clear information on their controls and   
control objectives for the SAS70 can only help the marketplace in   
aggregate. Just saying: "we have a SAS70 audit!" isn't good enough   
since we can't evaluate what that means.  
  
Unless perhaps you mean that only the largest customers should be   
allowed this information? If so, I obviously have a serious quibble   
with that argument.  
  
  
Best,  
  
  
\--Randy

**[uberVU - social comments](#390 "2009-11-16 09:06:00"):** **Social comments and analytics for this post...** This post was mentioned on Twitter by HighTechDad: RT @randybias: Please RT: Why is Amazon's SAS70 Audit Bogus? Because it tells us nothing. Here's my post: http://is.gd/4WkK2...

**[wpauley](#392 "2009-11-16 10:41:32"):** Randy,  
  
If I were to wear a cloud providers "customer" hat - the free "customer" - you get what is available on the portal. For the "volume" paying customer - this has to be self-service for the most part so how do you share controls without worrying about them going out to anyone anywhere? If you are the "value" paying customer - I agree - I'd like to know the controls and control objectives. This comes down to choice - if a cloud provider is not willing to provide such information to a paying customer then I have the choice to take my business elsewhere.   
  
Also as a customer I would be also concerned if the controls were published in the public domain because it would provide a map to anyone who wanted to find weaknesses in the controls and try to exploit them. There has to be a balance of what is provided and not.  
  
I spent some time looking at RightScale and GoGrid too - the notion of using someone to front-end the experience on a large provider like AWS or even build a hybrid where systems are provisioned on multiple backend providers - what happens then? Are the policies and controls transitive? Some of the providers have established   
  
What if you are not satisfied with copies of the data protecting your data and you want real backups or require HIPAA/SOX/PII controls? Now you may engage yet another party as part of the service-stream. This starts to diffuse the customers understanding of the protections in place as well as make it a lot more challenging for the service-stream of providers troubleshoot the problem (likely creating another service opportunity! :)  
  
I think there has to be a balance and I think if we did have standards that could provide some level of expectation setting for both sides - then we'd be better off. One example I like to use that generally creates a polarized response is the "credit score" - if we could have a risk score for privacy protections that was like the credit score then it might be possible to understand where you are in terms of risk and if/when you add others to the service stream that score is adjusted accordingly.  
  
Also it would be useful if the cloud providers considered using more feedback mechanisms like the "password strength meter" you see these days to show you when you do something or add something to your use of their services that improves or deprecates your service level or security posture.  
  
Just some more thoughts - again a great topic!  
  
/wayne

**[randybias](#393 "2009-11-16 11:58:22"):** I think that hiding the controls as a security measure is overblown. Security through obscurity is generally considered to be a poor substitute for real security measures. Not only this, but AWS could simply follow one of the two specs that I mentioned, like CoBIT or ISO27002, or a subset/derivative, and say so, so we know that they are doing something 'real'. Once that is done, you know what the controls and control objectives are, right? So why hide them?  
  
As an aside, GoGrid runs their own cloud. There looked like there might be some confusion there in your posting about this.  
  
With regards to the others, yes, it would be just as important for someone like a RightScale to provide transparency as well. Some controls are transitive as RightScale hosts their infrastructure on AWS, but obviously there are limitations to how much is transitive. All of the controls from the Guest OS up would be RightScale's to own, although the network is still AWS. But that's a bit in a weeds. What's important is the general thrust: we need to know and trust public providers.  
  
I like your points regarding the service stream and the general notion that these are going to be hard problems because you have a blend of services. IMHO, that's primarily where the opportunity lies for folks looking to sell services or software to cloud consumers.  
  
Your credit score idea is outstanding. I'd like to see a score card with areas that mapped to larger buckets of controls & control objectives. Then an auditor could provide real value to the consumers and the provider both.  
  
  
Best,  
  
  
\--Randy

**[data recovery](#395 "2010-05-26 02:59:30"):** Amazon is a good site to buy/sell but I preferably like this site because of good collection of books.

**[SSAE 16](#396 "2010-06-10 07:22:14"):** The problem with AWS vs. Another service provider is that AWS wont give out their SAS 70 to a retail customer, like a hosting company would to another business.  
  
Maybe there is a need for a B2C report as well?

**[randybias](#397 "2010-06-10 18:23:36"):** You should take a look at the CloudAudit/A6 work.  
  
\--Randy

**[Wannna](#398 "2010-06-23 09:04:14"):** If a vendor wants to us to rely on a SAS 70 II during our evaluation then they must provide the objectives that the controls being tested were designed to meet. If they are unwilling to do so then we say thanks for the piece of paper but we do not use it during our evaluation

**[Guest](#399 "2010-07-01 15:13:47"):** And btw, your article sources from wikipedia - you clearly need to go to a better source such as the AICPA website.  
  
For example, this statement in your article is completely incorrect: "If it is a Type 1 audit the period is 3 days. If it is a Type 2 the period is 6 months."

**[Guest](#400 "2010-07-01 15:11:37"):** Randy, I do believe you don't fully understand how a SAS70 audit works. The opining auditor is providing an attestation opinion and is responsible for opining on the fact that the controls in the report are "fairly presented" i.e. not bogus, "designed appropriately" and "operating effectively". Also a SAS70 report is not intended for release to a widespread audience per AICPA rules. It CAN ONLY be released to their customers and customer auditors. Not to bloggers :)  
  
That being said, I am not a cloud computing security expert and cannot comment on how the controls in a SAS70 would be applicable to a cloud computing security scenario. After all, the applicability of a SAS70 is for users' financial statement audits.

**[Guest](#401 "2010-07-02 07:44:10"):** As stated above, a SAS70 Type II is NOT a certification, but an attestation by the auditor of a service organization that stated financial controls are fairly presented, designed appropriately, and operating effectively. It is strictly for use in financial statement audits to avoid the service provider being audited every time one of its customers is audited. A Type I omits the tests of effectiveness but is otherwise the same. The service organization chooses the control objectives and controls to be audited to fulfil their clients' audit needs, and if the report does not fulfill those needs then it is useless.

**[Amazon User](#402 "2010-07-03 19:40:04"):** I am a current customer and followed Amazon's request process for obtaining a copy of the SAS70. Amazon responded quickly (as they do to all support requests) and sent a hard copy of the complete audit. With 25 years in senior management at various health care technology companies i can attest to the completeness and appropriateness of the controls in place.

**[randybias](#403 "2010-07-04 04:00:11"):** That's correct. This is why the SAS70 is dangerous for verifying security controls in modern technology businesses. It's really a multi-prong issue:  
  
1) The audit originates from the financial industry and is being shoe-horned to work for technology businesses with different concerns  
2) Auditors are typically not qualified to understand what control objectives should or should not be  
3) Hosting companies and datacenter operators may get SAS70 audits for things like physical facilities while completely ignoring standard INFOSEC best practices  
  
I have personally seen #3 in action a number of times. We need more transparency with SAS70 control objectives. There is no reason not to publish these so that the community can verify that they are reasonable objectives. The results aren't nearly as important as the objectives themselves.

**[randybias](#404 "2010-07-04 03:56:57"):** That wasn't a quote from Wikipedia. That was from my personal experience. A type 1 audit was a review of control objectives, as you point out, over roughly 3 days and a type 2 audit is a review of control objectives and a verification of compliance with the objectives over 'a period' which was usually 6 months. At least, that's what I recall from when I was working in this area. Granted it was almost 10 years ago, but it's close enough for the purposes of this article.

**[randybias](#405 "2010-07-04 03:51:48"):** Given that the SAS70 audit is primarily a financial audit and that most auditors would be unfamiliar with what is relevant in a cloud environment and aren't themselves security experts, I would say that they are probably the least qualified folks to determine what the control objectives are.

**[randybias](#406 "2010-07-04 03:53:38"):** It's great that you feel comfortable with Amazon's controls. I have not seen them so cannot personally say how good they are; however, keeping the control objectives quiet provides no particular value to anyone. Public providers should provide public information about their control objectives.  
  
For an example of one effort, see the CloudAudit website: <http://cloudaudit.com/>

**[Doug Barbin](#407 "2010-07-04 10:32:20"):** Randy,  
  
I hope all is well. As you know, I am a CPA at a firm that does SAS 70 audits, PCI DSS validation, ISO and other compliance assessments. As you also know, I am an active member of cloudaudit. It continues to baffle me why security professionals (and consultants) and CPAs attempt to duke it out over an issue that really sits between the service provider and its customers (and arguably prospects). The issue, as you correctly point out, is about transparency of the security "features" offered by a provider. I blogged on this just over a month ago. <http://www.thepragmaticauditor.com/?p=316>  
  
A couple points. I'll start with "Auditors are typically not qualified to understand what control objectives should or should not be." Given my own background (I used to run Product Management at an MSSP), I'll respectfully disagree, but now as an auditor... its not my job to determine what control objectives should be in place, just to reasonably determine whether or not they are the service provider claims to be.   
  
For context, a SAS 70 (Type II) report typically includes the following hierarchy:  
* Control objectives (high-level and anywhere from 5 - a dozen or so) that are topical in nature such as physical security, back-up, information security, as well as control objectives specific to the service itself referred to as application controls.  
** Control activities (procedures, technical controls, configuration settings, etc.) that tell what the organization is doing to meet the objectives. There can be anywhere from a dozen to scores of them for each control objective. This is the "meat" of what the provider is doing to meet the control objectives. (Note: Your example of a control objective in the original article is actually an activity not an objective.)  
***Tests of controls - The tests applied by the auditor of the control activities and the results. There is always at least one if not two-three tests applied for each control activity.   
  
*. and **. are defined completely by the service provider. The auditor's job is to perform the tests and also determine if the activities (**) provide reasonable assurance for the objectives (*) . This is how you get from a small number of high-level control objectives to a report that could be anywhere from 50-100 pages long. I'd also point out that IF you are privy to a providers SAS 70, you will see that the tests performed are very transparent. You will not see the "proprietary methodology" speak you often see in a security consultant's report.   
  
Most importantly, the end-customers have more influence than they think. At the MSSP, I was responsible for our SAS 70 audits. Every year, I shared the report with the clients that needed it. On occasion, I would get feedback with respect to controls that they'd like to see documented in the report and/or additional tests performed. The next year, those controls and tests would be included. Net-net, that SAS 70 ceased to be a check-box report and become a collaborative means for information sharing and assurance.   
  
A SAS 70 is one tool that has a defined scope and purpose which (I agree with) is not to certify security. PCI, ISO, SysTrust, etc. have theirs as well. I don't see an uber-end-all cloud security standard being widely adopted anytime soon. IMO the best approach is to try to optimize the tools that are being used and leverage mechanisms such as cloudaudit to improve information sharing and ultimately let the end-customers decide.  
  
Happy 4th of July!  
  
Best Regards,  
Doug  
  
PS Good write-up on CloudAudit in Redmond Magazine - <http://bit.ly/aIjpRW>

**[wpauley](#2123 "2009-11-16 09:24:00"):** Randy, I think there is more to this than that the audit is "worthy of fanfare" or it is "bogus". I ran the technical side of a managed service provider for 5 years and have also been responsible for some fairly large operations in and around New England. We had external parties come in and do security audits, PII audits, etc. When we had the results we shared the outcome of the audits with our paying customers. We also messaged the use of the auditing process as a differentiator in our sales and marketing. But we didn't just post the audit information to the public. A good example of this is what ADP does (http://www.adp.com/advisor/vol17no1/4.html) - they have the audits done, they share the applicable elements of the audit on request to their paying customers. Now will AWS share their audit results with a paying customer? I don't know (though I have asked them via email earlier today). In the end cloud is still evolving and providers are still learning to adapt and adjust to the needs of their customers and what it takes to land "new customers". After reviewing a good number of different cloud providers SLA's, Security whitepapers, and privacy statements - I've come away with the following: \- Transparency isn't the goal - the goal is to provide reliable services to customers with adequate protections. \- There is a need for the standards that do exist to be adapted to service providers (e.g. ISO 27005, NIST SP80-300, etc.). \- Service levels vary a lot – 99.5%, 99.95%, a lack of aggregate levels, some with guarantee’s, and ITIL doesn’t seem to be in the US providers vocabulary yet which is a shame because v3 has some excellent service provider extensions. I will be posting a blog on my findings soon – I’m trying to study a few more providers to look at and to see if they respond to some of my direct (via email) questions first. Great topic - Thanks. /wayne

**[randybias](#2124 "2009-11-16 09:55:00"):** Hi Wayne, Thanks for your thoughtful reply. I am not asking for the audit results, just the controls and control objectives themselves. There is a difference. I am aware of how these audits are used within the hosting industry. Regardless, the lack of a cloud specific set of practices is a serious problem. With regard to Amazon, we are talking about a business that embraces opacity as modus operandi. It's no secret that they are widely known for sharing little or no information and that larger enterprises consider them hard to work with. My point being that greater transparency by pushing clouds and hosting providers to provide clear information on their controls and control objectives for the SAS70 can only help the marketplace in aggregate. Just saying: "we have a SAS70 audit!" isn't good enough since we can't evaluate what that means. Unless perhaps you mean that only the largest customers should be allowed this information? If so, I obviously have a serious quibble with that argument. Best, \--Randy

**[wpauley](#2125 "2009-11-16 11:41:00"):** Randy, If I were to wear a cloud providers "customer" hat - the free "customer" - you get what is available on the portal. For the "volume" paying customer - this has to be self-service for the most part so how do you share controls without worrying about them going out to anyone anywhere? If you are the "value" paying customer - I agree - I'd like to know the controls and control objectives. This comes down to choice - if a cloud provider is not willing to provide such information to a paying customer then I have the choice to take my business elsewhere. Also as a customer I would be also concerned if the controls were published in the public domain because it would provide a map to anyone who wanted to find weaknesses in the controls and try to exploit them. There has to be a balance of what is provided and not. I spent some time looking at RightScale and GoGrid too - the notion of using someone to front-end the experience on a large provider like AWS or even build a hybrid where systems are provisioned on multiple backend providers - what happens then? Are the policies and controls transitive? Some of the providers have established What if you are not satisfied with copies of the data protecting your data and you want real backups or require HIPAA/SOX/PII controls? Now you may engage yet another party as part of the service-stream. This starts to diffuse the customers understanding of the protections in place as well as make it a lot more challenging for the service-stream of providers troubleshoot the problem (likely creating another service opportunity! :) I think there has to be a balance and I think if we did have standards that could provide some level of expectation setting for both sides - then we'd be better off. One example I like to use that generally creates a polarized response is the "credit score" - if we could have a risk score for privacy protections that was like the credit score then it might be possible to understand where you are in terms of risk and if/when you add others to the service stream that score is adjusted accordingly. Also it would be useful if the cloud providers considered using more feedback mechanisms like the "password strength meter" you see these days to show you when you do something or add something to your use of their services that improves or deprecates your service level or security posture. Just some more thoughts - again a great topic! /wayne

**[randybias](#2126 "2009-11-16 12:58:00"):** I think that hiding the controls as a security measure is overblown. Security through obscurity is generally considered to be a poor substitute for real security measures. Not only this, but AWS could simply follow one of the two specs that I mentioned, like CoBIT or ISO27002, or a subset/derivative, and say so, so we know that they are doing something 'real'. Once that is done, you know what the controls and control objectives are, right? So why hide them? As an aside, GoGrid runs their own cloud. There looked like there might be some confusion there in your posting about this. With regards to the others, yes, it would be just as important for someone like a RightScale to provide transparency as well. Some controls are transitive as RightScale hosts their infrastructure on AWS, but obviously there are limitations to how much is transitive. All of the controls from the Guest OS up would be RightScale's to own, although the network is still AWS. But that's a bit in a weeds. What's important is the general thrust: we need to know and trust public providers. I like your points regarding the service stream and the general notion that these are going to be hard problems because you have a blend of services. IMHO, that's primarily where the opportunity lies for folks looking to sell services or software to cloud consumers. Your credit score idea is outstanding. I'd like to see a score card with areas that mapped to larger buckets of controls & control objectives. Then an auditor could provide real value to the consumers and the provider both. Best, \--Randy

**[SSAE 16](#2209 "2010-06-10 07:22:00"):** The problem with AWS vs. Another service provider is that AWS wont give out their SAS 70 to a retail customer, like a hosting company would to another business. Maybe there is a need for a B2C report as well?

**[randybias](#2210 "2010-06-10 18:23:00"):** You should take a look at the CloudAudit/A6 work. \--Randy

**[Wannna](#2214 "2010-06-23 09:04:00"):** If a vendor wants to us to rely on a SAS 70 II during our evaluation then they must provide the objectives that the controls being tested were designed to meet. If they are unwilling to do so then we say thanks for the piece of paper but we do not use it during our evaluation

**[Guest](#2219 "2010-07-01 15:11:00"):** Randy, I do believe you don't fully understand how a SAS70 audit works. The opining auditor is providing an attestation opinion and is responsible for opining on the fact that the controls in the report are "fairly presented" i.e. not bogus, "designed appropriately" and "operating effectively". Also a SAS70 report is not intended for release to a widespread audience per AICPA rules. It CAN ONLY be released to their customers and customer auditors. Not to bloggers :) That being said, I am not a cloud computing security expert and cannot comment on how the controls in a SAS70 would be applicable to a cloud computing security scenario. After all, the applicability of a SAS70 is for users' financial statement audits.

**[Guest](#2220 "2010-07-01 15:13:00"):** And btw, your article sources from wikipedia - you clearly need to go to a better source such as the AICPA website. For example, this statement in your article is completely incorrect: "If it is a Type 1 audit the period is 3 days. If it is a Type 2 the period is 6 months."

**[Guest](#2221 "2010-07-02 07:44:00"):** As stated above, a SAS70 Type II is NOT a certification, but an attestation by the auditor of a service organization that stated financial controls are fairly presented, designed appropriately, and operating effectively. It is strictly for use in financial statement audits to avoid the service provider being audited every time one of its customers is audited. A Type I omits the tests of effectiveness but is otherwise the same. The service organization chooses the control objectives and controls to be audited to fulfil their clients' audit needs, and if the report does not fulfill those needs then it is useless.

**[Amazon User](#2237 "2010-07-03 19:40:00"):** I am a current customer and followed Amazon's request process for obtaining a copy of the SAS70. Amazon responded quickly (as they do to all support requests) and sent a hard copy of the complete audit. With 25 years in senior management at various health care technology companies i can attest to the completeness and appropriateness of the controls in place.

**[randybias](#2238 "2010-07-04 03:51:00"):** Given that the SAS70 audit is primarily a financial audit and that most auditors would be unfamiliar with what is relevant in a cloud environment and aren't themselves security experts, I would say that they are probably the least qualified folks to determine what the control objectives are.

**[randybias](#2239 "2010-07-04 03:53:00"):** It's great that you feel comfortable with Amazon's controls. I have not seen them so cannot personally say how good they are; however, keeping the control objectives quiet provides no particular value to anyone. Public providers should provide public information about their control objectives. For an example of one effort, see the CloudAudit website: http://cloudaudit.com/

**[randybias](#2240 "2010-07-04 03:56:00"):** That wasn't a quote from Wikipedia. That was from my personal experience. A type 1 audit was a review of control objectives, as you point out, over roughly 3 days and a type 2 audit is a review of control objectives and a verification of compliance with the objectives over 'a period' which was usually 6 months. At least, that's what I recall from when I was working in this area. Granted it was almost 10 years ago, but it's close enough for the purposes of this article.

**[randybias](#2241 "2010-07-04 04:00:00"):** That's correct. This is why the SAS70 is dangerous for verifying security controls in modern technology businesses. It's really a multi-prong issue: 1) The audit originates from the financial industry and is being shoe-horned to work for technology businesses with different concerns 2) Auditors are typically not qualified to understand what control objectives should or should not be 3) Hosting companies and datacenter operators may get SAS70 audits for things like physical facilities while completely ignoring standard INFOSEC best practices I have personally seen #3 in action a number of times. We need more transparency with SAS70 control objectives. There is no reason not to publish these so that the community can verify that they are reasonable objectives. The results aren't nearly as important as the objectives themselves.

**[Doug Barbin](#2242 "2010-07-04 10:32:00"):** Randy, I hope all is well. As you know, I am a CPA at a firm that does SAS 70 audits, PCI DSS validation, ISO and other compliance assessments. As you also know, I am an active member of cloudaudit. It continues to baffle me why security professionals (and consultants) and CPAs attempt to duke it out over an issue that really sits between the service provider and its customers (and arguably prospects). The issue, as you correctly point out, is about transparency of the security "features" offered by a provider. I blogged on this just over a month ago. http://www.thepragmaticauditor.com/?p=316 A couple points. I'll start with "Auditors are typically not qualified to understand what control objectives should or should not be." Given my own background (I used to run Product Management at an MSSP), I'll respectfully disagree, but now as an auditor... its not my job to determine what control objectives should be in place, just to reasonably determine whether or not they are the service provider claims to be. For context, a SAS 70 (Type II) report typically includes the following hierarchy: * Control objectives (high-level and anywhere from 5 - a dozen or so) that are topical in nature such as physical security, back-up, information security, as well as control objectives specific to the service itself referred to as application controls. ** Control activities (procedures, technical controls, configuration settings, etc.) that tell what the organization is doing to meet the objectives. There can be anywhere from a dozen to scores of them for each control objective. This is the "meat" of what the provider is doing to meet the control objectives. (Note: Your example of a control objective in the original article is actually an activity not an objective.) ***Tests of controls - The tests applied by the auditor of the control activities and the results. There is always at least one if not two-three tests applied for each control activity. *. and **. are defined completely by the service provider. The auditor's job is to perform the tests and also determine if the activities (**) provide reasonable assurance for the objectives (*) . This is how you get from a small number of high-level control objectives to a report that could be anywhere from 50-100 pages long. I'd also point out that IF you are privy to a providers SAS 70, you will see that the tests performed are very transparent. You will not see the "proprietary methodology" speak you often see in a security consultant's report. Most importantly, the end-customers have more influence than they think. At the MSSP, I was responsible for our SAS 70 audits. Every year, I shared the report with the clients that needed it. On occasion, I would get feedback with respect to controls that they'd like to see documented in the report and/or additional tests performed. The next year, those controls and tests would be included. Net-net, that SAS 70 ceased to be a check-box report and become a collaborative means for information sharing and assurance. A SAS 70 is one tool that has a defined scope and purpose which (I agree with) is not to certify security. PCI, ISO, SysTrust, etc. have theirs as well. I don't see an uber-end-all cloud security standard being widely adopted anytime soon. IMO the best approach is to try to optimize the tools that are being used and leverage mechanisms such as cloudaudit to improve information sharing and ultimately let the end-customers decide. Happy 4th of July! Best Regards, Doug PS Good write-up on CloudAudit in Redmond Magazine - http://bit.ly/aIjpRW

**[google](#2326 "2013-06-03 02:26:52"):** **google...** Google http://www.google.com...

