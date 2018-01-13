//When a user clicks on the stop button turn on the red light


function myFunction() {
    document.body.style.backgroundColor = "#f3f3f3";
    var city = document.getElementById("city-type").value;
    city = city.toLowerCase();
    console.log(city );
    if(city === "austin" || city === "atx" )
    {
    	document.body.style.backgroundImage = "url('images/austin.jpg')";
	}
	else if(city === "new york" || city === "new york city" || city === "nyc"){
    	document.body.style.backgroundImage = "url('images/nyc.jpg')";
	}
	else if(city === "san francisco" || city === "sf" || city === "bay area"){
    	document.body.style.backgroundImage = "url('images/sf.jpg')";
	}
	else if(city === "los angeles" || city === "la" || city === "lax"){
    	document.body.style.backgroundImage = "url('images/la.jpg')";
	}
	else if(city === "sydney" || city === "syd"){
    	document.body.style.backgroundImage = "url('images/sydney.jpg')";
	}
}



//Bonus: when a light is illuminated it should turn the other lights off