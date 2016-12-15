$("#mediaMenu").on("change", function(){
	var selectedOption = $("#mediaMenu option:selected").html().toLowerCase();

	$("td").css("background-color", "#FFF");
	$("td").css("color", "#000")
	$("td").children().css("background-color", "#FFF");
	$("." + selectedOption).css("background-color", "#4CAF50");
	$("." + selectedOption).children().css("background-color", "#4CAF50");
	$("." + selectedOption).css("color", "#FFF")
});

$("#programMenu").on("change", function(){
	var selectedOption = $("#programMenu option:selected").html().toLowerCase();

	$("td").css("background-color", "#FFF");
	$("td").children().css("background-color", "#FFF");
	$("." + selectedOption).css("background-color", "#FFEB3B");
	$("." + selectedOption).children().css("background-color", "#FFEB3B");
});

