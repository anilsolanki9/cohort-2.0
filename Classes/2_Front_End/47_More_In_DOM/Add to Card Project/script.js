// Show real producrs
// show real popular products
// on click product ad it to cart

let productsContainer = document.querySelector(".products");
let popularsContainer = document.querySelector(".populars");

const popularProducts = [
  {
    name: "Nike Shoes",
    headline: "Daily Running Shoes",
    price: 4999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Headphones",
    headline: "Wireless Deep Bass",
    price: 2499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Apple Watch",
    headline: "Smart Fitness Watch",
    price: 29999,
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3RzfGVufDB8fDB8fHww",
  },
  {
    name: "Wrist Watch",
    headline: "Elegant Analog Watch",
    price: 3199,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
  },
];

const products = [
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    name: "Nike Shoes",
    headline: "Daily Running Shoes",
    price: 4999,
  },
  {
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    name: "Headphones",
    headline: "Wireless Deep Bass",
    price: 2499,
  },
  {
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    name: "Cosmetics Kit",
    headline: "Beauty Essentials Kit",
    price: 1299,
  },
  {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    name: "Wrist Watch",
    headline: "Elegant Analog Watch",
    price: 3199,
  },
  {
    image: "https://images.unsplash.com/photo-1693168045046-9a4b4f30f1c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "Tomato Soup",
    headline: "Hot Tomato Soup",
    price: 149,
  },
  {
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    name: "Apple Watch",
    headline: "Smart Fitness Watch",
    price: 29999,
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1719289799376-d3de0ca4ddbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    name: "Coffee Mug",
    headline: "Ceramic Coffee Mug",
    price: 399,
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    name: "Face Wash",
    headline: "Gentle Skin Cleanser",
    price: 249,
  },
];

const cartProducts = [];

function showProducts(arr) {
  let clutter = "";
  arr.forEach((product, index) => {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                  <img loading="lazy" 
                    class="w-full h-full object-cover object-center"
                    src=${product.image}
                    alt=""
                  />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">₹${product.price}</h4>
                        </div>
                        <button data-idx="${index}" class="w-10 h-10 rounded-full shader text-yellow-400"><i
                                class="ri-add-line pointer-events-none"></i></button>
                    </div>
                </div>
            </div>`;
  });
  productsContainer.innerHTML = clutter;
}

showProducts(products);

function showPopularProducts(arr) {
  let clutter = "";
  arr.forEach((product) => {
    clutter += `<div class="popular bg-white p-2 rounded-2xl w-fit pr-20 flex items-start gap-3 w-[60%] flex-shrink-0">
            <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
              <img loading="lazy" 
                class="w-full h-full object-cover"
                src=${product.image}
                alt=""
              />
            </div>
            <div class="data py-2 w-full">
              <h1 class="leading-none font-semibold">${product.name}</h1>
              <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
              <h4 class="mt-3 font-semibold text-zinc-500">₹${product.price}</h4>
            </div>
          </div>`;
  });
  popularsContainer.innerHTML = clutter;
}

showPopularProducts(popularProducts);

function addToCard() {
  productsContainer.addEventListener("click", (dets) => {
    cartProducts.push(products[dets.target.dataset.idx]);
    console.log(cartProducts);
  });
}

addToCard();

function showCart(){
  
}
