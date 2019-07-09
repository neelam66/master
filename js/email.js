function myFunction() {
    var x = document.getElementById("myEmail").pattern;
    document.getElementById("demo").innerHTML = x;
  }

  $(document).ready(function(){
    $("#all").click(function(){
        $("#MobileApp1").show();
		$("#MobileApp2").show();
		$("#Identities1").show();
		$("#Identities2").show();
		$("#Interior1").show();
		$("#Interior2").show();
		$("#UI1").show();
		$("#UI2").show();
    });
  $("#MobileApp").click(function(){
        $("#MobileApp1").show();
		$("#MobileApp2").show();
		$("#Identities1").hide();
		$("#Identities2").hide();
		$("#Interior1").hide();
		$("#Interior2").hide();
		$("#UI1").hide();
		$("#UI2").hide();
    });
 $("#Identities").click(function(){
        $("#MobileApp1").hide();
		$("#MobileApp2").hide();
		$("#Identities1").show();
		$("#Identities2").show();
		$("#Interior1").hide();
		$("#Interior2").hide();
		$("#UI1").hide();
		$("#UI2").hide();
    });
 $("#Interior").click(function(){
        $("#MobileApp1").hide();
		$("#MobileApp2").hide();
		$("#Identities1").hide();
		$("#Identities2").hide();
		$("#Interior1").show();
		$("#Interior2").show();
		$("#UI1").hide();
		$("#UI2").hide();
    });
 $("#UI").click(function(){
        $("#MobileApp1").hide();
		$("#MobileApp2").hide();
		$("#Identities1").hide();
		$("#Identities2").hide();
		$("#Interior1").hide();
		$("#Interior2").hide();
		$("#UI1").show();
		$("#UI2").show();
    });	
});



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
  