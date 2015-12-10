(function($) {
  $(document).ready(function() {
    $(".login .toboggan-login-link-container a").click(function(){
      $(this).parent().next().toggleClass("active");
    });

    $(window).bind('scroll', function () {
      var headerheight = $('.header').outerHeight();
      if ($(window).scrollTop() > headerheight) {
        $('.header').addClass('fixed');
      } else {
        $('.header').removeClass('fixed');
      }
      
      $('.content > div.region').each(function(){
        var curent_top_region = $(this).offset().top;
        var window_scrol = $(window).scrollTop();
        var top_region = curent_top_region - window_scrol;

        if(0 < top_region && top_region < 50){
          var curent_id = $(this).attr("id");
          $('.navigation ul li a').removeClass('active');
          $('.navigation ul li a[href*="'+curent_id+'"]').addClass('active');
        }
      });
      
    });

    $('.navigation ul li a').click(function(){
      var headerheight = $('.header').outerHeight();
      $('.navigation ul li a').removeClass('active');
      $(this).addClass('active');

      var region_id = $(this).attr('href');
      var top_scroll = $(region_id).offset().top;
      console.log(region_id);
      $('body,html').animate({ scrollTop: top_scroll - headerheight }, 600);
      return false;
    });
  });
} )( jQuery );
