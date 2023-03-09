var result = [];
var csv_column;
var reset_txt;
var this_text; //各科の紹介文格納用
var this_id1; //紹介文をcsvファイルから読み込むための、id
var this_id2;//紹介文をcsvファイルから読み込むための、id
var Top_mizusawa_Aframe = document.getElementById('main_mizusawa_aframe');
var text;
var id1;
var id2;
var game_hantei;
var setumei_text = document.getElementById('setumei_text');
const back_bgm = document.querySelector("#marubatu_bgm");
var syokai_bgm;
var back_hantei;

var mizusawa_list_resu = {
    fontSize: "2em",
    width: "300px"
}
document.getElementById('right_button').style.visibility = 'hidden';
document.getElementById('left_button').style.visibility = 'hidden';
$('#back_button').hide();
window.onload = function () {

    var data = location.href.split("?")[1];
    // text = data.split("=")[0];
    id1 = data.split("=")[0];
    id2 = data.split("=")[1];
    game_hantei = data.split("=")[2];
    getCSV();
    var mizusawa_list = document.getElementById('mizusawa_list');
    var list_eles = mizusawa_list.getElementsByTagName('input');

    $(".mizusawa_list").find('ul').append('<li id="m_campus"><a>水沢校へ戻る</a></li>');

    $(document).on('click', '#m_campus', function () {
        window.location.href = "../vr_top_html/vr_top.html?m";
    });

    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
        // ❶スマホのみに適用させるJavaScriptを記述
        $('#game_button').addClass('res');
        $('#classroom_text').addClass('res');
        $('.mizusawa_list').find('p').addClass('res');

        $('.label_seisan').click(function () {
            if ($('#seisan').prop('checked') == true) {
                $(".label_seisan").removeClass("hover");
            } else {
                $(".label_seisan").addClass("hover");
            }
        });

        $('.label_denki').click(function () {
            if ($('#denki').prop('checked') == true) {
                $(".label_denki").removeClass("hover");
            } else {
                $(".label_denki").addClass("hover");
            }
        });


        $('.label_setubi').click(function () {
            if ($('#setubi').prop('checked') == true) {
                $(".label_setubi").removeClass("hover");
            } else {
                $(".label_setubi").addClass("hover");
            }
        });

        $('.label_honkan').click(function () {
            if ($('#honkan_m').prop('checked') == true) {
                $(".label_honkan_m").removeClass("hover");
            } else {
                $(".label_honkan_m").addClass("hover");
            }
        });

        $(".navbar-brand").addClass("res");
        $(".navbar-nav").addClass("res");
        $(".nav-item").addClass("res");
        $(".nav-link").addClass("res");
        $(".btn-play").addClass("res");
        $(".setumei_text").addClass("res");
        $(".mizusawa_list").find('a').addClass("res");
        $("#back_button").addClass("res");
        $("#mizusawa_list").find('li').addClass("res");
        $(".setumei_button").addClass("res");
        $(".setumei_icon").addClass("res");
        $(".batu_icon").addClass("res");
        $('.bgm_setumei').addClass("fadein");

    } else {
        // ❷その他PC・タブレットに適用させるJavaScriptを記述
        $('#seisan_list_all').hover(function () {
            document.getElementById('seisan').checked = true;
            $(".label_seisan").addClass("hover");
        },
            function () {
                document.getElementById('seisan').checked = false;
                $(".label_seisan").removeClass("hover");
            });


        $('#denki_list_all').hover(function () {
            document.getElementById('denki').checked = true;
            $(".label_denki").addClass("hover");
        },
            function () {
                document.getElementById('denki').checked = false;
                $(".label_denki").removeClass("hover");
            });

        $('#setubi_list_all').hover(function () {
            document.getElementById('setubi').checked = true;
            $(".label_setubi").addClass("hover");
        },
            function () {
                document.getElementById('setubi').checked = false;
                $(".label_setubi").removeClass("hover");
            });

        $('#honkan_m_list_all').hover(function () {
            document.getElementById('honkan_m').checked = true;
            $(".label_honkan_m").addClass("hover");
        },
            function () {
                document.getElementById('honkan_m').checked = false;
                $(".label_honkan_m").removeClass("hover");
            });
    }


}


// <audio>
const btn = document.querySelector(".btn-play");   // <button>

