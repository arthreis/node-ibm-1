let suspeitos = [
    {"id":"1","name":"Charles B. Abbage"},
    {"id":"2","name":"Donald Duck Knuth"},
    {"id":"3","name":"Ada L. Ovelace"},
    {"id":"4","name":"Alan T. Uring"},
    {"id":"5","name":"Ivar J. Acobson"},
    {"id":"6","name":"Ras Mus Ler Dorf"},
]

let locais = [
    {"id":"1", "local":"Redmond"},
    {"id":"2", "local":"Palo Alto"},
    {"id":"3", "local":"San Francisco"},
    {"id":"4", "local":"Tokio"},
    {"id":"5", "local":"Restaurante no Fim do Universo"},
    {"id":"6", "local":"São Paulo"},
    {"id":"7", "local":"Cupertino"},
    {"id":"8", "local":"Helsinki"},
    {"id":"9", "local":"Maida Vale"},
    {"id":"10","local":"Toronto"},
]

let armas = [
    {"id":"1","arma":"Peixeira"},
    {"id":"2","arma":"DynaTAC 8000"},
    {"id":"3","arma":"Trezoitão"},
    {"id":"4","arma":"Trebuchet"},
    {"id":"5","arma":"Maça"},
    {"id":"6","arma":"Gládi"}
]

let crime = [];

var possibilidades = [];

function gerarCrime(){
    return crime = [randomInt(1,6),randomInt(1,10),randomInt(1,6)]
}

function investigar(chute){
    console.log(`Investigando crime [${crime.toString()}] com a teoria: [${chute.toString()}]`);

    var erros = [];

    crime.map(function(item, i){
        if(item != chute[i]){
            erros.push(i+1);
        }
    })

    console.log(`LOG::ERROS [${erros.toString()}]`);

    if(erros.length){
        var status = erros.sort(function(){return 0.5 - Math.random()})[0];
        console.log(`Fim da investigação! Status: ${status} = Crime não solucionado, :(`);
        return status;
    }else{
        return 0;
    }
}

function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min );
}

function gerarPossibilidades(teoria, resultado){

    if(teoria){
        removerPistas(teoria, resultado);
    }
    possibilidades = []
    suspeitos.forEach(suspeito => {
        locais.forEach(local => {
            armas.forEach(arma => {
                possibilidades.push({suspeito,local,arma});
            });
        });
    });
    console.log(`Total possibilidades = ${possibilidades.length}`);
}

function gerarTeoria(){
    return [suspeitos[suspeitos.length-1].id,locais[locais.length-1].id,armas[armas.length-1].id]
}
function removerPistas(teoria, resultado){
    var i = teoria[resultado-1];
        switch (resultado) {
            case 1:
                suspeitos = suspeitos.filter(function(suspeito) {
                    return suspeito.id !== i;
                });
                break;
            case 2:
                locais = locais.filter(function(local) {
                    return local.id !== i;
                });
                break;
            case 3:
                armas = armas.filter(function(arma) {
                    return arma.id !== i;
                });
            break;

            default:
                console.log("Algo não está certo, :´(");
                break;
        }
}
function resolverCrime(){

    let crimeResolvido = false;
    let teoria = "";
    let resultado;
    let tentativas = 0;

    while(!crimeResolvido){
        tentativas++;
        gerarPossibilidades(teoria, resultado);
        teoria = gerarTeoria();
        resultado = investigar(teoria);
        crimeResolvido = resultado === 0;
    }
    console.log(`Crime solucionado com ${tentativas} tentativas, =)`);
    console.log(`Foi o ${suspeitos.slice(-1)[0].name} em ${locais.slice(-1)[0].local} com o/a ${armas.slice(-1)[0].arma}`);
}

gerarCrime();
resolverCrime();
