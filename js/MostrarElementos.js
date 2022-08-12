const tapes = [
    {
        id: 1,
        nombre: "Pa galleg amb salmorejo",
        precio: 3.00.toPrecision(3),
        alergeno: "1",
    },
    {
        id: 2,
        nombre: "Ensaladilla Russa",
        precio: 5.00.toPrecision(3),
        alergeno: "1,3,4,6",
    },
    {
        id: 3,
        nombre: "Pernil i formatge manxec",
        precio: 8.00.toPrecision(3),
        alergeno: "7",
    },
    {
        id: 4,
        nombre: "Creïlles braves",
        precio: 5.00.toPrecision(3),
        alergeno: "1",
    },
    {
        id: 5,
        nombre: "Creïlles amb salsa roquefort",
        precio: 6.00.toPrecision(3),
        alergeno: "1,7",
    },
    {
        id: 6,
        nombre: "Ous trencats amb foie, bolets i creïlles",
        precio: 9.50.toPrecision(3),
        alergeno: "1,3,7",
    },
    {
        id: 7,
        nombre: "Ous trencats amb pernil, xoriço, pebre verd i <br> creïlles",
        precio: 9.50.toPrecision(3),
        alergeno: "1,3",
    },
    {
        id: 8,
        nombre: "Camembert arrebossat amb  <br>confitura de nabius",
        precio: 8.00.toPrecision(3),
        alergeno: "1,3,7",
    },
    {
        id: 9,
        nombre: "Calamars a la planxa",
        precio: 8.00.toPrecision(3),
        alergeno: "14",
    },
    {
        id: 10,
        nombre: "Sèpia a la planxa",
        precio: 11.00.toPrecision(4),
        alergeno: "14",
    },
    {
        id: 11,
        nombre: "Oueres de sèpia a la planxa",
        precio: 8.00.toPrecision(3),
        alergeno: "14",
    },
    {
        id: 12,
        nombre: "Calamars a la romana",
        precio: 8.00.toPrecision(3),
        alergeno: "1,3,14",
    },
    {
        id: 13,
        nombre: "Mandonguilles d'abadejo (8ud.)",
        precio: 7.00.toPrecision(3),
        alergeno: "1,3,4,6,7,10,13",
    },
    {
        id: 14,
        nombre: "Croquetons de pernil (6ud.)",
        precio: 7.00.toPrecision(3),
        alergeno: "1,2,3,4,6,7,8,13",
    },
    {
        id: 15,
        nombre: "Combinat de croquetes de xipirons, cabrales i rabo de bou (3 ud/cada)",
        precio: 8.50.toPrecision(3),
        alergeno: "1,2,3,4,6,7,8,13",
    },
    {
        id: 16,
        nombre: "Revoltat de bolets amb pernil",
        precio: 7.50.toPrecision(3),
        alergeno: "3",
    },
    {
        id: 17,
        nombre: "Revoltat de xistorra i formatge parmesà",
        precio: 7.50.toPrecision(3),
        alergeno: "1,3,7",
    },
    {
        id: 18,
        nombre: "Saltetjat de puntilla i faves",
        precio: 8.50.toPrecision(3),
        alergeno: "1,4",
    },
    {
        id: 19,
        nombre: "Servici de pa gallec",
        precio: 2.00.toPrecision(3),
        alergeno: "1",
    },
    {
        id: 19,
        nombre: "Gambons a la planxa (8ud.)",
        precio: 12.00.toPrecision(4),
        alergeno: "2",
    },

  
];
const amanides = [
    {
        id: 20,
        nombre: "Amanida de la casa",
        detalles: "Brots tendres, confit d'ànec, foie, fruits secs, tomaca cherry i vinagreta de d'ametlla",
        precio: 12.00.toPrecision(4),
        alergeno: "5,8,11",
    },
    {
        id: 21,
        nombre: "Amanida de formatge de cabra",
        detalles: "Brots tendres, formatge de cabra, tomaca cherry,beicon cruixent, fruits secs i vinagreta d'ametla",
        precio: 9.50.toPrecision(3),
        alergeno: "1,5,6,7,8,11",
    },
    {
        id: 22,
        nombre: "Amanida de gambons",
        detalles: "Brots tendres,gambons planxa, tonyina, tomaca cherry, fruits secs i vinagreta de pebrots",
        precio: 9.50.toPrecision(3),
        alergeno: "1,2,4,5,8,11",
    },
    {
        id: 23,
        nombre: "Amanida mediterrànea",
        detalles: "Enciam, tomaca, ceba, dacsa, espàrrecs, ou dur, tonyina i olives",
        precio: 7.00.toPrecision(3),
        alergeno: "4,9,11",
    },
    {
        id: 24,
        nombre: "Amanida cèsar",
        detalles: "Enciam, tomaca cherry, panses, nous, crostrons de pa, pit de pollastre, formatge parmesà i salsa cèsar",
        precio: 8.00.toPrecision(3),
        alergeno: "1,3,6,7,8,10,11",
    },
];
const carns = [
    {
        id: 25,
        nombre: "Solomillo de porc",
        precio: 9.00.toPrecision(3),
        alergeno: "1",
    },
    {
        id: 26,
        nombre: "Llom amb guarnició",
        precio: 7.00.toPrecision(3),
        alergeno: "1",
    },
    {
        id: 27,
        nombre: "Pit de pollastr amb guarnició",
        precio: 7.00.toPrecision(3),
        alergeno: "1",
    },
    {
        id: 28,
        nombre: "Broxeta de pollastre",
        precio: 8.00.toPrecision(3),
        alergeno: "1",
    },
    {
        id: 29,
        nombre: "Entrecot de vedella amb guarnició",
        detalles: "Amb salsa roquefort o pimienta",
        precio: 14.00.toPrecision(4),
        alergeno: "1",
    },
    {
        id: 30,
        nombre: "Entrecot de vedella (300gr.) amb guarnició",
        detalles: "Amb salsa roquefort o pimienta",
        precio: 16.00.toPrecision(4),
        alergeno: "1",
    },
    {
        id: 31,
        nombre: "Delícies de confit d'ànec amb salsa d'Oporto",
        precio: 9.50.toPrecision(3),
        alergeno: "1,13",
    },
];

