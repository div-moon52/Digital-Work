// Home Page Script

console.log("home.js");

// custom swiper

let left = document.querySelector("main .swiperCards .leftArrow");
let right = document.querySelector("main .swiperCards .rightArrow");

let card = document.querySelector(".card");
let wrapper = document.querySelector("main .swiperCards .wrapper");

let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

let isGrabing = false;
let moved = false;

// get scroll width
function getMaxScroll() {
  const wrapperWidth = wrapper.scrollWidth;
  const containerWidth = wrapper.parentElement.offsetWidth;
  return containerWidth - wrapperWidth;
}

// Pointerdown activation
wrapper.addEventListener("pointerdown", (e) => {
  startX = e.clientX;

  isGrabing = true;
  moved = false;
  wrapper.style.transition = "none";

  // wrapper.setPointerCapture(e.pointerId)
});

// Pointermove activation
wrapper.addEventListener("pointermove", (e) => {
  if (!isGrabing) return;
  
  let currentX = e.clientX;
  if (Math.abs(currentX - startX) > 2) {
    moved = true;
  }

  let sensivity = 1
  if(window.innerWidth <= 500) {
    sensivity = 3
  } else {
    sensivity = 1.5
  }

  let diff = (currentX - startX) * sensivity;
  currentTranslate = diff + prevTranslate;
  
  const maxScroll = getMaxScroll();
  if (currentTranslate > 0) currentTranslate = 0;
  if (currentTranslate < maxScroll) currentTranslate = maxScroll;
  
  wrapper.style.transition = "transform 0.5s ease-out";
  wrapper.style.transform = `translateX(${currentTranslate}px)`;
});

// Pointerup activation
wrapper.addEventListener("pointerup", (e) => {
  isGrabing = false;
  
  prevTranslate = currentTranslate;
  
  wrapper.style.transition = "transform 0.5s ease-out";
  wrapper.style.transform = `translateX(${currentTranslate}px)`;
  // wrapper.setPointerCapture(e.pointerId)

  if (!moved) {
    const link = e.target.closest("a");
    console.log(link)
    if (link) {
      window.location.href = link.href;
    }
  }

});

// Pointercancel
wrapper.addEventListener("pointercancel", () => {
  prevTranslate = currentTranslate;
  isGrabing = false;
});

let translatePerClick = 320;

// Right click
right.addEventListener("click", () => {
  currentTranslate -= translatePerClick;
  prevTranslate = currentTranslate;

  const maxScroll = getMaxScroll();

  if (currentTranslate < maxScroll) currentTranslate = maxScroll;
  wrapper.style.transform = `translateX(${currentTranslate}px)`;
});

// Left click
left.addEventListener("click", () => {
  currentTranslate += translatePerClick;
  prevTranslate = currentTranslate;

  if (currentTranslate > 0) currentTranslate = 0;
  wrapper.style.transform = `translateX(${currentTranslate}px)`;
});

// Handle footer
// footer sec-1
let rightClick = document.querySelector("footer .topics .rightClick");
let leftClick = document.querySelector("footer .topics .leftClick");

let topics = [
  "Digital Marketing",
  "Full Stack Development",
  "Artificial Intelligence",
  "Graphic Design",
  "Video Editing",
  "Data Science",
  "Cybersecurity",
  "Ethical Hacking",
  "Content Creation",
  "Cloud Computing",
  "Blockchain & Web3",
];

let contentH2 = document.querySelector("footer .topics .content h2");
let index = 0;
let intervalID;

function displayTopic(index) {
  contentH2.innerText = topics[index];
}

displayTopic(index);

rightClick.addEventListener("click", () => {
  if (index === topics.length - 1) {
    index = 0;
  } else {
    index++;
  }
  displayTopic(index);
  rasetAutoPlay();
});

leftClick.addEventListener("click", () => {
  if (index === 0) {
    index = topics.length - 1;
  } else {
    index--;
  }
  displayTopic(index);
  rasetAutoPlay();
});

function startAutoPlay() {
  intervalID = setInterval(() => {
    if (index === topics.length - 1) {
      index = 0;
    } else {
      index++;
    }
    displayTopic(index);
  }, 2000);
}

startAutoPlay();

function rasetAutoPlay() {
  clearInterval(intervalID);
  startAutoPlay();
}
