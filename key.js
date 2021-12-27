document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const options = {
        eventType: 'keydown',
        keystrokeDelay: 400
    };

    keyMapper([updateBackground, updateUI], options);
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

function updateBackground(keySequence) {
    const validKeys = keySequence.every(key => !isNaN(parseInt(key)) || key.toLowerCase() !== key.toUpperCase());
    if (!validKeys) return;
}

function updateUI(keySequence) {
    const userInput = keySequence.join('').toLowerCase();
    const keySequences = {
        'idfa': 'All Weapons + Ammo',
        'idkfa': 'All Weapons + Ammo + Keys',
        'idbeholds': 'Beserk Pack',
        'idclev31': 'Bonus Level'
    };
    if (userInput === 'test1') {
      var element = document.getElementById("errl");
      element.classList.add("errl");
            var audio = document.getElementById("errors");
            audio.play();
            audio.volume = 0.2;
  }
    const userInputDisplay = document.querySelector('#user_input');
    userInputDisplay.textContent = userInput;

    const cheatMessage = document.querySelector('#cheat_message');
    cheatMessage.textContent = keySequences[userInput] || 'Nothing';
}
