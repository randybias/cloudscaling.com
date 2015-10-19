$(window).load(function() {
	$(".loader").fadeOut("slow");
})

$(function() {

	$('.loadmore').on( "click", function(event) {
		if (!$(this).hasClass('.loading')) {
			event.preventDefault();
			$(this).addClass("loading");
			console.log("clicked");
			loadMorePosts();
			$(this).removeClass("loading");
		}
	});

	function loadMorePosts() {
		var _this = this;
		var $blogContainer = $(".site-container");
		var nextPage = parseInt($blogContainer.attr("data-page")) + 1;
		var totalPages = parseInt($blogContainer.attr("data-totalPages"));

		$.get("/blog/page/" + nextPage, function (data) {
			var htmlData = data;
			var $articles = $(htmlData).find(".index--single-post");

			$blogContainer.attr("data-page", nextPage).append($articles);

			if ($blogContainer.attr("data-totalPages") == nextPage) {
				$(".next").remove();
			}
		});  
	}
	$( ".search-icon" ).on( "click", function() {
		$('#global-search').submit();
	});
	$( ".menu-icon" ).on( "click", function() {
		$('.trigger').toggleClass('hide');
		$('.responsive-search').toggleClass('open');
	});
	$.fn.footnotify = function() {

		var str = this.html();

		var regex = /(\[[0-9]{1}\])/ig

		var count = 0;


		replaced_text = str.replace(regex, function(match, contents, offset, s, count)
		{
			var int_footnote = match.replace(/\[|\]/g, "");
			return "<sup>[<a class='footnote-anchor' href='#footnotes-"+match+"' name='footnotes-"+match+"' data-offset='"+ offset +"' data-match="+ match +"><span class='footnotes'>"+int_footnote+"</span></a>]</sup>";		}
			); 

		this.html(replaced_text);
		return this;
	}

	if ($( ".post-content" ).length )
		$( ".post-content" ).footnotify();
	// var html = $( ".post-content hr" ).html();
	// $(html).append('toto');
	// $(html.split('<br>')).each(function(){
	//     $(this).append('<div>'+this+'</div>')
	//})
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