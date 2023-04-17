// Realice un programa donde un personaje abra 10 cofres, los cofres 
// pueden contener: 10 de oro, 2 pociones de vida, nada.

// a. Indique el oro final recolectado

// b. Indique cuantas pociones de Vida obtuvo

// c. Indique cuantos cofres vacíos hubo

// d. Cada vez que abre un cofre indique qué saco


let cofre = Math.floor(Math.random() * 3)
let oro = 0
let pociones = 0
let vacio = 0

for (i = 0; i < 10; i++) {
    document.write(`El cofre se esta abriendo<br>`);
    
    let cofre = Math.floor(Math.random() * 3)
    switch (cofre) {
        case 0:
            document.write(`Usted saco 10 de oro del cofre<br>`);
            oro += +10;
            break;
        case 1:
            document.write(`Usted saco 2 pociones de vida<br>`);
            pociones+= +2;
            break;
        default:
            document.write(`El cofre estaba vacio<br>`)
            vacio++;
            break;
    }
    document.write("<br>");
}
document.write("<br><br><br>");
document.write(`<h3>Usted obtuvo ${oro} de oro del cofre<br><h3/>`);
document.write(`<h3>Usted obtuvo ${pociones} posiones del cofre<br></h3>`);
document.write(`<h3>Usted obtuvo ${vacio} de cofres vacios<br></h3>`);