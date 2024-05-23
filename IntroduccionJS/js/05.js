// Objetos - Manipulación

const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: false
}

// esto no te deja cambiar los valores del codigo
// Object.freeze(producto)

// object.seal te permite cambiar las propiedades que tienes pero no te permite añadir mas
// Object.seal(producto)

//reescribir un valor
producto.disponible = true

// sino existe un valor , lo añade
producto.imagen = 'imagen.jpg'

//eliminar propiedadades
delete producto.precio

console.log(producto)