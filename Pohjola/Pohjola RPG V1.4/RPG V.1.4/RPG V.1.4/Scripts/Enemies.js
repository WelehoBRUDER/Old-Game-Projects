'use strict';

function Goblin() {
    ResetPlayerStats();
    document.getElementById('pdod').style.display = 'none';
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'Goblin';
    canIncrease = true;
    EnemyStats.maxHealth = 235;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 11;
    EnemyStats.dmg = 16;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Goblin';
    FIGHT = true;
    espeed = 40;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 1;
    SetEnemyPortrait();
}
function Orc() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'Orc';
    canIncrease = true;
    EnemyStats.maxHealth = 450;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 12;
    EnemyStats.dmg = 26;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Orc';
    FIGHT = true;
    espeed = 40;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 2;
    SetEnemyPortrait();
}
function Giant() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'Giant';
    canIncrease = true;
    EnemyStats.maxHealth = 1100;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 4;
    EnemyStats.dmg = 67;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Giant';
    FIGHT = true;
    espeed = 50;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 4;
    SetEnemyPortrait();
}
function Demon() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'Lesser Demon';
    canIncrease = true;
    EnemyStats.maxHealth = 410;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 32;
    EnemyStats.dmg = 56;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Lesser Demon';
    FIGHT = true;
    espeed = 37;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 3;
    SetEnemyPortrait();
}
function UndeadKnight() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'Undead Knight';
    canIncrease = true;
    EnemyStats.maxHealth = 850;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 51;
    EnemyStats.dmg = 53;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Undead Knight';
    FIGHT = true;
    espeed = 40;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 5;
    SetEnemyPortrait();
}

function CurseOrc() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'Cursed Orc';
    canIncrease = true;
    EnemyStats.maxHealth = 980;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 83;
    EnemyStats.dmg = 76;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Cursed Orc';
    FIGHT = true;
    espeed = 40;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 6;
    SetEnemyPortrait();
}

function Spirit() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'North Spirit';
    canIncrease = true;
    EnemyStats.maxHealth = 400;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 166;
    EnemyStats.dmg = 147;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'North Spirit';
    FIGHT = true;
    espeed = 9;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 7;
    SetEnemyPortrait();
}

function GiantChief() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'Giant Chief';
    canIncrease = true;
    EnemyStats.maxHealth = 2000;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 0;
    EnemyStats.dmg = 190;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Giant Chief';
    FIGHT = true;
    espeed = 60;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 8;
    SetEnemyPortrait();
}

function KnightGuard() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'Guardian Knight';
    canIncrease = true;
    EnemyStats.maxHealth = 1400;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 110;
    EnemyStats.dmg = 175;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Guardian Knight';
    FIGHT = true;
    espeed = 37;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 9;
    SetEnemyPortrait();
}

function Boss1() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'Aridomos';
    canIncrease = true;
    EnemyStats.maxHealth = 3000;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 125;
    EnemyStats.dmg = 240;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Fallen Knight Aridomos';
    FIGHT = true;
    espeed = 50;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 10;
    SetEnemyPortrait();
}

function FearfulBash() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'Bash';
    canIncrease = true;
    EnemyStats.maxHealth = 1900;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 300;
    EnemyStats.dmg = 110;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Bash the Coward';
    FIGHT = true;
    espeed = 40;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 11;
    SetEnemyPortrait();
}

function Rowd() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'Rowd';
    canIncrease = true;
    EnemyStats.maxHealth = 2400;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 50;
    EnemyStats.dmg = 290;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Rowd the Brave';
    FIGHT = true;
    espeed = 40;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 12;
    SetEnemyPortrait();
}

function Demon2() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'Greater Demon';
    canIncrease = true;
    EnemyStats.maxHealth = 3100;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 200;
    EnemyStats.dmg = 400;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Greater Demon';
    FIGHT = true;
    espeed = 37;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 13;
    SetEnemyPortrait();
}

function LesVamp() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'Lesser Vampire';
    canIncrease = true;
    EnemyStats.maxHealth = 1700;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 400;
    EnemyStats.dmg = 510;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Lesser Vampire';
    FIGHT = true;
    espeed = 45;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 14;
    SetEnemyPortrait();
}

