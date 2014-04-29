console.log('\'Hello\' Elion webpage!');

(function() {

    'use strict';

    function main() {
        console.log('main js');

        scrollPageTop();
        createCustomElement(['header','footer']);
        stopPropagation();
        fullSizeElement();

    }
    //scroll page to top
    function scrollPageTop(){
        $('[data-toggle="scroll-up"]').click(function(){
            $('html,body').animate({
                 scrollTop: 0
            }, 1000);
        });
    }
    // create custom element
    function createCustomElement(array){
        for(var _i=0; _i < array.length; _i++){
            document.createElement(array[_i]);
        }
    }
    // return client screen width
    function getScreenWidth(){
		var w=Math.max(document.documentElement.clientWidth,window.innerWidth||0);
		return w;
    }
    // return client screen height
    function getScreenHeight(){
        var h=Math.max(document.documentElement.clientHeight,window.innerHeight||0);
        return h;
    }
    // make a element full screen width
    function fullSizeElement(){
        var _el = $('.full-size');
        if(_el.length < 1) return;
        _el.attr('style','');// reset left value
        var _pos = _el.offset(), _leftpx = _pos.left*(-1);
        _el.css({ width : document.body.clientWidth+'px', left:_leftpx, position:'relative' });    
    }
    // stop propagation utility for dropdown menu
    function stopPropagation(){
        $(".dropdown-menu").on("click", "[data-stopPropagation]", function(e) {
            e.stopPropagation();
        });
    }

    // update visaul after screen has changed
    function updateVisual() {
      $('section.content, section.hero').css({marginTop:0+'px'});
      if(Modernizr.mq('only screen and (min-width: 768px)')) {
        $("[id*='collapsibleMainMenu']").removeClass('in').addClass('collapse').attr('style','');
        $("[href*='collapsibleMainMenu']").removeClass('active');
      }
    }

    // call your function after screen has changed
    function on_resize(c,t){window.onresize = function() {clearTimeout(t);t = setTimeout(c,500);};return c;}
    on_resize(function() {
      fullSizeElement();
      updateVisual();
    });

    main();

}());