$(function time(){
	document.getElementById("time").innerHTML=(moment().format('MMMM Do YYYY, h:mm:ss a'));
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
			for (var x = 0; x<5; x++) {
			$("#news").append("<li>"+response.results[x].title+"</li>")
			}
		}
	})

})
$(function weather(){
	$.ajax({
		method: "GET",
		url: "https://api.darksky.net/forecast/8efbb34802b179acb15193d5ec352fd2/40.712784,-74.005941/?exclude=[hourly,minutely,daily]",
		success:function(response){	
			//$("#weather").append("<li>"+response.currently.summary+"</li>");
			$("#weather").append("<canvas id='icon1' width="+64+" height="+64+"></canvas>");
			var skycons = new Skycons({"color": "white"});
			console.log(response.currently.icon)
			skycons.add("icon1", response.currently.icon);
			// if you're using the Forecast API, you can also supply
			// strings: "partly-cloudy-day" or "rain".

  			skycons.play();
			$("#weather").append("<li>"+response.currently.temperature+" &#x02109</li>");
			$("#weather").append("<li>Wind Speed: "+response.currently.windSpeed+"</li>");
			$("#weather").append("<li>Chance of Precipitation: "+response.currently.precipProbability+"%</li>");
		}
	})
})