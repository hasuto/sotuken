// const objs = document.querySelectorAll('a-entity'); 

// objs.forEach((entity) => {
//     entity.addEventListener('click',function() {
//         console.log("click");
//     });
// });
var sceneEl;
// const sound01 = document.getElementById("my_sound01");


var Maru;
var Batu;
var Maru_hantei;
var Batu_hantei;
var boxColor = 1; //１:赤　→　２：青　→　３：緑　→　１：赤へもどる
var score = 0;
var cnt = 0;
var hanntei = 0;
var camera;
var cursor;

var isMouseDown = false;

var result = [];
var results = [];
var hantei_maru = [];
hantei_maru = "o";
var hantei_batu = [];
hantei_batu = "x";
var results;
var seikai;
var text;
var score_result;
var Maru = document.querySelector('#Maru');


// let element = document.getElementById('text');
// console.log(element.children[0].data-text);
// sound01.playSound();


// let changeElement = (el)=> {

//     if(el.style.display==''){
//       el.style.display='none';
//     }else{
//       el.style.display='';
//     }

//   }



window.onload = function () {
    init();
    render();
    // if (window.matchMedia('(max-width: 767px)').matches) {
    //     //スマホ処理
    //     console.log("スマホだよー");
    //     document.querySelector('#game-explanation_1').setAttribute("scale", { x: 8, y: 8, z: 8 });
    //     document.querySelector('#game-explanation_2').setAttribute("scale", { x: 8, y: 8, z: 8 });
    //     document.querySelector('#game-explanation_3').setAttribute("scale", { x: 1, y: 1, z: 1.5 });
    //     //document.querySelector('#Maru').setAttribute("scale", { x: 4, y: 4, z: 4 });
    //     document.querySelector('#Batu').setAttribute("scale", { x: 4, y: 4, z: 4 });
    //     document.querySelector('#Batu').setAttribute("position", { x: 27, y: 10, z: 0 });
    //     document.querySelector('#Maru').setAttribute("scale", { x: 4, y: 4, z: 4 });
    //     document.querySelector('#Maru').setAttribute("position", { x: -7, y: 10, z: 0 });


    //     // $(Maru).attr({
    //     //     'scale': { x: 4, y: 4, z: 4 }
    //     // });


    // } else if (window.matchMedia('(min-width:768px)').matches) {
    //     //PC処理
    //     console.log("PCだよー");
    // }

    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
        // ❶スマホのみに適用させるJavaScriptを記述
        console.log("スマホだよーーーー");
        document.querySelector('#game-explanation_1').setAttribute("scale", { x: 8, y: 8, z: 8 });
        document.querySelector('#game-explanation_2').setAttribute("scale", { x: 8, y: 8, z: 8 });
        document.querySelector('#game-explanation_3').setAttribute("scale", { x: 1, y: 1, z: 1.5 });
        document.querySelector('#mondai1').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#mondai2').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#mondai3').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#mondai4').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#mondai5').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#mondaibun1').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#mondaibun2').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#mondaibun3').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#mondaibun4').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#mondaibun5').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#mondai-back').setAttribute("scale", { x: 2, y: 1, z: 1.4 });
        document.querySelector('#batu-hantei').setAttribute("position", { x: 27, y:1, z: 0 });
        document.querySelector('#batu-hantei').setAttribute("scale", { x: 0.8, y: 0.8, z: 0.27 });
        document.querySelector('#maru-hantei').setAttribute("scale",{ x: 0.8, y: 0.8, z: 0.27 });
        document.querySelector('#maru-hantei').setAttribute("position", { x: -7.4, y:1, z: 0 });
        document.querySelector('#Batu').setAttribute("scale", { x: 4, y: 4, z: 4 });
        document.querySelector('#Batu').setAttribute("position", { x: 27, y: 10, z: 0 });
        document.querySelector('#Maru').setAttribute("scale", { x: 4, y: 4, z: 4 });
        document.querySelector('#Maru').setAttribute("position", { x: -7, y: 10, z: 0 });
    } else {
        // ❷その他PC・タブレットに適用させるJavaScriptを記述
        console.log("PCだよーーーーーーー");
    }


    var data = location.href.split("?")[1];
    text = data.split("=")[1];
    console.log(text);
    getCSV();
    getCSV2();

    var background = document.querySelector('#back-ground');
    var a = "12";
    background.setAttribute('src', "assets/" + text + ".jpeg");
    background.setAttribute('position', a);
    console.log(background.getAttribute('position'));
    console.log(background.getAttribute('src'));

};

