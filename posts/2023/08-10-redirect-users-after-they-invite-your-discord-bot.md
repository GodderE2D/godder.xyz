---
title: Redirect users after they invite your Discord bot
slug: redirect-users-after-they-invite-your-bot
date: "2023-08-10"
tags: [discord, technology]
description: Ever wanted your users to see a landing page after they've invite your Discord bot?
---

Redirecting users to a landing page after they've invited your Discord bot is a great way to show them how to use it and
what it can do. A landing page is a great way to increase user retention and engagement. Using a landing page is much
more flexible and less intrusive than using a welcome message in a channel or sending a DM to the owner. (The owner
won't always be who invited your bot!)

## Add a redirect URL in the dev portal

To start, visit the [Discord Developers Portal](https://discord.com/developers/applications) and select your
application. Then, navigate to the OAuth2 tab and add your redirect URL under Redirects. This is the URL that users will
be redirected to after they invite your bot.

If you haven't decided on a path for your landing page yet, some examples are `/landing`, `/next-steps`, or `/thanks`.

![Redirects in the Discord Developers Portal](/blog-assets/redirect-users-after-they-invite-your-bot/redirect-url.png)

## Modify your bot's invite link

{% alert style="tip" %}

If you don't have an invite link for your bot yet, you can generate one by going to **OAuth2 > URL generator** in the
dev portal and selecting the `bot` and `application.commands` scopes. Include the permissions that your bot needs too.

{% /alert %}

Once you have added a redirect URL, you must modify your bot's invite link to include the redirect URL (and some other
things). To do this, append the following query parameters to your bot's invite link, making sure to replace the
redirect URI with the one you entered previously:

```
&redirect_uri=https%3A%2F%2Fexample.com%2Fthanks&response_type=code
```

Okay, what does that even mean?

- `redirect_uri`: This is the URL to which users will be redirected after they invite your bot, URL encoded. If you
  don't know how to encode a URL, you can use [this tool](https://www.urlencoder.org/).
- `response_type`: This can be either `code` or `token`, but `code` is recommended here. Later, this is going to be an
  [access code](https://discord.com/developers/docs/topics/oauth2#authorization-code-grant), but you don't have to know
  what that means right now.

Your finished invite link might look like this:

```
https://discord.com/api/oauth2/authorize?client_id=1126157327746211840&permissions=17180388560&scope=bot%20applications.commands&redirect_uri=https%3A%2F%2Freindeer.bsr.gg%2Fthanks&response_type=code
```

## Try it out!

When you invite your bot using your new invite link, you should be redirected to your landing page! If you're not,
ensure you've added both the `redirect_uri` **and `response_type=code`** query parameters to your invite link. See the
last step for more information.

## What's an access code?

When you invite your bot using the link you created, you'll be redirected to your landing page with some strange
[query parameters](https://en.wikipedia.org/wiki/Query_string) in the URL. Don't fret — this is simply an
[access code](https://discord.com/developers/docs/topics/oauth2#authorization-code-grant). This code can be exchanged
for an access token by your server, but without your client secret, this is useless to possible attackers. Access tokens
are used to make requests to the Discord API on behalf of a user, like getting their username or joining servers for
them.

![Query parameters in redirected URL](/blog-assets/redirect-users-after-they-invite-your-bot/query-parameters.png)

If you're wondering how to make a bot dashboard and exploring more about OAuth2, I recommend first checking out
[discord.js' guide](https://discordjs.guide/oauth2) on this topic. Otherwise, if you just find this ugly, you can use
JavaScript to remove the query parameters on the client.

---

The bot featured in this article is [Reindeer](https://reindeer.bsr.gg/), a Discord bot that helps server admins manage
reports in an organised and customisable forum channel. It's a new bot (as of writing this article), so it would be
greatly appreciated if you checked it out!

If you have questions, join the [Blue Shark River server](https://reindeer.bsr.gg/discord) to find me. Thanks for
reading!
