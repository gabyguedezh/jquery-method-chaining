$(document).ready(function() {

	// $("#button1").mouseenter(function(){
	// 	$("#button1").removeClass("makeRed").addClass("border");
	// });
	// $("#button1").mouseleave(function(){
	// 	$("#button1").removeClass("border").addClass("makeRed");
	// });
	
	// // $("#button1").click(function(){
	// //  $("#para1").slideToggle("slow");
	// // });
	
	// // 	$("#button2").click(function(){
	// //  $("#para2").hide().show().fadeIn().fadeOut();
	// // });
	
	// // The above code was commented because it doesn't fully sovle the challenge. The paragraph dissapears but then comes back
	
	// //hides/shows  paragraphs when either button is clicked
 // 	$("button").click(function(){
 // 	 $("p").hide(2000).show(2000);
 // 	});
 // 		//fadeIn and fadoeOut on paragraphs when either button is clicked
 // 	$("button").click(function(){
 // 	 $("p").fadeIn().fadeOut();
 // 	});
 	
 	//revoves claas makeRed, adds class makeBorder on mouseenter
 	$("button").mouseenter(function(){
 	 $(this).removeClass("makeRed").addClass("makeBorder");

 	});
 	//reverses above on mouseleave
 	$("button").mouseleave(function(){
 	 $("button").removeClass("makeBorder").addClass("makeRed");

 	});
 	//toggles paragraphs when either button is clicked
 	$("button").click(function(){
 	 $("p").slideToggle(2000);
 	});

 	//hides/shows  paragraphs when either button is clicked
 	$("button").click(function(){
 	 $("p").hide(2000).show(2000);
 	});
 		//fadeIn and fadoeOut on paragraphs when either button is clicked
 	$("button").click(function(){
 	 $("p").fadeIn().fadeOut();
 	});
}); 
