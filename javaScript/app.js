let counter = 1;
setInterval(() => {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 6) {
    counter = 1;
  }
}, 4000);


lightbox.option({
  'resizeDuration': 500,
  'wrapAround': true,
  'disableScrolling': true,
})

// images lightbox
const images = document.querySelectorAll(".image");
const closeCircled = document.querySelector(".icofont-close-circled");
const lightbox = document.querySelector(".image_lightbox");
const lightboxImage = document.querySelector(".image_lightbox img");
const backdrop = document.querySelector(".backdrop");

// images.forEach((image, index) => {
//   image.addEventListener("click", (e) => {
//     lightbox.classList.add("active_lightbox");
//     backdrop.classList.add("active");
//     lightboxImage.setAttribute("src", e.target.src);
//   });
// });
// closeCircled.addEventListener("click", (e) => {
//   lightbox.classList.remove("active_lightbox");
//   backdrop.classList.remove("active");
// });
