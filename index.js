// declarar nome
var nomeCompleto = "Gustavo Henrique Nunes D'Abadia";
console.log (nomeCompleto);
// declarar varial
let numeroA=3;
let numeroB =2;
//soma das variavel
let resultado = numeroA * numeroB;
console.log (resultado);
//declarando saudação
function  saudação (nome= "Goku"){
    if (nome) {
    return ("Oi eu sou o " + nome)
} }
console.log (saudação(nomeCompleto))
//multiplicação dos consoles numericos
function multiplica (numeroA,numeroB){
return numeroA*numeroB
}

console.log (multiplica (numeroA,numeroB));
//pode dirigir
let idade = 45;
function podeDirigir (idade)
{
    if (idade < 18){
    return "Você não pode dirigir";
    }else {
    return "Você pode dirigir";}
}

console.log (podeDirigir(idade));

// numero
for (i= 0; i <= 20; i++){
    console.log (i)
}
// numero impar
for (i= 0; i <= 20; i++){
   if(i%2== 1){
    console.log (i)
   } 
}
//tabuada
let numeroTabuada = 1;
console.log ("Tabuada --" +  numeroTabuada);
function tabuada (numeroTabuada){
    for(i=1; i <= 10; i++){
        console.log( numeroTabuada*i);
    }
}
tabuada(numeroTabuada);

//numero minutos em horas
var minuto = 30;
function converterEmHoras (minuto){
    console.log (minuto/60 + "Horas");
}
converterEmHoras (minuto);