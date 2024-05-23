// Objetos - Destructuring de 2 o mas objetos
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: false
}

const cliente = {
    nombre: "Juan",
    premium: true,
    
}


// const carrito = {
//     cantidad: 1,
//     ...producto // spread operator
// }

// console.log(carrito.nombre)


const nuevoObjeto = {
    ...producto,
    ...cliente
}

console.log(nuevoObjeto)

const nuevoObjeto2 = Object.assign(producto, cliente)
console.log(nuevoObjeto2)