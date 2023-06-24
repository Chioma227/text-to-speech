let voicesSelect = document.getElementById("voices");
let textArea = document.getElementById("text");
let range = document.getElementById("range");
let speak = document.getElementById("submit");
let playSection = document.getElementById("play");
let stop = document.getElementById("stop");

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

  // get the selected voice
    let selectedVoiceIndex = voicesSelect.value;
    utteredVoice.voice = voicesArr[selectedVoiceIndex];

  //trigger voice to speak
  speechSynthesis.speak(utteredVoice);
});
