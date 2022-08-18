let afb = document.getElementById('actionFill');
let afbn = 0;
let hfb = document.getElementById('healthFill');
let hfbn = 100;
let mfb = document.getElementById('manaFill');
let mfbn = 100;
let efb = document.getElementById('actionFillen');
let efbn = 0;
let ehfb = document.getElementById('healthFillen');
let efhbn = 100;
let speed = 35;
let espeed = 40;
let canIncrease = true;
let playerTurn = false;
let enemyTurn = false;
let D1 = document.getElementById('d1');
let D2 = document.getElementById('d2');
let pdod = document.getElementById('pdod');
let edod = document.getElementById('edod');
let pcrit = document.getElementById('pcrit');
let ecrit = document.getElementById('ecrit');
let hitc = 0;
let critc = 0;
let HasChecked = false;
let SkillsOPEN = false;
let SpecialsOPEN = false;
let MagicOPEN = false;
let Tutorial = true;
let FIGHT = true;
let EnemyType = 0;
let log = document.getElementById('CombatEventTexts');
let phealed = 0;
let EnemName = 'Skeleton';

let PlayerStats = {
    'health': 100,
    'maxHealth': 100,
    'mana': 100,
    'maxMana': 100,
    'dmg': 10,
    'def': 5,
    'mnd': 1,
    'str': 1,
    'agi': 1,
    'wis': 1,
    'crt': 1,
    'vig': 1,
    'dod': 1,
    'truagi': 1,
    'trustr': 1,
    'truwis': 1,
    'lvl': 1,
    'nextlvl': 100,
    'dmgT': 0,
    'SF': 1000,
    'Gold': 750
};

let PlayerStatusEffects = {
    'Sundered': 0,
    'Counter': 0
};

let EnemyStats = {
    'health': 50,
    'maxHealth': 50,
    'dmg': 15,
    'def': 5,
    'dmgT': 0
};

let EnemyStatusEffects = {
    'Sundered': 0,
    'Counter': 0
};

let EnemyAbilities = {
    'PierceCD': 0 
}

// CD = Cooldown. 
// 1 = enabled
//0 = disabled

PlayerAbilities = {
    'Sunder': 1,
    'SunderCD': 0,
    'Counter': 1,
    'CounterCD': 0,
    'Pierce': 1,
    'PierceCD': 0,
    'Focus': 0,
    'FocusCD': 0

};

PlayerSpells = {
    'Heal': 1
};

PlayerWarPerks = {
    'W1': 1,
    'C1': 700,
    'W2': 0,
    'C2': 2500,
    'W3': 0,
    'C3': 1800,
    'W4': 0,
    'C4': 8000,
    'W5': 0,
    'C5': 4800,
    'W6': 0,
    'C6': 11000,
    'W7': 0,
    'C7': 17500,
    'W8': 0,
    'C8': 75000,
    'W9': 0,
    'C9': 148000,
    'W10': 0,
    'C10': 151000,
    'W11': 0,
    'C11': 250000,
};

PlayerEquip = {
    'WPN1': 0,
    'bought1': 0,
    'WPN2': 0,
    'bought2': 0,
    'WPN3': 0,
    'bought3': 0,
    'WPN4': 0,
    'bought4': 0,
    'WPN5': 0,
    'bought9': 0,
    'ARM1': 0,
    'bought5': 0,
    'ARM2': 0,
    'bought6': 0,
    'ARM3': 0,
    'bought7': 0,
    'ARM4': 0,
    'bought8': 0,
    'ARM5': 0,
    'bought10': 0
};

PlayerPower = {
    'WEP': 0,
    'ARM': 0,
    'DEF': 0,
    'STR': 0
}

StorePrices = {
    'wp1': 700,
    'wp2': 2500,
    'wp3': 8000,
    'wp4': 20000,
    'wp5': 50000,
    'ar1': 500,
    'ar2': 1800,
    'ar3': 7500,
    'ar4': 23000,
    'ar5': 57000
}

BossAbilities = {
    'Heal': 0,
    'HardenCD': 0,
    'Harden': 0,
    'TemperCD': 0,
    'Temper': 0,
    'TemperATK': 0
}

BossesBeaten = {
    'Aridomos': false,
    'Asmond': false
}