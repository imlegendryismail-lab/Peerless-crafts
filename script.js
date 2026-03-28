function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}
const urlParams = new URLSearchParams(window.location.search);
const price = urlParams.get('price');
function addToCart() {
    alert("Item added to cart 🛒");
}
const params = new URLSearchParams(window.location.search);

const price = params.get("price");
const name = params.get("name");

if(price && name){
const delivery = 50;
const total = Number(price) + delivery;

document.getElementById("productName").innerText = name;
document.getElementById("productPrice").innerText = "₹" + price;
document.getElementById("delivery").innerText = "₹" + delivery;
document.getElementById("total").innerText = "₹" + total;
}
function addToCart(name, price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({name, price});

localStorage.setItem("cart", JSON.stringify(cart));

// show message
let msg = document.getElementById("cartMessage");
msg.style.display = "block";

setTimeout(() => {
msg.style.display = "none";
}, 2000);

}
if(cart.length === 0){
container.innerHTML = "Your cart is empty 🛒";
}