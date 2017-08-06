var contactForm = (function () {
    // --------------------------------- Public Declaration -------------------------------------------
    var init;


    // --------------------------------- Private Variables ------------------------------------------- 
    var _FORM_URL = 'https://formspree.io/nxhoaf@gmail.com';
    var _validator;
    // --------------------------------- Private Functions -------------------------------------------
    var _sendMail;

    // --------------------------------- Public function -------------------------------------------    
    init = function () {
        _validator = $('#sendMailForm').validator();
        _validator.on('submit', function (e) {
            if (!e.isDefaultPrevented()) {
                _sendMail();
            }
            return false;
        });
    };


    // --------------------------------- End of Public function -------------------------------------------


    // --------------------------------- Private function -----------------------------------------------
    _sendMail = function (event) {
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        var mailContent = " name: " + name +
            "\n subject: " + subject +
            "\n message: \n" + message;

        $.ajax({
            url: _FORM_URL,
            method: 'POST',
            data: {
                email: email,
                message: mailContent
            },
            dataType: "json",
            success: function (msg) {
                $("#sendmessage").show().delay(3000).fadeOut();
            },
            error: function (request, status, error) {
                $("#errormessage").show().delay(3000).fadeOut();
            }
        });

        return false;

    };

    // --------------------------------- End of Private function -------------------------------------------

    return {
        init: init
    }
})();