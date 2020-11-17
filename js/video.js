var video = document.getElementById("myVideo");

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	var curSpeed = video.playbackRate;
	video.playbackRate = .9*(curSpeed);
	console.log("Current Speed is: " + curSpeed);
});

document.querySelector("#faster").addEventListener("click", function() {
	var curSpeed = video.playbackRate;
	video.playbackRate = (curSpeed)/.9;
	console.log("Current Speed is: " + curSpeed);
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 5 > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 5;
	}
	console.log("Current time of the video: " + video.currentTime);
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	var muted = video.muted;
	if(video.muted == true){
		video.muted = false;
		console.log("Video Unmuted");
		this.innerHTML = "Mute";
	}
	else{
		video.muted = true;
		console.log("Video Muted");
		this.innerHTML = "Unmute";
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function(e) {
	video.volume = e.currentTarget.value / 100;
	console.log("Current Volume: " + video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#old").addEventListener("click", function(){
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function(){
	video.classList.remove("oldTime");
});
