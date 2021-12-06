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

if (slideIndex <= slides.length){
    setInterval(function(){ 
        
        if (slideIndex === 0){
            imgs[slides.length-1].style.display = "none";
            imgs[slideIndex].style.display = "block";
        } else if (slideIndex != 0 && slideIndex < 4){
            imgs[slideIndex].style.display = "block";
            imgs[slideIndex - 1].style.display = "none";
        } else if (slideIndex === slides.length-1){
            slideIndex = 0;
            console.log(slides.length-1);
            imgs[slideIndex].style.display = "block";
        } 
    
        slideIndex++;
        

    }, 2000);
    
}

// if (dotIndex == 0){
        //     dot[dotIndex].classList.add("pink");
        // } else if (dotIndex === slides.length){
        //     dot[dotIndex].classList.remove("pink");
        //     dotIndex = 0;
        // } else {
        //     dot[dotIndex].classList.add("pink");
        //     dot[dotIndex - 1].classList.remove("pink");
        // }
        // dotIndex++;
        // console.log(dotIndex);
        // console.log(slides.length);


// function slideshow(){
//     for (i = 0; i < slides.length; i++){
//         slides[slideIndex].style.display = "none";
//         dot[dotIndex].classList.add("pink");
    
//         if (slideIndex != 0){
//             dot[dotIndex-1].classList.remove("pink");
//             dot[dotIndex].classList.add("pink");
//             slides[slideIndex-1].style.display = "none";
//             slides[slideIndex].style.display = "block";
//         } else if (slideIndex === 0){
//             dot[dotIndex].classList.add("pink");
//             slides[slideIndex].style.display = "block";
//         }
//         else if (slideIndex === 4){
//             slideIndex = 0;
//             dotIndex = 0;
//             dot[dotIndex].classList.add("pink");
//             slides[slideIndex].style.display = "block";
//         } 

//         slideIndex++;
//         dotIndex++;

//     }
// }








