---
title: 'Amazon Competes Against RightScale'
link: http://cloudscaling.com/blog/cloud-computing/amazon-competes-against-rightscale/
author: randybias
description: 
post_id: 2366
created: 2008/10/23 22:21:56
created_gmt: 2008/10/23 22:21:56
comment_status: open
post_name: amazon-competes-against-rightscale
status: publish
post_type: post
layout: post
category: cloud-computing
---

# Amazon Competes Against RightScale

There was a [flurry of EC2 announcements](http://aws.amazon.com/about-aws/whats-new/) from Amazon today including:

  * [Windows availability](http://aws.amazon.com/windows/)
  * Removing [EC2 BETA status](http://aws.amazon.com/about-aws/whats-new/2008/10/23/amazon-ec2-exits-beta-and-now-offers-a-service-level-agreement/) & providing a real SLA
Perhaps most interesting is this [pre-announcement](http://aws.amazon.com/contact-us/new-features-for-amazon-ec2/) of 2009 functionality, which will squarely put them in direct competition with many of the startups depending on them, such as RightScale and Ylastic. This is really quite amazing to me. I was under the impression that Amazon would continue to foster more solution providers rather than attempt to move up the stack on their own, but this is clearly a first move in the general direction of providing solutions above and beyond the basics of servers and storage. This is going to up the ante for up and coming cloud providers such as [GoGrid](http://www.gogrid.com) and [FlexiScale](http://www.flexiscale.com) as well as decrease the value of solution providers such as [RightScale](http://www.rightscale.com). The pressure is now on to innovate quickly or be left behind. Amazon's ability to innovate quickly as a large business has been truly staggering. The only other large organization I've seen act this quickly is Apple. **Update:** Be sure to check out the new [Elastic Fox Getting Started Guide](http://ec2-downloads.s3.amazonaws.com/elasticfox-owners-manual.pdf), which is clearly geared for a Windows user audience. New functionality in the [Elastic Fox FireFox plugin](http://developer.amazonwebservices.com/connect/entry.jspa?externalID=609) includes one button click rebuilding of a running Windows instance into a new Windows AMI. This is another strong indication of Amazon's commitment to make EC2 easier to use and creating an even larger threat to competitors. Historically this was a non-trivial and manual process when creating Linux AMIs. Expect this functionality to make it to Linux land as well. **Update 2:** Thorsten provides [more details](http://blog.rightscale.com/) on the Windows capabilities on the RightScale blog.

## Comments

**[Thorsten, CTO RightScale](#28 "2008-10-24 01:29:36"):** I love the title, pretty catchy :-) Seriously, none of this is really unexpected. Load balancing has been missed from day one and I much rather use the cloud provider's solution than provide something on our own. Monitoring is also something we're agnostic about: whether you use our built-in monitoring solution or someone else's, we're happy for you to have the choice within our dashboard. Note that Amazon's monitoring will not be free: you'll pay. The auto-scaling is a connection between events in the monitoring and launching instances. In my view, that's the easy part, the tricky thing is to have the right overall system architecture in place and all the hooks in the instances to actually be able to pull it all off. That's why RightScale has not been just a web dashboard for EC2 for a long time, we provide a much more complete solution with pre-packaged software stacks and support. Amazon's new service will fit in quite nicely for those customers that want to pay for them and that don't mind an EC2-only solution.

**[randybias](#29 "2008-10-24 02:38:02"):** Thorsten, As usual, thanks for your valuable input and deep insight on EC2. I'm glad RightScale exists and is adding real value on top of Amazon. Looking forward to RightScale providing support for more clouds. I'm sure that RightScale will continue to do well as a business.

**[Prabhakar, CTO Ylastic](#30 "2008-10-24 16:27:26"):** Thorsten makes some great points both in his blog post and above. We intend to take full advantage of the load balancing/autoscaling and monitoring via Amazon's APIs for our customers, and provide value add by layering additional services on top. Their management console will compete in some ways with ours, but we plan on differentiating ourselves there too! Details from AWS are bit a sketchy on these at this point. The AWS ecosystem is fairly large at this point and growing, so there will be other opportunities for innovation ...

**[randybias](#31 "2008-10-24 17:01:11"):** Prabhakar, Thanks for commenting. I agree there are opportunities to differentiate for both RightScale and Ylastic. This does put some pressure on both of you folks to keep up your pace, but I know you aren't sitting still either. :)

**[James Urquhart](#32 "2008-10-26 07:15:52"):** Great minds think alike: [Is Amazon in Danger of Becoming the Walmart of the Cloud?](http://blog.jamesurquhart.com/2008/10/is-amazon-in-danger-of-becoming.html)

**[randybias](#33 "2008-10-26 07:50:22"):** Thanks James. Thoughtful post as usual!

