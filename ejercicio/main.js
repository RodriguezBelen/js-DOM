// const boton = document.querySelector('#miBoton');
// const parrafo = document.querySelector('p')
    
// boton.addEventListener('click', function() {
// parrafo.classList.toggle('fondo-verde')
// })

const formulario = document.querySelector('form')

formulario.addEventListener('submit', function(event){
    event.preventDefault()
    // console.log('El formulario fue enviado')
    const datos = Object.fromEntries( new FormData(event.target))
    console.log(datos)

})

