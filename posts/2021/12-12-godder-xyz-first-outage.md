---
title: Godder.xyz's first authentication outage
slug: godder-xyz-first-outage
date: "2021-12-12"
tags: [technology, aws, supabase, tailwindcss]
description:
  ⌛️ Within 0 days of version 2 of Godder.xyz being released, our first authentication-related outage has appeared,
  which could be linked to the prior AWS outage.
---

{% alert title="⌛️ Historical post" style="note" %}

This article was migrated from the old blog and is being kept for historical purposes.

{% /alert %}

---

{% alert style="note" %}

Before diving into it, if you came from this blog post using Google, it probably isn't what you're looking for. This
blog post expresses the personal reasoning and logic behind the outage **of my website**, not the AWS outage as a whole.
Thank you!

{% /alert %}

It was a peaceful evening on Tuesday, November 7th, 2021. I pushed version 2 of Godder.xyz and with it, I had my own
blog post along with it. Then, lightning strikes. It was _an absolute nightmare_, and I hate every single bit of it
until a few minutes before writing this blog post. If you're still reading on, you might be wondering what's happening.
Well, let's see!

# How I found out

To be honest, it wasn't that hard. Everything was working on the development version of Godder.xyz (I swear 👀), but
when I pushed to production, logging in and out suddenly stopped working. Everyone who tried to log in or log out got
slapped with a Cloudflare 502 Bad Gateway error, and I couldn't even make an alert about it on the website without
pushing code to [the GitHub repository](https://github.com/GodderE2D/godder.xyz), because I can't even log in to my own
website. Sad, right?

# The fix

There was no fix for the first few days. I had emailed Supabase support about the issue, and after some back-and-forth
replies, none of us knew what was happening. The Supabase team guessed it was related to the AWS us-east-1 outage the
other day. Perhaps it was, but it probably wasn't. You'll see later.

Then, on the third and fourth evening, I had a brilliant idea. (Or did I? I'm really dumb, in case if you haven't
figured out yet.) I decided to migrate to a new Supabase project, by deleting my old one, creating a new one with the
exact same settings as the old one, basically mirroring it. Sadly, Supabase doesn't have the function to do this
currently, so I had to do many things manually myself.

If you spotted any bugs, let me know! You can open an issue on
[the GitHub repository](https://github.com/GodderE2D/godder.xyz/issues/new) or [email me](mailto:main@godder.xyz) about
it.

# Relationship with the AWS outage

Recently,
[AWS had an outage](https://www.theverge.com/2021/12/11/22829544/amazon-web-services-overwhelmed-network-outage) in the
us-east-1 region, which is where my Supabase project was hosted. 2 hours after the outage was announced, my site went
out (well, for the authentication part, but still).

**However, I really think this is a coincidence.** Why? Well, I just think so. I didn't really have much logical
reasoning behind this, but the development version was still working after the outage has been announced. Of course, it
could just be that my site didn't get hit by it yet.

The reason is that the outage still occurred days after the AWS outage has been resolved.

There, that's my main reason behind why it's not. I know it's not a smart reason, and I am no scientist, so what do I
know? I'm just a random kid on the internet making blog posts about stupid AWS outages. Wow, what a disappointment I am.

# Bonus: Upgrading to TailwindCSS v3

You might be wondering, what the `tailwindcss` tag is doing on this blog post, and it's because along with Godder.xyz
v2.1.0, I upgraded to TailwindCSS version 3! Exciting!

When I upgraded to [TailwindCSS v3](https://tailwindcss.com), and unlike [discord.js](https://discord.js.org)'s v12 to
13's upgrade experience, it was way nicer and the upgrade guide was simple and straight to the point. I would recommend
everyone to upgrade to TailwindCSS v3 now before it's too late! Unless you're using
[Create React App](https://create-react-app.dev), of course. Then there will be some issues with PostCSS.

As along with every other blog post, I would like to thank you for reading to the end! This is my second ever blog post
on Godder.xyz, and it's still a work-in-progress. Thank you for checking it out anyways! I really appreciate it 💚
