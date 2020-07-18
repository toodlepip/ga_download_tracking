jQuery(document).ready(function($) {
  let ga_event = function(href) {
      typeof(gtag) === "function" && gtag('event', 'download', { 'event_category': 'Downloads', 'event_label': href });
  }
  let fb_event = function(href) {
    typeof(fbq) === "function" && fbq('trackCustom', 'Download', {url: href});
  }
  let tw_event = function() {
    typeof(twq) === "function" && twq('track', 'Download');
  }
  let do_track = function(el) {
    href = el.attr('href');
    ga_event(href);
    fb_event(href);
    tw_event();
  }
  $('.report_download a, a.report_download').click(function() { do_track($(this)); return false; });
  $('a[href]').each(function() {
    $(this).attr('href').match(/\.(pdf|docx?|ppt|ppx|pps)$/i) && 
      $(this).click(function() { do_track($(this)); });
      return false;
  });
})
