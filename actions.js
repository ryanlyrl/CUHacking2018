function clickButton(buttonText){
	var matches = [];
	$("a").each(function() {
		if($(this).html().toLowerCase().includes(buttonText)){
			matches.append($(this));
		}
	});

	$("input").each(function(){
		if($(this).text().toLowerCase().includes(buttonText)){
			matches.append($(this));
		}
	});

	for(var i=0;i < matches.length;i++){ //TODO: highlight matches and let user choose?
		matches[i].click();
	}
}

function buttonPress(){
	console.log("pressed!");
}

function scroll(direction){ //1 down, -1 up
	window.scrollBy(0, window.innerHeight * direction);
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

function openTab(){
	chrome.tabs.create();
}

function closeTab(){
	chrome.tabs.remove(chrome.tabs.getCurrent().index);
}

function switchTab(){
	chrome.tabs.query({currentWindow: true, active: true}, function(tabsArray) {
    	if( tabsArray.length < 2 ) return;
    	chrome.tabs.query({index: (tabsArray[0].index+1)}, function(nextTabsArray){
        	if( nextTabsArray.length < 1 ) return;
        	chrome.tabs.update(nextTabsArray[0].id, {active: true})
    	});  
	});
}

function maximize(){
	window.resizeTo(screen.width, screen.height);
}