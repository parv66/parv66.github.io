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
    const keystrokeDelay = delay || 1000;
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
    const container = document.querySelector('#background');
    container.style.backgroundImage = `url(images/${keySequence.join('')}.jpg)`;
}

function updateUI(keySequence) {
    const userInput = keySequence.join('').toLowerCase();
    const keySequences = {
        'ok': 'OK IS WORKING',
        'test1': 'yep test1 seems good',
        'test2': 'O TSST2 IS OWKRINF',
        'test3': 'OAAHHHHHHH'
    };
    const userInputDisplay = document.querySelector('#user_input');
    userInputDisplay.textContent = userInput;

    const cheatMessage = document.querySelector('#cheat_message');
    cheatMessage.textContent = keySequences[userInput] || 'Nothing';
}
