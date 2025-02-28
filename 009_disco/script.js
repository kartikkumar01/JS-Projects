let changeBodyColor;

document.getElementById('start').addEventListener('click', () => {
    changeBodyColor = setInterval(() => {
        document.body.style.backgroundColor = `rgb(${random()},${random()},${random()})`
        document.body.style.color = `rgb(${random()},${random()},${random()})`
        document.body.style.fontSize = `${random()}px`
    }, 400)
})

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(changeBodyColor)
})

function random() {
    //generates random number b/w 0-255
    return Math.trunc(Math.random() * 256)
}