// function proc(){
//     init();
//     render();
//     var data = location.href.split("?")[1];
//     text = data.split("=")[1];
//     console.log(text);
//     getCSV();
//     getCSV2();

//     var background = document.querySelector('#back-ground');
//     var a = "12";
//     background.setAttribute('src',"assets/" + text + ".jpeg");
//     background.setAttribute('position',a);
//     console.log(background.getAttribute('position'));
//     console.log(background.getAttribute('src'));
// }

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

//CSVファイルを読み込む関数getCSV()の定義
function getCSV() {
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "assets/" + text + ".csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行

    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function () {

        convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
    }
}

// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str) { // 読み込んだCSVデータが文字列として渡される
    // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (var i = 0; i < tmp.length; ++i) {
        result[i] = tmp[i].split(',');
    }

    console.log(result[0][1]); // 300yen
}
//CSVファイルを読み込む関数getCSV()の定義
function getCSV2() {
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "assets/hantei.csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行

    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function () {

        convertCSVtoArray2(req.responseText); // 渡されるのは読み込んだCSVデータ
    }
}

// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray2(str) { // 読み込んだCSVデータが文字列として渡される
    // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (var i = 0; i < tmp.length; ++i) {
        results[i] = tmp[i].split(',');
    }

    console.log(results[0][1]); // 300yen
}



function mondaibun1(a) {
    console.log("okだよ");
    console.log(result[a][1]);
    document.querySelectorAll('[mdbun1]:empty').forEach(mdbun1 => {
        console.log(mdbun1.dataset.text)
        mdbun1.dataset.text = result[a][1];
        const text = mdbun1.dataset.text
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
        mdbun1.innerHTML = `<a-image scale="${(width) / 10} ${height / 10} 1" src="${base64}"></a-image>`
    })
}

function mondaibun2(a) {
    console.log("okだよ");
    console.log(result[a][1]);
    document.querySelectorAll('[mdbun2]:empty').forEach(mdbun2 => {
        console.log(mdbun2.dataset.text)
        mdbun2.dataset.text = result[a][1];
        const text = mdbun2.dataset.text
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
        mdbun2.innerHTML = `<a-image scale="${(width) / 10} ${height / 10} 1" src="${base64}"></a-image>`
    })
}

function mondaibun3(a) {
    console.log("okだよ");
    console.log(result[a][1]);
    document.querySelectorAll('[mdbun3]:empty').forEach(mdbun3 => {
        console.log(mdbun3.dataset.text)
        mdbun3.dataset.text = result[a][1];
        const text = mdbun3.dataset.text
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
        mdbun3.innerHTML = `<a-image scale="${(width) / 10} ${height / 10} 1" src="${base64}"></a-image>`
    })
}

function mondaibun4(a) {
    console.log("okだよ");
    console.log(result[a][1]);
    document.querySelectorAll('[mdbun4]:empty').forEach(mdbun4 => {
        console.log(mdbun4.dataset.text)
        mdbun4.dataset.text = result[a][1];
        const text = mdbun4.dataset.text
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
        mdbun4.innerHTML = `<a-image scale="${(width) / 10} ${height / 10} 1" src="${base64}"></a-image>`
    })
}

function mondaibun5(a) {
    console.log("okだよ");
    console.log(result[a][1]);
    document.querySelectorAll('[mdbun5]:empty').forEach(mdbun5 => {
        console.log(mdbun5.dataset.text)
        mdbun5.dataset.text = result[a][1];
        const text = mdbun5.dataset.text
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
        mdbun5.innerHTML = `<a-image scale="${(width) / 10} ${height / 10} 1" src="${base64}"></a-image>`
    })
}

// function mondaibun1(){
//     console.log(mdbun.dataset.text)
//     const text = mdbun.dataset.text
//     const text_cnt = text.length
//     const width = text_cnt * 1.4
//     const height = 1.6
//     let cvs = document.createElement('canvas')
//     let ctx = cvs.getContext('2d')
//     cvs.width = width * 100
//     cvs.height = height * 100
//     ctx.fillStyle = "rgb(0, 0, 0)"
//     ctx.font = '100pt Arial'
//     ctx.fillText(text, 0, 125)

