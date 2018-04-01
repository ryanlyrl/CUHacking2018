var recognizing = false;
var ignore_onend;
var start_timestamp;
var final_transcript = '';
var commands = new Map();

commands.set("click",clickButton);
commands.set("scroll",scroll);
commands.set("switch",switchTab);
commands.set("open", openTab);
commands.set("close",closeTab);
commands.set("maximize", maximize)
commands.set("back", prevPage);
if (!('webkitSpeechRecognition' in window)) {
  //upgrade();
} else {
  start_button.style.display = 'inline-block';
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onstart = function() {
    recognizing = true;
    start_img.src = 'mic-animate.gif';
  };
  recognition.onend = function() { //stops the recording
    recognizing = false;
    if (ignore_onend) {
      return;
    }
    start_img.src = 'mic.gif';
    /*if (!final_transcript) {
      return;
    }*/
    showInfo('');
  };
  recognition.onresult = function(event) { //add to string
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if(event.results[i].isFinal){
        final_transcript += event.results[i][0].transcript;
      }
      else{
        interim_transcript += event.results[i][0].transcript;
      } 
    }
    final_span.innerHTML = linebreak(final_transcript);
    interim_span.innerHTML = linebreak(interim_transcript); //outputs
    doAction(final_transcript);
  };
}

var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}
function startButton(event) {
  if (recognizing) {
    recognition.stop();
    showInfo('info_allow');
    return;
  }
  recognition.start();
  ignore_onend = false;
  interim_span.innerHTML = '';
  final_span.innerHTML = '';
  start_img.src = 'mic-slash.gif';

  showInfo('info_allow');
  start_timestamp = event.timeStamp;
}
function showInfo(s) {
  if (s) {
    for (var child = info.firstChild; child; child = child.nextSibling) {
      if (child.style) {
        child.style.display = child.id == s ? 'inline' : 'none';
      }
    }
    info.style.visibility = 'visible';
  } else {
    info.style.visibility = 'hidden';
  }
}

function doAction(s){
  var temp = s.split(" ")

  for(var i=0; i< temp.length; i++){
    console.log(temp);
    if(commands.get(temp[i]) != undefined){
      console.log("hi");
      commands.get(temp[i])();
        return;
    }
  }
}