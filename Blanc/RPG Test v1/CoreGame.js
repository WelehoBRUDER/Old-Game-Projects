'use strict';
// Combat Stats
let hp = 0;
let mhp = 0; // Maximum HP when fully healed
let sta = 0;
let msta = 0; // Maximum stamina when recovered
let mp = 0;
let mmp = 0; // Maximum MP when recovered;
// Base Stats
let vit = 5;
let str = 5;
let agi = 5;
let int = 5;
// Secondary Stats
let dmg = 0;
let eva = 0;
let dex = 0;
let def = 0;
// Stat Points
let stp = 10;
// Enemy stats
let ehp = 0;
let emhp = 0;
let esta = 0;
let emsta = 0;
let emp = 0;
let emmp = 0;
let edmg = 0;
let eeva = 0;
let edex = 0;
let edef = 0;
// Enemy type
let type = 0;
// Combat defense
let cDef = 0;
let ecDef = 0;
// Combat roll
let dice = 3;
let cd = 0;
// Player experience
let exp = 0;
let lvl = 1; // Player level
let rlvl = 0; // Level used for information
let rExp = REXP[rlvl].req; // Required experience for level up
// Misc variables
let edead = false; // Enemy dead or alive
let phit = false; // Player has been hit or not
let ehit = false; // Enemy has been hit or not
let power = false; // These two variables are for the explainAll function
let spell = false;
let spellpower = int;
// Weapon type
let wp = 0;
// Whether a menu is open
open = false;
// Which one is it?
let pUsed = 0;
let napped = false;




document.addEventListener('DOMContentLoaded', startUp);

function startUp() { // This function calls other functions to work
    AssignPoints();
    setEnemy();
    Refresh();
    setMax();
    document.getElementById('condition').textContent = '';
}

function AssignPoints() { // This function assigns player stats properly
    mhp = vit * 10 + str * 3 + agi + int;
    msta = agi * 10 + str * 2 + vit;
    mmp = int * 10;
    hp = mhp;
    sta = msta;
    mp = mmp;
    spellpower = int;
    dmg = Math.ceil(5 * str / 2 + agi * 3 / 4);
    eva = Math.ceil(10 * agi / 3);
    dex = Math.ceil(10 * agi / 2 * str / 5);
    def = Math.ceil(50 * vit / 3 + str * 2 / 5);
}

function Upgrade(e) { // This function increases player stats
    if (e == 1 && stp > 0) {
        vit++;
    } else if (e == 2 && stp > 0) {
        str++;
    } else if (e == 3 && stp > 0) {
        agi++;
    } else if (e == 4 && stp > 0) {
        int++;
    }
    if (stp != 0) {
        stp--;
        clearAll();
        startUp();
    }
}

function Refresh() { // This function updates all visible variables on the screen.
    // Max Stamina
    if (sta > msta) {
        sta = msta;
    }
    // Player stats
    document.getElementById('HP').textContent = ` HP\xa0\xa0\xa0 ${hp} / ${mhp} `;
    document.getElementById('STA').textContent = ` STA            ${sta} / ${msta} `;
    document.getElementById('MP').textContent = ` MP\xa0\xa0     ${mp} / ${mmp} `;
    document.getElementById('VIT').textContent = `Vitality:\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \xa0 \xa0     ${vit}`
    document.getElementById('STR').textContent = `Strength:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  ${str}`
    document.getElementById('AGI').textContent = `Agility:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ${agi}`
    document.getElementById('INT').textContent = `Intelligence:\xa0\xa0 ${int}`
    document.getElementById('DMG').textContent = `Base damage:\xa0\xa0\xa0  ${dmg}`;
    document.getElementById('EVA').textContent = `Base evasion:\xa0\xa0\xa0\xa0  ${eva}`;
    document.getElementById('DEX').textContent = `Base dexterity:\xa0\xa0 ${dex}`;
    document.getElementById('DEF').textContent = `Base defense:\xa0\xa0\xa0\xa0\xa0 ${def}`;
    document.getElementById('STP').textContent = `Remaining stat points:\xa0\xa0 ${stp}`;
    // Enemy stats are called after this
    document.getElementById('eHP').textContent = ` HP\xa0\xa0\xa0 ${ehp} / ${emhp} `;
    document.getElementById('eSTA').textContent = ` STA            ${esta} / ${emsta} `;
    document.getElementById('eMP').textContent = ` MP\xa0\xa0     ${emp} / ${emmp} `;
    document.getElementById('eDMG').textContent = `Base damage:\xa0\xa0\xa0  ${edmg}`;
    document.getElementById('eEVA').textContent = `Base evasion:\xa0\xa0\xa0\xa0  ${eeva}`;
    document.getElementById('eDEX').textContent = `Base dexterity:\xa0\xa0 ${edex}`;
    document.getElementById('eDEF').textContent = `Base defense:\xa0\xa0\xa0\xa0\xa0 ${edef}`;
    document.getElementById('enemy').textContent = `Enemy ${enemies[type].name}`;
    document.getElementById('level').textContent = `Level -  ${lvl}`;
    document.getElementById('xp').textContent = `Experience\xa0\xa0 ${exp} / ${rExp}`;
}