function GreatGiant() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'Greater Giant';
    canIncrease = true;
    EnemyStats.maxHealth = 4000;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 0;
    EnemyStats.dmg = 620;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Greater Giant';
    FIGHT = true;
    espeed = 60;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 15;
    SetEnemyPortrait();
}

function Titan() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'Titan';
    canIncrease = true;
    EnemyStats.maxHealth = 4800;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 20;
    EnemyStats.dmg = 900;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Titan';
    FIGHT = true;
    espeed = 75;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 16;
    SetEnemyPortrait();
}

function DeathKnight() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'Knight of Death';
    canIncrease = true;
    EnemyStats.maxHealth = 3500;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 400;
    EnemyStats.dmg = 780;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Knight of the Dead';
    FIGHT = true;
    espeed = 45;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 17;
    SetEnemyPortrait();
}

function Bigfoot() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = 'Bigfoot';
    canIncrease = true;
    EnemyStats.maxHealth = 5000;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 300;
    EnemyStats.dmg = 800;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Bigfoot';
    FIGHT = true;
    espeed = 50;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 18;
    SetEnemyPortrait();
}

function Retainer() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = "Asmond's Retainer";
    canIncrease = true;
    EnemyStats.maxHealth = 6000;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 450;
    EnemyStats.dmg = 1000;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Retainer of Asmond';
    FIGHT = true;
    espeed = 50;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 19;
    SetEnemyPortrait();
}

function Asmond() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = "Asmond Bloodfallen";
    canIncrease = true;
    EnemyStats.maxHealth = 10000;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 150;
    EnemyStats.dmg = 1000;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Asmond Bloodfallen';
    FIGHT = true;
    espeed = 55;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 20;
    SetEnemyPortrait();
}

function Mask() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    EnemName = "The Mask";
    canIncrease = true;
    EnemyStats.maxHealth = 12000;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 200;
    EnemyStats.dmg = 450;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'The Mask';
    FIGHT = true;
    espeed = 9;
    clearInterval(timer2);
    timer2 = setInterval(fillBar2, espeed);
    clearInterval(timer);
    timer = setInterval(fillBar, speed);
    updateAll();
    updateAll2();
    EnemyType = 21;
    SetEnemyPortrait();
}

