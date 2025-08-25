function loadHTML(id, file, callback) {
  fetch(file)
    .then((response) => {
      if (!response.ok) throw new Error("File not found: " + file);
      return response.text();
    })
    .then((data) => {
      const container = document.getElementById(id);
      if (container) {
        container.innerHTML = data;
        if (typeof callback === "function") callback();
      } else {
        console.error("Container not found:", id);
      }
    })
    .catch((error) => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("navbar-placeholder", "/assets/components/navbar.html", initNavbar);
  loadHTML("footer-placeholder", "/assets/components/footer.html");
});

function initNavbar() {
  const mobileMenuContainer = document.getElementById("mobile-menu-container");
  const openMenuBtn = document.getElementById("menu-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn"); // This will be null
  const menuBackdrop = document.getElementById("mobile-menu-backdrop");
  const menuPanel = document.getElementById("mobile-menu-panel");
  const navbar = document.getElementById("navbar");

  if (
    !mobileMenuContainer ||
    !openMenuBtn ||
    !menuBackdrop ||
    !menuPanel ||
    !navbar
  ) {
    console.error("Navbar elements missing!");
    return;
  }

  // Mobile Menu Open/Close
  const openMenu = () => {
    mobileMenuContainer.classList.add("menu-open");
    document.body.classList.add("menu-open");
  };
  const closeMenu = () => {
    mobileMenuContainer.classList.remove("menu-open");
    document.body.classList.remove("menu-open");
  };

  openMenuBtn.addEventListener("click", openMenu);

  // Only add event listener if closeMenuBtn exists
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", closeMenu);
  }

  menuBackdrop.addEventListener("click", closeMenu);

  menuPanel.addEventListener("click", (e) => {
    if (e.target.tagName === "A") closeMenu();
  });

  // Scroll effect (background change only)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });

  // Active menu highlighting
  highlightActiveMenu();
}

function highlightActiveMenu() {
  const currentPath = window.location.pathname;

  // Get all navigation links (both desktop and mobile)
  const desktopNavLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  // Function to check if link matches current page
  const isActiveLink = (href) => {
    // Handle root path
    if (currentPath === "/" || currentPath === "/index.html") {
      return href === "/index.html" || href === "/";
    }

    // For other pages, check exact match only
    return currentPath === href;
  };

  // Highlight desktop navigation links
  desktopNavLinks.forEach((link, index) => {
    const href = link.getAttribute("href");
    const isActive = isActiveLink(href);

    if (isActive) {
      link.classList.add("active-nav");
    } else {
      link.classList.remove("active-nav");
    }
  });

  // Highlight mobile navigation links
  mobileNavLinks.forEach((link, index) => {
    const href = link.getAttribute("href");
    const isActive = isActiveLink(href);

    if (isActive) {
      link.classList.add("active-nav");
    } else {
      link.classList.remove("active-nav");
    }
  });
}
