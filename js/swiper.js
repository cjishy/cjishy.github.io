var swiper = new Swiper('.swiper-container-loveshy1', {
    pagination: '.swiper-pagination-loveshy1',
    paginationClickable: true,
    spaceBetween: 30,
});

var swiper = new Swiper('.swiper-container-loveshy2', {
    pagination: '.swiper-pagination-loveshy2',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});

var swiper = new Swiper('.swiper-container-loveshy3', {
    pagination: '.swiper-pagination-loveshy3',
    effect: 'flip',
    grabCursor: true,
    nextButton: '.swiper-button-next-loveshy3',
    prevButton: '.swiper-button-prev-loveshy3'
});
