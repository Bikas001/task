const productCard = document.getElementById("productCard");
const randonIcon = ['fa-brands fa-tiktok', "fa-solid fa-music", "fa-solid fa-paperclip", "fa-solid fa-wifi", "fa-solid fa-bus"]
const fetchAllProduct = async () => {
    const products = await fetch(`http://localhost:3000/products`).then(res => res.json())
    console.log(products)
    let producDiv = '';
    products.forEach(element => {
        producDiv += templateProduct(element)
    });
    console.log(producDiv)
    productCard.innerHTML = producDiv
    slickSlider();
}

const slickSlider = () => {
    $(".regular").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true
    });
}

const templateProduct = (product) => {

    const options = (product.images).map((value, i) => `<div><img class="card-image" src="${value.url}" /></div>`);
    const tags = (product.tags).map((value) => `<span><i class="${randonIcon[Math.floor(Math.random() * 5)]}"></i> ${value}</span>`)
    const tags2 = (product.tags2).map(value => `<span><i class="${randonIcon[Math.floor(Math.random() * 5)]}"></i> ${value}</span>`)

    return (
        `
        <div class="col-12 col-md-4 col-lg-4 col-sm-12">
        <div class="card">
            <div class="header">
                <section class="regular slider">
                    ${options.join("")}
                </section>
                <button class="fav-icon" id="favIcon">
                    <i class="fa-regular favi fa-heart"></i>
                </button>
            </div>
            <div class="card-body">
                <p><b>${product.title}</b> <br>
                    <span class="location"> <i class="fa-solid  fa-location-dot"></i>  ${product.streetAddress}, ${product.city}, ${product.country}
                    </span>
                </p>

                <div class="facality">
                    ${tags.join("")}
                </div>
                <div class="facality-1">
                    ${tags2.join("")}
                </div>
                <br>
                <div class="price-section">
                    <div class="price flex-1">
                        <b>${product.price}${product.currencySymbol}  ${product.currencyCode}</b>
                    </div>
                    <div class="star flex-1">
                        <span class="star-section"><i class="fa-regular fa-thumbs-up"></i> ${product.rating}%</span> (${product.star})
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    )
}

fetchAllProduct()

