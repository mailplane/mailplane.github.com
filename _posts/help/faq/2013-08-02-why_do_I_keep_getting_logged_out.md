---
layout: help_post
title: 'Why do I keep getting logged out?'
author: Jessica
category: help
permalink: /faq/entry/why_do_i_keep_getting_logged_out/index.html
tags:
- faq
---



"When I switch accounts, Mailplane goes into a continuous loop of logging me in & out, can you help?"


We truly apologize for the inconvenience and would like our wonderful customers to know we are working very hard to solve this issue.  In the meantime, here are some steps that do help with the log out loop:

1) Block Google Plus where possible (Click Mailplane > Preferences… > Accounts > Advanced...)
2) Mailplane 3 > Reset Mailplane
3) Close Mailplane
4) Open Terminal.app
5) Enter defaults write com.mailplaneapp.Mailplane3 UseSharedHTTPCookieStorage -bool true
6) Open Mailplane again

Please don't hesitate to contact us if the issue persists.  You can email us directly at: supoprt@mailplaneapp.com


