
/*
右耳朵：scratch
左耳朵: pie
额头: knockout
右嘴巴: drink
左嘴巴: eat
肚子: stomach
右脚: foot-right
左脚: foot-left
尾巴：fart
*/
var tom = document.getElementById("tom");
var player = document.getElementById("player");
// 求屏幕的宽度
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
// 当屏幕尺寸发生变化时，从新获取宽高
window.onresize = function(){
    w = document.documentElement.clientWidth;
    h = document.documentElement.clientHeight;
}
function action(e) {
    // console.log("x:" + e.pageX + " y:" + e.pageY);
    var x = e.pageX*360/w;
    var y = e.pageY*740/h;
    if (x > 70 && x < 120 && y > 125 && y < 210) {
        play("scratch", 55, 18);
    }
    if (x > 246 && x < 275 && y > 150 && y < 205) {
        play("pie",23,10);
    }
    if (x > 140 && x < 220 && y > 137 && y < 168) {
        play("knockout",80,0);
    }
    if (x > 193 && x < 283 && y > 283 && y < 325) {
        play("drink",80,0);
    }
    if (x > 133 && x < 171 && y > 280 && y < 325) {
        play("eat",39.0);
    }
    if (x > 153 && x < 215 && y > 538 && y < 614) {
        play("stomach",33,0);
    }
    if (x > 185 && x < 210 && y > 667 && y < 693) {
        play("foot_left",29,0);
    }
    if (x > 127 && x < 165 && y > 674 && y < 704) {
        play("foot_right",29,0);
    }
    if (x > 244 && x < 280 && y > 568 && y < 639) {
        play("fart",27,0);
    }
}
var playing = false;
function play(name, count, start) {
    if (playing) return;
    playing = true;
    var i = 0;
    changeImg();
    function changeImg() {
        var src = name + "/" + name + "_" + i + ".jpg";
        if (i < 10) {
            var src = name + "/" + name + "_0" + i + ".jpg";
        }
        // 特殊情况，特殊处理
        if (name == "dring" && i == 15) {
            player.src = "sounds/pour.mp4";
            player.play();
            if (name == "knockout" && i == 0) {
                player.src = "sounds/fall.mp4";
                player.play();
            }
        }
        if (i == start) {
            player.src = "sounds/" + name + ".m4a";
            player.play();
        }
        tom.src = src;
        i++;
        if (i <= count) {
            setTimeout(changeImg, 100);
        } else {
            playing = false;
        }
    }
}