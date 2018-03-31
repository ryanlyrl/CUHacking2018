function clickButton(buttonText){
	$("a").each(function() {
		if($(this).html().toLowerCase() == buttonText.toLowerCase){
			$(this).click();
		}
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

function prevPage(){
	window.history.back();
}

function nextPage(){
	window.history.forward();
}

function enterText(field, text){
	$("input").each(function(){
		var foundField;
		$.each(this.attrbutes, function(){
			if(this.value.toLowerCase().includes(field.toLowerCase)){
				foundField = this;
				return false;
			}
		});
		if(foundField){
			foundField.val(text);
		}
	});
}