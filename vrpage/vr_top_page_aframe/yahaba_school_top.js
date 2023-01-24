

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
// var xhr;

//const cameraWrapper = document.getElementById("camera-wrapper")
//const camera = cameraWrapper.querySelector("a-camera")
//const cameraRotation = camera.getAttribute("rotation") // <a-camera>の現在のrotation(回転)を取得</a-camera>

//cameraWrapper.setAttribute("rotation", { y: 45 })

window.onload = function () {
    var text = document.querySelector("#text");
    console.log("konpire");
    // document.querySelector('a-scene').addEventListener('loaded', function () {
    //     console.log("コンプリート");
    // });
    aframeMutlByte();
    init();

    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
        // ❶スマホのみに適用させるJavaScriptを記述
        // console.log(document.querySelector('#camera').getAttribute('orbit-controls'));
        // console.log(document.querySelector('#dodai').getAttribute('position'))
      
    //    var densi_model_pc = document.querySelector('#densi_model_phone');
    //     console.log(camera_pc.parentNode);
    //    camera_pc.parentNode.removeChild(camera_pc);
    //    camera_phone.parentNode.appendChild(camera_phone);
    //    densi_model_pc.parentNode.removeChild(densi_model_pc);


       // document.querySelector('#camera').setAttribute('orbit-controls',{initialPosition:20})
        console.log("スマホだよーーーーaframe");

    } else {
      
        camera_phone.parentNode.removeChild(camera_phone);
        camera_pc.parentNode.appendChild(camera_pc);
        console.log("PCだよーーーーーーー");
    }
    //render();
    // document.querySelector('a-scene').addEventListener('mousemove',function(e){
    //     //console.log("動いている");
    //     console.log(document.querySelector('#camera').getAttribute("rotation"));
       
    //     camera_iti = document.querySelector('#camera').getAttribute("rotation")
    //     if(camera_iti.y >= 360){
    //         console.log("超えたよ");
    //         //camera_iti.setAttribute("rotation",{y:0});
    //     }
    //  //   text.setAttribute("rotation",{x:0,y:camera_iti.y,z:0});
    //   //  var text_iti = document.querySelector('#text_densi').getAttribute('rotation');

     
    //    // document.querySelector('#honkan_point').setAttribute('rotation',{y:camera_iti.y*2.5});
    //    // document.querySelector('#honkan_point').animate([{transform:'rotate(0deg)'},{transform:'rotate(360deg)'}],{duration:3000,easing:'linear',iterations:Infinity});
    //     // if(text_iti.y >= 365){
    //     //     document.querySelector('#text_densi').setAttribute('rotation',{y:(camera_iti.y)*2.1});
   
    //     // }else{
    //     //     document.querySelector('#text_densi').setAttribute('rotation',{y:camera_iti.y*2.1});
    //     // }
    //  //   document.querySelector('#sample_text').setAttribute('rotation',{y:camera_iti.y*1.8});
    //    // console.log(document.querySelector('#sample_text').getAttribute('rotation'));
    // });
};



function init() {
    sceneEl = document.querySelector("a-scene");
    zyohou = sceneEl.querySelector("#zyohou_model");
    mekatoro = sceneEl.querySelector('#mekatoro_model');
    sande = sceneEl.querySelector('#sande_model');
    kentiku = sceneEl.querySelector('#kentiku_model');
    senkou = sceneEl.querySelector('#senkou_model');
    densi = sceneEl.querySelector("#densi_model");
    
    console.log(densi.animation__mouseenter);
    // densi.addEventListener('mouseenter',function(e){
    //     densi.emit("mouseenter1");
    //     console.log('触れている');
    // });
    
   // var text = document.querySelector("#text");
    // console.log(kousya);
    // zyohou.addEventListener('mouseenter', function (e) {
    //     console.log("触れている");
    //     zyohou.setAttribute('position',{x:-13,y:1,z:0});
    // // densi.setAttribute('visible',{duration:4,case:true});
     
    // });
    // zyohou.addEventListener('mouseleave',function(e){
    //     console.log("離れたら");
    //     zyohou.setAttribute('position',{x:-13,y:0,z:0});
     
    // });
    // mekatoro.addEventListener('click',function(e){
    //     window.location.href = "/yahaba_main.html?a=" + 'tetx' + "=" + '2' + "=" + '1';
    //     console.log("押している");
    // });
    // sande.addEventListener('click',function(e){
    //     window.location.href = "/vrpage/vr_main_html/yahaba_main.html?a=" + 'tetx' + "=" + '4' + "=" + '1';
    //     console.log("押している");
    // });
    // kentiku.addEventListener('click',function(e){
    //     window.location.href = "/vrpage/vr_main_html/yahaba_main.html?a=" + 'tetx' + "=" + '3' + "=" + '1';
    //     console.log("押している");
    // });
    // senkou.addEventListener('click',function(e){
    //     window.location.href = "/vrpage/vr_main_html/yahaba_main.html?a=" + 'tetx' + "=" + '6' + "=" + '1';
    //     console.log("押している");
    // });
    //senkou.getObject3D('mesh').material.opacity= 0.4;
   // senkou.setAttribute('opacity','0.4');
   
    // console.log(senkou.getObject3D('mesh'));
    

}

