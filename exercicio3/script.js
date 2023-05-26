//códigos a serem reescritos

// a)
// if(nome === "José"){
// 	console.log("Oi, Zé!")
// } else {
// 	console.log("Olá, " + nome)
// }


// b)
// if(idade >= 18){
// 	console.log("Pode tirar carteira de motorista!")
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista!")
// }

//a)IF ternário
nome = prompt(`Insira seu nome`)
nome === "josé" ? console.log(`Oi Zé`) : console.log(`Olá ${nome}`)

//b) IF tenrário
idade = Number(prompt(`Insira a sua idade: `))
idade >= 18 ?
    console.log(`Você tem ${idade} anos e pode tirar carteira de motorista!`) : console.log(`Você tem ${idade} anos e ainda não pode tirar carteira de motorista! `)