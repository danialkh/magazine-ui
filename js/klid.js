$('document').ready(function(){
	
//	$('#Magalat').scroll(function(){
//		LeftScroll=$('#Magalat').scrollLeft();
//		if(LeftScroll<500 && LeftScroll>300){
//			$('#help').fadeIn(1000);
//		}
//		if(LeftScroll<1000 && LeftScroll>500){
//			$('#help').fadeOut(1000);
//		}
//	});
	



	$('#Magalat').animate({"scrollLeft":"0"},1400);
	$('#top').hide();
	turnOn_button=0;
	$('.MahaleClick').click(function(){
		if(turnOn_button==0){	
			$('#top').delay(300).fadeIn(1000);
			$('#help').delay(200).fadeOut(1000);
			$('#darkness').fadeOut(0).animate({"opacity":"0.8"},0).fadeIn(250).animate({"opacity":"0.5"},700).fadeOut(200).fadeIn(100).fadeOut(350);
			$('#klidKhamosh').fadeOut(1700);
			$('#klidRoshan').fadeIn(1700);
			$('#Magalat').animate({"scrollLeft":"100"},1400);
			turnOn_button=3;
			setTimeout(function(){turnOn_button=1;},1700);
		}
		if(turnOn_button==1){
			$('#content_of_div_bottom').html("Turn on the Lamp to start Komehshah");
			$('#content_of_div_top').html("برای روشن کردن چراغ کومشه روی کلید کلیک کنید.");
			$('#top').fadeOut(10);
			$('#help').delay(300).fadeIn(1000);
			$('#Magalat').animate({"scrollLeft":"0"},1400);
			$('#darkness').css({"opacity":"0.9"});
			$('#darkness').fadeIn(400);
			$('#klidKhamosh').fadeIn(400);
			$('#klidRoshan').fadeOut(400);
			turnOn_button=3;
			setTimeout(function(){turnOn_button=0;},450);
		}
	});

	var KInterval= setInterval(KInterval,2000);
	function KInterval(){
		setTimeout(function(){$('#help_img_logo').css({"filter":"invert(1)","-webkit-filter":"invert(1)"});},0);
		setTimeout(function(){$('#help_img_logo').css({"filter":"invert(0)","-webkit-filter":"invert(0)"});},100);
		setTimeout(function(){$('#help_img_logo').css({"filter":"invert(1)","-webkit-filter":"invert(1)"});},200);
		setTimeout(function(){$('#help_img_logo').css({"filter":"invert(0)","-webkit-filter":"invert(0)"});},300);
	}
});