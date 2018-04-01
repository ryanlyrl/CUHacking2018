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

function lengthButton (buttonText){
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
	return matches.length;

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
	console.log("Inputting");
	$("input").each(function(){
		//console.log("asdadwaf");
		$.each(this.attributes, function(i, attribute){
			//console.log("hello");
			//console.log(attribute.value);
			if(attribute.value.toLowerCase().includes(field.toLowerCase())){
				console.log($("input[name="+attribute.value+"]"));
				$("input["+attribute.name+"="+attribute.value+"]")["0"].value = text;
			}
		});
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
