
const rol = localStorage.getItem("rol")


if(rol != "administrador"){
    window.location.href = "/"
}