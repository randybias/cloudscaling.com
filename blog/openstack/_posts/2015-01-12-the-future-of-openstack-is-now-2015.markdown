---
author: Randy Bias
comments: true
date: 2015-01-12 16:00:39+00:00
layout: post
slug: the-future-of-openstack-is-now-2015
title: The Future of OpenStack is Now, 2015
wordpress_id: 7691
old_categories:
- OpenStack
---




This year will be a crucial year in OpenStack history.  This is the year we fix much of how OpenStack is structured or die trying.  By structure, I mean the vision, the project structure, the integrated release cycle, and the board and TC’s role in driving direction.




First, **stop** and [read this blog posting](http://ttx.re/the-way-forward.html) by Thierry Carrez, release manager for OpenStack.  Then, if you haven’t already, make certain you watch my [related keynote](https://www.youtube.com/watch?v=zOAb6wfBYxU) (preso w/no video is [here](http://www.slideshare.net/mirantis/randy-bias-cloud-scaling-openstacksv)) from the OpenStackSV meeting in September of last year.




The problem can be stated simply, if somewhat brutally: **OpenStack is at risk of collapsing under its own weight.**




The original vision had the OpenStack community delivering a tightly integrated release focused on basic infrastructure services on a 6-month release cycle.  The problem is that this shared vision was at odds with two things: 1) the inherent inclusivity of the OpenStack community and 2) people’s wildly differing interpretations of the word “cloud”.  To be honest the latter is endemic to the cloud space and has been since its inception, but the [mission statement](https://wiki.openstack.org/wiki/Main_Page) of OpenStack doesn’t clarify, instead using the hopelessly abuse word “cloud”.




Let’s examine these challenges I outlined and examine a way forward, ending with a plea from myself on how you can help.




**Background**




When OpenStack launched in summer of 2010, I and many others saw the immediate value of an open source infrastructure-as-a-service stack with a vibrant community.  Something Eucalyptus and CloudStack had both failed to achieve.  In fact, the very hallmark of OpenStack was its inclusivity.  If you joined the community, played by the rules, and wanted to make something happen, it was clear how to do so and you were actively encouraged to go for it.  This is an important facet of why OpenStack grew so fast and had so many amazing participants.




However, there was one dark spot in this inclusivity.  Namely, competing OpenStack projects were actively discouraged as were adding projects written predominantly in non-Python languages.  The attitude in the former case was one of “why don’t you fix what is already broken?” and in the latter, one of “we want to allow developers to move easily between projects!”  Both laudable goals, but both ultimately unwieldy and misguided.




Although unspoken, another source of this tension was the process by which the “integrated release” was delivered every 6 months, where in theory we:





	
  1. release code

	
  2. have a summit where we discuss the next major release

	
  3. work for months including mid-cycle meetups to get new code ready

	
  4. test, test, and re-test all of the code together

	
  5. release code and begin again




Now with only two projects, Nova and Swift, in the beginning, this was not a problem, but as the number of projects grew, significant organizational issues began to arise.  Thierry did the most eloquent job explaining so I am just going to try and fill in the gaps and talk about this more from a product and business perspective.




The issues with the growth in projects was deeply compounded by many of the new projects being “cloud” but entirely different areas of cloud, such as Platform-as-a-Service, Database-as-a-Service, etc.  Many of these don’t need to be part of an integrated test release every 6 months and in fact should probably be developed on their product cycles




All together this meant several things:





	
  * The integrated code cycle demanded a rethink

	
  * The importance of delivering a tightly integrated release was in question

	
  * OpenStack as a single monolithic “cloud operating system” was clearly untenable

	
  * The idea that developers could move seamlessly between projects was dubious

	
  * Delivering inclusivity is probably the “killer app” for OpenStack and its Foundation




**OpenStack by Design**




In my OpenStackSV Keynote, [Lie of the Benevolent Dictator](http://www.slideshare.net/mirantis/randy-bias-cloud-scaling-openstacksv), I highlighted what I saw as a critical gap in the organizational structure of the community.  Namely that we needed real product management and product strategy leadership.  During the 2014 Atlanta Spring Summit, the Board and the Technical Committee had their first joint session.  From that meeting it became clear that the TC was focused on managing the 6-month integrated release cycle and was focused exclusively on tactics.  At the same time, the Board and Foundation did not feel that they had the remit to drive technical product requirements.




The result is that there is a lack of cohesive long term (2-5 year) planning around OpenStack from a product perspective.  Instead, we rely on the the grassroots level organization that may or may not happen as each developer or company contributes code.  In effect, we suffer from the [Tragedy of the Commons](https://en.wikipedia.org/wiki/Tragedy_of_the_commons).




We asked for this when we encouraged an inclusive environment and I certainly don’t want to do away with a key strength of OpenStack; however, the bent for inclusivity needs to be tempered with better long term product planning.






> 
> _We need OpenStack by Design and Intent, not by accident._
> 
> </blockquote>




**OpenStack’s Way Forward**




Again, Thierry’s extremely eloquent outline of how to move forward from a technical point of view is fantastic, but perhaps there is room for improvement?  If inclusivity and the community is the most important aspect of OpenStack, then perhaps we should operate as such.




I believe there are a number of key items that need to happen this year at the Board, TC, and Foundation level.  Fundamentally, we need to look more like a set of loosely-coupled independent projects that MAY be put together in a variety of ways. [1]




These are the key items that need to addressed this year:





	
  * Reorganize to a more scalable model, like the Apache Software Foundation

	
  * Discard the integrated release process, in favor of interoperability testing

	
  * Promote DefCore and the CI system for delivering interoperability between projects

	
  * Explicitly encourage non-Python OpenStack projects

	
  * Re-position OpenStack in the minds of the market and community

	
  * Create an ongoing educational process to help reinforce this re-positioning

	
  * Develop “integration streams” for interrelated OpenStack projects that need interop

	
  * Re-imagine the TC as an integration and architecture team not SDLC management

	
  * Plug product management kung fu into the TC




**Your Help is Necessary To Enable This Vision in 2015**




I have been working behind the scenes, along with many other board and TC members, to help educate on these issues.  I worked with the DefCore and RefStack teams, helping to encourage formation of the product management working groups, and bringing up key issues at board meetings.  I believe that our collective efforts helped us get to the point where change is possible and Thierry’s article shows that the appetite and willingness to change is here.




I want to continue representing the community as a whole on the OpenStack Foundation Board of Directors.  I know that I can represent your interests and help guide OpenStack down the right path.  This year is a formative year for OpenStack and I know that my particular flair for breaking the glass will be critical in encouraging change.




For the first time I’m [running as an individual representative](http://www.openstack.org/election/2015-individual-director-election/CandidateList/) who wants to create the best OpenStack possible for everyone.  I am focusing on inclusivity, revitalizing the OpenStack community and process, and driving towards a model that ultimately is the best for vendors, customers, end-users, developers, operators, and all other stakeholders within OpenStack.




I want your vote!  Thank you.










--Randy







* * *




[1] Hopefully this will get rid of the banal requests from unwitting customers for “vanilla OpenStack”, something that has never existed anyway.



