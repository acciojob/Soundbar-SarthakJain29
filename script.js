const buttons = document.querySelectorAll("button");
const container = document.getElementById("buttons");
buttons.forEach((btn)=>{
	btn.addEventListener("click", ()=>{
		const soundName = btn.textContent.trim();
		const audio = document.createElement("audio");
		audio.src = `sounds/${soundName}.mp3`;
		audio.autoplay = true;
		container.appendChild(audio);
	});
});
document.querySelector(".stop").addEventListener("click", ()=>{
	const audio = container.querySelector("audio");
	if(audio){
		audio.pause();
		audio.currentTime = 0;
		audio.remove();
	}
})