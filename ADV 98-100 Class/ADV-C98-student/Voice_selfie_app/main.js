var SR = window.webkitSpeechRecognition;
var speech = new SR()

function start(){
    document.getElementById('textbox').innerHTML = ''
    speech.start()
};

camera = document.getElementById('camera')
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
})

function takeSelfie(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img id = "selfie_image" src = "'+data_uri+'">'
    })
}

function save(){
    link = document.getElememtById('link')
    image = document.getElememtById('selfie_image').src
    link.href = image
    link.click()
}

function speak(words){
    var synth = window.speechSynthesis
    speakData = 'Taking your selfie in 5 seconds'
    var utterThis = new SpeechSynthesisUtterance(speakData)
    if (words == "Take my selfie."){
        synth.speak(utterThis)
        Webcam.attach(camera)
        setTimeout(function(){
            takeSelfie()
            save()
        }, 5000)
    }
}

speech.onresult = function(event){
    console.log(event)
    var Content = event.results[0][0].transcript
    console.log(Content)
    document.getElementById('textbox').innerHTML = Content
    Webcam.attach(camera)
    speak(Content)
}