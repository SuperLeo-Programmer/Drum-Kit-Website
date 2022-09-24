var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(i = 0; i<numberOfDrumButtons; i++)  {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)

    function handleClick() {
var buttonInnerHTML = this.innerHTML;
addAnimation(buttonInnerHTML);
        switch (buttonInnerHTML) {
            case "w":
        var crash = new Audio('crash.mp3')
        crash.play(); 
        break; 

        case "a":
        var kick = new Audio('kick-bass.mp3')
        kick.play(); 
        break;

        case "s":
        var snare = new Audio('snare.mp3')
        snare.play(); 
        break;

        case "d":
        var tom1 = new Audio('tom-1.mp3')
        tom1.play(); 
        break;

        case "j":
        var tom2 = new Audio('tom-2.mp3')
        tom2.play(); 
        break;

        case "k":
        var tom3 = new Audio('tom-3.mp3')
        tom3.play(); 
        break;
        case "l":
        var tom4 = new Audio('tom-4.mp3')
        tom4.play(); 
        break;


                

        
            default:
        }
        

           }



}

addEventListener("keydown", keyPressed)
function keyPressed(event) {
    var keyWhichGotPressed = event.key;
    addAnimation(event.key);
    console.log(keyWhichGotPressed)
    switch (keyWhichGotPressed) {
        case "w":
            var crash = new Audio('crash.mp3')
            crash.play(); 
            break; 
    
            case "a":
            var kick = new Audio('kick-bass.mp3')
            kick.play(); 
            break;
    
            case "s":
            var snare = new Audio('snare.mp3')
            snare.play(); 
            break;
    
            case "d":
            var tom1 = new Audio('tom-1.mp3')
            tom1.play(); 
            break;
    
            case "j":
            var tom2 = new Audio('tom-2.mp3')
            tom2.play(); 
            break;
    
            case "k":
            var tom3 = new Audio('tom-3.mp3')
            tom3.play(); 
            break;
            case "l":
            var tom4 = new Audio('tom-4.mp3')
            tom4.play(); 
            break;

    }


 }


 function addAnimation(currentKey) {
    var activeButton =  document.querySelector( "." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed")} , 100)
    

 }
