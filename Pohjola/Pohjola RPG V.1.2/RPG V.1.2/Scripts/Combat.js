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
            if (EnemyType == 10) {
                canIncrease = false;
                playerTurn = false;
                enemyTurn = false;
                updateAll2();
                updateAll();
                document.getElementById('Victory').style.display = 'block';
                document.getElementById('NextButton').style.display = 'none';
                document.getElementById('NextButton2').style.display = 'block';
                document.getElementById('NextButton3').style.display = 'none';
                document.getElementById('VictoryTextBox').style.display = 'block';
                document.getElementById('VictoryText').textContent = `YOU DEFEATED ARIDOMOS!!`;
                document.getElementById('bos1').style.display = 'none';
                document.getElementById('bos1D').style.display = 'block';
                BossesBeaten.Aridomos = true;
                FIGHT = false;
            } else {
                canIncrease = false;
                playerTurn = false;
                enemyTurn = false;
                updateAll2();
                updateAll();
                if (Tutorial == true) {
                    document.getElementById('NextButton').style.display = 'block';
                    document.getElementById('NextButton2').style.display = 'none';
                    document.getElementById('NextButton3').style.display = 'none';
                    document.getElementById('Victory').style.display = 'block';
                    document.getElementById('skelA').style.display = 'none';
                    document.getElementById('skelD').style.display = 'block';
                    document.getElementById('bos1').style.display = 'none';
                    document.getElementById('bos1D').style.display = 'none';
                    document.getElementById('VictoryText').textContent = 'YOU DEFEATED SKELETON!'
                    document.getElementById('VictoryTextBox').style.display = 'block';
                    FIGHT = false;
                    Tutorial = false;
                } else if (Tutorial == false) {
                    document.getElementById('Victory').style.display = 'block';
                    document.getElementById('NextButton').style.display = 'none';
                    document.getElementById('NextButton2').style.display = 'block';
                    document.getElementById('NextButton3').style.display = 'none';
                    SetEnemyDeaths();
                    document.getElementById('VictoryText').textContent = `YOU DEFEATED FOE!`;
                    FIGHT = false;
                }
            }

        }
        if (PlayerStats.health <= 0) {
            if (Tutorial) {
                location.reload();
            }
            canIncrease = false;
            playerTurn = false;
            enemyTurn = false;
            updateAll2();
            updateAll();
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
            if (critc < 89) {
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
                CreateCombatEvent(1);
                updateAll();
            } else {
                EnemyStats.dmgT = (PlayerStats.dmg * PlayerStats.trustr) * 2;
                EnemyStats.dmgT = Math.floor(EnemyStats.dmgT);
                EnemyStats.health -= EnemyStats.dmgT;
                ecrit.textContent = 'CRIT!';
                CreateCombatEvent(2);
                updateAll();
            }
        } else {
            edod.textContent = 'DODGE!';
            EnemyStats.dmgT = 0;
            CreateCombatEvent(3);
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
    if (EnemyType == 10) {
        Boss1Attack();
    } else {
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
                CreateCombatEvent(4);
                updateAll();
            } else {
                pdod.textContent = 'DODGE!';
                PlayerStats.dmgT = 0;
                CreateCombatEvent(6);
            }
        } else {
            hitc = Math.ceil(Math.random() * (100 - 1) + 1);
            hitc += PlayerStats.dod;
            if (hitc < 89) {
                critc = Math.ceil(Math.random() * (100 - 1) + 1);
                if (critc < 89) {
                    PlayerStats.dmgT = EnemyStats.dmg - PlayerStats.def;
                    if (PlayerStats.dmgT <= 0) {
                        PlayerStats.dmgT = 1;
                    }
                    PlayerStats.dmgT = Math.floor(PlayerStats.dmgT);
                    PlayerStats.health -= PlayerStats.dmgT
                    CreateCombatEvent(4);
                } else {
                    PlayerStats.dmgT = EnemyStats.dmg * 2;
                    PlayerStats.dmgT = Math.floor(PlayerStats.dmgT);
                    PlayerStats.health -= PlayerStats.dmgT
                    CreateCombatEvent(5);
                }
            } else {
                pdod.textContent = 'DODGE!';
                PlayerStats.dmgT = 0;
                CreateCombatEvent(6);
            }
        }
        updateAll2();
    }
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
            EnemyStats.dmgT = Math.floor(EnemyStats.dmgT)
            EnemyStats.health -= EnemyStats.dmgT;
            PlayerAbilities.SunderCD = 4;
            EnemyStatusEffects.Sundered = 4;
            CreateCombatEvent(7);
            StatusCheck();
            updateAll();
        } else if (e == 2 && PlayerAbilities.PierceCD == 0) {
            EnemyStats.dmgT = (PlayerStats.dmg * PlayerStats.trustr) * 1.3;
            if (EnemyStats.dmgT <= 0) {
                EnemyStats.dmgT = 1;
            }
            EnemyStats.dmgT = Math.floor(EnemyStats.dmgT)
            EnemyStats.health -= EnemyStats.dmgT;
            PlayerAbilities.PierceCD = 5;
            CreateCombatEvent(8);
            updateAll();
        } else if (e == 3 && PlayerAbilities.CounterCD == 0) {
            PlayerAbilities.CounterCD = 7;
            PlayerStatusEffects.Counter = 3;
            CreateCombatEvent(9);
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
        document.getElementById('stat1').textContent = `Sundered for ${EnemyStatusEffects.Sundered} turns, reducing def by half!`;
    } else if (EnemyStatusEffects.Sundered == 0) {
        document.getElementById('stat1').textContent = '';
    }
    if (PlayerStatusEffects.Counter > 0) {
        PlayerStatusEffects.Counter--;
        document.getElementById('pstat1').textContent = `Guard up for ${PlayerStatusEffects.Counter} turns, reducing dmg by 80% and countering!`;
    } else if (PlayerStatusEffects.Counter == 0) {
        document.getElementById('pstat1').textContent = '';
    }
}

