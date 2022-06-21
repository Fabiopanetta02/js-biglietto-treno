/*Schema logico
1- Recupero il paragrafo con l'id
2- Chiedo il numero di chilometri
3- Chiedo l'età del passeggero
4- Calcolo il prezzo totale del viaggio sulla base della tariffa
5- Applico sconto  
*/

//1- Recupero il paragrafo con l'id
const resulParagraph = document.getElementById('price-ticket');
console.log('price-ticket');

//2- Chiedo il numero di chilometri
const numberChilo = parseInt(prompt('Numero di chilometri da percorrere?', '100km'));
console.log('numberChilo');

//3- Chiedo l'età del passeggero
const numberAge = prompt('Età del passeggero?', 30);
console.log('numberAge');

//4- Calcolo il prezzo totale del viaggio sulla base della tariffa
let priceKm = numberChilo * 0.21;
console.log('priceKm');

//5- Applico sconto 
if(numberAge < 18){
    priceKm *= ( (100-20) / 100 );
    console.log('priceDiscount')
}
else if(numberAge > 65){
    priceKm *= ( (100-40) / 100 )
    console.log('over65')
}

const pricePrinted = priceKm.toFixed(2)

//6- Faccio comparire il prezzo
resulParagraph.innerText =  `Il prezzo totale del biglietto é: ${pricePrinted} €`
