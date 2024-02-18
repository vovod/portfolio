$(document).ready(function () {

    $(window).on('load', function () {
        $('.preloader').addClass('complete');
    });

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".sticky").addClass("stickyadd");
        } else {
            $(".sticky").removeClass("stickyadd");
        }
    });

    var typed = new Typed('.element', {
        strings: ["Nguyen Hai Duong", "a Web Developer", "a Web Designer", "a Freelancer"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        smartDelay: 1000
    });
    // progress bar
    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function (direction) {
            var p = document.querySelectorAll('.progress-bar');
            p[0].setAttribute('style', 'width: 95%; transition: 1s all');
            p[1].setAttribute('style', 'width: 90%; transition: 1s all');
            p[2].setAttribute('style', 'width: 80%; transition: 1s all');
            p[3].setAttribute('style', 'width: 65%; transition: 1s all');
            p[4].setAttribute('style', 'width: 60%; transition: 1s all');
            p[5].setAttribute('style', 'width: 70%; transition: 1s all');
        },
        offset: '90%'
    })

    // owl-carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1,
    });

    // work
    var filterizd = $('.filter-container').filterizr({
        animationDuration: 0.5
    });
});