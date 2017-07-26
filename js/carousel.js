$(document).ready(function () {
   var carousel = $('#carousel');

   var images = ["img/banner1.jpeg", "img/banner2.jpeg", "img/banner3.jpeg"];
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