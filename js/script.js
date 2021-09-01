$(".owl-carousel").owlCarousel({
    autoplay:true,
    autoplayhoverpause:true,
    autoplaytimeout:100,
    items:4,
    nav:true,
    loop:true,
    lazyLoad:true,
    margin:5,
    padding:5,
    stagePadding:5,
    responsive:{
        0:{
            items:1,
            dots:false
        },
        485:{
            items:2,
            dots:false
        },
        728:{
            items:3,
            dots:false
        },
        960:{
            items:4,
            dots:false
        },
        1200:{
            items:4,
            dots:true
        },
    }

});
$(document).ready(function(){
    $("#d").hover(function(){
        var dropdownMenu = $(this).children("#drop");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});   




var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

var x = setInterval(function() {


  var now = new Date().getTime();
    
  
  var distance = countDownDate - now;
    

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
