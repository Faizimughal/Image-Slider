const images = [
  { src: "/images/img1.jpg", alt: "Image 1", caption: "Caption 1" },
  { src: "/images/img2.jpg", alt: "Image 2", caption: "Caption 2" },
  { src: "/images/img3.jpg", alt: "Image 3", caption: "Caption 3" },
  { src: "/images/img4.jpg", alt: "Image 4" },
  { src: "/images/img5.jpg", alt: "Image 5", caption: "Caption 5" },
  { src: "/images/img6.webp", alt: "Image 6", caption: "Caption 6" },
  { src: "/images/img7.jpg", alt: "Image 7", caption: "Caption 7" },
];

const img = document.getElementById("image");
let currentItem = 0;

document.getElementById("Next").addEventListener("click", () => {
  let number = document.getElementById("number");
  img.src = images[++currentItem % images.length].src;
  number.textContent = currentItem % images.length;
});
