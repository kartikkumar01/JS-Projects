let display = document.getElementById('display')
setInterval(() => {
    let time = new Date().toLocaleTimeString()
    display.innerText = time
}, 1000);

