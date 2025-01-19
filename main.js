// const links = document.querySelector('#links');
// console.log(links);

const image = document.querySelector('nav>img');
// console.log(image.alt);
image.alt = 'Icono';

const link1 = document.querySelector('#link1');
console.log(link1);
link1.innerText = 'Home';

link1.innerHTML = '<p>Home</p>';
 //cambiar estilos del elemento con la propiedad "style"
link1.style.backgroundColor = 'red';

const list =document.querySelector('#links');
console.log(list);

//creamos el elemento
const li = document.createElement('li');
// agregamos texto y atributo
li.innerText = 'About';
li.setAttribute('id', 'ultimoLink')

//agregamos el elemento contenedor padre
 list.append(li);



 const seccionProductos = document.querySelector('.productos');
//  console.log(seccionProductos.classList); 
seccionProductos.classList.add('fondo-verde)');