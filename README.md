# ga_download_tracking

Javascript Code for Download Tracking on Wordpress and other sites using Google Analytics, Facebook Pixel and (probably) Twitter conversion pixel.

It'll also work for other websites, but was developed on a Wordpress site. There's loads of other plugins that will do this, but this is a very lightweight of handling downloads with minimal server-side code. If the theme allows addition of JS code in the `<body>` that'd be a simple way to add the code.

## INTRODUCTION

Little Javascript snippet to add into a Wordpress site to track downloads in for three services:

1. Google Analytics (look in Events, listed as Downloads with the file URL as a Label)
1. Facebook Pixel (listed as Download events)
1. Twitter Conversion tracking (tbc, couldn't get the interface working through the Twitter Pixel Helper is showing it works OK)

GA et al will happily track page views but for custom events eg. file downloads it doesn't know a button has been clicked to kick off a download. This little script looks for any link on a page to a PDF, Word, Excel document, Powerpoint presenatation, ZIP or Gzip file and fires off a GA event if the link is clicked.

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

## REFERENCES

- To add Google Analytics tracking, try the official [Site Kit plugin](https://wordpress.org/plugins/google-site-kit/)
- To add Facebook Pixel tracking, try the official [Facebook Pixel plugin](https://en-gb.wordpress.org/plugins/official-facebook-pixel/)
