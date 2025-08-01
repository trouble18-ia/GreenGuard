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
    
    //SCRIPT FOR ABOUT PAGE
    function toggleAboutNav() {
  const nav = document.getElementById("aboutNavLinks");
  nav.classList.toggle("show");
}

//SCRIPT FOR CONTACT PAGE
function toggleContactNav() {
  const nav = document.getElementById("contactNavLinks");
  nav.classList.toggle("show");
}

//SCRIPT FOR DONATE PAGE
function toggleDonateNav() {
  const nav = document.getElementById("donateNavLinks");
  nav.classList.toggle("show");
}

function validateDonateForm() {
  const name = document.getElementById("donor-name").value.trim();
  const email = document.getElementById("donor-email").value.trim();
  const amount = document.getElementById("donate-amount").value;

  if (!name || !email || amount <= 0) {
    alert("Please fill in all fields correctly.");
    return false;
  }

  document.getElementById("donateThankYou").style.display = "block";
  return false; // Prevent form submission for demo
}

//SCRIPT FOR MARKETPLACE PAGE
function toggleMarketNav() {
  const nav = document.getElementById("marketNavLinks");
  nav.classList.toggle("show");
}
//SCRIPT FOR NEWS PAGE
function toggleNewsNav() {
  const nav = document.getElementById("newsNavLinks");
  nav.classList.toggle("show");
}
//SCRIPT FOR COMMUNITY PAGE
function toggleCommunityNav() {
  const nav = document.getElementById("communityNavLinks");
  nav.classList.toggle("show");
}
