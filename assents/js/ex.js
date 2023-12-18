let w = 10 
let y = 5 
console.log(x != y)

let f = "10"
let t = 10 
console.log(f === t)

let u = 10
let o = 5
console.log(u > o)

let preco = 40.5 

if (preco < 45) {
    console.log("esta barato")
} else {
    console.log("esta caro")
}

// condicional ternario 

let isMember = true;
let shipping = isMember ? 2 : 10;

console.log(isMember ? 'Voce é membro' :/*se sim, se não*/ 'Você não é membro');

console.log("frete: " + shipping);

// switch 

let profession = 'professional'

console.log("sua profissao é " +profession)

switch(profession){
    case 'bombeiro':
        console.log("sua camisa será vemelha")
    break;//pare
    case 'fiscal':
        console.log("sua camisa será verde")
    break
    case 'policial':
        console.log("sua camisa será azul")
    break

    default:
        console.log("sua camisa sera preta");
    break;
}