window.addEventListener("scroll", function () {
    
    const body = document.getElementById("body");
    const logo = document.getElementById("logo");
    const menu = document.getElementById("menu");
    const nav = document.getElementById("navbar");
    const titles = document.getElementById("titles");

    
  
    if (window.scrollY > 300) {
      logo.classList.add("white");
      menu.classList.add("white");
      body.classList.add("black");
      nav.classList.add("dark");
      titles.classList.add("scaled");
    } else {
      logo.classList.remove("white");
      menu.classList.remove("white");
      body.classList.remove("black");
      nav.classList.remove("dark");
      titles.classList.remove("scaled");
    }

    if (window.scrollY > 100) {
      logo.classList.add("hidden");
    } else {
      logo.classList.remove("hidden");
    }
  
  });

