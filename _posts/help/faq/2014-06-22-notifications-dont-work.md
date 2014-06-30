---
layout: help_post
title: 'Notifications do not work'
author: Lars
category: help
permalink: /faq/entry/notifications-dont-work/index.html
tags:
- faq
---

Notifications don't work in Mailplane 3 at the moment if [2-step verification](http://mailplaneapp.com/howto/entry/two_factor_authentication) is enabled.

![](/assets/help/faq/2014-06-22-notifications-dont-work/status_bar_menu.png){.shadowed}

Google made some changes on their end which broke how we're fetching new messages in the background. Google is working on it and their fix should be available anytime soon. See [here](http://stackoverflow.com/questions/24345054/gmail-atom-feed-with-2-legged-oauth-receive-401-error#comment-37740167).

We don't like to encourage you turning off 2-step verification but it's the only way to bring notifications back in the meantime. If it still doesn't work after turning off 2-step verification or if you haven't had 2-step verification enabled before, uncheck/check `Enable Notifications` for that particular account and make sure you entered a password inside the `General` tab.

![](/assets/help/faq/2014-06-22-notifications-dont-work/password.png){.shadowed}

![](/assets/help/faq/2014-06-22-notifications-dont-work/enable_notifications_checkbox.png){.shadowed}