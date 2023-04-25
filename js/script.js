new Swiper('.presentation__slider', {
    // Optional parameters
    slidesPerView:4,
    direction: 'horizontal',
    loop: true,
    spaceBetween:16,    
    // Navigation arrows
    navigation: {
    nextEl: '.presentation__btn-left',
    prevEl: '.presentation__btn-right',
    },
    autoplay:{
        delay:3000,
    },    
});