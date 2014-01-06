$(function(){
    $(".next-chapter").bind("click", function (event) {
        event.preventDefault ? event.preventDefault() : event.preventDefault = false;
        var target = $(this).attr("href");
        $("html, body").stop().animate({
                scrollLeft: $(target).offset().left,
                scrollTop: $(target).offset().top
            }, 500);
    });
});

    $(window).scroll(function(){ 
      if ($(this).scrollTop() > 310){  
       // x should be from where you want this to happen from top//
        //make CSS changes here  
         $('header').addClass('scrolled');
         $('#logo').attr('src','MFLoGoBlack.png');
      } 
      else{
        //back to default styles
        $('header').removeClass('scrolled');
        $('#logo').attr('src','MFLoGoWhite.png');
      }
    });