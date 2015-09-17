---
title: 'Pre-release CLI Utility for GoGrid'
link: http://cloudscaling.com/blog/cloud-computing/pre-release-cli-utility-for-gogrid/
author: Randy Bias
description: 
post_id: 2383
created: 2009/01/12 21:55:23
created_gmt: 2009/01/13 05:55:23
comment_status: open
post_name: pre-release-cli-utility-for-gogrid
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Pre-release CLI Utility for GoGrid

Looking for volunteers to help evaluate & give feedback on pre-release GoGrid CLI tool that talks to the GoGrid [API](http://wiki.gogrid.com/wiki/index.php/API). This is BETA code, but stable & functional. Send an e-mail to randyb {#} gogrid.com. I'll send you instructions and a location to get the tool. _If you want to test it, but don't have a GoGrid account just let me know and I'll supply you a one-time $100 service credit for when you signup._ Itâ€™s a Java .jar file. Youâ€™ll need a JRE/JDK of 1.5+. I have not tested 1.6, but there isnâ€™t anything special here so it _should_ work. I have not tried Windows or Linux either, but again it _should_ work. To get command line usage: 
    
    
    % java â€“jar cloudcontrol.jar -h
    

This is a simple wrapper around the API functionality and doesnâ€™t have any particular logic of itâ€™s own. Again, it's pre-release, so don't expect oodles of documentation, but I think this tool is simple enough to not need much. An example of usage and output: 
    
    
    # java -jar cloudcontrol.jar -key KEY -secret SECRET -api api.gogrid.com -list ips -state assigned -type public
    Id         IP                   Subnet                         Public
    1345       218.111.97.64        218.111.97.64/255.255.255.240  true
    1346       218.111.97.65        218.111.97.64/255.255.255.240  true
    1351       218.111.97.70        218.111.97.64/255.255.255.240  true
    1352       218.111.97.71        218.111.97.64/255.255.255.240  true
    1353       218.111.97.72        218.111.97.64/255.255.255.240  true
    1360       218.111.97.79        218.111.97.64/255.255.255.240  true
    

* * *

**Update:** There is currently a little quirk in the way the backend of GoGrid and the API work together. The result is that it isn't obvious when a server is finished being provisioned. Here's how you know. When the 'Id' returned is no longer a '0', then your server is ready. For example when it's not ready. 
    
    
    % java -jar cloudcontrol.jar -key KEY -secret SECRET -api api.gogrid.com -list servers
    Id         Name                 Description
    0          test1                Test Box
    

When it's good to be started: 
    
    
    % java -jar cloudcontrol.jar -key KEY -secret SECRET -api api.gogrid.com -list servers
    Id         Name                 Description
    18321      test1                Test Box

## Comments

**[Willian2007](#3039 "2011-05-13 15:18:00"):** Is it possible to get an account for testing at gogrid?

**[Willian2007](#3040 "2011-05-13 15:22:00"):** Without paying of course....

