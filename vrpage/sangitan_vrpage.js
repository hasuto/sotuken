var result = [];
        var bbbb;
        var this_text; //各科の紹介文格納用
        var this_id1; //紹介文をcsvファイルから読み込むための、id
        var this_id2;//紹介文をcsvファイルから読み込むための、id
        console.log("aaaaa");
        

        //htmlでiframeが読み込まれたら実行
        $('#top_yahaba_aframe').on('load', function () {
            //iframeのdocumentを取得する（Mozilla系 || 古いIE系）
            var doc = this.contentDocument || this.contentWindow.document;
            console.log((doc.getElementById('Maru')));
            //iframeの中のhtmlのidが一致するオブジェクトを押すと実行
            //下記に各科を追加していく
            $("#top_yahaba_aframe").contents().find(doc.getElementById('Maru')).on("click", function (e) {
                syoukai_page('densi_computer', '2', '1');
            });
            $("#top_yahaba_aframe").contents().find(doc.getElementById('kousya')).on("click", function (e) {
                syoukai_page('kentiku_zisyuzyou', '3', '1');
            });
        });

        //追加箇所

        var Top_yahaba_Aframe = document.getElementById('top_yahaba_aframe');
        Top_yahaba_Aframe.src = "yahaba_school_top.html";
        var Top_mizusawa_Aframe = document.getElementById('top_mizusawa_aframe');
        Top_mizusawa_Aframe.src = "mizusawa_school_top.html";

        document.getElementById('mekatoro2').addEventListener('click', function (e) {
            if (document.getElementById("mekatoro2").checked) {

                document.getElementById("densi2").checked = false;
                document.getElementById("kentiku2").checked = false;
                document.getElementById("sande2").checked = false;
                document.getElementById("zyohou2").checked = false;
                document.getElementById("senkou2").checked = false;
                document.getElementById("honkan2").checked = false;

                console.log("okd");
            } else {
                console.log("notok");
            }
        });

        document.getElementById('densi2').addEventListener('click', function (e) {
            if (document.getElementById("densi2").checked) {

                document.getElementById("mekatoro2").checked = false;
                document.getElementById("kentiku2").checked = false;
                document.getElementById("sande2").checked = false;
                document.getElementById("zyohou2").checked = false;
                document.getElementById("senkou2").checked = false;
                document.getElementById("honkan2").checked = false;
                console.log("okd");
            } else {
                console.log("notok");
            }
        });

        document.getElementById('kentiku2').addEventListener('click', function (e) {
            if (document.getElementById("kentiku2").checked) {

                document.getElementById("densi2").checked = false;
                document.getElementById("mekatoro2").checked = false;
                document.getElementById("sande2").checked = false;
                document.getElementById("zyohou2").checked = false;
                document.getElementById("senkou2").checked = false;
                document.getElementById("honkan2").checked = false;

                console.log("okd");
            } else {
                console.log("notok");
            }
        });

        document.getElementById('sande2').addEventListener('click', function (e) {
            if (document.getElementById("sande2").checked) {

                document.getElementById("densi2").checked = false;
                document.getElementById("mekatoro2").checked = false;
                document.getElementById("kentiku2").checked = false;
                document.getElementById("zyohou2").checked = false;
                document.getElementById("senkou2").checked = false;
                document.getElementById("honkan2").checked = false;
                console.log("okd");
            } else {
                console.log("notok");
            }
        });

        document.getElementById('zyohou2').addEventListener('click', function (e) {
            if (document.getElementById("zyohou2").checked) {

                document.getElementById("densi2").checked = false;
                document.getElementById("mekatoro2").checked = false;
                document.getElementById("sande2").checked = false;
                document.getElementById("kentiku2").checked = false;
                document.getElementById("senkou2").checked = false;
                document.getElementById("honkan2").checked = false;
                console.log("okd");
            } else {
                console.log("notok");
            }
        });

        document.getElementById('senkou2').addEventListener('click', function (e) {
            if (document.getElementById("senkou2").checked) {

                document.getElementById("densi2").checked = false;
                document.getElementById("mekatoro2").checked = false;
                document.getElementById("sande2").checked = false;
                document.getElementById("zyohou2").checked = false;
                document.getElementById("kentiku2").checked = false;
                document.getElementById("honkan2").checked = false;
                console.log("okd");
            } else {
                console.log("notok");
            }
        });

        document.getElementById('honkan2').addEventListener('click', function (e) {
            if (document.getElementById("honkan2").checked) {

                document.getElementById("densi2").checked = false;
                document.getElementById("mekatoro2").checked = false;
                document.getElementById("sande2").checked = false;
                document.getElementById("zyohou2").checked = false;
                document.getElementById("senkou2").checked = false;
                document.getElementById("kentiku2").checked = false;
                console.log("okd");
            } else {
                console.log("notok");
            }
        });

        document.getElementById('home_button').addEventListener('click', function (e) {

            console.log(document.getElementById('top_yahaba_aframe').getAttribute('src'));
            var iframe_url = document.getElementById('top_yahaba_aframe').getAttribute('src');
            if (document.getElementById('top_yahaba_aframe').getAttribute('src') != 'yahaba_school_top.html') {
                document.getElementById('top_yahaba_aframe').setAttribute('src', 'yahaba_school_top.html');
                document.getElementById('classroom_text').classList.remove("scrollin");
                document.getElementById('classroom_text2').classList.remove("scrollin");

            }

        });


        document.getElementById('left_button').addEventListener('click', function (e) {


            alert("左");
        });

        document.getElementById('right_button').addEventListener('click', function (e) {

            alert("右");
        });



        document.getElementById('game_button').addEventListener('click', function (e) {

            if (document.getElementById('top_yahaba_aframe').getAttribute('src') != 'yahaba_school_top.html') {
                //iframeのdocumentを取得する（Mozilla系 || 古いIE系）


                var iframeElem = document.getElementsByTagName('iframe');

                var iframeDocument = iframeElem[0].contentDocument || iframeElem[0].contentWindow.document;

                // var doc2 = this.contentDocument || this.contentWindow.document;
                console.log((iframeDocument.getElementById('back-ground').getAttribute('src')));
                //紹介ページでの背景のurlは取得済み。例meka_cad.jpg
                var img_url = iframeDocument.getElementById('back-ground').getAttribute('src');

                // document.getElementById('top_yahaba_aframe').setAttribute('src', 'Marubatu01.html?a='+img_url);
                //下記の処理でMaruBatu.htmlのsample関数を呼びゲームスタート
                try {
                    document.getElementById('top_yahaba_aframe').contentWindow.sample();
                } catch (error) {
                    alert("すでにゲーム中");
                }

                // document.getElementById('top_yahaba_aframe').getAttribute('src');
                // window.location.href = '/aframegame1/MaruBatu01.html?a='+text;


            }

        });

        // document.getElementById('kentiku_list').style.display = 'none';
        // document.getElementById('sande_list').style.display = 'none';
        // document.getElementById('mekatoro_list').style.display = 'none';
        // document.getElementById('densi_list').style.display = 'none';
        // document.getElementById('zyohou_list').style.display = 'none';
        // document.getElementById('senkou_list').style.display = 'none';
        // document.getElementById('honkan_list').style.display = 'none';
        document.getElementById('mizusawa_school').style.display = 'none';

        function kentiku(text, id1, id2) {
            var kentiku_list = document.getElementById('kentiku_list').style.display;
            var Top_yahaba_Aframe = document.getElementById('top_yahaba_aframe');
            console.log(kentiku_list);
            if (kentiku_list == 'none') {
                Top_yahaba_Aframe.src = "/aframegame1/syoukai/main_syoukai.html?a=" + text + "=" + id1 + "=" + id2;

                document.getElementById('kentiku_list').style.display = 'inline-block';
                document.getElementById('sande_list').style.display = 'none';
                document.getElementById('mekatoro_list').style.display = 'none';
                document.getElementById('densi_list').style.display = 'none';
                document.getElementById('zyohou_list').style.display = 'none';
                document.getElementById('senkou_list').style.display = 'none';
                document.getElementById('honkan_list').style.display = 'none';
            } else {
                document.getElementById('kentiku_list').style.display = 'none';
            }
        }
        function sande(text, id1, id2) {
            var sande_list = document.getElementById('sande_list').style.display;
            var Top_yahaba_Aframe = document.getElementById('top_yahaba_aframe');
            if (sande_list == 'none') {
                Top_yahaba_Aframe.src = "/aframegame1/syoukai/main_syoukai.html?a=" + text + "=" + id1 + "=" + id2;
                document.getElementById('sande_list').style.display = 'inline-block';
                document.getElementById('kentiku_list').style.display = 'none';
                document.getElementById('mekatoro_list').style.display = 'none';
                document.getElementById('densi_list').style.display = 'none';
                document.getElementById('zyohou_list').style.display = 'none';
                document.getElementById('senkou_list').style.display = 'none';
                document.getElementById('honkan_list').style.display = 'none';
            } else {
                document.getElementById('sande_list').style.display = 'none';
            }
        }
        function mekatoro(text, id1, id2) {
            var mekatoro_list = document.getElementById('mekatoro_list').style.display;
            var Top_yahaba_Aframe = document.getElementById('top_yahaba_aframe');
            if (mekatoro_list == 'none') {
                Top_yahaba_Aframe.src = "/aframegame1/syoukai/main_syoukai.html?a=" + text + "=" + id1 + "=" + id2;
                document.getElementById('mekatoro_list').style.display = 'inline-block';
                document.getElementById('kentiku_list').style.display = 'none';
                document.getElementById('sande_list').style.display = 'none';
                document.getElementById('densi_list').style.display = 'none';
                document.getElementById('zyohou_list').style.display = 'none';
                document.getElementById('senkou_list').style.display = 'none';
                document.getElementById('honkan_list').style.display = 'none';
            } else {
                document.getElementById('mekatoro_list').style.display = 'none';
            }
        }
        function densi(text, id1, id2) {
            var densi_list = document.getElementById('densi_list').style.display;
            var Top_yahaba_Aframe = document.getElementById('top_yahaba_aframe');
            if (densi_list == 'none') {
                Top_yahaba_Aframe.src = "/aframegame1/syoukai/main_syoukai.html?a=" + text + "=" + id1 + "=" + id2;
                document.getElementById('densi_list').style.display = 'inline-block';
                document.getElementById('kentiku_list').style.display = 'none';
                document.getElementById('sande_list').style.display = 'none';
                document.getElementById('mekatoro_list').style.display = 'none';
                document.getElementById('zyohou_list').style.display = 'none';
                document.getElementById('senkou_list').style.display = 'none';
                document.getElementById('honkan_list').style.display = 'none';
            } else {
                document.getElementById('densi_list').style.display = 'none';
            }
        }
        function zyohou(text, id1, id2) {
            var zyohou_list = document.getElementById('zyohou_list').style.display;
            var Top_yahaba_Aframe = document.getElementById('top_yahaba_aframe');
            if (zyohou_list == 'none') {
                Top_yahaba_Aframe.src = "/aframegame1/syoukai/main_syoukai.html?a=" + text + "=" + id1 + "=" + id2;
                document.getElementById('zyohou_list').style.display = 'inline-block';
                document.getElementById('kentiku_list').style.display = 'none';
                document.getElementById('sande_list').style.display = 'none';
                document.getElementById('mekatoro_list').style.display = 'none';
                document.getElementById('densi_list').style.display = 'none';
                document.getElementById('senkou_list').style.display = 'none';
                document.getElementById('honkan_list').style.display = 'none';
            } else {
                document.getElementById('zyohou_list').style.display = 'none';
            }
        }

        function senkou(text, id1, id2) {
            var senkou_list = document.getElementById('senkou_list').style.display;
            var Top_yahaba_Aframe = document.getElementById('top_yahaba_aframe');
            if (senkou_list == 'none') {
                Top_yahaba_Aframe.src = "/aframegame1/syoukai/main_syoukai.html?a=" + text + "=" + id1 + "=" + id2;
                document.getElementById('senkou_list').style.display = 'inline-block';
                document.getElementById('kentiku_list').style.display = 'none';
                document.getElementById('sande_list').style.display = 'none';
                document.getElementById('mekatoro_list').style.display = 'none';
                document.getElementById('densi_list').style.display = 'none';
                document.getElementById('honkan_list').style.display = 'none';
            } else {
                document.getElementById('senkou_list').style.display = 'none';
            }
        }

        function honkan(text, id1, id2) {
            var honkan_list = document.getElementById('honkan_list').style.display;
            var Top_yahaba_Aframe = document.getElementById('top_yahaba_aframe');
            if (honkan_list == 'none') {
                Top_yahaba_Aframe.src = "/aframegame1/syoukai/main_syoukai.html?a=" + text + "=" + id1 + "=" + id2;
                document.getElementById('honkan_list').style.display = 'inline-block';
                document.getElementById('kentiku_list').style.display = 'none';
                document.getElementById('sande_list').style.display = 'none';
                document.getElementById('mekatoro_list').style.display = 'none';
                document.getElementById('densi_list').style.display = 'none';
            } else {
                document.getElementById('honkan_list').style.display = 'none';
            }
        }



        function syoukai_page(text, id1, id2) {
            var Top_yahaba_Aframe = document.getElementById('top_yahaba_aframe');
            Top_yahaba_Aframe.src = "/aframegame1/syoukai/main_syoukai.html?a=" + text + "=" + id1 + "=" + id2;
            this_id1 = id1;
            this_id2 = id2;
            getCSV();

            if (document.getElementById('classroom_text').classList.contains("scrollin")) {
                document.getElementById('classroom_text').classList.remove("scrollin");
                document.getElementById('classroom_text2').classList.add("scrollin");

            } else if (document.getElementById('classroom_text2').classList.contains("scrollin")) {
                document.getElementById('classroom_text2').classList.remove("scrollin");
                document.getElementById('classroom_text').classList.add("scrollin");
            } else {
                document.getElementById('classroom_text').classList.add("scrollin");
            }







        }

        function syoukai_hantei() {
            var a, b;
            var i;
            // for(var i=0; i<=tmp.length; i++){
            //     console.log(i);
            // }
            var c = result[1][2];
            console.log(c);

            console.log(tmp.length);



            for (var i = 0; i <= tmp.length; i++) {
                var str = result[i][0];
                if (str == this_id1) {
                    console.log("一致");
                    console.log("id1" + this_id1);
                    console.log(str);
                    console.log(i);
                    a = i;
                    console.log("a=" + a);
                    break;
                }
            }

            for (var j = a; j <= tmp.length; j++) {
                console.log("a2=" + j);
                var str2 = result[j][1];
                if (str2 == this_id2) {
                    console.log(str2);
                    console.log(j);
                    console.log(result[j][2]);
                    bbbb = j;
                    break;
                }

            }

            result[bbbb][2]
            syoukai_text();
        }


        function syoukai_text() {
            console.log(bbbb);
            console.log(result[bbbb][2]);
            document.getElementById('classroom_text').textContent = result[bbbb][2];
            document.getElementById('classroom_text2').textContent = result[bbbb][2];

            // var text = result[bbbb][2];
            // var elem = document.getElementById("syoukai_text");
            // elem.innerHTML = text;
            // document.getElementById("syoukai_text").textContent = text;
        }


        function yahaba_school() {
            document.getElementById('mizusawa_school').style.display = 'none';
            document.getElementById('yahaba_school').style.display = 'flex';

        }
        function mizusawa_school() {
            document.getElementById('yahaba_school').style.display = 'none';
            document.getElementById('mizusawa_school').style.display = 'flex';

        }



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