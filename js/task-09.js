const refs = {
  colorText: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};

refs.button.addEventListener("click", onButtonClick);

function onButtonClick () {
  let sendColor = getRandomHexColor();
  refs.body.style.backgroundColor = sendColor;
  refs.colorText.textContent = sendColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
