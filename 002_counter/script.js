const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('.btn');
let counter = 0;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case 'reset':
                counter = 0;
                screen.innerText = counter;
                break;
            case 'increase': screen.innerText = ++counter;
                break;
            case 'decrease':
                if (screen.innerText > 0) {
                    screen.innerText = --counter;
                }
        }
    })
})