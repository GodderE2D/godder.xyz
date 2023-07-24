---
title: Hello, alternate world
slug: hello-alternate-world
date: "2023-07-24"
tags: [technology, web, nextjs, meta]
description: New site, who dis?
---

It's been a while since I made a new site.

I've made a few hello world blog posts. Three, to be precise. So, I'll keep it short and sweet here.

## Motivation

I loved my old site, although it didn't feel like a personal site at all. Rather, it felt like your typical corporate
site without a dark mode. It had an IE-level response time, especially now that I realised slower devices and networks
existed.

The reason I chose for my previous website to be SSR (server-side rendered) was because I thought I was gonna write a
lot of blog posts. Thus, using SSR would make sense since creating a Git commit every blog post is quite the hassle.

I wrote five posts ranging from Dec 2021 to July 2023.

Now that I'm two years older and not half-drunk, I opted for a more personal website - one that I can easily update.

---

Fun fact, I don't really write really readable code. They work, sure, but maintaining and updating it is another story.
I do believe I improved over the years, with approaches like splitting pieces of codes into multiple files. Ultimately
however, I believe I just improved in general. Knowing more tricks in JS/TS helped me, and my previous website was no
exception. After all, programming is a hobby of mine and I want to improve.

And the best way to improve is by doing it. So here I am today, I guess.

## Tech stack

Okay, enough of the boring stuff. Let's talk about the tech stack. (It's basically the same as last time.)

### Next.js 13 App Router

This is my first Next.js app that I wrote in the App Router. I have to say, I'm enjoying it. I love how pages and
layouts sync together perfectly and the clear distinction between server and client components. Additionally, I'm using
SSG (static site generation) now instead of SSR (server-side rendering) which basically means no server functions.
(Yay?)

Honestly, no complaints. My code right now could do better; if you would like to criticise my code - please do.

### Tailwind CSS (without DaisyUI)

It's not that I didn't want to use DaisyUI (in fact, I was really hyped about the v3 release). Actually, the main reason
was so that this website doesn't look like a carbon copy of my previous website.

Plus, I feel more comfortable creating my own components now and using flexbox/grid to position them. I used a bit of
Flowbite components which were great QOL tools with unstyled-ish Tailwind components.

PS. Flowbite - why do I have to use `"use client"` on all your React components, even the ones that don't require JS?

### Markdoc

I steered away from MDX in the beginning due to how hard it was to set up dynamically, but I think it's a bit too late
now that I realised my website is static. Markdoc although is a great alternative, and I'm glad I found it while making
[Modslides](https://modslides.com).

## What to expect (again)

I really hope to update this site more often. I said this a few times so I get if you don't trust me on this.

This site will be filled with randomness just like my last one, but it's still very much developer oriented. And
honestly, I'll keep it that way. No one else reads my blog posts tagged with "nextjs" anyways.

---

Jokes aside, I really enjoyed the three days while making this site. It was a fun experience, and a project that I
actually "finished". Thanks for reading this post with me, I really appreciate it a lot.

As with tradition, I'll end this post with a green heart 💚

---

_Psst... you should check out [the 404 page](/404)…_
