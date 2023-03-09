
var sceneEl;

var Maru;
var Batu;

var score = 0;
var cnt = 0;
var hanntei = 0;

var cursor;

var isMouseDown = false;

var result = [];
var judgement_array = []; //〇✕ゲーム判定用配列


var judgement_array;
var correct_answer;
var text;
var score_result;
var Maru = document.querySelector('#Maru');







window.onload = function () {
    init();
    render();

    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
        // ❶スマホのみに適用させるJavaScriptを記述
    

        //PC用のカメラではなく、スマホ用のカメラに変更
        var camera_pc = document.querySelector('#pc');
        camera_pc.setAttribute('camera', 'active', false);
        var camera_phone = document.querySelector('#phone');
        camera_phone.setAttribute('camera', 'active', true);

        document.querySelector('#game-explanation_1').setAttribute("scale", { x: 8, y: 8, z: 8 });

        document.querySelector('#game-explanation_3').setAttribute("scale", { x: 1, y: 1, z: 1.5 });
        document.querySelector('#issue1').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#issue2').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#issue3').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#issue4').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#issue5').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#problem_statement1').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#problem_statement1_2').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#problem_statement1_3').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#problem_statement2').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#problem_statement2_2').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#problem_statement2_3').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#problem_statement3').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#problem_statement3_2').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#problem_statement3_3').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#problem_statement4').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#problem_statement4_2').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#problem_statement4_3').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#problem_statement5').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#problem_statement5_2').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#problem_statement5_3').setAttribute("scale", { x: 7, y: 7, z: 7 });
        document.querySelector('#issue-back').setAttribute("scale", { x: 2, y: 3.5, z: 2.3 });
        document.querySelector('#issue-back').setAttribute("position", { x: 10, y: 45, z: 0 });
        document.querySelector('#batu-hantei').setAttribute("position", { x: 27, y: 1, z: 0 });
        document.querySelector('#batu-hantei').setAttribute("scale", { x: 0.8, y: 0.8, z: 0.27 });
        document.querySelector('#maru-hantei').setAttribute("scale", { x: 0.8, y: 0.8, z: 0.27 });
        document.querySelector('#maru-hantei').setAttribute("position", { x: -7.4, y: 1, z: 0 });
        document.querySelector('#Batu').setAttribute("scale", { x: 4, y: 4, z: 4 });
        document.querySelector('#Batu').setAttribute("position", { x: 27, y: 10, z: 0 });
        document.querySelector('#Maru').setAttribute("scale", { x: 4, y: 4, z: 4 });
        document.querySelector('#Maru').setAttribute("position", { x: -7, y: 10, z: 0 });
        document.querySelector('#start-button').setAttribute("scale", { x: 3, y: 3, z: 3 });
        document.querySelector('#start-button').setAttribute("position", { x: 10, y: 10, z: 0 });
        document.querySelector('#restart').setAttribute("scale", { x: 3, y: 3, z: 3 });
        document.querySelector('#restart').setAttribute("position", { x: 10, y: 3, z: 0 });
        document.querySelector('#next-button').setAttribute("scale", { x: 3, y: 3, z: 3 });
        document.querySelector('#next-button').setAttribute("position", { x: 10, y: 17, z: 0 });
        document.querySelector('#game-explanation_3').setAttribute("scale", { x: 3, y: 2.5, z: 3.5 });
        document.querySelector('#issue-back').setAttribute("scale", { x: 2, y: 4.6, z: 3 });
        document.querySelector('#issue-back').setAttribute("position", { x: 10, y: 43, z: 0 });
    } else {
        // ❷その他PC・タブレットに適用させるJavaScriptを記述
   
    }


    var data = location.href.split("?")[1];
    text = data.split("=")[0];
    getCSV();
    getCSV2();

    var background = document.querySelector('#back-ground');
    var a = "12";
    background.setAttribute('src', "../vr_images/" + text + ".jpeg");
    background.setAttribute('position', a);

};


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
        mb_text.innerHTML = `<a-image scale="${(width) / 10} 
                            ${height / 10} 1" 
                            src="${base64}"></a-image>`
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
        judgement_array[i] = tmp[i].split(',');
    }

}

