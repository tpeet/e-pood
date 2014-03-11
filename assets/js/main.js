console.log('\'Hello\' Elion webpage!');

(function() {

    'use strict';

    function main() {
        console.log('main js');
        resizeElement();
        createCustomElement(['content']);
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
    // function resizeElement(){
    //     var _el = $('[data-toggle="resize"]'), _pos = _el.offset(), _margin = 9, _leftpx = (_pos.left + _margin)*(-1);
    //     _el.css({ width : getScreenWidth()+'px', left:_leftpx, position:'relative' });
    //     console.log('test',_pos);
    // }

    /*window.addEventListener('resize', screenHasChanged, false);
    var resizeTimeoutId;
	function screenHasChanged(){
		window.clearTimeout(resizeTimeoutId);
		resizeTimeoutId = window.setTimeout(doResizeCode, 1000);
	}
	function doResizeCode(){
		resizeElement();
	}*/

    main();

}());