// Seleccionamos los elementos del DOM
const toggleThemeBtn = document.getElementById("toggle-theme");
const infoText = document.getElementById("info");
const extraInfo = document.getElementById("extra-info");

// Función para cambiar el tema (modo claro/oscuro)
toggleThemeBtn.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
});

// Función para mostrar información extra al hacer clic
infoText.addEventListener("click", () => {
    extraInfo.style.display = (extraInfo.style.display === "none") ? "block" : "none";
});
