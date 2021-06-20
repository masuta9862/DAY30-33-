$(function () {
  $('#pagetop').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#pagetop').fadeIn();
    } else {
      $('#pagetop').fadeOut();
    }
  });

  $('#pagetop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 700);
    return false;
    });

  $('.q-container').click(function() {
    $(this).next().slideToggle();
    $(this).children('.q-btn').toggleClass('is-open');
  });

  $('.results-list').slick({
    slidesToShow: 2.5,
    dots: true,
    infinite: false,
    arrows: false,

    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1.3,
        centerPadding: '0',
        centerMode: true,
        variableWidth: true,
      },
    }]
  });

  $('a[href^="#"]').click(function() {
    let speed = 500;//
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? `html`:href);
    let position = target.offset().top - $('header').height();

    $("html, body").animate ({
      scrollTop:position
    }, speed, "swing");

    return false;
  });

  $('#drawer').click(function () {
    $('#drawer-icon').toggleClass('drawer-icon-open');
    $('#drawer').toggleClass('drawer-open');
    $('#drawer-bg').toggleClass('drawer-bg-open');
  });

})
