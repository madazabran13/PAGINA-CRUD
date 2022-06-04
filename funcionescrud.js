//Variables globales
const codigo = document.querySelector("#codigo");
const nombre = document.querySelector("#nombre");
const asignatura = document.querySelector("#asignatura");
const nota1 = document.querySelector("#notaTrabajo");
const nota2 = document.querySelector("#notaParcial");
const notaD = document.querySelector("#notaFinal");
const btnGuardar = document.getElementById("guardar");
const btnConsultar = document.getElementById("consultar");
const btnActualizar = document.getElementById("actualizar");
const btnEliminar = document.getElementById("eliminar");
const tabla = document.getElementById("tabla");
let notas = []

//Funciones
codigo.addEventListener("keyup",(e)=>{
    n=false
    notas = JSON.parse(localStorage.getItem("notas"))
    notas.map(nota =>{
        if(nota.codigo==codigo.value){
            nombre.value=nota.nombre
            asignatura.value=nota.asignatura
            nota1.value=nota.notaTrabajo
            nota2.value=nota.notaParcial
            notaD.value=nota.notaDefinitiva
            n=true;
        }
        else if(n==false){
            nombre.value=""
            asignatura.value=""
            nota1.value=""
            nota2.value=""
            notaD.value=""
        }
    })  
})
nota1.addEventListener("keyup",(e)=>{
    notaD.value=Math.round((nota1.value*0.4+nota2.value*0.6)*10)/10
})
nota2.addEventListener("keyup",(e)=>{
    notaD.value=Math.round((nota1.value*0.4+nota2.value*0.6)*10)/10
})
btnGuardar.addEventListener("click", (e)=>{
    notas=JSON.parse(localStorage.getItem("notas"))
    if (notas==null){  //vacia
        notas=[]
    }
    if(codigo.value=="" || nombre.value=="" || asignatura.value=="" || nota1.value=="" || nota2.value==""){
        alert("Debe llenar todos los campos antes de guardar")
    }
    else{
        est = {
            codigo: codigo.value,
            nombre: nombre.value,
            asignatura: asignatura.value,
            notaTrabajo: nota1.value,
            notaParcial: nota2.value,
            notaDefinitiva: notaD.value
        }
        notas.push(est)
        localStorage.setItem("notas", JSON.stringify(notas))
        codigo.value=""
        nombre.value=""
        asignatura.value=""
        nota1.value=""
        nota2.value=""
        notaD.value=""
        tabla.innerHTML=""
        alert("Se han guardado los datos con éxito!!")
    }
})
btnConsultar.addEventListener("click", (e)=>{
    notas = JSON.parse(localStorage.getItem("notas"))
    console.log(notas)
    tabla.innerHTML=""
    if(notas==null || notas==""){
        alert("No se encuentra ningún estudiante registrado")
    }else{
        notas.map(nota =>{
            tabla.innerHTML+=`<li><b>Cédula:</b> ${nota.codigo}  -  <b>Nombres:</b> ${nota.nombre}  -  <b>Asignatura:</b> ${nota.asignatura}  -  <b>Nota Definitiva:</b> ${nota.notaDefinitiva}</li><br>`
        }) 
    } 
})
btnActualizar.addEventListener("click", (e)=>{
    newnotas=[]
    if(codigo.value==""){
        alert("Debe digitar la cédula primero para actualizar!!")
    }
    else{
        notas = JSON.parse(localStorage.getItem("notas"))
        notas.map(nota =>{
            if(nota.codigo==codigo.value){
                est={
                    codigo: codigo.value,
                    nombre: nombre.value,
                    asignatura: asignatura.value,
                    notaTrabajo: nota1.value,
                    notaParcial: nota2.value,
                    notaDefinitiva: notaD.value
                }
                newnotas.push(est)
            }
            else{
                newnotas.push(nota)
            }
        }) 
        localStorage.setItem("notas", JSON.stringify(newnotas))
        codigo.value=""
        nombre.value=""
        asignatura.value=""
        nota1.value=""
        nota2.value=""
        notaD.value=""
        tabla.innerHTML=""
        alert("Se ha actualizado con éxito!!")
    }
})
btnEliminar.addEventListener("click", (e)=>{
    newnotas=[]
    if(codigo.value==""){
        alert("Debe digitar la cédula primero para eliminar!!")
    }
    else{
        notas = JSON.parse(localStorage.getItem("notas"))
        notas.map(nota =>{
            if(nota.codigo==codigo.value){
               
            }
            else{
                newnotas.push(nota)
            }
        }) 
        localStorage.setItem("notas", JSON.stringify(newnotas))
        codigo.value=""
        nombre.value=""
        asignatura.value=""
        nota1.value=""
        nota2.value=""
        notaD.value=""
        tabla.innerHTML=""
        alert("Se ha eliminado el estudiante con éxito")
       
    }
})
