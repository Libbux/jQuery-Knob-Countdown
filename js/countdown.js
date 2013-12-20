(function($) {
	$.fn.countdown = function(options) {
		var settings = { 'date': null };
		if(options) {
			$.extend(settings, options);
		}

		this_sel = $(this);
		
		function count_exec() {
			eventDate = Date.parse(settings['date']) / 1000; // Parse the date string
			currentDate = 	Math.floor($.now() / 1000); // Find the timestamp for now
			seconds = eventDate - currentDate; // Find the number of seconds remaining
			if (seconds <= 0) { // After the event date has passed
				days = 0;
				hours = 0;
				minutes = 0;
				seconds = 0;
			} else {
				days = 			Math.floor(seconds / (60 * 60 * 24));		// Divide to find the number of days remaining
				seconds -=		days * 60 * 60 * 24;						// Subtract the number of (complete, => 24 hours) days calculated above
				
				hours = 		Math.floor(seconds / (60 * 60));			// Get the number of hours from that modified number ^
				seconds -=		hours * 60 * 60;
				
				minutes = 		Math.floor(seconds / 60);
				seconds -=		minutes * 60;
			}
			this_sel.find('#days').val(days).trigger('change');
			this_sel.find('#hours').val(hours).trigger('change');
			this_sel.find('#mins').val(minutes).trigger('change');
			this_sel.find('#secs').val(seconds).trigger('change');

		} // End of count_exec();

		count_exec();

		interval = setInterval(count_exec, 1000);

	} // End of the main function
}) (jQuery);
