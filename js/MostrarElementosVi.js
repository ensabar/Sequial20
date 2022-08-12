const viblanc = [
    {
        id: 188,
        nombre: "Finca del Mar Verdejo",
        detalles: "D.O. València",
        precio: 11.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 189,
        nombre: "Murviedro Chardonnay",
        detalles: "D.O. València",
        precio: 13.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 190,
        nombre: "Nodus Chardonnay",
        detalles: "D.O. Utiel i Requena",
        precio: 16.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 191,
        nombre: "Nebla Verdejo",
        detalles: "D.O. Vino de la tierra de Castilla y León",
        precio: 11.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 192,
        nombre: "Protos Verdejo",
        detalles: "D.O. Rueda",
        precio: 15.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 192,
        nombre: "Atlantis Albariño",
        detalles: "D.O. Rias Baixas",
        precio: 12.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 192,
        nombre: "Blanc de blancs",
        detalles: "D. O. Penedès",
        precio: 13.00.toPrecision(4),
        alergeno: "",
    }
];

const vinegre = [
    {
        id: 192,
        nombre: "Juan de Juanes",
        detalles: "D.O València",
        precio: 11.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 192,
        nombre: "Hoya de Cadenas Cabernet Saugvinon",
        detalles: "D.O Utiel i Requena",
        precio: 11.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 192,
        nombre: "Murviedro Crianza",
        detalles: "D.O. València",
        precio: 14.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 192,
        nombre: "Viña Pomal Tempranillo",
        detalles: "D.O Rioja",
        precio: 15.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 192,
        nombre: "BO Bobal",
        detalles: "D.O Utiel i Requena",
        precio: 12.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 192,
        nombre: "Granza Tempranillo",
        detalles: "D.O. Ribera del Duero",
        precio: 12.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 192,
        nombre: "Legaris Roble",
        detalles: "D.O. Ribera del Duero",
        precio: 15.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 192,
        nombre: "Protos Roble",
        detalles: "D.O. Ribera del Duero",
        precio: 17.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 192,
        nombre: "Nodus Merlot Delirium",
        detalles: "D.O. Utiel i Requena",
        precio: 18.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 192,
        nombre: "Pago de los Capellanes Joven Roble",
        detalles: "D.O. Ribera del Duero",
        precio: 25.00.toPrecision(4),
        alergeno: "",
    }
];
const cava = [
    {
        id: 192,
        nombre: "Roger de Flor",
        detalles: "Brut Nature",
        precio: 15.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 192,
        nombre: "Juve Camps Reserva familiar",
        detalles: "Brut Nature",
        precio: 25.00.toPrecision(4),
        alergeno: "",
    }
]

const contenedorViblanc = document.querySelector(".contenedor-vi-blanc");
const contenedorVinegre = document.querySelector(".contenedor-vi-negre");
const contenedorCava = document.querySelector(".contenedor-cava");

window.addEventListener("DOMContentLoaded", function () {
    MostrarElementos(viblanc,contenedorViblanc)
    MostrarElementos(vinegre,contenedorVinegre)
    MostrarElementos(cava,contenedorCava)
});

// Creo una funcion que coge cada elemento del diccionario creado arriba, obtengo sus parametros y construyo un codigo html que se anyade a cada contenedor
function MostrarElementos (elementosDiccionario, contenedor){
    
    let elemento = elementosDiccionario.map(function (item) {
        
        return `<article>
        <div class="descripcion">${item.nombre}<sup class="alergeno">${item.alergeno}</sup></div>
        <div class="precio">${item.precio}</div>
        </article>`;
    });

    // Para juntar todos los elementos y poder iterarlo todo junto para cada elemento de la carta
    elemento = elemento.join("");

    contenedor.innerHTML = elemento;
}