function setMax() { // Sets maximum stat points
    if (mhp > 1200) {
        mhp = 1200;
    }
    if (msta > 800) {
        msta = 800;
    }
    if (mmp > 1000) {
        mmp = 1000;
    }
    hp = mhp;
    sta = msta;
    mp = mmp;
    Refresh();

}

function setEnemy() { // This function calls the enemy stats from enemy list as well as the picture

    if (!edead) {
        Image();
        ehp = enemies[type].hp;
        emhp = enemies[type].hp;
        esta = enemies[type].sta;
        emsta = enemies[type].sta;
        emp = enemies[type].mp;
        emmp = enemies[type].mp;
        edmg = enemies[type].dmg;
        eeva = enemies[type].eva;
        edex = enemies[type].dex;
        edef = enemies[type].def;
    }

}
function Attack(g) { // Attacks the enemy and calls for damage calculation
    console.log(cd)
    if (stp === 0 && !edead && g === 1) {
        if (sta > 4) {
            sta = sta - 5;
            power = false;
            spell = false;
            if (cd > 0) {
                cd--;
            }
            calculateDamage(1);
            document.getElementById('alert').textContent = '';
            Refresh();
        }
    } else if (stp > 0) {
        document.getElementById('alert').textContent = `You have ${stp} stat points remaining. Use them!`;
    }
    else if (edead) {
        document.getElementById('alert').textContent = `You can't attack a corpse!`;
    }
    else if (g === 2 && !edead && stp === 0 && cd === 0) {
        pUsed = 0;
        if (sta > powers[pUsed].STAc) {
            sta = sta - powers[pUsed].STAc;
            power = true;
            spell = false;
            if (cd > 0) {
                cd--;
            }
            cd = powers[pUsed].cd;
            calculateDamage(3);
            document.getElementById('alert').textContent = '';
            Refresh();
        }
    } else if (g === 3 && !edead && stp === 0 && cd === 0) {
        console.log('hello!')
        pUsed = 1;
        if (sta > powers[pUsed].STAc) {
            sta = sta - powers[pUsed].STAc;
            power = true;
            spell = false;
            if (cd > 0) {
                cd--;
            }
            cd = powers[pUsed].cd;
            console.log(cd)
            calculateDamage(3);
            document.getElementById('alert').textContent = '';
            Refresh();
        }
    } else if (g === 7 && !edead && stp === 0) {
        if (mp > spells[0].MPc) {
            mp = mp - spells[0].MPc - 1;
            power = false;
            spell = true;
            if (cd > 0) {
                cd--;
            }
            calculateDamage(4);
            document.getElementById('alert').textContent = '';
            Refresh();
        }
    }
}

