$(function() {
  $(".navbar-collapse ul li a").on("click touch", function() {
    $(".navbar-toggle").click();
  });
});

$(function() {
  $(document).scroll(function() {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// additional features to add
// $('.general-btn').onClick(function(){
//     $('.logo-img').addClass('jackInTheBox');
// });