function split_problem_statement(a) {
    mondai_array = result[a][1].split('\\n');

    var anser = [];

    switch (cnt) {
        case 1:
            problem_statement1(mondai_array[0], a);
            problem_statement1_2(mondai_array[1], a);
            problem_statement1_3(mondai_array[2], a);

            break;
        case 2:
            problem_statement1(mondai_array[0], a);
            problem_statement1_2(mondai_array[1], a);
            problem_statement1_3(mondai_array[2], a);
            break;
        case 3:
            problem_statement1(mondai_array[0], a);
            problem_statement1_2(mondai_array[1], a);
            problem_statement1_3(mondai_array[2], a);
            break;
        case 4:
            problem_statement1(mondai_array[0], a);
            problem_statement1_2(mondai_array[1], a);
            problem_statement1_3(mondai_array[2], a);
            break;
        case 5:
            problem_statement1(mondai_array[0], a);
            problem_statement1_2(mondai_array[1], a);
            problem_statement1_3(mondai_array[2], a);
            break;
    }


}

function problem_statement1(mondai_text, a) {

    if (mondai_text != null) {
        var mdbun_1 = "mdbun" + a;

        document.querySelectorAll('[' + mdbun_1 + ']:empty').forEach(mdbun_1 => {
            mdbun_1.dataset.text = mondai_text;
            const text = mdbun_1.dataset.text
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
            mdbun_1.innerHTML = `<a-image whiteSpace="true" scale="${(width) / 10} ${height / 10} 1" src="${base64}"></a-image>`;
        })
    }
}

function problem_statement1_2(mondai_text, a) {
    if (mondai_text != null) {
        var mdbun_2 = "mdbun" + a + "_2";

        document.querySelectorAll('[' + mdbun_2 + ']:empty').forEach(mdbun_2 => {
            mdbun_2.dataset.text = mondai_text;
            const text = mdbun_2.dataset.text
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
            mdbun_2.innerHTML = `<a-image whiteSpace="true" scale="${(width) / 10} ${height / 10} 1" src="${base64}"></a-image>`;
        })
    }

}

function problem_statement1_3(mondai_text, a) {

    if (mondai_text != null) {
        var mdbun_3 = "mdbun" + a + "_3";

        document.querySelectorAll('[' + mdbun_3 + ']:empty').forEach(mdbun_3 => {
            mdbun_3.dataset.text = mondai_text;
            const text = mdbun_3.dataset.text
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
            mdbun_3.innerHTML = `<a-image whiteSpace="true" scale="${(width) / 10} ${height / 10} 1" src="${base64}"></a-image>`;
        })
    }

}



function init() {

    sceneEl = document.querySelector("a-scene");
    Maru = sceneEl.querySelector("#Maru");
    Batu = sceneEl.querySelector("#Batu");

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

}





function render() {

    requestAnimationFrame(render);

}

