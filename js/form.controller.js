$(document).ready(function () {
  var subscribeForm = $('#subscribeForm');
  var emailField = subscribeForm.find('input[type="email"]');
  var submitButton = subscribeForm.find('button');
  var emailError = subscribeForm.find('#email-error');

  emailField.change(checkEmail);

  submitButton.click(function (event) {
    event.preventDefault();

    checkEmail();
  });

  function checkEmail() {
    var email = emailField.val();

    var isValid = validateEmail(email);
    var isInvalid = !isValid;

    emailField.toggleClass("error", isInvalid);
    emailError.toggleClass("hidden", isValid);
    submitButton.prop('disabled', isInvalid);

    if (isInvalid) {
      // TODO: Submit form

    }
  }
});