(function() {

    'use strict';

    function footer() {
        console.log('footer js');
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        console.log(w, h, 'testt');
    }
    
    footer();
}());