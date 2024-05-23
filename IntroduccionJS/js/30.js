// eventos del DOM clicks 
// https: developer.mozilla.org/en-US/docs/Web/API/Element#events

const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

// heading.addEventListener('click', () => {
//     heading.textContent = 'Nuevo heading al dar click'
// })

// heading.addEventListener('mouseleave', () => {
//     heading.textContent = 'saliendo'
// })


// enlaces.forEach(enlace => {
//     enlace.addEventListener('click', () => {
//         console.log('diste un click en un enlace')
//     })
// })


enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        //console.log(e)
        e.preventDefault()
        e.target.textContent = 'diste click'
    
    })
})