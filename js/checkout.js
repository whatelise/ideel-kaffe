/* PROGRESS BAR */

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const formContainer = document.getElementById("formContainer");

let currentActive = 1; 
update();

next.addEventListener("click", ()=> {
  currentActive++;

  formContainer.style.transform = "translateX(" + ((currentActive -1) * (-26.25)) + "%)";
  
  if (currentActive > 3) 
  {
    currentActive = 3;
    prev.classList.add("dissapear");
    next.classList.add("dissapear");
    document.querySelector(".progressPlacement").classList.add("dissapear");
    
  }

  if (currentActive > circles.length) 
  {
    currentActive = circles.length;
  }

  
  update();
});


prev.addEventListener("click", ()=> {
  formContainer.style.transform = "translateX(" + ((currentActive -2) * (-26.25)) + "%)";
  currentActive--;

  
  if (currentActive < 1) 
  {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx)=>{
    if (idx < currentActive){
      circle.classList.add("active");
    } else {
      circle.classList.remove("active")
    }
  });
  const actives = document.querySelectorAll(".active");

console.log(actives.length);
progress.style.width = ((actives.length - 1) / (circles.length  -1)) * 100 + "%";

if (currentActive=== 1) {
  prev.disabled = true; 
 } else if (currentActive === circles.length) {
   next.disabled = true;
 } else {
   prev.disabled = false;
   next.disabled = false;
 }
}



/*FORM INPUT ANIMATION */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
