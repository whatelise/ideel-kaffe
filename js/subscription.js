window.addEventListener("load", hideFaq);

function hideFaq() {
  console.log("hideFaq()");
  this.removeEventListener("click", hideFaq);
  document.querySelector(".FAQ").classList.add("hidden");
  document.querySelector(".showfaq").addEventListener("click", showFaq);
}

function showFaq() {
  console.log("showFaq()");
  this.removeEventListener("click", showFaq);
  document.querySelector(".FAQ").classList.remove("hidden");
  document.querySelector(".subx").addEventListener("click", hideFaq);
}
