---
title: 'Interacting with your Swift install'
link: http://cloudscaling.com/blog/company/engineering/interacting-with-swift/
author: Teri Elniski
description: 
post_id: 1289
created: 2010/08/23 10:00:32
created_gmt: 2010/08/23 17:00:32
comment_status: open
post_name: interacting-with-swift
status: publish
post_type: post
layout: post
---

# Interacting with your Swift install

Once you have [swift](https://launchpad.net/swift) services running, you are going to want to interact with them. (You can have them running in minutes if you want: [swift-solo](http://github.com/cloudscaling/swift-solo)) ![OpenStack Logo]({{ site.url }}/assets/media/2010/08/OpenStack-Logo.png) Most of the currently available tools that interact with [Rackspace's Cloudfiles](http://www.rackspacecloud.com/cloud_hosting_products/files) are hardcoded to that API endpoint, so even though the APIs are virtually identical, most the current releases don't work with swift yet. Since we needed something for testing and demonstrations, we've been patching some of the third party projects to store and retrieve files with swift. Here's a couple quick examples using [Cyberduck](http://cyberduck.ch/), a GUI program, and [Fog](http://github.com/geemus/fog), a Ruby gem, from the command line. 

## **Setting up Swift**

All of the tools expect interaction with SSL enabled servers, so we will need to install and enable that within swift.  In the swift-solo repo, edit **chef/cookbooks/swift/attributes/swift.rb** and enable ssl: **`default[:swift][:proxy_server][:use_ssl] = true default[:swift][:auth_server][:use_ssl] = true`**

Swift 1.0.2, has an issue with ssl, so you will need to use a more recent version with the SSL fix. You can run from the swift trunk on launchpad, or we have a [cyberduck branch](http://github.com/cloudscaling/swift/tree/cyberduck) in our [swift repo](http://github.com/cloudscaling/swift) that has the fix in place.  Again, edit the **chef/cookbooks/swift/attributes/swift.rb** file:

**`default[:swift][:repository][:url] = "http://github.com/cloudscaling/swift.git" default[:swift][:repository][:tag] = "cyberduck"`**

Perform a swift-solo install, or re-install, as per the documentation.

You can use the **swift-auth-create-account** program to create your test account:

`ubuntu@host:~/swift-solo$ **sudo swift-auth-create-account account user password** https://example.com:8080/v1/338b6b2d-5137-40b4-9b95-9106a0d4db52`

What's important to note with creating the account is the URL that you are given back.  It is the URL your client will use to proxy into the swift services.  As such, the IP address or domain name exposed needs to be publicly available to your client, and it needs to be using **https.**

To verify it worked:

`ubuntu@host: **st -A https://127.0.0.1:11000/v1.0 -U account:username -K password stat** Account: 338b6b2d-5137-40b4-9b95-9106a0d4db52 Containers: 0 Objects: 0`   


## **Using Cyberduck**

![cyberduck logo]({{ site.url }}/assets/media/2010/08/cyberduck-logo.gif)

Download the [Cyberduck sources](http://cyberduck.ch/Cyberduck-3.5.1.zip), and edit the Protocol.java and lib/cloudfiles.properties to reflect the new endpoint following the [instructions in the swift documentation](http://swift.openstack.org/howto_cyberduck.html). (go Caleb!)

Then rebuild cyberduck, and start it.  You should be able to interact with your swift install.

  


## **Using fog**

![fog]({{ site.url }}/assets/media/2010/08/fog-300x120.jpg)

We have provided a patch to the [fog](http://github.com/geemus/fog) gem to enable support for Swift, as of version 0.2.27.  Install the fog gem, then setup your ~/.fog configuration file:

**`:default: :rackspace_api_key:     password :rackspace_username:    account:user :rackspace_auth_url:    example.com:11000`**

You can verify it works with the command line client:

`username@host$ **fog** Welcome to fog interactive! >> **f = Fog::Rackspace::Files.new(Fog.credentials)** >> **f.put_container("test_container")** >> **f.get_container("test_container")** >> **f.directories** <Fog::Rackspace::Files::Directories [ <Fog::Rackspace::Files::Directory key="testcontainer", bytes=10, count=1 > ] >` **UPDATE:** [The lastest builds of Cyberduck now support OpenStack](http://trac.cyberduck.ch/wiki/help/en/howto/openstack)

## Comments

**[James Liddle](#3036 "2011-05-04 07:01:00"):** SMEStorage has a neat OpenStack App: http://www.smestorage.com/?p=static&page=uploader

