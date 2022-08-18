let enemyCount = 3; // How many enemies are on the battlefield. 1 or 2.
let ES = document.getElementById('EnemyStatus'); // The Enemy status HTML element.
let EM = document.getElementById('EnemyAction'); // Enemy Actions HTML element.
let AM = document.getElementById('ActionStatus') // Player Actions HTML element.
let CL = document.getElementById('CombatLog'); // Combat Log HTML element.
let BE = document.getElementById('BattleEnd'); // Battle End HTML element.
let TP = document.getElementById('TutorialScreen'); // Tutorial pop up HTML element.
let currentEnemy = 0; // The enemy currently using a move.
let playerAction = 3;
let Selection = -1;
let attacks = [];
let damage = 0;
let CanAttack = 1;
let enaction = 3;
let attacke;
let y = 0;
let anim;
let anim2;
let armrlevel = 1;
let eturn = 0;
// Minimum and maximum enemy id's for a fight.
let minE = 0;
let maxE = 2;
let enemiesAlive = enemyCount;
let player = {
    "hp": 75,
    "maxhp": 75,
    "exp": 0,
    "startexp": 0,
    "nextexp": 25,
    "armour": 4,
    "armourdura": 50,
    "armourduramax": 50,
    "dead": false,
    "coins": 0,
    "level": 1,
    "skill": 0,
    "enemdefeat": 0
};
let dmgplay = [];
let enemy = [];
let deepCopyEnemy = [];

let tut = {
    "win" : false,
    "over" : false,
}