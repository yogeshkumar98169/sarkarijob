const arr1 = [`Abase`, `Abash`, `Abattoir`, `Abdicate`, `Aberrant`, `Abetment`, `Abeyance`, `Abhor`, `Abject`, `Abjure`, `Ablution`, `Abnegation`, `Abode`, `Abolish`, `Abominable`, `Aboriginal`, `Abortive`, `Abrasive`, `Abridge`, `Abrogate`, `Abscission`, `Abscond`, `Absolute`, `Absolve`, `Abstain`, `Abstract`, `Abstruse`, `Abysmal`, `Accede`, `Acclaim`, `Accolade`, `Accomplice`, `Accord`, `Accused`, `Acme`, `Acquit`, `Adapt`, `Adept`, `Adolescent`, `Adulteration`, `Adultery`, `Adverse`, `Aftermath`, `Aghast`, `Agile`, `Agony`, `Aisle`, `Alchemist`, `Alimony`, `Altar`, `Altercation`, `Ambiguous`, `Amenable`, `Amiable`, `Angst`, `Anguish`, `Annotate`, `Anonymous`, `Antecedent`, `Apathy`, `Appalling`, `Appeasement`, `Archives`, `Argumentative`, `Articulate`, `Asceticism`, `Assault`, `Asset`, `Atrocities`, `Attenuate`, `Attrition`, `Augment`, `August`, `Aura`, `Averse`, `Awful`, `Babble`, `Bacchanalian`, `Backbite`, `Badger`, `Badinage`, `Baffle`, `Bait`, `Baleful`, `Balk`, `Balmy`, `Bane`, `Banter`, `Barb`, `Barbaric`, `Bard`, `Barefaced`, `Baroque`, `Barrage`, `Beeline`, `Beget`, `Begrudge`, `Beguile`, `Behemoth`, `Behest`, `Benevolence`, `Betray`, `Blackguard`, `Blatant`, `Blister`, `Blizzard`, `Blunder`, `Blush`, `Boisterous`, `Bombast`, `Boost`, `Booze`, `Brickbat`, `Brutal`, `Buckle`, `Bully`, `Bunk`, `Butcher`, `Cabal`, `Cache`, `Cacophony`, `Cadaver`, `Cadence`, `Cahoots`, `Calamity`, `Caldron`, `Calibre`, `Calligraphy`, `Callous`, `Callow`, `Canvass`, `Capitalize`, `Capitulate`, `Capricious`, `Carcass`, `Cardinal`, `Careen`, `Carnage`, `Casanova`, `Catastrophe`, `Cave(V)`, `Cave(N)`, `Censor`, `Censure`, `Chaos`, `Charismatic`, `Chaste`, `Chauvinism`, `Cheat`, `Chide`, `Clamour`, `Clandestine`, `Clasp`, `Cloak`, `Coalition`, `Coddle`, `Collate`, `Collision`, `Combat`, `Commendable`, `Commute`, `Complement`, `Conceal`, `Concede`, `Concurring`, `Condolence`, `Confrontation`, `Consecrate`, `Conspicuity`, `Conspirator`, `Contemplate`, `Convalesce`, `Conversant`, `Convict`, `Conviviality`, `Corporal`, `Corpse`, `Corroborate`, `Countenance`, `Couplet`, `Cramp`, `Credentials`, `Crooked`, `Culminate`, `Culprit`, `Curb`, `Dab hand`, `Dabble`, `Daft`, `Dainty`, `Dally`, `Damsel`, `Dank`, `Dapper`, `Dappled`, `Daub`, `Daunt`, `Dauntless`, `Dearth`, `Debauched`, `Debilitate`, `Debonair	`, `Debunk`, `Debut`, `Decency`, `Decimate`, `Decipher`]

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

