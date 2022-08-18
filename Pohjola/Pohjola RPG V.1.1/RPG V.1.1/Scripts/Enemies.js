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
}

function CalcWins() {
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
}

function CalcLosses() {
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