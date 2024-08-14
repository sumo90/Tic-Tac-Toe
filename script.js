var counter = 0;
var turn = "X";

function updateTurn() {
  counter++;
  turn = counter % 2 === 0 ? "X" : "O";
}

function resetGame() {
  // Resets values
  document.getElementById("r1c1").innerText = "";
  document.getElementById("r1c2").innerText = "";
  document.getElementById("r1c3").innerText = "";
  document.getElementById("r2c1").innerText = "";
  document.getElementById("r2c2").innerText = "";
  document.getElementById("r2c3").innerText = "";
  document.getElementById("r3c1").innerText = "";
  document.getElementById("r3c2").innerText = "";
  document.getElementById("r3c3").innerText = "";
  //reset colors
  document.getElementById("r1c1").style.color = "black";
  document.getElementById("r1c2").style.color = "black";
  document.getElementById("r1c3").style.color = "black";
  document.getElementById("r2c1").style.color = "black";
  document.getElementById("r2c2").style.color = "black";
  document.getElementById("r2c3").style.color = "black";
  document.getElementById("r3c1").style.color = "black";
  document.getElementById("r3c2").style.color = "black";
  document.getElementById("r3c3").style.color = "black";

  // Reset the turn and counter
  counter = 0;
  turn = "X";
}

function isDraw() {
  var r1c1 = document.getElementById("r1c1").innerText;
  var r1c2 = document.getElementById("r1c2").innerText;
  var r1c3 = document.getElementById("r1c3").innerText;
  var r2c1 = document.getElementById("r2c1").innerText;
  var r2c2 = document.getElementById("r2c2").innerText;
  var r2c3 = document.getElementById("r2c3").innerText;
  var r3c1 = document.getElementById("r3c1").innerText;
  var r3c2 = document.getElementById("r3c2").innerText;
  var r3c3 = document.getElementById("r3c3").innerText;

  if (
    r1c1 !== "" &&
    r1c2 !== "" &&
    r1c3 !== "" &&
    r2c1 !== "" &&
    r2c2 !== "" &&
    r2c3 !== "" &&
    r3c1 !== "" &&
    r3c2 !== "" &&
    r3c3 !== "" &&
    !gameCheck() // Ensuring no winner exists
  ) {
    playMusicDraw();
    setTimeout(() => {
      document.getElementById("drawmsg").style.display = "none";
    }, 3000);
    setTimeout(() => {
      document.getElementById("drawmsg").style.display = "block";
      resetGame();
    }, 500);
  }
}

