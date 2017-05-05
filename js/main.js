console.log("Bienvenidos a Tateti");
var jugador1 = prompt("Nombre Jugador 1", "Pepe");
var jugador2 = prompt("Nombre Jugador 1", "Lalo");

var juego = new Juego(jugador1, jugador2, "jugando");

do {
    var casilla =  prompt("Turno de " + juego.jugador[juego.turno]);
    juego.tablero[casilla] = juego.turno
    console.log(juego.tablero);
    if (juego.verificarSiHayGanador()){
        juego.estado = "finalizado";
    }else{
        juego.setTurno();
    }
    
} while(juego.estado == "jugando");

console.log("El ganador es " + juego.jugador[juego.turno]);

