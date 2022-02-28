// 漢堡選單
$(".hamBar").on("click", function(e) {
    e.preventDefault();
    $(".navbar ul").slideToggle(600);
});


// 近期推薦-輪播圖
const nextIcon = `<i class="far fa-angle-right"></i>`
const prevIcon = `<i class="far fa-angle-left"></i>`


$('.owl-carousel.act_ad').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    dots: false,
    navText:[prevIcon,nextIcon],
    // navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    autoplay: true,
    autoplayTimeout: 3000,
    items:1
})

// 活動分類-輪播圖
$(".owl-carousel.act_category").owlCarousel({
    loop: true, // 循環播放
    margin: 10, // 外距 10px
    nav: true, 
    dots: false,
    navText:[prevIcon,nextIcon],
    responsive: {
      0: {
        dots: true, 
        items: 2 // 螢幕大小為 0~768 顯示 2 個項目
      },
      768: {
        items: 3 // 螢幕大小為 768~992 顯示 3 個項目
      },
      992: {
        items: 5 // 螢幕大小為 992 以上 顯示 5 個項目
      }
    }
  });

// 熱門商品-輪播圖
$(".owl-carousel.act_rank").owlCarousel({
    loop: true, // 循環播放
    margin: 10, // 外距 10px
    nav: true, 
    dots: false,
    navText:[prevIcon,nextIcon],
    responsive: {
      0: {
        dots: true,
        items: 2 // 螢幕大小為 0~768 顯示 2 個項目
      },
      768: {
        items: 3 // 螢幕大小為 768~992 顯示 3 個項目
      },
      992: {
        items: 4 // 螢幕大小為 992 以上 顯示 5 個項目
      }
    }
  });