// Variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    // Reload the page only if the width or height changes
    if (newWidth != clientWidth || newHeight != clientHeight) {
        location.reload(); // Reloads the current page
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse() {
    // Initial values for days, hours, minutes, and seconds
    var days = 6570;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    // Function to update the count every second
    var timer = setInterval(function() {
        // Increase the seconds first
        seconds++;

        // Handle overflow for seconds
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        // Handle overflow for minutes
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }

        // Handle overflow for hours
        if (hours >= 24) {
            hours = 0;
            days++;
        }

        // Format the values for display (add leading zeros)
        var hoursDisplay = hours < 10 ? "0" + hours : hours;
        var minutesDisplay = minutes < 10 ? "0" + minutes : minutes;
        var secondsDisplay = seconds < 10 ? "0" + seconds : seconds;

        // Construct the result string
        var result = "Days <span class=\"digit\">" + days + "</span> " +
                     "Hours <span class=\"digit\">" + hoursDisplay + "</span> " +
                     "Minutes <span class=\"digit\">" + minutesDisplay + "</span> " +
                     "Seconds <span class=\"digit\">" + secondsDisplay + "</span>";

        // Update the HTML element with ID 'clock' with the result
        $("#clock").html(result);
    }, 1000);  // Update every second
}

// Start the timer when the page loads
$(document).ready(function() {
    timeElapse();
});


// Text message
var text = "THE WORLD JUST GOT LUCKIER SINCE ";
$("#message-box").html(text);

