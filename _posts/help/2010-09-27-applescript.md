---
layout: help_post
title: 'AppleScript'
author: Ruben
category: help
permalink: /howto/entry/compose_email_using_applescript/index.html
tags:
- integration
---

AppleScript is a scripting language built into MacOS. It is primarily designed to exchange data between applications in order to automate repetitive tasks. See more [here](http://en.wikipedia.org/wiki/AppleScript).

This is a sample script which can be used to compose and directly send emails.

This script composes a new email message, sets the subject to "Hello from Mailplane" and send the TO address field to ruben@mailplaneapp.com and lars@mailplaneapp.com. The body will be "This is the body text". The message is presented in a separate window and the user has the chance to add more content before manually sending it.

	tell application "Mailplane 3"
	  set m to make new outgoing message with properties {directlySend:false, optimizeAttachments:true}
	  tell m
	      set r to make new to recipient at end
	      tell r
	          set address to "ruben@mailplaneapp.com"
	          set name to "Ruben"
	      end tell
	      set r to make new to recipient at end
	      tell r
	          set address to "lars@mailplaneapp.com"
	          set name to "Lars"
	      end tell
	      set subject to "Hello from Mailplane"
	      set content to "This is the body text!"
	      make new mail attachment with properties {path:"Macintosh HD:Users:ruben:Desktop:china.png"}
	  end tell
	  compose m
	end tell

* To directly send a message, change the directlySend option to true.
* To prevent the picture optimization to kick in, set the optimizeAttachments property to false.
* Add CC and BCC addresses use the following two commands: set r to make new cc recipent at end or set r to make bcc recipient at end.


## Example to send all files in a folder

This compose and send a new message and attaches all files found in the Desktop/Stuff/test folder:

	tell application "Finder"
	  set desktopFolder to "Macintosh HD:Users:ruben:Desktop:Stuff:test" as alias

	  set a_list to every file in desktopFolder
	end tell

	tell application "Mailplane 3"
	  set m to make new outgoing message with properties {directlySend:true}
	  tell m
	   set sender to "lars@mailplaneapp.com"
	   set r to make new to recipient at end
	   tell r
	    set address to "ruben@mailplaneapp.com"
	    set name to "Ruben"
	   end tell

	   set subject to "test subject"
	   set content to "This is the body text!"
	   repeat with i from 1 to number of items in a_list
	    set a_file to (item i of a_list)
	    set file_name to a_file as rich text
	    make new mail attachment with properties {path:file_name}

	   end repeat
	  end tell
	  compose m
	end tell
