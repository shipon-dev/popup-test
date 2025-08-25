// =================================================================
// 1. DATA: Array of Coffee Product Objects
// =================================================================
const coffeeProducts = [
  {
    name: "Quantum Espresso",
    price: "$3.50",
    description:
      "A pure, intense shot representing the fundamental particle of coffee flavor. This exceptional espresso is crafted from premium Arabica beans roasted to perfection, delivering a strong, direct, and foundational coffee experience. The rich crema and bold flavor profile make it the perfect base for any coffee creation or a standalone delight for those who appreciate the essence of true espresso.",
    imageUrl:
      "https://images.unsplash.com/photo-1648867134727-0b868ba73eb4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UXVhbnR1bSUyMEVzcHJlc3NvfGVufDB8fDB8fHww",
    category: "blend",
  },
  {
    name: "Nebula Nectar",
    price: "$4.75",
    description:
      "A smooth, swirling latte that's as mysterious and beautiful as a distant galaxy. This celestial creation combines our signature espresso with velvety steamed milk and a hint of vanilla, creating a creamy and cosmic experience. The artisanal latte art on each cup represents the unique nebula that inspired this drink, making it not only a delight for the palate but also a feast for the eyes.",
    imageUrl:
      "https://images.unsplash.com/photo-1652489997179-42304c715ac5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmVidWxhJTIwTmVjdGFyJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    category: "single-origin",
  },
  {
    name: "Gravity Drip",
    price: "$3.25",
    description:
      "A classic drip coffee with a rich, grounding flavor that pulls you in. This comforting and familiar brew is made using time-honored methods that allow the coffee to develop its full flavor profile through a slow, meticulous brewing process. The result is a perfectly balanced cup with notes of chocolate, caramel, and a hint of citrus that will warm your soul and awaken your senses.",
    imageUrl:
      "https://images.unsplash.com/photo-1681159201729-8e8a221053fc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R3Jhdml0eSUyMERyaXAlMjBmb29kfGVufDB8fDB8fHww",
    category: "blend",
  },
  {
    name: "Supernova Cold Brew",
    price: "$5.00",
    description:
      "An explosive burst of smooth, low-acid coffee steeped for 18 hours. This powerful and refreshing kickstart is crafted from specially selected beans that are coarse-ground and slowly steeped in cold water to extract maximum flavor without bitterness. The result is a remarkably smooth concentrate that can be enjoyed black or customized with your choice of milk and sweeteners for a truly stellar coffee experience.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1754254846181-f9cc7a3a7d07?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFN1cGVybm92YSUyMENvbGQlMjBCcmV3fGVufDB8fDB8fHww",
    category: "single-origin",
  },
  {
    name: "Zenith Decaf",
    price: "$3.50",
    description:
      "All the rich, complex flavor of a mountaintop sunrise, without the caffeine. Our Swiss Water Process decaffeination method preserves the bean's natural flavors while gently removing caffeine. This results in a coffee with notes of dark chocolate, toasted nuts, and a subtle berry finish that's perfect for a peaceful evening or anytime you want to enjoy premium coffee without the stimulating effects.",
    imageUrl:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop",
    category: "decaf",
  },
  {
    name: "Atomic Mocha",
    price: "$5.25",
    description:
      "A fission of rich espresso and decadent chocolate, creating a chain reaction of deliciousness. This indulgent beverage combines our signature Quantum Espresso with premium dark chocolate sauce and steamed milk, topped with whipped cream and chocolate shavings. The perfect balance of bitter and sweet, this mocha will set off a flavor explosion that will delight your taste buds and satisfy your chocolate cravings.",
    imageUrl:
      "https://images.unsplash.com/photo-1618576230663-9714aecfb99a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9jaGF8ZW58MHx8MHx8fDA%3D",
    category: "blend",
  },
];

// =================================================================
// 2. Main Application Logic
// =================================================================
document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("product-grid");

  // Check if product grid exists before proceeding
  if (!productGrid) {
    // Only initialize other components if product grid is not required
    initializeMobileMenu();
    initializeNavbarScroll();
    initializePopup();
    return;
  }

  // Check if we're on the index/home page
  const currentPath = window.location.pathname;
  const isIndexPage =
    currentPath === "/" ||
    currentPath === "/index.html" ||
    currentPath.includes("index");

  // Determine how many products to show
  const productsToShow = isIndexPage
    ? coffeeProducts.slice(0, 3)
    : coffeeProducts;

  // Step 2.1: Generate and insert the product card HTML
  productGrid.innerHTML = productsToShow
    .map(
      (product) => `
          <div class="group product-card relative bg-brand-light rounded-2xl shadow-lg overflow-hidden" data-category="${
            product.category
          }">
            <div class="relative overflow-hidden">
              <img src="${product.imageUrl}" alt="${
        product.name
      }" class="w-full h-80 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-6">
                <h3 class="font-serif text-3xl text-white">${product.name}</h3>
                <p class="text-xl text-brand-accent font-semibold mt-1">${
                  product.price
                }</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-brand-gray mb-4 line-clamp-3">${
                product.description
              }</p>
              <button
                onclick="showProductPopup('${product.name}', '${
        product.price
      }', '${product.imageUrl}', '${product.description.replace(/'/g, "\\'")}')"
                class="inline-block bg-brand-dark text-white px-6 py-2 rounded-full font-semibold hover:bg-brand-accent transition-all duration-300 transform group-hover:-translate-y-1">
                View Details
              </button>
            </div>
          </div>
        `
    )
    .join("");

  // Step 2.2: Initialize all interactive components
  initializeFiltering();
  initializeMobileMenu();
  initializeNavbarScroll();
  initializePopup();
});

