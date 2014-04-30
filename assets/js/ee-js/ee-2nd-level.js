// Color select. Messy until desicions are made how to present colors
// $(function() {
//   var accEl = $('.ee-product-colors li.acc');

//   accEl.on('click', function(){

//       var el = $(this);
//       var color = el.attr('data-color-theme');
//       var section = $(this).closest(".tsr-product-image");

//       if (section.hasClass(color)) {
//          section.removeClass(color);
//           $('.ee-product-colors li.acc').removeClass('active');
//       }
//       else {
//           section.removeClass('acc-1').removeClass('acc-2').removeClass('acc-3').removeClass('acc-4').removeClass('acc-5').removeClass('acc-6').removeClass('acc-7').removeClass('acc-8');
//           $('.ee-product-colors li.acc').removeClass('active');
//           section.addClass(color);
//           el.addClass('active'); 
//       }
//       return false;
      
//   });
// });

// Menu handling
$(document).ready(function () {
  $('.js-sidenav > li > a').click(function(e){
    if ($(this).attr('class') != 'active'){
      $('.js-sidenav li ul').slideUp('fast');
      $(this).next().slideToggle();
      $('.js-sidenav li a').removeClass('active');
      $('.js-sidenav > li > ul > li > a').removeClass('selected');
      $(this).addClass('active');
    }
    else {
      $('.js-sidenav li ul').slideUp('fast');
      $(this).removeClass('active');
      $('.js-sidenav > li > ul > li > a').removeClass('selected'); 

    }
    e.preventDefault();
  });

  // Temporary for static presentation only
  $('.js-sidenav > li > ul > li > a').click(function(e){
    if ($(this).attr('class') != 'selected'){
      $(this).addClass('selected');
      $('a').not(this).removeClass('selected');
    }
    else {
      $(this).removeClass('selected');
    }
    e.preventDefault();
  });
});