btn.addEventListener("click", () => {


    // pausedがtrue=>停止, false=>再生中
    if (game_hantei == "game") {
        if (!back_bgm.paused) {
            btn.innerHTML = '<img src="aseets/volume_on.png">';  // 「再生ボタン」に切り替え
            back_bgm.pause();
        } else {
            btn.innerHTML = '<img src="aseets/volume_off.png">';  // 「一時停止ボタン」に切り替え
            back_bgm.play();
        }
    } else {
        if (!syokai_bgm.paused) {
            btn.innerHTML = '<img src="aseets/volume_on.png">';  // 「再生ボタン」に切り替え
            syokai_bgm.pause();
            back_bgm.pause();
        }
        else {
            btn.innerHTML = '<img src="aseets/volume_off.png">';  // 「一時停止ボタン」に切り替え
            syokai_bgm.play();
            back_bgm.play();
        }

    }

});

/**
 * [event] 再生終了時に実行
 */
back_bgm.addEventListener("ended", () => {
    back_bgm.currentTime = 0;  // 再生位置を先頭に移動(こいつはなくても大丈夫です)
    btn.innerHTML = '<img src="ボリュームアイコン　3.png">';  // 「再生ボタン」に変更
});




$(function () {
    var video1 = document.getElementById('modal_top_video');
    var video2 = document.getElementById('modal_tutorial_video');
    var video3 = document.getElementById('modal_marubatu_video');
    var video4 = document.getElementById('modal_syoukai_video');

    /*使い方*/
    $('#openModal').click(function () {
        $('#modalArea').fadeIn();
        $('#modal_marubatu_video')[0].play();
    });


    $(function () {
        $(".tutorial-step1").click(function () {
            if ($(this).hasClass(".select")) {
                //何もしない
            } else {
                $(".tutorial-step1").addClass("select");
                $(".tutorial-step2.select").removeClass("select");

                $('#modalArea2').fadeOut();
                $('#modalArea').fadeIn();
            }
        });
        $(".tutorial-step2").click(function () {
            if ($(this).hasClass(".select")) {
                //何もしない
            } else {
                $(".tutorial-step2").addClass("select");
                $(".tutorial-step1.select").removeClass("select");

                $('#modalArea').fadeOut();
                $('#modalArea2').fadeIn();
            }
        });
    });




    $('#switchbtn , #modalBg1').click(function () {
        $(".tutorial-step2").addClass("select");
        $(".tutorial-step1.select").removeClass("select");
        $('#modal_marubatu_video')[0].pause();
        video3.currentTime = 0;
        $('#modalArea').fadeOut();
        $('#modalArea2').fadeIn();
        $('#modal_syoukai_video')[0].play();
    });
    $('#closebtn , #modalBg2').click(function () {
        $(".tutorial-step1").addClass("select");
        $(".tutorial-step2.select").removeClass("select");
        $('#modalArea2').fadeOut();
        $('#modal_syoukai_video')[0].pause();
        video4.currentTime = 0;
    });
    /*---------*/

    /*更新履歴*/
    $('#update-Modal').click(function () {
        $('#update-modalArea').fadeIn();
    });
    $('#closeModal , #update-modalBg').click(function () {
        $('#update-modalArea').fadeOut();
    });
    $('#closebtn , #update-modalBg').click(function () {
        $('#update-modalArea').fadeOut();
    });
    /*---------*/
});


function iframe_load() {
    var doc = Top_mizusawa_Aframe.contentDocument || Top_mizusawa_Aframe.contentWindow.document;
    document.getElementById('mask_all').classList.remove("roder");
    //iframeの全要素が読み込まれたら処理
    $("#main_mizusawa_aframe").contents().find(doc.querySelector('a-scene')).on("loaded", function (e) {
        if (document.getElementById('mask_all').classList.contains("roder")) {

        } else {





            if (Top_mizusawa_Aframe.getAttribute('src').indexOf('Marubatu.html') != -1) {
                document.getElementById('left_button').classList.remove("fadein");
                document.getElementById('right_button').classList.remove("fadein");
                $('.text_parent').removeClass("fadein");
                document.getElementById('right_button').style.visibility = 'hidden';
                document.getElementById('left_button').style.visibility = 'hidden';
                $('.setumei').hide();
                $('#mizusawa_list').hide();
                $('#game_button').hide();
                $('#back_button').show();
                window.setTimeout(function () {
                    document.getElementById('mask_all').classList.add("roder");
                    back_bgm.play();
                    if(back_hantei){
                        $('.bgm_setumei').addClass("fadein");
                       }
                }, 3000);

            } else {
                document.getElementById('mask_all').classList.add("roder");
                window.setTimeout(function () {
                    document.getElementById('classroom_text').classList.add("scrollin");
                    $('.text_parent').addClass("fadein");
                    document.getElementById('left_button').classList.add("fadein");
                    document.getElementById('right_button').classList.add("fadein");
                    document.getElementById('right_button').style.visibility = 'visible';
                    document.getElementById('left_button').style.visibility = 'visible';
                    back_bgm.volume = 0.05;
                    back_bgm.play();
                    syokai_bgm.play();
                    syokai_bgm.loop = true;
                    if(back_hantei){
                        $('.bgm_setumei').addClass("fadein");
                       }
                    button_visi();
                }, 500);
            }




        }

    });
}



