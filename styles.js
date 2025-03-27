// NAVIGATION BAR
function loadNavbar() {
  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
      attachNavEventListeners();
    });
}

function attachNavEventListeners() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.getElementById("dropdownMenu");

  hamburger.addEventListener("click", function () {
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
      menu.style.display = "none";
    }
  });
}
document.addEventListener("DOMContentLoaded", loadNavbar);

// FOOTER
function loadfooter() {
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
}
document.addEventListener("DOMContentLoaded", loadfooter);

// MODALS FOR PROJECTS
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "block";
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
  }
}

document.addEventListener("click", function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (modal.style.display === "block" && !modal.contains(event.target) && !event.target.classList.contains("read-more")) {
      modal.style.display = "none";
    }
  });
});