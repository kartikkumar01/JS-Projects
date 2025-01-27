const qrInput = document.querySelector('#qr-input');
const qrButton = document.querySelector('#qr-button');
const qrImage = document.querySelector('#qr-image');

qrButton.addEventListener('click',() => {
    //Generating qr code only if user give some input
    if(qrInput.value) {
        const userInput = qrInput.value.trim();
        const link = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput}`;
        qrImage.src = link;
    }else{
        alert('Please enter some input !!');
    }
})