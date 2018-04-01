# CUHacking2018 - Voice Browser
A Chrome extension to allow users to use a browser with a voice

## Introduction
This was a project made over a 24 hour period during CUHacking 2018 in Ottawa, Ontario by:
* Ryan Ly
* Stephanie Wang
* Alexa Liaskovski
* James Ying

## Usage
Once installed, the extension can be activated by pressing the extension's icon in the upper right of the browser window.
A few notes about usage:
* At the moment, the extension must be restarted after each command.
* Due to inaccuracies of the voice recognition, if the command does not appear to be working, please restart the extension and try again.
* See below for currently accepted commands.

## Commands
* **Scroll** [_up_/_down_] - Scrolls the page up or down.
* **Go Back/Forward** - Goes to back/forward a page (equivalent to the browser's back and forward buttons).
* **Click/Press/Find** - Clicks a link or button based on a keyword. For example, _Click submit_ will click a button with the text submit, if it exists. If multiple links with the same word exist, activate the extension again and say a number (in the order they appear, i.e. say 3 for the 3rd link).
* **Go to** [_url_] - Navigates to specified URL. (e.g. _Go to google.com_, said as _Go to google dot com_).
* **Search/Find** [_searchTerm_] - Google searches for the specified term. Multiple words are accepted as the search term.
* **Input** [_fieldName_] [_inputText_] - Inputs text into an input field (i.e. _Input email example@example.com_ would enter that email into an email field).
