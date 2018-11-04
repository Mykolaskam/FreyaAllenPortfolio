
window.addEventListener("scroll", function() {
  const logo = document.getElementById("logo");
  if (window.scrollY > 200) {
    logo.classList.add("hidden");
  } else {
    logo.classList.remove("hidden");
  }
});

document.getElementById("menu").addEventListener("click", function() {
  const overlay = document.getElementById("overlay");
  overlay.classList.add("open");
});

document.getElementById("close").addEventListener("click", function() {
  const overlay = document.getElementById("overlay");
  overlay.classList.remove("open");
});

