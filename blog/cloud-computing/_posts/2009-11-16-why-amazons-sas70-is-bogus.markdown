---
author: Randy Bias
comments: true
date: 2009-11-16 15:39:29+00:00
layout: post
slug: why-amazons-sas70-is-bogus
title: Why is Amazon's SAS70 Audit Bogus?
wordpress_id: 805
old_categories:
- Cloud Computing
tags:
- amazon
- audits
- aws
- cloud
- sas70
- Security
---

At first glance it seems like Amazon's [recent announcement](http://aws.amazon.com/about-aws/whats-new/2009/11/11/aws-completes-sas70-type-ii-audit/) of a successful [SAS70](http://en.wikipedia.org/wiki/SAS70) audit is grounds for celebration[1]. Certainly it has met with fanfare on [Twitter](http://search.twitter.com/search?q=&ands=SAS70+AWS&phrase=&ors=&nots=&tag=&lang=all&from=&to=&ref=&near=&within=15&units=mi&since=&until=&rpp=15) and [blogs](http://blogsearch.google.com/blogsearch?client=safari&rls=en&q=sas70%20amazon%20web%20services&oe=UTF-8&um=1&ie=UTF-8&sa=N&hl=en&tab=wb).

Unfortunately, a SAS70 audit isn't what most people think it is.  Worse yet, Amazon's reluctance to provide details of the audit provides a false sense of security with no tangible benefits.

Let me explain.

**Understanding the SAS70 Audit**

The SAS70 is a methodology for performing an audit, not the audit rules themselves. The SAS70 can prove whatever you decide it needs to prove. From taking the garbage out to turning the lights on.

From [Wikipedia](http://en.wikipedia.org/wiki/SAS70):



* * *

_SAS 70 defines the professional standards used by a service auditor
to assess the internal controls of a service organization and issue a service auditor’s report._



* * *

Here's how it works.

For a SAS70, you must specify a series of "controls" and "control objectives". Like it sounds, you are asserting that a given 'control' meets a goal or objective.  An example of a control might be the 'new user creation process' or a 'firewall'.  An example of a control objective might be the following[2]:



* * *

_The new user creation process MUST guarantee that a user's password
is at least 8 characters long and composed of a mix of at least one uppercase,
one lowercase, and one numerical character._



* * *

Once all of the control objectives are in place an outside auditor, like Deloitte & Touche, comes in and verifies that you are compliant with the stated control objectives over a period of time. If it is a Type 1 audit the period is 3 days. If it is a Type 2 the period is 6 months.

Now here's the rub: Who decides what the control objectives are?  An outside agency?  A regulatory body?

None of the above. The company being audited decides and can make the control objectives anything they like. Here's a [SAS70 FAQ response](http://www.sas70.com/faq/faq14.html) on the topic right from the SAS70.com website.

Again, _the SAS70 is just an auditing framework_.  Why then do so many think it's useful?

**Background on the SAS70 Audit**

The SAS70 comes out of the financial industry and is a relatively generic framework for that reason. The financial industry has tons of different regulatory requirements that vary from state to state and country to country. Moreover, within the financial industry these kinds of audits are undertaken all of the time, the parties involved know what they are testing for, and how to negotiate it.

For example, a large bank might outsource work to a secondary institution and have a desire to see that institution provide proof they are following certain guidelines or regulations.  A good example is the [Bank Secrecy Act](http://en.wikipedia.org/wiki/Bank_Secrecy_Act). The large bank in this case knows what the BSA requires and how to evaluate the secondary institution's SAS70.  This knowledge allows them to assess secondary institution's level of compliance with the BSA. At the same time, the secondary institution is familiar with what its large partners will require and sets up its annual Type 2 to cover the 'usual suspects' of controls and control objectives.

So how did we get here?

**Hosting Companies and the SAS70**

In recent years as financial institutions began to outsource they required that various hosting (and other) businesses perform the audit as well.  Unlike their usual partners it hasn't been clear what hosters need to be compliant with. Because of this most folks have simply done these SAS70s as simple Type 1s that are one-offs. This allowed the hosters to keep their costs down while allowing the bank to outsource and the hosters to generate revenue.

Here's the problem: _Cloud computing is ushering in whole new ways of delivering IT services._

It demands greater transparency than ever, especially when it comes to security. If the average person doesn't understand the SAS70 and if you don't provide your control objectives so that others can vet the objectives you sold then you are creating a false sense of security.

You could have one control objective that simply says: "we must keep the power in the data center on" and successfully pass by fulfilling that over 3 days or 6 months.

**The Need For A Cloud Security Standard**
There are a couple of security and IT standards that can be used as the basis for a **good** SAS70 audit.  For example there is [CoBIT](http://en.wikipedia.org/wiki/Cobit) and the [ISO27002](http://en.wikipedia.org/wiki/ISO17799) (formerly ISO17799).  There are probably  others I'm unfamiliar with.  Unfortunately, most of these standards really focus on the Enterprise and not on a multi-tenant public cloud or hosting companies, who have some issues specific to their particular business models and architectures.

So, even if Amazon used one of these, _it's still not good enough_ for them to keep their controls and control objectives hidden from public view.  How are we to be certain that they are sufficient? [3]

**Summary**

Until there is a security standard for running a cloud then SAS70 audits with unpublished controls and control objectives like the recent AMZN announcement are simply smoke and mirrors.  They provide little or no real assurance to the average consumer of the AWS public cloud and serve only to provide a false sense of security.

**UPDATE**: @wpauley says he has a copy of the AWS controls, but I haven't seen them yet.  When I get a copy I will post them.

**UPDATE2**: Apparently @wpauley was a special case. AWS is keeping the controls under wraps. If you have a copy send them to me anonymously and I will get them posted.



* * *

[1] Even the recent refresh of the [Amazon Security Whitepaper](http://bit.ly/kUFig) (PDF) does not include details on the controls or control objectives
[2] Been a while since I was involved in a SAS70 and there is a specific language they use that I've forgotten.  Did not find any examples on the net.  Appreciate clarifications in comments below if you have them.
[3] I think this raises a broader question, which is should **any** public cloud ever be allowed to keep their SAS70 controls and control objectives hidden?  There is a very nominal argument for security through obscurity, but the reality is that many people will have to see them anyway, so why not shed some light?
