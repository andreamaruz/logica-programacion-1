let numbers = [];

for(let i=0; i<3; i++){
    let numero = parseInt(prompt("Ingrese un número:"));
    numbers.push(numero);
}

//revisa si cada num de lalista es igual al primero
//si todos son iguales al priumero entonces 
const todosIguales = numbers => numbers.every(numero => numero === numbers[0]);

if (todosIguales(numbers)) {
    console.log("Todos los números son iguales: " + numbers[0]);
} else {    
    // Ordenamos de menor a mayor usando una función comparadora
    // Usamos [...numbers] para crear una copia y no alterar el original accidentalmente
    const menorAMayor = [...numbers].sort((a, b) => a - b);
    const mayorAMenor = [...numbers].sort((a, b) => b - a);

    console.log("Menor a mayor:", menorAMayor);
    console.log("Mayor a menor:", mayorAMenor);
    
    // Identificar posiciones específicas
    console.log(`Mayor: ${mayorAMenor[0]}, Centro: ${mayorAMenor[1]}, Menor: ${mayorAMenor[2]}`);
}
