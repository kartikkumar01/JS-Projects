const buttons = document.querySelectorAll('.button') //returns a nodeList

buttons.forEach( (button) => {
    button.addEventListener('click',()=>{
        document.body.style.backgroundColor = `${button.id}`  
    })
} )
