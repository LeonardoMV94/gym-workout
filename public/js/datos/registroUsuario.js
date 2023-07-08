// 

// Path: public\js\login.js

// const formulario = document.getElementById("formRegistro");
// console.log(formulario);
//integra formulario a la espera del sbmit
document.getElementById("formRegistro").addEventListener("submit", async (event) => {
  event.preventDefault(); // Evita que se realice la acción por defecto del formulario
  //instancia el formulario de registro y lo convierte en un objeto
  const formulario = document.getElementById("formRegistro");
  const formData = new FormData(formulario);
  //convierte el objeto en un json
  const datos = Object.fromEntries(formData);
  //imprime el json
  console.log("datos que tiene el Formulario " +datos);
  //valida que las contraseñas coincidan
  if (formData.get("password") != formData.get("passwordOther")) {
    alert("Las contraseñas no coinciden");
    return;
  }
  //envia los datos al servidor
  let response = await fetch("http://localhost:3000/registro/nuevo-usuario", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });
  //espera la respuesta del servidor
  const result = await response.json();
  //imprime la respuesta del servidor
  console.log("result -> " + result);
  alert(`Usuario ${result.nombre} ${result.apellidoP} con el correo: ${result.correo} ha sido registrado con éxito`)
  // redireccionar a la pagina de inicio de sesion
  window.location.href = "http://localhost:3000/login";

});
