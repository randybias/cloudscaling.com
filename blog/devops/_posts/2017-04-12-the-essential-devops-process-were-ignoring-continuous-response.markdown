---
author: Randy Bias
date: 2017-04-12
layout: post
slug: the-essential-devops-process-were-ignoring-continuous-response
title: "The Essential DevOps Process We're Ignoring: Continuous Response"
featured: true
---

Continuous response—or “CR”—is an overlooked link in the DevOps process chain. The two other major links—continuous integration (CI) and continuous delivery (CD)—are well understood, but CR is not. Yet, CR is the essential element of follow through required to make customers happy and to fulfill the promise of greater speed and agility. At the heart of the DevOps movement is the need to greater velocity and agility for the business in our new digital age. CR plays a pivotal role in enabling this, and today I will explore it in some depth so that you can add it to your repertoire and think holistically about your DevOps process.

## What is Continuous Response (CR)?

CR, like CI or CD is a DevOps process supported by a set of underlying tools. CI and CD are not Jenkins, unit tests, or automated deployments alone. They are a process flow. Similarly, CR is a process flow that begins with the delivery of new code via CD. It is not monitoring, machine learning, or auto-scaling, but a diverse set of processes that occur after code deployment, supported by a variety of tools. CR is also different in two specific ways.

First, it is different because it is, by its nature, more broad. The general process of the software development life cycle (SDLC) means that most CI/CD processes are similar. However, code running in production differs from app to app or service to service. This means that CR differs as well.

Second, CR is different because it is nascent. As far as I can tell this is the first attempt to define it. Like CI and CD before it, the process and tools existed before a name was put to them. Over time, CI/CD became more normalized and easier to scope. CR is new and hence there is lots of room to discuss what’s in or out. I welcome your comments in this regard and hope you will run with these ideas.

### A Definition

We need a crisp definition of CR in order to move forward with breaking it down. To put it in context, I believe we need to revisit the definitions of continuous integration (CI) and continuous delivery (CD) first. Here are Gartner’s definitions:

CI:

> Continuous integration is the practice of integrating, building, testing, and delivering functional software on a scheduled, repeatable and automated basis.

CD:

> Continuous delivery is a software engineering approach where teams keep producing valuable software in short cycles while ensuring that the software can be reliably released at any time.

I propose the following definition of CR:

> Continuous response is a practice where developers and operators instrument, measure, observe, and manage their deployed software looking for changes in performance, resiliency, end user behavior, security posture, and taking corrective actions as necessary. Actions vary from real-time autonomic responses to using analytics data as feedback to the product function and feature pipeline.[1]

We can argue about whether these definitions are 100% correct. They are good enough for our purposes, which is framing the definition of CR in rough context so that we can understand that it is really just the last link in the chain of a holistic cycle:

![Holistic DevOps Cycle](/assets/media/2017/holistic-devops-cycle.jpg)

What is this multi-colored ring, you ask? It’s the famous OODA Loop. Before we can continue, we need to touch on what the OODA Loop is and why it’s relevant to DevOps. We’ll keep it brief though as there is already a long history between the OODA Loop and DevOps.

### A Brief Aside: The OODA Loop

