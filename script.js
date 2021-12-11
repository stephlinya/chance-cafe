const mobileNav = document.getElementById("mobilenav__burger");
const navList = document.querySelector(".nav__list");

mobileNav.addEventListener("click", function (){
    if (navList.style.display ==="flex"){
        navList.style.display ="none";
    } else {
        navList.style.display="flex";
        navList.classList.add("nav__list--animate")
    }
})

window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
        mobileNav.classList.add("sticky")
    } else {
        mobileNav.classList.remove("sticky");
    }
} 

const sticky = mobileNav.offsetTop;



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
    } else if (slideIndex === slides.length-1){
        imgs[slideIndex].style.display = "block";
        imgs[slideIndex - 1].style.display = "none";
        slideIndex = 0;
    } else{
        imgs[slideIndex].style.display = "block";
        imgs[slideIndex - 1].style.display = "none";
        slideIndex++;
    } 
    
    if (dotIndex === 0){
        dot[slides.length-1].classList.remove("green");
        dot[dotIndex].classList.add("green");
        dotIndex++;
    } else if (dotIndex === slides.length-1){
        dot[dotIndex].classList.add("green");
        dot[dotIndex - 1].classList.remove("green");
        dotIndex = 0;
    } else {
        dot[dotIndex].classList.add("green");
        dot[dotIndex - 1].classList.remove("green");
        dotIndex++;
    }

}, 4000);
    



        
