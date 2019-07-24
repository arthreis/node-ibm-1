function solution1(array):void{
    let ampulheta1 = array[0]
    let ampulheta2 = array[1]
    let tempoPreparo = array[2]

    let tempoMinimo = 0

    let maior = ampulheta1 > ampulheta2 ? ampulheta1 : ampulheta2
    let menor = ampulheta1 < ampulheta2 ? ampulheta1 : ampulheta2

    console.log(`Ampulheta 1: ${maior}min, Ampulheta 2: ${menor}min e tempo de preparo de: ${tempoPreparo}min`)

    let possivel = (maior % menor) !== 0

    console.log(maior, menor)

    while(maior != tempoPreparo && menor != tempoPreparo && possivel) {

        if(maior > menor) {
            maior -= menor
            tempoMinimo += menor
            menor = ampulheta2
        } else {
            tempoMinimo += tempoPreparo
            break
        }
        console.log(maior, menor)

        maior = maior > menor ? maior : menor
        menor = maior < menor ? maior : menor
    }

    if(possivel) {
        console.log(`Será preciso ${tempoMinimo} minutos para seu miojo ficar pronto, :)`)
    } else {
        console.log("Não é possível cozinhar seu miojo com precisão,  :(")
    }
}

let possivel = [21,6,3]
let naoPossivel = [7,21,3]
console.log("#####################################################################");
solution1(possivel)
console.log("#####################################################################");
solution1(naoPossivel)
console.log("#####################################################################");