function list_visi() {
    if (Number(this_id1) == 9) {
        document.getElementById('seisan_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("seisan");
        document.getElementById('right_button').classList.add("seisan");
        $('#game_button').addClass('seisan');
        $('#back_button').addClass('seisan');
    } else if (Number(this_id1) == 10) {
        document.getElementById('denki_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("denki");
        document.getElementById('right_button').classList.add("denki");
        $('#game_button').addClass('denki');
        $('#back_button').addClass('denki');
    } else if (Number(this_id1) == 11) {
        document.getElementById('setubi_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("setubi");
        document.getElementById('right_button').classList.add("setubi");
        $('#game_button').addClass('setubi');
        $('#back_button').addClass('setubi');
    } else if (Number(this_id1) == 12) {
        document.getElementById('honkan_m_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("honkan");
        document.getElementById('right_button').classList.add("honkan");
        $('#game_button').addClass('honkan');
        $('#back_button').addClass('honkan');
    }
}

//左右のボタン表示の処理
function button_visi() {

    if (document.getElementById('mask_all').classList.contains("roder")) {
        document.getElementById('right_button').style.visibility = 'visible';
        document.getElementById('left_button').style.visibility = 'visible';
        document.getElementById('right_button').classList.add("fadein");
        document.getElementById('left_button').classList.add("fadein");
    } else {
        document.getElementById('right_button').style.visibility = 'hidden';
        document.getElementById('left_button').style.visibility = 'hidden';
        document.getElementById('right_button').classList.remove("fadein");
        document.getElementById('left_button').classList.remove("fadein");
    }
}



document.getElementById('game_button').addEventListener('click', function (e) {
    window.location.href = "../vr_main_html/mizusawa_main.html?"  + id1 + "=" + id2 + "=" + "game";

});








$('#back_button').click(function () {
    window.location.href = "../vr_main_html/mizusawa_main.html?"  + id1 + "=" + id2;
})

$('#setumei_button').click(function () {
    $(".setumei_text").toggleClass("fadein");
    $("#batu_icon").toggleClass("fadein");
    $("#setumei_icon").toggleClass("fadein");

})
//　for文


document.getElementById('left_button').addEventListener('click', function (e) {

    if (document.getElementById('left_button').style.visibility == 'visible') {
        var leftbtn_cnt = 0;
        switch (Number(this_id2)) {
            case 1:
                for (i = 0; i < 10; i++) {
                    if (result[Number(csv_column) + i][0] == this_id1) {
                        leftbtn_cnt++;
                    } else {
                        break;
                    }
                }
                syoukai_page(Number(this_id1), Number(this_id2) + (leftbtn_cnt - 1));
                reset_txt = result[csv_column][3];
                break;

            case 2:
                syoukai_page(Number(this_id1), Number(this_id2) - 1);
                break;
            case 3:
                syoukai_page(Number(this_id1), Number(this_id2) - 1);
                break;
            case 4:
                syoukai_page(Number(this_id1), Number(this_id2) - 1);
            
                break;
            case 5:
                syoukai_page(Number(this_id1), Number(this_id2) - 1);
            case 6:
                syoukai_page(Number(this_id1), Number(this_id2) - 1);

                break;
        }

    }

});

document.getElementById('right_button').addEventListener('click', function (e) {
    if (document.getElementById('right_button').style.visibility == 'visible') {

        switch (Number(this_id2)) {
            case 1:

                if (result[Number(csv_column) + 1][0] == Number(this_id1)) {

                    syoukai_page(Number(this_id1), Number(this_id2) + 1);

                } else {
                    syoukai_page(Number(this_id1), 1);
                }
                break;

            case 2:
                if (result[Number(csv_column) + 1][0] == Number(this_id1)) {
                    syoukai_page(Number(this_id1), Number(this_id2) + 1);
                
                } else {
                    syoukai_page(Number(this_id1), 1);
  
                }
                break;
            case 3:
                if (result[Number(csv_column) + 1][0] == Number(this_id1)) {
                    syoukai_page(Number(this_id1), Number(this_id2) + 1);
 
                } else {
                    syoukai_page(Number(this_id1), 1);

                }


                break;
            case 4:

                if (result[Number(csv_column) + 1][0] == Number(this_id1)) {
                    syoukai_page(Number(this_id1), Number(this_id2) + 1);
      
                } else {
                    syoukai_page(Number(this_id1), 1);

                }

                break;
            case 5:
                if (result[Number(csv_column) + 1][0] == Number(this_id1)) {
                    syoukai_page(Number(this_id1), Number(this_id2) + 1);
      
                } else {
                    syoukai_page(Number(this_id1), 1);

                }

                break;
            case 6:
                if (result[Number(csv_column) + 1][0] == Number(this_id1)) {
                    syoukai_page(Number(this_id1), Number(this_id2) + 1);
               
                } else {
                    syoukai_page(Number(this_id1), 1);

                }

                break;
        }
    }

});

document.getElementById("y_campus").addEventListener('click', function (e) {
    window.location.href = "../vr_top_html/vr_top.html?y";
});
document.getElementById("m_campus").addEventListener('click', function (e) {
    window.location.href = "../vr_top_html/vr_top.html?m";
});
function getCSV() {
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "aseets/main_syoukai.csv", true); // アクセスするファイルを指定
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

    start(id1, id2);

}

function start(id1, id2) {
    this_id1 = id1;
    this_id2 = id2;
    syoukai_hantei();
    document.getElementById('mask_all').classList.remove("roder");
    document.getElementById('classroom_text').classList.remove("scrollin");
    button_visi();
    list_visi();


    //リストかオブジェクトから、飛んだ時にどの科にいるか指定
    switch (Number(this_id1)) {
        case 9:
            reset_txt = 'seisan_cad';
            break;

        case 10:
            reset_txt = 'denki_maikon';
            break;

        case 11:
            reset_txt = 'setubi_zisyu';
            break;

        case 12:
            reset_txt = 'mizusawa_koudou';
            break;

    }

}

function syoukai_page(id1, id2) {

    //元々はsyoukai_pageの引数から判定していた。変更後はgetCSV関数にて判定。
    window.location.href = "../vr_main_html/mizusawa_main.html?"  + id1 + "=" + id2;
    this_id1 = id1;
    this_id2 = id2;
    syoukai_hantei();
    document.getElementById('mask_all').classList.remove("roder");
    document.getElementById('classroom_text').classList.remove("scrollin");
    button_visi();


    //リストかオブジェクトから、飛んだ時にどの科にいるか指定
    switch (Number(this_id1)) {
        case 9:
            reset_txt = 'seisan_cad';
            break;

        case 10:
            reset_txt = 'denki_maikon';
            break;

        case 11:
            reset_txt = 'setubi_zisyu';
            break;

        case 12:
            reset_txt = 'mizusawa_koudou';
            break;

    }

   
}

function syoukai_hantei() {
    var hantei_id1;
    var i;

    //tmp.lengthは読み込んだcsvファイルの行数の格納変数

    for (var i = 0; i <= tmp.length; i++) {
        var str = result[i][0];
        if (str == this_id1) {
            hantei_id1 = i;
            break;
        }
    }

    for (var j = hantei_id1; j <= tmp.length; j++) {
        var str2 = result[j][1];
        if (str2 == this_id2) {
            csv_column = j;
            break;
        }

    }

    //サイト〇×ゲーム判定
    if (game_hantei == "game") {
        Top_mizusawa_Aframe.src = '../marubatu_game/Marubatu.html?' + result[csv_column][3];
        $('.modal_syoukai_body').hide();
    } else {
        Top_mizusawa_Aframe.src = "../vr_main_syoukai_aframe/main_syoukai.html?" + result[csv_column][3] + "=" + this_id1 + "=" + this_id2;
        $('.modal_marubatu_body').hide();
        syokai_bgm = new Audio('aseets/' + result[csv_column][3] + '.mp3');
    }





    syoukai_text();
}


function syoukai_text() {
    var room_text = result[csv_column][2].split('\\n')
    document.getElementById('classroom_text').innerText = room_text[0] + "\n" + room_text[1];
    setumei_text.textContent = result[csv_column][4];

}

