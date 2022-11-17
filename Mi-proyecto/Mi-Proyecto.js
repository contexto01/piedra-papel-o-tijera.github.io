///////Piedra papel o tijera//////////////////

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}



function juegoJavascript(jugador){
    
    ///////////Puntaje/////////////////

    jugadorPuntaje = 0;
    pcPuntaje = 0;
    
    for (let i = 1; i < 4; i++) {
        
        let aleatorio = random(1,3);
        jugador = prompt(`Round: ${i},  Elige: 1- piedra 🪨, 2- papel🧻, 3- tijera✂️`);

        //////////////////Jugador/////////////////////

        if(jugador === "1"){
            alert("Elegistes piedra🪨");
        }else if(jugador === "2"){
            alert("Elegistes papel🧻");
        }else if(jugador === "3"){
            alert("elegistes tijera✂️");
        }else{
        return alert("Solo puedes colocar numeros del 1 al 3");
        }

    ////////////////////pc/////////////////////

        if(aleatorio === 1){
            alert("EL pc eligio piedra🪨");
        }else if(aleatorio === 2){
            alert("EL pc eligio papel🧻");
        }else if(aleatorio === 3){
            alert("EL pc eligio tijera✂️");
        }
    
    ///////////////Combate//////////////////////

    

        if(Number(jugador) === aleatorio){
            alert("Empate")
                
        }else if(jugador === "1" && aleatorio === 3 || jugador === "2" && aleatorio === 1){
            jugadorPuntaje++;
            
        }else{
            pcPuntaje++;

        }
            
        alert(`Round : ${i} 
        
        El jugador lleva: ${jugadorPuntaje} || Pc lleva: ${pcPuntaje}`)
     
    }

    ///////////////Puntaje Final//////////

    if(jugadorPuntaje === pcPuntaje){
        return alert(`        Resultado final         
        jugador: ${jugadorPuntaje} || Pc: ${pcPuntaje}  
                            Empate😴                `);

    }else if (jugadorPuntaje > pcPuntaje){
        return alert(`        Resultado final         
        jugador: ${jugadorPuntaje} || Pc: ${pcPuntaje}  
                            Ganastes😁                `);
    }else{
        return alert(`        Resultado final         
        jugador: ${jugadorPuntaje} || Pc: ${pcPuntaje}  
                            Perdistes😱               `);
    }

}


juegoJavascript()
