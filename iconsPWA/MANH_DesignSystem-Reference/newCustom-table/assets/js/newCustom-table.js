$(function() {
        let appointments = ".appointmentBlock";
    let first = {
        button: "#first",

        content: "#xfirst"
    };
    let second = {
        button: "#second",
        content: "#xsecond"
    };
    let third = {
        button: "#third",
        content: "#xthird"
    };
    let fourth = {
        button: "#fourth",
        content: "#xfourth"
    };
    let fifth = {
        button: "#fifth",
        content: "#xfifth"
    };
    let sixth = {
        button: "#sixth",
        content: "#xsixth"
    };
    let seventh = {
        button: "#seventh",
        content: "#xseventh"
    };
        
        $(first.button).popover({
        html: true,
        title: 'Appointment Information<a class="close" href="#");">&times;</a>',
        content: $(first.content).html(),
        });
        
        $(second.button).popover({
        html: true,
        title: 'Appointment Information<a class="close" href="#");">&times;</a>',
        content: $(second.content).html(),
        });
        
        $(third.button).popover({
        html: true,
        title: 'Appointment Information<a class="close" href="#");">&times;</a>',
        content: $(third.content).html(),
        });

        $(fourth.button).popover({
        html: true,
        title: 'Appointment Information<a class="close" href="#");">&times;</a>',
        content: $(fourth.content).html(),
        });

        $(fifth.button).popover({
        html: true,
        title: 'Appointment Information<a class="close" href="#");">&times;</a>',
        content: $(fifth.content).html(),
        });

        $(sixth.button).popover({
        html: true,
        title: 'Appointment Information<a class="close" href="#");">&times;</a>',
        content: $(sixth.content).html(),
        });

        $(seventh.button).popover({
        html: true,
        title: 'Appointment Information<a class="close" href="#");">&times;</a>',
        content: $(seventh.content).html(),
        });


        
        $(appointments).click(function (e) {
        e.stopPropagation();
        });
        
        $(document).click(function (e) {
        if (($('.popover').has(e.target).length == 0) || $(e.target).is('.close')) {
            $(appointments).popover('hide');
            }
        });
        
    });