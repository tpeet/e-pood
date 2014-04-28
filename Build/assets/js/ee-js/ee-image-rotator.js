$( document ).ready(function() {
  $('.js-imagerotator').flexslider({
    animation: "slide",
    controlNav: "thumbnails",
    itemMargin: 40,
    slideshow: false,
    maxItems: 4
  });

    $("#js-largeimage")
    .flexslider({
      animation: "slide",
      useCSS: false,
      animationLoop: true,
      slideshow: false,

      itemWidth: 500,
      itemMargin: 0,
  });
});
