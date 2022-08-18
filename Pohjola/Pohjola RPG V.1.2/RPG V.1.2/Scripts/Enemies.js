'use strict';

function Goblin() {
    ResetPlayerStats();
    document.getElementById('pdod').style.display = 'none';
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
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
    canIncrease = true;
    EnemyStats.maxHealth = 770;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 45;
    EnemyStats.dmg = 48;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Undead Knight';
    FIGHT = true;
    espeed = 45;
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
    canIncrease = true;
    EnemyStats.maxHealth = 500;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 135;
    EnemyStats.dmg = 110;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'North Spirit';
    FIGHT = true;
    espeed = 40;
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
    canIncrease = true;
    EnemyStats.maxHealth = 1750;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 0;
    EnemyStats.dmg = 180;
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
    canIncrease = true;
    EnemyStats.maxHealth = 1200;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 100;
    EnemyStats.dmg = 150;
    PlayerStats.health = PlayerStats.maxHealth;
    document.getElementById('enemyname').textContent = 'Guardian Knight';
    FIGHT = true;
    espeed = 40;
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
    canIncrease = true;
    EnemyStats.maxHealth = 2000;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 125;
    EnemyStats.dmg = 200;
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

function CalcWins() {
    document.getElementById('CombatEventTexts').textContent = '';
    if(EnemyType == 1) {
        PlayerStats.SF += 2800;
        PlayerStats.Gold += Math.ceil(Math.random() * (1000 - 300) + 300);
    } else if(EnemyType == 2) {
        PlayerStats.SF += 4100;
        PlayerStats.Gold += Math.ceil(Math.random() * (3100 - 950) + 950);
    } else if(EnemyType == 3) {
        PlayerStats.SF += 7000;
        PlayerStats.Gold += Math.ceil(Math.random() * (6700 - 1720) + 1720);
    } else if(EnemyType == 4) {
        PlayerStats.SF += 14500;
        PlayerStats.Gold += Math.ceil(Math.random() * (3500 - 1000) + 1000);
    } else if(EnemyType == 5) {
        PlayerStats.SF += 22600;
        PlayerStats.Gold += Math.ceil(Math.random() * (14000 - 6400) + 6400);
    } else if(EnemyType == 6) {
        PlayerStats.SF += 29400;
        PlayerStats.Gold += Math.ceil(Math.random() * (23000 - 9400) + 9400);
    } else if(EnemyType == 7) {
        PlayerStats.SF += 36600;
        PlayerStats.Gold += Math.ceil(Math.random() * (25000 - 10000) + 10000);
    } else if(EnemyType == 8) {
        PlayerStats.SF += 60000;
        PlayerStats.Gold += Math.ceil(Math.random() * (7000 - 2000) + 2000);
    } else if(EnemyType == 9) {
        PlayerStats.SF += 45000;
        PlayerStats.Gold += Math.ceil(Math.random() * (40000 - 18000) + 18000);
    }
    else if(EnemyType == 10) {
        PlayerStats.SF += 100000;
        PlayerStats.Gold += Math.ceil(Math.random() * (40000 - 18000) + 18000);
    }
}

function CalcLosses() {
    document.getElementById('CombatEventTexts').textContent = '';
    PlayerStats.SF = 0;
}

function ResetPlayerStats() {
    PlayerStats.health = PlayerStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    PlayerAbilities.SunderCD = 0;
    PlayerAbilities.CounterCD = 0;
    PlayerAbilities.PierceCD = 0;
    PlayerStatusEffects.Counter = 0;
    EnemyStatusEffects.Sundered = 0;
}

function SetEnemyPortrait() {
    if(EnemyType == 1) {
        document.getElementById('skelD').style.display = 'none';
        document.getElementById('skelA').style.display = 'none';
        document.getElementById('en1').style.display = 'block';
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
    }
    else if(EnemyType == 2) {
        document.getElementById('skelD').style.display = 'none';
        document.getElementById('skelA').style.display = 'none';
        document.getElementById('en1').style.display = 'none';
        document.getElementById('en2').style.display = 'block';
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

    }
    else if(EnemyType == 3) {
        document.getElementById('skelD').style.display = 'none';
        document.getElementById('skelA').style.display = 'none';
        document.getElementById('en1').style.display = 'none';
        document.getElementById('en2').style.display = 'none';
        document.getElementById('en3').style.display = 'block';
        document.getElementById('en4').style.display = 'none';
        document.getElementById('en5').style.display = 'none';
        document.getElementById('en6').style.display = 'none';
        document.getElementById('en7').style.display = 'none';
        document.getElementById('en8').style.display = 'none';
        document.getElementById('en9').style.display = 'none';
        document.getElementById('en9D').style.display = 'none';
        document.getElementById('bos1').style.display = 'none';
        document.getElementById('bos1D').style.display = 'none';

    }
    else if(EnemyType == 4) {
        document.getElementById('skelD').style.display = 'none';
        document.getElementById('skelA').style.display = 'none';
        document.getElementById('en1').style.display = 'none';
        document.getElementById('en2').style.display = 'none';
        document.getElementById('en3').style.display = 'none';
        document.getElementById('en4').style.display = 'block';
        document.getElementById('en5').style.display = 'none';
        document.getElementById('en6').style.display = 'none';
        document.getElementById('en7').style.display = 'none';
        document.getElementById('en8').style.display = 'none';
        document.getElementById('en9').style.display = 'none';
        document.getElementById('en9D').style.display = 'none';
        document.getElementById('bos1').style.display = 'none';
        document.getElementById('bos1D').style.display = 'none';

    }
    else if(EnemyType == 5) {
        document.getElementById('skelD').style.display = 'none';
        document.getElementById('skelA').style.display = 'none';
        document.getElementById('en1').style.display = 'none';
        document.getElementById('en2').style.display = 'none';
        document.getElementById('en3').style.display = 'none';
        document.getElementById('en4').style.display = 'none';
        document.getElementById('en5').style.display = 'block';
        document.getElementById('en6').style.display = 'none';
        document.getElementById('en7').style.display = 'none';
        document.getElementById('en8').style.display = 'none';
        document.getElementById('en9').style.display = 'none';
        document.getElementById('en9D').style.display = 'none';
        document.getElementById('bos1').style.display = 'none';
        document.getElementById('bos1D').style.display = 'none';

    }
    else if(EnemyType == 6) {
        document.getElementById('skelD').style.display = 'none';
        document.getElementById('skelA').style.display = 'none';
        document.getElementById('en1').style.display = 'none';
        document.getElementById('en2').style.display = 'none';
        document.getElementById('en3').style.display = 'none';
        document.getElementById('en4').style.display = 'none';
        document.getElementById('en5').style.display = 'none';
        document.getElementById('en6').style.display = 'block';
        document.getElementById('en7').style.display = 'none';
        document.getElementById('en8').style.display = 'none';
        document.getElementById('en9').style.display = 'none';
        document.getElementById('en9D').style.display = 'none';
        document.getElementById('bos1').style.display = 'none';
        document.getElementById('bos1D').style.display = 'none';

    }
    else if(EnemyType == 7) {
        document.getElementById('skelD').style.display = 'none';
        document.getElementById('skelA').style.display = 'none';
        document.getElementById('en1').style.display = 'none';
        document.getElementById('en2').style.display = 'none';
        document.getElementById('en3').style.display = 'none';
        document.getElementById('en4').style.display = 'none';
        document.getElementById('en5').style.display = 'none';
        document.getElementById('en6').style.display = 'none';
        document.getElementById('en7').style.display = 'block';
        document.getElementById('en8').style.display = 'none';
        document.getElementById('en9').style.display = 'none';
        document.getElementById('en9D').style.display = 'none';
        document.getElementById('bos1').style.display = 'none';
        document.getElementById('bos1D').style.display = 'none';

    }
    else if(EnemyType == 8) {
        document.getElementById('skelD').style.display = 'none';
        document.getElementById('skelA').style.display = 'none';
        document.getElementById('en1').style.display = 'none';
        document.getElementById('en2').style.display = 'none';
        document.getElementById('en3').style.display = 'none';
        document.getElementById('en4').style.display = 'none';
        document.getElementById('en5').style.display = 'none';
        document.getElementById('en6').style.display = 'none';
        document.getElementById('en7').style.display = 'none';
        document.getElementById('en8').style.display = 'block';
        document.getElementById('en9').style.display = 'none';
        document.getElementById('en9D').style.display = 'none';
        document.getElementById('bos1').style.display = 'none';
        document.getElementById('bos1D').style.display = 'none';

    }
    else if(EnemyType == 9) {
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
        document.getElementById('en9').style.display = 'block';
        document.getElementById('en9D').style.display = 'none';
        document.getElementById('bos1').style.display = 'none';
        document.getElementById('bos1D').style.display = 'none';

    } else if(EnemyType == 10) {
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
        document.getElementById('bos1').style.display = 'block';
        document.getElementById('bos1D').style.display = 'none';

    }
}

function SetEnemyDeaths() {
    if(EnemyType == 9) {
        document.getElementById('skelD').style.display = 'none';
        document.getElementById('skelA').style.display = 'none';
        document.getElementById('bos1').style.display = 'none';
        document.getElementById('bos1D').style.display = 'none';
        document.getElementById('en9').style.display = 'none';
        document.getElementById('en9D').style.display = 'block';
    }
}