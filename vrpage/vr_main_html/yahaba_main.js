var result = [];
var csv_column;
var reset_txt;
var this_text; //各科の紹介文格納用
var this_id1; //紹介文をcsvファイルから読み込むための、id
var this_id2;//紹介文をcsvファイルから読み込むための、id
var Top_yahaba_Aframe = document.getElementById('main_yahaba_aframe');
var text;
var id1;
var id2;
var game_hantei;
var setumei_text = document.getElementById('setumei_text');
const back_bgm = document.querySelector("#marubatu_bgm");
var syokai_bgm;
var bgm_count = 0;
var syoukai_bgm = document.querySelector('#syoukai_page_bgm');
var syoukai_bgm_2 = document.getElementById('syoukai_bgm_2');
var back_hantei;
var yahaba_list_resu = {
    fontSize: "2em",
    width: "300px"
}
document.getElementById('right_button').style.visibility = 'hidden';
document.getElementById('left_button').style.visibility = 'hidden';
$('#back_button').hide();
window.onload = function () {

    var data = location.href.split("?")[1];
    text = data.split("=")[1];
    id1 = data.split("=")[2];
    id2 = data.split("=")[3];
    game_hantei = data.split("=")[4];
    getCSV();

    var yahaba_list = document.getElementById('yahaba_list');
    var list_eles = yahaba_list.getElementsByTagName('input');

    $(".yahaba_list").find('ul').append('<li id="y_campus"><a>矢巾校へ戻る</a></li>');

    $(document).on('click', '#y_campus', function () {
        window.location.href = "../vr_top_html/vr_top.html?y";
    });

    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0 || navigator.userAgent.indexOf('') > 0) {
        // ❶スマホのみに適用させるJavaScriptを記述
        $('#game_button').addClass('res');
        $('#classroom_text').addClass('res');
        $('.yahaba_list').find('p').addClass('res');

        $('.label_meka').click(function () {
            if ($('#mekatoro2').prop('checked') == true) {
                $(".label_meka").removeClass("hover");
            } else {
                $(".label_meka").addClass("hover");
            }
        });

        $('.label_densi').click(function () {
            if ($('#densi2').prop('checked') == true) {
                $(".label_densi").removeClass("hover");
            } else {
                $(".label_densi").addClass("hover");
            }
        });

        $('.label_sande').click(function () {
            if ($('#sande2').prop('checked') == true) {
                $(".label_sande").removeClass("hover");
            } else {
                $(".label_sande").addClass("hover");
            }
        });

        $('.label_kentiku').click(function () {
            if ($('#kentiku2').prop('checked') == true) {
                $(".label_kentiku").removeClass("hover");
            } else {
                $(".label_kentiku").addClass("hover");
            }
        });

        $('.label_zyohou').click(function () {
            if ($('#zyohou2').prop('checked') == true) {
                $(".label_zyohou").removeClass("hover");
            } else {
                $(".label_zyohou").addClass("hover");
            }
        });

        $('.label_senkou').click(function () {
            if ($('#senkou2').prop('checked') == true) {
                $(".label_senkou").removeClass("hover");
            } else {
                $(".label_senkou").addClass("hover");
            }
        });

        $('.label_honkan').click(function () {
            if ($('#honkan2').prop('checked') == true) {
                $(".label_honkan").removeClass("hover");
            } else {
                $(".label_honkan").addClass("hover");
            }
        });

        $('.label_ryou').click(function () {
            if ($('#ryou').prop('checked') == true) {
                $(".label_ryou").removeClass("hover");
            } else {
                $(".label_ryou").addClass("hover");
            }
        });

        $(".navbar-brand").addClass("res");
        $(".navbar-nav").addClass("res");
        $(".nav-item").addClass("res");
        $(".nav-link").addClass("res");
        $(".btn-play").addClass("res");
        $(".btn-play").find('img').addClass("res");
        $(".setumei_text").addClass("res");
        $(".yahaba_list").find('a').addClass("res");
        $("#back_button").addClass("res");
        $("#yahaba_list").find('li').addClass("res");
        $(".setumei_button").addClass("res");
        $(".setumei_icon").addClass("res");
        $(".batu_icon").addClass("res");
        $('.bgm_setumei').addClass("res");
        btn.addEventListener("click", () => {


            // pausedがtrue=>停止, false=>再生中
            if (game_hantei == "game") {
                if (!back_bgm.paused) {
                    btn.innerHTML = '<img class="res" src="aseets/volume_off.png">';  // 「再生ボタン」に切り替え
                    console.log("ストップ")
                    back_bgm.pause();
                } else {
                    btn.innerHTML = '<img class="res" src="aseets/volume_on.png">';  // 「一時停止ボタン」に切り替え
                    console.log("スタート ")
                    back_bgm.play();
                }
            } else {
                if (!syokai_bgm.paused) {
                    btn.innerHTML = '<img class="res" src="aseets/volume_off.png">';  // 「再生ボタン」に切り替え
                    console.log("ストップ")
                    syokai_bgm.pause();
                    back_bgm.pause();
                }
                else {
                    btn.innerHTML = '<img class="res" src="aseets/volume_on.png">';  // 「一時停止ボタン」に切り替え
                    console.log("スタート ")
                    syokai_bgm.play();
                    back_bgm.play();
                }
        
            }
        
        });

        console.log($('.yahaba_list').find('label'));


        console.log("スマホだよーーーー");

    } else {
        // ❷その他PC・タブレットに適用させるJavaScriptを記述
        $('#mekatoro_list_all').hover(function () {
            document.getElementById('mekatoro2').checked = true;
            $(".label_meka").addClass("hover");
        },
            function () {
                document.getElementById('mekatoro2').checked = false;
                $(".label_meka").removeClass("hover");
            });


        $('#densi_list_all').hover(function () {
            document.getElementById('densi2').checked = true;
            $(".label_densi").addClass("hover");
        },
            function () {
                document.getElementById('densi2').checked = false;
                $(".label_densi").removeClass("hover");
            });

        $('#kentiku_list_all').hover(function () {
            document.getElementById('kentiku2').checked = true;
            $(".label_kentiku").addClass("hover");
        },
            function () {
                document.getElementById('kentiku2').checked = false;
                $(".label_kentiku").removeClass("hover");
            });

        $('#sande_list_all').hover(function () {
            document.getElementById('sande2').checked = true;
            $(".label_sande").addClass("hover");
        },
            function () {
                document.getElementById('sande2').checked = false;
                $(".label_sande").removeClass("hover");
            });

        $('#zyohou_list_all').hover(function () {
            document.getElementById('zyohou2').checked = true;
            $(".label_zyohou").addClass("hover");
        },
            function () {
                document.getElementById('zyohou2').checked = false;
                $(".label_zyohou").removeClass("hover");
            });

        $('#senkou_list_all').hover(function () {
            document.getElementById('senkou2').checked = true;
            $(".label_senkou").addClass("hover");
        },
            function () {
                document.getElementById('senkou2').checked = false;
                $(".label_senkou").removeClass("hover");
            });

        $('#honkan_list_all').hover(function () {
            document.getElementById('honkan2').checked = true;
            $(".label_honkan").addClass("hover");
        },
            function () {
                document.getElementById('honkan2').checked = false;
                $(".label_honkan").removeClass("hover");
            });

        $('#ryou_list_all').hover(function () {
            document.getElementById('ryou').checked = true;
            $(".label_ryou").addClass("hover");
        },
            function () {
                document.getElementById('ryou').checked = false;
                $(".label_ryou").removeClass("hover");
            });
            btn.addEventListener("click", () => {


                // pausedがtrue=>停止, false=>再生中
                if (game_hantei == "game") {
                    if (!back_bgm.paused) {
                        btn.innerHTML = '<img src="aseets/volume_off.png">';  // 「再生ボタン」に切り替え
                        console.log("ストップ")
                        back_bgm.pause();
                    } else {
                        btn.innerHTML = '<img src="aseets/volume_on.png">';  // 「一時停止ボタン」に切り替え
                        console.log("スタート ")
                        back_bgm.play();
                    }
                } else {
                    if (!syokai_bgm.paused) {
                        btn.innerHTML = '<img src="aseets/volume_off.png">';  // 「再生ボタン」に切り替え
                        console.log("ストップ")
                        syokai_bgm.pause();
                        back_bgm.pause();
                    }
                    else {
                        btn.innerHTML = '<img src="aseets/volume_on.png">';  // 「一時停止ボタン」に切り替え
                        console.log("スタート ")
                        syokai_bgm.play();
                        back_bgm.play();
                    }
            
                }
            
            });

    }


}


