console.log("zero.js");

//zero page

// html elements
let threeDot = document.querySelector(".zeroHeader .circle .innerCircle");
let circle = document.querySelector(".zeroHeader .circle");
let shape = document.querySelectorAll(".shape");
let logo = document.querySelector(".zeroHeader .logo a");

// flag
let isExpand = false;
let isWhite = false;

// 3 dots event
threeDot.addEventListener("click", expantion);

function expantion() {
  if (!isExpand) {
    let div1 = document.createElement("div");
    div1.classList.add("backWard", "center");

    let div2 = document.createElement("div");
    div2.classList.add("switchMode", "center");

    div1.innerHTML = `<i class="fa-solid fa-arrow-left"></i>`;
    div2.innerHTML = `<i class="fa-solid fa-moon"></i>`;

    circle.style.width = `${175}px`;

    circle.appendChild(div1);
    circle.appendChild(div2);

    displayAction();

    isExpand = true;
  } else {
    let div1 = document.querySelector(".zeroHeader .circle .backWard");
    let div2 = document.querySelector(".zeroHeader .circle .switchMode");
    div1.remove();
    div2.remove();
    circle.style.width = `${45}px`;
    isExpand = false;
  }
}

// 3 dots event close
document.addEventListener("click", (e) => {
  if (isExpand) {
    if (!circle.contains(e.target)) {
      let div1 = document.querySelector(".zeroHeader .circle .backWard");
      let div2 = document.querySelector(".zeroHeader .circle .switchMode");
      div1.remove();
      div2.remove();
      circle.style.width = `${45}px`;
      isExpand = false;
    }
  }
});

// back btn and mode btn
function displayAction() {
  let switchMode = document.querySelector(".zeroHeader .circle .switchMode");
  let backWard = document.querySelector(".zeroHeader .circle .backWard");
  if (backWard) {
    backWard.addEventListener("click", () => {
      if (window.history.length > 1) {
        window.history.back();
      }
    });
  }

  if (switchMode) {
    switchMode.addEventListener("click", () => {
      if (!isWhite) {
        switchWhite();
        isWhite = true;
      } else {
        switchDark();
        isWhite = false;
      }
    });
  }
}
displayAction();

// bright mode
function switchWhite() {
  document.body.classList.remove("darkMode");
  document.body.classList.add("whiteMode");

  let overDark = document.querySelector(".overDark");
  overDark.classList.remove("overDark");
  overDark.classList.add("overWhite");

  shape.forEach((box) => {
    box.classList.remove("darkBox");
    box.classList.add("whiteBox");
  });

  if (logo) {
    logo.innerHTML = `<img src="../Images-Videos/logoBlack.png" alt="logo">`;
  }
}

// dark mode
function switchDark() {
  document.body.classList.remove("whiteMode");
  document.body.classList.add("darkMode");

  let overWhite = document.querySelector(".overWhite");
  overWhite.classList.remove("overWhite");
  overWhite.classList.add("overDark");

  shape.forEach((box) => {
    box.classList.remove("whiteBox");
    box.classList.add("darkBox");
  });

  if (logo) {
    logo.innerHTML = `<img src="../Images-Videos/logoWhite.png" alt="logo">`;
  }
}

// logo res
window.addEventListener("resize", setLogo);

function setLogo() {
  if (window.innerWidth <= 450) {
    logo.style.display = "none";
  } else {
    logo.style.display = "block";
  }
}

setLogo();