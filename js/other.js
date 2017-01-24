var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "13px Arial";
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 200, 100);
ctx.fillRect(210, 110, 410, 210);

$(function time(){
	ctx.clearRect(0,0,200,100)
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 200, 100);
	ctx.fillStyle = "black";
	
	ctx.fillText(moment().format('MMMM Do YYYY, h:mm:ss a'),10,50);
	setTimeout(function(){
	time();
	}, 1000);
})
$(function news(){
	var url = "https://api.nytimes.com/svc/topstories/v2/home.json"
	url += '?' + $.param({'api-key': "d7801c3a196147afba0f0c6cba5ced0d"});
	$.ajax({
		method: "GET",
		url: url,
		success:function(response){
			console.log(response)
			ctx.fillStyle = "black";
			for (var x = 0; x<5; x++) {
			$("#news").append("<li>"+response.results[x].title+"</li>")
			}
		}
	})

})
$(function weather(){
	$.ajax({
		method: "GET",
		url: "https://api.darksky.net/forecast/8efbb34802b179acb15193d5ec352fd2/40.712784,-74.005941",
		success:function(response){
			$("#weather").append("<li>Wind Speed: "+response.currently.windSpeed+"</li>");
			$("#weather").append("<li>"+response.currently.summary+"</li>");
			$("#weather").append("<li>"+response.currently.temperature+" F</li>");
			$("#weather").append("<li>Humidity: "+response.currently.humidity+"</li>");
		}
	})
})