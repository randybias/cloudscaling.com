$(window).load(function() {
	$(".loader").fadeOut("slow");
})

$(function() {
	
	$('.loadmore').on( "click", function(event) {
		if (!$(this).hasClass('.loading')) {
			event.preventDefault();
			$(this).addClass("loading");
			loadMorePosts();
		}
	});

	function loadMorePosts() {
		var _this = this;
		var $blogContainer = $(".page-content .site-container");
		var nextPage = parseInt($blogContainer.attr("data-page")) + 1;
		var totalPages = parseInt($blogContainer.attr("data-totalPages"));

		$.get("/blog/page/" + nextPage, function (data) {
			var htmlData = data;
			var $articles = $(htmlData).find(".index--single-post");

			$blogContainer.attr("data-page", nextPage).append($articles);

			if ($blogContainer.attr("data-totalPages") == nextPage) {
				$(".next").remove();
			}
			$('.loadmore').removeClass("loading").attr('href', '/blog/page/'+nextPage+'/');
		});  
	}
	$( ".search-icon" ).on( "click", function() {
		if ($('#nav-search').val())
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

		var footnotes = [];
		replaced_text = str.replace(regex, function(match, contents, offset, s, count)
		{
			var int_footnote = match.replace(/\[|\]/g, "");
			if ($.inArray(int_footnote, footnotes) !== -1)
			{
			  	return "<sup>[<span class='footnotes'>"+int_footnote+"</span>]</sup> <a class='footnote-anchor footnote-anchor-bottom' href='#footnotes-"+match+"' name='footnotes-"+match+"' data-offset='"+ offset +"' data-match="+ match +"><span class='end-of-line'>↩</span></a>";
			}
			else
			{
				footnotes.push(int_footnote);
				return "<sup>[<a class='footnote-anchor footnote-anchor-top' href='#footnotes-"+match+"' name='footnotes-"+match+"' data-offset='"+ offset +"' data-match="+ match +"><span class='footnotes'>"+int_footnote+"</span></a>]</sup>"; 
			}
		}
		); 
		this.html(replaced_text);
		return this;
	}

	if ($( ".post-content" ).length && !($('body').hasClass('blog-author-randy-bias-index-html')))
		$( ".post-content" ).footnotify();

	$('.footnote-anchor').on( "click", function(event) {
		event.preventDefault();
		var scrollto = $(this).attr('name');
		if ($(this).hasClass('footnote-anchor-top'))
		{
			$('html, body').animate({
		        scrollTop: $( ".footnote-anchor-bottom[name*='"+scrollto+"']" ).offset().top
		    }, 500);
		}
		else
		{
			$('html, body').animate({
		        scrollTop: $("[name*='"+scrollto+"']").offset().top
		    }, 500);
		}
		
	});
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