let nome = document.getElementById("nome");
let kmDaFare = document.getElementById("km");
let submit = document.getElementById("invia");
let eta = document.getElementById("eta");

submit.addEventListener("click", function biglietto() {
    let nome = document.getElementById("name");
    let kmDaFare = document.getElementById("km");
    let eta = document.getElementById("age");
    let prezzoBiglietto = kmDaFare.value * "0.21";
    if (eta.value = 'Minorenne') {
        let sconto1 = (prezzoBiglietto * 0.2);
        let prezzo1 = (prezzoBiglietto - sconto1);
        let prezzoScontato1 = prezzo1.toFixed(2);
       
        document.getElementById("prezzo").innerHTML = name + prezzoScontato1 + "€";
    }
    else if (eta.value = 'Ultra65enne') {
        let sconto2 = (prezzoBiglietto * 0.4);
        let prezzo2 = (prezzoBiglietto - sconto2);
        let prezzoScontato2 = prezzo2.toFixed(2);
        document.getElementById("prezzo").innerHTML = name + prezzoScontato2 + "€";
    }
    else (eta.value = 'Maggiorenne' ) 
    {
        document.getElementById("prezzo").innerHTML = name + prezzoBiglietto + "€";
    }
});
