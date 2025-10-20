// Mostrar mensaje dinámico con modal
function mostrarMensaje(mensaje) {
  document.getElementById("modalCuerpo").textContent = mensaje;
  const modal = new bootstrap.Modal(document.getElementById("modalMensaje"));
  modal.show();
}

// Validación del login
document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();

  if (usuario === "" || password === "") {
    mostrarMensaje("⚠️ Por favor, completa todos los campos.");
  } else {
    mostrarMensaje(`🔥 Bienvenido ${usuario}! Ya puedes acceder a tus rutinas personalizadas.`);
    this.reset();
  }
});