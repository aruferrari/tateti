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

