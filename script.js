const mobileNav = document.getElementsByClassName("mobilenav__toggle--burger");
const navList = document.querySelector(".nav__list");
const sticky = mobileNav.offsetTop;
let dot = document.getElementsByClassName("fa-circle");
let slides = document.getElementsByClassName("slides");
let imgs = document.getElementsByClassName("gallery-img");
let slideIndex = 0;
let dotIndex = 0;
let newsletter = document.getElementsByClassName("newsletter");

if($(window).width() <= 750){
    $(".mobilenav__toggle").click(function(){
        console.log("yay");
        $(".nav__list").toggleClass("nav__list--open", 500);
        $(".nav__list").toggleClass("open");
        // $(".mobilenav__toggle--burger").toggleClass
        $(".mobilenav__toggle--burger").removeClass(".mobilenav__toggle--burger")
    });
    
    window.onscroll = function() {
        if (window.pageYOffset >= sticky) {
            $(".mobilenav").toggleClass("sticky");
        }
    } 
}

$(function(){
    if($('body').is('.landingpg')){
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
            
        
        dot[0].addEventListener("click", function(){
            imgs[0].style.display = "block";
            imgs[slideIndex].style.display = "none";
        })
    }
  });

const adoptionChecklist = document.querySelector(".adoption__checklist");
const checklistOverlay = document.querySelector(".overlay__checklist");

adoptionChecklist.addEventListener("click", (e) => {
    e.preventDefault();
    // adoptionChecklist.classList.add("overlay__checklist");
    // checklistOverlay.innerHTML = `<p style="z-index:3; color: white">heyyyyy</p>`
});

        
