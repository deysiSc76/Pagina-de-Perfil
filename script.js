function cambiarNombre(){
    let nombre=document.querySelector(".nombreUsuario");
    nombre.textContent="Juan Perez";
}
function removerC(removerElemento){
    removerElemento.closest(".contacto").remove();
    let conecctados= document.querySelector('.numeroConectados');
    let numeroConectados=Number(conecctados.textContent);
    numeroConectados--;
    conecctados.textContent= numeroConectados;

}
function agregarC(agregarElemento){
    let conexion=agregarElemento.closest(".iconos").previousElementSibling;
    
    let listaConexiones= document.querySelector("#listaDeContactos");
    listaConexiones.innerHTML+=`
        <div class="contacto">
        ${conexion.innerHTML}
    </div>`;
    agregarElemento.closest(".contacto").remove();
    let conecctados= document.querySelector('.numeroConectados');
    let numeroConectados=Number(conecctados.textContent);
    numeroConectados--;
    conecctados.textContent= numeroConectados;
    let conxionesConectados=document.querySelector('#totalConectados');
    let numeroConexionesConectados=Number(conxionesConectados.textContent);
    numeroConexionesConectados++;
    conxionesConectados.textContent=numeroConexionesConectados;



}

