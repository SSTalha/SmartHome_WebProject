
let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    name:'TCL75" 4-Series LED 4K UHD Smart Google Tv',
    tag:'TLC',
    price:1163.99,
    inCart:0
  },
  {
    name:'LG C155" Class 4K Smart OLED TVw/ Ai ThinQ',
    tag:'LG',
    price:844.99,
    inCart:0
  },
  {
    name:'SAMSUNG 75" Neo QLED 8K Smart TV',
    tag:'Samsung',
    price:960.66,
    inCart:0
  },
  {
    name:'SAMSUNG 65" The Terrace QLED 4K Outdoor Smart TV',
    tag:'Samsung',
    price:1020.12,
    inCart:0
  },
  {
    name:'Google Nest Audio',
    tag:'Google Nest',
    price:399.99,
    inCart:0
  },
  {
    name:'VIZIO M-Series 5.1 Home Theater SoundBar',
    tag:'VIZIO',
    price:669.49,
    inCart:0
  },
  {
    name:'Google Nest Mini(2nd gen)',
    tag:'Google Nest',
    price:260.12,
    inCart:0
  },
  {
    name:'Klipsch Cinema 800 Dolby Atmos 3.1 SoundBar',
    tag:'Klipsch',
    price:421.77,
    inCart:0
  },
  {
    name:'Microsoft X-box Series X',
    tag:'Ms',
    price:714.22,
    inCart:0
  },
  {
    name:'ROKU Streaming Stick 4k',
    tag:'ROKU',
    price:164.79,
    inCart:0
  },
  {
    name:'Google Nest Hub 2nd Gen',
    tag:'Google Nest',
    price:449.33,
    inCart:0
  },
  {
    name:'ROKU StreamBar Pro SoundBar',
    tag:'ROKU',
    price:570.42,
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
