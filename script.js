// Algoritmo “Adiviná el número”
// 1 - Elegir y guardar un número al azar (entre 1 y 100) 
// 2 - Pedirle al usuario que ingrese un número 
// 3 - Sumar uno en cantidad de intentos 
// 4 - Si el número ingresado es igual al pensado 
// 	Informar “Ganaste” y Terminar 
// Si el número ingresado es mayor al pensado
// 	Informar “Es mayor”
// Si el número ingresado es menor al pensado
// 	Informar “Es menor”
// 5 - Volver al paso 2 

// Terminar:
// 1 - Informar: Ganaste! Cantidad de intentos: XX

// Extra: Guardar todos los intentos, verificar el ingreso para que el usuario no repita un número.
// Extra 2: Mostrar en pantalla los números ingresados.


let cantintentos = 0;
let numeroazar = Math.round(Math.random() * 100);
//let numeroazar = 51;
let numerousuario = 0;
//let numerointentos = "";
let numerointentos = [];
//let numerorepetido = 0;
let numerorepetido = [];
let checkprimerintento = true;

// En el caso de que la función math.random justo elija el 0, le sumo 1, porque es de 1 a 100 incluido.
if (numeroazar === 0) {
    numeroazar++;
}

// Solicito al usuario que ingrese un número entero
numerousuario = parseInt(prompt("Ingrese un número entre 1 y 100"));

// Si el número ingresado es igual al pensado.
if (numerousuario === numeroazar) {
    cantintentos++;
    alert("Ganaste! Cantidad de intentos: " + cantintentos);
    // Remplazo el acumulador por un array
    //numerointentos = numerointentos + numerousuario + ","; // contiene la cadena con todos los intentos.
    numerointentos.push(numerousuario);

} else {

    //Si el numero ingresado es distinto al numero pensado
    while (numerousuario !== numeroazar && cantintentos < 10) {

        // Sumo cantidad de intentos
        cantintentos++;

        // Lo hago porque la primera vez ya lo pedi afuera del while y para que no pregunte de nuevo lo mismo.        
        if (checkprimerintento === false) {
            // Solicito al usuario que ingrese un numero entero
            numerousuario = parseInt(prompt("Ingrese un número entre 1 y 100"));
        } else {
            checkprimerintento = false;
        }

        if (numerointentos.includes(numerousuario)) { // consulto si incluye ese intento

            alert("El número " + numerousuario + " está repetido, ingrese otro");
            // Remplazo el acumulador por un array
            //numerorepetido = numerorepetido + numerousuario + ",";
            numerorepetido.push(numerousuario);

        } else {

            //Si el número ingresado es igual al pensado
            if (numerousuario === numeroazar) {
                alert("Ganaste! Cantidad de intentos: " + cantintentos);
            }
            //Si el número ingresado es mayor al pensado
            else if (numerousuario > numeroazar) {
                alert("Es mayor");
            }
            //Si el número ingresado es menor al pensado
            else if (numerousuario < numeroazar) {
                alert("Es menor");
            }
            // Remplazo el acumulador por un array
            ////numerointentos = numerointentos + numerousuario + ","; // contiene la cadena con todos los intentos.
            numerointentos.push(numerousuario);
        }
    }

} // fin si lo encuentro en el primer intento.

alert("Los números intentados fueron: " + numerointentos + " y los números repetidos fueron: " + numerorepetido + "\n" + "El número era el: " + numeroazar);