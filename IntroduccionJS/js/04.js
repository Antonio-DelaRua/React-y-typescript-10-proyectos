// Objetos - un objeto es una coleccion de propiedades y una propiedad es una asociacion entre un nombre o clave y un valor


const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : false
}

// console.log(producto)
// console.table(producto)
// console.log(producto.nombre)




// Destructuring

// const { nombre } = producto
// console.log(nombre)

// const nombre = producto.nombre
// console.log(nombre)

// const { nombre, precio, disponible} = producto
// console.log(nombre)
// console.log(precio)
// console.log(disponible)



// Object literal Enhacement

const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado ,
    usuario 
}

console.log(nuevoObjeto)