function BossStatusCheck() {
    if (BossAbilities.Temper > 0) {
        document.getElementById('stat2').textContent = `Cast Temper for ${BossAbilities.Temper} turns, increasing damage by 50%!`;
    } else if (BossAbilities.Temper == 0) {
        document.getElementById('stat2').textContent = ``;
    }
    if (BossAbilities.Harden > 0) {
        document.getElementById('stat3').textContent = `Cast Harden for ${BossAbilities.Harden} turns, doubling defense!`;
    } else if (BossAbilities.Harden == 0) {
        document.getElementById('stat3').textContent = ``;
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
            phealed = Math.floor(PlayerStats.maxHealth / divider);
            PlayerStats.health += Math.floor(PlayerStats.maxHealth / divider);
            if (PlayerStats.health > PlayerStats.maxHealth) {
                PlayerStats.health = PlayerStats.maxHealth;
            }
            PlayerStats.mana -= 50;
            hfbn = 1 - (PlayerStats.maxHealth - PlayerStats.health) / PlayerStats.maxHealth;
            hfb.style.width = `${hfbn * 100}%`;
            CreateCombatEvent(13);
            updateAll();
        }
    }
}

function SetStatusNums() {
    document.getElementById('phealth').textContent = `${Math.floor(PlayerStats.health)}/${PlayerStats.maxHealth}`;
    document.getElementById('pmana').textContent = `${Math.floor(PlayerStats.mana)}/${PlayerStats.maxMana}`;
    document.getElementById('ehealth').textContent = `${Math.floor(EnemyStats.health)}/${EnemyStats.maxHealth}`;
}

