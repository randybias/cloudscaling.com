$(window).load(function() {
	// $(".loader").fadeOut("slow");
})

$(function() {
	$( ".search-icon" ).on( "click", function() {
		$('#global-search').submit();
	});

	$.fn.footnotify = function() {

		var str = this.html();

		var regex = /(\[[0-9]{1}\])/ig

		var count = 0;


		replaced_text = str.replace(regex, function(match, contents, offset, s, count)
		{
			return "<a href='#footnotes-"+match+"' name='footnotes-"+match+"' data-offset='"+ offset +"' data-match="+ match +"><span class='footnotes'><sup>"+match+"</sup></span></a>";
		}
		); 

		this.html(replaced_text);
		return this;
	}

	if ($( ".post-content" ).length )
		$( ".post-content" ).footnotify();
});
var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	sURLVariables = sPageURL.split('&'),
	sParameterName,
	i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};
$( document ).ready(function() {

	// if (window.location.href.indexOf("search.html?s=") > -1) {
	// 	var search_query = getUrlParameter('s');
	// 	$('.nav-search-input').val(search_query);
	// 	window.data.then(function(loaded_data) {
	// 		$('#submit_search').click();
	// 	});
	// }
});