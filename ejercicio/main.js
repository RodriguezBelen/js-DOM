const boton = document.querySelector('#miBoton');
const parrafo = document.querySelector('p')

boton.addEventListener('click', function() {
    parrafo.classList.toggle('fondo-verde')
})