const peix = [
    {
        id: 32,
        nombre: "Calamars planxa amb guarnició",
        precio: 8.50.toPrecision(3),
        alergeno: "1,2,5,14",
    },
    {
        id: 33,
        nombre: "Emperador planxa amb guarnició",
        precio: 10.50.toPrecision(4),
        alergeno: "1,3,4,6",
    },
    {
        id: 34,
        nombre: "Lluç a la planxa amb guarnició",
        precio: 8.00.toPrecision(3),
        alergeno: "1,3,4,6",
    },
    {
        id: 35,
        nombre: "Sepionet planxa amb guarnició",
        precio: 12.00.toPrecision(4),
        alergeno: "1,3,6,14",
    },
    {
        id: 36,
        nombre: "Llobarro a l'esquena",
        precio: 11.00.toPrecision(4),
        alergeno: "1,4",
    },
    {
        id: 37,
        nombre: "Gambons a la planxa (5ud.)",
        precio: 8.00.toPrecision(3),
        alergeno: "14",
    },
];

const entrepans = [
    {
        id: 50,
        nombre: "Sèpia planxa amb allada i maionesa",
        precio: 7.50.toPrecision(3),
        alergeno: "1,3,6,14",
    },
    {
        id: 48,
        nombre: "Puntilla arrebossada amb maionesa de lima",
        precio: 7.50.toPrecision(3),
        alergeno: "1",
    },
    {
        id: 43,
        nombre: "Calamars romana amb maionesa de lima",
        precio: 7.00.toPrecision(3),
        alergeno: "1,3,6,14",
    },
    {
        id: 46,
        nombre: "Xivito",
        detalles:"Llom, tomaca, enciam, beicon, ou i formatge",
        precio: 7.50.toPrecision(3),
        alergeno: "1,3,6",
    },
    {
        id: 45,
        nombre: "Xivi-pollo",
        detalles:"Pollastre,tomaca, enciam, formatge i maionesa",
        precio: 7.00.toPrecision(3),
        alergeno: "1,3,6",
    },
    {
        id: 47,
        nombre: "Brascada",
        detalles: "Vedella amb pernil i ceba",
        precio: 7.50.toPrecision(3),
        alergeno: "1",
    },
    {
        id: 49,
        nombre: "Carn de cavall amb alls tendres i creïlles",
        precio: 8.50.toPrecision(3),
        alergeno: "1",
    },
];

