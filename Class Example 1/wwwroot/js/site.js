// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

$(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
        $("#floatbar").css({ position: 'fixed', left: '0', top: '0' });
    }
    else {
        $("#floatbar").css({ position: 'absolute', left: '0', top: '74px' });
    }
});