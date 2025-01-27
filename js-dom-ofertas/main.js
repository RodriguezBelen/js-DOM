const productosTecnologicos = [
    {
        id: 1,
        nombre: "Smartphone XYZ",
        marca: "Apple",
        precio: 899.99,
        stock: 100,
        categoria: "Smartphones",
        calidadImagen: "Alta",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6W_TzlkEIXjLJSkFw8J1KPzQMWWqGCqWB1A&s"
    },
    {
        id: 2,
        nombre: "Tablet ABC",
        marca: "Samsung",
        precio: 599.99,
        stock: 50,
        categoria: "Tablets",
        calidadImagen: "Buena",
        img: "https://images.fravega.com/f1000/8c36acc8f11f37c8c85537c52074a0dd.png"
    },
    {
        id: 3,
        nombre: "Laptop ABC",
        marca: "Dell",
        precio: 1299.99,
        stock: 20,
        categoria: "Laptops",
        calidadImagen: "Excelente",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZK5iT6jtUn4k1Fd6X-Y3pE73S3YVA0UByRw&s"
    },
    {
        id: 4,
        nombre: "Mouse GTX",
        marca: "Logitech",
        precio: 29.99,
        stock: 150,
        categoria: "Accesorios",
        calidadImagen: ["Media", "Alta"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS272nxaQF2PKf2oAdsXTG7OZ3wv-438ym5Ng&s"
    }
];

const container = document.querySelector('.container');
console.log(container);
// const product = productosTecnologicos

// const p = document.createElement('p');
// card.append(p);

// let precioInput = Number(prompt('Ingrese un precio para ofertar productos'))

for (let producto of productosTecnologicos) {
    // console.log(producto.nombre) para ver en la consola solo el nombre
    const card = document.createElement('div');
    card.classList.add('card');

    const titulo = document.createElement('h3');
    titulo.textContent = producto['nombre'];
    card.append(titulo)
    delete producto['nombre']

    //pasar a funcion luego
    if (Object.hasOwn(producto, 'img')) {
        const img = document.createElement('img');
        img.src = producto['img'];
        img.classList.add('img-card'),
        img.setAttribute('alt', `${titulo.textContent} - img`),
        card.append(img)
        delete producto['img']
    }


    // console.log(img)

    for (let keyProducto in producto) {
        const p = document.createElement('p')
        parseArrayInStr(producto, keyProducto, p)


        card.append(p)
    }
    container.append(card);
}

function parseArrayInStr(producto, key, elemento) {
    if (Array.isArray(producto[key])) {
        const str = producto[key].join(', ')
        elemento.innerHTML = `<span class="prop">${key}:</span>  ${str}`
    } else {
        ofertarProducto(producto, key, elemento)
    }
}

function ofertarProducto(producto, key, elemento) {
    if (Number(producto['precio']) < 250 && key === 'precio') {
        elemento.classList.add('oferta')
        elemento.innerHTML = `<span class="prop">${key}:</span> $ ${producto[key]} ¡OFERTA!`
    } else {
        elemento.innerHTML = `<span class="prop">${key}:</span> ${producto[key]}`
    }
}


