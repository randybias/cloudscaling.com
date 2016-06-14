---
author: Randy Bias
date: 2016-06-13
layout: post
slug: project-coprhd-a-vendor-agnostic-sds-controller-now-supports-ceph
title: "Project CoprHD: A Vendor Agnostic SDS Controller, Now Supports Ceph"
---

Last year, EMC announced the open sourcing of ViPR Controller, the world's leading SDS controller as [CoprHD](https://coprhd.github.io/) ("copperhead").  Since then we have made tremendous progress, with multiple releases, and operating the project [in the open](https://coprhd.atlassian.net/projects/COP/issues/COP-21849?filter=allopenissues).  Recently we achieved another key milestone, the addition of support for RedHat's Ceph project.  CoprHD already supported EMC's ScaleIO[1], a software-defined storage (SDS) solution for block storage, but it was important for us to continue to move the needle and add support for additional SDS solutions.

In particular, I think that CoprHD provides an ideal platform for reducing risk in your deployments, by allowing you to deploy multiple storage systems, aggregating them together, putting them in different "pools", and using sophisticated scheduling systems to help with optimizing storage placement and management.  Now, it's possible to use CoprHD to help you manage Ceph and ScaleIO side-by-side, or to have an intermediate abstraction layer, that might make it [easier to replace one with the other, reducing the "lock-in" factor](http://cloudscaling.com/blog/openstack/you-are-locked-in-deal-with-it/).

| **Capability** | **ScaleIO** | **Ceph** | **Notes** |
| --- | :---: | :---: | --- |
| Discover Storage System | + | + | |
| Discover Storage Pools | + | + | |
| Discover Storage Ports | + | + | |
| Discover Host Ports | + | + | |
| Discover Unmanaged Volumes | - | - | |
| Create Volume | + | + | |
| Expand Volume | + | + | |
| Delete Volume | + | + | |
| Create Volume Snapshot | + | + | (1) |
| Restore Volume from Snapshot | - | - | |
| Delete Volume Snapshot | + | + | |
| Create Volume/Snapshot Clone | + | + | (1) |
| Delete Volume/Snapshot Clone | + | + | |
| Restore from Clone | - | - |  |
| Block Mirror Operations | - | - | |
| Export Volumes/Snapshots | + | + | |
| Unexport Volumes/Snapshots | + | + | |
| Mount Volumes | - | - | (2) |
| Unmount Volumes | - | - | (2) |
| Create Consistency Group | + | - | (3) |
| Delete Consistency Group | + | - | (3) |
| Create Consistency Group Snapshot | + | - | (3) |
| Delete Consistency Group Snapshot | + | - | (3) |
| Create Consistency Group Clone | + | - | (3) |
| Delete Consistency Group Clone | + | - | (3) |
| Restore from Snapshot/Clone | - | - | |
| Resynchronize Snapshot/Consistency Group/Clone | - | - | (4) |
| Continuous Copy | - | - | (4) |
| Metering | - | - | |
| Monitoring | - | - | |  

.  

(1) Limited up to 31 snapshots/clones of a volume in ScaleIO  
(2) Neither supported due to a bug in common CoprHD code  
(3) Ceph supports nothing similar to consistency groups  
(4) Probably N/A  

As you can see, we did our best to try and achieve as much parity with ScaleIO support as possible for Ceph. We are going to continue to update support for both ScaleIO and Ceph in CoprHD, improving it's multi-vendor story, sustaining CoprHD's lead as the #1 SDS controller in the world, and providing an open source point that gives you another tool to reduce switching costs related to "lock-in".

* * *

[1] Along with many hardware-based storage platforms, both EMC and others, but that's not particularly interesting for this posting.  
