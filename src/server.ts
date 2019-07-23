const tempoPreparo = 7
const ampulheta1 = 11
const ampulheta2 = 9

let tempoMinimo = 0
let tempo1:number = ampulheta1
let tempo2:number = ampulheta2

console.log(tempo1, tempo2)
while(tempo1 != tempoPreparo && tempo2 != tempoPreparo) {

    if(tempo1 > tempo2) {
        tempo1 -= tempo2
        tempoMinimo += tempo2
        tempo2 = ampulheta2
    } else if (tempo1 < tempo2) {
        tempo2 -= tempo1
        tempoMinimo += tempo1
        tempo1 = ampulheta1
    } else {
        tempoMinimo = -1
        break
    }

    console.log(tempo1, tempo2)
}

if(tempoMinimo != -1) {
    console.log(tempoMinimo + tempoPreparo)
} else {
    console.log("FIM")
}
