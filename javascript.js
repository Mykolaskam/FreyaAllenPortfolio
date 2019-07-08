window.addEventListener("scroll", function onScrollTurnLogoWhite() {

  const logo = document.getElementById("logo");

  if (window.scrollY > 300) {
    if (typeof (logo) != 'undefined' && logo != null) {
      logo.classList.add("white-text");
    }
  } else {
    if (typeof (logo) != 'undefined' && logo != null) {
      logo.classList.remove("white-text");
    }
  }

});

window.addEventListener("scroll", function onScrollTurnSocialWhite() {

  const social1 = document.getElementById("social1");
  const social2 = document.getElementById("social2");

  if (window.scrollY > 300) {
    if (typeof (social1) != 'undefined' && social1 != null) {
      social1.classList.add("white-text");
      social2.classList.add("white-text");
    }
  } else {
    if (typeof (social1) != 'undefined' && social1 != null) {
      social1.classList.remove("white-text");
      social2.classList.remove("white-text");
    }
  }

});


window.addEventListener("scroll", function onScrollTurnMenuWhite() {

  const menu = document.getElementById("menu");

  if (window.scrollY > 300) {
    if (typeof (menu) != 'undefined' && menu != null) {
      menu.classList.add("white-text");
    }
  } else {
    if (typeof (menu) != 'undefined' && menu != null) {
      menu.classList.remove("white-text");
    }
  }

});

window.addEventListener("scroll", function onScrollTurnBCBlack() {

  const body = document.getElementById("body");

  if (window.scrollY > 300) {
    if (typeof (body) != 'undefined' && body != null) {
      body.classList.add("black-bc");
    }
  } else {
    if (typeof (body) != 'undefined' && body != null) {
      body.classList.remove("black-bc");
    }
  }

});

window.addEventListener("scroll", function onScrollTurnNavbarBlack() {

  const nav = document.getElementById("navbar");

  if (window.scrollY > 300) {
    if (typeof (nav) != 'undefined' && nav != null) {
      nav.classList.add("black-bc");
    }
  } else {
    if (typeof (nav) != 'undefined' && nav != null) {
      nav.classList.remove("black-bc");
    }
  }

});

window.addEventListener("scroll", function onScrollTurnBorderboxBlack() {

  const borderbox = document.getElementById("borderbox");

  if (window.scrollY > 300) {
    if (typeof (borderbox) != 'undefined' && borderbox != null) {
      borderbox.classList.add("black-border");
    }
  } else {
    if (typeof (borderbox) != 'undefined' && borderbox != null) {
      borderbox.classList.remove("black-border");
    }
  }

});


window.addEventListener("scroll", function onScrollMinimiseTitles() {

  const titles = document.getElementById("titles");

  if (window.scrollY > 300) {
    if (typeof (titles) != 'undefined' && titles != null) {
      titles.classList.add("scaled");
    }
  } else {
    if (typeof (titles) != 'undefined' && titles != null) {
      titles.classList.remove("scaled");
    }
  }

});


window.addEventListener("scroll", function onScrollCollapseLogo() {

  const logo = document.getElementById("logo");

  if (window.scrollY > 100) {
    if (typeof (logo) != 'undefined' && logo != null) {
      logo.classList.add("hidden");
    }
  } else {
    if (typeof (logo) != 'undefined' && logo != null) {
      logo.classList.remove("hidden");
    }
  }

});


window.addEventListener("scroll", function onScrollandSmallScreenLogo() {

  const logoblack = document.getElementById("logoblack");

  if (window.scrollY > 100) {
    if (typeof (logoblack) != 'undefined' && logoblack != null) {
      logoblack.classList.add("hidden");

      if (window.innerWidth < 500) {
        logoblack.classList.add("white-text");
        menublack.classList.add("white-text");
      }
    }
  } else {
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

  document.getElementById("menublack").addEventListener("click", function openMenuBlack() {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("open");
  });

} else {

  document.getElementById("menu").addEventListener("click", function openMenu() {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("open");
  });

}

document.getElementById("close").addEventListener("click", function closeMenu() {
  const overlay = document.getElementById("overlay");
  overlay.classList.remove("open");
});