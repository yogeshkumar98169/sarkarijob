const oneWord = {
    1: [`Abbaitor`]
}
const totalOneWord = () => {
    let sum = 0
    for (i = 0; i < 1; i++) {
        sum = sum + oneWord[i + 1].length
    }
    console.log(sum)
}

let dayNumber = document.getElementById("dayNumber")
let count = document.getElementById("count")
let totalCount = document.getElementById('totalCount')
let start = document.getElementById('start')
let end = document.getElementById('end')
let startGame = document.getElementById('startGame')
let currentNumber = document.getElementById('currentNumber')
let remainingNumber = document.getElementById('remainingNumber')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let reset = document.getElementById('reset')
let content = document.getElementById('content')
let length
let startVal
let endVal
let n

const defaultProperties = () => {
    start.value = 1
    end.value = length
    start.setAttribute("min", 1)
    start.setAttribute("max", length)
    end.setAttribute("max", length)
    end.setAttribute("min", 1)
}
const countoneWord = () => {
    day = dayNumber.value
    length = oneWord[day].length
    totalCount.innerText = length
    defaultProperties()
}
const startGameF = () => {
    startVal = start.value
    endVal = end.value
    n = startVal - 1
    console.log(startVal)
    console.log(endVal)
    currentNumber.textContent = startVal
    remainingNumber.textContent = endVal - startVal
    content.textContent = oneWord[day][n]
}
const resetF = () => {
    location.reload()

}
const prevF = () => {
    --n
    --startVal
    currentNumber.innerText = startVal
    remainingNumber.innerText = endVal - startVal
    content.innerText = oneWord[day][n]
    let x = Number.parseInt(currentNumber.textContent)
    if (x == start.value) {
        prev.setAttribute('disabled', '')
    }
    if (x != end.vlaue) {
        next.removeAttribute('disabled')
    }
}
const nextF = () => {
    ++n;
    ++startVal
    currentNumber.innerText = startVal
    remainingNumber.innerText = endVal - startVal
    content.innerText = oneWord[day][n]
    let x = Number.parseInt(currentNumber.textContent)
    if (x == end.value) {
        next.setAttribute('disabled', '')
    }
    if (x != start.value) {
        prev.removeAttribute('disabled')
    }
}

count.addEventListener('click', () => {
    countoneWord()
})
startGame.addEventListener('click', () => {
    startGameF();
})
reset.addEventListener('click', () => {
    resetF()
})
prev.addEventListener('click', () => {
    prevF();
})
next.addEventListener('click', () => {
    nextF();
})