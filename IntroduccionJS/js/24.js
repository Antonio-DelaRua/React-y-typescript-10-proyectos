//import multiplicar,{ sumar, restar } from './funciones.js'
import { sumar, restar, multiplicar, division } from './funciones.js'

const resultado = sumar(20, 10)
const resultado2 = restar(20, 10)
const resultado3 = multiplicar(20, 10)
const resultado4 = division(20, 10)
4

console.log(resultado)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)


// para poder utilizar los import recordar siempre q le tenemos q poner el type="module" || <script src="js/24.js" type="module"></script>


// cuando tengamos muchos export con nombres iguales le podemos colocar un alias

// import { sumar as funcionSumar, restar } from './funciones.js'

// const resultado = funcionSumar(20, 10)