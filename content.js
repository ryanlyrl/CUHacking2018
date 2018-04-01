chrome.tabs.executeScript({ file: "jquery-3.3.1.min.js"}, function(){
	chrome.tabs.executeScript({ file: "actions.js" }, function(){
		chrome.tabs.executeScript({file: "microphone.js"});
	});
});