function CalcWins() {
    document.getElementById('Skill1CD').style.display = 'none';
    document.getElementById('Skill2CD').style.display = 'none';
    document.getElementById('Skill3CD').style.display = 'none';
    document.getElementById('CombatEventTexts').textContent = '';
    if (EnemyType == 1) {
        PlayerStats.SF += 2800;
        PlayerStats.Gold += Math.ceil(Math.random() * (1000 - 300) + 300);
    } else if (EnemyType == 2) {
        PlayerStats.SF += 4100;
        PlayerStats.Gold += Math.ceil(Math.random() * (3100 - 950) + 950);
    } else if (EnemyType == 3) {
        PlayerStats.SF += 5400;
        PlayerStats.Gold += Math.ceil(Math.random() * (6700 - 1720) + 1720);
    } else if (EnemyType == 4) {
        PlayerStats.SF += 8100;
        PlayerStats.Gold += Math.ceil(Math.random() * (3500 - 1000) + 1000);
    } else if (EnemyType == 5) {
        PlayerStats.SF += 10400;
        PlayerStats.Gold += Math.ceil(Math.random() * (9000 - 3000) + 3000);
    } else if (EnemyType == 6) {
        PlayerStats.SF += 14600;
        PlayerStats.Gold += Math.ceil(Math.random() * (11000 - 4500) + 4500);
    } else if (EnemyType == 7) {
        PlayerStats.SF += 19200;
        PlayerStats.Gold += Math.ceil(Math.random() * (16000 - 7000) + 7000);
    } else if (EnemyType == 8) {
        PlayerStats.SF += 27500;
        PlayerStats.Gold += Math.ceil(Math.random() * (7000 - 2000) + 2000);
    } else if (EnemyType == 9) {
        PlayerStats.SF += 28000;
        PlayerStats.Gold += Math.ceil(Math.random() * (21000 - 9000) + 9000);
    }
    else if (EnemyType == 10) {
        PlayerStats.SF += 75000;
        PlayerStats.Gold += Math.ceil(Math.random() * (57000 - 21000) + 21000);
    }
    else if (EnemyType == 11) {
        PlayerStats.SF += 32000;
        PlayerStats.Gold += Math.ceil(Math.random() * (26000 - 10000) + 10000);
    }
    else if (EnemyType == 12) {
        PlayerStats.SF += 36000;
        PlayerStats.Gold += Math.ceil(Math.random() * (29000 - 11000) + 11000);
    }
    else if (EnemyType == 13) {
        PlayerStats.SF += 41000;
        PlayerStats.Gold += Math.ceil(Math.random() * (34000 - 15000) + 15000);
    }
    else if (EnemyType == 14) {
        PlayerStats.SF += 48000;
        PlayerStats.Gold += Math.ceil(Math.random() * (36000 - 17000) + 17000);
    }
    else if (EnemyType == 15) {
        PlayerStats.SF += 52300;
        PlayerStats.Gold += Math.ceil(Math.random() * (40000 - 10000) + 10000);
    }
    else if (EnemyType == 16) {
        PlayerStats.SF += 57500;
        PlayerStats.Gold += Math.ceil(Math.random() * (45000 - 10000) + 10000);
    }
    else if (EnemyType == 17) {
        PlayerStats.SF += 68000;
        PlayerStats.Gold += Math.ceil(Math.random() * (50000 - 10000) + 10000);
    }
    else if (EnemyType == 18) {
        PlayerStats.SF += 75000;
        PlayerStats.Gold += Math.ceil(Math.random() * (53000 - 10000) + 10000);
    }
    else if (EnemyType == 19) {
        PlayerStats.SF += 80000;
        PlayerStats.Gold += Math.ceil(Math.random() * (62000 - 10000) + 10000);
    }
    else if (EnemyType == 20) {
        PlayerStats.SF += 110000;
        PlayerStats.Gold += Math.ceil(Math.random() * (76000 - 10000) + 10000);
    }
    else if (EnemyType == 21) {
        PlayerStats.SF += 150000;
        PlayerStats.Gold += Math.ceil(Math.random() * (100000 - 10000) + 10000);
    }
}

function CalcLosses() {
    document.getElementById('CombatEventTexts').textContent = '';
    document.getElementById('Skill1CD').style.display = 'none';
    document.getElementById('Skill2CD').style.display = 'none';
    document.getElementById('Skill3CD').style.display = 'none';
    document.getElementById('Skill4CD').style.display = 'none';
    PlayerStats.SF = 0;
}

function ResetPlayerStats() {
    document.getElementById('Skill1CD').style.display = 'none';
    document.getElementById('Skill2CD').style.display = 'none';
    document.getElementById('Skill3CD').style.display = 'none';
    document.getElementById('Skill4CD').style.display = 'none';
    HasChecked = false;
    document.getElementById('stat1').textContent = '';
    document.getElementById('stat2').textContent = '';
    document.getElementById('stat3').textContent = '';
    document.getElementById('pstat1').textContent = '';
    PlayerStats.health = PlayerStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    PlayerAbilities.SunderCD = 0;
    PlayerAbilities.CounterCD = 0;
    PlayerAbilities.PierceCD = 0;
    PlayerAbilities.FocusCD = 0;
    PlayerStatusEffects.Counter = 0;
    EnemyStatusEffects.Sundered = 0;
}

