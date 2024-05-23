const tecnologias = [ 'HTML', 'CSS', 'Javascript', 'React.js', 'Node.js']

// tecnologias[5] = 'Nest.js'
//  tecnologias.shift()   esto lo que hace es borra el primer dato que en este caso seria HTML
// const nuevoArreglo = [ ...tecnologias, 'nest.js']

// console.table(tecnologias)

// console.table(nuevoArreglo)

// const tecnologias = [ 'HTML', 'CSS', 'Javascript', 'React.js', 'Node.js']
// const tecnologias2 = tecnologias.filter(function(tech){
//     if(tech !== 'HTML'){
//         return tech
//     }
// })

const tecnologias2 = tecnologias.map(function(tech) {
    if(tech === 'Node.js'){
        return 'Nest.js'
    } else {
        return tech
    }
})
console.log(tecnologias)