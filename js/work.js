window.addEventListener("scroll", function () {
    
    const body = document.getElementById("body");
    const logo = document.getElementById("logo");
    const menu = document.getElementById("menu");
    const nav = document.getElementById("navbar");
  
    if (window.scrollY > 300) {
      logo.classList.add("white");
      menu.classList.add("white");
      body.classList.add("black");
      nav.classList.add("dark");
    } else {
      logo.classList.remove("white");
      menu.classList.remove("white");
      body.classList.remove("black");
      nav.classList.remove("dark");
    }

    if (window.scrollY > 100) {
      logo.classList.add("hidden");
    } else {
      logo.classList.remove("hidden");
    }
  
  });

  document.getElementById("menu").addEventListener("click", function () {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("open");
  });
  
  document.getElementById("close").addEventListener("click", function () {
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("open");
  });

