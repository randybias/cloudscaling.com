---
author: Randy Bias
date: 2016-09-27
layout: post
slug: the-history-of-pets-vs-cattle
title: The History of Pets vs Cattle and How to Use the Analogy Properly
featured: true
---

I have been meaning to write this post for a long time, but one thing or another has gotten in the way. It's important to me to provide an accurate history, definition, and proper usage of the Pets vs Cattle meme so that everyone can understand why it was successful and how it's still vital as a tool for driving understanding of cloud. The meme has taken off because it helped created an understanding of the "old way" vs. the "new way" of doing things. That's great, but the value of the meme becomes muddied when misused. We can all agree there's enough muddy terminology and phraseology already, such as "cloud," "hybrid," and "DevOps". So this post aims to set the record straight and assure a canonical history that everyone can reference and use.

# The History

Some time in 2011 or 2012 I was struggling with explaining to customers how AWS, cloud native apps, and cloud more generally was fundamentally different from what had gone before[1]. Most explanations required an exorbitant amount of time. I was searching for a way to synopsize this when I came across a great little presentation from Bill Baker about [Scaling SQL Server](https://twitter.com/randybias/status/444306871545892864). Bill wasn't running around presenting this in cloud circles. I dug it up through Google searches. Bill wasn't talking about cloud or cloud computing. His focus was about "scale-up" vs. "scale-out" architectures generally.

Most importantly, Bill used an analogy that resonated deeply with me. He talked about scale-up vs. scale-out in the context of comparing a pet and a herd of cattle. A light went on above my head and I realized this was it, the elevator pitch I was looking for. But there was a slight, but important nuance that I focused on. First, I put pets vs cattle in the context of cloud, and second I emphasized the disposability of cattle and the uniqueness of pets. This was much more important than whether you scale-up or scale-out. Those are, I believe, side effects, of how you view a server. If you view a server (whether metal, virtualized, or containerized) as inherently something that can be destroyed and replaced at any time, then it's a member of the herd. If, however, you view a server (or a pair of servers attempting to appear as a single unit) as indispensable, then it's a pet.

Here is the elevator pitch I would give in presentations, pretty much verbatim:

> In the old way of doing things, we treat our servers like pets, for example Bob the mail server. If Bob goes down, it's all hands on deck. The CEO can't get his email and it's the end of the world. In the new way, servers are numbered, like cattle in a herd. For example, www001 to www100. When one server goes down, it's taken out back, shot, and replaced on the line.

**This** explanation of Pets vs Cattle is what [resonated with Tim Bell at CERN](https://twitter.com/noggin143/status/354666097691205633) and many others and caused them to replicate and propagate the analogy, which created the meme that has edified so many and has so cleanly represented the transition we are all going through to cloud.

# Understanding Pets and Cattle

Let's take a minute to clearly define pets and cattle.

## Pets

> Servers or server pairs that are treated as indispensable or unique systems that can never be down. Typically they are manually built, created, and "hand fed". Examples include mainframes, HA loadbalancers/firewalls, database systems designed as master/slave (active/passive), and so on.

## Cattle

> Arrays of more than two servers, that are built using automated tools, and are designed for failure, where no one, two, or even three servers are irreplaceable. Typically, during failure events no human intervention is required as the array exhibits attributes of "routing around failures" by restarting failed servers or replicating data through strategies like triple replication or erasure coding. Examples include web server arrays, multi-master datastores such as Cassandra clusters, multiple racks of gear put together in clusters, and just about anything that is load-balanced and multi-master.

The key here is that in the old world redundancy through having two of everything, the ubiquitous HA pair in the enterprise datacenter, is not enough. What is required is assuming that failures can and will happen. That every server, every component is able to fail without impacting the system.

Most importantly, this analogy, as presented above, has helped educate a generation of IT managers, CIOs, and others, while giving them a tool for further explaining the old vs new.

# Going Off The Ranch

That's why it's important to stick to or, at least start with, the core message above. People can and will, take this simple analogy and turn it to their own uses. Folks have added to the analogy (pets, cattle, ants) and have modified it in various manners. That's fine, but it often muddies the waters, which means it waters down the value. Here's a recent case in point to illustrate.

The Kubernetes team borrowed the analogy to explain their addition of "Pet Sets" to Kubernetes functionality over this summer and posted a blog entitled [Stateful Applications in Containers!? Kubernetes 1.3 Says "Yes!"](http://blog.kubernetes.io/2016/07/stateful-applications-in-containers-kubernetes.html). It's understandable that folks in the container ecosystem would take pets vs cattle and interpret it to mean something about stateful applications. There is a certain insecurity around containers applicability for stateful applications. Something I personally don't understand since containers have always been applicable for stateful applications, but perhaps the container ecosystems support for persistent storage has been less than stellar. That's a longer discussion however.

The core issue with the k8s blog posting is that if you look at the examples of stateful applications that are supported in Kubernetes 1.3 using Pet Sets it's a canonical list of **cattle**-architected data store systems: "Cassandra, Kafka, and MongoDB". All of these data storage systems are designed for failure and exactly match my definition for cattle applications above. In other words, Kubernetes now supports cattle data stores using so-called "Pet Sets".

The problem, of course, is that it's implied that true pet-architected systems, say for example an active/passive Oracle storage system or an HA pair of NFS fileservers, are supported using Pet Sets. While there are some steps in here that help with that objective (e.g. supporting orderly setup of master/slave systems), Pet Sets really is targeting scale-out datastores, not true pets as defined above.

It matters. If we say that pets are about systems that require "special handling" instead of systems that "cannot fail" then we ultimately confuse people trying to understand the new way vs. the old way.

# Getting Value from Pets vs Cattle

Hey, do what you need to do. If you feel you need to take Pets vs Cattle and bend it to serve marketing or other purposes, that's certainly your prerogative. Just understand how it was used originally and why it's still invaluable in quickly helping IT folks and executives quickly understand what has changed. I also would very much appreciate if you simply acknowledged you were providing your own new context and pointed to this blog posting for the true history of the meme.

Ultimately, focusing on the disposability of servers—a concept that Google, in fact, pioneered—is the most important aspect of Pets vs. Cattle and losing that, focusing on some other aspect, or ascribing something not intended (e.g. stateful applications as pets) distracts and muddies the waters.

By understanding and accurately representing the origins of the meme, we maintain its value for helping those new to the disruption understand the foundational shift underway in how computing is delivered.

Cloud on.

* * *

[1] [Cloud Connect 2011 Keynote](https://vimeo.com/21372341) 
