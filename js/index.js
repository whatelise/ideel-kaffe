var textPath = document.querySelector("#text-path");
var textContainer = document.querySelector("#text-container");
var path = document.querySelector(textPath.getAttribute("href"));
var pathLength = path.getTotalLength();
console.log(pathLength);

function updateTextPathOffset(offset) {
  textPath.setAttribute("startOffset", offset);
}

updateTextPathOffset(100);

function onScroll() {
  requestAnimationFrame(function () {
    var rect = textContainer.getBoundingClientRect();
    console.log(rect.y);
    var scrollPercent = rect.y / window.innerHeight;
    console.log(scrollPercent);

    updateTextPathOffset(window.scrollY * 2.2);
  });
}

window.addEventListener("scroll", onScroll);
