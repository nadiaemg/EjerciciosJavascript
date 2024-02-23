/*Ejercicio 1 Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista.*/

const arreglo = [];
let a;
let b;
let c;

//Funciones anidadas
function numeroMayor(arreglo){
    //Método sort ordena los elementos de un arreglo con una función de comparación
    //Función de comparación. Devuelve comparación de 2 elementos (números) para que sort la utilice.
    arreglo.sort(function comparar(a, b){
        //ordenar de mayor a menor
        return b - a;
    });

    return arreglo[0];
}

/*Ejercicio 2 Escribir una función que tome un arreglo de números y devuelva el número menor de la lista.*/

function numeroMenor(arreglo){
    arreglo.sort(function comparar(a, b){
        //ordenar de menor a mayor
        return a - b;
    });

    return arreglo[0];
}

/*Ejercicio 3 Escribir una función que permita saber si un número se repite dentro de un arreglo.*/

function numeroRepetido(arreglo){

    for(let fila = 0; fila < arreglo.length; fila++){
        for(let columna = fila + 1; columna < arreglo.length; columna++)    
        
        if(arreglo[fila] == arreglo[columna]){
            return `El número ${arreglo[fila]} se encuentra más de una vez`;
        }

    }
    return 'No hay números repetidos';
}

/*Ejercicio 4 Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado.*/

function desordenarArreglo(arreglo){

    for(let i = arreglo.length-1; i > 0; i--){
        let j = parseInt(Math.random()*i);
        [arreglo[i], arreglo[j]] = [arreglo[j], arreglo[i]];
    }
    return arreglo;
}

/*Ejercicios de algoritmos*/
//Elaborar una función que reciba 3 números (entre el 1 y el 100) y definir cual es el mayor.

function mayorNumero(a,b,c){
    if((a>=1)&&(a<=100)&&(b>=1)&&(b<=100)&&(c>=1)&&(c<=100)){
        if(a>b && a>c){
            return a + " es el número mayor";
        }else if(b>a && b>c){
            return b + " es el número mayor";
        }else if(c>a && c>b){
            return c + " es el número mayor";
        }
    }

    return "Los números deben estar entre 1 y 100";
}

//Elaborar una función que reciba 3 números (entre el 1 y el 100) y definir el menor de tres números.

function menorNumero(a,b,c){
    if((a>=1)&&(a<=100)&&(b>=1)&&(b<=100)&&(c>=1)&&(c<=100)){
        if(a<b && a<c){
            return a + " es el número menor";
        }else if(b<a && b<c){
            return b + " es el número menor";
        }else if(c<a && c<b){
            return c + " es el número menor";
        }
    }

    return "Los números deben estar entre 1 y 100";
}

//Elaborar una función que reciba un entero (entre el 100 y el 200) y determinar si es múltiplo de 3.
let entero;

function multiploTres(a){
    entero = parseInt(a);

    if (a>=100 && a<=200){

       if(entero %3 == 0){
        return entero + " es múltiplo de 3";
       } else{
        return entero + " no es múliplo de 3";
       }
    }

    return "El número debe estar entre 100 y 200";
}

//Elaborar una función que reciba 3 números y determinar sí uno es la suma de los otros dos.

function sumaNumeros(a,b,c){

    if(a + b == c){
        return `${c} es suma de ${a} y ${b}`;
    } else if(a + c == b){
        return `${b} es suma de ${a} y ${c}`;
    }else if(b + c == a){
        return `${a} es suma de ${b} y ${c}`;
    }

    return "Ningún número es suma de los otros"
}

//Elabora una función que reciba un número y determinar si es par o impar.

function parImpar(a){

    if(a%2 == 0){
        return "El número es par."
    }
    return "El número es impar."
}

//Elaborar una función que reciba un número y adivine un número entre el 1 y el 100 en el menor número de pasos posibles.

let iniciarJuego;
let numeroSecreto;
let numeroAdivinado;
let cont = 0;

function adivina() {
    iniciarJuego = prompt("\nVamos a adivinar un número en el menor número de intentos posibles.\n\n¿Listo para comenzar? (si/no)");

    if (iniciarJuego == "si") {
        numeroSecreto = parseInt(Math.random() * 100) + 1;
        cont = 0;

        while (true) {
            cont++;
            numeroAdivinado = parseInt(prompt("\nIngresa un número entre 1 y 100:"));

            if (numeroAdivinado == numeroSecreto) {
                alert("¡Adivinaste!\n\nEl número secreto es " + numeroSecreto + "\nIntentos realizados: " + cont);
                break;
            } else if (numeroAdivinado < numeroSecreto) {
                alert("¡Intenta con un número mayor!\n\nEl número " + numeroAdivinado + " no es el número secreto" + "\nIntentos realizados: " + cont);
            } else if (numeroAdivinado > numeroSecreto) {
                alert("¡Intenta con un número menor!\n\nEl número " + numeroAdivinado + " no es el número secreto"  + "\nIntentos realizados: " + cont);
            }
        }
    } else {
        alert("Adiós");
    }
}

  