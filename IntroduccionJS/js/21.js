// Ternarios

const auth = true


const saldo = 1000
const pagar = 500
const tarjeta = true

// if(auth){
//     console.log('Usuario autenticado')
// } else {
//     console.log('Usuario No autenticado')
// }


// estos 2 serian exactamente lo mismo

// auth ? console.log('Usuario autenticado') : console.log('Usuario No autenticado, ir a login')

// auth ?
// console.log('Usuario autenticado') :
// console.log('Usuario No autenticado, ir a login')


saldo > pagar ?
    console.log('Si puedes pagar') :
    console.log('No puedes pagar')



// Ternario anidado

// saldo > pagar ? 
//     console.log('Si puedes pagar') :
//     tarjeta ?
//         console.log('Puedes pagar con tarjeta') :
//         console.log('No puedes pagar')