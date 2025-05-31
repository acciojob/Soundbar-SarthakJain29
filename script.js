const buttons = document.querySelecterAll("button");

buttons.forEach((btn)=>{
	btn.addEventListener("click", ()=>{
		const soundName = btn.textContent.trim();
		const audio = new Audio(`sounds/${soundName}.mp3`);
		audio.play();
	});
});
