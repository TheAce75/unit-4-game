console.log("js for justice game connected")

	var wins = 0;
	var losses = 0;

$(".btn-lg").on("click", function() {
	var batNum = 0;
	var superNum = 0;
	var wonderNum = 0;
	var flashNum = 0;

	
	var targetNumber = Math.floor(Math.random() * 120) + 19;
	console.log("The number to match is " + targetNumber);
	$("#targetNumber").html(targetNumber);
	$("#winCount").html(wins);
	$("#lossCount").html(losses);
	$("#alert").empty();

	var counter = 0;
	$("#yourScore").html(counter);

	batNum = Math.floor(Math.random() * 12) + 1;
	console.log("The bat random number is " + batNum);
	var bat = $("#bat");
	bat.attr("data-justicevalue", batNum);

	superNum = Math.floor(Math.random() * 12) + 1;
	console.log("The super random number is " + superNum);
	var superNum = $("#super");
	super.attr("data-justicevalue", superNum);

	wonderNum = Math.floor(Math.random() * 12) + 1;
	console.log("The wonder random number is " + wonderNum);
	var wonder = $("#wonder");
	wonder.attr("data-justicevalue", wonderNum);

	flashNum = Math.floor(Math.random() * 12) + 1;
	console.log("The flash random number is " + flashNum);
	var flash = $("#flash");
	flash.attr("data-justicevalue", flashNum);


	$(".img-thumbnail").on("click", function() {
		var justiceValue = ($(this).attr("data-justicevalue"));
    	justiceValue = parseInt(justiceValue);
    	counter += justiceValue;
    	$("#yourScore").html(counter);
    	if (counter === targetNumber) {
    		$("#alert").append("<div class='alert alert-success' role='alert'>Well Done! You won, select the Save the Day Game button to start the next game.</div>");
      		wins++;
      		counter = 0;
      		$("#winCount").html(wins);
    	}
    	else if (counter > targetNumber) {
      		$("#alert").append("<div class='alert alert-danger' role='alert'>You lost, select the Save the Day button to start the next game. Try Again!</div>");
      		losses++;
      		counter = 0;
      		$("#lossCount").html(losses);
    	}
    });			
});

var wins = 0;
var losses = 0;

$(".btn-lg").on("click", function() {
var matchNum = Math.floor(Math.random() * 120) + 19;
console.log("The number to match is " + matchNum);
$("#ranNum").html(matchNum);
var batNum = Math.floor(Math.random() * 12) + 1;
console.log("The number for bat is " + batNum);
var superNum = Math.floor(Math.random() * 12) + 1;
console.log("The number for super is " + superNum);
var wonderNum = Math.floor(Math.random() * 12) + 1;
console.log("The number for wonder is " + wonderNum);
var flashNum = Math.floor(Math.random() * 12) + 1;
console.log("The number for flash is " + flashNum);
var yourScore = 0;
	 $("#bat").on("click", function() {
		 var latestClick = yourScore+batNum; 
		 console.log("The number for the latestClick variable is " + latestClick);
		 $("#yourScore").html(latestClick);
	 });

	 $("#super").on("click", function() {
		 var latestClick = yourScore+superNum; 
		 console.log("The number for the latestClick variable is " + latestClick);
		 $("#yourScore").html(latestClick);
	 });		

	 $("#wonder").on("click", function() {
		 var latestClick = yourScore+wonderNum; 
		 console.log("The number for the latestClick variable is " + latestClick);
		 $("#yourScore").html(latestClick);
	 });

	$("#flash").on("click", function() {
		 var latestClick = yourScore+flashNum; 
		 console.log("The number for the latestClick variable is " + latestClick);
		 $("#yourScore").html(latestClick);
	 });
		
		
			$("#winCount").html(wins);
			$("#lossCount").html(losses);
});
