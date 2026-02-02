// chiedo i kilometri
let kmPercorsi = Number(prompt("Quanti km percorrerai?"));

//chiedo l'età
let etaPasseggero = Number(prompt("Quanti anni hai?"));

// creo variabile per il prezzo ancora da definire
let prezzoBiglietto;

// controllo le condizioni
if (etaPasseggero < 18) {
    prezzoBiglietto = (kmPercorsi * 0.21) * 0.80;
} else if (etaPasseggero >= 65) {
    prezzoBiglietto = (kmPercorsi * 0.21) * 0.60;
} else {
    prezzoBiglietto = kmPercorsi * 0.21;
}

// creo il formatter
const formatterPrezzo = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR',
});

// stampo il prezzo formattato
console.log(formatterPrezzo.format(prezzoBiglietto));