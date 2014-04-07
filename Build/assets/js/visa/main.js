console.log('\'Hello\' Elion webpage!');

(function() {

    'use strict';

    function main() {
        console.log('main js');

        scrollPageTop();
        fullSizeElement();
        createCustomElement(['content','footer']);
        stopPropagation();

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
        var _el = $('[data-toggle="full-size"]');
        if(_el.length < 1) return;
        var _pos = _el.offset(), _leftpx = _pos.left*(-1);
        _el.css({ width : document.body.clientWidth+'px', left:_leftpx, position:'relative' });
    }
    // stop propagation utility for dropdown menu
    function stopPropagation(){
        $(".dropdown-menu").on("click", "[data-stopPropagation]", function(e) {
            e.stopPropagation();
        });
    }

    /* do something after screen has changed */
    window.addEventListener('resize', screenHasChanged, false);
    var resizeTimeoutId;
	function screenHasChanged(){
		window.clearTimeout(resizeTimeoutId);
		resizeTimeoutId = window.setTimeout(renderLayout, 100);
	}
	function renderLayout(){
        // resize full screen elements
		//fullSizeElement();

        // handle dropdown menu
        if(Modernizr.mq('only screen and (min-width: 768px)')) {
            
            var _el = $('[id^="collapsibleMainMenu-"]');
            if( _el.hasClass('in') ) {
                _el.removeClass('in').addClass('collapse');
                $('content').css({marginTop:0+'px'});
            }

            // remove active class
            $('[href^="#collapsibleMainMenu"]').removeClass('active');
            console.log('w:',getScreenWidth(), ' h:',getScreenHeight());
            // handle content margin top
            var __el = $('#collapsibleMainMenu-Pages .dropdown.open').find('.dropdown-menu');
            var _h = __el.height() + 20;
            _h += 'px';
            
            if(__el.length > 0) {
                $('content').animate({marginTop: ( _h ) });
                console.log('do something:', _h);
            }

        } else {

            $('content').css({marginTop:0+'px'});

        }


	}

    main();

}());