class Juego {
  
    constructor(nombre1, nombre2, estado) {
        this.tablero = { 1 : " ", 2 : " ", 3 : " ", 4 : " ", 5 : " ", 6 : " ", 7 : " ", 8 : " ", 9 : " " };
        this.jugador = [nombre1, nombre2];
        this.turno = 0;// turno guardaria el valor del jugador actual
        this.estado = estado;
        this.criterioDeGanador = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ];
    }
    
    verificarSiHayGanador() {
        for(let i of this.criterioDeGanador){
            let a = this.tablero[i[0]];
            let b = this.tablero[i[1]];
            let c = this.tablero[i[2]];
            if(a !== " " && a === b && a === c){
                return true;
            }
        }
        return false;
    }
    
    setTurno(){
        if(this.turno == 0){
            this.turno = 1
        }else{
            this.turno = 0
        }
        
    }
    dibujarTableroEnConsola(){
        for(let i = 0; i < 3; i++){
            console.log(i + ":  [" + this.tablero[1+(3*i)] + "]" + " ["+this.tablero[2+(3*i)]+"]" + " [" + this.tablero[3+(3*i)] + "]");
        }
    }

	dibujarEnCanvas() {
        var tablero = document.getElementById("myCanvas");
        var cxt = tablero.getContext("2d");
        let posHor = [40, 140, 260];
        let posVer = [60, 160, 260];
          

 
 		//DIBUJAR VALORES EN TABLA EN BASE AL VECTOR TABLERO
    for(let h=0; h<3; h++){
        for(let v=0; v<3; v++){
            let numero = (3*h)+(1+v);
            switch(this.tablero[numero]){
                case 0: cxt.strokeText("X", posHor[h], posVer[v]);
                    break;
                case 1: cxt.strokeText("O", posHor[h], posVer[v]);
                    break;
            }
        }
    }
 
 		cxt.stroke();
             
     }
    
    dibujarLineas() {
        var tablero = document.getElementById("myCanvas");
        var cxt = tablero.getContext("2d");
        //Primera linea vertical de IZQ->DER
         cxt.moveTo(100, 5);
         cxt.lineTo(100, 295);
         //Segunda linea vertical de IZQ->DER
         cxt.moveTo(200, 5);
 		cxt.lineTo(200, 295);
 	   //Primera linea horizontal de ARRIBA->ABAJO
 		cxt.moveTo(5, 100);
 		cxt.lineTo(295, 100);
 		//Segunda linea horizontal de ARRIBA->ABAJO
 		cxt.moveTo(5, 200);
 		cxt.lineTo(295, 200);
 
 		cxt.font = "30px Arial";
        cxt.stroke();
    }
    marcarCasilla(coordX, coordY){
        var limitX = [0, 100, 200, 300];
        var limitY = [0, 100, 200, 300];        
        let posHor = [40, 140, 240];
        let posVer = [60, 160, 260];
        if (this.tablero[this.numCasilla(coordX, coordY)] !== " "){
            return false;//si la casilla esta ocupada salir
        }
        for(let x=0; x<3; x++){
            for(let y=0; y<3; y++){
                if(coordX > limitX[x] && coordX < limitX[x+1]){
                    if(coordY > limitY[y] && coordY < limitY[y+1]){
                        var tablero = document.getElementById("myCanvas");
                        var cxt = tablero.getContext("2d");
                        cxt.strokeText(this.turno? "X":"0", posHor[x], posVer[y]);
                        cxt.stroke();
                        return true;
                    }
                }
            }
        }
    }
    numCasilla(coordX, coordY){
        let x = Math.floor(coordX/100); //esto me da un numero del 0 al 2
        let y = Math.floor(coordY/100); //esto me da un numero del 0 al 2
        let num = (x*3)+(y+1)
        return num;

    }
}