function restart() {
    var restart = document.querySelector('#restart');
    var issue1 = document.querySelector('#issue1');
    var issue2 = document.querySelector('#issue2');
    var issue3 = document.querySelector('#issue3');
    var issue4 = document.querySelector('#issue4');
    var issue5 = document.querySelector('#issue5');
    var monbun1 = document.querySelector('#problem_statement1');
    var monbun1_2 = document.querySelector('#problem_statement1_2');
    var monbun1_3 = document.querySelector('#problem_statement1_3');

    var monbun2 = document.querySelector('#problem_statement2');
    var monbun2_2 = document.querySelector('#problem_statement2_2');
    var monbun2_3 = document.querySelector('#problem_statement2_3');

    var monbun3 = document.querySelector('#problem_statement3');
    var monbun3_2 = document.querySelector('#problem_statement3_2');
    var monbun3_3 = document.querySelector('#problem_statement3_3');

    var monbun4 = document.querySelector('#problem_statement4');
    var monbun4_2 = document.querySelector('#problem_statement4_2');
    var monbun4_3 = document.querySelector('#problem_statement4_3');

    var monbun5 = document.querySelector('#problem_statement5');
    var monbun5_2 = document.querySelector('#problem_statement5_2');
    var monbun5_3 = document.querySelector('#problem_statement5_3');
    
    score_result = document.querySelector('#score');
    var scoreback = document.querySelector('#score-back');
    var correct_answer = document.querySelector('#correct_answer');
    var incorrect_answer = document.querySelector('#incorrect_answer');

    if (restart.getAttribute('visible') == true) {
        score = 0;
        cnt = 0;
        restart.setAttribute("visible", false);
        monbun1.setAttribute("visible", false);
        monbun1_2.setAttribute("visible", false);
        monbun1_3.setAttribute("visible", false);
        issue1.setAttribute("visible", false);
        monbun2.setAttribute("visible", false);
        monbun2_2.setAttribute("visible", false);
        monbun2_3.setAttribute("visible", false);
        issue2.setAttribute("visible", false);
        monbun3.setAttribute("visible", false);
        monbun3_2.setAttribute("visible", false);
        monbun3_3.setAttribute("visible", false);
        issue3.setAttribute("visible", false);
        monbun4.setAttribute("visible", false);
        monbun4_2.setAttribute("visible", false);
        monbun4_3.setAttribute("visible", false);
        issue4.setAttribute("visible", false);
        monbun5.setAttribute("visible", false);
        monbun5_2.setAttribute("visible", false);
        monbun5_3.setAttribute("visible", false);
        issue5.setAttribute("visible", false);
        scoreback.setAttribute('visible', false);
        score_result.setAttribute("visible", false);
        correct_answer.setAttribute("visible", false);
        incorrect_answer.setAttribute("visible", false);
        Maru.setAttribute("visible", true);
        Batu.setAttribute("visible", true);

        cnt++;
        issue();
    }
}

//ゲームスタートボタン押したとき
function start() {
    var startbutton = document.querySelector('#start-button');
    var game_explanation_1 = document.querySelector('#game-explanation_1');
    var game_explanation_2 = document.querySelector('#game-explanation_2');
    var game_explanation_3 = document.querySelector('#game-explanation_3');

    if (startbutton.getAttribute('visible') == true) {
        startbutton.setAttribute('visible', false);
        game_explanation_1.setAttribute('visible', false);
        game_explanation_3.setAttribute('visible', false);
        Maru.setAttribute("visible", true);
        Batu.setAttribute("visible", true);
        cnt++;
        issue();
    }

}

// マウスをクリックしたとき
function onMouseClick1(event) {
    maru();

}
function onMouseClick2(event) {
    batu();

}


