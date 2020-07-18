# wp_download_tracking
Javascript Code for Download Tracking on Wordpress using Google Analytics

## INTRODUCTION

Little Javascript snippet to add into a Wordpress site to track downloads in Google Analytics (GA)

GA will happily track page views but for custom events eg. file downloads it doesn't know a button has been clicked to kick off a download. This little script looks for any link on a page to a PDF, Word, Excel document, Powerpoint presenatation, ZIP or Gzip file and fires off a GA event if the link is clicked.

It also looks for any link with a `report_download` class or a link following a `.report_download` class. This comes in handy if a button or link doesn't directly link to a file type listed above.

## INSTALLATION

Use the code from [wp_download_tracking.js](wp_ga_tracking.js) between `<script></script>` tags in the theme file or add directly as a JS file. There's a useful tutorial here: 	
[How to Add Custom JavaScript to Your WordPress Site](https://webdesign.tutsplus.com/tutorials/how-to-add-custom-javascript-to-your-wordpress-site--cms-34368)

## USAGE

If you're linking to a file ending in any of the following the link will be automatically tracked:

- pdf
- doc
- docx
- ppt
- pptx
- pps
- xls
- xlsx
- zip
- gz

otherwise add the `report_download` class to a link or a container for a link and that'll be tracked as well. The script will try and store the referring URL if it's possible.
