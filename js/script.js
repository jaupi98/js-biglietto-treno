let km = prompt('iserisci i km ');
let age = prompt('inserisci la tua eta')

let prezzo = 0.21 * km ;

let = message ;

if( age < 18){
    prezzo *= 0.8;
    message = ` HAi diritto al prezo scontato del 40% . Il prezzo del biglietto e di : ${prezzo.toFixed(2)}$`;
}
else if(age > 65){
    prezzo *= 0.6;
    message = ` HAi diritto al prezo scontato del 60% . Il prezzo del biglietto e di : ${prezzo.toFixed(2)}$`;
}
else{
    message = `  Il prezzo del biglietto e di : ${prezzo.toFixed(2)}$`;
}
document.getElementById('message').innerHTML= message;