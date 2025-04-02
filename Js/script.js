//Constantes Modal
const modal = document.getElementById("modal");
const tituloModal = document.getElementById("tituloModal");
const ejercicioModal = document.getElementById("ejercicioModal");
const respuesta = document.getElementById("respuesta");
const btnVerificar = document.getElementById("btnVerificar");
const mensaje = document.getElementById("mensaje");
const btnCerrar = document.getElementById("btnCerrar");

//Constantes a cada botón
const btnParImpar = document.getElementById("btnParImpar");
const btnMayorEdad = document.getElementById("btnMayorEdad");
const btnSemaforo = document.getElementById("btnSemaforo")
const btnBarra = document.getElementById("btnBarra")
const descuentos = document.getElementById("btnDescuentos");
const contLetras = document.getElementById("btnContador");
const multiply = document.getElementById("btnTablas");
const btnRPS = document.getElementById("btnRPS")

let funcionEjercicioActual = null;
//Eventos
btnParImpar.addEventListener("click", function (){
    abrirModal("Número Par o Impar", "Ingresa un número para verificar si es par o impar", verificarParImpar);
});
btnMayorEdad.addEventListener("click", function (){
    abrirModal("Mayor de Edad", "Ingresa tu edad para saber si eres mayor de edad", verificarEdad);
});

btnSemaforo.addEventListener("click", function(){
    abrirModal("Vamos a ver el semaforo", "Ingrese uno de los siguientes colores, Rojo, amarillo, verde", semaforo);
})

btnBarra.addEventListener("click", function(){
    abrirModal("Vamos a ver el semaforo", "Elija entre estas opciones: Vino, Cerveza, Agua, o Gaseosa", laBarra);
});
btnDescuentos.addEventListener("click", function(){
    abrirModal("Calculadora de descuentos", "Primero ingrese el numero del cual desea obtener el descuento y luego el porcentaje", calcuPor);
});
contLetras.addEventListener("click", function(){
    abrirModal("Ingrese una palabra", "El programa contara la cantidad de letras que tiene su palabra o frase", conLetras);
});

multiply.addEventListener("click", function(){
    abrirModal("Tablas de multiplicar", "El programa te brindara una ventana donde te mostrara las tablas de ese numero", Multiply);
});

btnRPS.addEventListener("click", function(){
    abrirModal("Piedra, papel o tijeras", "Selecciona si, si deseas iniciar el juego, elije, piedra, papel o tijeras", RPS);
});

function abrirModal(titulo, descripcion, funcionEjercicio){
    tituloModal.textContent = titulo;
    ejercicioModal.textContent = descripcion;
    respuesta.value = "";
    mensaje.textContent = "";

    funcionEjercicioActual = funcionEjercicio;

    modal.classList.add("activarModal");
}

btnCerrar.addEventListener("click", function (){
    modal.classList.remove("activarModal");
});

function verificarParImpar(){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "Ingresa un número válido.";
    }
    else{
        mensaje.textContent = (numero % 2 === 0) ? "Es un número PAR" : "Es un número IMPAR";
    }
}
function verificarEdad(){
    alert("Has presionado el boton para verificar tu edad");
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "Ingresa una edad valida"
    } else {
        mensaje.textContent = (numero >= 18) ? "Eres mayor de edad " : "Eres menor de edad";
    }
}

function semaforo(){
    alert("Vamos a ver el semaforo");
    let color = respuesta.value

    if(color === "Rojo" || color === "rojo"){
        mensaje.textContent = "Alto"
    };
    if(color === "Amarillo" || color === "amarillo"){
        mensaje.textContent = "Precaucion"
    };
    if(color === "Verde" || color === "verde"){
        mensaje.textContent = "Siga"
    };
}

function laBarra(){
    let bebida = respuesta.value;

    if (bebida === "Vino" || bebida === "cerveza" || bebida === "vino" || bebida === "Cerveza"){
        mensaje.textContent = "Dirijamonos a la barra de bebidas";
    } else {
        mensaje.textContent = "Dirijamonos a la tienda"
    };

};

function calcuPor(){
    let numero = parseInt(respuesta.value)

    if(isNaN(numero)){
        mensaje.textContent = "Por favor, ingresa un numero valido";
        return; 
        };

    let procetajeIngresado = prompt("Ingrese el porcentaje a obtener, ingrese el valor como ejemplo 0.50 para 50%"); 

    if(isNaN(procetajeIngresado)){
        mensaje.textContent = "Por favor, ingresa un numero valido";
        return; 
        };
    
    const resultado = (procetajeIngresado*numero);
        mensaje.textContent = (resultado);

    setTimeout(preguntarDeNuevo,3000);
}

function conLetras(){
    let palabra = respuesta.value;
    let soloLetras = palabra.replace(/[^a-zA-Z]/g, "");
    let cantidadDeLetras = soloLetras.length; 

    mensaje.textContent = cantidadDeLetras; 
    

}

function Multiply(){
     var number = respuesta.value;  

    if (number === null || number.toLowerCase() === "salir"){
        alert("Se termino con exito!");
    };

    const num = parseInt(number);

    if (isNaN(num)) {
      alert("Ingrese un numero valido");
    }

    let tablaMultiplicar = `Tabla de multiplicar del ${num}:\n`;

    for (let i = 1; i <= 10; i++){
      tablaMultiplicar += `${num} x ${i} = ${num * i}\n`;
    }

    alert(tablaMultiplicar)
}

function preguntarDeNuevo(){
    const respuesta = prompt("¿Quieres calcular otro porcentaje? (sí/no)").toLowerCase();
    if (respuesta === "si") {
        calcuPor();
      } else if (respuesta === "no") {
        alert("¡Gracias por usar la calculadora de porcentajes!");
      } else {
        alert("Respuesta inválida. Por favor, ingresa 'sí' o 'no'.");
        preguntarDeNuevo();
      }
}

function RPS(){ 
    var confirmar = respuesta.value; 
    if(confirmar === "si" || confirmar === "Si"){ 
        startGame();
    }   
};

function startGame(){
    do{
        jugarPiedraPapelTijera();
    } while (prompt("Desea Continuar?").toLowerCase() === "si");
}

function obtenerJugadaComputadora() {
    const opciones = ["piedra", "papel", "tijera"];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
  }
  
  function determinarGanador(jugadaUsuario, jugadaComputadora) {
    if (jugadaUsuario === jugadaComputadora) {
      return "Empate";
    } else if (
      (jugadaUsuario === "piedra" && jugadaComputadora === "tijera") ||
      (jugadaUsuario === "papel" && jugadaComputadora === "piedra") ||
      (jugadaUsuario === "tijera" && jugadaComputadora === "papel")
    ) {
      return "¡Ganaste!";
    } else {
      return "Perdiste";
    }
  }
  
  function jugarPiedraPapelTijera() {
    const jugadaUsuario = prompt("Elige piedra, papel o tijera:");
  
    if (jugadaUsuario === null || jugadaUsuario.toLowerCase() !== "piedra" && jugadaUsuario.toLowerCase() !== "papel" && jugadaUsuario.toLowerCase() !== "tijera") {
      alert("Jugada inválida. Por favor, elige piedra, papel o tijera.");
      return;
    }
  
    const jugadaComputadora = obtenerJugadaComputadora();
    alert(`La computadora eligió: ${jugadaComputadora}`);
  
    const resultado = determinarGanador(jugadaUsuario.toLowerCase(), jugadaComputadora);
    alert(resultado);
  }


btnVerificar.addEventListener("click", function (){
    if(funcionEjercicioActual){
        funcionEjercicioActual();
    } 
})
