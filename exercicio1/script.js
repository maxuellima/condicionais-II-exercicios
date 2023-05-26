const number = prompt(`Insira um número: `)

if (number % 2 === 0) {
    if (number % 3 === 0) {
        console.log(`${number} é múltiplo de 2 e 3`)
    } else {
        console.log(`${number} não é múltiplo de 2 e 3 simultaneamente`)
    }
} else {
    console.log(`${number} não é múltiplo de 2 e 3 simultaneamente`);
}

//IF com operadores

if (number % 2 === 0 && number % 3 === 0) {
    console.log(`${number} é múltiplo de 2 e 3`);
} else if (number % 2 === 0 || number % 3 === 0) {
    console.log(`${number} é divisível ou por 2 ou por 3`)
}
else {
    console.log(`${number} não é múltiplo de 2 e 3 simultaneamente`)
}