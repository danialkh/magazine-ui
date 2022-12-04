$('document').ready(function(){
	min_range=parseInt($("#select_min").val());
	now=parseInt($("#select_now").val());
	$('.box-sal').hide();
	$('#center_box').show();

	$('.box-sal').click(function(){
		var selected=parseInt($(this).html());
 		if(min_range<=selected && selected<=now){
			
			$('#top2_box').html(selected+2);
			$('#top1_box').html(selected+1);
			$('#center_box').html(selected);
			$('#bottom2_box').html(selected-2);
			$('#bottom1_box').html(selected-1);
		
			if(min_range<=selected+2 && selected+2<=now){$('#top2_box').removeClass("disable_box").addClass("avalibale_box")}
			else{$('#top2_box').removeClass("avalibale_box").addClass("disable_box")}
		
			if(min_range<=selected+1 && selected+1<=now){$('#top1_box').removeClass("disable_box").addClass("avalibale_box")}
			else{$('#top1_box').removeClass("avalibale_box").addClass("disable_box")}
		
			if(min_range<=selected-2 && selected-2<=now){$('#bottom2_box').removeClass("disable_box").addClass("avalibale_box")}
			else{$('#bottom2_box').removeClass("avalibale_box").addClass("disable_box")}
			
			if(min_range<=selected-1 && selected-1<=now){$('#bottom1_box').removeClass("disable_box").addClass("avalibale_box")}
			else{$('#bottom1_box').removeClass("avalibale_box").addClass("disable_box")}


			Zarib=selected-now;
			MTOmove=Zarib*446+'px';

			if($(".shelf").css("top")==MTOmove){}
			else{$(".shelf").fadeOut(400).animate({"top":MTOmove},0).fadeIn(500);$("#select_bottomDiv").animate({"height":"50px"},0);}
			
			$('.box-sal').hide();
			$('#center_box').show();
			$('#select_topDiv').css({"top":"-5px"});
			$('#select_bottomDiv').css({"bottom":"-2px"});
			$("#select_bottomDiv").animate({"height":"37px"},0);
		}
	});
	
	$('#center_box').click(function(){		
		TopSelect=-parseInt($('#select_topDiv').css("top"));
		if(TopSelect==5){
			$("#select_bottomDiv").animate({"height":"50px"},0);
			$('.box-sal').show();
			$('#center_box').show();
			$('#select_topDiv').css({"top":"-40px"});
			$('#select_bottomDiv').css({"bottom":"-40px"});
		}
	});
	
	$('#select_kolDiv').mouseleave(function(){
			$('.box-sal').hide();
			$('#center_box').show();
			$('#select_topDiv').css({"top":"-5px"});
			$('#select_bottomDiv').css({"bottom":"-2px"});
			$("#select_bottomDiv").animate({"height":"37px"},0);
	});
});