// obtener los datos del formulario
// const formData = new FormData(formulario);
// hacer el fetch a la ruta '/login/inicio-sesion' con metodo post
// el resultado muestralo en un alert


document.getElementById("login-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita que se realice la acción por defecto del formulario
    const formulario = document.getElementById("login-form");
    const formData = new FormData(formulario);

    const datos = Object.fromEntries(formData);
    console.log("datos del formulario -> " + datos);
    if (datos.correo.trim() == "" || datos.contraseña.trim() == "") {
        alert("Favor de llenar todos los campos");
        return;
    }

    let response = await fetch("http://localhost:3000/login/inicio-sesion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
    });
    const result = await response.json();
    console.log("result -> " + result);
    if (result == null){
        alert("correo o contraseña incorrectos")
    } else {
        alert(`correo del cliente : ${result.correo} a ingresado con exito`)   
     }

     // añadir guardado de usuario en local storage
    localStorage.setItem("correo", JSON.stringify(result.correo));
    localStorage.setItem("nombre", JSON.stringify(result.nombre));
    localStorage.setItem("apellidoP", JSON.stringify(result.apellidoP));
    localStorage.setItem("apellidoM", JSON.stringify(result.apellidoM));
});


// agregar los patterns a los inputs del formulario