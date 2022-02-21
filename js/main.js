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
    jQuery('#loading').fadeOut(300);
});

$(window).on("load", function() {
    document.body.classList.remove('no-scroll');
 });

// scroll to top
const showOnPx = 700;
const backToTopButton = document.querySelector(".scroll_up")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
  };
backToTopButton.addEventListener("click", goToTop);