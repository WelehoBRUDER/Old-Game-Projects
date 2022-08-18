'use strict';
let timer = setInterval(fillBar, speed);
let timer2 = setInterval(fillBar2, espeed);
let timerCheck = setInterval(CheckActions, 5);

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
            CheckPoison();
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
                document.getElementById('AgainButton').style.display = 'none';
                document.getElementById('VictoryTextBox').style.display = 'block';
                document.getElementById('VictoryText').textContent = `YOU DEFEATED ARIDOMOS!!`;
                document.getElementById('bos1').style.display = 'none';
                document.getElementById('bos1D').style.display = 'block';
                BossesBeaten.Aridomos = true;
                FIGHT = false;
            } else if (EnemyType == 20) {
                canIncrease = false;
                playerTurn = false;
                enemyTurn = false;
                updateAll2();
                updateAll();
                document.getElementById('Victory').style.display = 'block';
                document.getElementById('NextButton').style.display = 'none';
                document.getElementById('NextButton2').style.display = 'block';
                document.getElementById('NextButton3').style.display = 'none';
                document.getElementById('AgainButton').style.display = 'none';
                document.getElementById('VictoryTextBox').style.display = 'block';
                document.getElementById('VictoryText').textContent = `YOU DEFEATED ASMOND!!`;
                BossesBeaten.Asmond = true;
                FIGHT = false;
            }
            else {
                canIncrease = false;
                playerTurn = false;
                enemyTurn = false;
                updateAll2();
                updateAll();
                if (Tutorial == true) {
                    document.getElementById('NextButton').style.display = 'block';
                    document.getElementById('NextButton2').style.display = 'none';
                    document.getElementById('NextButton3').style.display = 'none';
                    document.getElementById('AgainButton').style.display = 'none';
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
                    document.getElementById('AgainButton').style.display = 'block';
                    SetEnemyDeaths();
                    document.getElementById('VictoryText').textContent = `YOU DEFEATED ${EnemName.toUpperCase()}`;
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
            document.getElementById('AgainButton').style.display = 'none';
            document.getElementById('VictoryText').textContent = `YOU LOST! YOUR SOUL FRAGMENTS DISAPPEAR!`;
            FIGHT = false;

        }
    }
}

function CheckPoison() {
    if(EnemyStatusEffects.Poison >= 1) {
        EnemyStats.dmgT = EnemyStats.maxHealth*0.05;
        EnemyStats.dmgT = Math.floor(EnemyStats.dmgT);
        EnemyStats.health -= EnemyStats.dmgT;
        CreateCombatEvent('p');
        efhbn = 1 - (EnemyStats.maxHealth - EnemyStats.health) / EnemyStats.maxHealth;
        ehfb.style.height = `${efhbn * 100}%`;
        D2.textContent = `${EnemyStats.dmgT}`
        setTimeout(Hide1, 500);
    }
}

