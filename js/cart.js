/* 

window.onscroll = function() {myFunction()};


var navbar = document.getElementById("cart");


var sticky = cart.offsetTop;
 */

/* function myFunction() {
  if (window.pageYOffset >= sticky) {
    cart.classList.add("sticky")
  } else {
    cart.classList.remove("sticky");
  }
} */

window.addEventListener("load", hideCart);

function showCart() {
  console.log("showCart()");
  this.removeEventListener("click", showCart);
  document.querySelector("#cart").classList.add("show-cart");
  document.querySelector(".cart-icon").addEventListener("click", hideCart);
  document.querySelector(".x").addEventListener("click", hideCart);
}

function hideCart() {
  console.log("hideCart()");
  this.removeEventListener("click", hideCart);
  document.querySelector("#cart").classList.remove("show-cart");
  document.querySelector(".cart-icon").addEventListener("click", showCart);
}

const CART = {
  KEY: "basket",
  contents: [],
  init() {
    let _contents = localStorage.getItem(CART.KEY);
    if (_contents) {
      CART.contents = JSON.parse(_contents);
    } else {
    }
    CART.sync();
  },
  sync() {
    let _cart = JSON.stringify(CART.contents);
    localStorage.setItem(CART.KEY, _cart);

    CART.updateDOM();
  },
  updateDOM() {
    countCart();
    totalCart();
    const cartcontentEl = document.querySelector(".cart-content");
    cartcontentEl.innerHTML = "";
    if (CART.contents.length === 0) {
      cartcontentEl.innerHTML = "<h4> THE CART IS EMPTY</h4>";
      document.querySelector(".checkoutbutton").classList.add("hidden");
    } else {
      CART.contents.forEach((element) => {
        console.log(element);
        const checkoutButton = document.querySelector(".checkoutbutton");
        if (checkoutButton.classList.contains("hidden")) {
          document.querySelector(".checkoutbutton").classList.remove("hidden");;
        }        
         const tempItem = document.querySelector(".cart-item-template").content;
        const itemCopy = tempItem.cloneNode(true);

        const id = element._id;
        const labelEl = itemCopy.querySelector(".label");
        labelEl.textContent = element.name;
        labelEl.setAttribute("for", "fid-" + id);

        const minusBtn = itemCopy.querySelector(".minus");
        minusBtn.addEventListener("click", () => {
          CART.minusOne(id);
        });

        const plusBtn = itemCopy.querySelector(".plus");
        plusBtn.addEventListener("click", () => {
          CART.plusOne(id);
        });

        const inputEl = itemCopy.querySelector("input");
        inputEl.id += id;
        inputEl.name += id;
        inputEl.value = element.qty;

        inputEl.addEventListener("change", () => {
          const itemQty = inputEl.valueAsNumber;
          element.qty = itemQty;
          console.log("element");
          console.log(element.qty);
          CART.update(element);
        });
        inputEl.addEventListener("focus", (e) => {
          e.target.select();
        });
        const priceEL = itemCopy.querySelector(".price-each span");
        priceEL.textContent = element.price;

        const collectionEl = itemCopy.querySelector(".label2");
        collectionEl.textContent = element.collection;
        itemCopy.querySelector(".cart-product-img-container img").src =
          element.productimage;

        cartcontentEl.appendChild(itemCopy);
      });
    }
  },
  add(obj) {
    const index = CART.contents.findIndex((element) => element._id == obj._id);
    if (index == -1) {
      console.log(obj);
      obj.qty = 1;
      console.log(CART.contents);
      CART.contents.push(obj);
    } else {
      CART.contents[index].qty += 1;
    }
    this.sync();
  },
  update(obj) {
    const index = CART.contents.findIndex((element) => element._id == obj._id);
    if (obj.qty === 0) {
      CART.contents.splice(index, 0);}
      if (obj.qty < 0) {
        CART.contents.splice(index, 1);
    } else {
      CART.contents[index].qty = obj.qty;
    }
    // const inputEl = document.querySelector("#fid-" + obj._id);
    // CART.contents[index].qty = inputEl.valueAsNumber;

    CART.sync();
  },

  minusOne(id) {
    const indexObj = CART.contents.find((element) => element._id == id);
    indexObj.qty--;
    console.log(indexObj);
    CART.update(indexObj);
  },
  plusOne(id) {
    const indexObj = CART.contents.find((element) => element._id == id);
    indexObj.qty++;
    CART.update(indexObj);
  },
};
var totalCount = 0;
function countCart() {
  var totalCount = 0;
  for (var index in CART.contents) {
    totalCount += CART.contents[index].qty;
  }
  return totalCount;
}

function totalCart() {
  var totalCost = 0;

  /*add shipping */
const radioButtons = document.getElementById("shipping-radio")
  for (var index in CART.contents) {
    totalCost += CART.contents[index].price * CART.contents[index].qty;
    if (document.body.contains(radioButtons)) {
      document.querySelector(".shipping-price span").innerHTML= "&#x7e";
      console.log("there are radio buttons");
     const radioButton40 = document.querySelector(".shipping40");
     const radioButton100 = document.querySelector(".shipping100");
      radioButton40.addEventListener("click", () => {
      let totalCost = 40;
       totalCost += CART.contents[index].price * CART.contents[index].qty; 
       console.log(totalCost);
       document.querySelector(".cartTotal").textContent = `${totalCost}`
       document.querySelector(".shipping-price span").textContent = 40;
      })
      radioButton100.addEventListener("click", () => {
        console.log("shipping 100 clicked")
       totalCost = 100;
       totalCost += CART.contents[index].price * CART.contents[index].qty; 
        document.querySelector(".cartTotal").textContent = `${totalCost}`;
        document.querySelector(".shipping-price span").textContent = 100;
    })}
      /*add shipping end */

  else {
  totalCost += CART.contents[index].price * CART.contents[index].qty;
  }
    document.querySelector(".cartTotal").textContent = `${totalCost}`;
    console.log(totalCost);
     document.querySelector(".cart-qty1").textContent = `${CART.contents[index].qty}`;
    document.querySelector( ".cart-qty2").textContent = `${CART.contents[index].qty}`;
  
  return totalCost;
}}

CART.init();
