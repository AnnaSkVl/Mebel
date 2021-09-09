$(function () {
    
 $('.header__btn').on('click', function() {
     $('.rightside-menu').removeClass('rightside-menu--close');
    });
     $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--close');
 });

 $('.header__btn-menu').on('click', function() {
   $('.menu').toggleClass('menu--open');
  });

if($(window).width() < 651){
   $('.works-path__item--measuring').appendTo($('.work-path__items-box'));
}

 $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
 });


 $('.article-slider__box').slick({
   prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"> <img src="images/arrow_left.svg" alt="arrow"></button>',
   nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"> <img src="images/arrow_right.svg" alt="arrow"></button>',
});

 

 var mixer = mixitup('.gallery__inner', {
    load: {
       filter: '.category-b'
    }
 });
       

})