function maru() {
    correct_answer = document.querySelector('#correct_answer');
    var incorrect_answer = document.querySelector('#incorrect_answer');
    var next = document.querySelector('#next-button');
    score_result = document.querySelector('#score');
    var scoreback = document.querySelector('#score-back');
    var restart = document.querySelector('#restart');
    if (Maru.getAttribute('visible') == true) {
        switch (cnt) {
            case 1:
                if (Batu.getAttribute('visible') == true) {
                    if (result[cnt][2] == judgement_array[0][0]) {
                        incorrect_answer.setAttribute('visible', false);
                        correct_answer.setAttribute('visible', true);
                        score++;
                    } else if (result[cnt][2] == judgement_array[1][0]) {
                        correct_answer.setAttribute('visible', false);
                        incorrect_answer.setAttribute('visible', true);
                    }
                    Batu.setAttribute('visible', false);
                    if(result[cnt+1][0].indexOf("問題") != -1){           
                        next.setAttribute('visible', true);
                    }else{
                        score_result.setAttribute("value", "score " + score);
                        score_result.setAttribute('visible', true);
                        scoreback.setAttribute('visible', true);
                        restart.setAttribute('visible', true);
                    }
                }
                break;
            case 2:

                if (Batu.getAttribute('visible') == true) {
                    if (result[cnt][2] == judgement_array[0][0]) {
                        incorrect_answer.setAttribute('visible', false);
                        correct_answer.setAttribute('visible', true);
                        score++;
                    } else if (result[cnt][2] == judgement_array[1][0]) {
                        correct_answer.setAttribute('visible', false);
                        incorrect_answer.setAttribute('visible', true);
                    }
                    Batu.setAttribute('visible', false);
                    if(result[cnt+1][0].indexOf("問題") != -1){           
                        next.setAttribute('visible', true);
                    }else{
                        score_result.setAttribute("value", "score " + score);
                        score_result.setAttribute('visible', true);
                        scoreback.setAttribute('visible', true);
                        restart.setAttribute('visible', true);
                    }
                }
                break;
            case 3:

                if (Batu.getAttribute('visible') == true) {
                    if (result[cnt][2] == judgement_array[0][0]) {
                        incorrect_answer.setAttribute('visible', false);
                        correct_answer.setAttribute('visible', true);
                        score++;
                    } else if (result[cnt][2] == judgement_array[1][0]) {
                        correct_answer.setAttribute('visible', false);
                        incorrect_answer.setAttribute('visible', true);
                    }
                    Batu.setAttribute('visible', false);
                    if(result[cnt+1][0].indexOf("問題") != -1){           
                        next.setAttribute('visible', true);
                    }else{
                        score_result.setAttribute("value", "score " + score);
                        score_result.setAttribute('visible', true);
                        scoreback.setAttribute('visible', true);
                        restart.setAttribute('visible', true);
                    }
                }
                break;
            case 4:

                if (Batu.getAttribute('visible') == true) {
                    if (result[cnt][2] == judgement_array[0][0]) {
                        incorrect_answer.setAttribute('visible', false);
                        correct_answer.setAttribute('visible', true);
                        score++;
                    } else if (result[cnt][2] == judgement_array[1][0]) {
                        correct_answer.setAttribute('visible', false);
                        incorrect_answer.setAttribute('visible', true);
                    }
                    Batu.setAttribute('visible', false);
                    if(result[cnt+1][0].indexOf("問題") != -1){           
                        next.setAttribute('visible', true);
                    }else{
                        score_result.setAttribute("value", "score " + score);
                        score_result.setAttribute('visible', true);
                        scoreback.setAttribute('visible', true);
                        restart.setAttribute('visible', true);
                    }
                }
                break;
            case 5:

                if (Batu.getAttribute('visible') == true) {
                    if (result[cnt][2] == judgement_array[0][0]) {
                        incorrect_answer.setAttribute('visible', false);
                        correct_answer.setAttribute('visible', true);
                        score++;
                    } else if (result[cnt][2] == judgement_array[1][0]) {
                        correct_answer.setAttribute('visible', false);
                        incorrect_answer.setAttribute('visible', true);
                    }
                    Batu.setAttribute('visible', false);
                    if(result[cnt+1][0].indexOf("問題") != -1){           
                        next.setAttribute('visible', true);
                    }else{
                        score_result.setAttribute("value", "score " + score);
                        score_result.setAttribute('visible', true);
                        scoreback.setAttribute('visible', true);
                        restart.setAttribute('visible', true);
                    }
                }
                break;

        }


    }
}

