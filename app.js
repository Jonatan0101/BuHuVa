const nameFirst = document.querySelector('#name');
const amountOf = document.querySelector('#number');
const deliveryAdress = document.querySelector('#adress')
const btn = document.querySelector('#buy-btn');

const popUp = document.querySelector('.error-modal');
const errorMessage = document.querySelector('#error-message');
const closeBtn = document.querySelector('#close')


btn.addEventListener('click', checkForm);
closeBtn.addEventListener('click', closeModal);

function checkForm(event){
    let name = nameFirst.value,
        amount = amountOf.value,
        adress = deliveryAdress.value;
        
    submitForm(name, amount, adress);
}

function submitForm(name, amount, adress){
    let error = "";
    if (name === ""  ,amount > 20 , adress === '') {
        popUp.style.display = 'block';
        if(name === ''){
            error += 'Du måste skriva ett namn! '
        }
        if (amount > 20) {
            error += 'Du kan inte köpa fler än 20 husvagnar! '
        }
        if (adress === "") {
            error += 'Du måste fylla i en adress! '
        }
    } else {
        alert('Beställningen lyckades!')
    }
    errorMessage.textContent = error;
}

function closeModal(){
    popUp.style.display = 'none';
}
 