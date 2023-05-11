
var buttonArr = document.querySelectorAll(".drum");
const soundArr = ["sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3","sounds/tom-4.mp3", "sounds/crash.mp3", "sounds/snare.mp3", "sounds/kick-bass.mp3"];


for(var i = 0; i < buttonArr.length; i++){
    buttonArr[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
        addAnimation(this.innerHTML);
        
        
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    addAnimation(event.key);
});


function makeSound(key){
    if(key === "w"){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    if(key === "a"){
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    if(key === "s"){
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    if(key === "d"){
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
    if(key === "j"){
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    if(key === "k"){
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    if(key === "l"){
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
}

function addAnimation(key){
    var keyElement = document.querySelector("." + key);
    keyElement.classList.add("pressed");
    setTimeout(function(){
        keyElement.classList.remove("pressed");
    }, 100);
}