function bang() {
    if (playerTurn) {
        ShowCooldowns();
        StatusCheck();
        hitc = Math.ceil(Math.random() * (100 - 1) + 1);
        if (hitc < 89) {
            critc = Math.ceil(Math.random() * (100 - 1) + 1);
            critc += PlayerStats.crt;
            if (critc < 89) {
                if (EnemyStatusEffects.Sundered == 0) {
                    EnemyStats.dmgT = (PlayerStats.dmg * PlayerStats.trustr * EnemyStats.trudef);
                } else {
                    let l = (1 - EnemyStats.trudef) / 2;
                    let b = EnemyStats.trudef + l
                    EnemyStats.dmgT = (PlayerStats.dmg * PlayerStats.trustr * b);
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
    if (playerTurn) {
        afbn = 0;
    }
}

function updateAll2() {
    hfbn = 1 - (PlayerStats.maxHealth - PlayerStats.health) / PlayerStats.maxHealth;
    hfb.style.width = `${hfbn * 100}%`;
    D1.textContent = `${PlayerStats.dmgT}`
    setTimeout(Hide2, 500);
    if (enemyTurn) {
        efbn = 0;
    }
}

function enemyAttack() {
    if (EnemyAbilities.PierceCD > 0) {
        EnemyAbilities.PierceCD--;
    }
    if (EnemyType == 10) {
        Boss1Attack();
    } else if (EnemyType == 20) {
        Boss2Attack();
    } else if (EnemyType > 10 && EnemyAbilities.PierceCD == 0) {
        EnemyAbilities.PierceCD = 5;
        PlayerStats.dmgT = EnemyStats.dmg * 1.3;
        PlayerStats.dmgT = Math.floor(PlayerStats.dmgT);
        PlayerStats.health -= PlayerStats.dmgT;
        CreateCombatEvent(16);
        updateAll2();
    }
    else {
        if (PlayerStatusEffects.Counter > 0) {
            hitc = Math.ceil(Math.random() * (100 - 1) + 1);
            hitc += PlayerStats.dod;
            if (hitc < 89) {
                PlayerStats.dmgT = EnemyStats.dmg * 0.2;
                EnemyStats.dmgT = (PlayerStats.dmg * PlayerStats.trustr * 0.5) * EnemyStats.trudef;
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
                CreateCombatEvent(20);
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
                    PlayerStats.dmgT = EnemyStats.dmg * PlayerStats.trudef;
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
            EnemyStats.dmgT = PlayerStats.dmg * 0.6 * PlayerStats.trustr * EnemyStats.trudef;
            if (EnemyStats.dmgT <= 0) {
                EnemyStats.dmgT = 1;
            }
            EnemyStats.dmgT = Math.floor(EnemyStats.dmgT)
            EnemyStats.health -= EnemyStats.dmgT;
            PlayerAbilities.SunderCD = 4;
            EnemyStatusEffects.Sundered = 4;
            ShowCooldowns();
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
            ShowCooldowns();
            CreateCombatEvent(8);
            updateAll();
        } else if (e == 3 && PlayerAbilities.CounterCD == 0) {
            PlayerAbilities.CounterCD = 7;
            PlayerStatusEffects.Counter = 3;
            ShowCooldowns();
            CreateCombatEvent(9);
            StatusCheck();
            updateAll();
        } else if (e == 4 && PlayerAbilities.FocusCD == 0 && PlayerStats.mana >= 100) {
            PlayerAbilities.FocusCD = 3;
            if (EnemyStatusEffects.Sundered > 0) {
                EnemyStats.dmgT = PlayerStats.dmg * 3;
                if (PlayerStats.truwis > PlayerStats.trustr) {
                    EnemyStats.dmgT = EnemyStats.dmgT * PlayerStats.truwis;
                } else {
                    EnemyStats.dmgT = EnemyStats.dmgT * PlayerStats.trustr;
                }
                let a = (1 - EnemyStats.trudef) / 2;
                let j = EnemyStats.trudef + j;
                EnemyStats.dmgT = Math.floor(EnemyStats.dmgT * j);
            } else {
                EnemyStats.dmgT = PlayerStats.dmg * 3;
                if (PlayerStats.truwis > PlayerStats.trustr) {
                    EnemyStats.dmgT = EnemyStats.dmgT * PlayerStats.truwis;
                } else {
                    EnemyStats.dmgT = EnemyStats.dmgT * PlayerStats.trustr;
                }
                EnemyStats.dmgT = Math.floor(EnemyStats.dmgT * EnemyStats.trudef);
            }
            if (EnemyStats.dmgT <= 0) {
                EnemyStats.dmgT = 1;
            }
            EnemyStats.health -= EnemyStats.dmgT;
            PlayerStats.mana -= 100;
            ShowCooldowns();
            CreateCombatEvent(14);
            StatusCheck();
            updateAll2();
            updateAll();
        } else if (e == 5 && PlayerAbilities.PoisonCD == 0) {
            PlayerAbilities.PoisonCD = 8;
            EnemyStatusEffects.Poison = 4;
            EnemyStats.dmgT = EnemyStats.maxHealth*0.05;
            EnemyStats.dmgT = Math.floor(EnemyStats.dmgT);
            ShowCooldowns();
            CreateCombatEvent(23);
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
    } if (PlayerAbilities.FocusCD > 0) {
        PlayerAbilities.FocusCD--;
    } if (PlayerAbilities.PoisonCD > 0) {
        PlayerAbilities.PoisonCD--;
    }
    HasChecked = true;
}

function StatusCheck() {
    if (EnemyStatusEffects.Sundered > 1 && !playerTurn) {
        EnemyStatusEffects.Sundered--;
        document.getElementById('stat1').textContent = `Sundered for ${EnemyStatusEffects.Sundered} turns, reducing def by half!`;
    } else if (EnemyStatusEffects.Sundered == 1) {
        document.getElementById('stat1').textContent = '';
    }
    if (EnemyStatusEffects.Poison >= 1 && !playerTurn) {
        EnemyStatusEffects.Poison--;
        document.getElementById('stat4').textContent = `Poisoned for ${EnemyStatusEffects.Poison} turns, dealing 5% of max HP in damage per turn!`;
    } else if (EnemyStatusEffects.Poison == 0) {
        document.getElementById('stat4').textContent = '';
    }
    if (PlayerStatusEffects.Counter > 0 && !enemyTurn) {
        PlayerStatusEffects.Counter--;
        document.getElementById('pstat1').textContent = `Guard up for ${PlayerStatusEffects.Counter + 1} turns, reducing dmg by 80% and countering!`;
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
        document.getElementById('SkillScreenBox').style.display = 'flex';
        if (PlayerAbilities.Focus == 1) {
            document.getElementById('Skill4').style.display = 'block';
        } else {
            document.getElementById('Skill4').style.display = 'none';
        }if (PlayerAbilities.Poison == 1) {
            document.getElementById('Skill5').style.display = 'block';
        } else {
            document.getElementById('Skill5').style.display = 'none';
        }
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
        document.getElementById('SpecialScreenBox').style.display = 'flex';
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
        document.getElementById('MagicScreenBox').style.display = 'flex';
        if (PlayerSpells.Meteor == 1) {
            document.getElementById('Spell3').style.display = 'block';
        } else {
            document.getElementById('Spell3').style.display = 'none';
        }
    } else {
        document.getElementById('MagicScreenBox').style.display = 'none';
    }
    document.getElementById('SkillScreenBox').style.display = 'none';
    SpecialsOPEN = false;
    document.getElementById('SpecialScreenBox').style.display = 'none';
    SkillsOPEN = false;
}

function UseItem(v) {
    if (v == 1 && playerTurn) {
        if (Inv.ManPot >= 1) {
            PlayerStats.mana += 200;
            Inv.ManPot--;
            if (PlayerStats.mana > PlayerStats.maxMana) {
                PlayerStats.mana = PlayerStats.maxMana;
            }
            EnemyStats.dmgT = 0;
            hfb.style.width = `${hfbn * 100}%`;
            StatusCheck();
            ShowCooldowns();
            CreateCombatEvent(22);
            updateAll();
        }
    }
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
            StatusCheck();
            ShowCooldowns();
            CreateCombatEvent(13);
            updateAll();
        }
    } else if (f == 2 && playerTurn) {
        if (PlayerStats.mana >= 75) {
            EnemyStats.dmgT = PlayerSpells.FireDMG * PlayerStats.truwis * EnemyStats.res;
            EnemyStats.dmgT = Math.floor(EnemyStats.dmgT);
            if (EnemyStats.dmgT <= 0) {
                EnemyStats.dmgT = 1;
            }
            EnemyStats.health -= EnemyStats.dmgT;
            PlayerStats.mana -= 75;
            StatusCheck();
            ShowCooldowns();
            CreateCombatEvent(15);
            updateAll();
        }
    } else if (f == 3 && playerTurn) {
        if (PlayerStats.mana >= 100) {
            EnemyStats.dmgT = PlayerSpells.MeteorDMG * PlayerStats.truwis * EnemyStats.res;
            EnemyStats.dmgT = Math.floor(EnemyStats.dmgT);
            if (EnemyStats.dmgT <= 0) {
                EnemyStats.dmgT = 1;
            }
            EnemyStats.health -= EnemyStats.dmgT;
            PlayerStats.mana -= 100;
            StatusCheck();
            ShowCooldowns();
            CreateCombatEvent(21);
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
                EnemyStats.trudef += EnemyStats.oldval;
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
    if (EnemyStats.health < 500 && BossAbilities.Heal < 2) {
        EnemyStats.health += EnemyStats.maxHealth * 0.4;
        PlayerStats.dmgT = 0;
        BossAbilities.Heal++;
        CreateCombatEvent(12);
    }
    else if (EnemyStatusEffects.Sundered > 1 && BossAbilities.HardenCD == 0) {
        BossAbilities.HardenCD = 4;
        BossAbilities.Harden = 3;
        EnemyStats.oldval = 1 - EnemyStats.trudef / 2;
        EnemyStats.trudef = EnemyStats.trudef - 1 - EnemyStats.trudef / 2;
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
        EnemyStats.oldval = 1 - EnemyStats.trudef / 2;
        EnemyStats.trudef = EnemyStats.trudef - 1 - EnemyStats.trudef / 2;
        BossStatusCheck();
    } else {
        if (PlayerStatusEffects.Counter > 0) {
            hitc = Math.ceil(Math.random() * (100 - 1) + 1);
            hitc += PlayerStats.dod;
            if (hitc < 93) {
                PlayerStats.dmgT = EnemyStats.dmg * BossAbilities.TemperATK * 0.2;
                EnemyStats.dmgT = (PlayerStats.dmg * PlayerStats.trustr * 0.5) * EnemyStats.trudef;
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
                    PlayerStats.dmgT = EnemyStats.dmg * BossAbilities.TemperATK * PlayerStats.trudef;
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
        p.textContent = `Player hits ${EnemName} for ${EnemyStats.dmgT} damage!`
        p.classList.add('CombatLog');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 2) {
        let p = document.createElement('p');
        p.textContent = `Player hits ${EnemName} critically for ${EnemyStats.dmgT} damage!`
        p.classList.add('CombatLog');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 3) {
        let p = document.createElement('p');
        p.textContent = `${EnemName} dodges player's blow!`
        p.classList.add('CombatLog');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 4) {
        let p = document.createElement('p');
        p.textContent = `${EnemName} hits player for ${PlayerStats.dmgT} damage!`;
        p.classList.add('CombatLogEn');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 5) {
        let p = document.createElement('p');
        p.textContent = `${EnemName} hits player critically for ${PlayerStats.dmgT} damage!`
        p.classList.add('CombatLogEn');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 6) {
        let p = document.createElement('p');
        p.textContent = `Player dodges ${EnemName}'s blow!`
        p.classList.add('CombatLogEn');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 7) {
        let p = document.createElement('p');
        p.textContent = `Player uses Sundering Slash and cripples ${EnemName}'s defense and deals ${EnemyStats.dmgT} damage!`
        p.classList.add('CombatLogAbi');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 8) {
        let p = document.createElement('p');
        p.textContent = `Player uses Pierce Through and deals ${EnemyStats.dmgT} damage to ${EnemName}!!`
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
        p.textContent = `Aridomos casts Final Heal and recovers ${EnemyStats.maxHealth * 0.4} HP!`
        p.classList.add('CombatLogAbiEn');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 13) {
        let p = document.createElement('p');
        p.textContent = `Player casts Heal and recovers ${phealed} HP!`
        p.classList.add('CombatLogAbi');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 14) {
        let p = document.createElement('p');
        p.textContent = `Player uses Focused Dash and deals ${EnemyStats.dmgT} damage to ${EnemName}!`
        p.classList.add('CombatLogAbi');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 15) {
        let p = document.createElement('p');
        p.textContent = `Player casts Fireball and deals ${EnemyStats.dmgT} damage to ${EnemName}! `
        p.classList.add('CombatLogAbi');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 16) {
        let p = document.createElement('p');
        p.textContent = `${EnemName} uses Pierce Through and deals ${PlayerStats.dmgT} damage!`
        p.classList.add('CombatLogAbiEn');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 17) {
        let p = document.createElement('p');
        p.textContent = `Asmond casts Final Heal and recovers ${EnemyStats.maxHealth * 0.2} HP!`
        p.classList.add('CombatLogAbiEn');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 18) {
        let p = document.createElement('p');
        p.textContent = `Asmond casts Harden and increases his defense by 50%!`
        p.classList.add('CombatLogAbiEn');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 19) {
        let p = document.createElement('p');
        p.textContent = `Asmond casts Temper and increases his damage by 20%!`
        p.classList.add('CombatLogAbiEn');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 20) {
        let p = document.createElement('p');
        p.textContent = `${EnemName} attacks player dealing ${PlayerStats.dmgT} damage, but player counter attacks for ${EnemyStats.dmgT} damage!`
        p.classList.add('CombatLogEn');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 21) {
        let p = document.createElement('p');
        p.textContent = `Player casts Meteor Strike dealing ${EnemyStats.dmgT} damage to ${EnemName}!`
        p.classList.add('CombatLogAbi');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 22) {
        let p = document.createElement('p');
        p.textContent = `Player drinks Mana Potion and recovers 200MP!`
        p.classList.add('CombatLogAbi');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 23) {
        let p = document.createElement('p');
        p.textContent = `Player uses Poison Arrow on ${EnemName} and deals ${EnemyStats.dmgT} damage, also poisoning them for 4 turns!`;
        p.classList.add('CombatLogAbi');
        log.insertBefore(p, log.firstChild);
    }
    else if (n == 'p') {
        let p = document.createElement('p');
        p.textContent = `${EnemName} takes ${EnemyStats.dmgT} damage from Poison!`;
        p.classList.add('CombatLog');
        log.insertBefore(p, log.firstChild);
    }

}

function ShowSkill(h) {
    let adds = document.getElementById('AbiDesc');
    let t = document.getElementById('AbiDescText');
    if (h == 0) {
        adds.style.opacity = 0;
        t.textContent = '';
        t.style.opacity = 0;
    }
    else if (h == 1) {
        adds.style.opacity = 1;
        t.textContent = 'Skill: Sundering Slash, Halves enemy def for 3 turns and deals 60% dmg. Cooldown: 3 turns.';
        t.style.opacity = 1;
    }
    else if (h == 2) {
        t.textContent = 'Skill: Pierce Through, Ignores enemy def and deals 130% dmg. Cooldown: 4 turns.';
        adds.style.opacity = 1;
        t.style.opacity = 1;
    }
    else if (h == 3) {
        t.textContent = 'Skill: Shields up!, Reduces incoming dmg by 80% and counters attacker for 50% dmg. Lasts 2 turns. Cooldown: 6 turns.';
        adds.style.opacity = 1;
        t.style.opacity = 1;
    }
    else if (h == 4) {
        t.textContent = 'Spell: Heal, Recovers 10-20% of max HP. Cost: 50 MP.';
        adds.style.opacity = 1;
        t.style.opacity = 1;
    }
    else if (h == 5) {
        t.textContent = 'Skill: Focused Dash, Deal 300% dmg, influenced further by WIS or STR. Cooldown: 2 turns. MP cost: 100.';
        adds.style.opacity = 1;
        t.style.opacity = 1;
    }
    else if (h == 6) {
        t.textContent = `Spell: Fireball, deals ${PlayerSpells.FireDMG} damage, influenced by WIS. MP cost: 75.`;
        adds.style.opacity = 1;
        t.style.opacity = 1;
    }
    else if (h == 7) {
        t.textContent = `Spell: Meteor Strike, deals ${PlayerSpells.MeteorDMG} damage, influenced by WIS. MP cost: 100.`;
        adds.style.opacity = 1;
        t.style.opacity = 1;
    }
    else if (h == 8) {
        t.textContent = `Skill: Poison Arrow, deals 5% of enemy's max HP in damage over 3 turns. Cooldown: 8 turns.`;
        adds.style.opacity = 1;
        t.style.opacity = 1;
    }
}

function ShowCooldowns() {
    document.getElementById('Skill1CD').style.display = 'none';
    document.getElementById('Skill2CD').style.display = 'none';
    document.getElementById('Skill3CD').style.display = 'none';
    document.getElementById('Skill4CD').style.display = 'none';
    document.getElementById('Skill5CD').style.display = 'none';
    if (PlayerAbilities.SunderCD > 1) {
        document.getElementById('Skill1CD').style.display = 'block';
        document.getElementById('Skill1CDT').textContent = `${PlayerAbilities.SunderCD - 1} turns`;
    }
    if (PlayerAbilities.PierceCD > 1) {
        document.getElementById('Skill2CD').style.display = 'block';
        document.getElementById('Skill2CDT').textContent = `${PlayerAbilities.PierceCD - 1} turns`;
    }
    if (PlayerAbilities.CounterCD > 1) {
        document.getElementById('Skill3CD').style.display = 'block';
        document.getElementById('Skill3CDT').textContent = `${PlayerAbilities.CounterCD - 1} turns`;
    }
    if (PlayerAbilities.FocusCD > 1) {
        document.getElementById('Skill4CD').style.display = 'block';
        document.getElementById('Skill4CDT').textContent = `${PlayerAbilities.FocusCD - 1} turns`;
    }
    if (PlayerAbilities.PoisonCD > 1) {
        document.getElementById('Skill5CD').style.display = 'block';
        document.getElementById('Skill5CDT').textContent = `${PlayerAbilities.PoisonCD - 1} turns`;
    }
}

liikutaElementtia(document.getElementById('DragMove'), document.getElementById('CombatEvents'));

function liikutaElementtia(alue, liikkuu = alue) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    alue.onmousedown = paina;

    function paina(e) {
        pos1 = liikkuu.offsetLeft;
        pos2 = liikkuu.offsetTop;
        pos3 = e.x;
        pos4 = e.y;
        alue.onmouseup = paasta;
        document.onmousemove = liikuta;
        liikkuu.style.zIndex = "10";
        liikkuu.style.marginLeft = "0px"; liikkuu.style.marginRight = "0px"; liikkuu.style.marginTop = "0px"; liikkuu.style.marginBottom = "0px";
    }

    function liikuta(e) {
        e.preventDefault();
        liikkuu.style.left = pos1 + e.x - pos3 + "px";
        liikkuu.style.top = pos2 + e.y - pos4 + "px";
    }

    function paasta() {
        alue.onmouseup = null;
        document.onmousemove = null;
        liikkuu.style.zIndex = null;
    }
}

function Boss2Attack() {
    if (BossAbilities.HardenCD > 0) {
        BossAbilities.HardenCD--;
        if (BossAbilities.Harden > 0) {
            BossAbilities.Harden--;
            if (BossAbilities.Harden == 0) {
                EnemyStats.trudef += EnemyStats.oldval;
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
    if (EnemyStats.health < 2000 && BossAbilities.Heal < 2) {
        EnemyStats.health += EnemyStats.maxHealth * 0.2;
        PlayerStats.dmgT = 0;
        BossAbilities.Heal++;
        CreateCombatEvent(17);
    }
    else if (EnemyStatusEffects.Sundered > 1 && BossAbilities.HardenCD == 0) {
        BossAbilities.HardenCD = 4;
        BossAbilities.Harden = 3;
        EnemyStats.oldval = 1 - EnemyStats.trudef / 4;
        EnemyStats.trudef = EnemyStats.trudef - 1 - EnemyStats.trudef / 4;
        CreateCombatEvent(18);
        BossStatusCheck();
    } else if (BossAbilities.TemperCD == 0) {
        BossAbilities.TemperCD = 6;
        BossAbilities.Temper = 3;
        BossAbilities.TemperATK = 1.2;
        CreateCombatEvent(19);
        BossStatusCheck();
    } else if (EnemyStats.health < EnemyStats.maxHealth / 2 && BossAbilities.HardenCD == 0) {
        BossAbilities.HardenCD = 4;
        BossAbilities.Harden = 3;
        EnemyStats.oldval = 1 - EnemyStats.trudef / 4;
        EnemyStats.trudef = EnemyStats.trudef - 1 - EnemyStats.trudef / 4;
        CreateCombatEvent(18);
        BossStatusCheck();
    } else if (EnemyAbilities.PierceCD == 0) {
        EnemyAbilities.PierceCD = 5;
        PlayerStats.dmgT = EnemyStats.dmg * BossAbilities.TemperATK * 1.3;
        PlayerStats.dmgT = Math.floor(PlayerStats.dmgT);
        PlayerStats.health -= PlayerStats.dmgT;
        CreateCombatEvent(16);
        updateAll2();
    }
    else {
        if (PlayerStatusEffects.Counter > 0) {
            hitc = Math.ceil(Math.random() * (100 - 1) + 1);
            hitc += PlayerStats.dod;
            if (hitc < 93) {
                PlayerStats.dmgT = EnemyStats.dmg * BossAbilities.TemperATK * 0.2;
                EnemyStats.dmgT = (PlayerStats.dmg * PlayerStats.trustr * 0.5) * EnemyStats.trudef;
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
                    PlayerStats.dmgT = EnemyStats.dmg * BossAbilities.TemperATK * PlayerStats.trudef;
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
