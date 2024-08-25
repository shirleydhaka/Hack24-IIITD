// Initialize SpeechSynthesisUtterance
let speech = new SpeechSynthesisUtterance();
let voices = [];

// Select HTML elements
let voiceSelect = document.querySelector("select");
let textarea = document.querySelector("textarea");
let button = document.querySelector("button");

// Load voices and populate the select dropdown
function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        speech.voice = voices[0];
        voiceSelect.innerHTML = ''; // Clear existing options
        voices.forEach((voice, i) => {
            let option = new Option(voice.name, i);
            voiceSelect.add(option);
        });
    } else {
        console.log("No voices available.");
    }
}

// Event listener for voice changes
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Event listener for the button click
button.addEventListener("click", () => {
    if (textarea.value.trim() === '') {
        alert("Please enter some text to speak.");
        return;
    }
    speech.text = textarea.value;
    window.speechSynthesis.speak(speech);
});

// Ensure voices are loaded
window.speechSynthesis.onvoiceschanged = loadVoices;
