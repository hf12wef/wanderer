// 老鼠随机进洞，出洞
function show() {
    // 0-15之间的数字
    var random = Math.floor(Math.random() * 16);
    var mouse = $("img").get(random);
    $(mouse).addClass("mouseup").removeClass("mousedown");
    setTimeout(function(){
        $(mouse).addClass("mousedown").removeClass("mouseup");
    },2000);
}
show();
show();
show();
// 每隔2s，出现一批老鼠
setInterval(function(){
    show()
    show()
    show()
},2500);
// 打老鼠
var score = 0;
$("img").click(function(){
    // 播放击中音效
    $("#dazhong").get(0).load();
    $("#dazhong").get(0).play();
    // 老鼠直接进洞
    $(this).addClass("mousedown").removeClass("mouseup");
    // 加分
    score = score + 10;
    $("#score").text("得分：" + score);
});
// 修改鼠标样式
$("body").mousedown(function () {
    $("body").css("cursor","url(image/cursor-down.png),auto");
}).mouseup(function () {
    $("body").css("cursor","url(image/cursor.png),auto");
});

