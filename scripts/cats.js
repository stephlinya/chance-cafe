// require("dotenv").config();

// const process.env = {
//     REPO_OWNER: owner,
//     REPO_NAME: repo
// }

const bodyUrl = `grant_type=client_credentials&client_id=${process.env.API_ID}&client_secret=${process.env.API_SECRET}`


async function getToken() {
    console.log("function start")
    const res = await fetch("https://api.petfinder.com/v2/oauth2/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: bodyURL  
    })

  try {
    let token = await res.json();
    console.log("function end")
    console.log(token)
    return token;
  } catch (err) {
      console.log(err)
      return err.message;
  }

}

async function callPetFinder() {
    console.log("running the code")
    let token = await getToken();
    console.log(`tokenpet: ${token}`)

    let accessToken = token.access_token;
    console.log(`access: ${accessToken}`)

    const response = await fetch("https://api.petfinder.com/v2/animals?type=cat&page=5", {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }        
    })
    if(!response.ok){
        console.error(response);
        callPetFinder();
    }
    console.log("fetchinf")
    try {
        let animals = await response.json();
        console.log(animals)
        animals = animals.animals;
        console.log(animals)
        console.log(animals.length)
        for (let i = 0; i < animals.length; i++){
            if ((animals[i].photos != "") && (animals[i].photos[0].large) && (/^[a-zA-Z]+$/.test(animals[i].name))){
                catsWithPhotos.push(animals[i]);
                console.log(animals[i].photos[0].large);
            } else {
                console.log("no phto")
            }
            
        }
        createCards();
        //console.log(data.animals);
    } catch (err) {
        return console.error("bla", err);
    }
    
};
callPetFinder();


const adoptionRequirements = document.querySelector(".adoption__requirements");
const modal = document.querySelector(".overlay__modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.getElementById("close-modal");
let scrollPosition = window.pageYOffset;

const close = (e) => {
    overlay.style.display = "none";
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    window.scroll(0, scrollPosition);
    console.log("hello");
}

if (adoptionRequirements) {
    adoptionRequirements.addEventListener("click", (e) => {
        modal.innerHTML = `<button id="close-modal" onclick="close">x</button>`;
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
            close();
        })

        window.addEventListener("click", (e) => {
            if(e.target == overlay || e.target == closeModal){
               close();
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
    
        closeModal.addEventListener("click", (e) => {
            close();
        })
    
        window.addEventListener("click", (e) => {
            if(e.target == overlay){
                close();
            }
        })
    
        
    });
}




const cardContainer = document.querySelector(".card-container");
let catName = document.getElementById("cat-name");
let catBreed = document.getElementById("cat-breed");
let catImg = document.querySelector(".card__img");
let catsWithPhotos = [];
let animals = "";
function createCards(){
   
    for(let i = 0; i < catsWithPhotos.length; i++){
        console.log(catsWithPhotos[i])

        if((catsWithPhotos[i].colors.primary) && (catsWithPhotos[i].breeds.primary)){
            cardContainer.innerHTML += `
            <div class="card">
                <img src="${catsWithPhotos[i].photos[0].large}" class="card__img">
                <div class="card__info">
                    <p id="cat-name">${catsWithPhotos[i].name}</p>
                    <p id="cat-breed">${catsWithPhotos[i].colors.primary} ${catsWithPhotos[i].breeds.primary} </p>
                    <a class="link--primary card__link" href="#">learn more</a>
                </div>
            </div>`
        } else if (catsWithPhotos[i].breeds.primary)
        cardContainer.innerHTML += `
        <div class="card">
            <img src="${catsWithPhotos[i].photos[0].large}" class="card__img">
            <div class="card__info">
                <p id="cat-name">${catsWithPhotos[i].name}</p>
                <p id="cat-breed">${catsWithPhotos[i].breeds.primary} </p>
                <a class="link--primary card__link" href="#">learn more</a>
            </div>
        </div>`;
        
    }
}



