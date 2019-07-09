function myFunction() {
    var x = document.getElementById("myEmail").pattern;
    document.getElementById("demo").innerHTML = x;
  }


  $("#filter button").each(function() {
    $(this).on("click", function(){
        var filtertag = $(this).attr('class');
        $('.post').show();
        $('.post:not(.' + filtertag + ')').hide();
    });
});





//   $('#filter a').click(function() {
//     if($(this).attr('rel')) {
//         $('img-sec').hide().filter('[class="' + $(this).attr('rel') + '"]').show();
//     } else {
//         $('img-sec').show();
//     }

//     return false;
// });





  // $(document).ready(function() {
  //   $(".project .btn").click(function () {
  //       $(".project .btn").removeClass("active");
  //       $(this).addClass("active");        
  //     var showClass = this.id;
  //     $('.product-img-sec').addClass('hidden');
  
  //     if( showClass == 'all'){
  //       $('.product-img-sec').removeClass('hidden');
  //     }else{
  //       $('.product-img-sec.'+showClass).removeClass('hidden');
  //     } 
      
  //   });
  // });

  window.onload=function(){
    $slideshow = $('.slider').slick({
      dots:true,
    autoplay:true,
    arrows:true,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>',
    slidesToShow:1,
    slidesToScroll:1
    });
    $('.slide').click(function() {
      $slideshow.slick('slickNext');
    });
  };
  