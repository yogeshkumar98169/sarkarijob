const vocabulary = {
    1: [`Abase`, `Abash`, `Abattoir`, `Abdicate`, `Aberrant`, `Abetment`, `Abeyance`, `Abhor`, `Abject`, `Abjure`, `Ablution`, `Abnegation`, `Abode`, `Abolish`, `Abominable`, `Aboriginal`, `Abortive`, `Abrasive`, `Abridge`, `Abrogate`, `Abscission`, `Abscond`, `Absolute`, `Absolve`, `Abstain`, `Abstract`, `Abstruse`, `Abysmal`, `Accede`, `Acclaim`, `Accolade`, `Accomplice`, `Accord`, `Accused`, `Acme`, `Acquit`, `Adapt`, `Adept`, `Adolescent`, `Adulteration`, `Adultery`, `Adverse`, `Aftermath`, `Aghast`, `Agile`, `Agony`, `Aisle`, `Alchemist`, `Alimony`, `Altar`, `Altercation`, `Ambiguous`, `Amenable`, `Amiable`, `Angst`, `Anguish`, `Annotate`, `Anonymous`, `Antecedent`, `Apathy`, `Appalling`, `Appeasement`, `Archives`, `Argumentative`, `Articulate`, `Asceticism`, `Assault`, `Asset`, `Atrocities`, `Attenuate`, `Attrition`, `Augment`, `August`, `Aura`, `Averse`, `Awful`, `Babble`, `Bacchanalian`, `Backbite`, `Badger`, `Badinage`, `Baffle`, `Bait`, `Baleful`, `Balk`, `Balmy`, `Bane`, `Banter`, `Barb`, `Barbaric`, `Bard`, `Barefaced`, `Baroque`, `Barrage`, `Beeline`, `Beget`, `Begrudge`, `Beguile`, `Behemoth`, `Behest`, `Benevolence`, `Betray`, `Blackguard`, `Blatant`, `Blister`, `Blizzard`, `Blunder`, `Blush`, `Boisterous`, `Bombast`, `Boost`, `Booze`, `Brickbat`, `Brutal`, `Buckle`, `Bully`, `Bunk`, `Butcher`, `Cabal`, `Cache`, `Cacophony`, `Cadaver`, `Cadence`, `Cahoots`, `Calamity`, `Caldron`, `Calibre`, `Calligraphy`, `Callous`, `Callow`, `Canvass`, `Capitalize`, `Capitulate`, `Capricious`, `Carcass`, `Cardinal`, `Careen`, `Carnage`, `Casanova`, `Catastrophe`, `Cave(V)`, `Cave(N)`, `Censor`, `Censure`, `Chaos`, `Charismatic`, `Chaste`, `Chauvinism`, `Cheat`, `Chide`, `Clamour`, `Clandestine`, `Clasp`, `Cloak`, `Coalition`, `Coddle`, `Collate`, `Collision`, `Combat`, `Commendable`, `Commute`, `Complement`, `Conceal`, `Concede`, `Concurring`, `Condolence`, `Confrontation`, `Consecrate`, `Conspicuity`, `Conspirator`, `Contemplate`, `Convalesce`, `Conversant`, `Convict`, `Conviviality`, `Corporal`, `Corpse`, `Corroborate`, `Countenance`, `Couplet`, `Cramp`, `Credentials`, `Crooked`, `Culminate`, `Culprit`, `Curb`, `Dab hand`, `Dabble`, `Daft`, `Dainty`, `Dally`, `Damsel`, `Dank`, `Dapper`, `Dappled`, `Daub`, `Daunt`, `Dauntless`, `Dearth`, `Debauched`, `Debilitate`, `Debonair	`, `Debunk`, `Debut`, `Decency`, `Decimate`, `Decipher`]
}
const totalVocabulary = () => {
    let sum = 0
    for (i = 0; i < 1; i++) {
        sum = sum + vocabulary[i + 1].length
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
const countvocabulary = () => {
    day = dayNumber.value
    length = vocabulary[day].length
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
    content.textContent = vocabulary[day][n]
}
const resetF = () => {
    location.reload()

}
const prevF = () => {
    --n
    --startVal
    currentNumber.innerText = startVal
    remainingNumber.innerText = endVal - startVal
    content.innerText = vocabulary[day][n]
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
    content.innerText = vocabulary[day][n]
    let x = Number.parseInt(currentNumber.textContent)
    if (x == end.value) {
        next.setAttribute('disabled', '')
    }
    if (x != start.value) {
        prev.removeAttribute('disabled')
    }
}

count.addEventListener('click', () => {
    countvocabulary()
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