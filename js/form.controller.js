$(document).ready(function () {
  var subscribeForm = $('#subscribeForm');
  var emailField = subscribeForm.find('input[type="email"]');
  var submitButton = subscribeForm.find('button');
  var emailError = subscribeForm.find('#email-error');
  var interestField = $('select[name="INTEREST"]');
  var commentsField = $('textarea[name="COMMENTS"]');
  var submitResponseErrorText = $('#submit-error');
  var submitResponseSuccessText = $('#submit-success');

  emailField.change(checkEmail);

  submitButton.click(function (event) {
    event.preventDefault();

    if (checkEmail()) {
      var actionURL = subscribeForm.attr("action");
      var newSubscriber = subscribeForm.serialize();

      $.ajax({
        type: "get",
        url: "//invisibleconditions.us15.list-manage.com/subscribe/post-json?u=297ab086c5be06e3fcf7995e0&id=1e31923fde&c=?",
        data: newSubscriber,
        cache: false,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        error: function (err) {
          setSubmitText("Could not connect to the registration server. Please try again later.", true);
        },
        success: function (data) {
          var success = data.result === "success";
          if (success) {
            setSubmitSuccessText(data.msg);
          }
          else {
            setSubmitErrorText(data.msg);
          }
        }
      });
    }
  });

  function setSubmitErrorText(text, error) {
    submitResponseErrorText.html(text);
    submitResponseErrorText.removeClass('hidden');
  }

  function setSubmitSuccessText(text, error) {
    submitResponseSuccessText.html(text);
    submitResponseSuccessText.removeClass('hidden');
    subscribeForm.addClass('hidden');
  }

  function checkEmail() {
    var email = emailField.val();

    var isValid = validateEmail(email);
    var isInvalid = !isValid;

    emailField.toggleClass("error", isInvalid);
    emailError.toggleClass("hidden", isValid);
    submitButton.prop('disabled', isInvalid);

    return isValid;
  }
});