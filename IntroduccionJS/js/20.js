
const saldo = 1000
const pagar = 500
const tarjeta = true

// if(saldo > pagar){

//     console.log('si puedes pagar')

// }else if(tarjeta){

//     console.log('puedes pagar')

// }else {

//     console.log('No puedes pagar')
// }


// si varias condiciones se cumplen no se va a ejecutar ambas se ejecutara la 1 que se cumpla


/**
 * 
 * Logical Or y Logical And
 * || Or - al menos una se cumple
 * && And - Revisa que todos se cumplan
 * 
 */ 

// if(saldo > pagar && tarjeta){
//     console.log('Puedes pagar')
// } else {
//     console.log('No puedes pagar')
// }

if (saldo > pagar || tarjeta){
    console.log('Si puedes pagar')
} else {
    console.log('No puedes pagar')
}