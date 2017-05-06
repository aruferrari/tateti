class Juego {
  
    constructor(nombre1, nombre2, estado){
        this.tablero = { 1 : " ", 2 : " ", 3 : " ", 4 : " ", 5 : " ", 6 : " ", 7 : " ", 8 : " ", 9 : " " };
        this.jugador = [nombre1, nombre2];
        this.turno = 0;// turno guardaria el valor del jugador actual
        this.estado = estado;
        this.criterioDeGanador = ["123" ,"456" ,"789" ,"147" ,"258" ,"369" ,"159" ,"357"];
    }
    
    verificarSiHayGanador(){
        for(let i of this.criterioDeGanador){
            let f = i.split("");//Esto tranforma "123" en un array [1, 2, 3]
            if(this.tablero[parseInt(f[0])] === this.turno && this.tablero[parseInt(f[1])] === this.turno && this.tablero[parseInt(f[2])] === this.turno){
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
	
	
	dibujarTableroEnConsola(tablero) {

        var tablero = document.getElementById("tablero");
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

		//DIBUJAR VALORES EN TABLA EN BASE AL VECTOR TABLERO
   
		for (let obj of this.tablero) {

			switch (obj) {
				case "11": cxt.strokeText("X", 40, 60);
					break;
				case "12": cxt.strokeText("X", 140, 60);
					break;
				case "13": cxt.strokeText("X", 240, 60);
					break;
				case "14": cxt.strokeText("X", 40, 160);
					break;
				case "15": cxt.strokeText("X", 140, 160);
					break;
				case "16": cxt.strokeText("X", 240, 160);
					break;
				case "17": cxt.strokeText("X", 40, 260);
					break;
				case "18": cxt.strokeText("X", 140, 260);
					break;
				case "19": cxt.strokeText("X", 240, 260);
					break;
				case "01": cxt.strokeText("O", 40, 60);
					break;
				case "02": cxt.strokeText("O", 140, 60);
					break;
				case "03": cxt.strokeText("O", 240, 60);
					break;
				case "04": cxt.strokeText("O", 40, 160);
					break;
				case "05": cxt.strokeText("O", 140, 160);
					break;
				case "06": cxt.strokeText("O", 240, 160);
					break;
				case "07": cxt.strokeText("O", 40, 260);
					break;
				case "08": cxt.strokeText("O", 140, 260);
					break;
				case "09": cxt.strokeText("O", 240, 260);
					break;
			   }
		}

		cxt.stroke();
            
    }
}
