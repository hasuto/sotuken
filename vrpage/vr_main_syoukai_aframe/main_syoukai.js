var result = [];
var text; //各科の紹介文格納用
var id1; //紹介文をcsvファイルから読み込むための、id
var id2;//紹介文をcsvファイルから読み込むための、id
var tmp;
var csv_column; //csvファイルの何行目にあるかの判定用変数
var game_button;
var sceneEl;
window.onload = function () {
    // document.querySelector('a-scene').addEventListener('loaded', function () {
    //     console.log("コンプリート");
    // });
    console.log(location.href);
    var data = location.href.split("?")[1];
    text = data.split("=")[1];
    id1 = data.split("=")[2];
    id2 = data.split("=")[3];

    getCSV();
 
    this_id1 = id1;
    this_id2 = id2;
    console.log(this_id1);
    console.log(this_id2);


    // syoukai_hantei();
    
    var background = document.querySelector('#back-ground');
    //var audio = document.querySelector('#audio01');
    background.setAttribute('src',"images/" + text + ".jpeg");
    //soundsフォルダーに各科の教室の名前をつけたmp3ファイルを作って、下のコメント外せば完成
    //audio.setAttribute('src',"sounds/" + text + ".mp3");
    // audio.setAttribute('src',"../sounds/sample.mp3");

    
    
};

function syoukai_hantei(){
    var hantei_id1,b;
    var i;
    // for(var i=0; i<=tmp.length; i++){
    //     console.log(i);
    // }
   

    // console.log(tmp.length);



    for(var i = 0; i<=tmp.length; i++){
        var str  = result[i][0];
        if(str == id1){
            console.log("一致");
            console.log("id1"+id1);
            console.log(str);
            console.log(i);
            hantei_id1 = i;
            break;
        }
    }

    for(var j = hantei_id1; j<=tmp.length; j++){
        console.log("a2="+j);
        var str2 = result[j][1];
        if(str2 == id2){
            console.log(str2);
            console.log(j);
            console.log(result[j][2]);
            csv_column = j;
            break;
        }
        
    }

}


function marubatu_game(){
    alert(text);
    window.location.href = '../marubatu_game/MaruBatu01.html?a='+text;
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

    console.log(result[1][2]); // 300yen
    syoukai_hantei();
     
}