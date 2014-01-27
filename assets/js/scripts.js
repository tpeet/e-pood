
var klikk=false;
function getopacity(elem) {
  var ori = $(elem).css('opacity');
  var ori2 = $(elem).css('filter');
  if (ori2) {
    ori2 = parseInt( ori2.replace(')','').replace('alpha(opacity=','') ) / 100;
    if (!isNaN(ori2) && ori2 != '') {
      ori = ori2;
    }
  }
  return ori;
}
$( ".pildil6uend" ).mouseover(function() {
    var img1 = document.getElementById($(this).attr('rel'));
    var canvas = document.getElementById(this.id);
    var context = canvas.getContext("2d");
    var width = img1.width;
    var height = img1.height;
    canvas.width =  width;
    canvas.height = height;
    var pixels = 4 * width * height;
    context.drawImage(img1, 0, 0);
    var image1 = context.getImageData(0, 0, width, height);
    var imageData1 = image1.data;
    while (pixels--) {
        imageData1[pixels] = imageData1[pixels] * 247 /255;
            }
    image1.data = imageData1;
    context.putImageData(image1, 0, 0);
    $(this.parentNode.parentNode).css("background-color","#F7F7F7");
});


$( ".pildil6uend" ).mouseout(function() {
  var canvas = document.getElementById(this.id);
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  if(window.klikk==true){$( ".multiply" ).fadeTo( 500 , 1, function() {
    });window.klikk=false;}
   $(this.parentNode.parentNode).css("background-color","white");
});

$( ".pildil6uend" ).click(function() {
  $( ".multiply" ).not(document.getElementById($(this).attr('rel'))).fadeTo( 250 , 0.5, function() {
     });
   window.klikk=true;
});

