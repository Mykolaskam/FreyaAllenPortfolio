window.addEventListener("scroll", function () {

  const body = document.getElementById("body");
  const logo = document.getElementById("logo");
  const menu = document.getElementById("menu");
  const nav = document.getElementById("navbar");
  const titles = document.getElementById("titles");
  const borderbox = document.getElementById("borderbox");


  if (window.scrollY > 300) {
    if (typeof (logo) != 'undefined' && logo != null) {
      logo.classList.add("white");
    }

    if (typeof (menu) != 'undefined' && menu != null) {
      menu.classList.add("white");
    }

    if (typeof (body) != 'undefined' && body != null) {
      body.classList.add("black");
    }

    if (typeof (nav) != 'undefined' && nav != null) {
      nav.classList.add("dark");
    }

    if (typeof (borderbox) != 'undefined' && borderbox != null) {
      borderbox.classList.add("black-border");
    }

    if (typeof (titles) != 'undefined' && titles != null) {
      titles.classList.add("scaled");
    }

  } else {

    if (typeof (logo) != 'undefined' && logo != null) {
      logo.classList.remove("white");
    }

    if (typeof (menu) != 'undefined' && menu != null) {
      menu.classList.remove("white");
    }

    if (typeof (body) != 'undefined' && body != null) {
      body.classList.remove("black");
    }

    if (typeof (nav) != 'undefined' && nav != null) {
      nav.classList.remove("dark");
    }

    if (typeof (borderbox) != 'undefined' && borderbox != null) {
      borderbox.classList.remove("black-border");
    }

    if (typeof (titles) != 'undefined' && titles != null) {
      titles.classList.remove("scaled");
    }
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

