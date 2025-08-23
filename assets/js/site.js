// SweetAlert2 Utility Functions with enhanced configuration
window.SweetUtils = {
  success: (title, text = '') => {
    return Swal.fire({
      icon: 'success',
      title: title,
      text: text,
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      background: '#f0fdf4',
      color: '#166534',
      allowOutsideClick: false, // Outside click disable
      allowEscapeKey: false     // Escape key disable
    });
  },

  error: (title, text = '') => {
    return Swal.fire({
      icon: 'error',
      title: title,
      text: text,
      confirmButtonColor: '#dc2626',
      background: '#fef2f2',
      color: '#991b1b',
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  },

  warning: (title, text = '') => {
    return Swal.fire({
      icon: 'warning',
      title: title,
      text: text,
      confirmButtonColor: '#f59e0b',
      background: '#fffbeb',
      color: '#92400e',
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  },

  info: (title, text = '') => {
    return Swal.fire({
      icon: 'info',
      title: title,
      text: text,
      confirmButtonColor: '#3b82f6',
      background: '#eff6ff',
      color: '#1e40af',
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  },

  confirm: (title, text = '', confirmText = 'Yes', cancelText = 'No') => {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#10b981',
      cancelButtonColor: '#ef4444',
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      background: '#f8fafc',
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  },

  input: (title, inputPlaceholder = '', inputType = 'text') => {
    return Swal.fire({
      title: title,
      input: inputType,
      inputPlaceholder: inputPlaceholder,
      showCancelButton: true,
      confirmButtonColor: '#6366f1',
      cancelButtonColor: '#6b7280',
      background: '#f8fafc',
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  },

  toast: (message, icon = 'success') => {
    return Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      icon: icon,
      title: message,
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  },

  timer: (title, timer = 5000) => {
    return Swal.fire({
      title: title,
      timer: timer,
      timerProgressBar: true,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      willClose: () => {
        SweetUtils.toast('Timer finished!', 'info');
      }
    });
  },

  // New function for product details
  productDetails: (product) => {
    return Swal.fire({
      title: product.name,
      html: `
        <div class="text-center">
          <img src="${product.img}" class="w-full h-48 object-cover rounded mb-4" style="max-width: 300px; margin: 0 auto;" />
          <p class="text-2xl font-bold text-indigo-600 mb-2">${product.price}</p>
          <p class="text-gray-600 mb-4">${product.desc}</p>
          <div class="flex gap-2 justify-center">
            <button id="swal-add-cart" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" data-product-id="${product.id}">
              🛒 Add to Cart
            </button>
            <button id="swal-buy-now" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" data-product-id="${product.id}">
              💳 Buy Now
            </button>
          </div>
        </div>
      `,
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: '✕ Close',
      cancelButtonColor: '#6b7280',
      background: '#f8fafc',
      allowOutsideClick: false,  // Outside click disable
      allowEscapeKey: false,     // Escape key disable
      width: '400px',
      didOpen: () => {
        // Add event listeners for the buttons inside SweetAlert2
        document.getElementById('swal-add-cart').addEventListener('click', function() {
          const productId = parseInt(this.dataset.productId);
          addToCartFromSwal(productId);
          Swal.close();
        });
        
        document.getElementById('swal-buy-now').addEventListener('click', function() {
          const productId = parseInt(this.dataset.productId);
          buyNowFromSwal(productId);
          Swal.close();
        });
      }
    });
  }
};

$(function () {
  document.getElementById("y").textContent = new Date().getFullYear();

  // Cart array to store products
  let cart = [];

  function showToast(message, type = "success") {
    const colors = type === "error" ? "bg-red-600" : "bg-green-600";
    const $toast = $(
      `<div class='toast px-4 py-3 rounded text-white ${colors} shadow'>${message}</div>`
    );
    $("#toastContainer").append($toast);
    setTimeout(() => $toast.addClass("show"), 50);
    setTimeout(
      () => $toast.removeClass("show").addClass("opacity-0 translate-x-5"),
      2500
    );
    setTimeout(() => $toast.remove(), 3000);
  }

  // Enhanced form submission with SweetAlert2
  $("#demoForm").on("submit", function (e) {
    e.preventDefault();
    const name = $(this).find('input[type="text"]').val();
    
    SweetUtils.success('🎉 Success!', `Thank you ${name}! Your form has been submitted successfully with SweetAlert2.`);
    this.reset();
  });

  // Cookie acceptance with SweetAlert2
  if (!localStorage.getItem("cookieAccepted")) {
    $("#cookieBanner").addClass("show");
  }
  $("#acceptCookies").on("click", function () {
    localStorage.setItem("cookieAccepted", true);
    $("#cookieBanner").removeClass("show");
    
    SweetUtils.toast('🍪 Cookies accepted! Enjoy the SweetAlert2 demos!', 'success');
  });

  // Demo button handlers
  $('#successDemo').on('click', () => {
    SweetUtils.success('Great Job!', 'This is a success message with beautiful styling!');
  });

  $('#errorDemo').on('click', () => {
    SweetUtils.error('Oops!', 'Something went wrong. This is an error message.');
  });

  $('#warningDemo').on('click', () => {
    SweetUtils.warning('Warning!', 'Please be careful. This is a warning message.');
  });

  $('#infoDemo').on('click', () => {
    SweetUtils.info('Information', 'Here is some useful information for you.');
  });

  $('#confirmDemo').on('click', () => {
    SweetUtils.confirm('Are you sure?', 'Do you want to proceed with this action?', 'Yes, do it!', 'Cancel').then((result) => {
      if (result.isConfirmed) {
        SweetUtils.success('Confirmed!', 'Your action has been confirmed.');
      } else {
        SweetUtils.info('Cancelled', 'Your action was cancelled.');
      }
    });
  });

  $('#inputDemo').on('click', () => {
    SweetUtils.input('Enter your email', 'your@email.com', 'email').then((result) => {
      if (result.value) {
        SweetUtils.success('Thank you!', `Your email ${result.value} has been saved.`);
      }
    });
  });

  $('#toastDemo').on('click', () => {
    SweetUtils.toast('This is a toast notification! 🍞', 'info');
  });

  $('#timerDemo').on('click', () => {
    SweetUtils.timer('This will close in 5 seconds...', 5000);
  });

  // Products array with enhanced data
  const products = [
    {
      id: 1,
      name: "Luxury Bag",
      price: "$199",
      desc: "A premium leather bag with exquisite craftsmanship and durable materials.",
      img: "https://picsum.photos/300/200?1",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$149",
      desc: "Feature-packed smartwatch with health monitoring and fitness tracking.",
      img: "https://picsum.photos/300/200?2",
    },
    {
      id: 3,
      name: "Sneakers",
      price: "$99",
      desc: "Comfortable and stylish sneakers perfect for everyday wear and sports.",
      img: "https://picsum.photos/300/200?3",
    },
    {
      id: 4,
      name: "Wireless Headphones",
      price: "$79",
      desc: "High-quality wireless headphones with active noise cancellation technology.",
      img: "https://picsum.photos/300/200?4",
    },
    {
      id: 5,
      name: "Smartphone",
      price: "$599",
      desc: "Latest smartphone with advanced camera system and lightning-fast performance.",
      img: "https://picsum.photos/300/200?5",
    },
    {
      id: 6,
      name: "Laptop",
      price: "$899",
      desc: "Powerful laptop designed for work, gaming, and creative professionals.",
      img: "https://picsum.photos/300/200?6",
    }
  ];

  // Global functions for SweetAlert2 buttons
  window.addToCartFromSwal = function(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      SweetUtils.success('Added to Cart! 🛒', `${product.name} has been added to your cart. Total items: ${cart.length}`);
    }
  };

  window.buyNowFromSwal = function(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      SweetUtils.confirm(
        'Purchase Confirmation',
        `Do you want to buy ${product.name} for ${product.price}?`,
        'Yes, Buy Now!',
        'Cancel'
      ).then((result) => {
        if (result.isConfirmed) {
          SweetUtils.success('Purchase Successful! 💳', `Thank you for purchasing ${product.name}!`);
        }
      });
    }
  };

  // Render products with enhanced features
  products.map((p) => {
    $("#productGrid").append(`
      <div class="bg-white rounded shadow p-4 cursor-pointer hover:shadow-lg transition transform hover:scale-105 product-card" data-id="${p.id}">
        <img src="${p.img}" class="w-full h-40 object-cover rounded mb-3" />
        <h3 class="font-semibold">${p.name}</h3>
        <p class="text-indigo-600 font-bold">${p.price}</p>
        <div class="mt-3 flex gap-2">
          <button class="add-to-cart-btn flex-1 px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600" data-product-id="${p.id}">
            🛒 Add
          </button>
          <button class="buy-now-btn flex-1 px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600" data-product-id="${p.id}">
            💳 Buy
          </button>
        </div>
      </div>
    `);
  });

  // Replace modal with SweetAlert2 for product details
  $("#productGrid").on("click", ".product-card", function (e) {
    // Don't show product details if button was clicked
    if ($(e.target).hasClass('add-to-cart-btn') || $(e.target).hasClass('buy-now-btn')) {
      return;
    }
    
    const id = $(this).data("id");
    const product = products.find((x) => x.id === id);
    
    // Show product details using SweetAlert2 instead of modal
    SweetUtils.productDetails(product);
  });

  // Remove the old modal logic completely
  // $("#closeModal, #productModal").off('click'); // Remove old modal handlers

  // Add to cart functionality
  $(document).on('click', '.add-to-cart-btn', function(e) {
    e.stopPropagation(); // Prevent product card click
    const productId = $(this).data('product-id');
    const product = products.find(p => p.id === productId);
    
    if (product) {
      cart.push(product);
      SweetUtils.success('Added to Cart! 🛒', `${product.name} has been added to your cart. Total items: ${cart.length}`);
    }
  });

  // Buy now functionality
  $(document).on('click', '.buy-now-btn', function(e) {
    e.stopPropagation(); // Prevent product card click
    const productId = $(this).data('product-id');
    const product = products.find(p => p.id === productId);
    
    if (product) {
      SweetUtils.confirm(
        'Purchase Confirmation',
        `Do you want to buy ${product.name} for ${product.price}?`,
        'Yes, Buy Now!',
        'Cancel'
      ).then((result) => {
        if (result.isConfirmed) {
          SweetUtils.success('Purchase Successful! 💳', `Thank you for purchasing ${product.name}!`);
        }
      });
    }
  });

  // Clear cart functionality
  $('#clearCartBtn').on('click', function() {
    if (cart.length === 0) {
      SweetUtils.info('Cart Empty', 'Your cart is already empty!');
      return;
    }
    
    SweetUtils.confirm(
      'Clear Cart?',
      `Are you sure you want to remove all ${cart.length} items from your cart?`,
      'Yes, Clear All',
      'Cancel'
    ).then((result) => {
      if (result.isConfirmed) {
        cart = [];
        SweetUtils.success('Cart Cleared! 🗑️', 'All items have been removed from your cart.');
      }
    });
  });

  // Main demo button
  $('#demoBtn').on('click', function() {
    Swal.fire({
      title: '🎯 SweetAlert2 Demo Features',
      html: `
        <div class="text-left">
          <p class="mb-2">✅ <strong>Success/Error/Warning/Info alerts</strong></p>
          <p class="mb-2">🤔 <strong>Confirmation dialogs</strong></p>
          <p class="mb-2">📝 <strong>Input dialogs</strong></p>
          <p class="mb-2">🍞 <strong>Toast notifications</strong></p>
          <p class="mb-2">⏰ <strong>Timer alerts</strong></p>
          <p class="mb-2">🛒 <strong>Product interactions via SweetAlert2</strong></p>
          <p class="mb-2">💳 <strong>Purchase confirmations</strong></p>
          <p class="mb-2">🍪 <strong>Cookie consent</strong></p>
          <p class="mb-2">🚫 <strong>Outside click disabled</strong></p>
        </div>
      `,
      icon: 'info',
      confirmButtonText: 'Awesome!',
      confirmButtonColor: '#6366f1',
      background: '#f8fafc',
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  });
});
