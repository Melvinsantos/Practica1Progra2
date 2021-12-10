/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function datosIniciosesion(){
    location.href="NuevoCliente.html";
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    console.log("Usuario: "+ usuario);
    console.log("Contraseña: "+ contrasena);
}
function datosNuevocliente(){
    location.href="NuevoCliente.html";
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cui=document.getElementById("cui").value;
    let departamento=document.getElementById("departamento").value;
    console.log("Usuario: "+ nombre);
    console.log("Contraseña: "+ apellido);
    console.log("CUI: "+ cui);
    console.log("Departamento "+ departamento);
    
}
function datosRegistro(){
    location.href="index.html";
    let Nombre = document.getElementById("nombre_r").value;
    let correo = document.getElementById("correo").value;
    let creacontrasena = document.getElementById("Crearcontrasena").value;
    let conficontrasena = document.getElementById("Conficontrasena").value;
    console.log("Nombre: "+ Nombre);
    console.log("Correo: "+ correo);
    console.log("Contraseña: "+ creacontrasena);
    console.log("Confirmacion de Contraseña: "+ conficontrasena);
    console.log("contraseñas coinciden: "+creacontrasena===conficontrasena);
}
