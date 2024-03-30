/*
  Gamelet: a starting point for writing games
  Author: Chris Minnick
  Version: 1.0

  Instructions:
  Include gamelet.js in an HTML document containing
  an element with an id of 'ball'.
  The script will detect when the left or right arrow
  key is pressed and will move the ball element
  accordingly.
 */

const ball = document.getElementById("ball"); //get the ball

document.addEventListener("keydown", handleKeyPress); // liaten for keys
let position = 0; //set inital position

/* handleKeyPress
 responds to certain key presses by updating position.*/
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 20;
  }
  if (e.code === "ArrowRight") {
    position = position + 20;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); //update the ball position
}

/*refresh
 changes the position of the ball*/
function refresh() {
  ball.style.left = position + "px";
}
