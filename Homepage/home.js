const form = document.querySelector('form');
const input = document.querySelector('#input');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputValue = input.value.trim();
  if (inputValue !== '') {
    const spookyText = document.createElement('p');
    spookyText.innerText = `${inputValue} I WILL IMPROVE THAT LATER! 👻`;
    document.body.appendChild(spookyText);
  }
});
var audio = document.getElementById("myAudio");
    var button = document.querySelector("button");
    button.addEventListener("click", function() {
      if (audio.paused) {
        audio.play();
        button.innerHTML = "Stop Music";
      } else {
        audio.pause();
        button.innerHTML = "Play Music";
      }
    });