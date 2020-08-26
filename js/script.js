/* VAR -> Permite realizar modificaciones a las variables . Al igual que let.
CONST -> No permite cambiar su valor y hay que declalarla */

//EE5 - GLOBAL

var nombre5 = "Maria";

//EE6 - Const

const nombre6 = "Pedro" //No se le puede reasignar valor
//const nombre6 = "OtrNombre" No se le puede reasignar valor

/* Alcance GLOBAL */

var global = 0; //Se asigna 0

function varGlobal() {
    for (var i = 0; i < 5; i++) {
        global = i //en cada vuelta se aigna el valor global
        
    }
}

function varPrueba() {
    var x = 70;
    if(true){//entra al func
        var x = 50;
        console.log(x) //imprime 50
    }
    console.log(x)//50
}



function letPrueba() {
    let y = 30;
    if(true){//entra al func
        let y = 60;//valor asignado solo para la funcion
        console.log("y=",y) //imprime 60
    }
    console.log(y)//30
}



/* FUNCOINES */
function nombreDeLaFuncion (num1,num2){
      /* Return valor o resultado de la funcion */
      //finaliza la ejecucion de la funcion
      return num1+num2
}

nombreDeLaFuncion; //muestra la estructura de funcion

console.log(nombreDeLaFuncion(2,2));


/* FUNCIONES ANONNIMAS */

let sumar = (a,b)=>a+b;
console.log(sumar(2,5))

let hola = function() {
    return "hoal como estas"
}

console.log(hola())

let color = window.prompt("Ingresa el color")

if (color == "red") {
    document.write ("<h1 style='color:red'>El texto cambiara de color</h1>")
}else{
    document.write ("<h1 style='color: " + color + "'>El texto cambiara de color</h1>")
}


/* OPERADORES LOGICO */

let nota= window.prompt("Ingresa nota")

if (nota >= 0 && nota <= 5) {
    if (nota >= 4.5) {
        document.write("Se puede optener la beca")
    }else{
        document.write("No tiene puntaje para obtener la beca")
    }
}else{
    document.write("Ingresa un numero entre 0 y 5")
}