function batu() {
    var correct_answer = document.querySelector('#correct_answer');
    var incorrect_answer = document.querySelector('#incorrect_answer');
    var next = document.querySelector('#next-button');
    score_result = document.querySelector('#score');
    var scoreback = document.querySelector('#score-back');
    var restart = document.querySelector('#restart');
    if (Batu.getAttribute('visible') == true) {
        switch (cnt) {
            case 1:
                if (Maru.getAttribute('visible') == true) {
                    if (result[cnt][2] == judgement_array[0][0]) {

                        correct_answer.setAttribute('visible', false);
                        incorrect_answer.setAttribute('visible', true);

                    } else if (result[cnt][2] == judgement_array[1][0]) {
                        incorrect_answer.setAttribute('visible', false);
                        correct_answer.setAttribute('visible', true);
                        score++;
                    }
                    Maru.setAttribute('visible', false);
                    if(result[cnt+1][0].indexOf("問題") != -1){           
                        next.setAttribute('visible', true);
                    }else{
                        score_result.setAttribute("value", "score " + score);
                        score_result.setAttribute('visible', true);
                        scoreback.setAttribute('visible', true);
                        restart.setAttribute('visible', true);
                    }
                }

                break;
            case 2:

                if (Maru.getAttribute('visible') == true) {
                    if (result[cnt][2] == judgement_array[0][0]) {

                        correct_answer.setAttribute('visible', false);
                        incorrect_answer.setAttribute('visible', true);
                    } else if (result[cnt][2] == judgement_array[1][0]) {
                        incorrect_answer.setAttribute('visible', false);
                        correct_answer.setAttribute('visible', true);
                        score++;
                    }
                    Maru.setAttribute('visible', false);
                    if(result[cnt+1][0].indexOf("問題") != -1){           
                        next.setAttribute('visible', true);
                    }else{
                        score_result.setAttribute("value", "score " + score);
                        score_result.setAttribute('visible', true);
                        scoreback.setAttribute('visible', true);
                        restart.setAttribute('visible', true);
                    }
                }
                break;
            case 3:

                if (Maru.getAttribute('visible') == true) {
                    if (result[cnt][2] == judgement_array[0][0]) {

                        correct_answer.setAttribute('visible', false);
                        incorrect_answer.setAttribute('visible', true);
                    } else if (result[cnt][2] == judgement_array[1][0]) {
                        incorrect_answer.setAttribute('visible', false);
                        correct_answer.setAttribute('visible', true);
                        score++;
                    }
                    Maru.setAttribute('visible', false);
                    if(result[cnt+1][0].indexOf("問題") != -1){           
                        next.setAttribute('visible', true);
                    }else{
                        score_result.setAttribute("value", "score " + score);
                        score_result.setAttribute('visible', true);
                        scoreback.setAttribute('visible', true);
                        restart.setAttribute('visible', true);
                    }
 
                }
                break;
            case 4:

                if (Maru.getAttribute('visible') == true) {
                    if (result[cnt][2] == judgement_array[0][0]) {

                        correct_answer.setAttribute('visible', false);
                        incorrect_answer.setAttribute('visible', true);
                    } else if (result[cnt][2] == judgement_array[1][0]) {
                        incorrect_answer.setAttribute('visible', false);
                        correct_answer.setAttribute('visible', true);
                        score++;
                    }
                    Maru.setAttribute('visible', false);
                    if(result[cnt+1][0].indexOf("問題") != -1){           
                        next.setAttribute('visible', true);
                    }else{
                        score_result.setAttribute("value", "score " + score);
                        score_result.setAttribute('visible', true);
                        scoreback.setAttribute('visible', true);
                        restart.setAttribute('visible', true);
                    }
                }
                break;
            case 5:

                if (Maru.getAttribute('visible') == true) {
                    if (result[cnt][2] == judgement_array[0][0]) {

                        correct_answer.setAttribute('visible', false);
                        incorrect_answer.setAttribute('visible', true);

                    } else if (result[cnt][2] == judgement_array[1][0]) {
                        incorrect_answer.setAttribute('visible', false);
                        correct_answer.setAttribute('visible', true);
                        score++;
                    }
                    Maru.setAttribute('visible', false);
                    if(result[cnt+1][0].indexOf("問題") != -1){           
                        next.setAttribute('visible', true);
                    }else{
                        score_result.setAttribute("value", "score " + score);
                        score_result.setAttribute('visible', true);
                        scoreback.setAttribute('visible', true);
                        restart.setAttribute('visible', true);
                    }
                }
               
                break;
        }
    }
}



