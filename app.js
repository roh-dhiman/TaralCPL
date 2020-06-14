// carousel timimg

$('.carousel').carousel({
    interval: 3000
});

// carousel keyboard navigation

$(document).bind('keyup', function (e) {
    if (e.keyCode == 39) {
        $('.carousel-control-next').trigger('click');
    }
    else if (e.keyCode == 37) {
        $('.carousel-control-prev').trigger('click');
    }
});

// scroll to top button

mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// appear effect on scroll

function scrollAppear() {
    var beforeEffect = document.querySelector('.before-effect');
    var effectPosition = beforeEffect.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (effectPosition < screenPosition) {
        beforeEffect.classList.add('after-effect');
    }
}

window.addEventListener('scroll', scrollAppear);