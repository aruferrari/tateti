var jugador1 = "pedro-0";
var jugador2 = "lalo-X";
var mensaje = document.getElementById("mensaje");


var juego = new Juego(jugador1, jugador2, "jugando");

juego.dibujarLineas();
mensaje.innerHTML = "Es el turno de: " + juego.jugador[juego.turno];

var canvas = document.getElementById("myCanvas");
canvas.addEventListener('click', function(e) {
        if(!juego.marcarCasilla(e.offsetX, e.offsetY)){
            console.log("Me atoré :O");
            return; //sale porque eligio una casilla ocupada 
        }
    
        juego.tablero[juego.numCasilla(e.offsetX, e.offsetY)] = juego.turno;
    
        if (juego.verificarSiHayGanador()) {
            juego.estado = "finalizado";
            mensaje.innerHTML = "GANADOR: " + juego.jugador[juego.turno];
            canvas.addEventListener('click', null, false);
        } else {
            juego.setTurno();
            mensaje.innerHTML = "Es el turno de: " + juego.jugador[juego.turno];
        }
}, false);


