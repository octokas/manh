angular.module('newApp').factory('mailBoxService', ['applicationService', function (applicationService) {

    var service = {};

    service.initSend = function () {
        var dt = new Date();
        var currentDay = dt.getDate();
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var currentMonth = monthNames[dt.getMonth()];
        var hours = dt.getHours();
        var minutes = dt.getMinutes();
        var currentDate = currentDay + ' ' + currentMonth + ', ' + hours + ':' + minutes;
        $('.date-send').text(currentDate);

        /* Context Menu */
        var emailMenuContext = '<div id="context-menu" class="email-context dropdown clearfix">' +
                          '<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">' +
                            '<li><a data-remove="true" href="#">Remove Contact</a></li>' +
                          '</ul>' +
                        '</div>';
        $('.main-content').append(emailMenuContext);
        var $contextMenu = $("#context-menu");
        $('.emails-list').on('mousedown', '.message-item', function () {
            $(this).contextmenu({
                target: '#context-menu',
                onItem: function (context, e) {
                    var currentLabel = $(e.target).data("label") ? $(e.target).data("label") : false;
                    var currentLabelColor = $(e.target).data("color") ? $(e.target).data("color") : false;
                    if (context.find('.subject .label').length > 0 && !$(e.target).data("remove")) {
                        context.find('.subject .label').remove();
                    }
                    if (currentLabel && currentLabelColor) {
                        context.find('.subject').prepend('<span class="label label-' + currentLabelColor + '">' + currentLabel + '</span>');
                    }
                    if ($(e.target).data("remove")) {
                        context.slideUp(200, function () {
                            context.remove();
                        });
                    }
                }
            });
        });

        /* Display selected email */
        $('.emails-list').on('click', '.message-item', function () {
            var emailSender = $(this).find('.email').text();
            $('#recipient').tagsinput('add', emailSender);
        });

        /* Send Email */
        $('.answer-textarea').summernote({
            focus: true,
            toolbar: [
                ["style", ["style"]],
                ["style", ["bold", "italic", "underline", "clear"]],
                ["fontsize", ["fontsize"]],
                ["color", ["color"]],
                ["para", ["ul", "ol", "paragraph"]],
                ["height", ["height"]],
                ["table", ["table"]]
            ]
        });

        /*  Search Function  */
        if ($('input#email-search').length) {
            $('input#email-search').val('').quicksearch('.active .message-item', {
                selector: '.sender, .subject',
                'onAfter': function () {
                    applicationService.customScroll();

                },
            });
        }

        $('#save').on('click', function () {
            window.location = 'mailbox.html';
        });
    }

    service.init = function () {



        /****  Initiation of Main Functions  ****/
        windowWidth = $(window).width();
        $('.go-back-list').on('click', function () {
            $('.email-details').fadeOut(200, function () {
                $('.emails-list').fadeIn();
            });
        });

        if (windowWidth < 800) {
            $('.emails-list .tab-content .message-item').on('click', function () {
                $('.emails-list').fadeOut(200, function () {
                    $('.email-details').fadeIn();
                    applicationService.customScroll();
                });
            });
        }

        $('.nav-tabs a').on('click', function () {
            setTimeout(function () {
                applicationService.customScroll();
            }, 200);
        });


        $(window).resize(function () {
            windowWidth = $(window).width();
            if (windowWidth > 800) {
                $('.emails-list, .email-details').css('display', 'table-cell');
            }
            else {
                $('.email-details').css('display', 'none');
                $('.emails-list .tab-content .message-item').on('click', function () {
                    $('.emails-list').fadeOut(200, function () {
                        $('.email-details').fadeIn();
                        applicationService.customScroll();
                    });
                });
            }


        });

        /* Context Menu */
        var emailMenuContext = '<div id="context-menu" class="email-context dropdown clearfix">' +
                          '<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">' +
                            '<li><a href="#" data-label="business" data-color="danger"><i class="fa fa-circle-o c-red" data-label="business" data-color="danger"></i> Business</a></li>' +
                            '<li><a href="#" data-label="family" data-color="primary"><i class="fa fa-circle-o c-blue" data-label="family" data-color="primary"></i> Family</a></li>' +
                            '<li><a href="#" data-label="friends" data-color="success"><i class="fa fa-circle-o c-green" data-label="friends" data-color="success"></i> Friends</a></li>' +
                            '<li><a href="#" data-label="personal" data-color="warning"><i class="fa fa-circle-o c-yellow" data-label="personal" data-color="warning"></i> Personal</a></li>' +
                            '<li><a href="#"><i class="fa fa-circle-o c-gray"></i> No label</a></li>' +
                            '<li class="border-top"><a data-remove="true" href="#"><i class="fa fa-times"></i> Remove Email</a></li>' +
                          '</ul>' +
                        '</div>';
        $('.main-content').append(emailMenuContext);
        var $contextMenu = $("#context-menu");
        $('.emails-list').on('mousedown', '.message-item', function () {
            $(this).contextmenu({
                target: '#context-menu',
                onItem: function (context, e) {
                    var currentLabel = $(e.target).data("label") ? $(e.target).data("label") : false;
                    var currentLabelColor = $(e.target).data("color") ? $(e.target).data("color") : false;
                    if (context.find('.subject .label').length > 0 && !$(e.target).data("remove")) {
                        context.find('.subject .label').remove();
                    }
                    if (currentLabel && currentLabelColor) {
                        context.find('.subject').prepend('<span class="label label-' + currentLabelColor + '">' + currentLabel + '</span>');
                    }
                    if ($(e.target).data("remove")) {
                        context.slideUp(200, function () {
                            context.remove();
                        });
                    }
                }
            });
        });


        /* Summernote inline editing functions */
        $.fn.lastWord = function () {
            var text = this.text().trim().split(" ");
            var last = text.pop();
            this.html(text.join(" ") + (text.length > 0 ? " <strong>" + last + "</strong>" : last));
        };

        /* Display selected email */
        $('.emails-list').on('click', '.message-item', function () {
            var emailSender = $(this).find('.sender').text();
            var emailSubject = $(this).find('.subject-text').text();
            var emailDate = $(this).find('.date').text();
            var emailContent = $(this).find('.email-content').html();

            $('.email-details h1').fadeOut(200, function () {
                $(this).text(emailSubject).fadeIn(200);
                $(this).lastWord();
            });
            $('.email-details .sender').fadeOut(200, function () {
                $(this).text(emailSender).fadeIn(200);
            });
            $('.email-details .date').fadeOut(200, function () {
                $(this).text(emailDate).fadeIn(200);
            });
            $('.email-details .email-content').fadeOut(200, function () {
                $(this).html(emailContent).fadeIn(200);
                applicationService.customScroll();
            });
        });

        /* Send Answer */
        $('.answer-textarea').on('click', function () {
            $('.answer-textarea').summernote({
                focus: true,
                toolbar: [
                    ["style", ["style"]],
                    ["style", ["bold", "italic", "underline", "clear"]],
                    ["fontsize", ["fontsize"]],
                    ["color", ["color"]],
                    ["para", ["ul", "ol", "paragraph"]],
                    ["height", ["height"]],
                    ["table", ["table"]]
                ]
            });
        });

        $('#save').on('click', function () {
            var aHTML = $('.answer-textarea').code(); //save HTML If you need(aHTML: array).
            $('.answer-textarea').destroy();
            var mailTitle = $('.email-subject h1').text();
            $('.answer-title').html('<strong>Re:</strong> ' + mailTitle);
            var dt = new Date();
            var time = dt.getHours() + ":" + dt.getMinutes();
            var currentDate = 'Today, ' + time;
            $('.answer-date').text(currentDate);

            var answerTxt = $('.answer-textarea').html();
            $('.answer-content').html(answerTxt);
            $('.answer-textarea').html('');
            $('.answers').show();
            $('.write-answer').slideUp();
        });


    }


    /*  Search Function  */
    if ($('input#email-search').length) {
        $('input#email-search').val('').quicksearch('.active .message-item', {
            selector: '.sender, .subject',
            'onAfter': function () {
                applicationService.customScroll();

            },
        });
    }

    return service;

}]);