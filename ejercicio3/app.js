/* 
Titulo: Juego del numero clave

Descripción: 
Define un numero clave entre 0 y 20, luego deberás
pedirle al usuario un numero menor a 20 y el usuario deberá 
de adivinar si el numero ingresado es igual al numero establecido 
como numero clave y mostrarle un mensaje que diga "Ganaste, adivinaste el numero clave" de caso contrario mostrar el mesnaje  "No es el numero, vuelve a intentarlo".
*/

let numero = 2;

numero = parseInt(prompt("1ER INTENTO escoge un numero menor a 20:"));

if (numero === 2) {
    alert("Ganaste, adivinaste el numero clave 🎊🎊🎊🎊🎊🎊");
    } else{
        numero = parseInt(prompt("2DO INTENTO escoge un numero menor a 20:"));
        if (numero === 2){
            alert("Ganaste, adivinaste el numero clave 🎊🎊🎊🎊🎊🎊");
        }else{
            numero = parseInt(prompt("3ER INTENTO escoge un numero menor a 20:"));
            if ( numero === 2){
                alert("Ganaste, adivinaste el numero clave 🎊🎊🎊🎊🎊🎊");
            }else{
                numero = parseInt(prompt("4TO INTENTO escoge un numero menor a 20:"));
                if(numero === 2){
                    alert("Ganaste, adivinaste el numero clave 🎊🎊🎊🎊🎊🎊");
                }else{
                    numero = parseInt(prompt("ULTIMO INTENTO escoge un numero menor a 20:"));
                    if(numero === 2){
                        alert("Ganaste, adivinaste el numero clave 🎊🎊🎊🎊🎊🎊");
                    }else{
                        alert("perdiste, no adivinaste el numero clave😭😭😭😭😭😭")
                    }
                }
            }
        }
    }




   

    