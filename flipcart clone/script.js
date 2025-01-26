// Simulated product data
const products = [
    {
      id: 1,
      name: "Samsung Galaxy S21",
      price: "11699",
      image: "https://th.bing.com/th/id/OIP.p7gM24R16lBeCnpDr9QgeAHaFq?w=199&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 2,
      name: "Apple iPhone 14",
      price: "29999",
      image: "https://th.bing.com/th/id/OIP.7loXCV46y-_E5Aa84fHYPwHaEK?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 3,
      name: "Sony WH-1000XM4 Headphones",
      price: "1349",
      image: "https://th.bing.com/th/id/OIP.7vYt7fZguS1alClgxDz0GgHaE8?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 4,
      name: "Dell XPS 13 Laptop",
      price: "3199",
      image: "https://m.media-amazon.com/images/I/71QiWcxsv4L._AC_SL1500_.jpg",
    },
  ];
  
  // Dynamically load products into the page
  const productList = document.getElementById("product-list");
  
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
  
    productList.appendChild(productCard);
  });
  
  // Add to Cart functionality
  function addToCart(productName) {
    alert(`${productName} has been added to your cart!`);
  }
  let slideIndex = 0;

// Function to Show Slides
function showSlides() {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove 'active' class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Increment the slide index
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show the current slide and highlight the dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Automatically change slides every 4 seconds
  setTimeout(showSlides, 3000);
}

// Function to Change Slide (Next/Prev)
function changeSlide(n) {
  slideIndex += n - 1;
  showSlides();
}

// Function to Go to Specific Slide
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

// Start the slideshow on page load
showSlides();

  