$(document).ready(function () {
  var carousel = $('#carousel');

  var images = ["img/banner1.jpeg", "img/ComputerSignUp_Header.jpeg", "img/banner2.jpeg", "img/banner3.jpeg"];
  var imageIndex = 0;

  setTimeout(cycle, 6000);

  function cycle() {
    imageIndex++;
    if (imageIndex >= images.length) {
      imageIndex = 0;
    }

    var imageUrl = images[imageIndex];
    carousel.css('background-image', 'url(' + imageUrl + ')');

    var showText = imageIndex === 1;
    if (showText) {
      carousel.find('img').fadeOut();
      carousel.find('h1').fadeIn();
    }
    else {
      carousel.find('img').fadeIn();
      carousel.find('h1').fadeOut();
    }

    setTimeout(cycle, 5000);
  }
});