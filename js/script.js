const formDetalle=document.getElementById("formDetalle")
const cuerpoTabla=document.getElementById("cuerpoTabla").value;


//Datos a ingresar
const patente=document.getElementById("patente").value;document.getElementById("patente").value;
const inputCantidad=document.getElementById("inputCantidad").value;
const selectDescripcion=document.getElementById("selectDescripcion").value;
const inputDesc=document.getElementById("inputDesc").value;
const inputPUnitario=document.getElementById("inputPUnitario").value;
const inputPTotalinputDesc=document.getElementById("inputPTotal").value;





(function()
{
var fecha= new Date();
//document.write(fecha);
var tiempo=fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()
document.write(tiempo);


}())

document.getElementById("mostrarHora")="tiempo.value"




// redibujarTabla

/*let arregloDetalle=[];

const redibujarTabla=()=>{
    cuerpoTabla.innerHTML="";   
    arregloDetalle.forEach((detalle)=>{
    let fila= document.createElement("tr");
    fila.innerHTML=    `
    <td>${detalle.Patente}</td>
    <td>${detalle.Cant_hs}</td>
    <td>${detalle.Tipo_de_vehículo}</td>
    <td>${detalle.Desc}</td>
    <td>${detalle.pUnit}</td>
    <td>${detalle.pTotal}</td>`
    // insertamos un td para el boton
   let tdEleminar=document.createElement("td");
    // se crea el boton eleminat
   let botonEliminar=document.createElement("button");
    // le insertamos clases al boton creado
   botonEliminar.classList.add("btn","btn-danger");
   botonEliminar.innerText="Eliminar";
   tdEleminar.appendChild(botonEliminar);
   fila.appendChild(tdEleminar);
   cuerpoTabla.appendChild(fila);
   })
}
// creando objeto
formDetalle.onsubmit = (e)=>{
e.preventDefault();

const objDetalle={
    Patente:patente.value,
    Cant_hs:inputCantidad.value,
    Tipo_de_vehículo:selectDescripcion.value,
    Desc:inputDesc.value,
    P_Unit:inputPUnitario.value,
    P_total:inputPTotal.value,
    };

//console.log(objDetalle);
arregloDetalle.push(objDetalle);
redibujarTabla();
}
*/