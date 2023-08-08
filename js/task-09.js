const refs = {
  colorText: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};

refs.button.addEventListener("click", onButtonClick);

function onButtonClick () {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorText.textContent = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
