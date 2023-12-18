// segundo script

let nameperson = "Alperto"
let sobremenomee = "Leal"

// let Nomecompleto = nameperson + ' ' + sobremenomee
let Nomecompleto = `${nameperson} ${sobremenomee} Neto` //template string, uma string turbinada

console.log("Nome: " + Nomecompleto)

//

let idadee = 69

let idadestring = `Idade: ${/*expressão*/idadee + 9} anos`

console.log(idadestring)

//if e else 

let idadeee = 9

if/*se*/ (idadeee >= 18) {
    console.log('você é de maior')
} else/*se não*/ {
    console.log('você é de menor')
}

// CONDICIONAIS 
// < menor
// > maior
// == igual 
// <== menor ou igual
// >== maior ou igual
// != diferente

// let idade = 20 
// if (idade === 20){
//    console.log("Você tem 20 anos")
//}

// == pode ser string ou number 
// === tem que ser number que esta sendo declarado como variavel





let temidade = 90

/*
if (temidade >= 18){
    if(temidade < 60){
        console.log("Você é um adulto")
    }
}
*/

if (temidade < 18){
    console.log("Você é criança")
} else if (temidade >= 18 &&/*e ||ou*/ temidade < 60){ // multi condicional 
    console.log("Você tem bastante idade")
} else if (temidade >= 60){
    console.log("tu é veio pa cacete")
}


//if so verifica true ou false, exemplo: 

let ok = false;

if (ok){
    console.log("você entra")
} else {
    console.log("tu ta fora parça")
}

//

/*
let idader = 18 

let verificaco = idader > 18 // se idade for maior que 18 é falso, se não é verdadeiro 

if (verificaco){
    console.log("você entra")
} else {
    console.log("tu ta fora parça")
}
*/