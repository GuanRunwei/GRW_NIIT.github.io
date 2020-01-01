$(function () {

    // init feather icons
    feather.replace();

    // init tooltip & popovers
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        event.preventDefault();
    });

    //toggle scroll menu
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //adjust menu background
        if (scroll >= 100) {
            $('.sticky-navigation').removeClass('navbar-dark').removeClass('bg-primary').addClass('navbar-light').addClass('shadow-bottom');
            $('.btn-navbar').removeClass('btn-outline-secondary').addClass('btn-primary');
        } else {
            $('.sticky-navigation').removeClass('navbar-light').addClass('navbar-dark').addClass('bg-primary').removeClass('shadow-bottom');
            $('.btn-navbar').removeClass('btn-primary').addClass('btn-outline-secondary');
        }

        // adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });

    // slick slider
    $('.slick-reviews').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true
    });
    
    // scroll top top
    $('.scroll-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    /**Theme switcher - DEMO PURPOSE ONLY */
    $('.switcher-trigger').click(function () {
        $('.switcher-wrap').toggleClass('active');
    });
    $('.color-switcher ul li').click(function () {
        var color = $(this).attr('data-color');
        $('#theme-color').attr("href", "css/" + color + ".css");
        $('.color-switcher ul li').removeClass('active');
        $(this).addClass('active');
    });
});

//odemeter random count for videos
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//judge two passwords when user submit the sign up form
function on_submit() {
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");
    if (password.value != confirm_password) {
        alert("Two passwords do not match!");
        password = "";
        confirm_password = "";
        password.focus();
        return false;
    }
}

function login_submit() {
    var phonenumber = document.getElementById("phonenumber");
    var password = document.getElementById("password");
    if (phonenumber.value != "" && password.value != "")
        window.location.href = "index.html"
    else
        window.location.href = "Login.html"
}

function show_password() {
    var a = true;
    var password = document.getElementById("password");
    var switch_button = document.getElementById("switch_button");
    if (a) {
        password.type = "text";
        a = false;
        switch_button.value = "hide";
    }
    else {
        password.type = "password";
        a = true;
        switch_button.value = "show";
    }
}