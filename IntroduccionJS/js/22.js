// Optional chaining (?)

const alumno = {
    nombre: 'Juan',
    clase: 'Programacion',
    aprobado: true,
    examenes: {
        examen1: 90
    }
}
console.log(alumno.examenes?.examen1)
console.log('Despues de alumno')



// Nullish coolescing operator  (??) - es un operador logico que retorna el valor que esta del lado derecho, cuando el valor del lado izquierdo es nulo
// o undefined en caso contrario retorna el valor de la izquierda


// const pagina = null ?? 1
// console.log(pagina)


const pagina = 10 ?? 1
console.log(pagina)