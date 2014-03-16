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
		lessText:'Näita vähem',
		moreHTML:'<p class="tsr-btn-view-all maxlist-more"><span></span></p>', // requires class and child <a>
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
			// Add "Read More" button
			// $(this).after(op.moreHTML);
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


						// Click events on "Read More" button: Slide up and down
			// $(".js-show-button").click(function(e)
			// {
			// 	if ( $(this).text() == newLessText ){
			// 		$(this).children("span").text(newMoreText);
			// 		var i = 0; 
			// 		$("#content-placeholder-frontmenu").find(".js-listedmenu >li").each(function(i) {
			// 		$(this).slideDown().css('display', 'block');
			// 	}); 
			// 	}
			// 	else {			
			// 		$(this).children("span").text(newLessText);
			// 		var i = listElements.length - 1;  
			// 		$("#content-placeholder-frontmenu").find(".js-listedmenu >li").each(function(i) {
			// 		$(this).slideUp().css('display', 'none');
			// 		}); 
			// 	}
			// 	e.preventDefault();
			// });
		}
	});
}
});
})(jQuery); // End jQuery Plugin


