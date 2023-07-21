// alert("program run");

/*=======================================
            PRELOADER
========================================*/
$(window).on("load", function () {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
});

/*=======================================
            Teams
========================================*/

$(function () {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});

/*=======================================
            Responsive Tabs  
========================================*/
$(function () {
  $("#services-tabs").responsiveTabs({
    animation: "slide",
  });
});

/*=======================================
            Portfolio
========================================*/
/*$(window).on('load', function () {
    
    // initilize isotope
    $("#isotope-container").isotope({ 
    });
    
    //filter item on click
    $("#isotope-filters").on('click', 'button', function() {
      
        //get filter value 
        var filterValue = $(this).attr('data-filter');
       
        //filter portfolio
        $("#isotope-container").isotope({
            filter : filterValue
        });
        
        //active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
        
    });
    
});


*/

/*=======================================
            Testimonial 
========================================*/
$(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});

/*=======================================
            Clients 
========================================*/

$(function () {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});

/*=======================================
           Stats 
========================================*/

$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
});

/*=======================================
           Animation 
========================================*/
// Animate on Scroll
$(function () {
  new WOW().init();
});

$(window).on("load", function () {
  $("#home-heading-1").addClass("animated fadeInDown");
});

/*  Navigation   */

// Show and Hide Navigation
$(function () {
  showHideNav();

  $(window).scroll(function () {
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("white-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
    } else {
      $("nav").removeClass("white-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/logo.png");
    }
  }
});

document.getElementById("home-btn").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});
