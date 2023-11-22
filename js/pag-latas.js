
const textoOculto = document.getElementById("texto-oculto");

function mostrarTexto(titulo, left, top) {
    textoOculto.innerHTML = titulo;
    textoOculto.style.left = left;
    textoOculto.style.top = top;
    textoOculto.style.transform = "none";
    textoOculto.style.display = "block";
}

const imagenes = [
    document.getElementById("imagen1"),
    document.getElementById("imagen2"),
    document.getElementById("imagen3"),
    document.getElementById("imagen4"),
    document.getElementById("imagen5"),
    document.getElementById("imagen6"),
    document.getElementById("imagen7")
];

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("mouseover", function () {
        switch (i) {
            case 0:
                mostrarTexto("<h4>MONSTER BLACK<h4> <h6>La lata original negra de Monster Energy se lanzó en 2002 y es icónica por su diseño negro con el logotipo verde neón. Contiene una bebida energética refrescante y dulce con cafeína y otros ingredientes para proporcionar energía. Es una elección popular entre los amantes de las bebidas energéticas.<h6>", "25%", "70%");
                break;
            case 1:
                mostrarTexto("<h4>MONSTER YELLOW<h4>    <h6>La lata amarilla de Monster Energy destaca por su vibrante diseño en tonos amarillos. La fecha de lanzamiento fue en 2021. Contiene una bebida energética que ofrece una combinación de sabores intensos y una dosis de cafeína para un impulso de energía. Es una elección popular para quienes buscan una bebida con un sabor fresco y una inyección de energía.<h6>", "25%", "70%");
                break;
            case 2:
                mostrarTexto("<h4>MONSTER BLUE<h4>    <h6>La lata azul de Monster Energy presenta un diseño en tonos azules y contiene una bebida energética refrescante con cafeína y otros ingredientes energizantes.<h6>", "25%", "70%");
                break;
            case 3:
                mostrarTexto("<h4>MONSTER GREEN<h4>    <h6>La lata verde de Monster Energy es la icónica original con su logotipo verde neón, lanzada en 2002. Ofrece un sabor dulce y refrescante.<h6>", "25%", "70%");
                break;
            case 4:
                mostrarTexto("<h4>MONSTER ORANGE<h4>    <h6>La lata naranja de Monster Energy, lanzada en una fecha específica, destaca por su diseño naranja y contiene una bebida energética con sabor audaz.<h6>", "25%", "70%");
                break;
            case 5:
                mostrarTexto("<h4>MONSTER RED<h4>    <h6>La lata roja de Monster Energy es otra variante popular y contiene una bebida energética con un sabor atrevido.<h6>", "25%", "70%");
                break;
            case 6:
                mostrarTexto("<h4>MONSTER WHITE<h4>    <h6>La lata blanca de Monster Energy presenta un diseño limpio y moderno y contiene una bebida energética con un sabor suave.<h6>", "25%", "70%");
                break;
            default:
                mostrarTexto("<h4>MONSTER ENERGY<h4>    <h6>Monster Beverage Corporation, conocida comúnmente como Monster Energy, es una empresa estadounidense que se especializa en la fabricación y distribución de bebidas energéticas y otros productos relacionados con la energía y el rendimiento. Aquí tienes una breve descripción de la empresa Monster:<h6>", "25%", "70%");
        }
    });

    // Agregar un evento "mouseout" para ocultar el texto cuando se retira el cursor de la imagen.
    imagenes[i].addEventListener("mouseout", function () {
        textoOculto.style.display = "none";
    });
}
