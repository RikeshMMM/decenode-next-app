---
title: The Inception of Decenode
description: If you’ve ever tried running a complex ML model with a gigantic dataset, you must indeed be familiar with the hassles of it taking hours and hours of setting up, debugging, optimizing and training.
author: Aaishwarya Khalane
date: 2022-02-17
type: Blog Post
cover_image: /images/blog/marc-sendra-martorell-Trl16J73hd0-unsplash.jpg
author_image: /images/team/aaishwarya.jpg
---

If you’ve ever tried running a complex ML model with a gigantic dataset, you must indeed be familiar with the hassles of it taking hours and hours of setting up, debugging, optimizing and training.

I recently graduated with a First Class Honors in Computer Science and my final year dissertation contributed to a major chunk of my grades. Like many other final year students who wished to "leave a mark" with their work, the naïve me was under the misconception that using complex models and huge datasets would make my work more remarkable. Little did I know that this notion would cost me my blood, sweat and tears.

My long-standing fascination about human psychology and understanding human emotions made me choose "Context-Aware Multimodal Human Emotion Recognition (ER) in online videos" as the topic for my dissertation. This clearly meant I’d have to work with a lot of video data. Now, if y’all have any experience with video data, you know it takes a lot to process. Moreover, multimodal ER meant I had to work with not a single, but multiple modalities (audio, video, text) which made it all the more tedious. My urge to use the largest ER dataset available with 96 gigs of data for "leaving a mark" certainly did not help.

Not too soon did I realize that my average Windows PC with an ordinary RAM and a not-so-fancy GPU was in no way enough to process this massive amount of data. The clock for my dissertation deadline was ticking faster than ever and I knew I had to resort to a cloud computation platform like Azure, AWS, Collab, etc.

But my hardships weren’t over yet. Setting up the custom environment for my project on these platforms was a task on its own. After a few sleepless nights of my failed attempts to update the Ubuntu versions, being unable to install the necessary libraries whilst paying a hefty price for all the hours it took me just to setup my workspace, I was disheartened and gave up on these platforms. At this point, the first class seemed too far-fetched, the chances of me barely cutting through my final year were slim.

Luckily, my friend Rikesh walked in as a saviour and was kind enough to let me access his workstation remotely to help me complete my project. I could finally see a ray of hope for being able to run my code. I used the SSH protocol to connect to the workstation remotely, a plan I wish I’d resorted to sooner, but I guess it’s better to be late than never. The realization that via SSH I could virtually utilize the CPU/GPU of a distant PC without causing any interruption in the activities of its physical user blew my mind and triggered an idea.

Not everyone facing technical difficulties like I did would have access to a generous friend who lends them their PC. So, what if there existed a marketplace platform where people, especially, ML developers like me would be able to remotely rent out CPU/GPUs from virtual hosts or rentors. A platform resembling an "AirBNB for Servers" where the virtual hosts could list out their spare PCs and developers seeking for them could easily browse through such a selection of PCs with a wide range of specifications suitable for their needs. The rentees in need of computation power would benefit from lower rental prices compared to the monopolized cloud computation services, while the hosts would be able to monetize their surplus CPU/GPU resources. A win-win for both the parties involved!

Soon after what felt like having a "Eureka!" moment, I shared this idea with my friends Rikesh, Alister and Harshan. We unanimously found the concept extremely promising, and its untapped potential tantalized our inner entrepreneurs. We believed in the great potential the idea had to be developed as an ambitious start-up, but we also were well acquainted with the challenges it posed, the biggest of which was developing our own network of decentralized machines. To our pleasant surprise, our brilliant classmate Akilan had recently developed his own open-source peer-to-peer network for distributed computing called P2PRC. P2PRC sounded like quite the solution for our problem, and we approached Akilan to come on board with us. Utilizing the power of distributed computing via P2PRC on our platform would mean users could now distribute their development tasks and combine the power of multiple machines facilitating time-efficient development. This broadened our vision of providing not only cheaper but quicker development to ML practitioners attributed to the use of distributed computing.

After iterations over iterations of brainstorming and evolving the primary concept, "Decenode" was born. We, the 5 co-founders of Decenode are proud and pumped to have embarked on the mission to transform the way the world computes by enabling power sharing on the click of a button.

Who would’ve thought those excruciating, sleepless nights I went begging for computation power would inspire us to create our very own power-sharing platform! I’m ecstatic to be working on my dream project with a such a strong and passionate team and I can’t wait to explore what’s to come!