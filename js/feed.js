$(document).ready(function () {
  if ($('#instafeed').length) {
    var feed = new Instafeed({
      get: 'user',
      userId: '4721571989',
      accessToken: '4721571989.05bc4a8.f173059930454d6fb03931a457b1cd82',
      resolution: "standard_resolution",
      limit: 4,
      template: '<div class="col-md"><a href="{{link}}"><img src="{{image}}" /></a></div>'
    });
    feed.run();
  }
});