function SetEnemyPortrait() {
    document.getElementById('skelD').style.display = 'none';
    document.getElementById('skelA').style.display = 'none';
    document.getElementById('en1').style.display = 'none';
    document.getElementById('en2').style.display = 'none';
    document.getElementById('en3').style.display = 'none';
    document.getElementById('en4').style.display = 'none';
    document.getElementById('en5').style.display = 'none';
    document.getElementById('en6').style.display = 'none';
    document.getElementById('en7').style.display = 'none';
    document.getElementById('en8').style.display = 'none';
    document.getElementById('en9').style.display = 'none';
    document.getElementById('en9D').style.display = 'none';
    document.getElementById('bos1').style.display = 'none';
    document.getElementById('bos1D').style.display = 'none';
    document.getElementById('en10').style.display = 'none';
    document.getElementById('en11').style.display = 'none';
    document.getElementById('en12').style.display = 'none';
    document.getElementById('en13').style.display = 'none';
    document.getElementById('en14').style.display = 'none';
    document.getElementById('en15').style.display = 'none';
    document.getElementById('en16').style.display = 'none';
    document.getElementById('en17').style.display = 'none';
    document.getElementById('en18').style.display = 'none';
    document.getElementById('bos2').style.display = 'none';
    document.getElementById('en19').style.display = 'none';
    if (EnemyType == 1) {
        document.getElementById('en1').style.display = 'block';
    }
    else if (EnemyType == 2) {
        document.getElementById('en2').style.display = 'block';

    }
    else if (EnemyType == 3) {
        document.getElementById('en3').style.display = 'block';
    }
    else if (EnemyType == 4) {
        document.getElementById('en4').style.display = 'block';

    }
    else if (EnemyType == 5) {
        document.getElementById('en5').style.display = 'block';

    }
    else if (EnemyType == 6) {
        document.getElementById('en6').style.display = 'block';

    }
    else if (EnemyType == 7) {
        document.getElementById('en7').style.display = 'block';

    }
    else if (EnemyType == 8) {
        document.getElementById('en8').style.display = 'block';

    }
    else if (EnemyType == 9) {
        document.getElementById('en9').style.display = 'block';

    } else if (EnemyType == 10) {
        document.getElementById('bos1').style.display = 'block';
    }
    else if (EnemyType == 11) {
        document.getElementById('en10').style.display = 'block';
    }
    else if (EnemyType == 12) {
        document.getElementById('en11').style.display = 'block';
    }
    else if (EnemyType == 13) {
        document.getElementById('en12').style.display = 'block';
    }
    else if (EnemyType == 14) {
        document.getElementById('en13').style.display = 'block';
    }
    else if (EnemyType == 15) {
        document.getElementById('en14').style.display = 'block';
    }
    else if (EnemyType == 16) {
        document.getElementById('en15').style.display = 'block';
    }
    else if (EnemyType == 17) {
        document.getElementById('en16').style.display = 'block';
    }
    else if (EnemyType == 18) {
        document.getElementById('en17').style.display = 'block';
    }
    else if (EnemyType == 19) {
        document.getElementById('en18').style.display = 'block';
    }
    else if (EnemyType == 20) {
        document.getElementById('bos2').style.display = 'block';
    }
    else if (EnemyType == 21) {
        document.getElementById('en19').style.display = 'block';
    }

}

function SetEnemyDeaths() {
    if (EnemyType == 9) {
        document.getElementById('skelD').style.display = 'none';
        document.getElementById('skelA').style.display = 'none';
        document.getElementById('bos1').style.display = 'none';
        document.getElementById('bos1D').style.display = 'none';
        document.getElementById('en9').style.display = 'none';
        document.getElementById('en9D').style.display = 'block';

    }
}

function CheckEnem() {
    if (EnemyType == 1) {
        Goblin();
    } else if (EnemyType == 2) {
        Orc();
    } else if (EnemyType == 3) {
        Demon();
    } else if (EnemyType == 4) {
        Giant();
    } else if (EnemyType == 5) {
        UndeadKnight();
    } else if (EnemyType == 6) {
        CurseOrc();
    } else if (EnemyType == 7) {
        Spirit();
    } else if (EnemyType == 8) {
        GiantChief();
    } else if (EnemyType == 9) {
        KnightGuard();
    } else if (EnemyType == 11) {
        FearfulBash();
    } else if (EnemyType == 12) {
        Rowd();
    } else if (EnemyType == 13) {
        Demon2();
    } else if (EnemyType == 14) {
        LesVamp();
    } else if (EnemyType == 15) {
        GreatGiant();
    } else if (EnemyType == 16) {
        Titan();
    } else if (EnemyType == 17) {
        DeathKnight();
    } else if (EnemyType == 18) {
        Bigfoot();
    } else if (EnemyType == 19) {
        Retainer();
    } else if (EnemyType == 21) {
        Mask();
    }

}