function gameCheck() {
  var r1c1 = document.getElementById("r1c1").innerText;
  var r1c2 = document.getElementById("r1c2").innerText;
  var r1c3 = document.getElementById("r1c3").innerText;
  var r2c1 = document.getElementById("r2c1").innerText;
  var r2c2 = document.getElementById("r2c2").innerText;
  var r2c3 = document.getElementById("r2c3").innerText;
  var r3c1 = document.getElementById("r3c1").innerText;
  var r3c2 = document.getElementById("r3c2").innerText;
  var r3c3 = document.getElementById("r3c3").innerText;

  var game = false;

  // Horizontal check
  if (
    (r1c1 === "X" && r1c2 === "X" && r1c3 === "X") ||
    (r1c1 === "O" && r1c2 === "O" && r1c3 === "O")
  ) {
    document.getElementById("r1c1").style.color = "green";
    document.getElementById("r1c2").style.color = "green";
    document.getElementById("r1c3").style.color = "green";

    game = true;
  } else if (
    (r2c1 === "X" && r2c2 === "X" && r2c3 === "X") ||
    (r2c1 === "O" && r2c2 === "O" && r2c3 === "O")
  ) {
    document.getElementById("r2c1").style.color = "green";
    document.getElementById("r2c2").style.color = "green";
    document.getElementById("r2c3").style.color = "green";
    game = true;
  } else if (
    (r3c1 === "X" && r3c2 === "X" && r3c3 === "X") ||
    (r3c1 === "O" && r3c2 === "O" && r3c3 === "O")
  ) {
    document.getElementById("r3c1").style.color = "green";
    document.getElementById("r3c2").style.color = "green";
    document.getElementById("r3c3").style.color = "green";
    game = true;
  }
  // Vertical check
  else if (
    (r1c1 === "X" && r2c1 === "X" && r3c1 === "X") ||
    (r1c1 === "O" && r2c1 === "O" && r3c1 === "O")
  ) {
    document.getElementById("r1c1").style.color = "green";
    document.getElementById("r2c1").style.color = "green";
    document.getElementById("r3c1").style.color = "green";
    game = true;
  } else if (
    (r1c2 === "X" && r2c2 === "X" && r3c2 === "X") ||
    (r1c2 === "O" && r2c2 === "O" && r3c2 === "O")
  ) {
    document.getElementById("r1c2").style.color = "green";
    document.getElementById("r2c2").style.color = "green";
    document.getElementById("r3c2").style.color = "green";
    game = true;
  } else if (
    (r1c3 === "X" && r2c3 === "X" && r3c3 === "X") ||
    (r1c3 === "O" && r2c3 === "O" && r3c3 === "O")
  ) {
    document.getElementById("r1c3").style.color = "green";
    document.getElementById("r2c3").style.color = "green";
    document.getElementById("r3c3").style.color = "green";
    game = true;
  }
  // Diagonal check
  else if (
    (r1c1 === "X" && r2c2 === "X" && r3c3 === "X") ||
    (r1c1 === "O" && r2c2 === "O" && r3c3 === "O")
  ) {
    document.getElementById("r1c1").style.color = "green";
    document.getElementById("r2c2").style.color = "green";
    document.getElementById("r3c3").style.color = "green";
    game = true;
  } else if (
    (r1c3 === "X" && r2c2 === "X" && r3c1 === "X") ||
    (r1c3 === "O" && r2c2 === "O" && r3c1 === "O")
  ) {
    document.getElementById("r1c3").style.color = "green";
    document.getElementById("r2c2").style.color = "green";
    document.getElementById("r3c1").style.color = "green";
    game = true;
  }

  if (game) {
    playMusic();
    setTimeout(() => {
      resetGame();
    }, 2000);
    //confetti start
    setTimeout(() => {
      var count = 200;
      var defaults = {
        origin: { y: 0.7 },
      };

      function fire(particleRatio, opts) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        });
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    }, 190);

    //conffetti end
    return true;
  } else {
    return false;
  }
}

function handleClick(cellId) {
  var cell = document.getElementById(cellId);

  if (cell.innerText === "") {
    cell.innerText = turn;
    isDraw();
    gameCheck();
    updateTurn();
  }
}

document
  .getElementById("r1c1")
  .addEventListener("click", () => handleClick("r1c1"));
document
  .getElementById("r1c2")
  .addEventListener("click", () => handleClick("r1c2"));
document
  .getElementById("r1c3")
  .addEventListener("click", () => handleClick("r1c3"));
document
  .getElementById("r2c1")
  .addEventListener("click", () => handleClick("r2c1"));
document
  .getElementById("r2c2")
  .addEventListener("click", () => handleClick("r2c2"));
document
  .getElementById("r2c3")
  .addEventListener("click", () => handleClick("r2c3"));
document
  .getElementById("r3c1")
  .addEventListener("click", () => handleClick("r3c1"));
document
  .getElementById("r3c2")
  .addEventListener("click", () => handleClick("r3c2"));
document
  .getElementById("r3c3")
  .addEventListener("click", () => handleClick("r3c3"));

//music
function playMusic() {
  let audio = new Audio("assets/confetti1.mp3");
  audio.play();
}
function playMusicDraw() {
  let audio = new Audio("assets/draw.mp3");
  audio.play();
}
