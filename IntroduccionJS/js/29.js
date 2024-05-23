
// Manipular elementos HTML con JS

const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

heading.textContent = 'Un nuevo heading...'

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'un nuevo valor'

enlaces[0].textContent = 'Nuevo enlace' // para cambiar uno 
enlaces.forEach( enlace => enlace.textContent = 'nuevo enlace') // para cambiar todos

// heading.removeAttribute('class')