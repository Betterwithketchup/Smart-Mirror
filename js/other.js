$(function thing(){
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 200, 100);
	ctx.fillStyle = "black";
	ctx.font = "13px Arial";
	ctx.strokeText(moment().format('MMMM Do YYYY, h:mm:ss a'),10,50);
	setTimeout(function(){

	thing();
	}, 1000);
	

})