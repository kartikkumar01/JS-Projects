const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const form = document.querySelector('form')
const result = document.querySelector('#result')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const heightNumber = Number(height.value)
    const weightNumber = Number(weight.value)

    if (height.value.length === 0 || weight.value.length === 0) {
        result.style.color = 'red'
        insertMessage(result, 'No field should be empty !')
    } else if (isNaN(heightNumber) || isNaN(weightNumber)) {
        result.style.color = 'red'
        insertMessage(result, 'Only Numeric values are allowed !')
    } else {
        const bmi = (weightNumber / Math.pow(heightNumber / 100, 2)).toFixed(2)
        result.style.color = 'green'
        insertMessage(result, `Your bmi is ${bmi}`)
    }
})


function insertMessage(element, message) {
    element.innerText = message
}