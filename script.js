/* Questão 1 */

let idade = 20

if (idade >= 18){
    console.log("Você é maior que 18")
}

/* Questão 2 */

let humano = true

if (idade > 18 && humano == true){
    console.log("Você é maior de idade e humano")
}

/* Questão 3 */

let mes  = "Janeiro"


if (mes == "Janeiro" || mes == "Dezembro"){
    console.log("Você faz aniversário em Janeiro ou Dezembro")
}else{
    console.log("Que pena, você não faz aniversário entre esses meses")
}

/* Questão 4 */

let nome = "Davi"
let firstLetra = nome.slice(1,3)

if (firstLetra == "R" || firstLetra == "r"){
    console.log("Seu nome começa com a letra R")
}else{
    console.log(firstLetra)
}

/* Questão 5 */

let firstName = "Rogerio"
let lastName = "Aguiaraaa"
let firstLetra2 = firstName.slice(0,1)
let contador = lastName.length

if (contador > 6 || firstLetra2 == "E"){
    console.log("Seu sobrenome tem mais de 6 letras ou o seu nome começa com E" + firstName)
}else{
    console.log("Seu sobrenome não tem mais de 6 letras ou o seu nome não começa com E")
}

