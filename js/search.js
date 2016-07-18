
jQuery(function() {
  
  window.idx = lunr(function () {
    this.field('id');
    this.field('title', { boost: 10 });
    this.field('author');
    this.field('date');
    this.field('author_url');
    this.field('category');
    this.field('content');
  });


  window.data = $.getJSON('/search_data.json');


  window.data.then(function(loaded_data){
    $.each(loaded_data, function(index, value){
      window.idx.add(
        $.extend({ "id": index }, value)
        );
    });
  });


  var typingTimer;                
  var doneTypingInterval = 500;  
  var $input = $('.nav-search-input');


  $input.on('keyup', function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  });


  $input.on('keydown', function () {
    clearTimeout(typingTimer);
  });


  function doneTyping () {

    var query = $(".nav-search-input").val(); 
    var results = window.idx.search(query); 

    display_search_results(results); 
  }

  $("#site_search").submit(function(event){
    event.preventDefault();
    var query = $(".nav-search-input").val(); 
    var results = window.idx.search(query); 

    display_search_results(results); 
  });

  if (window.location.href.indexOf("search.html?s=") > -1) {
    var search_query = getUrlParameter('s');
    $('.nav-search-input').val(search_query);
    window.data.then(function(loaded_data) {
      $(".loader").fadeOut("slow");
      $('#submit_search').submit();
    });
  }

  function display_search_results(results) {

    var $search_results = $("#results");

    window.data.then(function(loaded_data) {
      $(".loader").fadeOut("slow");

      if (results.length) {
        $search_results.empty(); 


        results.forEach(function(result) {
          var item = loaded_data[result.ref];

          var appendString = '<div class="index--single-post"> <div class="post-header"> <h1 class="post-title"><a href="' + item.url + '">' + item.title + '</a></h1> <p class="post-meta">Posted on <span class="date-meta">' + item.date + '</span> by <span class="author-meta"><a href="' + item.author_url + '"> ' + item.author + ' </a></span> </p> </div> <div class="post-content"><p> ' + item.content + '</p> </div> </div>';


          $search_results.append(appendString);
        });
      } else {
        $search_results.html('<p class="">No results found<p>');
      }
    });
  }
});