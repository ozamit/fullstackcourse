let nav = document.getElementById("nav");
let burgerbtn = document.getElementById("burgerbtn");
let isopen = "no";

burgerbtn.addEventListener( "click", (event) => {
    if( isopen == "no" ){
        nav.style.display = "block";
        isopen = "yes";
    } else {
        nav.style.display = "none";
        isopen = "no";
    
    }
})

let ScrollPositionPx = 0;
let ScrollOver500 = "NO";
let directionD = document.getElementById("directionD");
let directionU = document.getElementById("directionU");


document.addEventListener('scroll', (event) => {
    ScrollPositionPx = window.scrollY;
    console.log(ScrollPositionPx);
    if (ScrollPositionPx > 500) {
        directionD.style.display = "block";
        directionU.style.display = "none";
        ScrollOver500 = "YES";
        
    } else {
        if(ScrollOver500 == "YES"){
            directionD.style.display = "none";
            directionU.style.display = "block";
        } else {
            directionD.style.display = "none";
            directionU.style.display = "none";
        }
    }

});