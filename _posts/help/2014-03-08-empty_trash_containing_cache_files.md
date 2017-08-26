---
layout: help_post
title: 'Empty Trash Containing Cache Files'
author: Gor
category: help
permalink: /howto/entry/empty_trash_containing_cache_files.html
tags:
- troubleshoot
---

Mailplane marks cache files as readonly which prevents them from being modified. This might prevent you from emptying the Trash if you move them manually (or via an app remover) into the Trash.

![screen1](/assets/howto/2014-03-08-empty_trash_containing_cache_files/screen1.png)

Follow these steps to empty your Trash:

1) Open Terminal app

2) Enter `sudo rm -rf ~/.Trash/*` and press `Enter`.

3) You may be asked to enter your OS X account password. Type it and press `Enter`.

![screen2](/assets/howto/2014-03-08-empty_trash_containing_cache_files/screen2.png)
