// header

let theme = document.querySelector("header .navber .theme");
let logo = document.querySelector("header .logo a");
let nav = document.querySelector("header .navber nav");
let links = document.querySelectorAll("a");
let menu = document.querySelector("header .navber .menu");
let allShapes = document.querySelectorAll(".shape");
let allBtns = document.querySelectorAll("button");
let footerLogo = document.querySelector(
  "footer .mainFooter .footerContainer .footerLogo"
);
let wrap = document.querySelector("main .swiperCards .wrapper");
let allFade = document.querySelectorAll(
  ".blogsContainer .blogList .expand .fade"
);

let isWhite = false;

theme.addEventListener("click", (e) => {
  allShapes = document.querySelectorAll(".shape");
  e.stopPropagation();
  if (!isWhite) {
    switchWhite();
    isWhite = true;
  } else {
    switchDark();
    isWhite = false;
  }
});

// white mode switch
function switchWhite() {
  document.body.classList.remove("darkMode");
  document.body.classList.add("whiteMode");

  // shapes
  allShapes.forEach((shape) => {
    if (shape.classList.contains("overDark")) {
      shape.classList.remove("overDark");
      shape.classList.add("overWhite");
    } else if (shape.classList.contains("footerS1D")) {
      shape.classList.remove("footerS1D");
      shape.classList.add("footerS1W");
    } else if (shape.classList.contains("footerS2D")) {
      shape.classList.remove("footerS2D");
      shape.classList.add("footerS2W");
    } else {
      shape.classList.remove("darkBox");
      shape.classList.add("whiteBox");
    }
  });

  // fade control
  const allFade = document.querySelectorAll(
    ".blogsContainer .blogList .expand .fade"
  );
  allFade.forEach((fade) => {
    fade.classList.remove("darkFade");
    fade.classList.add("whiteFade");
  });

  // links
  links.forEach((a) => {
    if (wrap && wrap.contains(a)) {
      a.style.color = "#e44e13";
    } else {
      a.style.color = "black";
    }
  });

  // btns
  allBtns.forEach((btn) => {
    btn.style.color = "black";
  });

  // logo and theme
  if (logo) {
    logo.innerHTML = `<img src="Images-Videos/logoBlack.png" alt="logo">`;
  }

  if (theme) {
    theme.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }

  if (footerLogo) {
    footerLogo.innerHTML = `<img src="Images-Videos/logoBlack.png" alt="Logo">`;
  }
}

// dark mode switch
function switchDark() {
  document.body.classList.remove("whiteMode");
  document.body.classList.add("darkMode");

  // shape
  allShapes.forEach((shape) => {
    if (shape.classList.contains("overWhite")) {
      shape.classList.remove("overWhite");
      shape.classList.add("overDark");
    } else if (shape.classList.contains("footerS1W")) {
      shape.classList.remove("footerS1W");
      shape.classList.add("footerS1D");
    } else if (shape.classList.contains("footerS2W")) {
      shape.classList.remove("footerS2W");
      shape.classList.add("footerS2D");
    } else {
      shape.classList.remove("whiteBox");
      shape.classList.add("darkBox");
    }
  });

  // fade control
  const allFade = document.querySelectorAll(
    ".blogsContainer .blogList .expand .fade"
  );
  allFade.forEach((fade) => {
    fade.classList.remove("whiteFade");
    fade.classList.add("darkFade");
  });

  // links
  links.forEach((a) => {
    if (wrap && wrap.contains(a)) {
      a.style.color = "#59A7FF";
    } else {
      a.style.color = "white";
    }
  });

  // btns
  allBtns.forEach((btn) => {
    btn.style.color = "white";
  });

  // theme and logo
  if (logo) {
    logo.innerHTML = `<img src="Images-Videos/logoWhite.png" alt="logo">`;
  }

  if (theme) {
    theme.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }

  if (footerLogo) {
    footerLogo.innerHTML = `<img src="Images-Videos/logoWhite.png" alt="Logo">`;
  }
}

// fade control -> blog page
function controlFade() {
  let allCard = document.querySelectorAll(".blogsContainer .blogList .card");
  allCard.forEach((card) => {
    card.addEventListener("click", () => {
      let fade = card.querySelector(".fade");
      if (isWhite) {
        fade.classList.remove("darkFade");
        fade.classList.add("whiteFade");
      } else {
        fade.classList.remove("whiteFade");
        fade.classList.add("darkFade");
      }
    });
  });
}
controlFade();

// search input -> blog page
let searchBox = document.getElementById("inputSearch");
if (searchBox) {
  searchBox.addEventListener("input", () => {
    let cards = document.querySelectorAll(".blogsContainer .blogList .card");

    if (!isWhite) {
      cards.forEach((card) => {
        card.classList.remove("whiteBox");
        card.classList.add("darkBox");
      });
    } else {
      cards.forEach((card) => {
        card.classList.remove("darkBox");
        card.classList.add("whiteBox");
      });
    }
    controlFade();
  });
}

// blog pagination -> blog page
let paginationBtn = document.querySelector(".moreContent");
if (paginationBtn) {
  paginationBtn.addEventListener("click", () => {
    // call fade func for redecleare allCard
    controlFade();

    let allCard = document.querySelectorAll(".blogsContainer .blogList .card");

    if (!isWhite) {
      allCard.forEach((card) => {
        card.classList.remove("whiteBox");
        card.classList.add("darkBox");
      });
    } else {
      allCard.forEach((card) => {
        card.classList.remove("darkBox");
        card.classList.add("whiteBox");
      });
    }
  });
}

// Sidebar
// Sidebar
window.addEventListener("resize", handleNav);

function handleNav() {
  if (window.innerWidth <= 850) {
    nav.classList.add("sideBar");
  } else {
    nav.classList.remove("sideBar");
  }
}
handleNav();

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
  menu.classList.toggle("border");
  theme.classList.toggle("border");
});

document.addEventListener("click", (e) => {
  if (
    !theme.contains(e.target) &&
    !nav.contains(e.target) &&
    !menu.contains(e.target)
  ) {
    nav.classList.remove("open");
    menu.classList.remove("border");
    theme.classList.remove("border");
  }
});
