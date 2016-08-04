$(window).load(function() {
	$(".loader").fadeOut("slow");
	initiateSidebar();
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

			// added content has moved the bottom of the page, reinitiate sidebar, but give new posts time to load
			setTimeout(initiateSidebar(), 1000);
		});
	}
	$( ".search-icon" ).on( "click", function() {
		if ($('#nav-search').val())
			$('#global-search').submit();
	});

	$( "#mobile-open" ).on( "click", function() {
		$( this ).parent().toggleClass( "nav-open" );
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
var initiateSidebar = function initiateSidebar() {
	if (!$('#sidebar-sticky').length) {
		return false;
	}

	var window_height = $(window).height()
	stick_me = $('#sidebar-sticky'),						// the element you want to stick
	limit_me = $('.pagination-wrapper'),					// bottom most element to prevent colliding with
	start_at = 253,											// default element start location
	hold_at = 15,											// upper limit for stuck element (stick offset from top)
	stop_at = (limit_me.offset().top - window_height),		// element hide point (to avoid collision)
	stick_at = (start_at - hold_at),						// position to enable sticky
	footer_height = ($(document).height() - limit_me.offset().top)
	space_available = window_height - (footer_height + stick_me.height() + hold_at);

	// enable stuck element when reinitalizing on smaller screen heights, because bottom of page has moved
	if (stick_me.hasClass('sticky_hidden')) {
		stick_me.stop().fadeTo('fast',1).removeClass('sticky_hidden');
	}

	$(window).scroll(function () {
		var position = $(document).scrollTop();					// current position while scrolling

		// hide to avoid colliding with the limit element, if the current window height is shorter than what we need
		if (position >= stop_at && space_available <= 0) {
			if (!stick_me.hasClass('sticky_hidden')) {
				stick_me.stop().fadeTo('fast',0).addClass('sticky_hidden');
			}
		}
		// we're scrolling below the stick point, stick the element
		else if (position >= stick_at) {
			stick_me.css({'position': 'fixed', 'top': hold_at + 'px'});

			// if we're coming back up and fadded the element directly reenable it
			if (stick_me.hasClass('sticky_hidden')) {
				stick_me.stop().css({'opacity':'1'}).removeClass('sticky_hidden');
			}
		}
		// we're scrolling up and need to release the element to it's natural location
		else {
			stick_me.css({'position': 'relative', 'top': '0px'});
		}

	});
}