$('document').ready(function(){
$("#dib").css({"transform":"scale(0,0)"});
$("#dib").fadeOut(0);

var myVar = setInterval(myTimer, 80000);

function myTimer() {
	$("#dib").css({"transform":"scale(1,1)"});
	$("#dib").fadeIn(0).fadeOut(50).css({"opacity":"0.8"},300).fadeIn(50).fadeOut(50).fadeIn(50).animate({"opacity":"0.5"},300).fadeOut(200);
	setTimeout(function(){$("#dib").css({"transform":"scale(0,0)"});},1000);
}
	
});