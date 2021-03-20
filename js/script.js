$(document).ready(function(){
    // custom slider js
    $('.custom-sldier').slick({
        arrows: false,
        dots: true
    });

    let mainMinusHeight = Math.round($('header').outerHeight(true) + $('footer').outerHeight(true) + $('.signup-sec').outerHeight(true));
    
    $('main').attr("style",'--minusHeight:' + `${mainMinusHeight}px`);

    // accordion call
    accordion();
});

function accordion() {
    $(".accordion-header").click(function() {
      if (
        $(this)
        .next()
        .is(":visible")
      ) {
        $(this)
          .next()
          .slideUp();
        $(this)
          .parent()
          .addClass("accordion-close");
        $(this)
          .parent()
          .removeClass("accordion-open");
      } else {
        $(".accordion-body").slideUp();
        $(".accordion-item").removeClass("accordion-open");
        $(this)
          .next()
          .slideDown();
        $(this)
          .parent()
          .addClass("accordion-open");
        $(this)
          .parent()
          .removeClass("accordion-close");
      }
    });
}
  