---
title: 'It’s the App, Silly'
link: http://cloudscaling.com/blog/cloud-computing/its-the-app-silly/
author: Randy Bias
description: 
post_id: 2345
created: 2008/04/11 05:27:52
created_gmt: 2008/04/11 13:27:52
comment_status: open
post_name: its-the-app-silly
status: publish
post_type: post
layout: post
category: cloud-computing
---

# It’s the App, Silly

I missed the announcement of [Google's App Engine](http://code.google.com/appengine/)[1] by a few hours, but it was quickly brought to my attention. Initially, it looked like a direct competitor to technology [we have been working on](http://www.cloudscale.net/). Fortunately, it's not. 

CloudScale made a decision in January to move away from building a commodity product that serviced the mass of web developers for a number of reasons. First, we had some inkling that Google was headed this direction. Second, after we saw the [Heroku](http://heroku.com/) application it seemed apparent to us that they had really solved this particular problem very elegantly. 

Now that Google has launched App Engine we can see that it is very similar to Heroku. Both have outstanding technology and are putting a stake in the ground that matters. It goes something like this: 

_If you are a small developer or want to vet an initial application idea you can do it without having to run or maintain your own infrastructure._

How many of you wind up spinning your wheels configuring databases, operating systems, application servers, etc. instead of working on your core application? We've all been there. 

So how does this affect CloudScale? We think that generally it helps the CloudScale project. 

None of our current ALPHA customer use cases can run under Google's App Engine. The leverage we help our [CloudScale](http://www.cloudscale.net/)-related customers derive from EC2 is largely related to helping them rapidly deploy and manage the life-cycle of very complex heterogeneous web applications. 

This is a value that Amazon, Google, and Heroku can't provide, while some of our other competitors can, but not as well. Most of the others are weighed down by needing to support commodity web developers for free or very little. 

At the end of the day, it's the app that matters. All applications go through an evolution from a proof-of-concept to a scalable web app to a very large globally distributed web app. In the initial phases, the app is the whole of the app. In the later stages, the scalability of the app is a critical component of the application itself. 

CloudScale is firmly targeted for after-the-proof-of-concept phase to help you build a fully scalable web application. Most importantly, it's designed to scale up to a large globally distributable web application. 

[1] There is more background on App Engine on [Niall Kennedy's blog.](http://www.niallkennedy.com/blog/2008/04/google-app-engine.html)