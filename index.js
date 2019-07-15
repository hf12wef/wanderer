// 生成一个雪花
function flake(){
    var snow = document.createElement("img");
    snow.src="flake1.png";
    document.body.appendChild(snow);

    // 获取屏幕的宽和高
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    // 随机分布在屏幕的上方
    var left = w*Math.random();
    var top = h*Math.random();

    // 给这个雪花设置css样式
    snow.style.transform = "scale("+ (Math.random()*0.5+0.1) +")";
    // 给雪花绝对定位
    snow.style.position = "absolute";
    snow.style.left ="px";
    snow.style.top = top+ "px";

    // 雪花下落
    setInterval(function(){
        top = top + Math.random()*8;
        // left = left + Math.random()*4;
        // 判断是否超出屏幕
        if (top > h || left> w){
            left = w*Math.random();
            top = -100;
        }
        snow.style.left = left+"px";
        snow.style.top = top+"px";
    },10);
}
for(var i=0; i<30; i++){
    flake();
}
flake();