const hamburgueses = [
    {
        id: 51,
        nombre: "Hamburguesa Angus (200gr)",
        detalles: "Brots tendres, tomaca, beicon, ceba caramelitzada i formatge de cabra o foie",
        precio: 9.00.toPrecision(3),
        alergeno: "1,3,6,7,11",
    },
    {
        id: 52,
        nombre: "Hamburguesa Vedella 100% (200gr)",
        detalles: "Rúcula, pepinillo, ceba cruixent, formatge cheddar i beicon",
        precio: 9.00.toPrecision(3),
        alergeno: "1,3,6,7,11",
    },
    {
        id: 53,
        nombre: "Hamburguesa especial",
        detalles: "Tomaca, enciam, beicon, formatge i ou",
        precio: 6.00.toPrecision(3),
        alergeno: "1,3,6,7,11",
    },
    {
        id: 54,
        nombre: "Sandvitx mixte",
        detalles: "Pernil dolç i formatge",
        precio: 4.00.toPrecision(3),
        alergeno: "1,6,7",
    },
    {
        id: 55,
        nombre: "Sandvitx vegetal",
        detalles: "Enciam, tomaca, espàrrec blanc, dacsa, ou, tonyina i maionesa",
        precio: 5.00.toPrecision(3),
        alergeno: "1,3,6",
    },
    {
        id: 56,
        nombre: "Sandvitx de pollastre",
        detalles: "Enciam, tomaca, pit de pollastre i maionesa",
        precio: 5.50.toPrecision(3),
        alergeno: "1,3,6",
    },

];

const pizzes = [
    {
        id: 57,
        nombre: "Lasanya casolana de carn",
        detalles: "",
        precio: 7.50.toPrecision(3),
        alergeno: "1,6",
    },
    {
        id: 58,
        nombre: "Lasanya casolana de verdures",
        detalles: "",
        precio: 7.50.toPrecision(3),
        alergeno: "1,6",
    },
    {
        id: 59,
        nombre: "York",
        detalles: "Pernil dolç",
        precio: 7.00.toPrecision(3),
        alergeno: "1,7",
    },
    {
        id: 60,
        nombre: "Tropical",
        detalles: "Pernil dolç, pinya i dàtils",
        precio: 8.00.toPrecision(3),
        alergeno: "1,6,7",
    },
    {
        id: 61,
        nombre: "Verdures",
        detalles: "Ceba, alberginia, carabasseta, xampinyons i pebre",
        precio: 8.00.toPrecision(3),
        alergeno: "1,7",
    },
    {
        id: 62,
        nombre: "Sueca",
        detalles: "Ceba, tonyina i anxoves",
        precio: 8.00.toPrecision(3),
        alergeno: "1,4,6,7",
    },
    {
        id: 63,
        nombre: "Ceba i botifarra",
        detalles: "Ceba i botifarra",
        precio: 8.00.toPrecision(3),
        alergeno: "1,7",
    },
    {
        id: 64,
        nombre: "Barbacoa",
        detalles: "Magre picat, beicon, ceba i salsa barbacoa",
        precio: 8.00.toPrecision(3),
        alergeno: "1,6,7",
    },
    {
        id: 65,
        nombre: "4 Formatge",
        detalles: "Formatge de cabra, roquefort i brie",
        precio: 8.00.toPrecision(3),
        alergeno: "1,7",
    },
    {
        id: 66,
        nombre: "Capritxo",
        detalles: "Beicon, formatge de cabra i nous",
        precio: 8.00.toPrecision(3),
        alergeno: "1,5,7,8",
    },
    {
        id: 67,
        nombre: "Carbonara",
        detalles: "Nata, beicon, ceba i xampinyons",
        precio: 8.00.toPrecision(3),
        alergeno: "1,7",
    },
    {
        id: 68,
        nombre: "Sequial20",
        detalles: "Xoriço, ceba, tonyina, beicon, ou i pernil dolç",
        precio: 10.00.toPrecision(4),
        alergeno: "1,3,4,6,7",
    },
    {
        id: 69,
        nombre: "Salmó fumat",
        detalles: "Salmó fumat, alcaparres i gambes",
        precio: 10.00.toPrecision(4),
        alergeno: "1,4,7",
    },
    {
        id: 70,
        nombre: "Foie i ceba caramelitzada",
        detalles: "Foie, ceba caramelitzada",
        precio: 9.00.toPrecision(3),
        alergeno: "1,3,7",
    },
    {
        id: 71,
        nombre: "Formatge de cabra",
        detalles: "Nata, formatge de cabra i ceba caramelitzada",
        precio: 9.00.toPrecision(3),
        alergeno: "1,3,4,7,8",
    },
    {
        id: 72,
        nombre: "Campera",
        detalles: "Pit de pollastre, xampinyons, ceba i pebre roig",
        precio: 8.50.toPrecision(3),
        alergeno: "1,7",
    },
];

