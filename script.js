const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// /change the postion of no button
// change the position of no button (desktop + mobile friendly)
function moveNoBtn() {
  const containerRect = questionContainer.getBoundingClientRect();

  const newX = Math.floor(
    Math.random() * (containerRect.width - noBtn.offsetWidth)
  );

  const newY = Math.floor(
    Math.random() * (containerRect.height - noBtn.offsetHeight)
  );

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// desktop hover
noBtn.addEventListener("mouseover", moveNoBtn);

// mobile touch (prevents clicking)
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoBtn();
});

// optional: better support for modern devices
noBtn.addEventListener("pointerenter", moveNoBtn);
// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
