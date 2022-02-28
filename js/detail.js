// 漢堡選單
$(".hamBar").on("click", function(e) {
    e.preventDefault();
    $(".navbar ul").slideToggle(600);
});


// 近期推薦-輪播圖
const nextIcon = `<i class="far fa-angle-right"></i>`
const prevIcon = `<i class="far fa-angle-left"></i>`


$(".owl-carousel").owlCarousel({
    center: true,
      items:2,
      loop:true,
      margin:10,
      responsive:{
          600:{
              items:2
          }
      }
  });