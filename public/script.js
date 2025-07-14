//
const arrAllProducts = [
    {
        id: 1,
        name: 'Iphone',
        desc: 'Product sales',
        image: 'iphone.jpg',
        price: 100,
    },
    {
        id: 2,
        name: 'Samsung',
        desc: 'Product sales',
        image: 'samsung.jpg',
        price: 90,
    },
    {
        id: 3,
        name: 'Oppo',
        desc: 'Product sales',
        image: 'oppo.jpg',
        price: 80,
    },
    {
        id: 4,
        name: 'Xiaomi',
        desc: 'Product sales',
        image: 'xiaomi.jpg',
        price: 82,
    },
    {
        id: 5,
        name: 'Vivo',
        desc: 'Product sales',
        image: 'vivo.jpg',
        price: 55,
    },
    {
        id: 6,
        name: 'Realme',
        desc: 'Product sales',
        image: 'realme.jpg',
        price: 60,
    },
    {
        id: 7,
        name: 'Honor',
        desc: 'Product sales',
        image: 'honor.jpg',
        price: 73,
    },
]

const arrProductsSale = [
    {
        id: 1,
        name: 'Iphone',
        desc: 'Product sales',
        image: 'iphone.jpg',
        price: 100,
    },
    {
        id: 2,
        name: 'Samsung',
        desc: 'Product sales',
        image: 'samsung.jpg',
        price: 90,
    },
    {
        id: 3,
        name: 'Oppo',
        desc: 'Product sales',
        image: 'oppo.jpg',
        price: 80,
    },
    {
        id: 4,
        name: 'Xiaomi',
        desc: 'Product sales',
        image: 'xiaomi.jpg',
        price: 82,
    },
    {
        id: 5,
        name: 'Vivo',
        desc: 'Product sales',
        image: 'vivo.jpg',
        price: 55,
    },
]

const product_sale = document.querySelector('.sale_products');

function showProductItemSale(arrProducts, productElement){
    arrProducts.forEach(e => {
        productElement.innerHTML += `
            <div class="product_item">
                <a href="#">
                    <h1>${e.name}</h1>
                    <img src="./image/${e.image}" alt="Hinh">
                    <p>${e.desc}</p>
                    <p>${e.price}$</p>
                </a>
                <div class="func_product">
                    <input type="number" placeholder="0">
                    <button>Add to cart</button>
                    <a href="#">Buy</a>
                </div>
            </div>
        `;
    });
}


showProductItemSale(arrProductsSale, product_sale);
