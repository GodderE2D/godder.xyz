---
title: Should you use DaisyUI in your Tailwind CSS website?
slug: should-you-use-daisyui-in-your-tailwind-css-website
date: "2022-03-31"
tags: [technology, web, css, tailwindcss, daisyui]
description:
  ⌛️ When I first entered the web development world, I loved Tailwind CSS with DaisyUI. Today, I am sharing some
  thoughts about DaisyUI and the advantages and disadvantages of using DaisyUI, and some thoughts after being more
  experienced with Tailwind CSS.
---

{% alert title="⌛️ Historical post" style="note" %}

This article was migrated from the old blog and is being kept for historical purposes.

{% /alert %}

DaisyUI is a beautiful and easy-to-use Tailwind CSS plugin that mimics the traditional classes of a CSS framework
(`btn`, `card`, etc) such as Bootstrap or Bulma while still taking full advantage of Tailwind CSS. However, is using
DaisyUI with TailwindCSS _that_ beneficial in 2022?

When I was starting out in web development, I chose Tailwind CSS because of how versatile it is and I loved the idea
that you don't need to maintain a separate CSS file in your project. I had previous experience with Bootstrap and Bulma
before, so I was used to writing traditional CSS framework-class names like `btn btn-green` for buttons or
`card card-transparent` for cards. When I transitioned to Tailwind CSS, I missed how easy creating simple components in
HTML was.

Then, I stumbled across DaisyUI, two best things smashed together: traditional CSS framework-class names and Tailwind
CSS. Adding on from above, DaisyUI adds traditional CSS framework-class names like `btn`, while still taking full
advantage of Tailwind CSS. For instance,

Tailwind CSS + DaisyUI:

```html
<button class="btn btn-orange-500">Hello, world!</button>
```

Pure Tailwind CSS:

```html
<button class="m-3 bg-green-500 p-2 font-semibold text-white hover:bg-orange-400">Hello, world!</button>
```

Of course, if you are using a component library like React or Vue, you could easily extract that into a separate file
and use it elsewhere, like this:

```jsx
// components/button.jsx
export default ({ children }) => {
  return <button class="m-3 p-2 bg-green-600 text-white font-semibold hover:bg-green-400">{children}</button>;
}

// pages/index.jsx
import Button from "../components/button.jsx";

export default () => {
  return <Button>Hello, World!</Button>;
}
```

While many consider this a "best practice", I find this quite irritating to work with. Half the time, I would need to
easily customise my components, usually just for that occurrence. This means that I would need to go to my component
file, copy and paste it in to my main file, replace variables such as `{children}` to the actual text I want to put in,
then add, remove, or change some class names. Now, versus that from simply adding class values, which takes less than
ten seconds to accomplish using DaisyUI:

```jsx
<button class="btn btn-primary text-xl focus-visible:outline-red-500">Hello, world!</button>
```

At this point, you might be wondering: are there any disadvantages? Well, after you get a little more experience with
web development in general, you'll go back to square one, which is probably the main reason you switched to Tailwind
CSS: **you don't want two websites you build to look identical**.

Try building two very similar websites with DaisyUI. While still having the same concept, use different colour schemes,
fonts, and the general style (e.g. simple, playful, ancient, etc). With a traditional CSS framework or DaisyUI, you'll
see that both will be very similar. However, if you're using Tailwind CSS, that would be the complete opposite, that is,
if you're not thinking about your previous design whilst building your second one (which trust me, is very hard to not
do).

At the end of the day, you'll find that using just Tailwind CSS will save you a lot of trouble with making
similar-designed websites. Of course, you could still use DaisyUI for their _amazing_ utility components such as
countdowns or code blocks, but other than that, using your company's design system or your own's will be better off in
the long run, and guess what? You'll be more proud of yourself after you finish it!
