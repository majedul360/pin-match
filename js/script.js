// pin generate
function pinGenerate() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return pinGenerate();
  }
}

const pinGenerator = document.getElementById("pin-generater");
pinGenerator.addEventListener("click", () => {
  const inputField = document.getElementById("pin-generater-field");
  inputField.value = pinGenerate();
});

// keypad using event bubble
const keypad = document.getElementById("keypad");
keypad.addEventListener("click", (event) => {
  const number = event.target.innerText;
  const screen = document.getElementById("screen");
  if (isNaN(number)) {
    if (number == "C") {
      screen.value = "";
    }
  } else {
    screen.value += number;
  }
});

/* // keypad
const buttons = document.querySelectorAll(".button-common");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let screen = document.getElementById("screen");
    screen.value += button.innerText;
  });
});

// clear
document.querySelector(".button-clear").addEventListener("click", () => {
  document.getElementById("screen").value = "";
}); */
// matching
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
  const inputField = document.getElementById("pin-generater-field");
  const generateValue = parseInt(inputField.value);
  const screen = document.getElementById("screen");
  if (generateValue == screen.value) {
    document.getElementById("match").style.display = "block";
    document.getElementById("not-match").style.display = "none";
  } else {
    document.getElementById("not-match").style.display = "block";
    document.getElementById("match").style.display = "none";
  }
});
