document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.getElementById("image-container");
    const imageFolder = "images/";

    const imageList = [
        "proyecto1.jpg",
        "proyecto2.jpg",
        "proyecto3.jpg",
        "proyecto4.jpg",
        "proyecto5.jpg"
    ];

    imageList.forEach(image => {
        const img = document.createElement("img");
        img.src = imageFolder + image;
        img.alt = "Proyecto destacado";
        imageContainer.appendChild(img);
    });
});
