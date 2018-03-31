function clickButton(buttonText){
	$(document).ready(function(){
		console.log("jQuery Extension running...");
	});
}

function scroll(direction){ //1 down, -1 up
	window.scrollBy(window.innerHeight * direction);
}

function goTo(text){
	if(text.includes(".")){
		window.location.href = "http://" + text;
	} else {
		window.location.href = "https://www.google.com/search?q=" + query;
	}
}

function browserForwardBackwrards

function enterText(text, field){
	
}