var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

if (filename === "main-page"){

    setTimeout(
        function() {
            $("#curtain").width(0);
            $("#curtainContent").fadeOut();
            $(".topTextContainer").css({'visibility':'visible', 'opacity': '1'});
            $("#indexSeccondSection").css({"display":"block"});
        }, 1500);
    
    setInterval(()=>{
        $(".scrollTxt").fadeToggle(".5ms");
    }, 500);
}
