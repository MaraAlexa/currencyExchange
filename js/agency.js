/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    var myLineChart = new Chart(ctx).Line(data, {
    	scaleLabel: "<%=value%>",
    	scaleOverride: true,
    	scaleSteps: 9,
    	scaleStepWidth: 0.01,
    	scaleStartValue: 1.06,
      responsive: true
    });
}); // end ready function

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// GRAPHS - using charts.js ----------------------------------------------------

// Get context with jQuery - using jQuery's .get() method.
var ctx = $("#myChart").get(0).getContext("2d");

// data structure

var data = {
    labels: ["Last Month", "3 Weeks Ago", "2 Weeks Ago", "Last Week", "Now"],
    datasets: [

        {
            label: "My dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [1.1376, 1.1111, 1.1001, 1.0898, 1.0767, 1.0701, 1.0661]
        }
    ]
};
