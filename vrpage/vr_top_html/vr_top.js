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




