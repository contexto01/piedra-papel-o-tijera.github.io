function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
      resultado = " 🪨"
    } else if (jugada == 2) {
      resultado = " 📃"
    } else if (jugada == 3) {
      resultado = " ✂️"
    } else {
      resultado = "no elegistes nada"
    }
    return resultado
  }
let ganadas = 0
let perdidas = 0
let jugador = 0
let pc = 0

alert ("bienvenido a piedra papel o tijera juego de daniel")

alert (`estas son las reglas
-si pierdes o ganas 3 veces termina el juego
-solo puedes poner numero, si pones otra cosa se sumara una perdida a tu puntaje `)

while (ganadas < 3 && perdidas < 3){


    pc = aleatorio(1,3)
    jugador = prompt("elige 1-🪨 2-📃 3-✂️")

    alert ("jugador elige " + eleccion (jugador))
    alert ("pc elige " + eleccion (pc))

    if (jugador == pc){
        alert ("EMPATE")
    } else if (jugador == 1 && pc == 3){
        alert ("ganastes")
        ganadas = ganadas + 1
    } else if (jugador == 2 && pc == 1){
        alert ("ganastes")
        ganadas = ganadas + 1
    } else if (jugador == 3 && pc == 2){
        alert ("ganastes")
        ganadas = ganadas + 1
    } else {
        alert ("perdistes") 
        perdidas = perdidas + 1
    }
}

    alert ("Ganaste " + ganadas + " veces. Perdiste " + perdidas + " veces.")

if (ganadas == 3){
    alert ("FELICITACIONES GANASTES🎊")
} else if (perdidas == 3){
    alert ("lastima, perdistes")
}