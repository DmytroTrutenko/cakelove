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

});

