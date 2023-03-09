

var sceneEl;
var isMouseDown = false;
var result = [];
var bbbb;
var kousya;
var mekatoro;
var sande;
var kentiku;
var senkou;
var this_text; //各科の紹介文格納用
var this_id1; //紹介文をcsvファイルから読み込むための、id
var this_id2;//紹介文をcsvファイルから読み込むための、id
var camera_iti;

var camera_pc = document.querySelector('#camera_pc');
var camera_phone = document.querySelector('#camera_phone');

window.onload = function () {
    var text = document.querySelector("#text");
    aframeMutlByte();
    init();
};



function init() {
    sceneEl = document.querySelector("a-scene");
    zyohou = sceneEl.querySelector("#zyohou_model");
    mekatoro = sceneEl.querySelector('#mekatoro_model');
    sande = sceneEl.querySelector('#sande_model');
    kentiku = sceneEl.querySelector('#kentiku_model');
    senkou = sceneEl.querySelector('#senkou_model');
    densi = sceneEl.querySelector("#densi_model");
    


}

function aframeMutlByte() {
    document.querySelectorAll('[mb-text]:empty').forEach(mb_text => {
        const text = mb_text.dataset.text
        const text_cnt = text.length
        const width = text_cnt * 1.4
        const height = 1.6
        let cvs = document.createElement('canvas')
        let ctx = cvs.getContext('2d')
        cvs.width = width * 100
        cvs.height = height * 100
        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.font = '100pt Arial'
        ctx.fillText(text, 0, 125)

        const base64 = cvs.toDataURL("image/png")
        mb_text.innerHTML = `<a-image scale="${(width) / 10} ${height / 10} 1" src="${base64}"></a-image>`
    })
}

