const name = document.querySelector('#name');
const amountOf = document.querySelector('#number');
const deliveryAdress = document.querySelector('#adress')
const btn = document.querySelector('#btn');

var errorMessage = '';

btn.addEventListener('click', checkForm);


function checkForm(event){
    let name = parseInt(amountOf.value),
        amount = amountOf.value,
        adress = deliveryAdress.value;
    submitForm();
}

function submitForm(){

    if(amount > 20){
        alert('Du kan inte köpa så många husvagnar');
    }
}