function Boss1Attack() {
    if (BossAbilities.HardenCD > 0) {
        BossAbilities.HardenCD--;
        if (BossAbilities.Harden > 0) {
            BossAbilities.Harden--;
            if (BossAbilities.Harden == 0) {
                EnemyStats.def = EnemyStats.def / 2;
            }
            BossStatusCheck();
        }
    }
    if (BossAbilities.TemperCD > 0) {
        BossAbilities.TemperCD--;
        if (BossAbilities.Temper > 0) {
            BossAbilities.Temper--;
            if (BossAbilities.Temper == 0) {
                BossAbilities.TemperATK = 0;
            }
            BossStatusCheck();
        }
    }
    if (EnemyStats.health < 500 && BossAbilities.Heal == 0) {
        EnemyStats.health += EnemyStats.maxHealth * 0.4;
        PlayerStats.dmgT = 0;
        BossAbilities.Heal = 1;
        CreateCombatEvent(12);
    }
    else if (EnemyStatusEffects.Sundered > 1 && BossAbilities.HardenCD == 0) {
        BossAbilities.HardenCD = 4;
        BossAbilities.Harden = 3;
        EnemyStats.def = EnemyStats.def * 2;
        CreateCombatEvent(10);
        BossStatusCheck();
    } else if (BossAbilities.TemperCD == 0) {
        BossAbilities.TemperCD = 6;
        BossAbilities.Temper = 3;
        BossAbilities.TemperATK = 1.5;
        CreateCombatEvent(11);
        BossStatusCheck();
    } else if (EnemyStats.health < EnemyStats.maxHealth / 2 && BossAbilities.HardenCD == 0) {
        BossAbilities.HardenCD = 4;
        BossAbilities.Harden = 3;
        EnemyStats.def = EnemyStats.def * 2;
        BossStatusCheck();
    } else {
        if (PlayerStatusEffects.Counter > 0) {
            hitc = Math.ceil(Math.random() * (100 - 1) + 1);
            hitc += PlayerStats.dod;
            if (hitc < 93) {
                PlayerStats.dmgT = EnemyStats.dmg * BossAbilities.TemperATK * 0.2;
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
                CreateCombatEvent(4);
                updateAll();
            } else {
                pdod.textContent = 'DODGE!';
                PlayerStats.dmgT = 0;
                CreateCombatEvent(6);
            }
        } else {
            hitc = Math.ceil(Math.random() * (100 - 1) + 1);
            hitc += PlayerStats.dod;
            if (hitc < 93) {
                critc = Math.ceil(Math.random() * (100 - 1) + 1);
                if (critc < 85) {
                    PlayerStats.dmgT = EnemyStats.dmg * BossAbilities.TemperATK - PlayerStats.def;
                    if (PlayerStats.dmgT <= 0) {
                        PlayerStats.dmgT = 1;
                    }
                    PlayerStats.dmgT = Math.floor(PlayerStats.dmgT);
                    PlayerStats.health -= PlayerStats.dmgT
                    CreateCombatEvent(4);
                } else {
                    PlayerStats.dmgT = EnemyStats.dmg * BossAbilities.TemperATK * 2;
                    PlayerStats.dmgT = Math.floor(PlayerStats.dmgT);
                    PlayerStats.health -= PlayerStats.dmgT
                    CreateCombatEvent(5);
                }
            } else {
                pdod.textContent = 'DODGE!';
                PlayerStats.dmgT = 0;
                CreateCombatEvent(6);
            }
        }
    }
    updateAll2();
}

function CreateCombatEvent(n) {
    if (n == 1) {
        let p = document.createElement('p');
        p.textContent = `Player hits enemy for ${EnemyStats.dmgT} damage!`
        p.classList.add('CombatLog');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 2) {
        let p = document.createElement('p');
        p.textContent = `Player hits enemy critically for ${EnemyStats.dmgT} damage!`
        p.classList.add('CombatLog');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 3) {
        let p = document.createElement('p');
        p.textContent = `Enemy dodges player's blow!`
        p.classList.add('CombatLog');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 4) {
        let p = document.createElement('p');
        p.textContent = `Enemy hits player for ${PlayerStats.dmgT} damage!`;
        p.classList.add('CombatLogEn');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 5) {
        let p = document.createElement('p');
        p.textContent = `Enemy hits player critically for ${PlayerStats.dmgT} damage!`
        p.classList.add('CombatLogEn');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 6) {
        let p = document.createElement('p');
        p.textContent = `Player dodges enemy's blow!`
        p.classList.add('CombatLogEn');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 7) {
        let p = document.createElement('p');
        p.textContent = `Player uses Sundering Slash and cripples enemy's defense!`
        p.classList.add('CombatLogAbi');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 8) {
        let p = document.createElement('p');
        p.textContent = `Player uses Pierce Through and deals ${EnemyStats.dmgT} damage!`
        p.classList.add('CombatLogAbi');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 9) {
        let p = document.createElement('p');
        p.textContent = `Player casts Shields up!`
        p.classList.add('CombatLogBuff');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 10) {
        let p = document.createElement('p');
        p.textContent = `Aridomos casts Harden, doubling his defense!`
        p.classList.add('CombatLogBuffEn');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 11) {
        let p = document.createElement('p');
        p.textContent = `Aridomos casts Temper, increasing damage by 50%!`
        p.classList.add('CombatLogBuffEn');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 12) {
        let p = document.createElement('p');
        p.textContent = `Aridomos casts Final Heal and recovers ${EnemyStats.health * 0.4} HP!`
        p.classList.add('CombatLogAbiEn');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 13) {
        let p = document.createElement('p');
        p.textContent = `Player casts Heal and recovers ${phealed} HP!`
        p.classList.add('CombatLogAbi');
        log.insertBefore(p, log.firstChild);
    }

}
