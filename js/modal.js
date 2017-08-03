var modalService = {};

$(document).ready(function () {
  modalService.setIndex = setIndex;

  var modal = $('#modal');
  var dialog = modal.find('#modal-dialog');

  dialog.click(function (e) {
    e.stopPropagation();
  });
  modal.click(close);

  $('body').keydown(function (e) {
    switch ((e.keyCode ? e.keyCode : e.which)) {
      case 27: // ESC
        close();
        break;
      case 37:   // Left Arrow
        prev();
        break;
      case 39:   // Right Arrow
        next();
        break;
    }
  });

  modal.find('.close').click(close);

  var prevButton = modal.find('.prev');
  prevButton.click(prev);

  var nextButton = modal.find('.next');
  nextButton.click(next);

  var index = 0;

  function open(index) {
    var member = members[index];
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
      open(index);
      prevButton.toggleClass('hidden', newIndex === 0);
      nextButton.toggleClass('hidden', newIndex === members.length - 1);
    }
  }
})