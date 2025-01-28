const input = document.querySelector('#input');
const output = document.querySelector('#output');
//Checks for the strength when user releases a key after entering a character
input.addEventListener('input',() => {
    setTimeout(() => {     
        const password = input.value;
        //check if password is empty
        if(password === ''){
            output.innerText = '';
        }// checking length 8 characters
        else if(password.length < 8) {
            output.style.color = 'red';
            output.innerText = 'Password must be 8 char long';
        }// check if not contain lowercase
        else if(password.search(/[a-z]/) == -1) {
            output.style.color = 'orange';
            output.innerText = 'Password must contain lowercase';
        }// check if not contain uppercase
        else if(password.search(/[A-Z]/) == -1) {
            output.style.color = 'yellow';
            output.innerText = 'Password must contain uppercase';
        }// check if not contain numbers
        else if(password.search(/[0-9]/) == -1){
            output.style.color = 'pink';
            output.innerText = 'Password must contain number';
        }// check if not contain special characters
        else if(password.search(/[!@#$%^&*()]/) == -1){
            output.style.color = 'skyblue';
            output.innerText = 'Password must contain special character [!@#$%^&*()]';
        }else{
            output.style.color = 'green';
            output.innerText = 'Password is Strong';
        }
    }, 300);
})