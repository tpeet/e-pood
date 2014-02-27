// Color select. Messy until desicions are made how to present colors
$(function() {
  var accEl = $('.ee-product-colors li.acc');

  accEl.on('click', function(){

      var el = $(this);
      var color = el.attr('data-color-theme');
      var section = $(this).closest(".tsr-product-image");

      if (section.hasClass(color)) {
         section.removeClass(color);
          $('.ee-product-colors li.acc').removeClass('active');
      }
      else {
          section.removeClass('acc-1').removeClass('acc-2').removeClass('acc-3').removeClass('acc-4').removeClass('acc-5').removeClass('acc-6').removeClass('acc-7').removeClass('acc-8');
          $('.ee-product-colors li.acc').removeClass('active');
          section.addClass(color);
          el.addClass('active');
      }
      return false;
      
  });
});

//Remove
// $('.parent').click(function() {
//     var subMenu = $(this).siblings('ul');
//     var allMenu = $('.parent').siblings('ul');
//     if ($(subMenu).hasClass('open')) {
//         $(allMenu).fadeOut();
//         $(allMenu).removeClass('open').addClass('closed');
//     }
//     else {
//         $(subMenu).fadeIn();
//         $(subMenu).removeClass('closed').addClass('open');
//     }
// });

// Menu handling
$(document).ready(function () {
  $('#sidenav > li > a').click(function(){
    if ($(this).attr('class') != 'active'){
      $('#sidenav li ul').slideUp('fast');
      $(this).next().slideToggle();
      $('#sidenav li a').removeClass('active');
      $('#sidenav > li > ul > li > a').removeClass('selected');
      $(this).addClass('active');
    }
    else {
      $('#sidenav li ul').slideUp('fast');
      $(this).removeClass('active');
      $('#sidenav > li > ul > li > a').removeClass('selected');

    }
  });

  // Temporary for static presentation only
  $('#sidenav > li > ul > li > a').click(function(){
    if ($(this).attr('class') != 'selected'){
      $(this).addClass('selected');
      $('a').not(this).removeClass('selected');
    }
    else {
      $(this).removeClass('selected');
    }
  });
});