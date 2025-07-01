//open the sidenav
function openNav() {
  document.getElementById("sideNav").style.width = "100%";
}
//close the sidenav
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}

//get current # of tokens
var getTokenCount = sessionStorage.getItem("currentTokenCount");

//shows current # of tokens
function showTokens() {
  if (getTokenCount === null) {
    document.getElementById("tokens").innerHTML = "tokens(s): 0";
  } else {
    document.getElementById("tokens").innerHTML = `tokens(s): ${getTokenCount}`;
  }
}
showTokens();

//add objects for pet modal
const pikmin = {};
//add properties
pikmin.img =
  "https://cdn.glitch.global/da01a152-83d6-461f-8c8e-acd6d32e318a/pikmin.jpg?v=1747489916119";
pikmin.name = "Pikmin";
pikmin.blurb = "'she is beauty she is grace she meows loudly in ur face'";
console.log(pikmin);

const foxy = {};
foxy.img =
  "https://cdn.glitch.global/da01a152-83d6-461f-8c8e-acd6d32e318a/foxy.jpg?v=1747489910582";
foxy.name = "Foxy";
foxy.blurb =
  "'sweet angel that likes to bite for fun sometimes. her favorite foods include salmon, whipped cream, and computer cords'";

const beau = {};
beau.img =
  "https://cdn.glitch.global/da01a152-83d6-461f-8c8e-acd6d32e318a/beau.jpg?v=1747489913725";
beau.name = "Beau";
beau.blurb =
  "'Silly little guy that likes chewing dried peppers and committing crimes'";

const bennie = {};
bennie.img =
  "https://cdn.glitch.global/da01a152-83d6-461f-8c8e-acd6d32e318a/bennie.jpg?v=1747490138349";
bennie.name = "Bennie";
bennie.blurb = "'she do but keep the peace'";

const juju = {};
juju.img =
  "https://cdn.glitch.global/da01a152-83d6-461f-8c8e-acd6d32e318a/juju.jpg?v=1747489907928";
juju.name = "Juju";
juju.blurb =
  "' a cat trapped in a dog's body. some of her hobbies include subathing and chasing squirrels.'";

const ollie = {};
ollie.img =
  "https://cdn.glitch.global/da01a152-83d6-461f-8c8e-acd6d32e318a/ollie.png?v=1747489879858";
ollie.name = "Ollie";
ollie.blurb = "'acts like a rat and likes to ask for table scraps'";

//array for pet data
const petsAvailable = [pikmin, foxy, beau, bennie, juju, ollie];

//create event for pulling pets
let pullBtn = document.getElementById("pull-button");
pullBtn.addEventListener("submit", runGacha);

//retrieves modal and modal content
const petModal = document.getElementById("pet-modal");
//retrieves div for pet data for modal content
const petContent = document.getElementById("pet-content");

//js runs everything thats not a f(x) definition once when the page loads
//create elements
const petImg = document.createElement("img");
const petName = document.createElement("p");
const petBlurb = document.createElement("p");

//add img to div
petContent.appendChild(petImg);
petImg.classList.add("pet-img");

//makes name show up in HTML
petContent.appendChild(petName);

//makes blurb show up in HTML
petContent.appendChild(petBlurb);

//runs gacha
function runGacha() {
  if (getTokenCount != null && getTokenCount > 0) {
    //get random number
    const min = Math.ceil(0);
    const max = Math.floor(5);
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    

    //store random num in pet array
    let getPetIndex = petsAvailable[randomNum];
    console.log(getPetIndex);
    petImg.src = getPetIndex.img;

    //access pet name
    petName.innerHTML = `${getPetIndex.name}`;

    //access pet blurb
    petBlurb.innerHTML = `${getPetIndex.blurb}`;

    //decrease token count
    getTokenCount --;
    sessionStorage.setItem("currentTokenCount", getTokenCount);
    showTokens();


  } else {
    petImg.remove();
    petName.remove();
    petBlurb.remove();
    document.getElementById("no-tokens-message").innerHTML =
      "No tokens! Use the plus button to add more tokens.";
  }
}

//retrieves button that closes modal
let closeBtn = document.getElementById("close-button");
//when user clicks on button, open modal
pullBtn.onclick = function () {
  petModal.style.display = "block";
  runGacha();
};
//when user clicks 'close', close modal
closeBtn.onclick = function () {
  petModal.style.display = "none";
};

//when user clicks outside modal, close modal
window.onclick = function (event) {
  if (event.target == petModal) {
    petModal.style.display = "none";
  }
};
