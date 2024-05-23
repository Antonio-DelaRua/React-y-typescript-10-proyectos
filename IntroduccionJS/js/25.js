// Fetch API con Promises - Proporciona una interfaz para recuperar recursos para poder obtener datos a traves de la red.
// https: jsonplaceholder.typicode.com

const url = 'https://jsonplaceholder.typicode.com/comments'

fetch(url)
    .then((response) =>{
        if(response.ok){
          return response.json()  
        }
        throw new Error( 'Hubo un error')
        //console.log(response)
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })