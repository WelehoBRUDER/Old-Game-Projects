const enemyBank = [
    {"id": "rat1", "name": "Rat", "power": 5, "startdef": 3, "def": 3, "hp": 25, "maxHP": 25, "moves": "beastmoves", "dead": false, "exp": 4, "actions": 3, "resist": "wind", "weak": "none", "endexp": 4, "status": "", "statusDMG": 0, "statusLAST": 0, "dead2": false},
    {"id": "rat2", "name": "Rabid Rat", "power": 7, "startdef": 2, "def": 2, "hp": 30, "maxHP": 30, "moves": "beastmoves", "dead": false, "exp": 6, "actions": 3, "resist": "wind", "weak": "none", "endexp": 6, "status": "", "statusDMG": 0, "statusLAST": 0, "dead2": false},
    {"id": "rat3", "name": "Monster Rat", "power": 10, "startdef": 5, "def": 5, "hp": 45, "maxHP": 45, "moves": "beastmoves", "dead": false, "exp": 8, "actions": 3, "resist": "wind", "weak": "none", "endexp": 8, "status": "", "statusDMG": 0, "statusLAST": 0, "dead2": false},
    {"id": "bandit1", "name": "Marauder", "power": 12, "startdef": 8, "def": 8, "hp": 55, "maxHP": 55, "moves": "bandit", "dead": false, "exp": 12, "actions": 3, "resist": "water", "weak": "fire", "endexp": 12, "status": "", "statusDMG": 0, "statusLAST": 0, "dead2": false},
    {"id": "bandit2", "name": "Brigand", "power": 14, "startdef": 8, "def": 8, "hp": 65, "maxHP": 65, "moves": "bandit", "dead": false, "exp": 16, "actions": 3, "resist": "water", "weak": "fire", "endexp": 16, "status": "", "statusDMG": 0, "statusLAST": 0, "dead2": false},
    {"id": "bandit3", "name": "Bandit Chief", "power": 16, "startdef": 8, "def": 8, "hp": 75, "maxHP": 75, "moves": "bandit", "dead": false, "exp": 20, "actions": 3, "resist": "wind", "weak": "lightning", "endexp": 20, "status": "", "statusDMG": 0, "statusLAST": 0, "dead2": false},
    {"id": "animal1", "name": "Demon Fox", "power": 11, "startdef": 4, "def": 4, "hp": 50, "maxHP": 50, "moves": "animals", "dead": false, "exp": 12, "actions": 3, "resist": "water wind lightning", "weak": "fire", "endexp": 12, "status": "", "statusDMG": 0, "statusLAST": 0, "dead2": false},
    {"id": "animal2", "name": "Demon Wolf", "power": 17, "startdef": 5, "def": 5, "hp": 80, "maxHP": 80, "moves": "animals", "dead": false, "exp": 25, "actions": 3, "resist": "water wind lightning", "weak": "fire", "endexp": 25, "status": "", "statusDMG": 0, "statusLAST": 0, "dead2": false},
    {"id": "animal3", "name": "Demon Bear", "power": 24, "startdef": 12, "def": 12, "hp": 100, "maxHP": 100, "moves": "animals", "dead": false, "exp": 40, "actions": 3, "resist": "wind lightning", "weak": "water", "endexp": 40, "status": "", "statusDMG": 0, "statusLAST": 0, "dead2": false},
    {"id": "monster1", "name": "Larkian Woods Spirit", "power": 35, "startdef": 4, "def": 4, "hp": 75, "maxHP": 75, "moves": "mons", "dead": false, "exp": 55, "actions": 3, "resist": "wind lightning water", "weak": "fire", "endexp": 55, "status": "", "statusDMG": 0, "statusLAST": 0, "dead2": false},
    {"id": "monster2", "name": "Demonic Land-Shark", "power": 27, "startdef": 14, "def": 14, "hp": 130, "maxHP": 130, "moves": "mons", "dead": false, "exp": 70, "actions": 3, "resist": "wind fire water", "weak": "lightning", "endexp": 70, "status": "", "statusDMG": 0, "statusLAST": 0, "dead2": false},
]

const beastmoves = [
    {"id": "cut", "name": "Scratch", "dmg": 1, "cost": 1},
    {"id": "bit", "name": "Bite", "dmg": 1.1, "cost": 1},
    {"id": "swip", "name": "Swipe", "dmg": 0.9, "cost": 1}
]

const bandit = [
    {"id": "cut", "name": "Kick", "dmg": 1.3, "cost": 1},
    {"id": "bit", "name": "Punch", "dmg": 1.1, "cost": 1},
    {"id": "swip", "name": "Slash", "dmg": 1, "cost": 1},
    {"id": "swip", "name": "Stab", "dmg": 1.2, "cost": 1}
]

const animals = [
    {"id": "cut", "name": "Claw", "dmg": 1, "cost": 1},
    {"id": "bit", "name": "Bite", "dmg": 1.1, "cost": 1},
    {"id": "swip", "name": "Maul", "dmg": 1.3, "cost": 1}
]

const mons = [
    {"id": "cut", "name": "Crush", "dmg": 1, "cost": 1},
    {"id": "bit", "name": "Sting", "dmg": 1.1, "cost": 1},
    {"id": "swip", "name": "Rip", "dmg": 1.2, "cost": 1}
]