//     const base64 = cvs.toDataURL("image/png")
//     mdbun.innerHTML = `<a-image scale="${(width) / 10} ${height / 10} 1" src="${base64}"></a-image>`
// }

function init() {

    sceneEl = document.querySelector("a-scene");
    Maru = sceneEl.querySelector("#Maru");
    Batu = sceneEl.querySelector("#Batu");
    // start_back = sceneEl.querySelector('#start-back');



    // マウス、タッチ処理を呼び出すイベントリスナーをセット
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("touchstart", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchend", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onMouseMove);

    aframeMutlByte();

    Maru.addEventListener("click", onMouseClick1);
    Batu.addEventListener("click", onMouseClick2);
    // start_back.addEventListener("click",onMouseClick3);

}





function render() {

    requestAnimationFrame(render);

}

function restart() {
    var restart = document.querySelector('#restart');
    var monbun5 = document.querySelector('#mondaibun5');
    var mondai5 = document.querySelector('#mondai5');
    score_result = document.querySelector('#score');
    var scoreback = document.querySelector('#score-back');
    var seikai = document.querySelector('#seikai');
    var hazure = document.querySelector('#hazure');
    var hanteiback = document.querySelector('#hantei-back');

    console.log("押してる");
    if (restart.getAttribute('visible') == true) {
        score = 0;
        cnt = 0;
        restart.setAttribute("visible", false);
        monbun5.setAttribute("visible", false);
        mondai5.setAttribute("visible", false);
        scoreback.setAttribute('visible', false);
        hanteiback.setAttribute('visible', false);
        score_result.setAttribute("visible", false);
        seikai.setAttribute("visible", false);
        hazure.setAttribute("visible", false);
        Maru.setAttribute("visible", true);
        Batu.setAttribute("visible", true);

        console.log("リスタート");
        console.log(cnt, score);
        cnt++;
        mondai();
    }
}

//ゲームスタートボタン押したとき
function start() {
    var startbutton = document.querySelector('#start-button');
    var game_explanation_1 = document.querySelector('#game-explanation_1');
    var game_explanation_2 = document.querySelector('#game-explanation_2');
    var game_explanation_3 = document.querySelector('#game-explanation_3');
    // var startback = document.querySelector('#start-button');
    // var front_text = document.getElementById("front_text");
    // front_text.setAttribute("value", "Hello, World! \n hello ");
    // var mondaibun = document.querySelector('#mondaibun').mb_text.dataset.text;
    // console.log(mondaibun);

    console.log(result[1][2]);
    if (startbutton.getAttribute('visible') == true) {
        startbutton.setAttribute('visible', false);
        game_explanation_1.setAttribute('visible', false);
        game_explanation_2.setAttribute('visible', false);
        game_explanation_3.setAttribute('visible', false);
        // startback.setAttribute('visible',false);
        cnt++;
        mondai();
    }
    console.log(cnt);

    // if (cnt == 0) {
    //     cnt++;
    //     mondai();
    // }

}

// マウスをクリックしたとき
function onMouseClick1(event) {
    maru();

}
function onMouseClick2(event) {
    batu();

}

// function onMouseClick3(event){
//     start();
// }

function maru() {
    seikai = document.querySelector('#seikai');
    var hazure = document.querySelector('#hazure');
    var next = document.querySelector('#next-button');
    score_result = document.querySelector('#score');
    var scoreback = document.querySelector('#score-back');
    var restart = document.querySelector('#restart');
    var hanteiback = document.querySelector('#hantei-back');
    // const $score = document.getElementById("score");
    if (Maru.getAttribute('visible') == true) {
        switch (cnt) {
            case 1:
                if (Batu.getAttribute('visible') == true) {
                    if (result[cnt][2] == results[0][0]) {
                        hazure.setAttribute('visible', false);
                        seikai.setAttribute('visible', true);
                        score++;
                    } else if (result[cnt][2] == results[1][0]) {
                        seikai.setAttribute('visible', false);
                        hazure.setAttribute('visible', true);
                    }
                    console.log("score" + score);
                    hanteiback.setAttribute('visible', true);
                    next.setAttribute('visible', true);
                    Batu.setAttribute('visible', false);
                    console.log(hantei_maru);
                    console.log(result[cnt][2]);
                }
                break;
            case 2:
                // if (result[cnt][2] == results[0][0]) {
                //     hazure.setAttribute('visible', false);
                //     seikai.setAttribute('visible', true);
                // } else if (result[cnt][2] == results[1][0]) {
                //     seikai.setAttribute('visible', false);
                //     hazure.setAttribute('visible', true);
                // }
                // hanteiback.setAttribute('visible', true);
                // Batu.setAttribute('visible', false);
                // next.setAttribute('visible', true);
                // console.log(result[cnt][2]);
                if (Batu.getAttribute('visible') == true) {
                    if (result[cnt][2] == results[0][0]) {
                        hazure.setAttribute('visible', false);
                        seikai.setAttribute('visible', true);
                        score++;
                    } else if (result[cnt][2] == results[1][0]) {
                        seikai.setAttribute('visible', false);
                        hazure.setAttribute('visible', true);
                    }
                    console.log("score" + score);
                    hanteiback.setAttribute('visible', true);
                    next.setAttribute('visible', true);
                    Batu.setAttribute('visible', false);
                    console.log(hantei_maru);
                    console.log(result[cnt][2]);
                }
                break;
            case 3:
                // if (result[cnt][2] == results[0][0]) {
                //     hazure.setAttribute('visible', false);
                //     seikai.setAttribute('visible', true);
                // } else if (result[cnt][2] == results[1][0]) {
                //     seikai.setAttribute('visible', false);
                //     hazure.setAttribute('visible', true);
                // }
                // hanteiback.setAttribute('visible', true);
                // next.setAttribute('visible', true);
                // if (Batu.getAttribute('visible') == true) {
                //     score++;
                // }
                // Batu.setAttribute('visible', false);
                // console.log(result[cnt][2]);
                if (Batu.getAttribute('visible') == true) {
                    if (result[cnt][2] == results[0][0]) {
                        hazure.setAttribute('visible', false);
                        seikai.setAttribute('visible', true);
                        score++;
                    } else if (result[cnt][2] == results[1][0]) {
                        seikai.setAttribute('visible', false);
                        hazure.setAttribute('visible', true);
                    }
                    console.log("score" + score);
                    hanteiback.setAttribute('visible', true);
                    next.setAttribute('visible', true);
                    Batu.setAttribute('visible', false);
                    console.log(hantei_maru);
                    console.log(result[cnt][2]);
                }
                break;
            case 4:
                // if (result[cnt][2] == results[0][0]) {
                //     hazure.setAttribute('visible', false);
                //     seikai.setAttribute('visible', true);
                // } else if (result[cnt][2] == results[1][0]) {
                //     seikai.setAttribute('visible', false);
                //     hazure.setAttribute('visible', true);
                // }
                // hanteiback.setAttribute('visible', true);
                // Batu.setAttribute('visible', false);
                // next.setAttribute('visible', true);
                if (Batu.getAttribute('visible') == true) {
                    if (result[cnt][2] == results[0][0]) {
                        hazure.setAttribute('visible', false);
                        seikai.setAttribute('visible', true);
                        score++;
                    } else if (result[cnt][2] == results[1][0]) {
                        seikai.setAttribute('visible', false);
                        hazure.setAttribute('visible', true);
                    }
                    console.log("score" + score);
                    hanteiback.setAttribute('visible', true);
                    next.setAttribute('visible', true);
                    Batu.setAttribute('visible', false);
                    console.log(hantei_maru);
                    console.log(result[cnt][2]);
                }
                break;
            case 5:
                // if (result[cnt][2] == results[0][0]) {
                //     hazure.setAttribute('visible', false);
                //     seikai.setAttribute('visible', true);
                // } else if (result[cnt][2] == results[1][0]) {
                //     seikai.setAttribute('visible', false);
                //     hazure.setAttribute('visible', true);
                // }
                // console.log(results[0][0]);
                // hanteiback.setAttribute('visible', true);
                // if (Batu.getAttribute('visible') == true) {
                //     score++;
                // }
                // Batu.setAttribute('visible', false);
                if (Batu.getAttribute('visible') == true) {
                    if (result[cnt][2] == results[0][0]) {
                        hazure.setAttribute('visible', false);
                        seikai.setAttribute('visible', true);
                        score++;
                    } else if (result[cnt][2] == results[1][0]) {
                        seikai.setAttribute('visible', false);
                        hazure.setAttribute('visible', true);
                    }

                    hanteiback.setAttribute('visible', true);
                    Batu.setAttribute('visible', false);
                    console.log(hantei_maru);
                    console.log(result[cnt][2]);
                }
                console.log("score" + score);
                score_result.setAttribute("value", "score " + score);
                score_result.setAttribute('visible', true);
                scoreback.setAttribute('visible', true);
                restart.setAttribute('visible', true);
                break;

        }


    }
}

function batu() {
    var seikai = document.querySelector('#seikai');
    var hazure = document.querySelector('#hazure');
    var next = document.querySelector('#next-button');
    score_result = document.querySelector('#score');
    var scoreback = document.querySelector('#score-back');
    var restart = document.querySelector('#restart');
    var hanteiback = document.querySelector('#hantei-back');
    if (Batu.getAttribute('visible') == true) {
        switch (cnt) {
            case 1:
                if (Maru.getAttribute('visible') == true) {
                    if (result[cnt][2] == results[0][0]) {

                        seikai.setAttribute('visible', false);
                        hazure.setAttribute('visible', true);

                    } else if (result[cnt][2] == results[1][0]) {
                        hazure.setAttribute('visible', false);
                        seikai.setAttribute('visible', true);
                        score++;
                    }
                    console.log("score" + score);
                    hanteiback.setAttribute('visible', true);
                    next.setAttribute('visible', true);
                    Maru.setAttribute('visible', false);
                    console.log(hantei_maru);
                    console.log(result[cnt][2]);
                }
                // seikai.setAttribute('visible', false);
                // hazure.setAttribute('visible', true);
                // hanteiback.setAttribute('visible', true);
                // next.setAttribute('visible', true);
                // Maru.setAttribute('visible', false);
                break;
            case 2:
                // hazure.setAttribute('visible', false);
                // seikai.setAttribute('visible', true);
                // hanteiback.setAttribute('visible', true);
                // next.setAttribute('visible', true);
                // if (Maru.getAttribute('visible') == true) {
                //     score++;
                // }
                // Maru.setAttribute('visible', false);
                if (Maru.getAttribute('visible') == true) {
                    if (result[cnt][2] == results[0][0]) {

                        seikai.setAttribute('visible', false);
                        hazure.setAttribute('visible', true);
                    } else if (result[cnt][2] == results[1][0]) {
                        hazure.setAttribute('visible', false);
                        seikai.setAttribute('visible', true);
                        score++;
                    }
                    console.log("score" + score);
                    hanteiback.setAttribute('visible', true);
                    Maru.setAttribute('visible', false);
                    next.setAttribute('visible', true);
                    console.log(hantei_maru);
                    console.log(result[cnt][2]);
                }
                break;
            case 3:
                // seikai.setAttribute('visible', false);
                // hazure.setAttribute('visible', true);
                // hanteiback.setAttribute('visible', true);
                // next.setAttribute('visible', true);
                // Maru.setAttribute('visible', false);
                if (Maru.getAttribute('visible') == true) {
                    if (result[cnt][2] == results[0][0]) {

                        seikai.setAttribute('visible', false);
                        hazure.setAttribute('visible', true);
                    } else if (result[cnt][2] == results[1][0]) {
                        hazure.setAttribute('visible', false);
                        seikai.setAttribute('visible', true);
                        score++;
                    }
                    console.log("score" + score);
                    hanteiback.setAttribute('visible', true);
                    Maru.setAttribute('visible', false);
                    next.setAttribute('visible', true);
                    console.log(hantei_maru);
                    console.log(result[cnt][2]);
                }
                break;
            case 4:
                // hazure.setAttribute('visible', false);
                // seikai.setAttribute('visible', true);
                // hanteiback.setAttribute('visible', true);
                // next.setAttribute('visible', true);
                // if (Maru.getAttribute('visible') == true) {
                //     score++;
                // }
                // Maru.setAttribute('visible', false);
                if (Maru.getAttribute('visible') == true) {
                    if (result[cnt][2] == results[0][0]) {

                        seikai.setAttribute('visible', false);
                        hazure.setAttribute('visible', true);
                    } else if (result[cnt][2] == results[1][0]) {
                        hazure.setAttribute('visible', false);
                        seikai.setAttribute('visible', true);
                        score++;
                    }
                    console.log("score" + score);
                    hanteiback.setAttribute('visible', true);
                    Maru.setAttribute('visible', false);
                    next.setAttribute('visible', true);
                    console.log(hantei_maru);
                    console.log(result[cnt][2]);
                }
                break;
            case 5:
                // seikai.setAttribute('visible', false);
                // hazure.setAttribute('visible', true);
                // hanteiback.setAttribute('visible', true);
                // Maru.setAttribute('visible', false);
                if (Maru.getAttribute('visible') == true) {
                    if (result[cnt][2] == results[0][0]) {

                        seikai.setAttribute('visible', false);
                        hazure.setAttribute('visible', true);

                    } else if (result[cnt][2] == results[1][0]) {
                        hazure.setAttribute('visible', false);
                        seikai.setAttribute('visible', true);
                        score++;
                    }
                    console.log("score" + score);
                    hanteiback.setAttribute('visible', true);
                    Maru.setAttribute('visible', false);
                    console.log(hantei_maru);
                    console.log(result[cnt][2]);
                }
                score_result.setAttribute("value", "score " + score);
                score_result.setAttribute('visible', true);
                scoreback.setAttribute('visible', true);
                restart.setAttribute('visible', true);
                break;
        }
    }
}



function mondai() {

    var mondai1 = document.querySelector('#mondai1');
    var mondai2 = document.querySelector('#mondai2');
    var mondai3 = document.querySelector('#mondai3');
    var mondai4 = document.querySelector('#mondai4');
    var mondai5 = document.querySelector('#mondai5');
    var monbun1 = document.querySelector('#mondaibun1');
    var monbun2 = document.querySelector('#mondaibun2');
    var monbun3 = document.querySelector('#mondaibun3');
    var monbun4 = document.querySelector('#mondaibun4');
    var monbun5 = document.querySelector('#mondaibun5');
    var mondaiback = document.querySelector('#mondai-back');

    switch (cnt) {
        case 1:
            mondai1.setAttribute('visible', true);
            monbun1.setAttribute('visible', true);
            mondaiback.setAttribute('visible', true);
            console.log(cnt);
            mondaibun1(cnt);
            break;
        case 2:
            mondai1.setAttribute('visible', false);
            mondai2.setAttribute('visible', true);
            monbun1.setAttribute('visible', false);
            monbun2.setAttribute('visible', true);
            console.log(cnt);
            mondaibun2(cnt);
            break;

        case 3:
            mondai2.setAttribute('visible', false);
            mondai3.setAttribute('visible', true);
            monbun2.setAttribute('visible', false);
            monbun3.setAttribute('visible', true);
            mondaibun3(cnt);
            break;
        case 4:
            mondai3.setAttribute('visible', false);
            mondai4.setAttribute('visible', true);
            monbun3.setAttribute('visible', false);
            monbun4.setAttribute('visible', true);
            mondaibun4(cnt);
            break;
        case 5:
            mondai4.setAttribute('visible', false);
            mondai5.setAttribute('visible', true);
            monbun4.setAttribute('visible', false);
            monbun5.setAttribute('visible', true);
            mondaibun5(cnt);
            break;
    }

}

function next() {
    var next = document.querySelector('#next-button');
    var seikai = document.querySelector('#seikai');
    var hazure = document.querySelector('#hazure');
    var hanteiback = document.querySelector('#hantei-back');

    if (next.getAttribute('visible') == true) {
        hazure.setAttribute('visible', false);
        seikai.setAttribute('visible', false);
        hanteiback.setAttribute('visible', false);
        next.setAttribute('visible', false);
        Maru.setAttribute('visible', true);
        Batu.setAttribute('visible', true);
        cnt++;
        mondai();
    }
}



// マウスを押したとき
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


