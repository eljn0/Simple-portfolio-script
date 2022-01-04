// Handling Navbar
(function toggleNavbar() {
  const icon = document.querySelector(".list-icon");
  const list = document.querySelector(".list");

  icon.addEventListener("click", () => list.classList.toggle("show-nav"));
})();
