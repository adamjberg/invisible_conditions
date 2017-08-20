$(document).ready(function () {
  var submitButton = $('button#register');
  var registerForm = $('#register-form');

  registerForm.submit(function (event) {
    event.preventDefault();

    var actionURL = registerForm.attr("action");
    var registrationData = registerForm.serialize();
    submitButton.attr('disabled', true);

    $.ajax({
      type: "post",
      url: actionURL,
      data: registrationData,
      cache: false,
      error: function (jqXHR, textStatus, errorThrown) {
        $('#error').toggleClass('hidden', true);
      },
      success: function (data) {
        $('#success').toggleClass('hidden', false);
      },
      complete: function () {
        submitButton.remove();
      }
    });
  });
});