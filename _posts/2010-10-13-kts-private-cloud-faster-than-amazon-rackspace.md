---
title: "Cloudharmony: KT's cloud faster than Amazon, Rackspace"
link: http://cloudscaling.com/blog/cloud-computing/kts-private-cloud-faster-than-amazon-rackspace/
author: su
description: 
post_id: 1464
created: 2010/10/13 10:00:30
created_gmt: 2010/10/13 17:00:30
comment_status: open
post_name: kts-private-cloud-faster-than-amazon-rackspace
status: publish
post_type: post
layout: post
---

# Cloudharmony: KT's cloud faster than Amazon, Rackspace

[We commissioned CloudHarmony to benchmark the private cloud we built for KT](http://blog.cloudharmony.com/2010/10/cloudscaling-kt-private-cloud.html) (Korea's largest landline operator and second largest mobile operator). KT's Senior Vice President of the Cloud Services Business Unit, Mr. Jung-sik Suh, had a clear vision for this infrastructure cloud. His intention was to build 'at scale' like Amazon and Google. We commissioned this benchmarking to understand what levels of performance KT’s cloud architecture could achieve. The results were fantastic. The cloud that KT and Cloudscaling built together beat Amazon, Rackspace, GoGrid, and Terremark on a number of benchmark tests including CPU, disk, programming language, memory I/O, and encoding performance. The results clearly validated that we can deliver Infrastructure-as-a-Service clouds that meet or exceed the performance characteristics of the largest public clouds. However, as with all benchmarks, the devil is in the details, so let's walk through them. 

## Benchmarking is Never Perfect

No benchmark can characterize performance for all contexts and use cases. CloudHarmony has taken a particular approach to benchmarking that is the first attempt to measure and test a large number of public clouds for comparison purposes. While this might not reflect the relative performance for particular workloads, it's a place to start and improve over time. 

### Loaded vs. Unloaded Testing

CloudHarmony ran 'loaded' and 'unloaded' tests.  Unloaded tests measure performance on a completely empty cloud.  Loaded tests simulate a cloud running at approximately 70-80% utilization.  That means that most of the cloud was filled with VMs running random, staggered, performance tests to simulate a variety of workloads and the effects of oversubscription. We (KT, Cloudscaling, and CloudHarmony) acknowledge this isn't a perfect simulation of typical Infrastructure-as-a-Service (IaaS) workloads, but while imperfect, it may actually be a *greater* average load than found on most public clouds.  We are working actively with CloudHarmony to find improved methods for simulating cloud usage. 

### Apples, Oranges, Grapefruits, and Kiwis

Comparing one cloud's offerings to another can be tricky.  A 32GB RAM virtual machine might have 4 cores on one cloud and 8 on another.  Since every IaaS provider has chosen to provide different packaging it's very difficult to do a normalized comparison. When looking at the CloudHarmony results it's important to look carefully at the benchmarks with a critical eye.  Let's start with one example. The first benchmark provided is CPU Performance for Large Servers.  Here, the top performer listed is BlueLock with 29.2 CCUs.  This number marginally edges out the KT private cloud numbers at 28.66.  However, the BlueLock VM tested was running 8 x 2.67Ghz cores (roughly 21.36Ghz) vs. 6 x 2Ghz cores (roughly 12Ghz).  In this particular example the "6x2Ghz" for the KT VM indicates that the vCPUs (virtual CPUs) are capped at 2 Ghz each.  That means, we’re actually looking at: 

> 29.2 CCUs for 21.36Ghz of total CPU clock speed vs.
> 
> 28.66 CCUs for 12Ghz of total CPU clock speed

As anyone in benchmarking would tell you, using pure CPU cycles for comparison is prone to errors, but what I want to highlight here is the large disparity between these two: 1.37 CCUs / 1 Ghz vs. 2.38 CCUs / 1 Ghz.  According to CloudHarmony, if KT’s VM in this case had 2 additional cores, their performance numbers here would probably increase by about 30% to roughly 38 CCUs, a significant increase over the best CPU performance in the pack. There are several additional items worth noting in this benchmark.  In no particular order: 

  * These benchmarks are probably a bit biased towards multi-core applications and performance
  * The impact of clock speed (2.67Ghz vs 2.27Ghz) probably matters less than the number of cores in many cases
  * KT is using only 6 low power (the "L" in the model number) cores, which means they can have better subscription rates, while still performing as well as an 8-core machine
  * The rated power of the L5640 vs. the X5550 is: 60W to 95W; this is the rated power draw, not the actual power draw [1] so we can’t infer too much, still over a large population it could be significant
The key is to look at these benchmark results with a critical eye, while also seeing the general trends. 

## Detailed Results Comments

I'd like to cover a few of the benchmarks I think are more (or less) relevant. 

### CPU Performance

At the high end, it is clear that Intel Westmere/Nehalem-class processors (55xx/56xx) are not only the processor of choice, but king of the heap for performance in virtualized environments.  Even 8-core AMD boxes (e.g. Terremark in this example) don't stack up well.  At the low end (single core), there is little significant difference between processor types.  This is also an indicator of the bias in the benchmarks towards multi-core applications, although that's arguably a reasonable bias given the current market tendency towards multi-threaded applications. Also interesting is how low-power Westmere processors perform as well or better than full power Westmere processors.  At scale, there may be significant power savings that justify the additional cost of low-power processors. 

### Disk I/O Performance

We were actually amazed to see only a 20-30% performance hit during fully loaded testing for the KT private cloud given that we're using shared SAN storage[2].  Nominally, we would expect significant disk oversubscription rates in any SAN and running intensive disk benchmarks at a 70-80% load we could expect a much larger impact. Looking at the unloaded benchmarks first you can see that we are higher than both GoGrid, who uses local disk drives and Terremark who uses SAN technology.  Performance here is achieved by overbuilding and reducing the oversubscription rate significantly.  We can't say exactly what the subscription ratio is, but because the cost of the system is relatively cheap it's easy to buy more.  More spindles and more network throughput make SAN technology attractive for certain clouds.  In this case, in fact, we have almost the same density of disk drives using SAN as we would using local storage.  This means better peak IOPS throughput for data intensive applications. 

### Other Benchmarks

We were pleasantly surprised to see KT's private cloud performed as well as it did in the other metrics, but we believe this to be a combination of CPU to RAM ratio and very modern processors/system architectures.  Seeing AMD back in the game suddenly with encoding/encryption is also worth noting.  This is where single-threaded performance and the high clock speed of the Terremark AMD8389's (2.91Ghz) make a reasonable showing. 

## Conclusion

We believe that the best way to build a private cloud is like public cloud pioneers such as Amazon and Google.  That means favoring inexpensive commodity hardware, a design-for-failure model, and overbuilding to lower oversubscription rates.  We believe that the benchmarking that CloudHarmony performed was a first step in validating that architectural approach. We expect there to be more and are happy to work with others to do further analysis. \---- [1] We were unable to measure power draw this time around, but will have price/power and price/performance numbers in the future. [2

## Comments

**[Piotr Kandziora](#616 "2010-10-13 15:15:58"):** It is really great news. Maybe you can add more details concerning this deployment. What kind of virtualization solution are you using there? It is fully automatic solution? Generally are you using OpenNebula in your solutions (I've noticed that you created Chef software for automatic deployment)?

**[randybias](#617 "2010-10-13 16:11:40"):** Piotr,   
  
  
We are trying not to reveal too much, but we've definitely given out this information. Check the comments section of the previous blog post on the Cloudscaling website where we announced the launch of the KT private cloud.   
  
  
Best,   
  
  
\--Randy

**[Kyle](#620 "2010-10-21 12:05:00"):** Congratulations Randy and to the whole Cloud Scaling team! I will be excited to read more when more is revealed!

**[Piotr Kandziora](#2287 "2010-10-13 15:15:00"):** It is really great news. Maybe you can add more details concerning this deployment. What kind of virtualization solution are you using there? It is fully automatic solution? Generally are you using OpenNebula in your solutions (I've noticed that you created Chef software for automatic deployment)?

**[randybias](#2288 "2010-10-13 16:11:00"):** Piotr, We are trying not to reveal too much, but we've definitely given out this information. Check the comments section of the previous blog post on the Cloudscaling website where we announced the launch of the KT private cloud. Best, \--Randy

**[Kyle](#2289 "2010-10-21 12:05:00"):** Congratulations Randy and to the whole Cloud Scaling team! I will be excited to read more when more is revealed!