const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

let vw = window.innerWidth;

window.addEventListener('resize', () => {
    if (vw === window.innerWidth) {
        // 画面の横幅にサイズ変動がないので処理を終える
        return;
    }
    // 画面の横幅のサイズ変動があった時のみ高さを再計算する
    vw = window.innerWidth;
    setFillHeight();
});

// 初期化
setFillHeight();


$(document).ready(function () {
    if (window.performance.navigation.type == 2 || window.performance.navigation.type == 1) {
        back_hantei = true;
    }
});
// <audio>
const btn = document.querySelector(".btn-play");   // <button>

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




    $('#switchbtn , #modalBg1 , .tutorial-step2').click(function () {
        $(".tutorial-step2").addClass("select");
        $(".tutorial-step1.select").removeClass("select");
        $('#modal_marubatu_video')[0].pause();
        video3.currentTime = 0;
        $('#modalArea').fadeOut();
        $('#modalArea2').fadeIn();
        $('#modal_syoukai_video')[0].play();
    });
    $('.tutorial-step1').click(function () {
        $(".tutorial-step1").addClass("select");
        $(".tutorial-step2.select").removeClass("select");
        $('#modalArea2').fadeOut();
        $('#modalArea').fadeIn();
        $('#modal_syoukai_video')[0].pause();
        video4.currentTime = 0;
        $('#modal_marubatu_video')[0].play();
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
    var doc = Top_yahaba_Aframe.contentDocument || Top_yahaba_Aframe.contentWindow.document;
    document.getElementById('mask_all').classList.remove("roder");

    $("#main_yahaba_aframe").contents().find(doc.querySelector('a-scene')).on("loaded", function (e) {

        if (document.getElementById('mask_all').classList.contains("roder")) {

        } else {

            if (Top_yahaba_Aframe.getAttribute('src').indexOf('Marubatu.html') != -1) {
                document.getElementById('left_button').classList.remove("fadein");
                document.getElementById('right_button').classList.remove("fadein");
                $('.text_parent').removeClass("fadein");
                document.getElementById('right_button').style.visibility = 'hidden';
                document.getElementById('left_button').style.visibility = 'hidden';
                $('.setumei').hide();
                $('#yahaba_list').hide();
                $('#game_button').hide();
                $('#back_button').show();
                window.setTimeout(function () {
                    document.getElementById('mask_all').classList.add("roder");
        
                    if (back_hantei || (navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0 || navigator.userAgent.indexOf('') > 0) {
                        $('.bgm_setumei').addClass("fadein");
                    }
                    back_bgm.play();

                }, 500);

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
                    if (back_hantei || (navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0 || navigator.userAgent.indexOf('') > 0) {
                        $('.bgm_setumei').addClass("fadein");
                    }

                    button_visi();

                }, 500);
            }

        }

    });
}



function list_visi() {
    if (Number(this_id1) == 1) {
        document.getElementById('mekatoro_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("meka");
        document.getElementById('right_button').classList.add("meka");
        $('#game_button').addClass('meka');
        $('#back_button').addClass('meka');
    } else if (Number(this_id1) == 2) {
        document.getElementById('densi_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("densi");
        document.getElementById('right_button').classList.add("densi");
        $('#game_button').addClass('densi');
        $('#back_button').addClass('densi');
    } else if (Number(this_id1) == 3) {
        document.getElementById('kentiku_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("kentiku");
        document.getElementById('right_button').classList.add("kentiku");
        $('#game_button').addClass('kentiku');
        $('#back_button').addClass('kentiku');
    } else if (Number(this_id1) == 4) {
        document.getElementById('sande_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("sande");
        document.getElementById('right_button').classList.add("sande");
        $('#game_button').addClass('sande');
        $('#back_button').addClass('sande');
    } else if (Number(this_id1) == 5) {
        document.getElementById('zyohou_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("zyohou");
        document.getElementById('right_button').classList.add("zyohou");
        $('#game_button').addClass('zyohou');
        $('#back_button').addClass('zyohou');
    } else if (Number(this_id1) == 6) {
        document.getElementById('senkou_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("senkou");
        document.getElementById('right_button').classList.add("senkou");
        $('#game_button').addClass('senkou');
        $('#back_button').addClass('senkou');
    } else if (Number(this_id1) == 7) {
        document.getElementById('honkan_list_all').style.display = 'inline';
        document.getElementById('left_button').classList.add("honkan");
        document.getElementById('right_button').classList.add("honkan");
        $('#game_button').addClass('honkan');
        $('#back_button').addClass('honkan');
    } else if (Number(this_id1) == 8) {
        document.getElementById('ryou_list_all').style.display = 'inline';
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
    window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + id1 + "=" + id2 + "=" + "game";

});

$('#back_button').click(function () {
    window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + id1 + "=" + id2;
})

$('#setumei_button').click(function () {
    $(".setumei_text").toggleClass("fadein");
    $("#batu_icon").toggleClass("fadein");
    $("#setumei_icon").toggleClass("fadein");

})


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
    // getCSV();
    syoukai_hantei();
    document.getElementById('mask_all').classList.remove("roder");
    document.getElementById('classroom_text').classList.remove("scrollin");
    button_visi();
    list_visi();


    //リストかオブジェクトから、飛んだ時にどの科にいるか指定
    switch (Number(this_id1)) {
        case 1:
            reset_txt = 'mekatoro_kikaikakou';
            break;

        case 2:
            reset_txt = 'densi_computer';
            break;

        case 3:
            reset_txt = 'kentiku_zisyuzyou';
            break;

        case 4:
            reset_txt = 'sande_dezainjikken';
            break;

        case 5:
            reset_txt = 'zyohou_keisanki';
            break;

        case 6:
            reset_txt = 'senkou_zisyu';
            break;

        case 7:
            reset_txt = 'honkan_tamoku';
            break;
    }

}

function syoukai_page(id1, id2) {

    //元々はsyoukai_pageの引数から判定していた。変更後はgetCSV関数にて判定。
    window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + id1 + "=" + id2;
    this_id1 = id1;
    this_id2 = id2;
    syoukai_hantei();
    document.getElementById('classroom_text').classList.remove("scrollin");
    button_visi();
    //リストかオブジェクトから、飛んだ時にどの科にいるか指定
    switch (Number(this_id1)) {
        case 1:
            reset_txt = 'mekatoro_kikaikakou';
            break;

        case 2:
            reset_txt = 'densi_computer';
            break;

        case 3:
            reset_txt = 'kentiku_zisyuzyou';
            break;

        case 4:
            reset_txt = 'sande_dezainjikken';
            break;

        case 5:
            reset_txt = 'zyohou_keisanki';
            break;

        case 6:
            reset_txt = 'senkou_zisyu';
            break;

        case 7:
            reset_txt = 'honkan_tamoku';
            break;
    }
}

function syoukai_hantei() {
    var hantei_id1;
    var i;

    //tmp.lengthは読み込んだcsvファイルの行数の格納変数
    console.log(tmp.length);



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
        Top_yahaba_Aframe.src = '../marubatu_game/Marubatu.html?a=' + result[csv_column][3];
        $('.modal_syoukai_body').hide();


        $(function () {
            var video3 = document.getElementById('modal_marubatu_video2');
            var video4 = document.getElementById('modal_syoukai_video2');
            /*使い方*/
            $('#openModal').click(function () {
                $('#modalArea').fadeIn();
                $('#modal_marubatu_video2')[0].play();
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




            $('#switchbtn , #modalBg1 , .tutorial-step2').click(function () {
                $(".tutorial-step2").addClass("select");
                $(".tutorial-step1.select").removeClass("select");
                $('#modal_marubatu_video2')[0].pause();
                video3.currentTime = 0;
                $('#modalArea').fadeOut();
                $('#modalArea2').fadeIn();
                $('#modal_syoukai_video2')[0].play();
            });
            $('.tutorial-step1').click(function () {
                $(".tutorial-step1").addClass("select");
                $(".tutorial-step2.select").removeClass("select");
                $('#modalArea2').fadeOut();
                $('#modalArea').fadeIn();
                $('#modal_syoukai_video2')[0].pause();
                video4.currentTime = 0;
                $('#modal_marubatu_video2')[0].play();
            });
            $('#closebtn , #modalBg2').click(function () {
                $(".tutorial-step1").addClass("select");
                $(".tutorial-step2.select").removeClass("select");
                $('#modalArea2').fadeOut();
                $('#modal_syoukai_video2')[0].pause();
                video4.currentTime = 0;
            });
            /*---------*/
        });



    } else {
        Top_yahaba_Aframe.src = "../vr_main_syoukai_aframe/main_syoukai.html?a=" + result[csv_column][3] + "=" + this_id1 + "=" + this_id2;
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
