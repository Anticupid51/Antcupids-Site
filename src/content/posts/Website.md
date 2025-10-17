---
title: How I made this site.
published: 2025-10-15
tags: [Blogging, Website]
category: Blog
draft: false
image: "/images/website.webp"
---

# The Lazy mans way of making a site

Now you might be thinking "Oh the lazy mans way? It must be Ai!", because let's be honest there is nothing more lazier then using Ai for everything you do. Sure, we can argue on the benefits of using Ai to do something with ease like making a website, but there is a ton of flaws in Ai as of right now and relying on them to do something this mundane on the internet is just sad... Don't become self reliant on Ai, use it as a supplement at most if need be, since at the end of the day it will only make you lazier and more incompetent.

This site was made by copying a template off of [Astro.](https://astro.build/themes/1) Essentially the lazy way of making a site is to grab one of these free templates and edit it yourself. So I chose the [Mizuki](https://docs.mizuki.mysqil.com) theme and following this redirect will actually take you to their documentation (Top right of the site has an english option), the majority of themes should have some form of a documentation which will be 100% the best way for you to understand everything once you try it out for yourself.
![Mizuki](/images/Mizukii.webp)

As seen above there are 2 redirects whenever you choose a theme, go ahead and test the live demo's until you find whichever you like the most. Clicking "Get Started" will redirect you to Github and I hope you have an account, because it will be needed. Now that you are on the Github there is a plethra of ways to copy the theme and to get started on your website! The way I copied when first attempting to do this project was entirely different from what I am about to show since this practically does the same thing with less steps and hassles.
![Template Woah](/images/Template.webp)

Top right of your screen tere should be a template button that has a dropdown with different selections, go ahead and choose "Create a new repository". It will make your repo, from there click the "Code" dropdown and navigate to **codespaces** and go ahead create the codespace for the main. Now you have your own coding space to start manipulating your site without having to install anything.
![Why are you reading this](/images/codespace.webp)

So from here on this will mainly concern the Mizuki theme, so if you are using another theme and it doesn't quite follow along with how Mizuki is structured then go ahead and read the documentation for that theme and get to learning. Now, I will not hold your hand through the whole process since at the end of the day we need to know how to use our brains one way or another. I will be showing the main files that were used in the process of making this site.
![Ok this is starting to get concerning, stop reading these](/images/config.webp)

The majority of everything that you need to mess with will be located under the *src* tab, in the image provided go ahead and open the config.ts file under the src tab. Go ahead and start scrolling through it and attempt to figure out what everything does. If you did actually scroll and look at everything you would have noticed our biggest issue is currently the language since all of the comments are not english, you can simply just google translate all of them and get to learning. Config.ts holds a ton of useful things within itself to help you customize the site, for example if you don't want anime girls as the website background because you are totally not a weeb or anything ≽^•⩊•^≼.

 Simply look at config.ts for the directory: "(/assets/desktop-banner/d1.webp)". Just a heads up this won't be under **src** instead it will actually be under the **public** folder, from here you can change the images to something else. Also please don't forget the mobile banners or there will still be anime backgrounds on it regardless if you changed the desktop's, why? Well figure it out yourself. If you are lost go ahead and use google or Mr.Gpt because you need to learn on your own especially if you can't figure out how read directories.
![Last chance to stop reading these](/images/Banner.webp)

As I mentioned above I won't tell you how to do everything because you need to learn and if I could do it then you easily can as well. So next I will be showing you how to view the changes that you just made so we can ensure everything is 1. working 2. looks like how you imagined.

There is a terminal and will be how we can view this on your localhost! The image below will show how the command should output. Simply type without quotations "pnpm dev", this will make a dummy site that only you can view, so it's perfect for making changes without anyone seeing the embarassing failures. Go ahead and copy and paste the link that it provides into a separate tab and you should see your site loaded.
![I can't stop you, well... maybe](/images/terminal.webp)

Once you are done with your site and all of your editing, the next part is to actually save it and update our github repo. I will admit that it took me some searching to actually figure this out, go ahead and look at the left side of your code space and find the weird looking Y with circles on each of its points. This is called **Source Control** and it will be the main way to push all of your commits & saves, so go ahead and click the commit button and it should open another file that is purely text based, you need to put some form of a name in the text and after that save it by simply clicking the checkmark top right that says "Accept Commit Message". Now it will forward you to a screen that is essentially showing you the before and after changes to the code, once you double check everything go ahead and click commit again and it should fully update your Github repo with the new changes!

*I won't lie, this would have made my life so much easier if I found out about this before*
![Still reading?](/images/fortheblog.webp)

Cool now what? Well, now I will explain how I got my site as a proper site. Just a heads up Github does have a feature where you can upload static pages as sites and they will usually end with a .io so "ThisIsNotARealSite.io" something along those lines, but anyways I didn't use the github method and went with the way my buddy reccomended and that would be through CloudFlare!

If you don't know CloudFlare then you are living under a rock and that is fine, probably...  Go ahead and click this -->[CloudFlare.](https://workers.cloudflare.com) This will open up the cloudflare worker site and go ahead and click **Start Building**, from there make an account to access the dashboard of CloudFlare. There is a bunch of tabs, but we want **Compute(Workers)** <-- navigate to here and you should see a page similar to the image below.
![Boom Boom Pow](/images/Cloudflare.webp)

Simply click **Create application** --> import a repository --> choose your sites repo and that should be it since the workers will begin to construct the site. From there you'll notice that once the site is done the entire name of it is whatever your cloudflare accounts name is and we should try not to dox ourselves hahaha, so this is where a DNS comes into play and it will allow us to name our site whatever we want! For a small price, but to be honest we did everything so far for free and spending a $10-30-ish a year isn't a bad deal. I personally used the registrar of cloudflare for my domain so that is what will be linked here --> [Domains.](https://www.cloudflare.com/products/registrar)

You now should have bought a domain and could be wondering "how do I connect this to my site?". Open your cloudflare dashboard and click the site within the **Compute(Workers)** tab, roughly along the right side is an area that says **"Domains & Routes"**, click that and find the pencil button to the right of your sites name. Just paste your new domain within the textbox like below and you should be good!
![There is no reward for reading these](/images/domain.webp)

Thats all there is to it, but sure I could have used an Ai and been done in a mere hour vs 4 days of editing and configuring... Honestly it's hard to deny the ease of everything done by Ai, but it won't get us anywhere nor add any advantages to the job market unless you're the person coding Ai. Remember to use the tools given to you and do your best! This is 3000% easier then learning HTML & CSS, but I have big plans for the future with my own custom made site. No themes, everything hard coded and alot of fun easter eggs within it. I am rambling now, so I wish you all luck with your future journey.


P.S. *There is still a good chunk of things I need to polish and fix with the site, but that will be in the near future.*