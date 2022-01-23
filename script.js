let age = 26;
if (age>18) {
    console.log('Você é maior de idade então se cuide ahaha');
}
let humain=true
if (age>18 && humain==true); {
    console.log("Tu es majeur et un humain");
}
let mes = "Maio"
if (mes==="Janeiro"||mes==="Setembro") {
    console.log("Você faz seu aniversário em Janeiro ou Setembro")
}
else {
    console.log('Foi mal você não é dos meses pré estabelecido!!');
}
let nome="Clovis"
if(nome.substring(0,1)==="G"){
    console.log('seu nome começa por G')
}
else{
    console.log('Tadinho, seus pais não colocaram o G na frente de seu nome');
}
let SobreNome = "Hounwanou"
if(SobreNome.length>6||nome.substring(0,1)=="G"){
    console.log(`${nome}, seu sobrenome tem mais de 6 letras ou seu nome começa com a letra G`)
}
else{
    console.log(`${nome}, seu sobrenome não tem mais de 06 letras ou seu nome não começa com a letra G`)
}