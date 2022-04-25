const nomeEmpresa = "Sistema Omma";
console.log(nomeEmpresa);

const listaDeReceitas = [{
    id: 1,
    titulo: "Cachorro Quente",
    dificuldade: "Simples",
    ingredientes: ["1 pão de leite", "1 salsicha, molho de tomate", " bata palha a gosto"],
    preparo: "Lorem it num spretro patrono",
    link: "https//youtube.com",
    vegano: false,
},
];

const cadastrarReceita = (
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
) => {
    const novaReceita = {
        id,
        titulo,
        dificuldade,
        ingredientes,
        preparo,
        link,
        vegano,
    }

    listaDeReceitas.push(novaReceita);
    console.log(`Cadastro  da receita  ${titulo} feito com sucesso`);
}

cadastrarReceita(
    2,
    "Ovo Frito",
    "facil",
    ["ovo", "oleo", "sal a gosto"],
    "Em uma panela, coloque 1 fio de oleo, deixe aquecer, quebre o ovo, coloque o ovo na panela, tempere com sal a gosto e deixe o ovo fritar ate as bordas comecarem a ficar dourada",
    "https/google.com",
    false,
)




// for ( let = "exibirReceitas" ;  i=1 ; i++){
//     console.log();
// }