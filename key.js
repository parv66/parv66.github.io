document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const options = {
        eventType: 'keydown',
        keystrokeDelay: 400
    };

    keyMapper([updateUI], options);
});

function keyMapper(callbackList, options) {
    const delay = hasProperty('keystrokeDelay', options) && options.keystrokeDelay >= 300 && options.keystrokeDelay;
    const keystrokeDelay = delay || 10000;
    const eventType = hasProperty('eventType', options) && options.eventType || 'keydown';

    let state = {
        buffer: [],
        lastKeyTime: Date.now()
    };

    document.addEventListener(eventType, event => {
        const key = event.key;
        const currentTime = Date.now();
        let buffer = [];

        if (currentTime - state.lastKeyTime > keystrokeDelay) {
            buffer = [key];
        } else {
            buffer = [...state.buffer, key];
        }

        state = {buffer: buffer, lastKeyTime: currentTime};

        callbackList.forEach(callback => callback(buffer));
    });

    function hasProperty(property, object) {
        return object && object.hasOwnProperty(property);
    }
}
function updateUI(keySequence) {
    const userInput = keySequence.join('').toLowerCase();
    if (userInput === 'l') {
      var element = document.getElementById("errl");
      element.classList.add("errl");
            var audio = document.getElementById("errors");
            audio.play();
            audio.volume = 0.2;
        setTimeout(function() { enablemsg(); }, 5000);
  }
}
function enablemsg(){
            var img = document.createElement('img');
            img.src = 'https://parv66.tk/parv66.uwu.jpg';
            img.id = 'hiddenimage';
            document.getElementById('body').appendChild(img);
            var element = document.getElementById("hiddenimage");
            element.classList.add("himg");
}
