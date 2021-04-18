$(function() {
        $('.hamburger').click(function() {
          $(this).toggleClass('active');
     
          if ($(this).hasClass('active')) {
                $('.globalMenuSp').addClass('active');
        } else {
          $('.globalMenuSp').removeClass('active');
        }
      });
    });

      var swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 55,
        centeredSlides: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          reverseDirection: false
        },
      });

      AOS.init();
