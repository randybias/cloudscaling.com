---
title: 'Rumor Mill: Google EC2 Competitor Coming in 2010?'
link: http://cloudscaling.com/blog/cloud-computing/rumor-mill-google-ec2-competitor-coming-in-2010/
author: randybias
description: 
post_id: 1174
created: 2010/07/05 08:00:34
created_gmt: 2010/07/05 15:00:34
comment_status: open
post_name: rumor-mill-google-ec2-competitor-coming-in-2010
status: publish
post_type: post
layout: post
---

# Rumor Mill: Google EC2 Competitor Coming in 2010?

I've heard from a somewhat reliable source that Google is working on their Amazon EC2 competitor. Yes, some kind of on-demand virtual servers. I would have been the last person to guess that Google would take this direction[1], but you have to admit it makes a certain sense from their perspective. Consider: 

  * Amazon's EC2 is [clearly generating Real Revenue (TM)](/blog/cloud-computing/amazons-ec2-generating-220m-annually) and could be at 500-750M in revenue for 2010
  * Google has a massive global footprint and is north of [one million server](http://www.pandia.com/sew/481-gartner.html)s
  * The support structure for these servers includes a [huge investment](http://royal.pingdom.com/2008/04/11/map-of-all-google-data-center-locations/) in datacenters, networking, and related
  * The Googleplex houses an extremely large number of talented engineers in relevant areas: networking, storage, Linux kernel, server automation, etc.
  * Google Storage [recently went into BETA](http://code.google.com/apis/storage/) and is accepting developer signups
This last is perhaps one of the more telling signs. As you may be aware, Amazon's Simple Storage Service (S3) pre-dates Amazon's Elastic Compute Cloud (EC2). When Amazon launched in Europe they first deployed S3 followed by EC2. The same happened with their Asia/Pac deployment. Amazon has built AWS in such a way that all of the services are synergistic, but in particular, EC2 is dependent on S3 as a persistent storage [system of record](http://en.wikipedia.org/wiki/System_of_record). EC2 AMIs originate from and are stored in S3, it's the long term backing store for [Elastic Block Storage](http://aws.amazon.com/ebs/) (EBS) and EBS snapshots, and it's safe to assume that many other kinds of critical data that AWS relies on are stored there. Would Google take a different approach? It's doubtful. Amazon's S3 is built to be a highly scalable storage platform[2]. Google's own GoogleFS and BigTable server similar purposes. It's certain that Google would use related design principles and hence we could see the Google Storage as a prelude to a Google on-demand virtual server service (Google Servers???). Combined with the rumor I heard from a reasonably informed source I think we can look forward to an EC2 competitor, hopefully this year. What I want to bring to folks attention here is that if another credible heavyweight enters into this market it will have a tremendous impact in further driving the [utilitization](/blog/cloud-computing/debunking-the-no-such-thing-as-a-private-cloud-myth) of cloud services. In the medium term it will also threaten hosting providers and '[enterprise](http://cloudscaling.com/blog/cloud-computing/bifurcating-clouds) [clouds](http://cloudscaling.com/blog/technology/must-read-on-the-cloud)'. Why? I think what many hosting providers fail to understand is that Amazon and Google, particularly if fueled by direct competition, **must** grow up into the enterprise space. Just as in the Innovator's Dilemma, they will eventually provide most of the features of any 'enterprise' cloud, which means that if you aren't building to be competitive with Amazon and Google, you aren't in the public cloud game. Much more detail on this in a future posting. 

* * *

[1] My best would have been that Google put more weight behind PaaS solutions like Google App Engine (GAE) and related, which are more 'google-y'. [2] See the [whitepaper](http://s3.amazonaws.com/AllThingsDistributed/sosp/amazon-dynamo-sosp2007.pdf) (PDF) on their Dynamo technology behind S3. Also check out [Riak](http://www.basho.com/Riak.html) from [Basho](http://www.basho.com/) that is designed around the same techniques.

## Comments

**[Nubeblog](#534 "2010-07-05 09:12:03"):** Any idea of what Cloud Management API are they going to implement?

**[Gilad](#537 "2010-07-05 09:53:55"):** Fascinating post. Of course its all speculation, but I agree with Nubeblog that the API they may choose will be interesting to watch. In fact - liked it so much I write a short note about it: [http://www.porticor.com/2010/07/will-cloud-comp...](http://www.porticor.com/2010/07/will-cloud-competition-help-move-forward-standards/)   
  
Basically this may redefine the balance between IaaS and PaaS in a way that is good for both. And maybe even give standards a leg up.

**[kinlane](#538 "2010-07-05 12:34:43"):** Google followed the blueprint of Amazon S3 almost exactly with their Google Developer storage. Seems if they run with EC competitor they would follow similar pattern as well.   
  
Would be nice if they went even further with better portability of AMI, data, etc.

**[randybias](#539 "2010-07-05 16:00:56"):** @Gilad, @nubeblog, @kinlane,  
  
I agree with @kinlane. Google has followed the S3 API almost exactly for their storage service. It would be great if they were bold and went with an EC2 compatible API and were compatible with their Xen offering. I suspect they will choose the KVM hypervisor, though. This allows some compatibility depending on how they do it.

**[Mxx](#540 "2010-07-09 22:28:02"):** better yet, they should adopt libcloud api.

**[Krishna Sankar](#541 "2010-07-09 22:45:08"):** Randy,  
Don't think S3 is based on Dynamo. The paper clearly separates them. If my impression is correct, S3 is built on Erlang.  
Cheers  
<K>

**[randybias](#542 "2010-07-09 23:50:38"):** From a source who was at Amazon during the creation of S3/EC2:  
  
\---  
SimpleDB was originally written in Erlang by the folks in the Berkeley office, S3 was written in C++ in Seattle. I believe Dynamo was also written in C++. S3 was designed and implemented well before Dynamo,  
so the parts of S3 that use Dynamo now were later additions. I would be _extremely_ surprised, given the history, if S3 was now anything but C++.  
\---  
  
So, bottom line: S3 is C++, not Erlang and it uses Dynamo now although it did not originally do so.

**[jp23](#548 "2010-07-13 00:45:13"):** think Google is learning that PaaS like app engine isn't capturing enough customers. They see that Amazon's IaaS gives more flexibility to the user and hence cater to customers who couldn't use app engine for it's limitations.

**[Nubeblog](#2243 "2010-07-05 09:12:00"):** Any idea of what Cloud Management API are they going to implement?

**[Gilad](#2244 "2010-07-05 09:53:00"):** Fascinating post. Of course its all speculation, but I agree with Nubeblog that the API they may choose will be interesting to watch. In fact - liked it so much I write a short note about it: http://www.porticor.com/2010/07/will-cloud-competition-help-move-forward-standards/ Basically this may redefine the balance between IaaS and PaaS in a way that is good for both. And maybe even give standards a leg up.

**[kinlane](#2245 "2010-07-05 12:34:00"):** Google followed the blueprint of Amazon S3 almost exactly with their Google Developer storage. Seems if they run with EC competitor they would follow similar pattern as well. Would be nice if they went even further with better portability of AMI, data, etc.

**[randybias](#2246 "2010-07-05 16:00:00"):** @Gilad, @nubeblog, @kinlane, I agree with @kinlane. Google has followed the S3 API almost exactly for their storage service. It would be great if they were bold and went with an EC2 compatible API and were compatible with their Xen offering. I suspect they will choose the KVM hypervisor, though. This allows some compatibility depending on how they do it.

**[Mxx](#2248 "2010-07-09 22:28:00"):** better yet, they should adopt libcloud api.

**[Krishna Sankar](#2251 "2010-07-09 22:45:00"):** Randy, Don't think S3 is based on Dynamo. The paper clearly separates them. If my impression is correct, S3 is built on Erlang. Cheers

**[randybias](#2252 "2010-07-09 23:50:00"):** From a source who was at Amazon during the creation of S3/EC2: \--- SimpleDB was originally written in Erlang by the folks in the Berkeley office, S3 was written in C++ in Seattle. I believe Dynamo was also written in C++. S3 was designed and implemented well before Dynamo, so the parts of S3 that use Dynamo now were later additions. I would be _extremely_ surprised, given the history, if S3 was now anything but C++. \--- So, bottom line: S3 is C++, not Erlang and it uses Dynamo now although it did not originally do so.

**[jp23](#2258 "2010-07-13 00:45:00"):** think Google is learning that PaaS like app engine isn't capturing enough customers. They see that Amazon's IaaS gives more flexibility to the user and hence cater to customers who couldn't use app engine for it's limitations.

