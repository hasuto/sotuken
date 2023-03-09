var text; //各科の紹介文格納用

window.onload = function () {
    var data = location.href.split("?")[1];
    text = data.split("=")[0];

  
    var background = document.querySelector('#back-ground');

    background.setAttribute('src',"../vr_images/" + text + ".jpeg");
    
};
