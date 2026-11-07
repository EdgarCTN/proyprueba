/*
  Proyecto: proyprueba (línea base en main) - Laboratorio 11
  Archivo:  script.js
  Rama de trabajo asignada: feature/validacion-login
  Responsable: Salas Tuesta, Carla Beatriz (Rioja)

  Proyecto didáctico: la validación del lado cliente NO es seguridad real.
  Credenciales de demostración:
    correo:     demo@correo.com
    contraseña: demo12345

  Nota: el color del mensaje se controla con las clases CSS "mensaje-error" y
        "mensaje-exito" (definidas en styles.css), no con estilos en línea.
*/

const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("togglePassword");
const message = document.getElementById("message");

// Muestra un mensaje usando clases CSS (no estilos en línea)
function mostrarMensaje(texto, tipo) {
  message.textContent = texto;
  message.classList.remove("mensaje-error", "mensaje-exito");
  message.classList.add(tipo === "exito" ? "mensaje-exito" : "mensaje-error");
}

// Mostrar / ocultar contraseña
toggleBtn.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.textContent = "Ocultar";
  } else {
    passwordInput.type = "password";
    toggleBtn.textContent = "Mostrar";
  }
});

// Envío del formulario
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (email === "" || password === "") {
    mostrarMensaje("Completa todos los campos.", "error");
    return;
  }

  if (email === "demo@correo.com" && password === "demo12345") {
    mostrarMensaje("Inicio de sesión de demostración correcto.", "exito");
  } else {
    mostrarMensaje("Correo o contraseña incorrectos.", "error");
  }
});
