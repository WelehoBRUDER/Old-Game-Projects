'use strict';
let timer = setInterval(fillBar, speed);
let timer2 = setInterval(fillBar2, espeed);
let timerCheck = setInterval(CheckActions, 10);

function fillBar() {
    if (canIncrease) {
        afbn++;
        afb.style.height = `${afbn}%`;
        afbn = afbn % 101;
    }
}

function fillBar2() {
    if (canIncrease) {
        efbn++;
        efb.style.height = `${efbn}%`;
        efbn = efbn % 101;
    }
}

function CheckActions() {
    if (FIGHT) {
        SetStatusNums();
        if (afbn == 100) {
            canIncrease = false;
            playerTurn = true;
            enemyTurn = false;
            if (!HasChecked) {
                AbilityCheck();
            }
        } else if (afbn == 0) {
            canIncrease = true;
            playerTurn = false;
            enemyTurn = false;
            HasChecked = false;
        } else if (efbn == 100) {
            canIncrease = false;
            playerTurn = false;
            enemyTurn = true;
            StatusCheck();
        } else if (efbn == 0) {
            canIncrease = true;
            playerTurn = false;
            enemyTurn = false;
        }
        if (enemyTurn) {
            enemyAttack();
        }
        if (EnemyStats.health <= 0) {
            canIncrease = false;
            playerTurn = false;
            enemyTurn = false;
            if (Tutorial == true) {
                document.getElementById('NextButton').style.display = 'block';
                document.getElementById('NextButton2').style.display = 'none';
                document.getElementById('NextButton3').style.display = 'none';
                document.getElementById('Victory').style.display = 'block';
                document.getElementById('skelA').style.display = 'none';
                document.getElementById('skelD').style.display = 'block';
                document.getElementById('VictoryText').textContent = 'YOU DEFEATED SKELETON!'
                document.getElementById('VictoryTextBox').style.display = 'block';
                FIGHT = false;
                Tutorial = false;
            } else if (Tutorial == false) {
                document.getElementById('Victory').style.display = 'block';
                document.getElementById('NextButton').style.display = 'none';
                document.getElementById('NextButton2').style.display = 'block';
                document.getElementById('NextButton3').style.display = 'none';
                document.getElementById('VictoryText').textContent = `YOU DEFEATED FOE!`;
                FIGHT = false;
            }

        }
        if (PlayerStats.health <= 0) {
            canIncrease = false;
            playerTurn = false;
            enemyTurn = false;
            document.getElementById('Victory').style.display = 'block';
            document.getElementById('VictoryTextBox').style.display = 'block';
            document.getElementById('NextButton').style.display = 'none';
            document.getElementById('NextButton2').style.display = 'none';
            document.getElementById('NextButton3').style.display = 'block';
            document.getElementById('VictoryText').textContent = `YOU LOST! YOUR SOUL FRAGMENTS DISAPPEAR!`;
            FIGHT = false;
        }
    }
}

function bang() {
    if (playerTurn) {
        hitc = Math.ceil(Math.random() * (100 - 1) + 1);
        if (hitc < 89) {
            critc = Math.ceil(Math.random() * (100 - 1) + 1);
            critc += PlayerStats.crt;
            if(critc < 89) {
            if (EnemyStatusEffects.Sundered == 0) {
                EnemyStats.dmgT = (PlayerStats.dmg * PlayerStats.trustr - EnemyStats.def);
            } else {
                EnemyStats.dmgT = (PlayerStats.dmg * PlayerStats.trustr - EnemyStats.def / 2);
            }
            if (EnemyStats.dmgT <= 0) {
                EnemyStats.dmgT = 1;
            }
            EnemyStats.dmgT = Math.floor(EnemyStats.dmgT);
            EnemyStats.health -= EnemyStats.dmgT;
            updateAll();
        } else {
            EnemyStats.dmgT = (PlayerStats.dmg*PlayerStats.trustr)*2;
            EnemyStats.dmgT = Math.floor(EnemyStats.dmgT);
            EnemyStats.health -= EnemyStats.dmgT;
            ecrit.textContent = 'CRIT!';
            updateAll();
        }
        } else {
            edod.textContent = 'DODGE!';
            EnemyStats.dmgT = 0;
            updateAll();
        }
    }
}

