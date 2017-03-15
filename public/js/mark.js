$(document).ready(function(){
    $("#menu").click(function(){
        $("#nav-menu").toggle(1000);
    });

    $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


  $(window).scroll(function() {
      $('.navbar').css('top', $(this).scrollTop() + "px");
      if ($(this).scrollTop()>50){
        
        // animate fixed div to small size:
        $('.navbar').stop().animate({ height: 40, 'font-size': 0.9 + "rem"},100);
        $('.navbar-brand').stop().animate({  'font-size': 0.9 + "rem",'padding-top': 0, 'line-height': 40  } ,100);
        $(".navbar").css("background-color", "#97D49F");
        $('.navbar-toggler-icon').stop().animate({ 'font-size': 0.9 + "rem" },100);
        
    } else {
        //  animate fixed div to original size
        $('.navbar').stop().animate({ height: 50, 'font-size': 1 + "rem"},100);
        $('.navbar-brand').stop().animate({  'font-size': 1.25 + "rem" },100);
        $(".navbar").css("background-color", "transparent");
        $('.navbar-toggler-icon').stop().animate({ 'font-size': 1.25 + "rem" },100);
    }
    // $('#top').css('top', $(this).scrollTop() + "px");
});
    
    $(document).scroll(function(){
    if ($(this).scrollTop()>175){
        // animate fixed div to small size:
        $('#top').stop().animate({ height: 90 },100);
    } else {
        //  animate fixed div to original size
        $('#top').stop().animate({ height: 175 },100);
    }
}); 


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}
});