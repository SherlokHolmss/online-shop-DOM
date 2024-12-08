const products = [
    { id: 1, name: "Ноутбук", price: 25000, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Смартфон", price: 15000, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Навушники", price: 2000, image: "https://via.placeholder.com/100" },
    { id: 4, name: "Навушники", price: 1000, image: "https://via.placeholder.com/100" },
    { id: 5, name: "Навушники", price: 2000, image: "https://via.placeholder.com/100" },
    { id: 6, name: "Навушники", price: 3000, image: "https://via.placeholder.com/100" }
];
let cart = [];
const test = products[0];
console.log(test);
function renderProducts(){
    const productsList = document.querySelector('.products-list');
    console.log(productsList);
    productsList.innerHTML = '';
    products.forEach(({id,name,image,price, product}) => {
        const productItem = document.createElement('div');
        productItem.classList.add("product-item");
        productItem.innerHTML = `
            <img src="${image}">
            <h2>${name}</h2>
            <p>Цiна: ${price}</p>
            <button id=${id}>Додати в кошик</button>
        `;

        productsList.appendChild(productItem);
        let button = document.getElementById(id);
        button.addEventListener("click",() => addToBin(id))
    });
}
function addToBin(productId){
    cart.push(productId);
    updateCart();
}
function updateCart() {
    const itemCount = document.getElementById('item-count');
    const totalPrice = document.getElementById('total-price');
    let totalItems = cart.length;
    let totalCost = cart.reduce((acc, productId) => {
        const product = products.find(p => p.id === productId);
        return acc + (product ? product.price : 0);
    }, 0);
    itemCount.textContent = totalItems;
    totalPrice.textContent = totalCost;
}

renderProducts();