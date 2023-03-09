var result = [];
var csv_column;
var this_text; //各科の紹介文格納用
var this_id1; //紹介文をcsvファイルから読み込むための、id
var this_id2;//紹介文をcsvファイルから読み込むための、id
var reset_txt;
var Top_yahaba_Aframe = document.getElementById('top_aframe');
var loader = document.getElementById('loader');
var bgm = document.querySelector('#top_page_bgm');


window.onload = () => {
        var data = location.href.split("?")[1];
        //URLから矢巾校か水沢校か判定・yが矢巾校・mが水沢校
        if (data == "y") {
                Top_yahaba_Aframe.src = "../vr_top_page_aframe/yahaba_school_top.html";
                document.getElementById('iframe_title').textContent = '矢巾キャンパス';
                $('#mizusawa_pin_list_all').hide();
        } else if (data == "m") {
                Top_yahaba_Aframe.src = "../vr_top_page_aframe/mizusawa_school_top.html";
                document.getElementById('iframe_title').textContent = '水沢キャンパス';
                $('#yahaba_pin_list_all').hide();
        }
        //ユーザーの端末OSからスマホかPCか判定
        if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
                //スマホ用のjavascript
                $(".navbar-brand").addClass("res");
                $(".navbar-nav").addClass("res");
                $(".nav-item").addClass("res");
                $(".nav-link").addClass("res");
                $(".btn-play").addClass("res");
                $(".btn-play").find('img').addClass("res");


        } else {

        }
}

$(function () {
        var video1 = document.getElementById('modal_top_video');
        var video2 = document.getElementById('modal_tutorial_video');
        var video3 = document.getElementById('modal_marubatu_video');
        var video4 = document.getElementById('modal_syoukai_video');
        /*チュートリアル*/
        $('#tutorial-Modal').click(function () {
                $('#tutorial-modalArea').fadeIn();
        });
        $('#closeModal , #tutorial-modalBg').click(function () {
                $('#tutorial-modalArea').fadeOut();
        });
        $('#closebtn , #tutorial-modalBg').click(function () {
                $('#modal_tutorial_video')[0].pause();
                video2.currentTime = 0;
                $('#tutorial-modalArea').fadeOut();
        });
        /*---------*/

        /*使い方*/
        $('#openModal').click(function () {
                $('#modalArea').fadeIn();
                $('#modal_top_video')[0].play();

        });
        $('#closebtn , #modalBg').click(function () {
                $('#modal_top_video')[0].pause();
                video1.currentTime = 0;
                $('#modalArea').fadeOut();
        });
        /*---------*/

        /*更新履歴*/
        $('#update-Modal').click(function () {
                $('#update-modalArea').fadeIn();
        });
        $('#closebtn , #update-modalBg').click(function () {
                $('#update-modalArea').fadeOut();
        });
        /*---------*/
});


$(function () {
        var audio = $("#audio").get(0);
        var isPlaying = false;
        $("#btn").on("click", function () {
                if (isPlaying) {
                        audio.pause();
                } else {
                        audio.play();
                }
        });
        audio.onplaying = function () {
                isPlaying = true;
        };
        audio.onpause = function () {
                isPlaying = false;
        };
});

$(function () {
        $('#openModal').click(function () {
                $('#modalArea').fadeIn();
        });
        $('#closeModal , #modalBg').click(function () {
                $('#modalArea').fadeOut();

        });
});
//ヘッダーの矢巾キャンパスのクリックイベント
document.getElementById("y_campus").addEventListener('click', function (e) {
        if (document.getElementById("top_aframe").getAttribute('src') != "../vr_top_page_aframe/yahaba_school_top.html") {
                window.location.href = "../vr_top_html/vr_top.html?y";

        } else {
                swal.fire({
                        title: 'ここが矢巾キャンパスです'
                        , confirmButtonColor: '#004EA2'
                });
        }
});

//ヘッダーの水沢キャンパスのクリックイベント
document.getElementById("m_campus").addEventListener('click', function (e) {
        if (document.getElementById("top_aframe").getAttribute('src') != "../vr_top_page_aframe/mizusawa_school_top.html") {
                window.location.href = "../vr_top_html/vr_top.html?m";
        } else {
                swal.fire({
                        title: 'ここが水沢キャンパスです'
                        , confirmButtonColor: '#004EA2'
                });
        }
});




