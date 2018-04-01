function clickButton(buttonText, index){
	var matches = [];
	$("a").each(function() {	
		if($(this).text().toLowerCase().includes(buttonText.toLowerCase())){
			//console.log($(this).text() + " clicked.");
			matches.push($(this));
			//$(this)["0"].click();
			//return;
		}
	});

	$("button").each(function(){
		if($(this).text().toLowerCase().includes(buttonText.toLowerCase())){
			//$(this)["0"].click();
			matches.push($(this));
		}
	});

	matches[index]["0"].click();
	//}
	// for(i = 0;i < matches.length;i++){
	// 	matches[i]["0"].click();
	// }
}

function buttonPress(num){
	console.log(num + " adsa pressed!");
}

function scroll(direction="down"){ //1 down, -1 up
	dirInt = direction == "down" ? 1 : -1;
	console.log(dirInt);
	window.scrollBy(0, window.innerHeight * dirInt);
}

function goTo(text){
	if(text.includes(".")){
		window.location.href = "http://" + text;
	} else {
		text += "";
		text = text.replace(/,/g, " ");
		window.location.href = "https://www.google.com/search?q=" + text;
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
