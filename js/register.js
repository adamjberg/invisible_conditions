/*$(document).ready(function () {
    var registerForm = $('#register-form');
    var submitButton = registerForm.find('button');

    submitButton.click(function (event) {
        event.preventDefault();

        var actionURL = registerForm.attr("action");
        var registrationData = registerForm.serialize();

        $.ajax({
            type: "post",
            url: "register.php",
            data: registrationData,
            cache: false,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            error: function (err) {
                console.error(err);
            },
            success: function (data) {
                console.log(data);
            }
        });
    });
});*/