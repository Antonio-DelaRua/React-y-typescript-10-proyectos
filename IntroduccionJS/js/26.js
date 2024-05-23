// Fetch API con Async / await

const url = 'https://jsonplaceholder.typicode.com/comments'


// const consultarApi = () => {

//     fetch(url)
//     .then((response) =>{
//         if(response.ok){
//           return response.json()  
//         }
//         throw new Error( 'Hubo un error')
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))
// }

// consultarApi()


// const consultarApi = async () => {
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }

// consultarApi()

const consultarApi = async () => {
    try{
        const response = await  fetch(url)
        if(!response.ok){
            throw new Error('Hubo un error')
        }
        const data = await response.json()
        console.log(data)
    } catch {
        console.log(error.message)
    }
}

consultarApi()