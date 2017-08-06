var contactForm = (function () {
    // --------------------------------- Public Declaration -------------------------------------------
    var init;
    var sendMail;

    // --------------------------------- Private Variables ------------------------------------------- 
    var _validator;
    // --------------------------------- Private Functions -------------------------------------------


    // --------------------------------- Public function -------------------------------------------    
    init = function () {
        _validator = $('#sendMailForm').validator()
        _validator.on('submit', function (e) {
            if (e.isDefaultPrevented()) {
            } else {
                sendMail();
            }
            return false;
        })
        // $('#sendMail').click(sendMail);

        // formUtils.submit({
        //     action: 'http://formspree.io/nxhoaf@gmail.com',
        //     method: 'post',
        //     params: {
        //         email: 'sender@gmail',
        //         message: 'This is an email content'
        //     }
        // });
    };

    sendMail = function (event) {
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        var mailContent = " name: " + name + 
            "\n subject: " + subject + 
            "\n message: " + message;

        return false;

    };
    // --------------------------------- End of Public function -------------------------------------------


    // --------------------------------- Private function -----------------------------------------------

    // --------------------------------- End of Private function -------------------------------------------

    return {
        init: init
    }
})();