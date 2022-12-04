
$("document").ready(function(){

//Start shadow circle
	var Bcircle= setInterval(Bcircle,4000);
	function Bcircle(){
		$("#Bcircle").css({"right":"-35px","top":"-8px","height":"13px"});
		$("#Bcircle").animate({"right":"25px","top":"62px","height":"4px"},1300);
	}
//End shadow circle
	$("#TableTop").show();
	$("#bookshelf_disabler").hide();
	$("#Open_magazine_allDisabler").hide();
	$(".center").hide();

	$(".DivBook2").click(function(){
		$(".center").show();
		$("#bookshelf_disabler").show();
		$("#Open_magazine_allDisabler").fadeIn(2000);

	
		//$("#Magalat").addClass("blur_test");

		//hide shadow of thumb
		$(this).prev(".shadow_div").hide();
		$(this).css({"box-shadow":"0px 0px 0px transparent"});
		$("#top").css({"transform":"rotateX(180deg)","top":"15px","height":"50px"});
	});

	$(".quit").mouseover(function(){
		locationT=location.href;
	});
	$(".quit").click(function(){
		$(".center").delay(1100).fadeOut(0);
		$("#bookshelf_disabler").delay(1450).fadeOut(0);
		$("#Open_magazine_allDisabler").delay(150).fadeOut(600);
		$("#Magalat").removeClass("blur_test");
		$("#TableTop").delay(400).fadeIn(500);

		$("#top").css({"transform":"rotateX(0deg)","top":"0px","height":"35px"});
		$("#TableTop").delay(200).fadeIn(200);
		LocaLength=locationT.length;
		LocaJamp=locationT.search("#samples")+17;
		MagazineNumUrl=locationT.substring(LocaJamp,LocaLength);
		$(".thumb"+MagazineNumUrl).css({"box-shadow":"-7px 2px 5px -6px black"});
		$(".thumb"+MagazineNumUrl).prev(".shadow_div").delay(800).fadeIn();

	setTimeout(function(){
		$('.splash').zoom('zoomOut');
		$(".zoomOut").hide();
	},1300);

	});

	w = $(window).width();
	h = $(window).height();
	$("#Magalat").css({"width":w,"height":h});

	$(window).resize(function () {
		w = $(window).width();
		h = $(window).height();
		$("#Magalat").css({"width":w,"height":h});
	});
});