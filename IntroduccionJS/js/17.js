
const tecnologias = ['HTML', 'CSS', 'Javascript', 'React.js', 'Node.js']
const numeros = [10,20,30]

// Filter - Nos sirve para sacar un elemento del arreglo o tambien mantener ese elemento en el arreglo y sacar todos los demas

// el valor tech puedes utilizar el que quieras

// const nuevoArray = tecnologias.filter(function(tech){
//     console.log(tech)
// })

// const ejemploFilter = (tech) => {
//     console.log(tech)
// }

// const ejemploFilter = (tech) => console.log(tech)

// const nuevoArray = tecnologias.filter(ejemploFilter)

//const nuevoArray = tecnologias.filter((tech) => tech === 'HTML')

// const nuevoArray = tecnologias.filter((tech) => tech !== 'HTML')

// const tecnologias2 = tecnologias.filter(function(tech){
//     if(tech !== 'HTML'){
//         return tech
//     }
// })

// console.log(nuevoArray)
// console.log(tecnologias2)



// const resultado = numeros.filter(numero => numero !== 10)
// console.log(resultado)




////////////////////////////////////////////////////////////////////////////////////////////////////////7


// Includes 


// const resultado = tecnologias.includes('CSS')

//console.log(resultado)



//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Some - devuelve si al menos uno cumple la condicion

// const resultado = numeros.some( numero => numero > 15)

// if(resultado){

//     console.log('si hay elementos')

//     } else {

//     console.log('no hay elementos')

//     }

// console.log(resultado)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Find - Devuelve el primer elemento que cumple una funcion

// const resultado = numeros.find(numero => numero > 15)

// console.log(resultado)




////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Every - Retorna true o false si todos cumplen las condiciones

// const resultado = numeros.every(numero => numero > 15)
// console.log(resultado)


///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Reduce - Retorna un acumulado del total

// const resultado = numeros.reduce((total, numero) => {
//     console.log(total)
//     console.log(numero)

//     return total + numero
// }, 0)


const resultado = numeros.reduce( (total, numero) => total + numero, 0)

console.log(resultado)


