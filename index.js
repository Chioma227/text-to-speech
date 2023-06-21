let voicesSelect = document.getElementById("voices");
let textArea = document.getElementById("text");
let range = document.getElementById("range");
let speak = document.getElementById("submit");
let playSection = document.getElementById("play");

//get control buttons
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let stop = document.getElementById("stop");

play.addEventListener("click", (e) => {
  e.preventDefault();
  speechSynthesis.resume();
});
pause.addEventListener("click", (e) => {
  e.preventDefault();
  speechSynthesis.pause();
});
stop.addEventListener("click", (e) => {
  e.preventDefault();
  speechSynthesis.cancel();
});

//get all voices
let voicesArr = [];
const allVoices = () => {
  voicesArr = speechSynthesis.getVoices();
  voicesArr.forEach((voice, i) => {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = `${voice.name} (${voice.lang})`;
    voicesSelect.appendChild(option);
  });
};

speechSynthesis.addEventListener("voiceschanged", allVoices);

speak.addEventListener("click", (e) => {
  e.preventDefault();
  let text = textArea.value;
  let utteredVoice = new SpeechSynthesisUtterance(text);

  //get the selected voice
  //   let selectedVoiceIndex = voicesSelect.value;
  //   utteredVoice.voice = voicesArr[selectedVoiceIndex];

  //   //voice rate
  //   utteredVoice.rate = range?.value;

  //trigger voice to speak
  speechSynthesis.speak(utteredVoice);
});
