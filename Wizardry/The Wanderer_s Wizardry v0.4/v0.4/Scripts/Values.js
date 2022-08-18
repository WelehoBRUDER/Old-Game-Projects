let enemyCount = 3; // How many enemies are on the battlefield. 1 or 2.
let ES = document.getElementById('EnemyStatus'); // The Enemy status HTML element.
let EM = document.getElementById('EnemyAction'); // Enemy Actions HTML element.
let AM = document.getElementById('ActionStatus') // Player Actions HTML element.
let CL = document.getElementById('CombatLog'); // Combat Log HTML element.
let BE = document.getElementById('BattleEnd'); // Battle End HTML element.
let TP = document.getElementById('TutorialScreen'); // Tutorial pop up HTML element.
let IV = document.getElementById('INV'); // Player Inventory HTML element.
let EQ = document.getElementById('EQUIP'); // Player Equipment HTML element.
let ST = document.getElementById('StoreTable'); // Store Inventory HTML element.
let SI = document.getElementById('StatInfo'); // Status Info HTML element.
let GQ = document.getElementById('GuildQuests'); // Guild Quests HTML element.
let CQ = document.getElementById('CompletedQuests'); // Completed Quests HTML element.
let CU = document.getElementById('CurrentQuests'); // Current Quests HTML element.
let CS = document.getElementById('CharacterSheet'); // Character Sheet HTML element.
let currentEnemy = 0; // The enemy currently using a move.
let playerAction = 3;
let playerMaxAction = 3;
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
let canPush = false;
let QuestDifficulty = 0;
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
    "coins": 100,
    "level": 1,
    "skill": 0,
    "enemdefeat": 0,
    "startcoins": 0
};
let dmgplay = [];
let enemy = [];
let deepCopyEnemy = [];

let tut = {
    "win" : false,
    "over" : false,
}

let bosses = {
    "Boss1" : "alive"
}

let locationsTable = [
    {"Title": "Adventurer's Guild", "desc": "You are inside the Adventurer's Guild. Here you can take on new quests and turn in completed ones.", "action": "OPEN QUEST SCREEN", "funktio": "OpenGuild"},
    {"Title": "Rogar's Smithy", "desc": "You are inside the armament store. Here you can purchase equipment", "action": "BROWSE STORE", "funktio": "OpenShop"},
    {"Title": "Marley's Inn", "desc": "You are inside the inn. Here you can sleep to restore your hp. Sleeping costs 5 coins.", "action": "SLEEP", "funktio": "BuyRoom"},
    {"Title": "Enhancement Arcania", "desc": "You are inside the enhancer's shop. Here you can increase your actions for skill points.", "action": "IMPROVE ACTIONS", "funktio": "BuyPoint"},
    {"Title": "Town Sewers", "desc": "You are standing in front of the gate to the sewers. Recommended level: 1", "action": "FIGHT RATS", "funktio": "()=>LookForFight(1)"},
    {"Title": "Town Slums", "desc": "You are standing in front of the gate to the slums. Recommended level: 5", "action": "FIGHT OUTLAWS", "funktio": "()=>LookForFight(2)"},
    {"Title": "Larkian Woods", "desc": "You are standing at the entrance to the woods. Recommended level: 8", "action": "FIGHT ANIMALS", "funktio": "()=>LookForFight(3)"},
    {"Title": "Larkian Lake", "desc": "You are standing by the lake. Recommended level: 11", "action": "FIGHT MONSTERS", "funktio": "()=>LookForFight(4)"},
    {"Title": "Dark Cavern", "desc": "You are standing near a dark cave. Recommended level: 14", "action": "FIGHT SKELETONS", "funktio": "()=>LookForFight(5)"},
    {"Title": "Enchanted Grotto", "desc": "You are standing before a magnificent grotto. Dangerous looking Spirits begin to gather around you. Recommended level: 20", "action": "FIGHT SPIRITS", "funktio": "()=>LookForFight(6)"},
    {"Title": "Time Lord's Temple", "desc": "Before you is the great Time Lord's Temple. Dreadful air is seeping out of the crypt. Rumor has it that the Time Lord is a horrifying vengeful Spirit. Recommended level: 30. WARNING: DO NOT CHALLENGE IF UNDERLEVELED!", "action": "CHALLENGE TIME LORD", "funktio": "()=>BossBattle(1)"},
]

