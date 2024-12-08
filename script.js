const images = [
  { src: "/images/img1.jpg" },
  { src: "/images/img2.jpg" },
  { src: "/images/img3.jpg" },
  { src: "/images/img4.jpg" },
  { src: "/images/img5.jpg" },
  { src: "/images/img6.webp" },
  { src: "/images/img7.jpg" },
  { src: "/images/img8.jpg" },
  { src: "/images/img9.jpg" },
];

// Display the first image
const img = document.getElementById("image");
let currentItem = 0;

document.getElementById("Next").addEventListener("click", () => {
  let number = document.getElementById("number");
  img.src = images[++currentItem % images.length].src;
  number.textContent = currentItem % images.length;
});

document.getElementById("Previous").addEventListener("click", () => {
  let number = document.getElementById("number");
  img.src = images[--currentItem % images.length].src;
  number.textContent = currentItem % images.length;
});
