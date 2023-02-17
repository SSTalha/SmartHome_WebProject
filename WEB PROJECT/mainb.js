
let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    name:'Wyze Cam Outdoor Security Camera Starter Bundle',
    tag:'Wyze',
    price:149.99,
    inCart:0
  },
  {
    name:'Arlo Pro 4 Wireless Security Camera',
    tag:'Arlo',
    price:162.45,
    inCart:0
  },
  {
    name:'  D-link Full HD Outdoor Spotlight Camera Pro',
    tag:'D-link',
    price:199.21,
    inCart:0
  },
  {
    name:'Google Nest Cam',
    tag:'Google Nest',
    price:225.42,
    inCart:0
  },
  {
    name:'  Wyze Lock WI-FI and Bluetooth Enabled Smart-Lock',
    tag:'Wyze',
    price:263.99,
    inCart:0
  },
  {
    name:'Nest X Yale Lock',
    tag:'Nest X Yale',
    price:94.49,
    inCart:0
  },
  {
    name:'Yale Assure Lock SL Key Free TouchScreen SmartLock',
    tag:'Yale Assure',
    price:80.42,
    inCart:0
  },
  {
    name:'August WI-FI Smart-Lock',
    tag:'August',
    price:91.42,
    inCart:0
  },
  {
    name:'Vivint Doorbell Camera pro',
    tag:'Vivint',
    price:184.22,
    inCart:0
  },
  {
    name:'  Arlo Essential Wireless video Doorbell',
    tag:'Arlo',
    price:264.79,
    inCart:0
  },
  {
    name:'SimpliSafe Video Doorbell pro',
    tag:'SimpliSafe',
    price:239.2,
    inCart:0
  },
  {
    name:'HealthZenith Wired Smart Doorbell Motion Sensor',
    tag:'HealthZenith',
    price:391.42,
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
  <div class = "products" >
    <span>${item.name}</span>
  </div>
  <div class = "price">$${item.price}</div>
  <div class = "quantity">${item.inCart}</div>
  <div class = "total">
  $${item.inCart * item.price}
  </div>
  `
});
productContainer.innerHTML += `
    <div class ="basketTotalContainer">
    <h4 class="basketTotalTitle">Basket Total: </h4>
    <h4 class="basketTotal">$${cartCost}</h4>
</div>
`
}
}
onLoadCartNumbers()
displayCart()
