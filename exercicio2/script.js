let nacionalidade = prompt("Digite aqui a nacionalidade").toLowerCase()

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!")
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!")
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!")
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!")
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!")
// } else{
//     console.log("nacionalidade não encontrada")
// }

switch (nacionalidade.toLowerCase()) {
    case "brasileira":
    case "brasileiro":
        console.log(`A pessoa é do Brasil`)
        break;
    case "argentina":
    case "argentino":
        console.log(`A pessoa é da Argentina`)
        break;
    case "uruguaia":
    case "uruguaio":
        console.log(`A pessoa é do Uruguai`)
        break;
    case "chilena":
    case "chileno":
        console.log(`A pessoa é do Chile`)
        break;
    case "colombiana":
    case "colombiano":
        console.log(`A pessoa é da Colômbia`);
        break;
    default:
        console.log("Nacionalidade não encontrada");
        break;
}