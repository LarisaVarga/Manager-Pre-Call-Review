
var inputs = document.querySelectorAll(".text-field");
var inputsArr = Array.prototype.slice.call(inputs);

// Function to GeneratePdf
function GeneratePdf() {
  // validateForm
  inputsArr.forEach(validateInputs)
  function validateInputs(element) {
    if (element.value.length < 1) {
      element.classList.add("hide-on-print");
      element.parentElement.classList.remove("special-pb");
    }
    if (element.value.length > 1) {
      element.classList.remove("hide-on-print");
      element.parentElement.classList.add("special-pb");
    }
  }
  window.print();
}



const sectionsTitles = document.querySelectorAll('.toggle-section');
for (let i = 0; i < sectionsTitles.length; i++) {
  sectionsTitles[i].addEventListener("click", toggleOpenSection, false);
}
function toggleOpenSection() {
  this.parentElement.parentElement.classList.toggle('close');
}


const texareas = document.getElementsByTagName("textarea");
for (let i = 0; i < texareas.length; i++) {
  texareas[i].addEventListener("input", OnInput, false);
}
function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}


const triggers = document.querySelectorAll('.overlay-trigger');
const closeBtns = document.querySelectorAll('.close-video-icon');
for (const trigger of triggers) {
  trigger.addEventListener('click', showOverlay);
}
function showOverlay(event) {
  const selector = event.target.value;
  const overlay = document.getElementById(selector);
  if (overlay !== null) {
    overlay.style.display = "flex";
  }
}
for (const closeBtn of closeBtns) {
  closeBtn.addEventListener('click', closeOverlay);
}
function closeOverlay(event) {
  const closeBtn = event.currentTarget;
  closeBtn.parentElement.parentElement.style.display = "none";

  const src = overlay.childNodes[1].getAttribute('src');
  overlay.childNodes[1].src = ""; //stop audio when modal is closed
  overlay.childNodes[1].src = src; // bring bak the source of the video
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var date = document.getElementById("date")

today = mm + '/' + dd + '/' + yyyy;

date.innerHTML = 'Printed on:' + today;



const radioBtns = document.querySelectorAll('.radio');
// console.log(radioBtns)
for (let i = 0; i < radioBtns.length; i++) {
  radioBtns[i].addEventListener("click", () => {
    if (radioBtns[i].checked = true) {
      // console.log(radioBtns[i].checked)
      radioBtns[i].checked = false;
    }
  }, false);



}
