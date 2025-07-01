//open the sidenav
function openNav() {
  document.getElementById("sideNav").style.width = "100%";
}
//close the sidenav
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}
//event for form submission
var form = document.getElementById("myForm");
form.addEventListener("submit", handleForm);
function handleForm(event) {
  event.preventDefault();
  incrementToken();
}
//create go to gacha button for easy nav
let goToGachaBtn = document.createElement("a");
let goToGachaBtnTxt = document.createTextNode("go to gacha");
goToGachaBtn.appendChild(goToGachaBtnTxt);
goToGachaBtn.title = "go to gacha";
goToGachaBtn.href = "gacha-simulator.html";
//checks if user already has tokens
let tokenCounter = 0;
if (!sessionStorage.getItem("quizTakenBefore")) {
  sessionStorage.setItem("quizTakenBefore", "true");
} else {
  tokenCounter = sessionStorage.getItem("currentTokenCount");
}

//increases token count
function incrementToken() {
  tokenCounter++;

  //add go to gacha button div to HTML
  const goToGachaBtnDiv = document.getElementById("go-to-gacha-btn-container");
  goToGachaBtnDiv.appendChild(goToGachaBtn);

  //shows tokens after taking quiz
  document.getElementById(
    "congratulations"
  ).innerHTML = `Congratulations! You now have ${tokenCounter} token(s).`;
  console.log(tokenCounter); //1, 2, 3, 4, ...
  //stores token count
  sessionStorage.setItem("currentTokenCount", tokenCounter);
}
