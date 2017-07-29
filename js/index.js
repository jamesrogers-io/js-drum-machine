window.addEventListener('keydown', function(event) { // This will watch for Key Strokes
  const myAudio = document.querySelector(`audio[data-key="${event.keyCode}"]`); // the [] is an *Attribute Selector*
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  const greenLight = document.getElementById('green-light');
  const redLight = document.getElementById('red-light');

  if(!myAudio) return; // stop the function if no audio file attached to that key

  myAudio.currentTime = 0; // audio plays from the beginning each time the function runs
  myAudio.play(); // play the src audio file found in 'const myAudio'
  key.classList.remove('z-depth-1'); // add a class to whatever HTML element has a matching keyCode
  greenLight.classList.add('green');
  redLight.innerHTML = `${key.title}`;
  console.log(event);
});

// Removes "playing" class when key up occurs
window.addEventListener('keyup', function(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  const greenLight = document.getElementById('green-light');
  const redLight = document.getElementById('red-light');

  key.classList.add('z-depth-1');
  greenLight.classList.remove('green');
  redLight.innerHTML = '';

});


// INDIVIDUAL PADS
const padOne = document.getElementById('pad-one');
const padTwo = document.getElementById('pad-two');
const padThree = document.getElementById('pad-three');
const padFour = document.getElementById('pad-foud');
const padFive = document.getElementById('pad-five');
const padSix = document.getElementById('pad-six');
const padSeven = document.getElementById('pad-seven');
const padEight = document.getElementById('pad-eight');
const padNine = document.getElementById('pad-nine');



// PAD 1: CLICK FUNCTION
const playPadOne = function() {
  const padOne = document.getElementById('pad-one');
  const wavOne = document.querySelector('audio[data-key="103"]');
  const greenLight = document.getElementById('green-light');

  greenLight.classList.add('green');
  padOne.classList.remove('z-depth-1');
  wavOne.currentTime = 0;
  wavOne.play();

  setTimeout(function() {
    greenLight.classList.remove('green');
    padOne.classList.add('z-depth-1');

  }, 100);
};
// PAD 2: CLICK FUNCTION
const playPadTwo = function() {
  const padTwo = document.getElementById('pad-two');
  const wavTwo = document.querySelector('audio[data-key="104"]');
  const greenLight = document.getElementById('green-light');

  greenLight.classList.add('green');
  padTwo.classList.remove('z-depth-1');
  wavTwo.currentTime = 0;
  wavTwo.play();

  setTimeout(function() {
    greenLight.classList.remove('green');
    padTwo.classList.add('z-depth-1');
  }, 100);
};
// PAD 3: CLICK FUNCTION
const playPadThree = function() {
  const padThree = document.getElementById('pad-three');
  const wavThree = document.querySelector('audio[data-key="105"]');
  const greenLight = document.getElementById('green-light');

  greenLight.classList.add('green');
  padThree.classList.remove('z-depth-1');
  wavThree.currentTime = 0;
  wavThree.play();

  setTimeout(function() {
    greenLight.classList.remove('green');
    padThree.classList.add('z-depth-1');
  }, 100);
};
// PAD 4: CLICK FUNCTION
const playPadFour = function() {
  const padFour = document.getElementById('pad-four');
  const wavFour = document.querySelector('audio[data-key="100"]');
  const greenLight = document.getElementById('green-light');

  greenLight.classList.add('green');
  padFour.classList.remove('z-depth-1');
  wavFour.currentTime = 0;
  wavFour.play();

  setTimeout(function() {
    greenLight.classList.remove('green');
    padFour.classList.add('z-depth-1');
  }, 100);
};
// PAD 5: CLICK FUNCTION
const playPadFive = function() {
  const padFive = document.getElementById('pad-five');
  const wavFive = document.querySelector('audio[data-key="101"]');
  const greenLight = document.getElementById('green-light');

  greenLight.classList.add('green');
  padFive.classList.remove('z-depth-1');
  wavFive.currentTime = 0;
  wavFive.play();

  setTimeout(function() {
    greenLight.classList.remove('green');
    padFive.classList.add('z-depth-1');
  }, 100);
};
// PAD 6: CLICK FUNCTION
const playPadSix = function() {
  const padSix = document.getElementById('pad-six');
  const wavSix = document.querySelector('audio[data-key="102"]');
  const greenLight = document.getElementById('green-light');

  greenLight.classList.add('green');
  padSix.classList.remove('z-depth-1');
  wavSix.currentTime = 0;
  wavSix.play();

  setTimeout(function() {
    greenLight.classList.remove('green');
    padSix.classList.add('z-depth-1');
  }, 100);
};
// PAD 7: CLICK FUNCTION
const playPadSeven = function() {
  const padSeven = document.getElementById('pad-seven');
  const wavSeven = document.querySelector('audio[data-key="97"]');
  const greenLight = document.getElementById('green-light');

  greenLight.classList.add('green');
  padSeven.classList.remove('z-depth-1');
  wavSeven.currentTime = 0;
  wavSeven.play();

  setTimeout(function() {
    greenLight.classList.remove('green');
    padSeven.classList.add('z-depth-1');
  }, 100);
};
// PAD 8: CLICK FUNCTION
const playPadEight = function() {
  const padEight = document.getElementById('pad-eight');
  const wavEight = document.querySelector('audio[data-key="98"]');
  const greenLight = document.getElementById('green-light');

  greenLight.classList.add('green');
  padEight.classList.remove('z-depth-1');
  wavEight.currentTime = 0;
  wavEight.play();

  setTimeout(function() {
    greenLight.classList.remove('green');
    padEight.classList.add('z-depth-1');
  }, 100);
};
// PAD 9: CLICK FUNCTION
const playPadNine = function() {
  const padNine = document.getElementById('pad-nine');
  const wavNine = document.querySelector('audio[data-key="99"]');
  const greenLight = document.getElementById('green-light');

  greenLight.classList.add('green');
  padNine.classList.remove('z-depth-1');
  wavNine.currentTime = 0;
  wavNine.play();

  setTimeout(function() {
    greenLight.classList.remove('green');
    padNine.classList.add('z-depth-1');
  }, 100);
};




/* The Above Function Explained:
First, we access the full user's *window* and add an eventListener to watch for 'keydown'
strokes from the keyboard. when the 'keydown' occurs, it runs the function. The function
has a variable, or const, called myAudio, that is set to select all <audio> elements.
Now that you have the <audio> elements selected, you add an *Attribute Selector* that
will target the HTML attribute 'data-key'. Then, we set the value of 'data-key' to
the keyCode that the user selects when pressing the key on the keyboard. Since the
function has the 'event' parameter, it gets acces to the DOM events, which has a
property called keyCode. keyCode is a unique number that each key on a keyboard has.
The way that we set the 'data-key' HTML attribute equal to whatever key the user is
pressing, we use an ES6 Template String to set the value of 'data-key' to whatever
keyCode value the user selects as they press the keyboard. */
