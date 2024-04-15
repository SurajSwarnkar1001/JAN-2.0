const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}
function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning sir");
    }
        
    else if(hr == 12) {
        speak("Good noon sir");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon sir");
    }
    else {
        speak("Good Evening sir");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating the program JAN two point zero");
    speak("I'm your Virtual Personal Assistant:")
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {  
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();
    if(message.includes('wake up')){
    wishMe();
    const finalText = "Please tell me sir, How can I help you ?";
    speech.text = finalText;
    }
        
    else if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello sir, how are you";
        speech.text = finalText;
    }
    else if(message.includes('i am fine')){
        speak("that's great sir");
    }
    else if(message.includes('how are you')) {
        const finalText = "I am fine, tell me how can i help you";
        speech.text = finalText;
    }
     else if(message.includes('and you')) {
        const finalText = "I'm doing well, thank you for asking";
        speech.text = finalText;
    }
    else if(message.includes('whats your name')) {
        const finalText = "My name is JAN, I'm your Personal Assistant";
        speech.text = finalText;
    }
    else if(message.includes('your inventor')){
        const finalText = "I was created by Mr. Suraj Swarnkar";
        speech.text = finalText;
    }
    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }
    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
    else if(message.includes('open Linkedin')) {
        window.open("https://www.linkedin.com", "_blank");
        const finalText = "Opening Linkedin";
        speech.text = finalText;
    }
         else if(message.include('open youtube')){
        window.open("https://www.youtube.com/", "_blank");
        const finalText = "Opening youtube";
        speech.text = finalText;
    }
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }
    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }
    else if(message.includes('open calculator')) {
        window.open('https://calculator.apps.chrome/')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }
        

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }
    
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
