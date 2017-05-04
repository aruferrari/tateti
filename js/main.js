console.log("Bienvenidos a Tateti");
var juego = new Juego();

do {
    var casilla =  prompt("Ingrese una casilla");
    juego.tablero = juego.turno
    juego.dibujarTableroEnConsola();
    if (juego.verificarSiHayGanador(juego.turno)){
        juego.estado = "finalizado";
    }else{
        juego.setTurno();
    }
    
} while(juego.estado != "jugando");