const arrossos = [
    {
        id: 73,
        nombre: "Paella Valenciana",
        detalles: "1º Premi Local Sueca 2019",
        precio: 8.00.toPrecision(3),
        alergeno: "",
    },
    {
        id: 74,
        nombre: "Arros al forn",
        detalles: "",
        precio: 8.00.toPrecision(3),
        alergeno: "",
    },
    {
        id: 75,
        nombre: "Arros de confit d'ànec",
        detalles: "",
        precio: 11.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 76,
        nombre: "All i pebre",
        detalles: "",
        precio: 14.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 77,
        nombre: "Arros allipebrat del senyoret",
        detalles: "",
        precio: 16.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 78,
        nombre: "Arros de secret ibèric amb bolets i alls tendres",
        detalles: "",
        precio: 13.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 79,
        nombre: "Arros caldós amb fesols i nap",
        detalles: "",
        precio: 14.00.toPrecision(4),
        alergeno: "",
    },
    {
        id: 80,
        nombre: "Arros del senyoret",
        detalles: "1º Premi Bétera 2018",
        precio: 14.00.toPrecision(4),
        alergeno: "4",
    },
    {
        id: 82,
        nombre: "Arros negre",
        detalles: "",
        precio: 11.00.toPrecision(4),
        alergeno: "4",
    },
    {
        id: 83,
        nombre: "Arros de bogavant",
        detalles: "",
        precio: 16.00.toPrecision(4),
        alergeno: "4,14",
    },
    {
        id: 84,
        nombre: "Arros de sèpia, rap i alls tendres",
        detalles: "",
        precio: 11.00.toPrecision(4),
        alergeno: "4",
    },
    {
        id: 85,
        nombre: "Arros de marisc",
        detalles: "",
        precio: 13.00.toPrecision(4),
        alergeno: "4,14",
    },
    {
        id: 86,
        nombre: "Arros de calamars amb verdures",
        detalles: "",
        precio: 11.00.toPrecision(4),
        alergeno: "4",
    },
    {
        id: 87,
        nombre: "Paella mixta",
        detalles: "",
        precio: 12.00.toPrecision(4),
        alergeno: "4",
    },
];

const postre = [
    {
        id: 88,
        nombre: "Brownie de xocolate amb gelat",
        detalles: "",
        precio: 5.00.toPrecision(3),
        alergeno: "1,3",
    },
    {
        id: 89,
        nombre: "Postre de la casa",
        detalles: "",
        precio: 5.00.toPrecision(3),
        alergeno: "1,3",
    },
    {
        id: 90,
        nombre: "Flams casolans (ou, formatge, café o carabassa)",
        detalles: "",
        precio: 3.50.toPrecision(3),
        alergeno: "1,3,7",
    },
    {
        id: 91,
        nombre: "Fruita natural",
        detalles: "",
        precio: 3.50.toPrecision(3),
        alergeno: "",
    },
    {
        id: 92,
        nombre: "Boles de gelat",
        detalles: "",
        precio: 2.00.toPrecision(3),
        alergeno: "",
    },
];

const contenedorTapes = document.querySelector(".contenedor-tapes");
const contenedorAmanides = document.querySelector(".contenedor-amanides");
const contenedorCarns = document.querySelector(".contenedor-carns");
const contenedorPeix = document.querySelector(".contenedor-peix");
const contenedorEntrepans = document.querySelector(".contenedor-entrepans");
const contenedorHamburgueses = document.querySelector(".contenedor-hamburgueses");
const contenedorArrossos = document.querySelector(".contenedor-arrossos");
const contenedorPostre = document.querySelector(".contenedor-postre");

window.addEventListener("DOMContentLoaded", function () {
    MostrarElementos(tapes, contenedorTapes)
    MostrarElementos(amanides, contenedorAmanides)
    MostrarElementos(carns,contenedorCarns)
    MostrarElementos(peix,contenedorPeix)
    MostrarElementos(entrepans,contenedorEntrepans)
    MostrarElementos(hamburgueses,contenedorHamburgueses)
    MostrarElementos(arrossos,contenedorArrossos)
    MostrarElementos(postre,contenedorPostre)
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