console.log("About.JS");

// all images
let images = [
  "Images-Videos/AIbanner.png",
  "Images-Videos/digitalBanner.png",
  "Images-Videos/digitalworkBanner.png",
];

// html elements
let image = document.querySelector(".bannerSection .autoBanner .image");

let rightClick = document.querySelector(".bannerSection .autoBanner .right");
let leftClick = document.querySelector(".bannerSection .autoBanner .left");

let currentIndex = 0;
let total = images.length;

// set in dom
image.innerHTML = images
  .map((src) => `<img src="${src}" alt="Banner">`)
  .join("");

  // get img
let allImages = document.querySelectorAll(
  ".bannerSection .autoBanner .image img"
);

// slider function
function positionCenter(index) {
  let second = ((index % total) + total) % total;
  let first = (second - 1 + total) % total;
  let third = (second + 1) % total;

  allImages.forEach((img, i) => {
    img.classList.remove("setLeft", "setCenter", "setRight");
    if (i === first) img.classList.add("setLeft");
    else if (i === second) img.classList.add("setCenter");
    else if (i === third) img.classList.add("setRight");
  });
}
positionCenter(currentIndex);

// auto slide
let intervalId;

function startAutoSlide() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    positionCenter(currentIndex);
  }, 5000);
}
startAutoSlide()

// raset slide interval
function rasetInterval() {
  clearInterval(intervalId)
  startAutoSlide()
}

// right click
rightClick.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % total;
  positionCenter(currentIndex);
  rasetInterval()
});

// left click
leftClick.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + total) % total;
  positionCenter(currentIndex);
  rasetInterval()
});
