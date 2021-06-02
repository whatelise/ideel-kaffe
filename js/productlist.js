localStorage.clear();

const urlParams = new URLSearchParams(window.location.search);

let url = "https://keasem2-551e.restdb.io/rest/ideel-products";

function getData() {
  fetch(url, {
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
}

getData();

function showProducts(products) {
  products.forEach((product) => {
    const template = document.querySelector(".product-template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".name").textContent = product.name;
    copy.querySelector(".origin").textContent = product.origin;
    copy.querySelector(".description").textContent = product.description;
    copy.querySelector(".productImage").src = product.productimage;
    copy.querySelector(".productImage").alt = product.name + "product image";
    copy.querySelector(".price").textContent = product.price + ".00 DKK";
    // copy.querySelector(".shop-button").setAttribute("data-id", product._id);
    // copy.querySelector(".shop-button").addEventListener("click", () => {
    //   CART.add(product);
    // });

    copy.querySelector(
      ".viewProduct"
    ).href = `productview.html?products=${product._id}`;

    if (product.intensity == 5) {
      console.log("product.intensity");
      copy.querySelector("#intensity1").classList.add("circleFull");
      copy.querySelector("#intensity1").classList.remove("circleEmpty");
      copy.querySelector("#intensity2").classList.remove("circleEmpty");
      copy.querySelector("#intensity2").classList.add("circleFull");
      copy.querySelector("#intensity3").classList.remove("circleEmpty");
      copy.querySelector("#intensity3").classList.add("circleFull");
      copy.querySelector("#intensity4").classList.remove("circleEmpty");
      copy.querySelector("#intensity4").classList.add("circleFull");
      copy.querySelector("#intensity5").classList.remove("circleEmpty");
      copy.querySelector("#intensity5").classList.add("circleFull");
    }
    if (product.intensity == 4) {
      console.log("product.intensity");
      copy.querySelector("#intensity1").classList.remove("circleEmpty");
      copy.querySelector("#intensity1").classList.add("circleFull");
      copy.querySelector("#intensity2").classList.remove("circleEmpty");
      copy.querySelector("#intensity2").classList.add("circleFull");
      copy.querySelector("#intensity3").classList.remove("circleEmpty");
      copy.querySelector("#intensity3").classList.add("circleFull");
      copy.querySelector("#intensity4").classList.remove("circleEmpty");
      copy.querySelector("#intensity4").classList.add("circleFull");
    }
    if (product.intensity == 3) {
      console.log("product.intensity");
      copy.querySelector("#intensity1").classList.remove("circleEmpty");
      copy.querySelector("#intensity1").classList.add("circleFull");
      copy.querySelector("#intensity2").classList.remove("circleEmpty");
      copy.querySelector("#intensity2").classList.add("circleFull");
      copy.querySelector("#intensity3").classList.remove("circleEmpty");
      copy.querySelector("#intensity3").classList.add("circleFull");
    }

    if (product.intensity == 2) {
      console.log("product.intensity");
      copy.querySelector("#intensity1").classList.remove("circleEmpty");
      copy.querySelector("#intensity1").classList.add("circleFull");
      copy.querySelector("#intensity2").classList.remove("circleEmpty");
      copy.querySelector("#intensity2").classList.add("circleFull");
    }

    if (product.intensity == 1) {
      copy.querySelector("#intensity1").classList.remove("circleEmpty");
      copy.querySelector("#intensity1").classList.add("circleFull");
    }

    document.querySelector(".product-list").appendChild(copy);
  });
}

//* define intensity, create div, div * intensity
