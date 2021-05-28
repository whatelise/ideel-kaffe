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

    const intensity = product.intensity;
    const div = document.createElement("div") * intensity;
    (div) => {
      style.color = "#FF663E";
      copy.querySelector(".rating").appendChild(div);
    };

    copy.querySelector(".price").textContent = product.price + ".00 DKK";
    // copy.querySelector(".shop-button").setAttribute("data-id", product._id);
    // copy.querySelector(".shop-button").addEventListener("click", () => {
    //   CART.add(product);
    // });

    // copy.querySelector(
    //   ".viewProduct"
    // ).href = `productview.html?products=${product._id}`;
    document.querySelector(".product-list").appendChild(copy);
  });
}

//* define intensity, create div, div * intensity
