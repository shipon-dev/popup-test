// Universal Cookie Consent Script
(function () {
  "use strict";

  // Cookie consent functionality
  function initializeCookieConsent() {
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptBtn = document.getElementById("acceptCookies");
    const manageBtn = document.getElementById("manageCookies");

    if (!cookieBanner || !acceptBtn || !manageBtn) {
      console.warn("Cookie banner elements not found");
      return;
    }

    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");

    if (!cookieConsent) {
      // Show banner after a short delay
      setTimeout(() => {
        cookieBanner.classList.add("show");
      }, 1000);
    }

    // Accept all cookies
    acceptBtn.addEventListener("click", function () {
      const consent = {
        necessary: true,
        performance: true,
        functionality: true,
        timestamp: new Date().toISOString(),
      };

      localStorage.setItem("cookieConsent", JSON.stringify(consent));
      cookieBanner.classList.remove("show");

      // Show success message if SweetAlert2 is available
      if (typeof Swal !== "undefined") {
        Swal.fire({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: "success",
          title: "🍪 Thank you! Cookie preferences saved.",
        });
      }
    });

    // Manage cookies - redirect to cookies page
    manageBtn.addEventListener("click", function () {
      window.location.href = "/legal/cookies.html";
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeCookieConsent);
  } else {
    initializeCookieConsent();
  }
})();
