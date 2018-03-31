var recognizing = false;
var ignore_onend;
var start_timestamp;
if (!('webkitSpeechRecognition' in window)) {
  upgrade();
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
    if (!final_transcript) {
      return;
    }
    showInfo('');
  };
  recognition.onresult = function(event) { //add to string
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        interim_transcript += event.results[i][0].transcript;
    }
    interim_span.innerHTML = linebreak(interim_transcript); //outputs
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