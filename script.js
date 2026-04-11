// SCROLL FUNCTION
function scrollToProducts() {
    let section = document.getElementById("products");
    if(section){
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// ADD TO CART
function addToCart(name, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name: name, price: price });

    localStorage.setItem("cart", JSON.stringify(cart));

    // SHOW MESSAGE (SAFE)
    let msg = document.getElementById("cartMessage");

    if(msg){
        msg.style.display = "block";

        setTimeout(() => {
            msg.style.display = "none";
        }, 2000);
    }

}