function updateAll() {
    efhbn = 1 - (EnemyStats.maxHealth - EnemyStats.health) / EnemyStats.maxHealth;
    ehfb.style.height = `${efhbn * 100}%`;
    mfbn = 1 - (PlayerStats.maxMana - PlayerStats.mana) / PlayerStats.maxMana;
    mfb.style.width = `${mfbn * 100}%`;
    D2.textContent = `${EnemyStats.dmgT}`
    setTimeout(Hide1, 500);
    afbn = 0;
}

function updateAll2() {
    hfbn = 1 - (PlayerStats.maxHealth - PlayerStats.health) / PlayerStats.maxHealth;
    hfb.style.width = `${hfbn * 100}%`;
    D1.textContent = `${PlayerStats.dmgT}`
    setTimeout(Hide2, 500);
    efbn = 0;
}

function enemyAttack() {
    if (PlayerStatusEffects.Counter > 0) {
        hitc = Math.ceil(Math.random() * (100 - 1) + 1);
        hitc += PlayerStats.dod;
        if (hitc < 89) {
            PlayerStats.dmgT = EnemyStats.dmg * 0.2;
            EnemyStats.dmgT = (PlayerStats.dmg * PlayerStats.trustr * 0.5) - EnemyStats.def;
            if (EnemyStats.dmgT <= 0) {
                EnemyStats.dmgT = 1;
            }
            if (PlayerStats.dmgT <= 0) {
                PlayerStats.dmgT = 1;
            }
            PlayerStats.dmgT = Math.floor(PlayerStats.dmgT);
            EnemyStats.dmgT = Math.floor(EnemyStats.dmgT);
            PlayerStats.health -= PlayerStats.dmgT;
            EnemyStats.health -= EnemyStats.dmgT;
            updateAll();
        } else {
            pdod.textContent = 'DODGE!';
            PlayerStats.dmgT = 0;
        }
    } else {
        hitc = Math.ceil(Math.random() * (100 - 1) + 1);
        hitc += PlayerStats.dod;
        if(hitc < 89) {
        critc = Math.ceil(Math.random() * (100 - 1) + 1);
        if(critc < 89) {
        PlayerStats.dmgT = EnemyStats.dmg - PlayerStats.def;
        if (PlayerStats.dmgT <= 0) {
            PlayerStats.dmgT = 1;
        }
        PlayerStats.dmgT = Math.floor(PlayerStats.dmgT);
        PlayerStats.health -= PlayerStats.dmgT
    } else {
        PlayerStats.dmgT = EnemyStats.dmg*2;
        PlayerStats.dmgT = Math.floor(PlayerStats.dmgT);
    }
    } else {
        pdod.textContent = 'DODGE!';
        PlayerStats.dmgT = 0;
    }
    }
    updateAll2();
}

function Hide1() {
    D2.textContent = '';
    edod.textContent = '';
    ecrit.textContent = '';
}

function Hide2() {
    D1.textContent = '';
    pdod.textContent = '';
    ecrit.textContent = '';
}

function UseSkill(e) {
    if (playerTurn) {
        if (e == 1 && PlayerAbilities.SunderCD == 0) {
            EnemyStats.dmgT = PlayerStats.dmg * 0.6 * PlayerStats.trustr;
            if (EnemyStats.dmgT <= 0) {
                EnemyStats.dmgT = 1;
            }
            EnemyStats.health -= EnemyStats.dmgT;
            PlayerAbilities.SunderCD = 4;
            EnemyStatusEffects.Sundered = 4;
            StatusCheck();
            updateAll();
        } else if (e == 2 && PlayerAbilities.PierceCD == 0) {
            EnemyStats.dmgT = (PlayerStats.dmg * PlayerStats.trustr) * 1.3;
            if (EnemyStats.dmgT <= 0) {
                EnemyStats.dmgT = 1;
            }
            EnemyStats.health -= EnemyStats.dmgT;
            PlayerAbilities.PierceCD = 5;
            updateAll();
        } else if (e == 3 && PlayerAbilities.CounterCD == 0) {
            PlayerAbilities.CounterCD = 7;
            PlayerStatusEffects.Counter = 3;
            StatusCheck();
            updateAll();
        }
    }
}

