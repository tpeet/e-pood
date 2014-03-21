// HIDE MAX LIST ITEMS JQUERY PLUGIN
// Version: 1.34
// Author: www.joshuawinn.com
// Usage: Free and Open Source. WTFPL: http://sam.zoy.org/wtfpl/
(function($){
$.fn.extend({ 
hideMaxAItems: function(options) 
{
	// DEFAULT VALUES
	var defaults = {
		max: 3,
		speed: 1000,
		moreText:'Näita rohkem',
		lessText:'Näita vähem'
	};
	var options =  $.extend(defaults, options);

	// FOR EACH MATCHED ELEMENT
	return this.each(function() {
		var op = options;
		var totalAItems = $(this).children("a").length;
		var speedPerA;
		
		// Get animation speed per LI; Divide the total speed by num of LIs. 
		// Avoid dividing by 0 and make it at least 1 for small numbers.
		if ( totalAItems > 0 && op.speed > 0  ) { 
			speedPerA = Math.round( op.speed / totalAItems );
			if ( speedPerA < 1 ) { speedPerA = 1; }
		} else { 
			speedPerA = 0; 
		}
		      
		// If list has more than the "max" option
		if ( (totalAItems > 0) && (totalAItems > op.max) )
		{
			// Initial Page Load: Hide each LI element over the max
			$(this).children("a").each(function(index) {
				if ( (index+1) > op.max ) {
					$(this).hide(0);
					$(this).addClass('maxlist-hidden ');
				}
			});
			// Replace [COUNT] in "moreText" or "lessText" with number of items beyond max
			var howManyMore = totalAItems - op.max;
			var newMoreText = op.moreText;
			var newLessText = op.lessText;
			
			if (howManyMore > 0){
				newMoreText = newMoreText.replace("[COUNT]", howManyMore);
				newLessText = newLessText.replace("[COUNT]", howManyMore);
			}
			// Add "Read More" text
			$(this).parent().next(".tsr-btn-view-all").children("span").text(newMoreText);
			
			// Click events on "Read More" button: Slide up and down
			$(this).parent().next(".tsr-btn-view-all").children("span").click(function(e)
			{
				// Get array of children past the maximum option 
				var listElements = $(".js-placeholder-offers").children("a"); 
				listElements = listElements.slice(op.max);
				
				// Sequentially slideToggle the list items
				// For more info on this awesome function: http://goo.gl/dW0nM
				if ( $(this).text() == newMoreText ){
					$(this).text(newLessText);
					var i = 0; 
					(function() { $(listElements[i++] || []).slideToggle(speedPerA,arguments.callee); })();
				} 
				else {			
					$(this).text(newMoreText);
					var i = listElements.length - 1; 
					(function() { $(listElements[i--] || []).slideToggle(speedPerA,arguments.callee); })();
				}
				
				// Prevent Default Click Behavior (Scrolling)
				e.preventDefault();
			});
		}
	});
}
});
})(jQuery); // End jQuery Plugin