function calculateDamage(f) { // This function calculates damage done to player and enemy
    if (f === 1 && !power && !spell) {
        if (dex > eeva) {
            ecDef = 1 - edef / 1000;
            ehp = Math.ceil(ehp - dmg * ecDef);
            ehit = true;
            checkStatus();
            calculateDamage(2);
        } else {
            ehit = false;
        }
    } else if (f === 2) {
        if (edex > eva && esta > 4 && !edead) {
            esta = esta - 5;
            cDef = 1 - def / 1000;
            if (cDef < 0.5) {
                cDef = 0.5;
            }
            hp = Math.ceil(hp - edmg * cDef);
            phit = true;
        } else if (edex <= eva) {
            dice = Math.floor((Math.random() * 10) + 1);
            if (dice >= 5 && esta > 4 && !edead) {
                esta = esta - 5;
                cDef = 1 - def / 1000;
                hp = Math.ceil(hp - edmg * cDef);
                phit = true;
            } else {
                phit = false;
            }
        }
    }
    else if (f === 3) {
        if (dex > eeva && pUsed != 1) {
            ehp = Math.ceil(ehp - dmg * powers[pUsed].DMGx);
            ehit = true;
            checkStatus();
            calculateDamage(2);
        } else if (dex > eeva && pUsed === 1) {
            ecDef = 1 - edef / 1000;
            ehp = Math.ceil(ehp - dmg * powers[pUsed].DMGx);
            ehit = true;
            checkStatus();
            calculateDamage(2);
        } else {
            ehit = false;
        }
    } else if (f === 4) {
        ecDef = 1 - edef / 1000;
        ehp = Math.ceil(ehp - (dmg + spellpower) * spells[0].DMGx * ecDef);
        ehit = true;
        checkStatus();
        calculateDamage(2);
    }
    explainAll();
    checkStatus();
}
function checkStatus() { // This function checks whether the player or the enemy has died
    if (hp < 0) {
        hp = 0;
        gameOver();
    }
    if (ehp < 0) {
        ehp = 0;
        exp = exp + enemies[type].xp;
        document.getElementById('condition').textContent = `You have defeated ${enemies[type].name}!`;
        edead = true;
        document.getElementById('e1').textContent = '';
        phit = false;
        checkLevel();
        Refresh();
    }
}
function checkLevel() { // This function checks leveling up
    if (exp >= rExp) {
        lvl++;
        exp = exp - rExp;
        stp = stp + 15;
        rlvl++;
        rExp = REXP[rlvl].req;
    }
}
function again() { // This function allows you to fight the same enemy again
    if (edead) {
        napped = false;
        edead = false;
        setEnemy();
        Refresh();
        clearAll();
    }
}
function continueE() { // This function allows you to continue to the next enemy
    if (edead) {
        napped = false;
        edead = false;
        if (enemies.length - 1 > type) {
            type++;
        }
        setEnemy();
        Refresh();
        clearAll();
    }
}
function explainAll() { // This function explains what has happened recently in the battle
    if (phit) {
        document.getElementById('e1').textContent = `${enemies[type].name} attacks you, dealing ${Math.ceil(edmg * cDef)} damage!`;
    }
    if (ehit) {
        console.log(spell);
        if (!power && !spell) {
            document.getElementById('p1').textContent = `You attack ${enemies[type].name}, with ${weapons[wp].name} dealing ${Math.ceil(dmg * ecDef)} damage!`;
        } else if (power && !spell) {
            document.getElementById('p1').textContent = `You attack ${enemies[type].name}, with ${weapons[wp].name} using ${powers[pUsed].name} dealing ${Math.ceil(dmg * powers[pUsed].DMGx)} damage!`;
        } else if (!power && spell) {
            document.getElementById('p1').textContent = `You use ${spells[0].name} on ${enemies[type].name} and deal ${Math.ceil((dmg + spellpower) * spells[0].DMGx * ecDef)} damage!`;
        }
    }
    if (!phit) {
        document.getElementById('e1').textContent = `${enemies[type].name} attacks, but misses!`;
    }
    if (!ehit) {
        document.getElementById('p1').textContent = `You attack ${enemies[type].name}, with ${weapons[wp].name} but miss!`
    }

}
function rest() {
    if (stp === 0 && sta < msta && !edead) {
        calculateDamage(2);
        sta = sta + 25;
        document.getElementById('p1').textContent = `You take a rest and recover 25 stamina!`;
        OverMax();
        Refresh();
    } else if (stp === 0 && edead && !napped) {
        clearAll();
        hp = hp + 15;
        sta = sta + 15;
        napped = true;
        OverMax();
        Refresh();
        document.getElementById('p1').textContent = `You recover some health and stamina by taking a nap!`;
    }
    else if (napped) {
        document.getElementById('p1').textContent = `You've already napped enough!`
    }
    else {
        clearAll();
    }
}
function clearAll() { // This function clears all messages on screen
    document.getElementById('p1').textContent = ``;
    document.getElementById('e1').textContent = ``;
    document.getElementById('alert').textContent = '';
    document.getElementById('condition').textContent = '';
}
function gameOver() {
    document.getElementById('game').style.display = 'none';
    document.getElementById('OOOOOOOOF').style.display = 'block';
    document.getElementById('whydead').textContent = `| You were slain by ${enemies[type].name} | You were level ${lvl} | You were using ${weapons[wp].name} as your weapon |`;
}
function Powers() {
    if (!open) {
        document.getElementById('combatP1').style.display = 'block';
        document.getElementById('combatP1').title = `Stamina cost: ${powers[0].STAc}, Cooldown: ${powers[0].cd}`;
        if (str > 14) {
            document.getElementById('combatP2').style.display = 'block';
            document.getElementById('combatP2').title = `Stamina cost: ${powers[1].STAc}, Cooldown: ${powers[1].cd}`;
        }
        document.getElementById('combatS1').style.display = 'none';
        open = true;
    } else if (open) {
        document.getElementById('combatP1').style.display = 'none';
        document.getElementById('combatP2').style.display = 'none';
        document.getElementById('combatS1').style.display = 'none';
        open = false;
    }
}
function Spells() {
    if (!open) {
        document.getElementById('combatS1').style.display = 'block';
        document.getElementById('combatS1').title = `Mana cost: ${spells[0].MPc}`;
        document.getElementById('combatP1').style.display = 'none';
        document.getElementById('combatP2').style.display = 'none';
        open = true;
    } else if (open) {
        document.getElementById('combatS1').style.display = 'none';
        document.getElementById('combatP1').style.display = 'none';
        document.getElementById('combatP2').style.display = 'none';
        open = false;
    }
}
function OverMax() {
    if (hp > mhp) {
        hp = mhp;
    }
    if (sta > msta) {
        sta = msta;
    }
    if (mp > mmp) {
        mp = mmp;
    }
}
function Image() {
    if (type === 0) {
        document.getElementById('portrait2').src = 'images/Enemies/goblin.png';
    }
    else if (type === 1) {
        document.getElementById('portrait2').src = 'images/Enemies/orc.png';
    }
}
