window.addEventListener("keydown", (e) => {
  let audio = document.querySelector(`audio[data-key="${e.code}"]`);
  let keyPress = document.querySelector(`div[data-key="${e.code}"]`);
  if (!audio || !keyPress) return;
  audio.play();
  keyPress.classList.add("playing");
});

window.addEventListener("keyup", e => {
	let keyPress = document.querySelector(`div[data-key="${e.code}"]`);
	if (!keyPress) return;
  keyPress.classList.remove("playing");
});

// window.addEventListener("mouseenter", );