function issue() {

    var issue1 = document.querySelector('#issue1');
    var issue2 = document.querySelector('#issue2');
    var issue3 = document.querySelector('#issue3');
    var issue4 = document.querySelector('#issue4');
    var issue5 = document.querySelector('#issue5');
    var monbun1 = document.querySelector('#problem_statement1');
    var monbun1_2 = document.querySelector('#problem_statement1_2');
    var monbun1_3 = document.querySelector('#problem_statement1_3');

    var monbun2 = document.querySelector('#problem_statement2');
    var monbun2_2 = document.querySelector('#problem_statement2_2');
    var monbun2_3 = document.querySelector('#problem_statement2_3');

    var monbun3 = document.querySelector('#problem_statement3');
    var monbun3_2 = document.querySelector('#problem_statement3_2');
    var monbun3_3 = document.querySelector('#problem_statement3_3');

    var monbun4 = document.querySelector('#problem_statement4');
    var monbun4_2 = document.querySelector('#problem_statement4_2');
    var monbun4_3 = document.querySelector('#problem_statement4_3');

    var monbun5 = document.querySelector('#problem_statement5');
    var monbun5_2 = document.querySelector('#problem_statement5_2');
    var monbun5_3 = document.querySelector('#problem_statement5_3');
    var issueback = document.querySelector('#issue-back');

    switch (cnt) {
        case 1:
            if(result[cnt][0] != null){
            issue1.setAttribute('visible', true);
            issueback.setAttribute('visible', true);
            monbun1.setAttribute('visible', true);
            monbun1_2.setAttribute('visible', true);
            monbun1_3.setAttribute('visible', true);
            split_problem_statement(cnt);
            }
            break;
        case 2:
            if(result[cnt][0] != null){
            issue1.setAttribute('visible', false);
            issue2.setAttribute('visible', true);
            monbun2.setAttribute('visible', true);
            monbun2_2.setAttribute('visible', true);
            monbun2_3.setAttribute('visible', true);
            monbun1.setAttribute('visible', false);
            monbun1_2.setAttribute('visible', false);
            monbun1_3.setAttribute('visible', false);
            split_problem_statement(cnt);
            }
            break;

        case 3:
            if(result[cnt][0] !== null){
            issue2.setAttribute('visible', false);
            issue3.setAttribute('visible', true);
            monbun3.setAttribute('visible', true);
            monbun3_2.setAttribute('visible', true);
            monbun3_3.setAttribute('visible', true);
            monbun2.setAttribute('visible', false);
            monbun2_2.setAttribute('visible', false);
            monbun2_3.setAttribute('visible', false);
            split_problem_statement(cnt);
            }
            break;
        case 4:
            if(result[cnt][0] !== null){
            issue3.setAttribute('visible', false);
            issue4.setAttribute('visible', true);
            monbun4.setAttribute('visible', true);
            monbun4_2.setAttribute('visible', true);
            monbun4_3.setAttribute('visible', true);
            monbun3.setAttribute('visible', false);
            monbun3_2.setAttribute('visible', false);
            monbun3_3.setAttribute('visible', false);
            split_problem_statement(cnt);
            }
            break;
        case 5:
            if(result[cnt][0] !== null){
            issue4.setAttribute('visible', false);
            issue5.setAttribute('visible', true);
            monbun5.setAttribute('visible', true);
            monbun5_2.setAttribute('visible', true);
            monbun5_3.setAttribute('visible', true);
            monbun4.setAttribute('visible', false);
            monbun4_2.setAttribute('visible', false);
            monbun4_3.setAttribute('visible', false);
            split_problem_statement(cnt);
            }
            break;
    }

}

function next() {
    var next = document.querySelector('#next-button');
    var correct_answer = document.querySelector('#correct_answer');
    var incorrect_answer = document.querySelector('#incorrect_answer');

    if (next.getAttribute('visible') == true) {
        incorrect_answer.setAttribute('visible', false);
        correct_answer.setAttribute('visible', false);
        next.setAttribute('visible', false);
        Maru.setAttribute('visible', true);
        Batu.setAttribute('visible', true);
        cnt++;
        issue();
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

