---
layout: help_post_en
title: 'Copy account settings to another Mac'
author: Ruben
category: help
permalink: /howto/entry/copy_account_settings_to_another_mac.html
tags:
- tricks
---

Mailplane stores are its accounts settings in a single file. If you use Mailplane on multiple Macs, you can avoid reentering account information if you:

1. Quit Mailplane
2. Open Finder, Go > Go to Folder and enter `~/Library/Application Support/com.mailplaneapp.Mailplane3`
3. Copy just `state.db` to the same location on the target machine


### Other settings

* **Passwords:** Are stored in the login keychain (Keychain.app)
* **General Preferences:** Are stored in `~/Library/Preferences/com.mailplaneapp.Mailplane3.plist`
