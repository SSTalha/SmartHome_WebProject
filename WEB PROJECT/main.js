
let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    name:'  SAMSUNG Jet Bt AI+ Robot Vacuum',
    tag:'SAMSUNG Jet Bt AI+',
    price:463.99,
    inCart:0
  },
  {
    name:'EUFY RoboVac X8 Hybrid Robot Vacuum',
    tag:'EUFY RoboVac X8',
    price:574.49,
    inCart:0
  },
  {
    name:'iRobot Roomba J7+Self-Emptying Robot Vacuum',
    tag:'iRobot Roomba',
    price:660.66,
    inCart:0
  },
  {
    name:'iRobot S9+ 9550 WIFI Connected Robot Vacuum',
    tag:'iRobot S9+',
    price:780.12,
    inCart:0
  },
  {
    name:'SAMSUNG Smart Over-The-Range Microwave',
    tag:'SAMSUNG Smart',
    price:951.99,
    inCart:0
  },
  {
    name:'LG Front Control Smart DishWasher with Quadwash',
    tag:'LG Front Control',
    price:774.49,
    inCart:0
  },
  {
    name:'GE Cafe 27.6 cu.ft. 4-Door French Door Refrigerator',
    tag:'GE Cafe 27.6 cu.ft.',
    price:1830.12,
    inCart:0
  },
  {
    name:'Thermador Built-in Coffee Machine',
    tag:'Thermador Built-in',
    price:1346.77,
    inCart:0
  }
]


for(let i=0; i< carts.length; i++){
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
      document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(products){
  let productNumbers = localStorage.getItem('cartNumbers');

  productNumbers = parseInt(productNumbers);

if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
}else{
  localStorage.setItem('cartNumbers', 1);
  document.querySelector('.cart span').textContent = 1;
}

setItems(products);
}


function setItems(products){

let cartItems = localStorage.getItem('productsInCart');
cartItems = JSON.parse(cartItems);

if(cartItems != null){

if(cartItems[products.tag] == undefined){
  cartItems = {
    ...cartItems,
    [products.tag]:products
  }
}

  cartItems[products.tag].inCart += 1;
}
else{
  products.inCart = 1;
cartItems = {
    [products.tag]:products
}
}
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(products){
let cartCost = localStorage.getItem('totalCost');

// console.log("my cartCost is",cartCost);
// console.log(typeof cartCost);

if(cartCost != null){
  cartCost = parseInt(cartCost)
  localStorage.setItem("totalCost", cartCost +products.price);
}else{
  localStorage.setItem("totalCost",products.price);
}
}

function displayCart(){
let cartItems = localStorage.getItem("productsInCart");
cartItems = JSON.parse(cartItems);
let productContainer = document.querySelector(".products");
let cartCost = localStorage.getItem('totalCost');

if(cartItems && productContainer){
productContainer.innerHTML = '';
Object.values(cartItems).map(item => {
  productContainer.innerHTML += `
  <div class="product"><span>${item.name}</span></div>
  <div class="price">$${item.price}</div>
  <div class="quantity">${item.inCart}</div>
  <div class="total">$${item.inCart * item.price}</div>
  `
});
    productContainer.innerHTML +=`
    <div class ="basketTotalContainer">
    <h4 class="basketTotalTitle">Basket Total: </h4>
    <h4 class="basketTotal">$${cartCost}</h4>
    </div>
    `
}
}

onLoadCartNumbers();
displayCart();
