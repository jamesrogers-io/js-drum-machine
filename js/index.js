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
  redLight.innerHTML = `${key.id}`;
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
