$('.toggle_btn').click(function(){
    $('.gnb').slideToggle();
});

var pSlide = document.querySelector('.weekly_list');

document.querySelector('.page_p1').addEventListener('click', function () {
    pSlide.style.transform = 'translate(0)';
});
document.querySelector('.page_p2').addEventListener('click', function () {
    pSlide.style.transform = 'translate(-90vw)';
});
document.querySelector('.page_p3').addEventListener('click', function () {
    pSlide.style.transform = 'translate(-180vw)';
});

// var currentP = 0;
// var countP = $('.weekly_list li').size() - 1;
// $('.controls_p img').click(function () {
    
//     var checkP = $(this).hasClass('p_prev');

//     if (checkP == true) {
//         currentP -= 1;
//     } else {
//         currentP += 1;
//     }
//     if (currentP < 0) {
//         currentP = countP;
//     }
//     if (currentP > countP) {
//         currentP = 0;
//     }

//     $('.page_n span').eq(current).click();
// });
