---
layout: help_post
title: 'Copy account settings to another Mac'
author: Ruben
category: help
permalink: /howto/entry/copy_account_settings_to_another_mac/index.html
tags:
- howto
---

Mailplane stores are its accounts settings in a single file. This file contains text snippets, signatures and account options. If you use Mailplane on multiple Macs, you can avoid reentering account information if you:

1. Open Finder, Go > Go to Folder and enter `~/Library/Application Support/Mailplane 3`
2. Copy just `Accounts.xml` to the other Mac


### Other settings

* **Passwords:** Are stored in the login keychain (Keychain.app)
* **General Preferences:** Are stored in `~/Library/Preferences/com.mailplaneapp.Mailplane3.plist`
