---
author: Randy Bias
comments: true
date: 2012-04-18 19:04:47+00:00
layout: post
slug: simplicity-scales-an-alternative-approach-to-openstack-nova-rpc-messaging
title: 'Simplicity Scales: An Alternative Approach to OpenStack Nova RPC Messaging'
wordpress_id: 3913
old_categories:
- Cloud Computing
- Technology
---

Earlier this week, Eric Windisch ([@ewindisch](http://twitter.com/ewindisch)) of Cloudscaling presented an alternative mechanism for [OpenStack](http://openstack.org) Compute (Nova) RPC.

For those who are new to OpenStack or simply haven't had time to delve into it's innards, Nova uses a core asynchronous RPC/messaging system to communicate between components.  Asynchronous message passing systems are key tools in building scalable systems.  They are used in many different ways depending on the type of system you are building.  Nova has traditionally used [RabbitMQ](http://www.rabbitmq.com/), which is an excellent choice for many.

Cloudscaling felt that RabbitMQ added unnecessary complexity to Nova deployments given what the requirements were for an asynchronous RPC message passing mechanism.  Rabbit provides a number of value added features such as store-and-forward of messages, which can actually be problematic at larger scale.  In addition, Rabbit is a centralized, broker-based model that requires deploying it in High Availability (HA) pairs and combining this with clustering (multiple HA pairs in parallel) for scaling.  We felt this was not an ideal scenario for larger Nova deployments.

The result is a completely broker-less, peer-to-peer, asynchronous message passing system based on 0MQ ([ZeroMQ](http://www.zeromq.org/)).  This [open source pluggable driver](https://github.com/cloudscaling/nova-mq) for Nova has no centralized broker, requires no HA components, and is distributed amongst all of the Nova components.  The ZeroMQ plugin that Cloudscaling created is roughly 700 lines of Python code that plugs into the Nova Queue Abstraction Layer (QAL).  It leverages the ZeroMQ library (written in C), which is fast, portable, and proven at scale.  You will find that this plugin not only removes complexity in how Nova does messaging, but also has its performance scale linearly with the number of components.

As a brief aside, this is an example of how Cloudscaling intends to help create choice and increase the robustness and scalability of OpenStack, while reducing complexity.  Last year, we [pushed back the pluggable QAL interface](https://code.launchpad.net/~zedshaw/nova/generic-msg-queue-layer/+merge/69712) to OpenStack in Diablo with a driver for RabbitMQ, which maintained all functionality, while allowing us to have a place to plug in ZeroMQ in the future.  Now, as of Essex, Stackers can choose RabbitMQ or ZeroMQ depending on what they think their needs are.  We hope this is an approach that others in the community will choose.

Eric's presentation on the ZeroMQ RPC driver for Nova is below.  It describes how ZeroMQ works and provides more depth on how it was implemented.


**[Distributed RPC in Nova with ZeroMQ](http://www.slideshare.net/randybias/distributed-rpc-in-nova-with-zeromq)** 


View more [presentations](http://www.slideshare.net/) from [Randy Bias](http://www.slideshare.net/randybias)



