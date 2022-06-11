//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let idade = 18;

if(idade >= 18){
  console.log("Você é maior de idade, então já pode dirigir!")
}
 else if(idade < 18){
  console.log("Espere mais algum tempo! :'(")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

let idade1 = 18
let humano = true   

if((idade1 =18) && (humano = true)){
    console.log("Você é maior de idade e nasceu na Terra, então já pode dirigir!")
}
else{
    console.log("Sua idade terraquia esta dentro do esperado, mas é preciso tirar uma licença no MIB para dirigir!")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let mes = "Janeiro"

if((mes === "Dezembro") || (mes === "Abril")){
    console.log("Você faz aniversario no melhor mês que é Dezembro!")
}
else{
    console.log("Você faz aniversario em Janeiro!!")
}

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nome = "Jaianny"

if (nome === "Jaianny"){
    console.log("Seu nome começa com a letra J")
}
else{
    console.log("Seu nome começa com outra letra")
}


//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

let sobrenome = "Flores"
let nome1 = "Jaianny"

if((sobrenome.length >= 6) || (nome1 === "Estrela" )){
    console.log("Seu sobrenome tem 6 ou mais letras")
}
else{
    console.log("Seu nome começa com a letra E")
}