function AbilityCheck() {
    if (PlayerAbilities.PierceCD > 0) {
        PlayerAbilities.PierceCD--;
    } if (PlayerAbilities.CounterCD > 0) {
        PlayerAbilities.CounterCD--;
    } if (PlayerAbilities.SunderCD > 0) {
        PlayerAbilities.SunderCD--;
    }
    HasChecked = true;
}

function StatusCheck() {
    if (EnemyStatusEffects.Sundered > 0) {
        EnemyStatusEffects.Sundered--;
        document.getElementById('stat1').textContent = `Sundered for ${EnemyStatusEffects.Sundered} turns, reducing def by half!`
    } else if (EnemyStatusEffects.Sundered == 0) {
        document.getElementById('stat1').textContent = '';
    }
    if (PlayerStatusEffects.Counter > 0) {
        PlayerStatusEffects.Counter--;
        document.getElementById('pstat1').textContent = `Guard up for ${PlayerStatusEffects.Counter} turns, reducing dmg by 80% and countering!`
    } else if (PlayerStatusEffects.Counter == 0) {
        document.getElementById('pstat1').textContent = '';
    }
}

function SkillMenu() {
    SkillsOPEN = !SkillsOPEN;
    if (SkillsOPEN) {
        document.getElementById('SkillScreenBox').style.display = 'block';
    } else {
        document.getElementById('SkillScreenBox').style.display = 'none';
    }
    document.getElementById('MagicScreenBox').style.display = 'none';
    MagicOPEN = false;
    document.getElementById('SpecialScreenBox').style.display = 'none';
    SpecialsOPEN = false;
}

function SpecialMenu() {
    SpecialsOPEN = !SpecialsOPEN;
    if (SpecialsOPEN) {
        document.getElementById('SpecialScreenBox').style.display = 'block';
    } else {
        document.getElementById('SpecialScreenBox').style.display = 'none';
    }
    document.getElementById('MagicScreenBox').style.display = 'none';
    MagicOPEN = false;
    document.getElementById('SkillScreenBox').style.display = 'none';
    SkillsOPEN = false;
}

function MagicMenu() {
    MagicOPEN = !MagicOPEN;
    if (MagicOPEN) {
        document.getElementById('MagicScreenBox').style.display = 'block';
    } else {
        document.getElementById('MagicScreenBox').style.display = 'none';
    }
    document.getElementById('SkillScreenBox').style.display = 'none';
    SpecialsOPEN = false;
    document.getElementById('SpecialScreenBox').style.display = 'none';
    SkillsOPEN = false;
}

function CastMagic(f) {
    if (f == 1 && playerTurn) {
        if (PlayerStats.mana >= 50) {
            let divider = Math.ceil(Math.random() * (10 - 5) + 5);
            PlayerStats.health += Math.floor(PlayerStats.maxHealth / divider);
            if (PlayerStats.health > PlayerStats.maxHealth) {
                PlayerStats.health = PlayerStats.maxHealth;
            }
            PlayerStats.mana -= 50;
            hfbn = 1 - (PlayerStats.maxHealth - PlayerStats.health) / PlayerStats.maxHealth;
            hfb.style.width = `${hfbn * 100}%`;
            updateAll();
        }
    }
}

function SetStatusNums() {
    document.getElementById('phealth').textContent = `${Math.floor(PlayerStats.health)}/${PlayerStats.maxHealth}`;
    document.getElementById('pmana').textContent = `${Math.floor(PlayerStats.mana)}/${PlayerStats.maxMana}`;
    document.getElementById('ehealth').textContent = `${Math.floor(EnemyStats.health)}/${EnemyStats.maxHealth}`;
}
