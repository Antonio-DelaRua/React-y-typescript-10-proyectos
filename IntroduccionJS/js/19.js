
const numero1 = 20
const numero2 = "20"

/*
    ==  ( comparador no estricto )
    === ( comparador estricto )


*/

if(numero1 == numero2){
    console.log('sin son iguales')
} else {
    console.log('No son iguales')
}

// con el comparador no estricto aun siendo uno de tipo number y el otro un string te dara true 


if(numero1 === numero2){
    console.log('sin son iguales')
} else {
    console.log('No son iguales')
}

// con el estricto te dara false ya que uno es un tipo number y el otro un string