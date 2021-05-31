const searchParams = new URLSearchParams(window.location.search);
const productId = searchParams.get("products");

fetch("https://keasem2-551e.restdb.io/rest/ideel-products/" + productId, {
  method: "GET",
  headers: {
    "x-apikey": "606defeaf592f7113340ed01",
  },
})
  .then((res) => res.json())
  .then((response) => {
    showProducts(response);
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showProducts(product) {
  const template = document.querySelector(".productview-template").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".breadcrumbname").textContent = product.name;
  copy.querySelector(".name").textContent = product.name;
  copy.querySelector(".origin").textContent = product.origin;
  copy.querySelector(".productImage").src = product.productimage;
  copy.querySelector(".productImage").alt = product.name + "product image";
  copy.querySelector(".price").textContent = product.price + " DKK";
  copy.querySelector(".varieties").textContent = product.variety;
  copy.querySelector(".origin2").textContent = product.origin;
  copy.querySelector(".process").textContent = product.process;
  copy.querySelector(".qgrade").textContent = product.qgrade + "/ 100";
  // copy.querySelector(".shop-button").setAttribute("data-id", product._id);
  // copy.querySelector(".shop-button").addEventListener("click", () => {
  //   CART.add(product);
  // });

  //*STRENGTH*//
  if (product.strength == 5) {
    console.log("product.intensity");
    copy.querySelector("#strength1").classList.add("circleFull");
    copy.querySelector("#strength1").classList.remove("circleEmpty");
    copy.querySelector("#strength2").classList.remove("circleEmpty");
    copy.querySelector("#strength2").classList.add("circleFull");
    copy.querySelector("#strength3").classList.remove("circleEmpty");
    copy.querySelector("#strength3").classList.add("circleFull");
    copy.querySelector("#strength4").classList.remove("circleEmpty");
    copy.querySelector("#strength4").classList.add("circleFull");
    copy.querySelector("#strength5").classList.remove("circleEmpty");
    copy.querySelector("#strength5").classList.add("circleFull");
  }
  if (product.strength == 4) {
    console.log("product.intensity");
    copy.querySelector("#strength1").classList.remove("circleEmpty");
    copy.querySelector("#strength1").classList.add("circleFull");
    copy.querySelector("#strength2").classList.remove("circleEmpty");
    copy.querySelector("#strength2").classList.add("circleFull");
    copy.querySelector("#strength3").classList.remove("circleEmpty");
    copy.querySelector("#strength3").classList.add("circleFull");
    copy.querySelector("#strength4").classList.remove("circleEmpty");
    copy.querySelector("#strength4").classList.add("circleFull");
  }
  if (product.strength == 3) {
    console.log("product.intensity");
    copy.querySelector("#strength1").classList.remove("circleEmpty");
    copy.querySelector("#strength1").classList.add("circleFull");
    copy.querySelector("#strength2").classList.remove("circleEmpty");
    copy.querySelector("#strength2").classList.add("circleFull");
    copy.querySelector("#strength3").classList.remove("circleEmpty");
    copy.querySelector("#strength3").classList.add("circleFull");
  }

  if (product.strength == 2) {
    console.log("product.intensity");
    copy.querySelector("#strength1").classList.remove("circleEmpty");
    copy.querySelector("#strength1").classList.add("circleFull");
    copy.querySelector("#strength2").classList.remove("circleEmpty");
    copy.querySelector("#strength2").classList.add("circleFull");
  }

  if (product.strength == 1) {
    copy.querySelector("#strength1").classList.remove("circleEmpty");
    copy.querySelector("#strength1").classList.add("circleFull");
  }

  //*ACIDITY*//
  if (product.acidity == 5) {
    console.log("product.intensity");
    copy.querySelector("#acidity1").classList.add("circleFull");
    copy.querySelector("#acidity1").classList.remove("circleEmpty");
    copy.querySelector("#acidity2").classList.remove("circleEmpty");
    copy.querySelector("#acidity2").classList.add("circleFull");
    copy.querySelector("#acidity3").classList.remove("circleEmpty");
    copy.querySelector("#acidity3").classList.add("circleFull");
    copy.querySelector("#acidity4").classList.remove("circleEmpty");
    copy.querySelector("#acidity4").classList.add("circleFull");
    copy.querySelector("#acidity5").classList.remove("circleEmpty");
    copy.querySelector("#acidity5").classList.add("circleFull");
  }
  if (product.acidity == 4) {
    console.log("product.intensity");
    copy.querySelector("#acidity1").classList.remove("circleEmpty");
    copy.querySelector("#acidity1").classList.add("circleFull");
    copy.querySelector("#acidity2").classList.remove("circleEmpty");
    copy.querySelector("#acidity2").classList.add("circleFull");
    copy.querySelector("#acidity3").classList.remove("circleEmpty");
    copy.querySelector("#acidity3").classList.add("circleFull");
    copy.querySelector("#acidity4").classList.remove("circleEmpty");
    copy.querySelector("#acidity4").classList.add("circleFull");
  }
  if (product.acidity == 3) {
    console.log("product.intensity");
    copy.querySelector("#acidity1").classList.remove("circleEmpty");
    copy.querySelector("#acidity1").classList.add("circleFull");
    copy.querySelector("#acidity2").classList.remove("circleEmpty");
    copy.querySelector("#acidity2").classList.add("circleFull");
    copy.querySelector("#acidity3").classList.remove("circleEmpty");
    copy.querySelector("#acidity3").classList.add("circleFull");
  }

  if (product.acidity == 2) {
    console.log("product.intensity");
    copy.querySelector("#acidity1").classList.remove("circleEmpty");
    copy.querySelector("#acidity1").classList.add("circleFull");
    copy.querySelector("#acidity2").classList.remove("circleEmpty");
    copy.querySelector("#acidity2").classList.add("circleFull");
  }

  if (product.acidity == 1) {
    copy.querySelector("#acidity1").classList.remove("circleEmpty");
    copy.querySelector("#acidity1").classList.add("circleFull");
  }

  //*ROAST*//
  if (product.roast == 5) {
    console.log("product.intensity");
    copy.querySelector("#roast1").classList.add("circleFull");
    copy.querySelector("#roast1").classList.remove("circleEmpty");
    copy.querySelector("#roast2").classList.remove("circleEmpty");
    copy.querySelector("#roast2").classList.add("circleFull");
    copy.querySelector("#roast3").classList.remove("circleEmpty");
    copy.querySelector("#roast3").classList.add("circleFull");
    copy.querySelector("#roast4").classList.remove("circleEmpty");
    copy.querySelector("#roast4").classList.add("circleFull");
    copy.querySelector("#roast5").classList.remove("circleEmpty");
    copy.querySelector("#roast5").classList.add("circleFull");
  }
  if (product.roast == 4) {
    console.log("product.intensity");
    copy.querySelector("#roast1").classList.remove("circleEmpty");
    copy.querySelector("#roast1").classList.add("circleFull");
    copy.querySelector("#roast2").classList.remove("circleEmpty");
    copy.querySelector("#roast2").classList.add("circleFull");
    copy.querySelector("#roast3").classList.remove("circleEmpty");
    copy.querySelector("#roast3").classList.add("circleFull");
    copy.querySelector("#roast4").classList.remove("circleEmpty");
    copy.querySelector("#roast4").classList.add("circleFull");
  }
  if (product.roast == 3) {
    console.log("product.intensity");
    copy.querySelector("#roast1").classList.remove("circleEmpty");
    copy.querySelector("#roast1").classList.add("circleFull");
    copy.querySelector("#roast2").classList.remove("circleEmpty");
    copy.querySelector("#roast2").classList.add("circleFull");
    copy.querySelector("#roast3").classList.remove("circleEmpty");
    copy.querySelector("#roast3").classList.add("circleFull");
  }

  if (product.roast == 2) {
    console.log("product.intensity");
    copy.querySelector("#roast1").classList.remove("circleEmpty");
    copy.querySelector("#roast1").classList.add("circleFull");
    copy.querySelector("#roast2").classList.remove("circleEmpty");
    copy.querySelector("#roast2").classList.add("circleFull");
  }

  if (product.roast == 1) {
    copy.querySelector("#roast1").classList.remove("circleEmpty");
    copy.querySelector("#roast1").classList.add("circleFull");
  }

  document.querySelector(".main").appendChild(copy);
}
