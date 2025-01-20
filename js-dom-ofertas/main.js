const productosTecnologicos = [
    {
        id: 1,
        nombre: "Smartphone XYZ",
        marca: "Apple",
        precio: 899.99,
        stock: 100,
        categoria: "Smartphones",
        calidadImagen: "Alta"
    },
    {
        id: 2,
        nombre: "Tablet ABC",
        marca: "Samsung",
        precio: 599.99,
        stock: 50,
        categoria: "Tablets",
        calidadImagen: "Buena"
    },
    {
        id: 3,
        nombre: "Laptop ABC",
        marca: "Dell",
        precio: 1299.99,
        stock: 20,
        categoria: "Laptops",
        calidadImagen: "Excelente"
    },
    {
        id: 4,
        nombre: "Mouse GTX",
        marca: "Logitech",
        precio: 29.99,
        stock: 150,
        categoria: "Accesorios",
        calidadImagen: "Media"
    },
];

const container = document.querySelector('.container');
console.log(container);
// const product = productosTecnologicos

// const p = document.createElement('p');
// card.append(p);


for (let producto of productosTecnologicos) {
    // console.log(producto.nombre) para ver en la consola solo el nombre
    const card = document.createElement('div');
    card.classList.add('card');

    const titulo = document.createElement('h3');
    titulo.textContent = producto['nombre'];
    card.append(titulo)
    delete producto['nombre']

    for (let keyProducto in producto) {
        const p = document.createElement('p')
        //       p.textContent = `${keyProducto}: ${producto[keyProducto]}`
        p.innerHTML = `<span class="prop">${keyProducto}:</span> $ ${producto[keyProducto]} ¡OFERTA!`;
        card.append(p)
        // console.log(`${keyProducto}: ${producto[keyProducto]}`)
    }
    console.log('-------------------------------------------')

    //p.textContent = product.marca
    //         if(Number(producto['precio'])<250 && keyProducto === 'precio'){
    //          p.classList.add('oferta')   
    //         }else{
    //             p.innerHTML = `<span class="prop">${keyProducto}:</span> ${producto[keyProducto]}`;
    //         }
    //     }
    container.append(card);
}

