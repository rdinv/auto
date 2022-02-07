$(function(){
    $('.carousel__inner').slick({ 
        arrows: false, 
        dots: true, 
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

jQuery(document).ready(function() {
    jQuery('#loading').fadeOut(3000);
});

$(window).on("load", function() {
    document.body.classList.remove('no-scroll');
 });