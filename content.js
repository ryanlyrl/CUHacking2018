document.getElementById('start_button').addEventListener('click', 
	chrome.tabs.executeScript(null, { file: "jquery-3.3.1.min.js"}, function(){
	chrome.tabs.executeScript(null, { file: "actions.js" }, function(){
		chrome.tabs.executeScript(null, {file: "microphone.js"});
	});
})
);