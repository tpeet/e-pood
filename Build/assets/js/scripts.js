console.log('scripts');
// Sliding commenting
//*********************
// $('.js-togglable').hide();
// $('.js-slidetoggle').click(function(e) {
//   $(this).parents().next('.js-togglable').slideDown('slow');
//   $('.js-slideclose').slideUp();
//   e.preventDefault();
// }); 

// MULTIPLY BY JULIUS
// var klikk=false;
// function getopacity(elem) {
//   var ori = $(elem).css('opacity');
//   var ori2 = $(elem).css('filter');
//   if (ori2) {
//     ori2 = parseInt( ori2.replace(')','').replace('alpha(opacity=','') ) / 100;
//     if (!isNaN(ori2) && ori2 != '') {
//       ori = ori2;
//     }
//   }
//   return ori;
// }
// $( ".pildil6uend" ).mouseover(function() {
//     var img1 = document.getElementById($(this).attr('rel'));
//     var canvas = document.getElementById(this.id);
//     var context = canvas.getContext("2d");
//     var width = img1.width;
//     var height = img1.height;
//     canvas.width =  width;
//     canvas.height = height;
//     var pixels = 4 * width * height;
//     context.drawImage(img1, 0, 0);
//     var image1 = context.getImageData(0, 0, width, height);
//     var imageData1 = image1.data;
//     while (pixels--) {
//         imageData1[pixels] = imageData1[pixels] * 247 /255;
//             }
//     image1.data = imageData1;
//     context.putImageData(image1, 0, 0);
//     $(this.parentNode.parentNode).css("background-color","#F7F7F7");
// });


// $( ".pildil6uend" ).mouseout(function() {
//   var canvas = document.getElementById(this.id);
//   var context = canvas.getContext("2d");
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   if(window.klikk==true){$( ".multiply" ).fadeTo( 500 , 1, function() {
//     });window.klikk=false;}
//    $(this.parentNode.parentNode).css("background-color","white");
// });

// $( ".pildil6uend" ).click(function() {
//   $( ".multiply" ).not(document.getElementById($(this).attr('rel'))).fadeTo( 250 , 0.5, function() {
//      });
//    window.klikk=true;
// });

// $( document ).ready(function() {
//   $('.js-listedmenu').each(function() {
//     var $list = $(this);
//    $list.find('li:gt(6)').hide();
//     });
//   $('.js-show-button').click(function(e) {
//       e.preventDefault();
//       var $btn = $(this).find('span');
//       $('.js-listedmenu > li:gt(6)').slideToggle();
//       $btn.text($btn.text() == 'Rohkem' ? 'Vähem' : 'Rohkem');
//   });
// });

// FRONTPAGE MORE
$(document).ready(function() {

  $('.js-listedmenu').hideMaxListItems({ 'max': 4, 'speed':500, 'moreText':'Näita rohkem', 'lessText': 'Näita vähem' });

  $('.js-placeholder-offers').hideMaxAItems({ 'max':8, 'speed':2000, 'moreText':'Näita rohkem', 'lessText': 'Näita vähem' });

});


// FRONTPAGE ADJUSTED SIZE FLASH TEXT
// http://stackoverflow.com/questions/4165836/javascript-scale-text-to-fit-in-fixed-div
$( '.js-filltext' ).each(function ( i, box ) {

    var width = $( box ).width(),
        html = '<span style="white-space:nowrap">',
        line = $( box ).wrapInner( html ).children()[ 0 ],
        n = 100;
    
    $( box ).css( 'font-size', '100px' );

    $(box).css('font-size', Math.floor( width/$(line).width()*100 ));
    $( box ).text( $( line ).text() );

});


// DETAIL POPOVER
$('[data-toggle="popover"]').popover();
$('body').on('click', function (e) {
  $('[data-toggle="popover"]').each(function () {
      if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
          $(this).popover('hide');
      }
  });
});

$('.js-slidetoggle').click(function(e) {
  $(this).parents().next('.js-togglable').slideToggle('slow');
  e.preventDefault();
});
