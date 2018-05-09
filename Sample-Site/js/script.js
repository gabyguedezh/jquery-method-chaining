$(document).ready(function() {

	$("#button1").mouseenter(function(){
		$("#button1").removeClass("makeRed").addClass("border");
	});
	$("#button1").mouseleave(function(){
		$("#button1").removeClass("border").addClass("makeRed");
	});
}); 
