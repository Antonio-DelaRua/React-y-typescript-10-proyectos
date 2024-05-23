
const tecnologias = [ 'HTML', 'CSS', 'Javascript', 'React.js', 'Node.js', 'Nest.js', 'Typescript']

// console.log(tecnologias[0])
// console.log(tecnologias[1])
// console.log(tecnologias[2])
// console.log(tecnologias[3])
// console.log(tecnologias[4])

// for(let i = 0; i < tecnologias.length; i++) {
//     console.log(tecnologias[i])
// }


// forEach

// tecnologias.forEach(function(){
//     console.log('desde la funcion')
// })

// tecnologias.forEach(function(nombrequequieras){
//     console.log(nombrequequieras)
// })

const arrayForEach = tecnologias.forEach(function(tech){
    return tech
})

// map

// tecnologias.map(function(tech){
//     console.log(tech)
// })
const arrayMap = tecnologias.map(function(tech){
    return tech
})

console.log(arrayForEach)
console.log(arrayMap)


// cual es la diferencia entre forEach y map : la diferencia es que map te genera un nuevo arreglo, se itera, pero su caracteristica principal
// es que genera un nuevo arreglo y el forEach no.

// for ... of : es una sintaxis mas clara que el forEach y ejecuta un bloque de codigo por cada elemento de un arreglo

for(let tech of tecnologias){
    console.log(tech)
}