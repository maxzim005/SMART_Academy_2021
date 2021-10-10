$(document).ready(function(){
    $('.testim_carousel').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });
});

$(function(){
	$('.header_btn_down').click(function(){
		$('html, body').animate({
      scrollTop: $(document).height() - $(window).height()
    }, 100);
		return false;
	});
});

$(function() {
    $('.footer_btn').click(function() {
      $("html, body").animate({
        scrollTop:0
      },100);
    })
  })

  $(window).scroll(function() {
    if ($(this).scrollTop()>200) {
      $('.scrollup').fadeIn();
    }
    else {
      $('.scrollup').fadeOut();
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})