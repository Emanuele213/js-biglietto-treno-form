const eleName = document.querySelector('#name');
const elekm = document.querySelector('#km');
const eleAge = document.querySelector('#age');
const eleBox = document.querySelector('box_info');
const eleBoxTicket = document.querySelector('.box_ticket');
const eleConferme = document.querySelector('#invia'); 
const eleDetelete = document.querySelector('#cancella');

eleConferme.addEventListener('click', function () { 
    const Km = parseFloat(elekm.value); 
    const basePrice = parseFloat(Km* 0.21); 
    const age = eleAge.value;
    let discount = 0;

    if (age === 'min') {
        discount = 20;
    }else if (age === 'over') {
        discount = 40;
    }

    if (eleName.value === '' || elekm.value === '' || eleAge.value === 'none') {
        eleBoxTicket.innerHTML = ('Compila il form');
    }else {
        let totalPrice = basePrice - basePrice * discount / 100;
        totalPrice = parseFloat(totalPrice.toFixed(2));
        eleBoxTicket.innerHTML = (`Prezzo biglietto: ${totalPrice} €`);
    }
});
 eleDetelete.addEventListener('click', function () {
    document.location.reload();
 });