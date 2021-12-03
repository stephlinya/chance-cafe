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
let slideIndex = 0;
let dotIndex = 0;


function slideshow(){
    for (i = 0; i < slides.length; i++){
        slides[slideIndex].style.display = "none";
        dot[dotIndex].classList.add("pink");
    
        if (slideIndex != 0){
            dot[dotIndex-1].classList.remove("pink");
        } else if (slideIndex === 0){
            dot[dotIndex].classList.add("pink");
            slides[slideIndex].style.display = "block";
        }
        else if (slideIndex === 4){
            slideIndex = 0;
            dotIndex = 0;
            dot[dotIndex].classList.add("pink");
            slides[slideIndex].style.display = "block";
        } else {
            dot[dotIndex].classList.add("pink");
            slides[slideIndex].style.display = "block";
        }
        slideIndex++;
        dotIndex++;

        console.log(slideIndex);
        console.log(dotIndex);
    }
}





