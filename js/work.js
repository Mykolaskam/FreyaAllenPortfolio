window.addEventListener("scroll", function () {

  const body = document.getElementById("body");
  const logo = document.getElementById("logo");
  const logoblack = document.getElementById("logoblack");
  const menu = document.getElementById("menu");
  const menublack = document.getElementById("menublack");
  const nav = document.getElementById("navbar");
  const titles = document.getElementById("titles");
  const borderbox = document.getElementById("borderbox");


  if (window.scrollY > 300) {
    if (typeof (logo) != 'undefined' && logo != null) {
      logo.classList.add("white-text");
    }

    if (typeof (menu) != 'undefined' && menu != null) {
      menu.classList.add("white-text");
    }

    if (typeof (body) != 'undefined' && body != null) {
      body.classList.add("black-bc");
    }

    if (typeof (nav) != 'undefined' && nav != null) {
      nav.classList.add("black-bc");
    }

    if (typeof (borderbox) != 'undefined' && borderbox != null) {
      borderbox.classList.add("black-border");
    }

    if (typeof (titles) != 'undefined' && titles != null) {
      titles.classList.add("scaled");
    }

  } else {

    if (typeof (logo) != 'undefined' && logo != null) {
      logo.classList.remove("white-text");
    }

    if (typeof (menu) != 'undefined' && menu != null) {
      menu.classList.remove("white-text");
    }

    if (typeof (body) != 'undefined' && body != null) {
      body.classList.remove("black-bc");
    }

    if (typeof (nav) != 'undefined' && nav != null) {
      nav.classList.remove("black-bc");
    }

    if (typeof (borderbox) != 'undefined' && borderbox != null) {
      borderbox.classList.remove("black-border");
    }

    if (typeof (titles) != 'undefined' && titles != null) {
      titles.classList.remove("scaled");
    }
  }

  if (window.scrollY > 100) {

    if (typeof (logo) != 'undefined' && logo != null) {
      logo.classList.add("hidden");
    }

    if (typeof (logoblack) != 'undefined' && logoblack != null) {
      logoblack.classList.add("hidden");

      if (window.innerWidth < 500) {
        logoblack.classList.add("white-text");
        menublack.classList.add("white-text");
      }
    }

  } else {

    if (typeof (logo) != 'undefined' && logo != null) {
      logo.classList.remove("hidden");
    }

    if (typeof (logoblack) != 'undefined' && logoblack != null) {
      logoblack.classList.remove("hidden");
      logoblack.classList.add("black-text");
      logoblack.classList.remove("white-text");
      menublack.classList.add("black-text");
      menublack.classList.remove("white-text");
    }
  }

});

if (typeof (menublack) != 'undefined' && menublack != null) {

  document.getElementById("menublack").addEventListener("click", function () {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("open");
  });

} else {

  document.getElementById("menu").addEventListener("click", function () {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("open");
  });

}

document.getElementById("close").addEventListener("click", function () {
  const overlay = document.getElementById("overlay");
  overlay.classList.remove("open");
});