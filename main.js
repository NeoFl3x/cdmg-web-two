ScrollReveal().reveal('.logo', { delay: 250 });
ScrollReveal().reveal('.text-container', { delay: 250 });
ScrollReveal().reveal('.cdmg-photo', { delay: 550 });
ScrollReveal().reveal('.about-container', { delay: 350 });
ScrollReveal().reveal('.box-container', { delay: 250 });
ScrollReveal().reveal('.work-container', { delay: 250 });
ScrollReveal().reveal('.education-wrap', { delay: 250 });
ScrollReveal().reveal('.contact-me', { delay: 250 });
ScrollReveal().reveal('footer', { delay: 550 });

$(document).ready(function() {

    $('.arrow-up').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 1000);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.arrow-up').slideDown(300);
        } else {
            $('.arrow-up').slideUp(300);
        }
    });

});