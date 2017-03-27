$(document).ready(function () {
   var carousel = $('#carousel');

   var images = ["img/banner1.jpg", "img/banner2.jpg", "img/banner3.jpg"];
   var imageIndex = 0;

   setTimeout(cycle, 6000);

   function cycle() {
      imageIndex++;
      if (imageIndex >= images.length) {
         imageIndex = 0;
      }

      var imageUrl = images[imageIndex];
      carousel.css('background-image', 'url(' + imageUrl + ')');

      setTimeout(cycle, 5000);
   }
});