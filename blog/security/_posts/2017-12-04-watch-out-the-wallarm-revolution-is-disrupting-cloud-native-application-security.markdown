---
author: Randy Bias
date: 2017-12-04
layout: post
slug: watch-out-the-wallarm-revolution-is-disrupting-cloud-native-application-security
title: "Watch Out! The Wallarm Revolution is Disrupting Cloud Native Application Security"
---

I’ve long held that most of today’s cloud security solutions are woefully out of date, horribly static, and simply unsuited for the cloud age.

That’s why when I learned about [Wallarm](https://www.wallarm.com), I decided to [jump on board as an advisor](https://lab.wallarm.com/randy-bias-joins-wallarm-board-of-advisers-9500bb05bf67) (with the blessing of Juniper Networks). Wallarm is a promising startup whose technology aims to solve the problems unique to cloud-native application security.

## The Static Security Problem

Unfortunately, most security teams and products focus on building strong perimeters and assuming the environment rarely changes (the "walls and moats" approach).  This is particularly true of network and application security models.  Some web application firewall (WAF) products attempt to update their products on a regular basis (usually days or weeks); however, none solve the real problem, which is to respond to zero-day attacks in real-time.

This is the holy grail.  Enter Wallarm.

## A Quick Introduction to Wallarm

Wallarm is more than a "Next-Generation WAF" (NG-WAF), although that’s a reasonable place to start the conversation. What makes Wallarm much, much more than that is application security based on AI and machine learning.  Let me outline it for you:

1. First and foremost, Wallarm solves the real-time application security problem and is able to stop zero-day attacks.
2. Second, Wallarm is capable of leveraging anonymized cross-customer attack data, which means that over time, Wallarm’s aggregate intelligence is greater than any single legacy WAF deployment.
3. Third, Wallarm tailors itself to each user’s application and usage patterns. This is unique in the application security space. This ability is what enables Wallarm to detect attacks and anomalies that are not previously known (zero-day).
4. Finally, this tailored approach to application-specific protection is designed in a DevOps friendly manner.  This means that as you are rapidly iterating on your code base and pushing it through your CI/CD pipeline, Wallarm is learning about any new usage patterns, protecting your application as soon as it’s launched in production!

Wallarm does all this with an innovative application of the two most transformative technologies solving data center operations problems today: AI and machine learning (ML). Wallarm uses AI and ML to form a two-tier system in which the ML inference engine(s) operate as part of your web application proxy system that’s directly integrated with a centralized cross-customer cloud service. That’s how their solution is able to address new security threats in real-time.

## Key Benefits of The Wallarm Model

How does Wallarm change the game?

1. Very low or no false positives
2. False positive and false negatives trained across customers
3. Stop zero-day attacks
4. Very high performance
5. Software-based scale-out model
6. Automated, real-time, threat updates mean your security posture is updated in minutes, not days or weeks

For more details on Wallarm, I recommend downloading these whitepapers:

* [Evolution of Real Time Attack Detection](https://wallarm.com/resources/evolution_of_detection/)
* [The Wallarm AI](https://wallarm.com/resources/ai_engine/)

## Wallarm is Taking Cloud Security To Another Level

This is a big deal.  The security sector has been slow to move towards more dynamic security solutions that can handle ever-changing cloud environments.  There is a huge need for security technologies that were designed in the modern age, like Wallarm.  How do we know?  Wallarm already has nearly one hundred paying, production customers, before even raising their Series A round.

This is going to be an enjoyable ride.  I’ve been a bit jaded about the security world since I stepped away in 2004 and I’m terribly excited to get back in and help shake things up.

Don’t just take my word for it. Check out [Wallarm](https://www.wallarm.com) and find out for yourself why it’s a game changer.
