$('.toggle_btn').click(function(){
    $('.gnb').slideToggle();
});

var current = 0;
var count = $('.review_list li').size() - 1;
var sCount = $('.slide_list li').size() - 1;

var slide = document.querySelector('.slide_list');

document.querySelector('.page_s1').addEventListener('click', function () {
    slide.style.transform = 'translate(0)';
});
document.querySelector('.page_s2').addEventListener('click', function () {
    slide.style.transform = 'translate(-100vw)';
});
document.querySelector('.page_s3').addEventListener('click', function () {
    slide.style.transform = 'translate(-200vw)';
});
document.querySelector('.page_s4').addEventListener('click', function () {
    slide.style.transform = 'translate(-300vw)';
});
document.querySelector('.page_s5').addEventListener('click', function () {
    slide.style.transform = 'translate(-400vw)';
});

$('.s_controls a').click(function(){
    var sCheck = $(this).hasClass('s_prev');
    
    if(sCheck == true) {
        current -= 1;
    } else {
        current += 1;
    }
    if(current < 0) {
        current = sCount;
    }
    if(current > sCount) {
        current = 0;
    }
    $('.page_s span').eq(current).click();
})


var reviewSlide = document.querySelector('.review_list');

document.querySelector('.page1').addEventListener('click', function () {
    reviewSlide.style.transform = 'translate(0)';
});
document.querySelector('.page2').addEventListener('click', function () {
    reviewSlide.style.transform = 'translate(-100vw)';
});
document.querySelector('.page3').addEventListener('click', function () {
    reviewSlide.style.transform = 'translate(-200vw)';
});


$('.controls img').click(function () {

    var check = $(this).hasClass('r_prev');

    if (check == true) {
        current -= 1;
    } else {
        current += 1;
    }
    if (current < 0) {
        current = count;
    }
    if (current > count) {
        current = 0;
    }

    $('.page_n span').eq(current).click();
});


$('.page1').click(function() {
    $(this).siblings().removeClass('r_active');
})
$('.page2').click(function() {
    $(this).siblings().removeClass('r_active');
})
$('.page3').click(function() {
    $(this).siblings().removeClass('r_active');
})
$('.page').eq(0).click();

