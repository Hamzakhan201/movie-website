
(function ($) {
    "use strict";
    $(document).ready(function(){
      $('#checkbox').click(function(){
          var element = document.body;
          element.classList.toggle("dark"); 
      });
  });    
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        //document.getElementById("header").style.marginLeft = "250px";
    }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        //document.getElementById("header").style.marginLeft= "0";
    };

$(".owl-carousel").on("initialized.owl.carousel", () => {
    setTimeout(() => {
      $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
      $("section").show();
    }, 200);
  });
  
  const $owlCarousel = $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
 });
  
  
  
  $owlCarousel.on("changed.owl.carousel", e => {
    $(".owl-slide-animated").removeClass("is-transitioned");
  
    const $currentOwlItem = $(".owl-item").eq(e.item.index);
    $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");
  
    const $target = $currentOwlItem.find(".owl-slide-text");
    doDotsCalculations($target);
  });
  
  $owlCarousel.on("resize.owl.carousel", () => {
    setTimeout(() => {
      setOwlDotsPosition();
    }, 50);
  });
  
  
  setOwlDotsPosition();
  
  function setOwlDotsPosition() {
    const $target = $(".owl-item.active .owl-slide-text");
    doDotsCalculations($target);
  }
  
  function doDotsCalculations(el) {
    const height = el.height();
    const { top, left } = el.position();
    const res = height + top + 20;
  
    $(".owl-carousel .owl-dots").css({
      top: `${res}px`,
      left: `${left}px` });
  
  }
    
  $('.owl-dot').each(function(){
    $(this).children('span').text($(this).index()+1);
    });
})(jQuery);	