// remove active class from the category buttons 
const removeActive = () => {
    const categoryButtons = document.querySelectorAll(".category-buttons");
    // console.log(categoryButtons);
    categoryButtons.forEach(button => button.classList.remove("active"));
}

// manage the spinner 
const manageSpinner = (status) => {
    if (status == true) {
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("products-container").classList.add("hidden");
    }
    else {
        document.getElementById("spinner").classList.add("hidden");
        document.getElementById("products-container").classList.remove("hidden");
    }
}


// load the categories Button
const loadCategoriesButton = () => {

    const url = "https://fakestoreapi.com/products/categories";
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategoriesButton(data))
}

//displays the category buttons and all button
const displayCategoriesButton = (categories) => {

    const categoryContainer = document.getElementById("categories");
    categoryContainer.innerHTML = "";

    const allButton = document.createElement("button");
    allButton.className = "btn btn-primary rounded-full";
    allButton.innerText = "All";
    categoryContainer.appendChild(allButton);

    allButton.addEventListener('click', () => {
        loadAllProducts();
    })

    categories.forEach(category => {
        const cateGoryDiv = document.createElement("div");
        cateGoryDiv.innerHTML = `

        
        <button id="category-btn-${category}" onclick="loadCategoryProducts('${category.replace(/'/g, "\\'")}')" class="btn btn-outline category-buttons">${category}</button>

        `
        categoryContainer.append(cateGoryDiv)
    })



}



// load all products 

const loadAllProducts = () => {
    manageSpinner(true);
    const url = "https://fakestoreapi.com/products";

    fetch(url)
        .then(res => res.json())
        .then(data => displayAllProducts(data))
}

//load category products
const loadCategoryProducts = (category) => {
    manageSpinner(true);
    const url = `https://fakestoreapi.com/products/category/${category}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeActive();
            const clickCategoryButton = document.getElementById(`category-btn-${category}`);
            clickCategoryButton.classList.add("active");
            displayAllProducts(data);
        })
}


// display all products and category products
const displayAllProducts = (products) => {
    console.log(products)

    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";

    products.forEach(product => {
        console.log(product)
        const allProductsCard = document.createElement("div");
        allProductsCard.innerHTML = `
              <div class="card bg-base-100 w-full md:w-80 shadow-sm product-card">
                    <figure>
                        <img class="px-8 py-5 h-82 bg-gray-200 " src=${product.image} alt="backpack" />
                    </figure>
                    <div class="card-body">
                        <div class="flex justify-between mt-2">
                            <div class="badge badge-soft badge-primary font-semibold">${product.category}</div>
                            <span class="text-gray-500"><i class="fa-solid fa-star text-amber-500 mr-1"></i>${product.rating.rate}
                                (${product.rating.count})</span>
                        </div>
                        <h2 class="card-title truncate">
                            ${product.title}

                        </h2>
                        <p class="font-bold text-xl">$${product.price}</p>
                        <div class="card-actions justify-between">

                            <button onclick="loadProductDetails(${product.id})" class="btn btn-outline px-5"><i class="fa-regular fa-eye"></i>Details</button>
                            <button class="btn btn-primary px-10"><i class="fa-solid fa-cart-shopping"></i>Add</button>




                        </div>
                    </div>
                </div>
        
        `
        productsContainer.append(allProductsCard)
    })
    manageSpinner(false);
}




//load  product details

const loadProductDetails = (id) => {
    const url = `https://fakestoreapi.com/products/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayProductDetails(data))
}


//display productDetails
const displayProductDetails = (product) => {
    console.log(product)

    const detailContainer = document.getElementById("detail-container");
    detailContainer.innerHTML = ` <div class="space-y-3">
        <h2 class="font-bold text-xl">${product.title}</h2>
        <p class="font-medium text-gray-600">${product.description}</p>
        <span class="font-bold">$${product.price}</span>
        <span class="text-gray-500 px-10"><i class="fa-solid fa-star text-amber-600 mr-2 "></i>${product.rating.rate}</span>
      </div>
        <button class="btn btn-primary">Add To Cart</button> `;

    document.getElementById("product_detail").showModal()

}

loadCategoriesButton();

