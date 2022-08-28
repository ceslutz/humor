// let ingresarNumero = parseInt (prompt ("Ingresar Numero"));
// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i ;
//     alert(ingresarNumero + " x " +  i + " = " + resultado);
// }
//   for(let turno = 1; turno <=6; turno++){
//     let nombre = prompt("Ingrese su nombre para asignarle el turno");
//     let mensaje = `Turno #${turno} Nombre: ${nombre}`;
//     alert(mensaje);
//   }

// alert("se terminaron los turnos de hoy");
// for(let i = 0; i <= 10; i++){
//     if(i === 5){
//         continue
//     }
//     console.log(i);
// }
// console.log("terminamos");
// let usuario = prompt("ingrese nombre de usuario");
// while(usuario != "ces"){
//     alert("usuario incorrecto");
//     usuario = prompt("Ingrese nombre de usuario");
// }
// alert("Bienvenido");
let entrada = prompt("de que equipo sos");
 
    switch (entrada){
        case "colon":
            alert("sos campeón");
            break;
        case "boca":
            alert("sos bostero");
            break;
        case "river": 
            alert("sos gallina");
            break;
        case "union":
            alert("sos pecho frío");
            break;
        default:
            alert("no existis");
            break;
  
}

