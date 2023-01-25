var result = [];
var csv_column;
var this_text; //各科の紹介文格納用
var this_id1; //紹介文をcsvファイルから読み込むための、id
var this_id2;//紹介文をcsvファイルから読み込むための、id
var reset_txt;
console.log("変わってる");
var Top_yahaba_Aframe = document.getElementById('top_aframe');
var loader = document.getElementById('loader');


window.onload = () => {


        var data = location.href.split("?")[1];
        if (data == "y") {
                Top_yahaba_Aframe.src = "../vr_top_page_aframe/yahaba_school_top.html";
                document.getElementById('iframe_title').textContent = '矢巾キャンパス';
                $('#mizusawa_pin_list_all').hide();

        } else if (data == "m") {
                Top_yahaba_Aframe.src = "../vr_top_page_aframe/mizusawa_school_top.html";
                document.getElementById('iframe_title').textContent = '水沢キャンパス';
                $('#yahaba_pin_list_all').hide();
        }


}

// document.addEventListener('DOMContentLoaded', function () {


// });

$('#top_aframe').on('load', function () {
        //iframeのdocumentを取得する（Mozilla系 || 古いIE系）
        var doc = this.contentDocument || this.contentWindow.document;
        console.log(doc.querySelector('a-scene'));

        //iframeの全要素が読み込まれたら処理
        $("#top_aframe").contents().find(doc.querySelector('a-scene')).on("loaded", function (e) {
                console.log("コンプリートマイン2");
                if (document.getElementById('loader').classList.contains("loaded")) {

                } else {
                        window.setTimeout(function () {
                                loader.classList.add('loaded');
                        }, 1000);


                }


        });

        $(function () {
                /*チュートリアル*/
                $('#tutorial-Modal').click(function () {
                        $('#tutorial-modalArea').fadeIn();
                });
                $('#closeModal , #tutorial-modalBg').click(function () {
                        $('#tutorial-modalArea').fadeOut();
                });
                $('#closebtn , #tutorial-modalBg').click(function () {
                        $('#tutorial-modalArea').fadeOut();
                });
        });




        if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
                // ❶スマホのみに適用させるJavaScriptを記述
                var camera_pc = $("#top_aframe").contents().find(doc.getElementById('camera_pc'));
                // camera_pc.parentNode.removeChild(camera_pc);
                camera_pc.remove();
                $('.label_yahaba_pin').click(function () {
                        if ($('#yahaba_pin').prop('checked') == true) {
                                $(".label_yahaba_pin").removeClass("hover");
                        } else {
                                $(".label_yahaba_pin").addClass("hover");
                        }
                });

                $('.label_mizusawa_pin').click(function () {
                        if ($('#mizusawa_pin').prop('checked') == true) {
                                $(".label_mizusawa_pin").removeClass("hover");
                        } else {
                                $(".label_mizusawa_pin").addClass("hover");
                        }
                });

                $('.iframe_title').addClass('res');

                console.log("スマホだよーーーー");

        } else {
                var camera_phone = $("#top_aframe").contents().find(doc.getElementById('camera_phone'));
                camera_phone.remove();

                $('#yahaba_pin_list_all').hover(function () {
                        document.getElementById('yahaba_pin').checked = true;
                        $(".label_yahaba_pin").addClass("hover");
                },
                        function () {
                                document.getElementById('yahaba_pin').checked = false;
                                $(".label_yahaba_pin").removeClass("hover");
                        });
                $('#mizusawa_pin_list_all').hover(function () {
                        document.getElementById('mizusawa_pin').checked = true;
                        $(".label_mizusawa_pin").addClass("hover");
                },
                        function () {
                                document.getElementById('mizusawa_pin').checked = false;
                                $(".label_mizusawa_pin").removeClass("hover");
                        });
                console.log("PCだよーーーーーーー");
        }



        //iframeの中のhtmlのidが一致するオブジェクトを押すと実行
        //下記に各科を追加していく
        // syoukai_page('3', '1');
        $("#top_aframe").contents().find(doc.getElementById('mekatoro_model')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '1' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('mekatoro_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '1' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('densi_model')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '2' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('densi_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '2' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('kentiku_model')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '3' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('kentiku_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '3' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('sande_model')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '4' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('sande_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '4' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('zyohou_model')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '5' + "=" + '1';
        });


        $("#top_aframe").contents().find(doc.getElementById('zyohou_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '5' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('senkou_model')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '6' + "=" + '1';
        });


        $("#top_aframe").contents().find(doc.getElementById('senkou_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '6' + "=" + '1';
        });


        $("#top_aframe").contents().find(doc.getElementById('taiku')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '7' + "=" + '6';
        });


        $("#top_aframe").contents().find(doc.getElementById('syoku')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '7' + "=" + '4';
        });

        $("#top_aframe").contents().find(doc.getElementById('tamoku')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '7' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('ryou')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '8' + "=" + '1';
        });






        $("#top_aframe").contents().find(doc.getElementById('honkan_genkan')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '7' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('syokudou_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '7' + "=" + '4';
        });

        $("#top_aframe").contents().find(doc.getElementById('taikukan_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '7' + "=" + '6';
        });

        $("#top_aframe").contents().find(doc.getElementById('ryou_point')).on("click", function (e) {
                //alert('kentiku');
                window.location.href = "../vr_main_html/yahaba_main.html?a=" + 'text' + "=" + '8' + "=" + '1';
        });

        // $("#top_aframe").contents().find(doc.getElementById('kousya')).on("mouseenter", function (e) {
        //         //alert('kentiku');
        //         console.log("触れている");
        //         // syoukai_page('3', '1');
        // });



        //水沢校のクリックイベント
        $("#top_aframe").contents().find(doc.getElementById('seisangizyutu')).on("click", function (e) {
                window.location.href = "../vr_main_html/mizusawa_main.html?a=" + 'text' + "=" + '9' + "=" + '1';
        });
        $("#top_aframe").contents().find(doc.getElementById('denkigizyutu')).on("click", function (e) {
                window.location.href = "../vr_main_html/mizusawa_main.html?a=" + 'text' + "=" + '10' + "=" + '1';
        });
        $("#top_aframe").contents().find(doc.getElementById('kentikusetubi')).on("click", function (e) {
                window.location.href = "../vr_main_html/mizusawa_main.html?a=" + 'text' + "=" + '11' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('honkan_m')).on("click", function (e) {
                window.location.href = "../vr_main_html/mizusawa_main.html?a=" + 'text' + "=" + '12' + "=" + '1';
        });

        $("#top_aframe").contents().find(doc.getElementById('taikukan_m')).on("click", function (e) {
                window.location.href = "../vr_main_html/mizusawa_main.html?a=" + 'text' + "=" + '12' + "=" + '4';
        });





});

$(function () {
        $('#openModal').click(function () {
                console.log('a');
                $('#modalArea').fadeIn();
        });
        $('#closeModal , #modalBg').click(function () {
                $('#modalArea').fadeOut();

        });
});

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




