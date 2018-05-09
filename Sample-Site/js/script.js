$(document).ready(function() {

	$("#button1").mouseenter(function(){
		$("#button1").removeClass("makeRed").addClass("border");
	});
	$("#button1").mouseleave(function(){
		$("#button1").removeClass("border").addClass("makeRed");
	});
	
	$("#button1").click(function(){
	 $("#para1").slideToggle("slow");
	});
	
		$("#button2").click(function(){
	 $("#para2").hide().show().fadeIn().fadeOut();
	});
}); 
