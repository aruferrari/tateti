console.log("Bienvenidos a Tateti");
var jugador1 = "lola"
var jugador2 = "lalo"

var juego = new Juego(jugador1, jugador2, "jugando");

do {
    var casilla =  prompt("Turno de " + juego.jugador[juego.turno]);
    juego.tablero[casilla] = juego.turno;
    juego.dibujarEnCanvas();
    if (juego.verificarSiHayGanador()){
        juego.estado = "finalizado";
    }else{
        juego.setTurno();
    }
    
} while(juego.estado == "jugando");

console.log("El ganador es " + juego.jugador[juego.turno]);

