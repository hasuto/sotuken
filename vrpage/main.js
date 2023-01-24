var front_text 
var sceneEl;
var isMouseDown = false;
var cnt = 0;

var texta = document.querySelector('#texta');


window.onload = function () {
    init();
    render();
};

function init() {

    sceneEl = document.querySelector("a-scene");




    // マウス、タッチ処理を呼び出すイベントリスナーをセット
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("touchstart", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchend", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onMouseMove);


}


function render() {

    requestAnimationFrame(render);

}

function count(){
	front_text = document.getElementById("text");
	console.log("ok");
	cnt++;
	console.log(cnt);
	if(cnt == 1){
	
    front_text.setAttribute("value", "Hello,1");
	}else if(cnt == 2){
		front_text.setAttribute("value", "Hello,2");
	}
}


function onMouseDown(event) {
    isMouseDown = true;
}

// マウスを動かした時
function onMouseMove(event) {

}

// マウスを離したとき
function onMouseUp(event) {
    isMouseDown = false;
}

function getMouseX(event) {
    if (event.type.indexOf("touch") == -1)
        return event.clientX;
    else
        return event.touches[0].clientX;
}

function getMouseY(event) {
    if (event.type.indexOf("touch") == -1)
        return event.clientY;
    else
        return event.touches[0].clientY;
}