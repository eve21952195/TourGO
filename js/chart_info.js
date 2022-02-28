// 漢堡選單
$(".hamBar").on("click", function(e) {
    e.preventDefault();
    $(".navbar ul").slideToggle(600);
});
