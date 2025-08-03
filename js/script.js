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
//SCRIPT FOR DASHBOARD PAGE
function toggleNavbar() {
    document.getElementById('dashNavbar').classList.toggle('show');
  }

  function toggleNotifications() {
    const box = document.getElementById('notificationBox');
    box.style.display = box.style.display === 'block' ? 'none' : 'block';
  }

  function openTaskPopup() {
    document.getElementById("taskPopup").style.display = "flex";
  }

  function closeTaskPopup() {
    document.getElementById("taskPopup").style.display = "none";
  }

  function openTaskStatusPopup() {
    document.getElementById("taskStatusPopup").style.display = "flex";
  }

  function closeTaskStatusPopup() {
    document.getElementById("taskStatusPopup").style.display = "none";
  }

  function toggleBalanceHistory() {
    const popup = document.getElementById("balancePopup");
    popup.classList.toggle("show");
  }

  function toggleProfileMenu() {
    const menu = document.getElementById("profileMenu");
    menu.classList.toggle("show");
  }

  // Close profile menu if clicked outside
  document.addEventListener('click', function(event) {
    const profile = document.querySelector('.dash-user-greeting');
    const dropdown = document.getElementById('profileMenu');
    if (!profile.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.remove('show');
    }
  });

  // Show the logout popup styled with theme
  function showLogoutPopup() {
    const popup = document.getElementById("logoutPopup");
    popup.classList.add("show");

    // Redirect to homepage after 3 seconds
    setTimeout(() => {
      popup.classList.remove("show");
      window.location.href = "index.html"; // change if homepage URL differs
    }, 3000);
  }

  // In case you want to manually close it (not used by default)
  function closeLogoutPopup() {
    const popup = document.getElementById("logoutPopup");
    popup.classList.remove("show");
  }

  // Call this function when logout button is clicked
  function logout() {
    showLogoutPopup();
  }


  