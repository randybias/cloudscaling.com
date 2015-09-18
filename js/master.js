$(function() {
	$( ".search-icon" ).on( "click", function() {
		console.log( $( this ).text() );
	});

    $.fn.footnotify = function() {
        // Get the content
        var str = this.html();
        // Set the regex string
        var regex = /(\[[0-9]{1}\])/ig
        // Replace plain text links by hyperlinks
        var replaced_text = str.replace(regex, "<a name='footnotes-$1'><span class='footnotes'><sup>$1</sup></span></a>");
        // Echo link
        this.html(replaced_text);
        return this;
    }
 
    // $( ".post-content" ).footnotify();
});