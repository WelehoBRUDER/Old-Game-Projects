'use strict';

function Goblin() {
    ResetPlayerStats();
    document.getElementById('pdod').style.display = 'none';
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    canIncrease = true;
    EnemyStats.maxHealth = 220;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 10;
    EnemyStats.dmg = 15;
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
    EnemyType = 3;
}
function Demon() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    canIncrease = true;
    EnemyStats.maxHealth = 300;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 23;
    EnemyStats.dmg = 51;
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
    EnemyType = 4;
}
function UndeadKnight() {
    ResetPlayerStats();
    document.getElementById('Victory').style.display = 'none';
    afbn = 0;
    efbn = 0;
    canIncrease = true;
    EnemyStats.maxHealth = 750;
    EnemyStats.health = EnemyStats.maxHealth;
    PlayerStats.mana = PlayerStats.maxMana;
    EnemyStats.def = 42;
    EnemyStats.dmg = 45;
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
    EnemyStats.def = 80;
    EnemyStats.dmg = 72;
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

function CalcWins() {
    if(EnemyType == 1) {
        PlayerStats.SF += 2800;
        PlayerStats.Gold += Math.ceil(Math.random() * (1000 - 300) + 300);
    } else if(EnemyType == 2) {
        PlayerStats.SF += 5100;
        PlayerStats.Gold += Math.ceil(Math.random() * (3100 - 950) + 950);
    } else if(EnemyType == 3) {
        PlayerStats.SF += 11000;
        PlayerStats.Gold += Math.ceil(Math.random() * (6700 - 1720) + 1720);
    } else if(EnemyType == 4) {
        PlayerStats.SF += 19000;
        PlayerStats.Gold += Math.ceil(Math.random() * (9100 - 3200) + 3200);
    } else if(EnemyType == 5) {
        PlayerStats.SF += 41000;
        PlayerStats.Gold += Math.ceil(Math.random() * (14000 - 6400) + 6400);
    } else if(EnemyType == 6) {
        PlayerStats.SF += 75000;
        PlayerStats.Gold += Math.ceil(Math.random() * (23000 - 9400) + 9400);
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
}