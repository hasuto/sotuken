var result = [];
var text; //各科の紹介文格納用
var id1; //紹介文をcsvファイルから読み込むための、id
var id2;//紹介文をcsvファイルから読み込むための、id
var tmp;
var csv_column; //csvファイルの何行目にあるかの判定用変数
var game_button;
var sceneEl;
window.onload = function () {
    var data = location.href.split("?")[1];
    console.log(location.href.split("?")[1])
    text = data.split("=")[0];
    id1 = data.split("=")[1];
    id2 = data.split("=")[2];
    console.log(text);

    getCSV();
 
    this_id1 = id1;
    this_id2 = id2;
  
    var background = document.querySelector('#back-ground');

    background.setAttribute('src',"../vr_images/" + text + ".jpeg");
    
};

function syoukai_hantei(){
    var hantei_id1,b;
    var i;

    for(var i = 0; i<=tmp.length; i++){
        var str  = result[i][0];
        if(str == id1){
            hantei_id1 = i;
            break;
        }
    }

    for(var j = hantei_id1; j<=tmp.length; j++){
        var str2 = result[j][1];
        if(str2 == id2){
            csv_column = j;
            break;
        }
        
    }

}


function marubatu_game(){
    window.location.href = '../marubatu_game/Marubatu.html?'+text;
}




//CSVファイルを読み込む関数getCSV()の定義
function getCSV() {
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "main_syoukai.csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行

    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function () {

        convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
    }
}

// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str) { // 読み込んだCSVデータが文字列として渡される
    // 最終的な二次元配列を入れるための配列
    tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for (var i = 0; i < tmp.length; ++i) {
        result[i] = tmp[i].split(',');
    }

    syoukai_hantei();
     
}