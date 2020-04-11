$(document).ready(function() {
    $('.reviews__items').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev"><img src="img/prev.png" alt="" /></button>',
        nextArrow: '<button class="next"><img src="img/next.png" alt="" /></button>'
    });

    $(".menu_link").click(function () {
        $('.menu_link .hamburger').toggleClass("is-active");
        $('.wrap').toggleClass("oppened");
        return false;
    });

    $("#main-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $("#footer-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

});

