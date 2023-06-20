window.addEventListener('keydown', (e) => {
	let audio = document.querySelector(`audio[data-key="${e.code}"]`);
	if (!audio) return;
	audio.play();
});