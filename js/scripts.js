
window.addEventListener("scroll", function() {
  const logo = document.getElementById("logo");
  const nav = document.getElementById("navbar");
  
  if (window.scrollY > 400) {
    nav.classList.add("cream");
  } else {
    nav.classList.remove("cream");
  }

  if (window.scrollY > 100) {
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

