const arr1 = [`Abase`, `Abash`, `Abattoir`, `Abdicate`, `Aberrant`, `Abetment`, `Abeyance`, `Abhor`, `Abject`, `Abjure`, `Ablution`, `Abnegation`, `Abode`, `Abolish`, `Abominable`, `Aboriginal`, `Abortive`, `Abrasive`, `Abridge`, `Abrogate`, `Abscission`, `Abscond`, `Absolute`, `Absolve`, `Abstain`, `Abstract`, `Abstruse`, `Abysmal`, `Accede`, `Acclaim`, `Accolade`, `Accomplice`, `Accord`, `Accused`, `Acme`, `Acquit`, `Adapt`, `Adept`, `Adolescent`, `Adulteration`, `Adultery`, `Adverse`, `Aftermath`, `Aghast`, `Agile`, `Agony`, `Aisle`, `Alchemist`, `Alimony`, `Altar`, `Altercation`, `Ambiguous`, `Amenable`, `Amiable`, `Angst`, `Anguish`, `Annotate`, `Anonymous`, `Antecedent`, `Apathy`, `Appalling`, `Appeasement`, `Archives`, `Argumentative`, `Articulate`, `Asceticism`, `Assault`, `Asset`, `Atrocities`, `Attenuate`, `Attrition`, `Augment`, `August`, `Aura`, `Averse`, `Awful`, `Babble`, `Bacchanalian`, `Backbite`, `Badger`, `Badinage`, `Baffle`, `Bait`, `Baleful`, `Balk`, `Balmy`, `Bane`, `Banter`, `Barb`, `Barbaric`, `Bard`, `Barefaced`, `Baroque`, `Barrage`, `Beeline`, `Beget`, `Begrudge`, `Beguile`, `Behemoth`, `Behest`, `Benevolence`, `Betray`, `Blackguard`, `Blatant`, `Blister`, `Blizzard`, `Blunder`, `Blush`, `Boisterous`, `Bombast`, `Boost`, `Booze`, `Brickbat`, `Brutal`, `Buckle`, `Bully`, `Bunk`, `Butcher`, `Cabal`, `Cache`, `Cacophony`, `Cadaver`, `Cadence`, `Cahoots`, `Calamity`, `Caldron`, `Calibre`, `Calligraphy`, `Callous`, `Callow`, `Canvass`, `Capitalize`, `Capitulate`, `Capricious`, `Carcass`, `Cardinal`, `Careen`, `Carnage`, `Casanova`, `Catastrophe`, `Cave(V)`, `Cave(N)`, `Censor`, `Censure`, `Chaos`, `Charismatic`, `Chaste`, `Chauvinism`, `Cheat`, `Chide`, `Clamour`, `Clandestine`, `Clasp`, `Cloak`, `Coalition`, `Coddle`, `Collate`, `Collision`, `Combat`, `Commendable`, `Commute`, `Complement`, `Conceal`, `Concede`, `Concurring`, `Condolence`, `Confrontation`, `Consecrate`, `Conspicuity`, `Conspirator`, `Contemplate`, `Convalesce`, `Conversant`, `Convict`, `Conviviality`, `Corporal`, `Corpse`, `Corroborate`, `Countenance`, `Couplet`, `Cramp`, `Credentials`, `Crooked`, `Culminate`, `Culprit`, `Curb`, `Dab hand`, `Dabble`, `Daft`, `Dainty`, `Dally`, `Damsel`, `Dank`, `Dapper`, `Dappled`, `Daub`, `Daunt`, `Dauntless`, `Dearth`, `Debauched`, `Debilitate`, `Debonair	`, `Debunk`, `Debut`, `Decency`, `Decimate`, `Decipher`]

console.log(arr1.length)
let startEl = document.getElementById('start');
let endEl = document.getElementById('end');
let btnEl = document.getElementById('btn');
let btnNextEl = document.getElementById('btnNext');
let contentEl = document.getElementById('content');
let errMsg = document.getElementById('errm')
let totalid = document.getElementById('total');
let startNum;
let endNum;
totalid.innerHTML = arr1.length;
btnEl.addEventListener('click', () => {
    endNum = Number(endEl.value);
    startNum = startEl.value - 1;
    errMsg.textContent = (endNum) - startNum;
    btnNextEl.removeAttribute("disabled", "")
    console.log(startNum, endNum)
    contentEl.innerHTML = arr1[startNum];
    startNum++;
    errMsg.innerHTML = (endNum) - (startNum);
})
btnNextEl.addEventListener('click', () => {
    if (startNum >= Number(endNum)) {
        btnNextEl.setAttribute("disabled", "")
    }
    else {
        console.log(startNum, endNum)
        contentEl.innerHTML = arr1[startNum];
        startNum++;
        errMsg.innerHTML = (endNum) - (startNum);
    }
})
