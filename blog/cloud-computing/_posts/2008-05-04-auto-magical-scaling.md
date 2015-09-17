---
title: '“Auto-magical” Scaling'
link: http://cloudscaling.com/blog/cloud-computing/auto-magical-scaling/
author: Randy Bias
description: 
post_id: 2349
created: 2008/05/04 02:49:17
created_gmt: 2008/05/04 10:49:17
comment_status: open
post_name: auto-magical-scaling
status: publish
post_type: post
layout: post
category: cloud-computing
---

# “Auto-magical” Scaling

[Rails doesn't scale](http://www.google.com/search?hl=en&q=%22rails+doesn%27t+scale%22&btnG=Google+Search), [Amazon's Elastic Compute Cloud](http://ec2.amazonaws.com) [does](http://www.google.com/search?hl=en&safe=off&q=EC2+scale&btnG=Search), but wait you need [Scalr ](http://www.techcrunch.com/2008/04/03/scalr-the-auto-scaling-open-source-amazon-ec2-effort/) to _actually_ scale.         So... What is '[scaling](http://en.wikipedia.org/wiki/Scalability)'? Everyone's an expert on it these days it seems. It's talked about in terms of languages, cloud computing grids, databases, and more. Just today, Ola Bini provides a [humorous](http://ola-bini.blogspot.com/2008/05/just-add-scaling.html) swag at how it's talked about in terms of languages. Recently, John Willis had a nice [overview](http://www.johnmwillis.com/zenoss/drupal-dries-and-clouds/) in terms of the 'cloud'. I've helped scale networks, applications, systems, and databases. _The one thing I'm certain about scaling is that it is not a one-size-fits-all solution._ There is **no** silver bullet. Unfortunately, the fact that there is no silver bullet hasn't stopped [people from talking about it like there is](http://www.rightscale.com/m/features.html#4) or [assigning blame](http://www.techcrunch.com/2008/04/23/amateur-hour-over-at-twitter/) when 'scaling' fails. It would be great if the conversation could evolve a bit. These are age old issues that have a new shine because hardware, bandwidth, and software have all rapidly [commoditized](http://neotactics.com/blog/technology/gigaoms-pizza-boxes-need-new-toppings). In the world of systems management and architecture design there are new tools like cloud computing grids and virtualization, but the actual problems haven't changed. Scaling a system, application, or database is a non-trivial task that requires specific knowledge of the problem domain. No amount of hand-waving will create automagical scaling. We can only create better tools that help us build better infrastructure.