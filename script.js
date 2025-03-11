// Seleccionamos los elementos del DOM
const toggleThemeBtn = document.getElementById("toggle-theme");
const infoText = document.getElementById("info");
const extraInfo = document.getElementById("extra-info");

// Función para cambiar el tema (modo claro/oscuro)
toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Función para mostrar información extra con animación al hacer clic
infoText.addEventListener("click", () => {
    if (extraInfo.style.maxHeight) {
        extraInfo.style.maxHeight = null; // Ocultar con animación
    } else {
        extraInfo.style.maxHeight = extraInfo.scrollHeight + "px"; // Mostrar con animación
    }
});
