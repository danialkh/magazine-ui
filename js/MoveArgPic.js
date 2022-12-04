$('document').ready(function(){
	$('#Magalat').animate({"scrollLeft":"0"},1);
	$('#Magalat').scroll(function(){
		min=0;
		max1=parseInt($('#Argimg_movi').css("width"))-parseInt($('#Box_arg').css("width"));
		max=-max1+1;

		JadareImgbereLeft=-max;
		windowSize=$(window).width();
		eshghaleArg=parseInt($('#Box_arg').css("width"));
		//jaee ke arg dide mishe = ye window + yedoone khodesh
		ArgDideShow=windowSize+eshghaleArg;
		nesbat=ArgDideShow/JadareImgbereLeft;
		pg_scrollLeft=$('#Magalat').scrollLeft();
		MondeTa_ARG=pg_scrollLeft-(parseInt($('#Box_arg').css("left"))-windowSize);


		LeftStyleOfImg=-MondeTa_ARG/nesbat;
		if(LeftStyleOfImg<=min && LeftStyleOfImg>max){
			$('#Argimg_movi').css({"left":LeftStyleOfImg});
		}
		if(LeftStyleOfImg>0){$('#Argimg_movi').css({"left":0});}
		if(LeftStyleOfImg<max){$('#Argimg_movi').css({"left":max});}
		//$("#Log_arg").html(LeftStyleOfImg+"     "+pg_scrollLeft+"     "+$('#Argimg_movi').css("left"));
	});
});
