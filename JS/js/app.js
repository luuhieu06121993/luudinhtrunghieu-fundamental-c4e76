function saveDataToLocalStorage() {
    let jsonData = JSON.stringify(fake_data);
    localStorage.setItem("clothes", jsonData);
}
saveDataToLocalStorage();

let clothes = JSON.parse(localStorage.getItem("clothes")); 
let cart = [];

function showClothes() {
    let clothesList = document.querySelector("#clothes-list");

    for (let cloth of clothes) {
        let html = `
        <tr class="cloth">
            <td class="name">${cloth.name}</td>
            <td class="price">${cloth.price}</td>
            <td>${cloth.brand}</td>
            <td><button class="btn btn-primary">Show Images</button></td>
            <td>${cloth.size}</td>
            <td>${cloth.color}</td>
            <td>
                <input type="number" class="buy-number" min="0" value="1"/>
                <button class="btn btn-success" onclick="addToCart(event)">Add to cart</button>
            </td>
        </tr>`;
        clothesList.querySelector("tbody").innerHTML += html;
    }
}
showClothes();

function addToCart(event) {
    let cloth = event.target.parentNode.parentNode;
    let name = cloth.querySelector(".name").innerText;
    let price = cloth.querySelector(".price").innerText;
    let number = cloth.querySelector(".buy-number").value;

    let item = { name: name, price: price, number: number }
    cart.push(item);
    alert("Item has been added to cart");
}

function showCart() {
    let cartItemsList = document.querySelector("#cart-items-list");
    cartItemsList.querySelector("tbody").innerHTML = "";
    let totalPrice = 0;
    let index = 0;
    for (let item of cart) {
        let totalPricePerItem = item.price * item.number;
        totalPrice += totalPricePerItem;
        let html = `
        <tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.number}</td>
            <td>${totalPricePerItem}</td>
            <td><button class="btn btn-danger" onclick="cancelItemInCart(${index})">Cancel</button></td>
        </tr>`;
        cartItemsList.querySelector("tbody").innerHTML += html;
        index++;
    }

    document.querySelector("#total-price").innerText = totalPrice;
}

function cancelItemInCart(index) {
    cart.splice(index, 1);
    showCart();
}

function buyNow(event) {
    let cartDetail = event.target.parentNode;
    let orderDetail = {
        name: cartDetail.querySelector("#guest-name").value,
        address: cartDetail.querySelector("#guest-address").value,
        phoneNumber: cartDetail.querySelector("#guest-phone-number").value,
        order: cart
    };

    console.log("A guest has ordered");
    console.log(orderDetail);
}