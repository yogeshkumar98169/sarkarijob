const arr1 = [`Go over one’s head`, `Paper over the cracks`, `Pull someone’s leg`, `Pass the hat`, `Cat’s whiskers`, `Give a hand`, `Sitting on a gold mine`, `Bad blood`, `To work like a dog`, `Like two peas in a pod`, `Apples and oranges`, `Be a dead meat`, `Pull a rabbit out of a hat`, `Keep under one’s hat`, `Dance to someone’s tune`, `A needle in a haystack`, `A red letter day`, `Be all one to`, `A gift of the gab`, `Green horns`, `On the double`, `Like pulling teeth`, `Over my dead body`, `Get someone’s goat`, `Argus eyed`, `Make headway`, `A white elephant`, `Play with fire`, `To flog a dead horse`, `Cushy job`, `Never - never land`, `Under the rose`, `Hit a snag`, `Stab someone in the back`, `Give somebody a ring`, `Above one’s head`, `Cup of tea`, `Eye - wash`, `Get the hang of`, `Get a gold star`, `Look after`, `Look for`, `Look out`, `To look down upon`, `Look into`, `Look over`, `Look forward to`, `Look something up`, `Look at`, `Look up`, `Look back`, `Look Up To`, `Look to`, `Look in on`, `Look in`, `Look upon / on`
]

let startEl = document.getElementById('start');
let endEl = document.getElementById('end');
let btnEl = document.getElementById('btn');
let btnNextEl = document.getElementById('btnNext');
let contentEl = document.getElementById('content');
let errMsg = document.getElementById('err')
let startNum
let endNum;
btnEl.addEventListener('click', () => {
    endNum = Number(endEl.value);
    startNum = startEl.value;
    errMsg.textContent = (endNum + 1) - startNum;
    btnNextEl.removeAttribute("disabled", "")
})
btnNextEl.addEventListener('click', () => {
    if (startNum > Number(endNum)) {
        btnNextEl.setAttribute("disabled", "")
    }
    else {
        console.log(startNum, endNum)
        contentEl.innerHTML = arr1[startNum];
        startNum++;
        errMsg.innerHTML = (endNum + 1) - (startNum);
    }
})
