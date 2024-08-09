const imageElement = document.querySelector("#img");
const imageContainer = document.getElementById("image-container");

const changeLogo = () => {
  imageElement.src = "./Assets/t-up.avif";
  imageElement.alt = "Woman shoing thumbs down";
};

const reset = () => {
  imageElement.src = "./Assets/t-up.jpg";
  imageElement.alt = "Man showing thumbs up";
};

imageElement.addEventListener("mouseover", changeLogo);
imageElement.addEventListener("mouseout", reset);
