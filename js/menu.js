document.getElementById("menu").addEventListener("click", function () {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("open");
  });
  
  document.getElementById("close").addEventListener("click", function () {
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("open");
  });