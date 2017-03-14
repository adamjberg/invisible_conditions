$(document).ready(function () {
  $('a').click(function (event) {


    var full_url = this.href;
    var parts = full_url.split("#");

    if (parts.length > 1) {
      event.preventDefault();
      var targetSelector = parts[1];

      var targetTop = 0;
      if (targetSelector) {
        targetTop = $("#" + targetSelector).offset().top;
      }

      $('html,body').animate({ scrollTop: targetTop }, 'slow');
    }

  });
});