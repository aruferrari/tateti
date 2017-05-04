console.log("Bienvenidos a Tateti")
var juego = new Juego();
do {
    var casilla =  prompt("Ingrese una casilla");
    juego.tablero = juego.turno
    juego.dibujarTableroEnConsola();
    
} while(casilla != 0);

