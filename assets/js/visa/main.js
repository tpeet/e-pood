var reCallFuncs = [];
(function() {

    'use strict';
    function main() {
        console.log('main js');

        scrollPageTop();
        createCustomElement(['header','footer']);
        stopPropagation();
        fullSizeElement();

        reDrawVisual();//if screen changed redraw visual

    }

    main();

}());

function reDrawVisual() {
    var oR = new OnResize();
    oR.init();
}
