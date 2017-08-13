$(document).ready(function () {
  var studentStatusSelect = $('#student-status select');
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

  studentStatusSelect.change(checkStudentStatus);

  var mentorshipInterest = $('#mentorship-interest input');
  mentorshipInterest.change(mentorshipInterestChanged);
  var mentorMatch = $('#mentor-match');

  function checkStudentStatus() {
    var isStudent = studentStatusSelect.val() === "Yes";
    submitButton.prop('disabled', !isStudent);
    var errorText = $('#student-status .text-danger');
    errorText.toggleClass('hidden', isStudent);
  }

  function mentorshipInterestChanged(event) {
    var input = $(event.target);
    var isInterested = input.val() === "yes" && input.is(":checked");

    mentorMatch.toggleClass('hidden', !isInterested);
  }

});