function aframeMutlByte() {
    console.log("okだよ");
    document.querySelectorAll('[mb-text]:empty').forEach(mb_text => {
        console.log(mb_text.dataset.text)
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

// document.querySelector('#kousya').addEventListener('click',function(e){
//     window.location.href = "/aframegame1/vr_main.html?a=" + 'tetx' + "=" + '3' + "=" + '1';
// });

// function init() {

//     sceneEl = document.querySelector("a-scene");




//     // マウス、タッチ処理を呼び出すイベントリスナーをセット
//     document.addEventListener("mousedown", onMouseDown);
//     document.addEventListener("touchstart", onMouseDown);
//     document.addEventListener("mouseup", onMouseUp);
//     document.addEventListener("touchend", onMouseUp);
//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("touchmove", onMouseMove);


// }


// function render() {

//     requestAnimationFrame(render);

// }

// function syoukai_page(text, id1, id2) {
//     var Top_yahaba_Aframe = document.getElementById('Maru');
//     window.location.href = "/aframegame1/syoukai/main_syoukai.html?a=" + text + "=" + id1 + "=" + id2;
//     this_id1 = id1;
//     this_id2 = id2;
//     getCSV();



// }

// function syoukai_hantei() {
//     var a, b;
//     var i;
//     // for(var i=0; i<=tmp.length; i++){
//     //     console.log(i);
//     // }
//     var c = result[1][2];
//     console.log(c);

//     console.log(tmp.length);



//     for (var i = 0; i <= tmp.length; i++) {
//         var str = result[i][0];
//         if (str == this_id1) {
//             console.log("一致");
//             console.log("id1" + this_id1);
//             console.log(str);
//             console.log(i);
//             a = i;
//             console.log("a=" + a);
//             break;
//         }
//     }

//     for (var j = a; j <= tmp.length; j++) {
//         console.log("a2=" + j);
//         var str2 = result[j][1];
//         if (str2 == this_id2) {
//             console.log(str2);
//             console.log(j);
//             console.log(result[j][2]);
//             bbbb = j;
//             break;
//         }

//     }

//     result[bbbb][2]
//     syoukai_text();
// }


// function syoukai_text() {
//     console.log(bbbb);
//     console.log(result[bbbb][2]);
//     document.getElementById('classroom_text').textContent = result[bbbb][2];
//     document.getElementById('classroom_text2').textContent = result[bbbb][2];

//     // var text = result[bbbb][2];
//     // var elem = document.getElementById("syoukai_text");
//     // elem.innerHTML = text;
//     // document.getElementById("syoukai_text").textContent = text;
// }

// function getCSV() {
//     var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
//     req.open("get", "main_syoukai.csv", true); // アクセスするファイルを指定
//     req.send(null); // HTTPリクエストの発行

//     // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ
//     req.onload = function () {

//         convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
//     }
// }

// // 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
// function convertCSVtoArray(str) { // 読み込んだCSVデータが文字列として渡される
//     // 最終的な二次元配列を入れるための配列
//     tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

//     // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
//     for (var i = 0; i < tmp.length; ++i) {
//         result[i] = tmp[i].split(',');
//     }

//     console.log(result[1][2]); // 300yen
//     syoukai_hantei();

// }

// function kentiku_link() {
//     window.location.href = 'syoukai/main_syoukai';
// }

// function sande_link() {
//     window.location.href = 'yahaba/sangyoudezain/mokuzaikakou.html';
// }

// function marubatu_game(a) {
//     window.location.href = '/aframegame1/MaruBatu01.html?a=' + a;
// }

// function onMouseDown(event) {
//     isMouseDown = true;
// }

// // マウスを動かした時
// function onMouseMove(event) {

// }

// // マウスを離したとき
// function onMouseUp(event) {
//     isMouseDown = false;
// }

// function getMouseX(event) {
//     if (event.type.indexOf("touch") == -1)
//         return event.clientX;
//     else
//         return event.touches[0].clientX;
// }

// function getMouseY(event) {
//     if (event.type.indexOf("touch") == -1)
//         return event.clientY;
//     else
//         return event.touches[0].clientY;
// }

