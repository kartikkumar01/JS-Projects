//Selecting all the buttons in calculator
const screen = document.getElementById('calculatorScreen');
const buttons = document.querySelectorAll('button'); //return nodelist of buttons

//Iterating button array and adding event listener to it
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            switch (button.innerText) {
                case 'AC': screen.value = '0';
                    break;
        
                case 'DEL':
                    if (screen.value.length === 1 || screen.value === 'err') {
                        screen.value = '0';
                    }else {
                        screen.value = screen.value.substring(0, screen.value.length - 1);
                    }
                    break;
        
                case '=':
                    if (screen.value === '00') {
                        screen.value = '0';
                    } else if (screen.value.length > 1) {
                        let result;
                        try {
                            result = eval(screen.value);
                        } catch (err) {
                            screen.value = 'err';
                        }
                        if (result === undefined || result === Infinity) {
                            screen.value = 'err';
                        } else {
                            screen.value = result;
                        }
                    }
                    break;
        
                default:
                    // If screen has initially has 0/00 then just put that button value in screen
                    if (screen.value == '0' || screen.value == '00') {
                        screen.value = button.innerText; //Override first time
                    }
                    //If the last character of input is operator, then don't do anything
                    else {
                        screen.value += button.innerText; // Append after first time
                    }
            }
        })
    })
