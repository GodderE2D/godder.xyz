---
title: Hello, world!
slug: hello-world
date: "2021-12-07"
tags: [technology, react, nextjs, supabase, tailwindcss, daisyui]
description:
  ⌛️ Welcome to my website and my blog, Godder.xyz! Learn more about what this website is about, how I created it, the
  experience I went through it, and what to expect out of this website.
---

{% alert title="⌛️ Historical post" style="note" %}

This article was migrated from the old blog and is being kept for historical purposes.

{% /alert %}

So, you might be thinking about what this website is. Well, in this blog post, you will learn everything that you need
to know about the [godder.xyz](https://www.godder.xyz/) website, and more!

# What it's about

_It's about drive, it's about power, we stay hungry we devour..._

Sorry, just had to do it. If you're reading this in the future, maybe this will give you a reminder about 2021 memes and
why it sucked.

Anyways, it's my website. Every technical ""developer"" ""needs"" one, apparently. Even though I'm not looking for a job
(yet), I decided, why not, to create a website? My old website, which I had for a long time, was hosted on Google Sites.
It featured some of my social platforms and how to contact me, and a few Discord servers I recommend and am active in.

# How it's created

If you haven't read my [README](https://github.com/GodderE2D/godder.xyz#technologies-used) yet, you might be wondering
how this site is crafted technically. Well, you'll see now!

## JavaScript Frameworks: [React](https://reactjs.org) and [Next.js](https://nextjs.org)

Rumours say that every day, a new JavaScript framework is born. Well, that could be true, as I can see so many new
Hacker News posts about new JavaScript frameworks every day. Even if it gets popular, it doesn't last long.

And, you probably do need a JavaScript framework, unless you'll be writing a lot of `document.getElementById()` or `$()`
a lot. So, I chose the one that I was most familiar with at the time: React. And with that, I would also need a
framework from it to pick from:

- [Create React App](https://create-react-app.dev) (client-side rendering)
- [Next.js](https://nextjs.org) (server-side rendering or static generation)
- [Gatsby](https://www.gatsbyjs.com/) (static generation)

With that, I chose Next.js with server-side rendering. There were four main reasons I picked Next.js:

- It has server-side rendering to generate blogs per request
- Good SEO (search engine optimisation)
- Good documentation
- It is developed by Vercel and I receive nice benefits from it when using it with Vercel, such as Edge Functions.

More on why I chose Vercel to host my website later.

## CSS Frameworks: [PostCSS](https://postcss.org), [TailwindCSS](https://tailwindcss.com), and [DaisyUI](https://daisyui.com)

Before we get started on everything, who doesn't want PostCSS? Even if you're writing CSS raw and using PostCSS in a
script tag, you should be using PostCSS. Full stop.

Nowadays in 2021, there are many CSS frameworks to pick from. Writing CSS raw is boring, even if you're using it with
[Sass](https://sass-lang.com). Here are the ones that I know of at the time I was choosing:

- [Bootstrap](https://getbootstrap.com)
- [Bulma](https://bulma.io)
- [Material Design](https://material.io/design)
- [Material UI](https://mui.com)
- [ChakraUI](https://chakra-ui.com)
- [TailwindCSS](https://tailwindcss.com)

The last one stood out to me the most. TailwindCSS was the only one on the list with low-level components, tons of
plugins, and a _huge_ community. However, I didn't know TailwindCSS at first, so I just took a glance and it and tried
it out.

Spoiler alert: it didn't go well.

So, in the end, I decided to go with DaisyUI, as it has a Bootstrap/Bulma feeling to it, while still leveraging the full
power of TailwindCSS, as I didn't want to let go of TailwindCSS yet.

And by the way, before I went with DaisyUI, I almost considered purchasing [TailwindUI](https://tailwindui.com). Let
that sink in for a bit.

## Backend: [Supabase](https://supabase.com)

Supabase! What I consider the best BaaS (backend as a service) in 2021, and beyond. It's a Firebase alternative with a
_full_ [PostgreSQL](https://www.postgresql.org) database, authentication, storage, and functions (coming soon).

It has one of the best interfaces/dashboards (oh, it's called the Supabase Studio) ever, and it could be even better
with more features (which are on the way), such as Analytics from Firebase. Even I didn't believe it was true at first.
Would definitely recommend over Firebase any day, 10/10.

# The experience

The experience wasn't well, long story short. There were many obstacles throughout the development of the website. It
was all good at first until I hit my first major obstacle: Supabase authentication. It was a nightmare to deal with,
especially with Next.js and server-side rendering (SSR). Back when I was working on my first real React project that
wasn't guided by a YouTube tutorial, I used [Create React App (CRA)](https://create-react-app.dev).

Oh, and did I tell you that working with Supabase authentication, even Supabase in general, is a nightmare with Next.js?
My only complaint about Supabase is that the experience with server-side rendering applications could be improved ... a
lot. A suggestion would be to have a server-side rendering mode, such as what [Auth0](https://auth0.com) offers.
Speaking of Auth0, a suggestion I have is to offer two-factor authentication (2FA) support natively. I'm not even using
username + password login methods in any of my Supabase projects, however, it would still be a cool feature to have,
knowing well in my dreams that I could finally build a Supabase project at ease. Like that would ever happen 😔

Oh, and, could you lift the 3 projects and 2 organisations restrictions on one Supabase account? Pretty please? Love
you, Supabase Team 💚 (and Ant, of course. I love your emails when you tell me my projects are paused)

# What to expect

Please don't expect much out of me. Keep in mind that I won't be posting blogs here every week, probably once a year,
and it won't be all about technology and my developer experience. This website is going to be like my YouTube channel:
full of random things. But mostly technology, Discord-related content, social platforms, and gaming.

And, by the way, not every blog post from me is going to be this long. I spent 1 hour writing this, and I am not looking
forward to investing more time into my blog.

Thank you for your time and effort in reading my first blog post on [godder.xyz](https://www.godder.xyz). Just know
that, deep inside my heart, I appreciate it. A lot. Thank you, again 💚
