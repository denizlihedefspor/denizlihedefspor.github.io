const photos = document.querySelectorAll(".photo");
const modal = document.querySelector(".fullscreen-modal");
const modalImage = document.querySelector(".fullscreen-image");
const closeButton = document.querySelector(".close-button");

photos.forEach(photo => {
    photo.addEventListener("click", () => {
        modalImage.src = photo.src;
        modal.style.display = "flex";
    });
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});
