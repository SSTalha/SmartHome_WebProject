
let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    name:'Insteon Remote Control Dimmer Keypad,8 Button',
    tag:'Insteon',
    price:29.99,
    inCart:0
  },
  {
    name:'LIFX Smart Switch',
    tag:'LIFX',
    price:12.40,
    inCart:0
  },
  {
    name:'Geeni Tap Dim Smart WIFI Dimmer Switch',
    tag:'Geeni Tap',
    price:36.21,
    inCart:0
  },
  {
    name:'Wyze Smart 15 Amp Programmable Touch Light Switch',
    tag:'Wyze Smart',
    price:55.42,
    inCart:0
  },
  {
    name:'Geeni Prisma Plus 800 WI-FI Smart LED Bulb',
    tag:'Geeni Prisma',
    price:63.99,
    inCart:0
  },
  {
    name:'NanoLeaf Shaped Hexagons Smarter Kit',
    tag:'NanoLeaf',
    price:94.49,
    inCart:0
  },
  {
    name:'LIFX Color E26',
    tag:'LIFX',
    price:80.42,
    inCart:0
  },
  {
    name:'NanoLeaf Shaped Triangles Smarter Kit',
    tag:'NanoLeaf',
    price:91.42,
    inCart:0
  },
  {
    name:'Lutron Outdoor SmartPlug',
    tag:'Lutron',
    price:21.54,
    inCart:0
  },
  {
    name:'D-link Mini WIFI SmartPlug',
    tag:'D-link',
    price:14.49,
    inCart:0
  },
  {
    name:'Wemo WIFI SmartPlug(3 pack)',
    tag:'Wemo',
    price:30.42,
    inCart:0
  },
  {
    name:'TP-Link kasa Smart WIFI Plug Mini',
    tag:'TP-Link',
    price:17.42,
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
        <div class = "product">
          <div class = "product-info">
            <span>Product Name: ${item.name}</span>
            <span>Price: $${item.price}</span>
            <span>Quantity: ${item.inCart}</span>
          </div>
          <div class = "product-total">
            <span>Total: $${item.inCart * item.price}</span>
          </div>
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
