var SR = window.webkitSpeechRecognition;
var speech = new SR()

function start(){
    document.getElementById('textbox').innerHTML = ''
    speech.start()
};

function speak(){
    var synth = window.speechSynthesis
    speakData = document.getElementById('textbox').value;
    var utterThis = new SpeechSynthesisUtterance(speakData)
    synth.speak(utterThis)
    Webcam.attach(camera)
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
})
camera = document.getElementById('camera')

speech.onresult = function(event){
    console.log(event)
    var Content = event.results[0][0].transcript
    console.log(Content)
    document.getElementById('textbox').innerHTML = Content
    speak()
}