const btn = document.querySelector('.talk');

const content = document.querySelector('.content');

// Function to speak text

function speak(text) {

    const textSpeak = new SpeechSynthesisUtterance(text);

    textSpeak.rate = 1;

    textSpeak.volume = 1;

    textSpeak.pitch = 1;

    window.speechSynthesis.speak(textSpeak);

}

// Function to wish based on the time of day

function wishMe() {

    const hour = new Date().getHours();

    if (hour < 12) {

        speak("Good Morning Boss...");