// =================================================================
// 3. Component Initialization Functions
// =================================================================

/**
 * Sets up the event listeners for the product filter buttons.
 */
function initializeFiltering() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  // Only proceed if filter buttons exist (menu page specific)
  if (filterButtons.length === 0) {
    return;
  }

  // Use a timeout to allow cards to render before animating them in
  setTimeout(() => {
    productCards.forEach((card) => card.classList.add("animate-fade-in"));
  }, 100);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update button styles
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      // Show/hide cards based on filter
      productCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (filterValue === "*" || cardCategory.includes(filterValue)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}

/**
 * Sets up the mobile menu open/close functionality.
 */
function initializeMobileMenu() {
  const mobileMenuContainer = document.getElementById("mobile-menu-container");
  const openMenuBtn = document.getElementById("menu-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const menuBackdrop = document.getElementById("mobile-menu-backdrop");

  // Check if required elements exist
  if (!mobileMenuContainer || !openMenuBtn || !closeMenuBtn || !menuBackdrop) {
    return;
  }

  const openMenu = () => {
    mobileMenuContainer.classList.add("menu-open");
    document.body.classList.add("menu-open");
  };

  const closeMenu = () => {
    mobileMenuContainer.classList.remove("menu-open");
    document.body.classList.remove("menu-open");
  };

  openMenuBtn.addEventListener("click", openMenu);
  closeMenuBtn.addEventListener("click", closeMenu);
  menuBackdrop.addEventListener("click", closeMenu);

  // Close menu when clicking on navigation links
  const mobileNavLinks = mobileMenuContainer.querySelectorAll("a");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

/**
 * Adds a scrolled class to the navbar when the user scrolls down.
 */
function initializeNavbarScroll() {
  const navbar = document.getElementById("navbar");

  if (!navbar) {
    return;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });
}

// =================================================================
// 4. Popup Logic
// =================================================================

// Get popup elements with null checks
const popupOverlay = document.getElementById("popup-overlay");
const popupWrapper = document.getElementById("popup-wrapper");
const popupModal = document.getElementById("popup-modal");
const popupBody = document.getElementById("popup-body");
const popupCloseBtn = document.getElementById("popup-close");

/**
 * Displays the popup with product details.
 * This function is called from the "View Details" button's onclick attribute.
 */
function showProductPopup(name, price, imageUrl, description) {
  // Check if all required popup elements exist
  if (!popupOverlay || !popupWrapper || !popupModal || !popupBody) {
    return;
  }

  // Set popup content
  popupBody.innerHTML = `
    <div class="bg-white rounded-2xl overflow-hidden">
    

      <div class="relative">
        <img src="${imageUrl}" alt="${name}" class="w-full h-80 object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div class="absolute bottom-0 left-0 p-6">
          <h3 class="font-serif text-3xl text-white">${name}</h3>
          <p class="text-xl text-brand-accent font-semibold mt-1">${price}</p>
        </div>
      </div>
      <div class="p-8 flex flex-col gap-4">
        <p class="text-lg text-brand-gray mb-4">${description}</p>
        
        <div class="flex gap-4 justify-between w-full">
          <a href="/contact.html" class="w-full block">
            <button class="w-full bg-brand-accent text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300">
              Buy Now
            </button>
          </a>
          <button onclick="closePopup()" class="w-full bg-black/10 text-brand-gray py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300">
            Cancel
          </button>
        </div>
      </div>
      
    </div>
  `;

  // Show popup with animation
  popupOverlay.classList.remove("opacity-0", "invisible");
  popupOverlay.classList.add("opacity-100", "visible");
  popupWrapper.classList.remove("invisible", "pointer-events-none");
  popupWrapper.classList.add("visible", "pointer-events-auto");

  // Small delay for smooth animation
  setTimeout(() => {
    popupModal.classList.remove("opacity-0", "translate-y-3", "scale-95");
    popupModal.classList.add("opacity-100", "translate-y-0", "scale-100");
  }, 10);

  // Prevent body scroll
  document.body.style.overflow = "hidden";
}

/**
 * Hides the popup modal.
 */
function closePopup() {
  // Check if popup elements exist
  if (!popupOverlay || !popupWrapper || !popupModal) {
    return;
  }

  // Hide popup with animation
  popupModal.classList.remove("opacity-100", "translate-y-0", "scale-100");
  popupModal.classList.add("opacity-0", "translate-y-3", "scale-95");

  setTimeout(() => {
    popupOverlay.classList.remove("opacity-100", "visible");
    popupOverlay.classList.add("opacity-0", "invisible");
    popupWrapper.classList.remove("visible", "pointer-events-auto");
    popupWrapper.classList.add("invisible", "pointer-events-none");

    // Restore body scroll
    document.body.style.overflow = "auto";
  }, 300);
}

/**
 * Sets up event listeners for closing the popup.
 */
function initializePopup() {
  // Only initialize if popup elements exist
  if (!popupOverlay || !popupCloseBtn) {
    return;
  }

  popupCloseBtn.addEventListener("click", closePopup);
  popupOverlay.addEventListener("click", (e) => {
    // Only close if clicking on the overlay itself, not its children
    if (e.target === popupOverlay) {
      closePopup();
    }
  });

  // ESC key to close popup
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePopup();
    }
  });
}

// Make functions globally available for onclick handlers
window.showProductPopup = showProductPopup;
window.closePopup = closePopup;
