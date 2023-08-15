import { Alumnos } from './utility/base_data.js'




const nombreCompleto = document.querySelector("#nombre-completo");
const curso = document.querySelector("#curso");
const saludo = document.querySelector(".saludo");
const botonAgragarAlumno = document.querySelector(".boton-agregar");
const nota1 = document.querySelector("#nota-1");
const nota2 = document.querySelector("#nota-2");
const nota3 = document.querySelector("#nota-3");
const tabla = document.querySelector(".tabla");
const usuario = JSON.parse(localStorage.getItem("usuario"));
const usuarioLogin = Object.values(usuario)


//Saludo
saludo.innerHTML = `<h2 class="title">Bienvenido sr/sra ${usuarioLogin[0]}</h2>`

//Alumno Tabla
const nombreAlumno = Alumnos.map(nombre => {
    nombre.nombre
    return nombre.nombre
})

const cursoAlumno = Alumnos.map(curso => {
    curso.curso
    return curso.curso
})

const nota1Alumno = Alumnos.map(nota1 => {
    nota1.nota1
    return nota1.nota1
})

const nota2Alumno = Alumnos.map(nota2 => {
    nota2.nota2
    return nota2.nota2
})

const nota3Alumno = Alumnos.map(nota3 => {
    nota3.nota3
    return nota3.nota3
})

nombreCompleto.innerHTML = `<td class='title'> ${nombreAlumno[0]} <button class="editar-alumno"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
<path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
<path d="M16 5l3 3" />
</svg>
</button>
<button class="eliminar-alumno"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round" background-color= "transparent">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M4 7l16 0" />
<path d="M10 11l0 6" />
<path d="M14 11l0 6" />
<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg></button></td>`
curso.innerHTML = `<td> ${cursoAlumno[0]}</td>`
nota1.innerHTML = `<td> ${nota1Alumno[0]}</td>`
nota2.innerHTML = `<td> ${nota2Alumno[0]}</td>`
nota3.innerHTML = `<td> ${nota3Alumno[0]}</td>`

//Agregar Alumno
botonAgragarAlumno.addEventListener("click", () => {
    Swal.fire({
        html: '<h4>Ingrese los datos del Alumno</h4> <div class="ingreso-alumno"><div class="ingreso-nombre"><label>Nombre</label> <input type="text" name="nombre" id="nombre" </input></div> <div class="ingreso-curso"><label>Curso</label> <input type="text" name="curso" id="cursos" </input></div><div class="ingreso-nota"><label>Nota Primer Examen</label><br><input type="number" name="nota1" id="nota1"</input></div> <div class="ingreso-nota"><label>Nota Segundo Examen</label><br> <input type="number" name="nota2" id="nota2" </input></div> <div class="ingreso-nota"><label>Nota Tercer Examen</label> <br><input type="number" name="nota3" id="nota3" </input></div></div>',
        confirmButtonText: '<button class="agregar-alumno"> Agregar </button>'
    })
    const nombreAlumnoBox = document.querySelector("#nombre");
    const cursoAlumnoBox = document.querySelector("#cursos");
    const nota1AlumnoBox = document.querySelector("#nota1");
    const nota2AlumnoBox = document.querySelector("#nota2");
    const nota3AlumnoBox = document.querySelector("#nota3");
    const agregarAlumno = document.querySelector(".agregar-alumno");
    agregarAlumno.addEventListener("click", () => {
        let nombreBox = nombreAlumnoBox.value;
        let cursoBox = cursoAlumnoBox.value;
        let nota1Box = nota1AlumnoBox.value;
        let nota2Box = nota2AlumnoBox.value;
        let nota3Box = nota3AlumnoBox.value;

        let template = `
                        <td class="nombre-completo">${nombreBox}
                        <button class="editar-alumno"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
<path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
<path d="M16 5l3 3" />
</svg>
</button>
<button class="eliminar-alumno"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round" background-color= "transparent">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M4 7l16 0" />
<path d="M10 11l0 6" />
<path d="M14 11l0 6" />
<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg></button></td>
                        <td>${cursoBox}°</td>
                        <td id="nota-1" class="notas text-center">${nota1Box} </td>
                        <td id="nota-2" class="notas text-center">${nota2Box}</td>
                        <td id="nota-3" class="notas text-center">${nota3Box}</td>`
        tabla.innerHTML += template;
    })

})

//Boton Eliminar
const botonEditarAlumno = document.querySelector(".editar-alumno");
let rowIndex, table = document.querySelector(".tabla");
botonEditarAlumno.addEventListener("click", () => {
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].onclick = () => {
            rowIndex = this.rowIndex;
        }
    }
})


const botonEliminarAlumno = document.querySelector(".eliminar-alumno");
botonEliminarAlumno.addEventListener("click", () => {
    table.deleteRow(rowIndex);

})