document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".lightbox-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeBtn = document.getElementById("closeBtn");

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImage.src = img.src;
            lightbox.classList.add("show");
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("show");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("show");
        }
    });
});
