---
title: 'Hyperic Clued on Cloud Monitoring'
link: http://cloudscaling.com/blog/cloud-computing/hyperic-clued-on-cloud-monitoring/
author: randybias
description: 
post_id: 2384
created: 2009/01/16 18:36:27
created_gmt: 2009/01/17 02:36:27
comment_status: open
post_name: hyperic-clued-on-cloud-monitoring
status: publish
post_type: post
layout: post
---

# Hyperic Clued on Cloud Monitoring

I was very impressed to learn yesterday that [Hyperic](http://www.hyperic.com) has implemented [jcollectd](http://support.hyperic.com/display/hypcomm/jcollectd), a native Java implementation of [collectd](http://collectd.org/) and the collectd protocol. They have released jcollectd as open sourced under the GPL. This means you can now easily instrument your Java applications in a distributed manner on cloud computing environments. I'm a big collectd fan because of it's simplicity and also it's suitability for doing metrics gathering and monitoring in cloud computing environments. Because of it's inherently distributed architecture, collectd is highly scalable. The only other tool that is similar in nature is [Ganglia](http://ganglia.info/). Collectd is actively used by [RightScale](http://www.rightscale.com), was core to the [CloudScale Project](http://neotactics.com/cloudscale), and has been mentioned by John M. Willis on his cloud computing [blog many](http://www.johnmwillis.com/other/tools-to-use-in-the-cloud/) [times](http://www.johnmwillis.com/monitoring/possible-cloud-monitoring-tools/). So not only did they bring us [CloudStatus](http://www.cloudstatus.com/), it's also great to see Hyperic releasing open source tools that further move the needle in the distributed and cloud computing space. Kudos Hyperic! 

* * *

P.s. Double kudos for releasing your Java code on github.com.