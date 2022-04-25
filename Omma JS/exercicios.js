//Exercicios FIZZBUZZ

let resultado = fizzBuzz(7);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada != `number`)
        return `não é um numero`;
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return `FizzBuzz`
    if (entrada % 3 === 0)
        return `Fizz`;
    if (entrada % 5 === 0)
        return `Buzz`;
    return entrada;

}

//exercicios de reverter strings

let novaString = ' ';

function reverseString(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
        // console.log(novaString); // para sair todas as interações
    }
    console.log(novaString); // para sair apenas a ultima interação

}

let resultadoReverseStr = reverseString('E ai Amor <3')

// conversor de temperaturação  //template string com uso de crase e `${}`
let celsius = 40
function conversorTemperatura(celsius) {
    return celsius * 1.8 + 32;
}
let tempFahrenheit = conversorTemperatura(celsius);
console.log(`A temperatura de ${celsius} Celsius  em Fahrenheit é de ${tempFahrenheit}`)

// operador ternario

function calculoIdade (idade){
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade' ;
}
console.log (calculoIdade(18));

//Projeto JS Avançado



