console.log('scripts js loaded');

$(document).ready(function() {


  // CALL FRONTPAGE MORE
  $('.js-listedmenu').hideMaxListItems({ 'max': 4, 'speed':500, 'moreText':'Näita rohkem', 'lessText': 'Näita vähem' });

  $('.js-placeholder-offers').hideMaxAItems({ 'max':8, 'speed':2000, 'moreText':'Näita rohkem', 'lessText': 'Näita vähem' });

// COLLAPSE TABS
// https://github.com/okendoken/bootstrap-tabcollapse
  $('#TabsResponsive').tabCollapse();

  // FILTER COLOR CHANGE
  $('#content-placeholder-filter > div > ul > li > a').click(function(e){
    if ($(this).attr('class') != 'disabled'){
      $(this).addClass('disabled');
      $('a').not(this).removeClass('disabled');
    }
    else {
      $(this).removeClass('disabled');
    }
    e.preventDefault();
  });


  // SLIDER SCRIPT
  $("#js-priceslider").slider({
    tooltip: 'hide'
  });
  $("#js-priceslider").on('slide', function(slideEvt) {
  $(".js-pricesliderValMin").text(slideEvt.value[0]);
  $(".js-pricesliderValMax").text(slideEvt.value[1]);
});


  // TAG FONT RESIZE
  function TagsFontResize() {

   if ($(".flashText-flash-normal").length) {
    $(".flashText-flash-normal").bigtext({
     maxfontsize: 22,
     childSelector: '> .ee-big'
    });
   }

   if ($(".flashText-ribbon").length) {
    $(".flashText-ribbon").bigtext({
     maxfontsize: 18
    });
   }
  }

$('.dropdown-menu').find('form').click(function (e) {
        e.stopPropagation();
      });

// Alerts logic
   $('#alertbtn').click(function() {
      if ( !$('#alert1').is( '.in' ) ) {
         $('#alert1').addClass('in');
      }
   });

   $('#successbtn').click(function() {
      if ( !$('#success1').is( '.in' ) ) {
         $('#success1').addClass('in');

         setTimeout(function() {
            $('#success1').removeClass('in');
         }, 3200);
      }
   });

   $('#infobtn').click(function() {
      if ( !$('#your-uniq-ID-123').is( '.in' ) ) {
         $('#your-uniq-ID-123').addClass('in');

         setTimeout(function() {
            $('#your-uniq-ID-123').removeClass('in');
         }, 4800);
      }
   });

$('.js-slidetoggle').click(function(e) {
  $(this).parents().next('.js-togglable').slideToggle('slow');
  e.preventDefault();
});

// Sliding commenting
//*********************
// $('.js-togglable').hide();
// $('.js-slidetoggle').click(function(e) {
//   $(this).parents().next('.js-togglable').slideDown('slow');
//   $('.js-slideclose').slideUp();
//   e.preventDefault();
// });

}); // end document ready





