$(document).ready(function () {
  var modal = $('#modal');

  $('body').keydown(function (e) {
    switch ((e.keyCode ? e.keyCode : e.which)) {
      case 37:   // Left Arrow
        prev();
        break;
      case 39:   // Right Arrow
        next();
        break;
    }
  });

  modal.find('.close').click(close);

  var prevButton = modal.find('.next');
  prevButton.click(next);

  var nextButton = modal.find('.prev');
  nextButton.click(prev);

  modal.toggleClass('hidden', false);

  var index = 0;
  setIndex(0);

  function open(member) {
    modal.toggleClass('hidden', false);
    modal.find('.first').text(member.first);
    modal.find('.last').text(member.last);
    modal.find('.title').text(member.title);
    modal.find('.quote').text(member.quote);
    modal.find('.bio').text(member.bio);
  }

  function close() {
    modal.toggleClass('hidden', true);
  }

  function next() {
    setIndex(index + 1);
  }

  function prev() {
    setIndex(index - 1);
  }

  function setIndex(newIndex) {
    if (newIndex >= 0 && newIndex < members.length) {
      index = newIndex;
      var member = members[index];
      open(member);
      prevButton.toggleClass('hidden', newIndex !== 0);
      nextButton.toggleClass('hidden', newIndex !== members.length - 1);
    }
  }
})