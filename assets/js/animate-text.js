
document.addEventListener("DOMContentLoaded", function () {
  let count = -1;
  const initText = " I love";
  const wordsArray = ["RIDE", "COFFEE", "CODE", "MUSIC"];
  const wordElement = document.getElementById("word");

  wordElement.textContent = initText;

  setTimeout(() => {
    setInterval(() => {
      count++;
      wordElement.style.opacity = 0;
      setTimeout(() => {
        wordElement.textContent = wordsArray[count % wordsArray.length];
        wordElement.style.opacity = 1;
      }, 400);
    }, 1500);
  }, 2000);
});