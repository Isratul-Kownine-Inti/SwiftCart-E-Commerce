
// load the categories 
const loadCategories =() =>{
    
    const url = "https://fakestoreapi.com/products/categories";
    fetch(url)
    .then(res=>res.json())
    .then(data =>displayCategories(data))
}

const displayCategories = (categories) =>{
    
    const categoryContainer = document.getElementById("categories");
    // categoryContainer.innerHTML = "";

    categories.forEach(category =>{
        const cateGoryDiv = document.createElement("div");
        cateGoryDiv.innerHTML = `

        
        <button onclick="loadCategoryProducts('${category.replace(/'/g, "\\'")}')" class="btn btn-outline">${category}</button>

        `
        categoryContainer.append(cateGoryDiv)
    })


    
}

const loadAllProducts = () =>{
    const url = "https://fakestoreapi.com/products";

    fetch(url)
    .then(res=>res.json())
    .then(data =>displayAllProducts(data))
}

const displayAllProducts = (products) =>{
    console.log(products)
    
    const allProductsContainer = document.getElementById("all-products-container");
    allProductsContainer.innerHTML = "";

    products.forEach(product =>{
        console.log(product)
        const allProductsCard = document.createElement("div");
        allProductsCard.innerHTML = `
              <div class="card bg-base-100 w-80 shadow-sm product-card">
                    <figure>
                        <img class="px-8 py-5 h-82 bg-gray-200 " src=${product.image} alt="backpack" />
                    </figure>
                    <div class="card-body">
                        <div class="flex justify-between mt-2">
                            <div class="badge badge-soft badge-primary font-semibold">${product.category}</div>
                            <span class="text-gray-500"><i class="fa-solid fa-star text-amber-500 mr-1"></i>${product.rating.rate}
                                (${product.rating.count})</span>
                        </div>
                        <h2 class="card-title">
                            ${product.title}

                        </h2>
                        <p class="font-bold text-xl">$${product.price}</p>
                        <div class="card-actions justify-between">

                            <button class="btn btn-outline px-5"><i class="fa-regular fa-eye"></i>Details</button>
                            <button class="btn btn-primary px-10"><i class="fa-solid fa-cart-shopping"></i>Add</button>




                        </div>
                    </div>
                </div>
        
        `
        allProductsContainer.append(allProductsCard)
    })
}


//load category products
const loadCategoryProducts =(category) =>{
    const url =`https://fakestoreapi.com/products/category/${category}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCategoryProducts(data))
}

// display category products 

const displayCategoryProducts = (categoryProducts)=>{
    console.log(categoryProducts);

    const categoryProductsContainer = document.getElementById("category-products");
    categoryProductsContainer.innerHTML = "";

    categoryProducts.forEach(categoryProduct =>{
         console.log(categoryProduct);
         const categoryProductsCard = document.createElement("div");
         categoryProductsCard.innerHTML = `
              <div class="card bg-base-100 w-80 shadow-sm product-card">
                    <figure>
                        <img class="px-8 py-5 h-82 bg-gray-200 " src=${categoryProduct.image} alt="backpack" />
                    </figure>
                    <div class="card-body">
                        <div class="flex justify-between mt-2">
                            <div class="badge badge-soft badge-primary font-semibold">${categoryProduct.category}</div>
                            <span class="text-gray-500"><i class="fa-solid fa-star text-amber-500 mr-1"></i>${categoryProduct.rating.rate}
                                (${categoryProduct.rating.count})</span>
                        </div>
                        <h2 class="card-title">
                            ${categoryProduct.title}

                        </h2>
                        <p class="font-bold text-xl">$${categoryProduct.price}</p>
                        <div class="card-actions justify-between">

                            <button class="btn btn-outline px-5"><i class="fa-regular fa-eye"></i>Details</button>
                            <button class="btn btn-primary px-10"><i class="fa-solid fa-cart-shopping"></i>Add</button>




                        </div>
                    </div>
                </div>
         `

         categoryProductsContainer.append(categoryProductsCard);
    })
}


loadCategories()
// loadAllProducts()
