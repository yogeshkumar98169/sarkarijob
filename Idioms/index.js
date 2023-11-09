const arr1 = [`Go over one’s head`, `Paper over the cracks`, `Pull someone’s leg`, `Pass the hat`, `Cat’s whiskers`, `Give a hand`, `Sitting on a gold mine`, `Bad blood`, `To work like a dog`, `Like two peas in a pod`, `Apples and oranges`, `Be a dead meat`, `Pull a rabbit out of a hat`, `Keep under one’s hat`, `Dance to someone’s tune`, `A needle in a haystack`, `A red letter day`, `Be all one to`, `A gift of the gab`, `Green horns`, `On the double`, `Like pulling teeth`, `Over my dead body`, `Get someone’s goat`, `Argus eyed`, `Make headway`, `A white elephant`, `Play with fire`, `To flog a dead horse`, `Cushy job`, `Never - never land`, `Under the rose`, `Hit a snag`, `Stab someone in the back`, `Give somebody a ring`, `Above one’s head`, `Cup of tea`, `Eye - wash`, `Get the hang of`, `Get a gold star`, `Look after`, `Look for`, `Look out`, `To look down upon`, `Look into`, `Look over`, `Look forward to`, `Look something up`, `Look at`, `Look up`, `Look back`, `Look Up To`, `Look to`, `Look in on`, `Look in`, `Look upon / on`
]
let startEl = document.getElementById('start');
let endEl = document.getElementById('end');
let btnStartEl = document.getElementById('btnStart');
let currentWord = document.getElementById('currentWord')
let errMsg = document.getElementById('errm')
let totalid = document.getElementById('total');
let btnNextEl = document.getElementById('btnNext');
let btnPrevEl = document.getElementById('btnPrevious')
let contentEl = document.getElementById('content');
let startNum;
let endNum;
totalid.innerHTML = arr1.length;
endEl.setAttribute('max', `${arr1.length}`)
endEl.setAttribute('min', 1)
startEl.setAttribute('min', 1)
btnStartEl.addEventListener("click", () => {
    endNum = Number(endEl.value - 1);
    startNum = startEl.value - 1
    errMsg.textContent = endNum - startNum;
    btnNextEl.removeAttribute("disabled", "");
    contentEl.innerHTML = arr1[startNum]
    currentWord.innerHTML = startNum + 1
})
btnNextEl.addEventListener('click', () => {
    if (startNum < endNum) {
        ++startNum;
        btnPrevEl.removeAttribute('disabled')
        contentEl.innerHTML = arr1[startNum];
        errMsg.innerHTML = (endNum) - (startNum);
        currentWord.innerHTML = startNum + 1

        if ((endNum - startNum) < 0) {
            errMsg.innerHTML = 0;
        }
    }
    else if (startNum == endNum) {
        btnNextEl.setAttribute('disabled', "")
        contentEl.innerHTML = arr1[startNum];
        errMsg.innerHTML = (endNum) - (startNum);
        if ((endNum - startNum) < 0) {
            errMsg.innerHTML = 0;
        }
    }
})
btnPrevEl.addEventListener('click', () => {
    if (startNum <= 0) {
        btnPrevEl.setAttribute('disabled', "")
    }
    else {
        btnNextEl.removeAttribute('disabled');
        startNum--;
        currentWord.innerHTML = startNum + 1
        contentEl.innerHTML = arr1[startNum];
        errMsg.innerHTML = (endNum) - (startNum);
        if ((endNum - startNum) < 0) {
            errMsg.innerHTML = 0;
        }
    }
})

