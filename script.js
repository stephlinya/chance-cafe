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
    });
    
    window.onscroll = function() {
        if (window.pageYOffset >= sticky) {
            $(".mobilenav").toggleClass("sticky");
        }
    } 

    $(function(){
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
    });
    
}


const adoptionRequirements = document.querySelector(".adoption__requirements");
const modal = document.querySelector(".overlay__modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.getElementById("close-modal");
let scrollPosition = window.pageYOffset;

if (adoptionRequirements) {
    adoptionRequirements.addEventListener("click", (e) => {
        console.log(closeModal);
        modal.innerHTML = `<button id="close-modal">x</button>`;
        e.preventDefault();
        scrollPosition = window.pageYOffset;
        document.body.classList.add("modal-open");
        overlay.style.display = "inline-block";
        modal.style.display = "inline-block";
        modal.innerHTML += `
        <div class="modal-header">
            <h1 class="modal-header__title">Adoption Requirements</h1>
        </div>
        <div class="modal-wrapper">
            <ul id="requirement-list">
                <li>Completed adoption interest form.</li>
                <li>Completed adoption intereview.</li>
                <li>A good match between interested adopter and kitty. This includes time and personality match as well as a financial match (some kitties may have special needs).</li>
                <li>Once an adoption date is set, prepare all your kitty's necessities.</li>
            </ul>
    
            <h1 class="modal-header__title--green">Adoption Process</h1>
            <ol id="process-list">
                <li>Fill out an adoption interest form. Our adoption coordinator will reach out within 2-3 business days.</li>
                <li>Complete an adoption intereview to determine best match. The interview will be roughly 30min - 45min.</li>
                <li>Once all interviews for that particular kitty is completed (this time varies based on interest). You will receive a notification on your application status. If you're approved, our coordinator will set an adoption day with you. They will also answer any additional questions and review the necessities for adoption day.</li>
                <li>Get your house prepared for your new buddy. This includes food, water, bowls, litter box, litter, bed, toys, hard carrier, brush, nail clippers.</li>
                <li>Come in on adoption day with the final paperwork, a carrier, and adoption fee.</li>
                <li>Bring your kitty home on adoption day!</li>
            </ol>
        </div>
        `;

        closeModal.addEventListener("click", (e) => {
            overlay.style.display = "none";
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
            window.scroll(0, scrollPosition);
            console.log("hello");
        })

        window.addEventListener("click", (e) => {
            if(e.target == overlay || e.target == closeModal){
                overlay.style.display = "none";
                modal.style.display = "none";
                document.body.classList.remove("modal-open");
                window.scroll(0, scrollPosition);
            }
        })
        
    });
}

const adoptionInterest = document.querySelector(".adoption__interest");

if (adoptionInterest) {
    adoptionInterest.addEventListener("click", (e) => {
        modal.innerHTML = `<button id="close-modal">x</button>`;
        e.preventDefault();
        scrollPosition = window.pageYOffset;
        document.body.classList.add("modal-open");
        overlay.style.display = "inline-block";
        modal.style.display = "inline-block";
        modal.innerHTML += `
        <div class="modal-header">
            <h1 class="modal-header__title">Adoption Interest Form </h1>
        </div>
        <div class="modal-wrapper">
        <button id="close-modal">x</button>
            <p class="adoption-interest__text">Please fill out this adoption interest form. Our adoption coordinator will reach out within 2-3 business days. Note: An interest form does not guarantee you will be approved for adoption.</p>
            <form class="adoption-interest" action="#" method="POST">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="name" required>
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="email" required>
                <label for="phone-number">Phone Number</label>
                <input type="number" id="phone-number" placeholder="phone number" required>
                <label for="type-of">What type of kitty are you looking for? Age? Personality? Energy?</label>
                <textarea id="why-adopt" name="why-adopt" rows="4" placeholder="Tell us about qualities that would make a kitty a good fit for you and your family..." required></textarea>
                <label for="interested-cats">Interested Cat(s)</label>
                <input type="text" id="interest-cats" placeholder="interested cats" required>
                <label for="why-adopt">Why is this the kitty for you?</label>
                <textarea id="why-adopt" name="why-adopt" rows="4" placeholder="Tell us why this kitty stands out to you..." required></textarea>
                <label for="food">What are you planning to feed your kitty? Why?</label>
                <textarea id="food" name="food" rows="4" placeholder="Tell us your plans..." required></textarea>
                <label for="experience">Do you have experience taking care of a pet?</label>
                <textarea id="experience" name="experience" rows="4" placeholder="Tell us about your experience caring for animals..." required></textarea>
                <label for="current-pets">Do you currently have pets? How many? What is their age and personality?</label>
                <textarea id="current-pets" name="current-pets" rows="4" placeholder="Tell us about any pets you currently have..." required></textarea>
                <button type="button" id="button--pinkfill">submit</button>
            </form>
        </div>
        `;
    
        closeModal.addEventListener("click", () => {
            overlay.style.display = "none";
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
            window.scroll(0, scrollPosition);
        })
    
        window.addEventListener("click", (e) => {
            if(e.target == overlay){
                overlay.style.display = "none";
                modal.style.display = "none";
                document.body.classList.remove("modal-open");
                window.scroll(0, scrollPosition);
            }
        })
    
        
    });
}

let catName = document.getElementById("cat-name");
let catBreed = document.getElementById("cat-breed");
let catImg = document.querySelector(".card__img");
let catsWithPhotos = [];
let animals = "";

function API() {
fetch("https://api.petfinder.com/v2/animals?type=cat&page=5", {
    headers: {
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqcDhPT3hFZnBRSERjaDFRZ0I0VmlvMWc3Q1VXYjBpbGVnOXJzdmdTalBjSnZnU2tDWCIsImp0aSI6IjJkODRkYjM2YjI5ZThiMDI3MWU0Njg3ZWM3OTcxZjhmMTg1NzBhN2VkYjdlNjQ2NzFlZDllNDhlZTMxNjQzOGRmNTYwNDBhOWQ1ODRiYTBiIiwiaWF0IjoxNjQyNTQ1NTUyLCJuYmYiOjE2NDI1NDU1NTIsImV4cCI6MTY0MjU0OTE1Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.sUxnoyyFsWiYY00MyIz1cio7B_5ei6F1_JiWGmGvavIBYsPN3tpcP4g8LEf9mS7wqB6C8rnIQAQ-rSOY95nUq9S6AxEHNyDbh229vy23U51o_3QLD27v3nufNRwZqSy0X_q30lHhImKFYLQ4gh-myzVcanVSgP5MuKDcSufTp_cmpCCiX5FIBvef24e-58n9k_Ga-o-1ycRDurKD5BtPSJsxvNL-NGpTcnQ0Ddk4HXWD-5p2xqFfbbZaoxQBC7Tg7iWp8rQnVYNvDvmIdMYjvAmBWeQNBak9SmZMq0OMVzoWMF56RqIkO0szxRwvWrkMN6hkx5e81G4vbkcd_NNejw`,
        "Content-Type": "application/json"
    }
})
    .then(res => res.json())
    .then(data => {
        animals = data.animals;
        for (let i = 0; i < animals.length; i++){
            if (animals[i].photos != ""){
                catsWithPhotos.push(animals[i]);
            }
            
        }
        createCards();
       
        console.log(data.animals);
    });
};

const cardContainer = document.querySelector(".card-container");
console.log(typeof catsWithPhotos);
function createCards(){
    for(let i = 0; i < catsWithPhotos.length; i++){
        console.log(catsWithPhotos);
        cardContainer.innerHTML += `
        <div class="card">
            <div class="card__imgdiv">
                <div class="card__img"></div>
            </div>
            <div class="card__info">
                <p id="cat-name"></p>
                <p id="cat-breed"></p>
                <a class="link" href="#">learn more</a>
            </div>
        </div>`;
        catName.textContent = catsWithPhotos[i].name;
        catBreed.textContent = catsWithPhotos[i].breeds.primary;
        catImg.innerHTML = `<img src="${catsWithPhotos[i].photos[0]}>`;
    }
}


(async() => {

await API();

})();
