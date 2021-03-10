$(function(){



    //멀티탭 시작
     $("button:nth-child(1)").click(function(){

        $("button").css({
            "border": "none",
            "top": "0px"
        });

        $(this).css({
            "border": "1px solid #aaa",
            "border-bottom": "none",
            "top": "1px"
        });

        $("div#tabContent1").css({"display": "block"});
        $("div#tabContent2").css({"display": "none"});

     });

     $("button:nth-child(2)").click(function(){

        $("button").css({
            "border": "none",
            "top": "0px"
        });

        $(this).css({
            "border": "1px solid #aaa",
            "border-bottom": "none",
            "top": "1px"
        });

        $("div#tabContent1").css({"display": "none"});
        $("div#tabContent2").css({"display": "block"});

     });
    //멀티탭 끝

    //모달레이어 팝업 시작
    $("#tabArea li:first-child span").click(function(){

        $("#modalLayerBG").css({"display":"block"});

    });
    //모달레이어 팝업 끝

    //모달레이어 팝업 닫기 버튼 시작
    $("#closeBtn").click(function(){
        $("#modalLayerBG").css({"display":"none"});
    });
     //모달레이어 팝업 닫기 버튼 끝
});
