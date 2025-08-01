//INDEX SCRIPT
const hamburger = document.querySelector('.hamburger');
  const mainNav = document.querySelector('.main-nav');

  hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('show');
  });

//LOGIN SCRIPT
    function toggleForm() {
      const login = document.getElementById('login-form');
      const signup = document.getElementById('signup-form');
      if (login.style.display === "none") {
        login.style.display = "block";
        signup.style.display = "none";
      } else {
        login.style.display = "none";
        signup.style.display = "block";
      }
    }

    function validateForm() {
      const email = document.getElementById("email").value;
      const confirmEmail = document.getElementById("confirm_email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm_password").value;

      if (email !== confirmEmail) {
        alert("Email addresses do not match.");
        return false;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
      }

      return true; // Allow form to submit
    }

    function showAlert(message) {
      const alertBox = document.getElementById("custom-alert");
      alertBox.textContent = message;
      alertBox.style.display = "block";

      setTimeout(() => {
        alertBox.style.display = "none";
      }, 4000); // hide after 4 seconds
    }

    function validateForm() {
      const email = document.getElementById("email").value;
      const confirmEmail = document.getElementById("confirm_email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm_password").value;

      if (email !== confirmEmail) {
        showAlert("❗ Email addresses do not match.");
        return false;
      }

      if (password !== confirmPassword) {
        showAlert("❗ Passwords do not match.");
        return false;
      }

      return true; // Allow form to submit
    }

    function toggleMobileNav() {
      const nav = document.getElementById("navLinks");
      nav.classList.toggle("show");
    }