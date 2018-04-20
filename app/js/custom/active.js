// Active item in navbar
$(document).ready(function () {
    var links = $('.navbar ul li a');
    $.each(links, function (key, va) {
        if (va.href == document.URL) {
            $(this).addClass('actives');
        }
    });
});