const mobileNav = document.getElementById("mobilenav__burger");
const navList = document.querySelector(".nav__list");

mobileNav.addEventListener("click", function (){
    if (navList.style.display ==="flex"){
        navList.style.display ="none";
    } else {
        navList.style.display="flex";
    }
})

let dot = document.getElementsByClassName("fa-circle");
let slides = document.getElementsByClassName("slides");
let imgs = document.getElementsByClassName("gallery-img");
let slideIndex = 0;
let dotIndex = 0;

setInterval(function(){ 
    
    if (slideIndex === 0){
        imgs[slides.length-1].style.display = "none";
        imgs[slideIndex].style.display = "block";
        slideIndex++;
    } else if (slideIndex != 0 && slideIndex < slides.length-1){
        imgs[slideIndex].style.display = "block";
        imgs[slideIndex - 1].style.display = "none";
        slideIndex++;
    } else if (slideIndex === slides.length-1){
        imgs[slideIndex].style.display = "block";
        imgs[slideIndex - 1].style.display = "none";
        slideIndex = 0;
    } 
    
    if (dotIndex == 0){
        dot[slides.length-1].classList.remove("pink");
        dot[dotIndex].classList.add("pink");
        dotIndex++;
    } else if (dotIndex === slides.length-1){
        dot[dotIndex].classList.add("pink");
        dot[dotIndex - 1].classList.remove("pink");
        dotIndex = 0;
    } else {
        dot[dotIndex].classList.add("pink");
        dot[dotIndex - 1].classList.remove("pink");
        dotIndex++;
    }


}, 4000);
    



        
