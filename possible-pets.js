//open the sidenav
function openNav() {
  document.getElementById("sideNav").style.width = "100%";
}
//close the sidenav
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}

//add objects for pet name and image
const pikmin = {};
//add properties
pikmin.img =
  "https://cdn.glitch.global/da01a152-83d6-461f-8c8e-acd6d32e318a/pikmin.jpg?v=1747489916119";
pikmin.name = "Pikmin Pickleton Beatrice III";

const foxy = {};
foxy.img =
  "https://cdn.glitch.global/da01a152-83d6-461f-8c8e-acd6d32e318a/foxy.jpg?v=1747489910582";
foxy.name = "Foxy";

const beau = {};
beau.img =
  "https://cdn.glitch.global/da01a152-83d6-461f-8c8e-acd6d32e318a/beau.jpg?v=1747489913725";
beau.name = "Beau";

const bennie = {};
bennie.img =
  "https://cdn.glitch.global/da01a152-83d6-461f-8c8e-acd6d32e318a/bennie.jpg?v=1747490138349";
bennie.name = "Bennie";

const juju = {};
juju.img =
  "https://cdn.glitch.global/da01a152-83d6-461f-8c8e-acd6d32e318a/juju.jpg?v=1747489907928";
juju.name = "Juju";

const ollie = {};
ollie.img =
  "https://cdn.glitch.global/da01a152-83d6-461f-8c8e-acd6d32e318a/ollie.png?v=1747489879858";
ollie.name = "Ollie";

//array for pet data
const pets = [pikmin, foxy, beau, bennie, juju, ollie];

//add animal to page
function addPetToPage() {
  //create new element
  const containAllPets = document.getElementById("pet-container");
  // const petDiv = document.createElement("div");

  //loop add each pet to the page
  for (let counter = 0; counter < pets.length; counter++) {
    const petNumber = counter + 1;
    const petDiv = document.createElement("div");
    const petImg = document.createElement("img");
    const petName = document.createElement("p");

    petImg.src = pets[counter].img;
    //adds img to individual pet div
    petDiv.appendChild(petImg);
    petImg.classList.add("pet-img");
    
    //adds name to individual pet div
    petDiv.appendChild(petName);
    petName.innerHTML = `${counter +1}. ${pets[counter].name}`;
    console.log(pets[counter]);
    //appendChild must take HTML

    containAllPets.appendChild(petDiv);
    //add class to petDiv
    petDiv.classList.add("pet-div");
    //add class to pet container
    containAllPets.classList.add("pet-container");
  }
}
addPetToPage();
