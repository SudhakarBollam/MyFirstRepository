let totalProductPrice = 0;
let i = 0;

function addToCart(button) {
    alert("Product Added");
    i = i + 1;
    let product = button.parentElement;
    let productName = product.getAttribute("data-name");
    let productPrice = parseInt(product.getAttribute("data-price").replace(/\D/g, ""));
    totalProductPrice += productPrice;
    let cartItem = document.createElement("div");
    cartItem.innerHTML = `<p><strong>${i}:- ${productName} : Rs. ${productPrice}</strong></p>`;

    document.getElementById("cart").appendChild(cartItem);
    document.getElementById("sectionCart").style.display = "block";
    let platformFee = 100;
    let deliveryCharge = 50;
    let finalTotal = totalProductPrice + platformFee + deliveryCharge;

    document.getElementById("productPriceTotal").innerText = `Rs. ${totalProductPrice}`;
    document.getElementById("totalPrice").innerText = `Rs. ${finalTotal}`;
}