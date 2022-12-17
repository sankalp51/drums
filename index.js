function Do_the_thing(x) {
    switch (x) {
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            document.querySelector("."+x).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("."+x).classList.remove("pressed");
            },100)
            break;
        case "a":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            document.querySelector("."+x).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("."+x).classList.remove("pressed");
            },100)
            break;
        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            document.querySelector("."+x).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("."+x).classList.remove("pressed");
            },100)
            break;
        case "d":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            document.querySelector("."+x).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("."+x).classList.remove("pressed");
            },100)
            break;
        case "j":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            document.querySelector("."+x).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("."+x).classList.remove("pressed");
            },100)
            break;
        case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            document.querySelector("."+x).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("."+x).classList.remove("pressed");
            },100)
            break;
        case "l":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            document.querySelector("."+x).classList.add("pressed");
            setTimeout(function(){
                document.querySelector("."+x).classList.remove("pressed");
            },100)
            break;
        default:
            break;
    }
}

let size = document.querySelectorAll(".drum").length;
for (let i = 0; i < size; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let a = this.innerHTML;
        Do_the_thing(a);
    });
}

document.addEventListener("keydown",function(e){
    Do_the_thing(e.key);
});



