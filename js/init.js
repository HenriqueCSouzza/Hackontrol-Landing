(function($) {
  $(function() {
    $(".sidenav").sidenav();
    $(".parallax").parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

$(document).ready(function() {
  $(".carousel").carousel();
});

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".materialboxed");
  var instances = M.Materialbox.init(elems, options);
});

// Or with jQuery

$(document).ready(function() {
  $(".materialboxed").materialbox();
});
