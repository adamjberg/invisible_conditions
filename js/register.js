$(document).ready(function () {
  var studentStatusSelect = $('#student-status select');
  var submitButton = $('button');

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