At the heart of much of the core thinking of DevOps is the use of the OODA Loop to help create a proactive process for evolving and responding to changing environments. If you Google you will easily find out about the long history between the [OODA Loop and DevOps](https://www.google.com/search?q=site%3Ablog.b3k.us+ooda+loop&rlz=1C5CHFA_enUS730US730&oq=site%3Ablog.b3k.us+ooda+loop&aqs=chrome..69i57j69i58.8660j0j4&sourceid=chrome&ie=UTF-8#q=devops+ooda+loop&*), but if you want the deep dive try [here](http://www.artofmanliness.com/2014/09/15/ooda-loop/) (highly recommended).

Here is the “evolved OODA Loop” as presented by John Boyd:

![Evolved OODA Loop - as borrowed from Art of Manliness](/assets/media/2017/OODA-Loop-2-1.jpg)

The most important thing to understand about the OODA Loop is that it’s a cognitive process for adapting to and handling changing circumstances.

The second most important thing to understand about the OODA Loop is that since it is a thought process that is meant to evolve, it depends on driving feedback back into the earlier parts of the cycle as you iterate.

As you can see in the diagram above, CI, CD, and CR are all their own isolated OODA Loops, residing within the overall DevOps OODA Loop. The key here is that each OODA Loop is an evolving thought process for how test, release, and success are measured. Simply put, those who can execute on the OODA Loop fastest, win.

Put differently, DevOps wants to drive speed (executing the OODA Loop faster) combined with agility (taking feedback and using it to constantly adjust the OODA Loop itself). This is why CR is a vital piece of the DevOps process. We must drive production feedback into the DevOps maturation process. The DevOps [notion of CAMS](http://devopsdictionary.com/wiki/CAMS) partially, but inadequately captures this, where continuous response provides a much cleaner continuation of CI/CD in my mind.

### Breaking CR Down

CR has more depth and breadth than CI or CD. This is natural given that what we’re categorizing is the post-deployment process by which our software is taking a variety of actions from autonomic responses to analytics of customer experience. I think, when broken down, there are three key buckets that CR components fall into. Each of these three areas forms a complete OODA Loop; however, the level of automation throughout the OODA Loop varies significantly.

The following table will help us understand the three areas of CR:

| CR Type | Purpose | Examples |
| ------- | ------- | -------- |
| Real-time | Autonomics for availability & resiliency | Auto-scaling, auto-healing |
| Analytic | Feature / fix pipeline | A/B testing, service response times, customer interaction models |
| Predictive | History-based planning | Capacity planning, hardware failure prediction models, cost basis analysis |

*Real-time CR* is probably the best understood of the three. This kind of CR is where our software has been instrumented for known issues and can take an immediate automated response (autonomics). Examples of known issues include responding to high or low demand (i.e. elastic auto-scaling), responding to expected infrastructure resource failures (i.e. auto-healing), and responding to expected distributed application failures (i.e. circuit breaker pattern).

*Analytic CR* is still the most manual of the CR processes. This kind of CR is focused primarily on observing end-user experience and providing feedback to the product development cycle to add features or fix existing functionality. Examples of this include traditional A/B website testing, measuring page-load times or service-response times, post-mortems of service failures, and so on.

*Predictive CR*, due to the resurgence of AI and machine learning (ML), is one of the areas of innovation in CR. It uses historical data to predict future needs. ML techniques are allowing this area to become more fully automated. Examples include automated capacity planning (primarily for the infrastructure layer), automated cost basis analysis of service delivery, and real-time reallocation of infrastructure resources to resolve capacity and hardware failure issues before they impact the end-user experience.

## Continuous Response: Closing the Loop on DevOps

DevOps arose because of a need for greater service delivery velocity and agility. Essentially, DevOps is an extension of agile software development practices to an operational mindset. It’s a direct response to the flexibility and automation possibilities that cloud computing afforded. However, much of the thinking on DevOps to date has focused on deploying the code to production and ends there. But our jobs don’t end there. As professionals we must also make certain that our code is behaving as expected, that we are learning as it runs in production, and that we are taking that learning back into the software development process.

This is where continuous response (CR) lives and breathes. DevOps without CR is the same as saying there is no greater OODA Loop around the DevOps process itself. It’s like saying that operators and developers jobs end with the code being deployed. We all know that this isn’t true. Customer experience is the ultimate measurement of our success. Can they use the software or service without hiccups or undue friction? If not, then we need to fix it. CR is the final link in the DevOps chain that enables delivering the truest customer experience.

If you aren’t thinking about continuous response, you aren’t doing DevOps. Share your thoughts on CR, and tell me what you think about the concept and the definition.

[1] Over time, artificial intelligence and machine learning will facilitate greater levels of automation and shorten time cycles
 
