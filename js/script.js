$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	
	$("#first_button").mouseenter(function(){
		$("#first_button").removeClass("makeRed").addClass("border");
	});
	$("#first_button").mouseleave(function(){
		$("#first_button").removeClass("border").addClass("makeRed");
	});
	$("#second_button").mouseenter(function(){
		$("#second_button").removeClass("makeRed").addClass("border");
	});
	$("#second_button").mouseleave(function(){
		$("#second_button").removeClass("border").addClass("makeRed");
	});
	$("#third_button").mouseenter(function(){
		$("#third_button").removeClass("makeRed").addClass("border");
	});
	$("#third_button").mouseleave(function(){
		$("#third_button").removeClass("border").addClass("makeRed");
	});
	$("#fourth_button").mouseenter(function(){
		$("#fourth_button").removeClass("makeRed").addClass("border");
	});
	$("#fourth_button").mouseleave(function(){
		$("#fourth_button").removeClass("border").addClass("makeRed");
	});
	$("#fifth_button").mouseenter(function(){
		$("#fifth_button").removeClass("makeRed").addClass("border");
	});
	$("#fifth_button").mouseleave(function(){
		$("#fifth_button").removeClass("border").addClass("makeRed");
	});
	$("#sixth_button").mouseenter(function(){
		$("#sixth_button").removeClass("makeRed").addClass("border");
	});
	$("#sixth_button").mouseleave(function(){
		$("#sixth_button").removeClass("border").addClass("makeRed");
	});	
	
	
	$("#first_button").click(function(){
		$("#first_para").slideToggle("slow");
	});
	$("#second_button").click(function(){
		$("#second_para").slideToggle("slow");
	});
	$("#third_button").click(function(){
		$("#third_para").slideToggle("slow");
	});
	$("#fourth_button").click(function(){
		$("#fourth_para").slideToggle("slow");
	});
	$("#fifth_button").click(function(){
		$("#fifth_para").slideToggle("slow");
	});
	$("#sixth_button").click(function(){
		$("#sixth_para").slideToggle("slow");
	});	
}); 
