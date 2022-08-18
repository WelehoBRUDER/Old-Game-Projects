'use strict';

let StatsD = document.getElementById('StatDesc');
let lvl1 = document.getElementById('level');
let lvl2 = document.getElementById('nextlvl');

function WarriorSelect() {
    document.getElementById('WarriorTree').style.display = 'block';
    document.getElementById('MainCombat').style.display = 'none';
    document.getElementById('ClassSelect').style.display = 'none';
    document.getElementById('LevelUpScreen').style.display = 'block';
    PlayerStats.str += 3;
    PlayerStats.vig += 3;
    PlayerStats.maxHealth += 75
    PlayerStats.def += 2;
    PlayerStats.trudef -= 0.02;
    PlayerStats.trustr += 0.15;
    ClassName = 'Warrior';
    StatsD.textContent = 'You gained 1000 Soul Fragments for killing your first enemy!';
    WarPerks();
    UpChar();
    Selected(1);
    LoadStats();
}

function HunterSelect() {
    document.getElementById('WarriorTree').style.display = 'none';
    document.getElementById('MainCombat').style.display = 'none';
    document.getElementById('ClassSelect').style.display = 'none';
    document.getElementById('LevelUpScreen').style.display = 'block';
    PlayerStats.agi += 3;
    PlayerStats.crt += 3;
    PlayerStats.vig += 2;
    PlayerStats.maxHealth += 50;
    ClassName = 'Hunter';
    StatsD.textContent = 'You gained 1000 Soul Fragments for killing your first enemy!';
    WarPerks();
    UpChar();
    Selected(1);
    LoadStats();
}

function MageSelect() {
    document.getElementById('WarriorTree').style.display = 'none';
    document.getElementById('MainCombat').style.display = 'none';
    document.getElementById('ClassSelect').style.display = 'none';
    document.getElementById('LevelUpScreen').style.display = 'block';
    PlayerStats.wis += 3;
    PlayerStats.mnd += 3;
    PlayerStats.vig += 2;
    PlayerStats.maxMana += 75;
    PlayerStats.truwis += 0.15;
    PlayerStats.maxHealth += 50;
    ClassName = 'Mage';
    StatsD.textContent = 'You gained 1000 Soul Fragments for killing your first enemy!';
    WarPerks();
    UpChar();
    Selected(1);
    LoadStats();
}

function Return() {
    document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
    document.getElementById('Gam').textContent = `G: ${PlayerStats.Gold}`;
    document.getElementById('WarriorTree').style.display = 'block';
    document.getElementById('MainCombat').style.display = 'none';
    document.getElementById('ClassSelect').style.display = 'none';
    document.getElementById('Events').style.display = 'none';
    document.getElementById('LevelUpScreen').style.display = 'block';
    WarPerks();
    Selected(4);
    LoadStats();
}

function Selected(e) {
    if (e == 1) {
        document.getElementById('Statistics').style.display = 'block';
        document.getElementById('SkillPanel').style.display = 'none';
        document.getElementById('PerkTrees').style.display = 'none';
        document.getElementById('CharPanel').style.display = 'none';
        document.getElementById('Store').style.display = 'none';
        document.getElementById('LocationsPanel').style.display = 'none';
        document.getElementById('Stats').style.backgroundColor = 'rgb(33, 33, 136)';
        document.getElementById('SkillsMen').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('Perks').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('CharStat').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('Merchant').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('Locations').style.backgroundColor = 'rgb(142, 142, 143)';
        LoadStats();
    } else if (e == 2) {
        document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
        document.getElementById('Gam').textContent = `G: ${PlayerStats.Gold}`;
        document.getElementById('Statistics').style.display = 'none';
        document.getElementById('SkillPanel').style.display = 'block';
        document.getElementById('PerkTrees').style.display = 'none';
        document.getElementById('CharPanel').style.display = 'none';
        document.getElementById('Store').style.display = 'none';
        document.getElementById('LocationsPanel').style.display = 'none';
        document.getElementById('Stats').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('SkillsMen').style.backgroundColor = 'rgb(33, 33, 136)';
        document.getElementById('Perks').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('CharStat').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('Merchant').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('Locations').style.backgroundColor = 'rgb(142, 142, 143)';
    } else if (e == 3) {
        document.getElementById('Statistics').style.display = 'none';
        document.getElementById('SkillPanel').style.display = 'none';
        document.getElementById('PerkTrees').style.display = 'block';
        document.getElementById('CharPanel').style.display = 'none';
        document.getElementById('Store').style.display = 'none';
        document.getElementById('LocationsPanel').style.display = 'none';
        document.getElementById('Stats').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('SkillsMen').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('Perks').style.backgroundColor = 'rgb(33, 33, 136)';
        document.getElementById('CharStat').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('Merchant').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('Locations').style.backgroundColor = 'rgb(142, 142, 143)';
    } else if (e == 4) {
        document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
        document.getElementById('Gam').textContent = `G: ${PlayerStats.Gold}`;
        document.getElementById('Statistics').style.display = 'none';
        document.getElementById('SkillPanel').style.display = 'none';
        document.getElementById('PerkTrees').style.display = 'none';
        document.getElementById('CharPanel').style.display = 'block';
        document.getElementById('Store').style.display = 'none';
        document.getElementById('LocationsPanel').style.display = 'none';
        document.getElementById('Stats').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('SkillsMen').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('Perks').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('CharStat').style.backgroundColor = 'rgb(33, 33, 136)';
        document.getElementById('Merchant').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('Locations').style.backgroundColor = 'rgb(142, 142, 143)';
        UpChar();
    }
    else if (e == 5) {
        document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
        document.getElementById('Gam').textContent = `G: ${PlayerStats.Gold}`;
        document.getElementById('Statistics').style.display = 'none';
        document.getElementById('SkillPanel').style.display = 'none';
        document.getElementById('PerkTrees').style.display = 'none';
        document.getElementById('CharPanel').style.display = 'none';
        document.getElementById('Store').style.display = 'block';
        document.getElementById('LocationsPanel').style.display = 'none';
        document.getElementById('Stats').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('SkillsMen').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('Perks').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('CharStat').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('Merchant').style.backgroundColor = 'rgb(33, 33, 136)';
        document.getElementById('Locations').style.backgroundColor = 'rgb(142, 142, 143)';
        LoadStore();
    }
    else if (e == 6) {
        document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
        document.getElementById('Gam').textContent = `G: ${PlayerStats.Gold}`;
        document.getElementById('Statistics').style.display = 'none';
        document.getElementById('SkillPanel').style.display = 'none';
        document.getElementById('PerkTrees').style.display = 'none';
        document.getElementById('CharPanel').style.display = 'none';
        document.getElementById('Store').style.display = 'none';
        document.getElementById('LocationsPanel').style.display = 'block';
        document.getElementById('Stats').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('SkillsMen').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('Perks').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('CharStat').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('Merchant').style.backgroundColor = 'rgb(142, 142, 143)';
        document.getElementById('Locations').style.backgroundColor = 'rgb(33, 33, 136)';
    }
}



function LoadStats() {
    lvl1.textContent = `Level: ${PlayerStats.lvl}`;
    lvl2.textContent = `Next: ${PlayerStats.nextlvl}`;
    document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
    document.getElementById('Gam').textContent = `G: ${PlayerStats.Gold}`;
    document.getElementById('str').textContent = `STR: ${PlayerStats.str}`;
    document.getElementById('def').textContent = `DEF: ${PlayerStats.def}`;
    document.getElementById('mnd').textContent = `MND: ${PlayerStats.mnd}`;
    document.getElementById('agi').textContent = `AGI: ${PlayerStats.agi}`;
    document.getElementById('wis').textContent = `WIS: ${PlayerStats.wis}`;
    document.getElementById('crt').textContent = `CRT: ${PlayerStats.crt}`;
    document.getElementById('dod').textContent = `DOD: ${PlayerStats.dod}`;
    document.getElementById('vig').textContent = `VIG: ${PlayerStats.vig}`;
    document.getElementById('SFam').addEventListener('mouseover', () => StatInfo(1));
    document.getElementById('SFam').addEventListener('mouseout', () => StatInfo(0));
    document.getElementById('str').addEventListener('mouseover', () => StatInfo(2));
    document.getElementById('str').addEventListener('mouseout', () => StatInfo(0));
    document.getElementById('def').addEventListener('mouseover', () => StatInfo(3));
    document.getElementById('def').addEventListener('mouseout', () => StatInfo(0));
    document.getElementById('mnd').addEventListener('mouseover', () => StatInfo(4));
    document.getElementById('mnd').addEventListener('mouseout', () => StatInfo(0));
    document.getElementById('agi').addEventListener('mouseover', () => StatInfo(5));
    document.getElementById('agi').addEventListener('mouseout', () => StatInfo(0));
    document.getElementById('wis').addEventListener('mouseover', () => StatInfo(6));
    document.getElementById('wis').addEventListener('mouseout', () => StatInfo(0));
    document.getElementById('crt').addEventListener('mouseover', () => StatInfo(7));
    document.getElementById('crt').addEventListener('mouseout', () => StatInfo(0));
    document.getElementById('dod').addEventListener('mouseover', () => StatInfo(8));
    document.getElementById('dod').addEventListener('mouseout', () => StatInfo(0));
    document.getElementById('vig').addEventListener('mouseover', () => StatInfo(9));
    document.getElementById('vig').addEventListener('mouseout', () => StatInfo(0));
    document.getElementById('s1').addEventListener('mouseover', () => StatInfo(2));
    document.getElementById('s1').addEventListener('mouseout', () => StatInfo(0));
    document.getElementById('s2').addEventListener('mouseover', () => StatInfo(3));
    document.getElementById('s2').addEventListener('mouseout', () => StatInfo(0));
    document.getElementById('s4').addEventListener('mouseover', () => StatInfo(4));
    document.getElementById('s4').addEventListener('mouseout', () => StatInfo(0));
    document.getElementById('s3').addEventListener('mouseover', () => StatInfo(5));
    document.getElementById('s3').addEventListener('mouseout', () => StatInfo(0));
    document.getElementById('s5').addEventListener('mouseover', () => StatInfo(6));
    document.getElementById('s5').addEventListener('mouseout', () => StatInfo(0));
    document.getElementById('s6').addEventListener('mouseover', () => StatInfo(7));
    document.getElementById('s6').addEventListener('mouseout', () => StatInfo(0));
    document.getElementById('s8').addEventListener('mouseover', () => StatInfo(8));
    document.getElementById('s8').addEventListener('mouseout', () => StatInfo(0));
    document.getElementById('s7').addEventListener('mouseover', () => StatInfo(9));
    document.getElementById('s7').addEventListener('mouseout', () => StatInfo(0));
    document.getElementById('Gam').addEventListener('mouseover', () => StatInfo(10));
    document.getElementById('Gam').addEventListener('mouseout', () => StatInfo(0));
}

function StatInfo(a) {
    if (a == 0) {
        StatsD.textContent = '';
    }
    else if (a == 1) {
        StatsD.textContent = 'Soul Fragments are gained when defeating foes. They are used to improve your character';
    } else if (a == 2) {
        StatsD.textContent = 'Strength improves your physical damage by 5% per level.';
    } else if (a == 3) {
        StatsD.textContent = 'Defense reduces enemy damage by 1 per level. Minimum damage taken is 1.';
    } else if (a == 4) {
        StatsD.textContent = 'Mind increases mana by 25 per level.';
    } else if (a == 5) {
        StatsD.textContent = 'Agility improves speed slighty every 3 levels. Speed determines how fast you act in combat.';
    } else if (a == 6) {
        StatsD.textContent = 'Wisdom increases magical power by 5% per level.';
    } else if (a == 7) {
        StatsD.textContent = 'Critical improves CRIT chance slightly. CRIT deals 200% damage.';
    } else if (a == 8) {
        StatsD.textContent = 'Dodge improves chance of dodging enemy attack, avoiding all damage.';
    } else if (a == 9) {
        StatsD.textContent = 'Vigour increases health by 25 per level.';
    } else if (a == 10) {
        StatsD.textContent = 'Gold is the currency loved by merchants. Use it to buy gear from them.';
    }
}

function ImprovChar(g) {
    if (PlayerStats.SF >= PlayerStats.nextlvl && PlayerStats.lvl < 500) {
        if (g == 1) {
            PlayerStats.SF -= PlayerStats.nextlvl;
            PlayerStats.nextlvl += 100;
            PlayerStats.str += 1;
            PlayerStats.trustr += 0.05;
            PlayerStats.lvl += 1;
            LoadStats();
        } else if (g == 2 && PlayerStats.def <= 99) {
            PlayerStats.SF -= PlayerStats.nextlvl;
            PlayerStats.nextlvl += 100;
            PlayerStats.def += 1;
            PlayerStats.lvl += 1;
            if(PlayerStats.def >= 40) {
                PlayerStats.trudef -= 0.003;
            } else {
                PlayerStats.trudef -= 0.01;
            }
            LoadStats();
        } else if (g == 3 && PlayerStats.agi <= 99) {
            PlayerStats.SF -= PlayerStats.nextlvl;
            PlayerStats.nextlvl += 100;
            PlayerStats.agi += 1;
            PlayerStats.truagi = PlayerStats.agi / 4;
            PlayerStats.truagi = Math.floor(PlayerStats.truagi);
            speed = 35 - PlayerStats.truagi;
            if (speed < 10) {
                speed = 10;
            }
            clearInterval(timer);
            PlayerStats.lvl += 1;
            LoadStats();
        } else if (g == 4) {
            PlayerStats.SF -= PlayerStats.nextlvl;
            PlayerStats.nextlvl += 100;
            PlayerStats.maxMana += 25;
            PlayerStats.mnd += 1;
            PlayerStats.lvl += 1;
            LoadStats();
        } else if (g == 5) {
            PlayerStats.SF -= PlayerStats.nextlvl;
            PlayerStats.nextlvl += 100;
            PlayerStats.truwis += 0.05;
            PlayerStats.wis += 1;
            PlayerStats.lvl += 1;
            LoadStats();
        } else if (g == 6 && PlayerStats.crt <= 89) {
            PlayerStats.SF -= PlayerStats.nextlvl;
            PlayerStats.nextlvl += 100;
            PlayerStats.crt += 1;
            PlayerStats.lvl += 1;
            LoadStats();
        } else if (g == 7) {
            PlayerStats.SF -= PlayerStats.nextlvl;
            PlayerStats.nextlvl += 100;
            PlayerStats.vig += 1;
            PlayerStats.lvl += 1;
            PlayerStats.maxHealth += 25;
            LoadStats();
        } else if (g == 8 && PlayerStats.dod <= 89) {
            PlayerStats.SF -= PlayerStats.nextlvl;
            PlayerStats.nextlvl += 100;
            PlayerStats.dod += 1;
            PlayerStats.lvl += 1;
            LoadStats();
        }
    }
}

function HunPerks() {
    document.getElementById('WarriorTree').style.display = 'none';
    document.getElementById('HunterTree').style.display = 'block';
    document.getElementById('MageTree').style.display = 'none';
    document.getElementById('WarBar').style.backgroundColor = "crimson";
    document.getElementById('WarBar').style.borderColor = 'white';
    document.getElementById('HunBar').style.backgroundColor = "rgb(32, 133, 12);";
    document.getElementById('HunBar').style.borderColor = 'gold';
    document.getElementById('MagBar').style.backgroundColor = "rgb(20, 113, 220)";
    document.getElementById('MagBar').style.borderColor = 'white';
    if (PlayerHunPerks.W1 == 1) {
        document.getElementById('hun1').style.backgroundColor = 'green';
    } else {
        document.getElementById('hun1').style.backgroundColor = 'green';
        document.getElementById('hun1').style.border = 'solid';
        document.getElementById('hun1').style.borderColor = 'gold';
    }
    if (PlayerHunPerks.W2 == 0 && PlayerHunPerks.W1 == 1) {
        document.getElementById('hun2').style.backgroundColor = 'gray';
    } else if (PlayerHunPerks.W2 == 0) {
        document.getElementById('hun2').style.backgroundColor = 'green';
    } else if (PlayerHunPerks.W2 == 1) {
        document.getElementById('hun2').style.backgroundColor = 'green';
        document.getElementById('hun2').style.border = 'solid';
        document.getElementById('hun2').style.borderColor = 'gold';
    }
    if (PlayerHunPerks.W3 == 0 && PlayerHunPerks.W1 == 1) {
        document.getElementById('hun3').style.backgroundColor = 'gray';
    } else if (PlayerHunPerks.W3 == 0) {
        document.getElementById('hun3').style.backgroundColor = 'green';
    } else if (PlayerHunPerks.W3 == 1) {
        document.getElementById('hun3').style.backgroundColor = 'green';
        document.getElementById('hun3').style.border = 'solid';
        document.getElementById('hun3').style.borderColor = 'gold';
    }
    if (PlayerHunPerks.W4 == 0 && PlayerHunPerks.W1 == 1) {
        document.getElementById('hun4').style.backgroundColor = 'gray';
    } else if (PlayerHunPerks.W4 == 0) {
        document.getElementById('hun4').style.backgroundColor = 'green';
    } else if (PlayerHunPerks.W4 == 1) {
        document.getElementById('hun4').style.backgroundColor = 'green';
        document.getElementById('hun4').style.border = 'solid';
        document.getElementById('hun4').style.borderColor = 'gold';
    }
    if (PlayerHunPerks.W5 == 0 && PlayerHunPerks.W2 == 0) {
        document.getElementById('hun5').style.backgroundColor = 'gray';
    } else if (PlayerHunPerks.W5 == 0) {
        document.getElementById('hun5').style.backgroundColor = 'green';
    } else if (PlayerHunPerks.W5 == 1) {
        document.getElementById('hun5').style.backgroundColor = 'green';
        document.getElementById('hun5').style.border = 'solid';
        document.getElementById('hun5').style.borderColor = 'gold';
    }
    if (PlayerHunPerks.W6 == 0 && PlayerHunPerks.W3 == 0) {
        document.getElementById('hun6').style.backgroundColor = 'gray';
    } else if (PlayerHunPerks.W6 == 0) {
        document.getElementById('hun6').style.backgroundColor = 'green';
    } else if (PlayerHunPerks.W6 == 1) {
        document.getElementById('hun6').style.backgroundColor = 'green';
        document.getElementById('hun6').style.border = 'solid';
        document.getElementById('hun6').style.borderColor = 'gold';
    }
    if (PlayerHunPerks.W7 == 0 && PlayerHunPerks.W4 == 0) {
        document.getElementById('hun7').style.backgroundColor = 'gray';
    } else if (PlayerHunPerks.W7 == 0) {
        document.getElementById('hun7').style.backgroundColor = 'green';
    } else if (PlayerHunPerks.W7 == 1) {
        document.getElementById('hun7').style.backgroundColor = 'green';
        document.getElementById('hun7').style.border = 'solid';
        document.getElementById('hun7').style.borderColor = 'gold';
    }
}


function MagPerks() {
    document.getElementById('WarriorTree').style.display = 'none';
    document.getElementById('HunterTree').style.display = 'none';
    document.getElementById('MageTree').style.display = 'block';
    document.getElementById('WarBar').style.backgroundColor = "crimson";
    document.getElementById('WarBar').style.borderColor = 'white';
    document.getElementById('HunBar').style.backgroundColor = "rgb(53, 220, 20);";
    document.getElementById('HunBar').style.borderColor = 'white';
    document.getElementById('MagBar').style.backgroundColor = "rgb(16, 77, 148)";
    document.getElementById('MagBar').style.borderColor = 'gold';
    if (PlayerMagPerks.W1 == 1) {
        document.getElementById('mag1').style.backgroundColor = 'blue';
    } else {
        document.getElementById('mag1').style.backgroundColor = 'blue';
        document.getElementById('mag1').style.border = 'solid';
        document.getElementById('mag1').style.borderColor = 'gold';
    }
    if (PlayerMagPerks.W2 == 0 && PlayerMagPerks.W1 == 1) {
        document.getElementById('mag2').style.backgroundColor = 'gray';
    } else if (PlayerMagPerks.W2 == 0) {
        document.getElementById('mag2').style.backgroundColor = 'blue';
    } else if (PlayerMagPerks.W2 == 1) {
        document.getElementById('mag2').style.backgroundColor = 'blue';
        document.getElementById('mag2').style.border = 'solid';
        document.getElementById('mag2').style.borderColor = 'gold';
    }
    if (PlayerMagPerks.W3 == 0 && PlayerMagPerks.W1 == 1) {
        document.getElementById('mag3').style.backgroundColor = 'gray';
    } else if (PlayerMagPerks.W3 == 0) {
        document.getElementById('mag3').style.backgroundColor = 'blue';
    } else if (PlayerMagPerks.W3 == 1) {
        document.getElementById('mag3').style.backgroundColor = 'blue';
        document.getElementById('mag3').style.border = 'solid';
        document.getElementById('mag3').style.borderColor = 'gold';
    }
    if (PlayerMagPerks.W4 == 0 && PlayerMagPerks.W1 == 1) {
        document.getElementById('mag4').style.backgroundColor = 'gray';
    } else if (PlayerMagPerks.W4 == 0) {
        document.getElementById('mag4').style.backgroundColor = 'blue';
    } else if (PlayerMagPerks.W4 == 1) {
        document.getElementById('mag4').style.backgroundColor = 'blue';
        document.getElementById('mag4').style.border = 'solid';
        document.getElementById('mag4').style.borderColor = 'gold';
    }
}

function WarPerks() {
    document.getElementById('WarriorTree').style.display = 'block';
    document.getElementById('HunterTree').style.display = 'none';
    document.getElementById('MageTree').style.display = 'none';
    document.getElementById('WarBar').style.backgroundColor = "rgb(141, 7, 34)";
    document.getElementById('WarBar').style.borderColor = 'gold';
    document.getElementById('HunBar').style.backgroundColor = "rgb(53, 220, 20)";
    document.getElementById('HunBar').style.borderColor = 'white';
    document.getElementById('MagBar').style.backgroundColor = "rgb(20, 113, 220)";
    document.getElementById('MagBar').style.borderColor = 'white';
    if (PlayerWarPerks.W1 == 1) {
        document.getElementById('war1').style.backgroundColor = 'crimson';
    } else {
        document.getElementById('war1').style.backgroundColor = 'crimson';
        document.getElementById('war1').style.border = 'solid';
        document.getElementById('war1').style.borderColor = 'gold';
    }
    if (PlayerWarPerks.W2 == 0 && PlayerWarPerks.W1 == 1) {
        document.getElementById('war2').style.backgroundColor = 'gray';
    } else if (PlayerWarPerks.W2 == 0) {
        document.getElementById('war2').style.backgroundColor = 'crimson';
    } else if (PlayerWarPerks.W2 == 1) {
        document.getElementById('war2').style.backgroundColor = 'crimson';
        document.getElementById('war2').style.border = 'solid';
        document.getElementById('war2').style.borderColor = 'gold';
    }
    if (PlayerWarPerks.W3 == 0 && PlayerWarPerks.W1 == 1) {
        document.getElementById('war3').style.backgroundColor = 'gray';
    } else if (PlayerWarPerks.W3 == 0) {
        document.getElementById('war3').style.backgroundColor = 'crimson';
    } else if (PlayerWarPerks.W3 == 1) {
        document.getElementById('war3').style.backgroundColor = 'crimson';
        document.getElementById('war3').style.border = 'solid';
        document.getElementById('war3').style.borderColor = 'gold';
    }
    if (PlayerWarPerks.W4 == 0 && PlayerWarPerks.W1 == 1) {
        document.getElementById('war4').style.backgroundColor = 'gray';
    } else if (PlayerWarPerks.W4 == 0) {
        document.getElementById('war4').style.backgroundColor = 'crimson';
    } else if (PlayerWarPerks.W4 == 1) {
        document.getElementById('war4').style.backgroundColor = 'crimson';
        document.getElementById('war4').style.border = 'solid';
        document.getElementById('war4').style.borderColor = 'gold';
    }
    if (PlayerWarPerks.W5 == 0 && PlayerWarPerks.W2 == 0) {
        document.getElementById('war5').style.backgroundColor = 'gray';
    } else if (PlayerWarPerks.W5 == 0) {
        document.getElementById('war5').style.backgroundColor = 'crimson';
    } else if (PlayerWarPerks.W5 == 1) {
        document.getElementById('war5').style.backgroundColor = 'crimson';
        document.getElementById('war5').style.border = 'solid';
        document.getElementById('war5').style.borderColor = 'gold';
    }
    if (PlayerWarPerks.W6 == 0 && PlayerWarPerks.W3 == 0) {
        document.getElementById('war6').style.backgroundColor = 'gray';
    } else if (PlayerWarPerks.W6 == 0) {
        document.getElementById('war6').style.backgroundColor = 'crimson';
    } else if (PlayerWarPerks.W6 == 1) {
        document.getElementById('war6').style.backgroundColor = 'crimson';
        document.getElementById('war6').style.border = 'solid';
        document.getElementById('war6').style.borderColor = 'gold';
    }
    if (PlayerWarPerks.W7 == 0 && PlayerWarPerks.W4 == 0) {
        document.getElementById('war7').style.backgroundColor = 'gray';
    } else if (PlayerWarPerks.W7 == 0) {
        document.getElementById('war7').style.backgroundColor = 'crimson';
    } else if (PlayerWarPerks.W7 == 1) {
        document.getElementById('war7').style.backgroundColor = 'crimson';
        document.getElementById('war7').style.border = 'solid';
        document.getElementById('war7').style.borderColor = 'gold';
    }
    if (PlayerWarPerks.W8 == 0 && PlayerWarPerks.W5 == 0) {
        document.getElementById('war8').style.backgroundColor = 'gray';
    } else if (PlayerWarPerks.W8 == 0) {
        document.getElementById('war8').style.backgroundColor = 'crimson';
    } else if (PlayerWarPerks.W8 == 1) {
        document.getElementById('war8').style.backgroundColor = 'crimson';
        document.getElementById('war8').style.border = 'solid';
        document.getElementById('war8').style.borderColor = 'gold';
    }
    if (PlayerWarPerks.W9 == 0 && PlayerWarPerks.W6 == 0) {
        document.getElementById('war9').style.backgroundColor = 'gray';
    } else if (PlayerWarPerks.W9 == 0) {
        document.getElementById('war9').style.backgroundColor = 'crimson';
    } else if (PlayerWarPerks.W9 == 1) {
        document.getElementById('war9').style.backgroundColor = 'crimson';
        document.getElementById('war9').style.border = 'solid';
        document.getElementById('war9').style.borderColor = 'gold';
    }
    if (PlayerWarPerks.W10 == 0 && PlayerWarPerks.W7 == 0) {
        document.getElementById('war10').style.backgroundColor = 'gray';
    } else if (PlayerWarPerks.W10 == 0) {
        document.getElementById('war10').style.backgroundColor = 'crimson';
    } else if (PlayerWarPerks.W10 == 1) {
        document.getElementById('war10').style.backgroundColor = 'crimson';
        document.getElementById('war10').style.border = 'solid';
        document.getElementById('war10').style.borderColor = 'gold';
    }
    if (PlayerWarPerks.W11 == 0 && PlayerWarPerks.W8 == 0 || PlayerWarPerks.W9 == 0 || PlayerWarPerks.W10 == 0) {
        document.getElementById('war11').style.backgroundColor = 'gray';
    } else if (PlayerWarPerks.W11 == 0 && PlayerWarPerks.W8 == 1 && PlayerWarPerks.W9 == 1 && PlayerWarPerks.W10 == 1) {
        document.getElementById('war11').style.backgroundColor = 'crimson';
    } else if (PlayerWarPerks.W11 == 1) {
        document.getElementById('war11').style.backgroundColor = 'crimson';
        document.getElementById('war11').style.border = 'solid';
        document.getElementById('war11').style.borderColor = 'gold';
    }

    if (PlayerWarPerks.W12 == 0 && PlayerWarPerks.W13 == 0) {
        document.getElementById('war12').style.backgroundColor = 'gray';
    } else if (PlayerWarPerks.W12 == 0) {
        document.getElementById('war12').style.backgroundColor = 'crimson';
    } else if (PlayerWarPerks.W12 == 1) {
        document.getElementById('war12').style.backgroundColor = 'crimson';
        document.getElementById('war12').style.border = 'solid';
        document.getElementById('war12').style.borderColor = 'gold';
    }

    if (PlayerWarPerks.W13 == 0 && PlayerWarPerks.W11 == 0) {
        document.getElementById('war13').style.backgroundColor = 'gray';
    } else if (PlayerWarPerks.W13 == 0) {
        document.getElementById('war13').style.backgroundColor = 'crimson';
    } else if (PlayerWarPerks.W13 == 1) {
        document.getElementById('war13').style.backgroundColor = 'crimson';
        document.getElementById('war13').style.border = 'solid';
        document.getElementById('war13').style.borderColor = 'gold';
    }

    if (PlayerWarPerks.W14 == 0 && PlayerWarPerks.W13 == 0) {
        document.getElementById('war14').style.backgroundColor = 'gray';
    } else if (PlayerWarPerks.W14 == 0) {
        document.getElementById('war14').style.backgroundColor = 'crimson';
    } else if (PlayerWarPerks.W14 == 1) {
        document.getElementById('war14').style.backgroundColor = 'crimson';
        document.getElementById('war14').style.border = 'solid';
        document.getElementById('war14').style.borderColor = 'gold';
    }
    
}

document.getElementById('war1').addEventListener('mouseover', () => PerkDescription(1));
document.getElementById('war1').addEventListener('mouseout', () => PerkDescription(0));
document.getElementById('war2').addEventListener('mouseover', () => PerkDescription(2));
document.getElementById('war2').addEventListener('mouseout', () => PerkDescription(0));
document.getElementById('war3').addEventListener('mouseover', () => PerkDescription(3));
document.getElementById('war3').addEventListener('mouseout', () => PerkDescription(0));
document.getElementById('war4').addEventListener('mouseover', () => PerkDescription(4));
document.getElementById('war4').addEventListener('mouseout', () => PerkDescription(0));
document.getElementById('war5').addEventListener('mouseover', () => PerkDescription(5));
document.getElementById('war5').addEventListener('mouseout', () => PerkDescription(0));
document.getElementById('war6').addEventListener('mouseover', () => PerkDescription(6));
document.getElementById('war6').addEventListener('mouseout', () => PerkDescription(0));
document.getElementById('war7').addEventListener('mouseover', () => PerkDescription(7));
document.getElementById('war7').addEventListener('mouseout', () => PerkDescription(0));
document.getElementById('war8').addEventListener('mouseover', () => PerkDescription(8));
document.getElementById('war8').addEventListener('mouseout', () => PerkDescription(0));
document.getElementById('war9').addEventListener('mouseover', () => PerkDescription(9));
document.getElementById('war9').addEventListener('mouseout', () => PerkDescription(0));
document.getElementById('war10').addEventListener('mouseover', () => PerkDescription(10));
document.getElementById('war10').addEventListener('mouseout', () => PerkDescription(0));
document.getElementById('war11').addEventListener('mouseover', () => PerkDescription(11));
document.getElementById('war11').addEventListener('mouseout', () => PerkDescription(0));
document.getElementById('war12').addEventListener('mouseover', () => PerkDescription(12));
document.getElementById('war12').addEventListener('mouseout', () => PerkDescription(0));
document.getElementById('war13').addEventListener('mouseover', () => PerkDescription(13));
document.getElementById('war13').addEventListener('mouseout', () => PerkDescription(0));
document.getElementById('war14').addEventListener('mouseover', () => PerkDescription(14));
document.getElementById('war14').addEventListener('mouseout', () => PerkDescription(0));
document.getElementById('hun1').addEventListener('mouseover', () => PerkDescription2(1));
document.getElementById('hun1').addEventListener('mouseout', () => PerkDescription2(0));
document.getElementById('hun2').addEventListener('mouseover', () => PerkDescription2(2));
document.getElementById('hun2').addEventListener('mouseout', () => PerkDescription2(0));
document.getElementById('hun3').addEventListener('mouseover', () => PerkDescription2(3));
document.getElementById('hun3').addEventListener('mouseout', () => PerkDescription2(0));
document.getElementById('hun4').addEventListener('mouseover', () => PerkDescription2(4));
document.getElementById('hun4').addEventListener('mouseout', () => PerkDescription2(0));
document.getElementById('hun5').addEventListener('mouseover', () => PerkDescription2(5));
document.getElementById('hun5').addEventListener('mouseout', () => PerkDescription2(0));
document.getElementById('hun6').addEventListener('mouseover', () => PerkDescription2(6));
document.getElementById('hun6').addEventListener('mouseout', () => PerkDescription2(0));
document.getElementById('hun7').addEventListener('mouseover', () => PerkDescription2(7));
document.getElementById('hun7').addEventListener('mouseout', () => PerkDescription2(0));
document.getElementById('mag1').addEventListener('mouseover', () => PerkDescription3(1));
document.getElementById('mag1').addEventListener('mouseout', () => PerkDescription3(0));
document.getElementById('mag2').addEventListener('mouseover', () => PerkDescription3(2));
document.getElementById('mag2').addEventListener('mouseout', () => PerkDescription3(0));
document.getElementById('mag3').addEventListener('mouseover', () => PerkDescription3(3));
document.getElementById('mag3').addEventListener('mouseout', () => PerkDescription3(0));
document.getElementById('mag4').addEventListener('mouseover', () => PerkDescription3(4));
document.getElementById('mag4').addEventListener('mouseout', () => PerkDescription3(0));



function BuyPerk(b) {
    if (b == 1) {
        if (PlayerStats.SF >= PlayerWarPerks.C1 && PlayerWarPerks.W1 == 1  && PerksStarted.Amount <= 1) {
            PlayerStats.SF -= PlayerWarPerks.C1;
            PlayerStats.dmg += 5;
            PlayerWarPerks.W1 = 2;
            PerksStarted.Amount++;
            PerksStarted.Warrior = true;
            ClassNameSet();
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            WarPerks();
        }
    } else if (b == 2) {
        if (PlayerStats.SF >= PlayerWarPerks.C2 && PlayerWarPerks.W1 == 2 && PlayerWarPerks.W2 == 0) {
            PlayerStats.SF -= PlayerWarPerks.C2;
            PlayerStats.def += 5;
            if(PlayerStats.def >= 40) {
                PlayerStats.trudef -= 0.015;
            } else {
                PlayerStats.trudef -= 0.05;
            }
            PlayerStats.maxHealth += 30;
            PlayerWarPerks.W2 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            WarPerks();
        }
    } else if (b == 3) {
        if (PlayerStats.SF >= PlayerWarPerks.C3 && PlayerWarPerks.W1 == 2 && PlayerWarPerks.W3 == 0) {
            PlayerStats.SF -= PlayerWarPerks.C3;
            PlayerStats.dmg += 3;
            PlayerStats.str += 2;
            PlayerStats.trustr += 0.1;
            PlayerWarPerks.W3 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            WarPerks();
        }
    } else if (b == 4) {
        if (PlayerStats.SF >= PlayerWarPerks.C4 && PlayerWarPerks.W1 == 2 && PlayerWarPerks.W4 == 0) {
            PlayerStats.SF -= PlayerWarPerks.C4;
            PlayerStats.maxHealth += 50;
            PlayerStats.dmg += 6;
            PlayerWarPerks.W4 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            WarPerks();
        }
    } else if (b == 5) {
        if (PlayerStats.SF >= PlayerWarPerks.C5 && PlayerWarPerks.W2 == 1 && PlayerWarPerks.W5 == 0) {
            PlayerStats.SF -= PlayerWarPerks.C5;
            PlayerStats.maxHealth += 120;
            PlayerStats.def += 3;
            if(PlayerStats.def >= 40) {
                PlayerStats.trudef -= 0.009;
            } else {
                PlayerStats.trudef -= 0.03;
            }
            if(PlayerStats.trudef < 0.4) {
                PlayerStats.trudef = 0.4;
            }
            PlayerWarPerks.W5 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            WarPerks();
        }
    } else if (b == 6) {
        if (PlayerStats.SF >= PlayerWarPerks.C6 && PlayerWarPerks.W3 == 1 && PlayerWarPerks.W6 == 0) {
            PlayerStats.SF -= PlayerWarPerks.C6;
            PlayerStats.str += 4;
            PlayerStats.trustr += 0.2;
            PlayerStats.dod += 3;
            PlayerStats.dmg += 2;
            PlayerWarPerks.W6 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            WarPerks();
        }
    } else if (b == 7) {
        if (PlayerStats.SF >= PlayerWarPerks.C7 && PlayerWarPerks.W4 == 1 && PlayerWarPerks.W7 == 0) {
            PlayerStats.SF -= PlayerWarPerks.C7;
            PlayerStats.dmg += 8;
            PlayerWarPerks.W7 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            WarPerks();
        }
    } else if (b == 8) {
        if (PlayerStats.SF >= PlayerWarPerks.C8 && PlayerWarPerks.W5 == 1 && PlayerWarPerks.W8 == 0) {
            PlayerStats.SF -= PlayerWarPerks.C8;
            PlayerStats.def += 10;
            if(PlayerStats.def >= 40) {
                PlayerStats.trudef -= 0.03;
            } else {
                PlayerStats.trudef -= 0.1;
            }
            if(PlayerStats.trudef < 0.4) {
                PlayerStats.trudef = 0.4;
            }
            PlayerStats.maxHealth += 150;
            PlayerWarPerks.W8 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            WarPerks();
        }
    } else if (b == 9) {
        if (PlayerStats.SF >= PlayerWarPerks.C9 && PlayerWarPerks.W6 == 1 && PlayerWarPerks.W9 == 0) {
            PlayerStats.SF -= PlayerWarPerks.C9;
            PlayerStats.str += 5;
            PlayerStats.dod += 5;
            PlayerStats.crt += 2;
            PlayerStats.trustr += 0.25;
            PlayerWarPerks.W9 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            WarPerks();
        }
    } else if (b == 10) {
        if (PlayerStats.SF >= PlayerWarPerks.C10 && PlayerWarPerks.W7 == 1 && PlayerWarPerks.W10 == 0) {
            PlayerStats.SF -= PlayerWarPerks.C10;
            PlayerStats.dmg += 10;
            PlayerWarPerks.W10 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            WarPerks();
        }
    } else if (b == 11) {
        if (PlayerStats.SF >= PlayerWarPerks.C11 && PlayerWarPerks.W8 == 1 && PlayerWarPerks.W9 == 1 && PlayerWarPerks.W10 == 1 && PlayerWarPerks.W11 == 0) {
            PlayerStats.SF -= PlayerWarPerks.C11;
            PlayerStats.wis += 5;
            PlayerStats.mnd += 5;
            PlayerStats.maxMana += 125;
            PlayerStats.truwis += 0.25;
            PlayerWarPerks.W11 = 1;
            PlayerAbilities.Focus = 1;
            SkillsOPEN = false;
            SpecialsOPEN = false;
            MagicOPEN = false;
            document.getElementById('SkillScreenBox').style.display = 'none';
            document.getElementById('MagicScreenBox').style.display = 'none';
            document.getElementById('SpecialScreenBox').style.display = 'none';
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            WarPerks();
        }
    } else if (b == 12) {
        if (PlayerStats.SF >= PlayerWarPerks.C12 && PlayerWarPerks.W13 == 1 && PlayerWarPerks.W12 == 0) {
            PlayerStats.SF -= PlayerWarPerks.C12;
            PlayerStats.def += 15;
            if(PlayerStats.def >= 40) {
                PlayerStats.trudef -= 0.05;
            } else {
                PlayerStats.trudef -= 0.15;
            }
            if(PlayerStats.trudef < 0.4) {
                PlayerStats.trudef = 0.4;
            }
            PlayerStats.maxHealth += 500;
            PlayerWarPerks.W12 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            WarPerks();
        }
    } else if (b == 13) {
        if (PlayerStats.SF >= PlayerWarPerks.C13 && PlayerWarPerks.W11 == 1 && PlayerWarPerks.W13 == 0) {
            PlayerStats.SF -= PlayerWarPerks.C13;
            PlayerStats.dmg += 15;
            PlayerWarPerks.W13 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            WarPerks();
        }
    } else if (b == 14) {
        if (PlayerStats.SF >= PlayerWarPerks.C14 && PlayerWarPerks.W13 == 1 && PlayerWarPerks.W14 == 0) {
            PlayerStats.SF -= PlayerWarPerks.C14;
            PlayerStats.str += 10;
            PlayerStats.dmg += 25;
            PlayerStats.trustr += 0.5;
            PlayerWarPerks.W14 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            WarPerks();
        }
    } else if (b == 'h1') {
        if (PlayerStats.SF >= PlayerHunPerks.C1 && PlayerHunPerks.W1 == 1  && PerksStarted.Amount <= 1) {
            PlayerStats.SF -= PlayerHunPerks.C1;
            PlayerStats.crt += 5;
            PlayerHunPerks.W1 = 2;
            PerksStarted.Amount++;
            PerksStarted.Hunter = true;
            ClassNameSet();
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            HunPerks();
        }
    } else if (b == 'h2') {
        if (PlayerStats.SF >= PlayerHunPerks.C2 && PlayerHunPerks.W1 == 2 && PlayerHunPerks.W2 == 0) {
            PlayerStats.SF -= PlayerHunPerks.C2;
            PlayerStats.dod += 5;
            PlayerStats.vig++;
            PlayerStats.maxHealth += 25;
            PlayerHunPerks.W2 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            HunPerks();
        }
    } else if (b == 'h3') {
        if (PlayerStats.SF >= PlayerHunPerks.C3 && PlayerHunPerks.W1 == 2 && PlayerHunPerks.W3 == 0) {
            PlayerStats.SF -= PlayerHunPerks.C3;
            PlayerStats.dmg += 3;
            PlayerStats.agi += 4;
            PlayerHunPerks.W3 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            HunPerks();
        }
    } else if (b == 'h4') {
        if (PlayerStats.SF >= PlayerHunPerks.C4 && PlayerHunPerks.W1 == 2 && PlayerHunPerks.W4 == 0) {
            PlayerStats.SF -= PlayerHunPerks.C4;
            PlayerStats.crt += 7;
            PlayerHunPerks.W4 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            HunPerks();
        }
    } else if (b == 'h5') {
        if (PlayerStats.SF >= PlayerHunPerks.C5 && PlayerHunPerks.W2 == 1 && PlayerHunPerks.W5 == 0) {
            PlayerStats.SF -= PlayerHunPerks.C5;
            PlayerStats.dod += 10;
            PlayerHunPerks.W5 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            HunPerks();
        }
    } else if (b == 'h6') {
        if (PlayerStats.SF >= PlayerHunPerks.C6 && PlayerHunPerks.W3 == 1 && PlayerHunPerks.W6 == 0) {
            PlayerStats.SF -= PlayerHunPerks.C6;
            PlayerAbilities.Poison = 1;
            PlayerHunPerks.W6 = 1;
            SkillsOPEN = false;
            SpecialsOPEN = false;
            MagicOPEN = false;
            document.getElementById('SkillScreenBox').style.display = 'none';
            document.getElementById('MagicScreenBox').style.display = 'none';
            document.getElementById('SpecialScreenBox').style.display = 'none';
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            HunPerks();
        }
    } else if (b == 'h7') {
        if (PlayerStats.SF >= PlayerHunPerks.C7 && PlayerHunPerks.W4 == 1 && PlayerHunPerks.W7 == 0) {
            PlayerStats.SF -= PlayerHunPerks.C7;
            PlayerStats.agi += 5;
            PlayerStats.crt += 5;
            PlayerHunPerks.W7 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            HunPerks();
        }
    } else if (b == 'm1') {
        if (PlayerStats.SF >= PlayerMagPerks.C1 && PlayerMagPerks.W1 == 1 && PerksStarted.Amount <= 1) {
            PlayerStats.SF -= PlayerHunPerks.C1;
            PlayerStats.wis += 5;
            PlayerStats.truwis += 0.25;
            PlayerMagPerks.W1 = 2;
            PerksStarted.Amount++;
            PerksStarted.Mage = true;
            ClassNameSet();
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            MagPerks();
        }
    }
    else if (b == 'm2') {
        if (PlayerStats.SF >= PlayerMagPerks.C2 && PlayerMagPerks.W1 == 2 && PlayerMagPerks.W2 == 0) {
            PlayerStats.SF -= PlayerMagPerks.C2;
            PlayerStats.mnd += 5;
            PlayerStats.maxMana += 125;
            PlayerMagPerks.W2 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            MagPerks();
        }
    }
    else if (b == 'm3') {
        if (PlayerStats.SF >= PlayerMagPerks.C3 && PlayerMagPerks.W1 == 2 && PlayerMagPerks.W3 == 0) {
            PlayerStats.SF -= PlayerMagPerks.C3;
            PlayerMagPerks.W3 = 1;
            PlayerSpells.Meteor = 1;
            SkillsOPEN = false;
            SpecialsOPEN = false;
            MagicOPEN = false;
            document.getElementById('SkillScreenBox').style.display = 'none';
            document.getElementById('MagicScreenBox').style.display = 'none';
            document.getElementById('SpecialScreenBox').style.display = 'none';
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            MagPerks();
        }
    }
    else if (b == 'm4') {
        if (PlayerStats.SF >= PlayerMagPerks.C4 && PlayerMagPerks.W1 == 2 && PlayerMagPerks.W4 == 0) {
            PlayerStats.SF -= PlayerMagPerks.C4;
            PlayerStats.wis += 10;
            PlayerStats.truwis += 0.5;
            PlayerMagPerks.W4 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            MagPerks();
        }
    }
}

function PerkDescription(j) {
    if (j == 0) {
        document.getElementById('PerkDesc').textContent = '';
    }
    else if (j == 1) {
        document.getElementById('PerkDesc').textContent = `Warrior's Arm grants +5 to base damage. Current DMG is ${PlayerStats.dmg}. Cost: ${PlayerWarPerks.C1} SF.`;
    } else if (j == 2) {
        document.getElementById('PerkDesc').textContent = `Harsh Beatings grants +5 to DEF and +30 HP. Cost: ${PlayerWarPerks.C2} SF.`;
    } else if (j == 3) {
        document.getElementById('PerkDesc').textContent = `Hard Grip grants +3 to base damage and +2 to STR. Cost: ${PlayerWarPerks.C3} SF.`;
    } else if (j == 4) {
        document.getElementById('PerkDesc').textContent = `Deadly Blade grants +6 to base damage and +50 HP. Cost: ${PlayerWarPerks.C4} SF.`;
    } else if (j == 5) {
        document.getElementById('PerkDesc').textContent = `Steel Skin grants +3 to DEF and +120 HP. Cost: ${PlayerWarPerks.C5} SF.`;
    } else if (j == 6) {
        document.getElementById('PerkDesc').textContent = `Diligent Practice grants +4 STR, +3 DODGE and +2 base damage. Cost: ${PlayerWarPerks.C6} SF.`;
    } else if (j == 7) {
        document.getElementById('PerkDesc').textContent = `Blademaster grants +8 to base damage. Cost: ${PlayerWarPerks.C7} SF.`;
    } else if (j == 8) {
        document.getElementById('PerkDesc').textContent = `Perfect Defense grants +10 DEF and +150 HP. Cost: ${PlayerWarPerks.C8} SF.`;
    } else if (j == 9) {
        document.getElementById('PerkDesc').textContent = `Fall down, Get back up grants +5 STR, +5 DODGE and +2 CRT. Cost: ${PlayerWarPerks.C9} SF.`;
    } else if (j == 10) {
        document.getElementById('PerkDesc').textContent = `Master's Temperance grants +10 to base damage. Cost: ${PlayerWarPerks.C10} SF.`;
    } else if (j == 11) {
        document.getElementById('PerkDesc').textContent = `Tempered Mind grants +5 MND, +5 WIS and unlocks Focused Dash skill. Cost: ${PlayerWarPerks.C11} SF.`;
    } else if (j == 12) {
        document.getElementById('PerkDesc').textContent = `THE WALL grants +15 DEF and +500 HP. Cost: 1 500 000 SF.`;
    } else if (j == 13) {
        document.getElementById('PerkDesc').textContent = `Blade Honing grants +15 to base damage. Cost: 1 000 000 SF.`;
    } else if (j == 14) {
        document.getElementById('PerkDesc').textContent = `Pact with a devil grants +10 STR and +25 base damage. Cost: 2 000 000 SF.`;
    }
}

function PerkDescription2(p) {
    if (p == 0) {
        document.getElementById('PerkDesc2').textContent = ``;
    }
    else if (p == 1) {
        document.getElementById('PerkDesc2').textContent = `Keen Sense grants +5 CRT. Cost: ${PlayerHunPerks.C1} SF.`;
    }
    else if (p == 2) {
        document.getElementById('PerkDesc2').textContent = `Awareness grants +5 DOD and +1 VIG. Cost: ${PlayerHunPerks.C2} SF.`;
    }
    else if (p == 3) {
        document.getElementById('PerkDesc2').textContent = `Fighting course grants +3 to base damage and +4 AGI. Cost: ${PlayerHunPerks.C3} SF.`;
    }
    else if (p == 4) {
        document.getElementById('PerkDesc2').textContent = `Assassin's Technique grants +7 CRT. Cost: ${PlayerHunPerks.C4} SF.`;
    }
    else if (p == 5) {
        document.getElementById('PerkDesc2').textContent = `Reflex Training grants +10 DOD. Cost: ${PlayerHunPerks.C5} SF.`;
    }
    else if (p == 6) {
        document.getElementById('PerkDesc2').textContent = `Assasination Course grants Skill Poison Arrow. Cost: ${PlayerHunPerks.C6} SF.`;
    }
    else if (p == 7) {
        document.getElementById('PerkDesc2').textContent = `One with the Land grants +5 AGI and +5 CRT. Cost: ${PlayerHunPerks.C7} SF.`;
    }
    
}

function PerkDescription3(m) {
    if (m == 0) {
        document.getElementById('PerkDesc3').textContent = ``;
    }
    else if (m == 1) {
        document.getElementById('PerkDesc3').textContent = `Book Good grants +5 WIS. Cost: ${PlayerHunPerks.C1} SF.`;
    }
    else if (m == 2) {
        document.getElementById('PerkDesc3').textContent = `Channel the Reserves grants +5 MND. Cost: ${PlayerHunPerks.C2} SF.`;
    }
    else if (m == 3) {
        document.getElementById('PerkDesc3').textContent = `Study the Scriptures grants spell Meteor Strike. Cost: ${PlayerHunPerks.C3} SF.`;
    }
    else if (m == 4) {
        document.getElementById('PerkDesc3').textContent = `Hone the Mind grants +10 WIS. Cost: ${PlayerHunPerks.C4} SF.`;
    }
}

function Explore(l) {
    document.getElementById('ForestEvent1').style.display = 'none';
    document.getElementById('ForestEvent2').style.display = 'none';
    if (l == 0) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'block';
        let ran = Math.ceil(Math.random() * 3);
        if (ran == 1) {
            document.getElementById('ForestEvent1').style.display = 'block';
            let rand = Math.ceil(Math.random() * (720 - 50) + 50);
            document.getElementById('FRAGMENTF1').textContent = `Its Soul Fragment is still there! You gain ${rand} SF!`
            PlayerStats.SF += rand;
        } else if (ran == 2) {
            document.getElementById('ForestEvent2').style.display = 'block';
        } else if (ran == 3) {
            document.getElementById('Events').style.display = 'none';
            document.getElementById('MainCombat').style.display = 'block';
            Goblin();
        }
    } else if (l == 1) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        Goblin();
    } else if (l == 2) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        Orc();
    } else if (l == 3) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        Demon();
    } else if (l == 4) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        Giant();
    } else if (l == 5) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        UndeadKnight();
    } else if (l == 6) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        CurseOrc();
    } else if (l == 7) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        Spirit();
    } else if (l == 8) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        GiantChief();
    } else if (l == 9) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        KnightGuard();
    } else if (l == 10 && BossesBeaten.Aridomos == false) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        Boss1();
    } else if (l == 11 && BossesBeaten.Aridomos == true) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        FearfulBash();
    }
    else if (l == 12 && BossesBeaten.Aridomos == true) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        Rowd();
    }
    else if (l == 13 && BossesBeaten.Aridomos == true) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        Demon2();
    }
    else if (l == 14 && BossesBeaten.Aridomos == true) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        LesVamp();
    }
    else if (l == 15 && BossesBeaten.Aridomos == true) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        GreatGiant();
    }
    else if (l == 16 && BossesBeaten.Aridomos == true) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        Titan();
    }
    else if (l == 17 && BossesBeaten.Aridomos == true) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        DeathKnight();
    }
    else if (l == 18 && BossesBeaten.Aridomos == true) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        Bigfoot();
    }
    else if (l == 19 && BossesBeaten.Aridomos == true) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        Retainer();
    }
    else if (l == 20 && BossesBeaten.Aridomos == true && BossesBeaten.Asmond == false) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        Asmond();
    }
    else if (l == 21 && BossesBeaten.Asmond == true) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        Mask();
    }
    else if (l == 22 && BossesBeaten.Asmond == true) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        Abomination();
    }
}
// CHARACTER SCREEN
function UpChar() {
    document.getElementById('damg').textContent = `Fake DMG: ${PlayerStats.dmg}`;
    document.getElementById('trudmg').textContent = `True DMG: ${Math.floor(PlayerStats.dmg * PlayerStats.trustr)}`;
    document.getElementById('mhp').textContent = `HP: ${PlayerStats.maxHealth}`;
    document.getElementById('mm').textContent = `MP: ${PlayerStats.maxMana}`;
    document.getElementById('dc').textContent = `Dodge chance: ${PlayerStats.dod + 10}%`;
    document.getElementById('cc').textContent = `Crit chance: ${PlayerStats.crt + 10}%`;
    document.getElementById('sped').textContent = `Slowness: ${Math.floor(35 - PlayerStats.truagi)}`;
    document.getElementById('def7').textContent = `Damage Reduction: ${Math.floor((1 - PlayerStats.trudef) * 100)}%`;
    document.getElementById('clas').textContent = `Class: ${ClassName}`;
}

function LoadStore() {
    document.getElementById('Gam').textContent = `G: ${PlayerStats.Gold}`;
    document.getElementById('wep1').addEventListener('mouseover', () => ItemInfo(1));
    document.getElementById('wep1').addEventListener('mouseout', () => ItemInfo(0));
    document.getElementById('wep2').addEventListener('mouseover', () => ItemInfo(2));
    document.getElementById('wep2').addEventListener('mouseout', () => ItemInfo(0));
    document.getElementById('wep3').addEventListener('mouseover', () => ItemInfo(3));
    document.getElementById('wep3').addEventListener('mouseout', () => ItemInfo(0));
    document.getElementById('wep4').addEventListener('mouseover', () => ItemInfo(4));
    document.getElementById('wep4').addEventListener('mouseout', () => ItemInfo(0));
    document.getElementById('wep5').addEventListener('mouseover', () => ItemInfo(9));
    document.getElementById('wep5').addEventListener('mouseout', () => ItemInfo(0));
    document.getElementById('arm1').addEventListener('mouseover', () => ItemInfo(5));
    document.getElementById('arm1').addEventListener('mouseout', () => ItemInfo(0));
    document.getElementById('arm2').addEventListener('mouseover', () => ItemInfo(6));
    document.getElementById('arm2').addEventListener('mouseout', () => ItemInfo(0));
    document.getElementById('arm3').addEventListener('mouseover', () => ItemInfo(7));
    document.getElementById('arm3').addEventListener('mouseout', () => ItemInfo(0));
    document.getElementById('arm4').addEventListener('mouseover', () => ItemInfo(8));
    document.getElementById('arm4').addEventListener('mouseout', () => ItemInfo(0));
    document.getElementById('arm5').addEventListener('mouseover', () => ItemInfo(10));
    document.getElementById('arm5').addEventListener('mouseout', () => ItemInfo(0));
    document.getElementById('ResBosses').addEventListener('mouseover', () => ItemInfo(11));
    document.getElementById('ResBosses').addEventListener('mouseout', () => ItemInfo(0));
    document.getElementById('Book1').addEventListener('mouseover', () => ItemInfo(12));
    document.getElementById('Book1').addEventListener('mouseout', () => ItemInfo(0));
    document.getElementById('Book2').addEventListener('mouseover', () => ItemInfo(13));
    document.getElementById('Book2').addEventListener('mouseout', () => ItemInfo(0));
    document.getElementById('Book3').addEventListener('mouseover', () => ItemInfo(14));
    document.getElementById('Book3').addEventListener('mouseout', () => ItemInfo(0));
    document.getElementById('ManaPotion').addEventListener('mouseover', () => ItemInfo(15));
    document.getElementById('ManaPotion').addEventListener('mouseout', () => ItemInfo(0));
}

function ItemInfo(h) {
    if (h == 0) {
        document.getElementById('StoreDesc').textContent = '';
    } else if (h == 1) {
        document.getElementById('StoreDesc').textContent = 'Bronze sword grants +5 base damage. Cost: 700G';
    } else if (h == 2) {
        document.getElementById('StoreDesc').textContent = 'Silver sword grants +12 base damage. Cost: 2500G';
    } else if (h == 3) {
        document.getElementById('StoreDesc').textContent = 'Gold sword grants +20 base damage. Cost: 8000G';
    } else if (h == 4) {
        document.getElementById('StoreDesc').textContent = 'Mythic Blade grants +35 base damage. Cost: 20 000G';
    } else if (h == 9) {
        document.getElementById('StoreDesc').textContent = 'Greatsword of Legend grants +70 base damage and +5 STR. Cost: 50 000G, must have beaten level 10.';
    } else if (h == 5) {
        document.getElementById('StoreDesc').textContent = 'Bronze armor grants +50 HP. Cost: 500G';
    } else if (h == 6) {
        document.getElementById('StoreDesc').textContent = 'Silver armor grants +110 HP. Cost: 1800G';
    } else if (h == 7) {
        document.getElementById('StoreDesc').textContent = 'Gold armor grants +250 HP. Cost: 7500G';
    } else if (h == 8) {
        document.getElementById('StoreDesc').textContent = 'Mythic Set grants +550 HP. Cost: 23 000G';
    } else if (h == 10) {
        document.getElementById('StoreDesc').textContent = 'Armor of the Legend grants +1000 HP and +10 DEF. Cost: 57 000G.';
    }
    else if (h == 11) {
        document.getElementById('StoreDesc').textContent = 'Resurrect all bosses to fight them again. Cost: 100 000G. Must have beaten at least one boss.';
    }
    else if (h == 12) {
        document.getElementById('StoreDesc').textContent = 'Dusty Spell Tome increases Fireball damage by +30 and Meteor Strike damage by +50. Cost: 10 000G';
    }
    else if (h == 13) {
        document.getElementById('StoreDesc').textContent = "Wizard's Spell Tome increases Fireball damage by +60 and Meteor Strike damage by +90. Cost: 50 000G";
    }
    else if (h == 14) {
        document.getElementById('StoreDesc').textContent = 'Magnum Arcania increases Fireball damage by +110 and Meteor Strike damage by +240. Additionally grants +200 mana. Cost: 250 000G';
    }
    else if (h == 15) {
        document.getElementById('StoreDesc').textContent = `Mana Potion recovers 200 mana. Cost: 10 000G. Owned: ${Inv.ManPot}`;
    }


}

function BuyItem(x) {
    if (x == 1) {
        if (PlayerStats.Gold >= StorePrices.wp1 && PlayerEquip.bought1 == 0) {
            PlayerStats.Gold -= StorePrices.wp1;
            PlayerEquip.bought1 = 1;
            PlayerEquip.WPN1 = 1;
            PlayerEquip.WPN2 = 0;
            PlayerEquip.WPN3 = 0;
            PlayerEquip.WPN4 = 0;
            PlayerEquip.WPN5 = 0;
            PlayerStats.dmg -= PlayerPower.WEP;
            PlayerStats.str -= PlayerPower.STR;
            if (PlayerPower.STR == 5) {
                PlayerPower.STR = 0;
            }
            PlayerPower.WEP = 5;
            PlayerStats.dmg += PlayerPower.WEP;
            document.getElementById('wep1').classList.add("SelectedStore");
            document.getElementById('wep2').classList.remove("SelectedStore");
            document.getElementById('wep3').classList.remove("SelectedStore");
            document.getElementById('wep4').classList.remove("SelectedStore");
            document.getElementById('wep5').classList.remove("SelectedStore");
            document.getElementById('buymark1').style.opacity = '0%';
            LoadStore();
        } else if (PlayerEquip.bought1 == 1) {
            PlayerEquip.WPN1 = 1;
            PlayerEquip.WPN2 = 0;
            PlayerEquip.WPN3 = 0;
            PlayerEquip.WPN4 = 0;
            PlayerEquip.WPN5 = 0;
            PlayerStats.dmg -= PlayerPower.WEP;
            PlayerStats.str -= PlayerPower.STR;
            if (PlayerPower.STR == 5) {
                PlayerPower.STR = 0;
            }
            PlayerPower.WEP = 5;
            PlayerStats.dmg += PlayerPower.WEP;
            document.getElementById('wep1').classList.add("SelectedStore");
            document.getElementById('wep2').classList.remove("SelectedStore");
            document.getElementById('wep3').classList.remove("SelectedStore");
            document.getElementById('wep4').classList.remove("SelectedStore");
            document.getElementById('wep5').classList.remove("SelectedStore");
            LoadStore();
        }
    } else if (x == 2) {
        if (PlayerStats.Gold >= StorePrices.wp2 && PlayerEquip.bought2 == 0) {
            PlayerStats.Gold -= StorePrices.wp2;
            PlayerEquip.bought2 = 1;
            PlayerEquip.WPN1 = 0;
            PlayerEquip.WPN2 = 1;
            PlayerEquip.WPN3 = 0;
            PlayerEquip.WPN4 = 0;
            PlayerEquip.WPN5 = 0;
            PlayerStats.dmg -= PlayerPower.WEP;
            PlayerStats.str -= PlayerPower.STR;
            if (PlayerPower.STR == 5) {
                PlayerPower.STR = 0;
            }
            PlayerPower.WEP = 12;
            PlayerStats.dmg += PlayerPower.WEP;
            document.getElementById('wep1').classList.remove("SelectedStore");
            document.getElementById('wep2').classList.add("SelectedStore");
            document.getElementById('wep3').classList.remove("SelectedStore");
            document.getElementById('wep4').classList.remove("SelectedStore");
            document.getElementById('wep5').classList.remove("SelectedStore");
            document.getElementById('buymark2').style.opacity = '0%';
            LoadStore();
        } else if (PlayerEquip.bought2 == 1) {
            PlayerEquip.WPN1 = 0;
            PlayerEquip.WPN2 = 1;
            PlayerEquip.WPN3 = 0;
            PlayerEquip.WPN4 = 0;
            PlayerEquip.WPN5 = 0;
            PlayerStats.dmg -= PlayerPower.WEP;
            PlayerStats.str -= PlayerPower.STR;
            if (PlayerPower.STR == 5) {
                PlayerPower.STR = 0;
            }
            PlayerPower.WEP = 12;
            PlayerStats.dmg += PlayerPower.WEP;
            document.getElementById('wep1').classList.remove("SelectedStore");
            document.getElementById('wep2').classList.add("SelectedStore");
            document.getElementById('wep3').classList.remove("SelectedStore");
            document.getElementById('wep4').classList.remove("SelectedStore");
            document.getElementById('wep5').classList.remove("SelectedStore");

            LoadStore();
        }
    } else if (x == 3) {
        if (PlayerStats.Gold >= StorePrices.wp3 && PlayerEquip.bought3 == 0) {
            PlayerStats.Gold -= StorePrices.wp3;
            PlayerEquip.bought3 = 1;
            PlayerEquip.WPN1 = 0;
            PlayerEquip.WPN2 = 0;
            PlayerEquip.WPN3 = 1;
            PlayerEquip.WPN4 = 0;
            PlayerEquip.WPN5 = 0;
            PlayerStats.dmg -= PlayerPower.WEP;
            PlayerStats.str -= PlayerPower.STR;
            if (PlayerPower.STR == 5) {
                PlayerPower.STR = 0;
            }
            PlayerPower.WEP = 20;
            PlayerStats.dmg += PlayerPower.WEP;
            document.getElementById('wep1').classList.remove("SelectedStore");
            document.getElementById('wep2').classList.remove("SelectedStore");
            document.getElementById('wep3').classList.add("SelectedStore");
            document.getElementById('wep4').classList.remove("SelectedStore");
            document.getElementById('wep5').classList.remove("SelectedStore");
            document.getElementById('buymark3').style.opacity = '0%';
            LoadStore();
        } else if (PlayerEquip.bought3 == 1) {
            PlayerEquip.WPN1 = 0;
            PlayerEquip.WPN2 = 0;
            PlayerEquip.WPN3 = 1;
            PlayerEquip.WPN4 = 0;
            PlayerEquip.WPN5 = 0;
            PlayerStats.dmg -= PlayerPower.WEP;
            PlayerStats.str -= PlayerPower.STR;
            if (PlayerPower.STR == 5) {
                PlayerPower.STR = 0;
            }
            PlayerPower.WEP = 20;
            PlayerStats.dmg += PlayerPower.WEP;
            document.getElementById('wep1').classList.remove("SelectedStore");
            document.getElementById('wep2').classList.remove("SelectedStore");
            document.getElementById('wep3').classList.add("SelectedStore");
            document.getElementById('wep4').classList.remove("SelectedStore");
            document.getElementById('wep5').classList.remove("SelectedStore");
            LoadStore();
        }
    } else if (x == 4) {
        if (PlayerStats.Gold >= StorePrices.wp4 && PlayerEquip.bought4 == 0) {
            PlayerStats.Gold -= StorePrices.wp4;
            PlayerEquip.bought4 = 1;
            PlayerEquip.WPN1 = 0;
            PlayerEquip.WPN2 = 0;
            PlayerEquip.WPN3 = 0;
            PlayerEquip.WPN4 = 1;
            PlayerEquip.WPN5 = 0;
            PlayerStats.dmg -= PlayerPower.WEP;
            PlayerStats.str -= PlayerPower.STR;
            if (PlayerPower.STR == 5) {
                PlayerPower.STR = 0;
            }
            PlayerPower.WEP = 35;
            PlayerStats.dmg += PlayerPower.WEP;
            document.getElementById('wep1').classList.remove("SelectedStore");
            document.getElementById('wep2').classList.remove("SelectedStore");
            document.getElementById('wep3').classList.remove("SelectedStore");
            document.getElementById('wep4').classList.add("SelectedStore");
            document.getElementById('wep5').classList.remove("SelectedStore");
            document.getElementById('buymark4').style.opacity = '0%';
            LoadStore();
        } else if (PlayerEquip.bought4 == 1) {
            PlayerEquip.WPN1 = 0;
            PlayerEquip.WPN2 = 0;
            PlayerEquip.WPN3 = 0;
            PlayerEquip.WPN4 = 1;
            PlayerEquip.WPN5 = 0;
            PlayerStats.dmg -= PlayerPower.WEP;
            PlayerStats.str -= PlayerPower.STR;
            if (PlayerPower.STR == 5) {
                PlayerPower.STR = 0;
            }
            PlayerPower.WEP = 35;
            PlayerStats.dmg += PlayerPower.WEP;
            document.getElementById('wep1').classList.remove("SelectedStore");
            document.getElementById('wep2').classList.remove("SelectedStore");
            document.getElementById('wep3').classList.remove("SelectedStore");
            document.getElementById('wep4').classList.add("SelectedStore");
            document.getElementById('wep5').classList.remove("SelectedStore");
            LoadStore();
        }
    } else if (x == 9) {
        if (PlayerStats.Gold >= StorePrices.wp5 && PlayerEquip.bought9 == 0 && BossesBeaten.Aridomos == true) {
            PlayerStats.Gold -= StorePrices.wp5;
            PlayerEquip.bought9 = 1;
            PlayerEquip.WPN1 = 0;
            PlayerEquip.WPN2 = 0;
            PlayerEquip.WPN3 = 0;
            PlayerEquip.WPN4 = 0;
            PlayerEquip.WPN5 = 1;
            PlayerStats.dmg -= PlayerPower.WEP;
            PlayerStats.str -= PlayerPower.STR;
            PlayerPower.WEP = 70;
            PlayerPower.STR = 5;
            PlayerStats.dmg += PlayerPower.WEP;
            PlayerStats.str += PlayerPower.STR;
            document.getElementById('wep1').classList.remove("SelectedStore");
            document.getElementById('wep2').classList.remove("SelectedStore");
            document.getElementById('wep3').classList.remove("SelectedStore");
            document.getElementById('wep4').classList.remove("SelectedStore");
            document.getElementById('wep5').classList.add("SelectedStore");
            document.getElementById('buymark5').style.opacity = '0%';
            LoadStore();
        } else if (PlayerEquip.bought9 == 1) {
            PlayerEquip.WPN1 = 0;
            PlayerEquip.WPN2 = 0;
            PlayerEquip.WPN3 = 0;
            PlayerEquip.WPN4 = 0;
            PlayerEquip.WPN5 = 1;
            PlayerStats.dmg -= PlayerPower.WEP;
            PlayerStats.str -= PlayerPower.STR;
            PlayerPower.WEP = 70;
            PlayerPower.STR = 5;
            PlayerStats.dmg += PlayerPower.WEP;
            PlayerStats.str += PlayerPower.STR;
            document.getElementById('wep1').classList.remove("SelectedStore");
            document.getElementById('wep2').classList.remove("SelectedStore");
            document.getElementById('wep3').classList.remove("SelectedStore");
            document.getElementById('wep4').classList.remove("SelectedStore");
            document.getElementById('wep5').classList.add("SelectedStore");
            LoadStore();
        }
    } else if (x == 5) {
        if (PlayerStats.Gold >= StorePrices.ar1 && PlayerEquip.bought5 == 0) {
            PlayerStats.Gold -= StorePrices.ar1;
            PlayerEquip.bought5 = 1;
            PlayerEquip.ARM1 = 1;
            PlayerEquip.ARM2 = 0;
            PlayerEquip.ARM3 = 0;
            PlayerEquip.ARM4 = 0;
            PlayerEquip.ARM5 = 0;
            PlayerStats.maxHealth -= PlayerPower.ARM;
            PlayerStats.def -= PlayerPower.DEF;
            PlayerPower.DEF = 0;
            PlayerPower.ARM = 50;
            PlayerStats.maxHealth += PlayerPower.ARM;
            document.getElementById('arm1').classList.add("SelectedStore");
            document.getElementById('arm2').classList.remove("SelectedStore");
            document.getElementById('arm3').classList.remove("SelectedStore");
            document.getElementById('arm4').classList.remove("SelectedStore");
            document.getElementById('arm5').classList.remove("SelectedStore");
            document.getElementById('buymark6').style.opacity = '0%';
            LoadStore();
        } else if (PlayerEquip.bought5 == 1) {
            PlayerEquip.ARM1 = 1;
            PlayerEquip.ARM2 = 0;
            PlayerEquip.ARM3 = 0;
            PlayerEquip.ARM4 = 0;
            PlayerEquip.ARM5 = 0;
            PlayerStats.maxHealth -= PlayerPower.ARM;
            PlayerStats.def -= PlayerPower.DEF;
            PlayerPower.DEF = 0;
            PlayerPower.ARM = 50;
            PlayerStats.maxHealth += PlayerPower.ARM;
            document.getElementById('arm1').classList.add("SelectedStore");
            document.getElementById('arm2').classList.remove("SelectedStore");
            document.getElementById('arm3').classList.remove("SelectedStore");
            document.getElementById('arm4').classList.remove("SelectedStore");
            document.getElementById('arm5').classList.remove("SelectedStore");
            LoadStore();
        }
    } else if (x == 6) {
        if (PlayerStats.Gold >= StorePrices.ar2 && PlayerEquip.bought6 == 0) {
            PlayerStats.Gold -= StorePrices.ar2;
            PlayerEquip.bought6 = 1;
            PlayerEquip.ARM1 = 0;
            PlayerEquip.ARM2 = 1;
            PlayerEquip.ARM3 = 0;
            PlayerEquip.ARM4 = 0;
            PlayerEquip.ARM5 = 0;
            PlayerStats.maxHealth -= PlayerPower.ARM;
            PlayerStats.def -= PlayerPower.DEF;
            PlayerPower.DEF = 0;
            PlayerPower.ARM = 110;
            PlayerStats.maxHealth += PlayerPower.ARM;
            document.getElementById('arm1').classList.remove("SelectedStore");
            document.getElementById('arm2').classList.add("SelectedStore");
            document.getElementById('arm3').classList.remove("SelectedStore");
            document.getElementById('arm4').classList.remove("SelectedStore");
            document.getElementById('arm5').classList.remove("SelectedStore");
            document.getElementById('buymark7').style.opacity = '0%';
            LoadStore();
        } else if (PlayerEquip.bought6 == 1) {
            PlayerEquip.ARM1 = 0;
            PlayerEquip.ARM2 = 1;
            PlayerEquip.ARM3 = 0;
            PlayerEquip.ARM4 = 0;
            PlayerEquip.ARM5 = 0;
            PlayerStats.maxHealth -= PlayerPower.ARM;
            PlayerStats.def -= PlayerPower.DEF;
            PlayerPower.DEF = 0;
            PlayerPower.ARM = 110;
            PlayerStats.maxHealth += PlayerPower.ARM;
            document.getElementById('arm1').classList.remove("SelectedStore");
            document.getElementById('arm2').classList.add("SelectedStore");
            document.getElementById('arm3').classList.remove("SelectedStore");
            document.getElementById('arm4').classList.remove("SelectedStore");
            document.getElementById('arm5').classList.remove("SelectedStore");
            LoadStore();
        }
    } else if (x == 7) {
        if (PlayerStats.Gold >= StorePrices.ar3 && PlayerEquip.bought7 == 0) {
            PlayerStats.Gold -= StorePrices.ar3;
            PlayerEquip.bought7 = 1;
            PlayerEquip.ARM1 = 0;
            PlayerEquip.ARM2 = 0;
            PlayerEquip.ARM3 = 1;
            PlayerEquip.ARM4 = 0;
            PlayerEquip.ARM5 = 0;
            PlayerStats.maxHealth -= PlayerPower.ARM;
            PlayerStats.def -= PlayerPower.DEF;
            PlayerPower.DEF = 0;
            PlayerPower.ARM = 250;
            PlayerStats.maxHealth += PlayerPower.ARM;
            document.getElementById('arm1').classList.remove("SelectedStore");
            document.getElementById('arm2').classList.remove("SelectedStore");
            document.getElementById('arm3').classList.add("SelectedStore");
            document.getElementById('arm4').classList.remove("SelectedStore");
            document.getElementById('arm5').classList.remove("SelectedStore");
            document.getElementById('buymark8').style.opacity = '0%';
            LoadStore();
        } else if (PlayerEquip.bought7 == 1) {
            PlayerEquip.ARM1 = 0;
            PlayerEquip.ARM2 = 0;
            PlayerEquip.ARM3 = 1;
            PlayerEquip.ARM4 = 0;
            PlayerEquip.ARM5 = 0;
            PlayerStats.maxHealth -= PlayerPower.ARM;
            PlayerStats.def -= PlayerPower.DEF;
            PlayerPower.DEF = 0;
            PlayerPower.ARM = 250;
            PlayerStats.maxHealth += PlayerPower.ARM;
            document.getElementById('arm1').classList.remove("SelectedStore");
            document.getElementById('arm2').classList.remove("SelectedStore");
            document.getElementById('arm3').classList.add("SelectedStore");
            document.getElementById('arm4').classList.remove("SelectedStore");
            document.getElementById('arm5').classList.remove("SelectedStore");
            LoadStore();
        }
    } else if (x == 8) {
        if (PlayerStats.Gold >= StorePrices.ar4 && PlayerEquip.bought8 == 0) {
            PlayerStats.Gold -= StorePrices.ar4;
            PlayerEquip.bought8 = 1;
            PlayerEquip.ARM1 = 0;
            PlayerEquip.ARM2 = 0;
            PlayerEquip.ARM3 = 0;
            PlayerEquip.ARM4 = 1;
            PlayerEquip.ARM5 = 0;
            PlayerStats.maxHealth -= PlayerPower.ARM;
            PlayerStats.def -= PlayerPower.DEF;
            PlayerPower.DEF = 0;
            PlayerPower.ARM = 550;
            PlayerStats.maxHealth += PlayerPower.ARM;
            document.getElementById('arm1').classList.remove("SelectedStore");
            document.getElementById('arm2').classList.remove("SelectedStore");
            document.getElementById('arm3').classList.remove("SelectedStore");
            document.getElementById('arm4').classList.add("SelectedStore");
            document.getElementById('arm5').classList.remove("SelectedStore");
            document.getElementById('buymark9').style.opacity = '0%';
            LoadStore();
        } else if (PlayerEquip.bought8 == 1) {
            PlayerEquip.ARM1 = 0;
            PlayerEquip.ARM2 = 0;
            PlayerEquip.ARM3 = 0;
            PlayerEquip.ARM4 = 1;
            PlayerEquip.ARM5 = 0;
            PlayerStats.maxHealth -= PlayerPower.ARM;
            PlayerStats.def -= PlayerPower.DEF;
            PlayerPower.DEF = 0;
            PlayerPower.ARM = 550;
            PlayerStats.maxHealth += PlayerPower.ARM;
            document.getElementById('arm1').classList.remove("SelectedStore");
            document.getElementById('arm2').classList.remove("SelectedStore");
            document.getElementById('arm3').classList.remove("SelectedStore");
            document.getElementById('arm4').classList.add("SelectedStore");
            document.getElementById('arm5').classList.remove("SelectedStore");
            LoadStore();
        }
    } else if (x == 10) {
        if (PlayerStats.Gold >= StorePrices.ar5 && PlayerEquip.bought10 == 0) {
            PlayerStats.Gold -= StorePrices.ar5;
            PlayerEquip.bought10 = 1;
            PlayerEquip.ARM1 = 0;
            PlayerEquip.ARM2 = 0;
            PlayerEquip.ARM3 = 0;
            PlayerEquip.ARM4 = 0;
            PlayerEquip.ARM5 = 1;
            PlayerStats.maxHealth -= PlayerPower.ARM;
            PlayerStats.def -= PlayerPower.DEF;
            PlayerPower.DEF = 10;
            PlayerPower.ARM = 1000;
            PlayerStats.def += PlayerPower.DEF;
            PlayerStats.maxHealth += PlayerPower.ARM;
            document.getElementById('arm1').classList.remove("SelectedStore");
            document.getElementById('arm2').classList.remove("SelectedStore");
            document.getElementById('arm3').classList.remove("SelectedStore");
            document.getElementById('arm4').classList.remove("SelectedStore");
            document.getElementById('arm5').classList.add("SelectedStore");
            document.getElementById('buymark10').style.opacity = '0%';
            LoadStore();
        } else if (PlayerEquip.bought10 == 1) {
            PlayerEquip.ARM1 = 0;
            PlayerEquip.ARM2 = 0;
            PlayerEquip.ARM3 = 0;
            PlayerEquip.ARM4 = 0;
            PlayerEquip.ARM5 = 1;
            PlayerStats.maxHealth -= PlayerPower.ARM;
            PlayerStats.def -= PlayerPower.DEF;
            PlayerPower.DEF = 10;
            PlayerPower.ARM = 1000;
            PlayerStats.def += PlayerPower.DEF;
            PlayerStats.maxHealth += PlayerPower.ARM;
            document.getElementById('arm1').classList.remove("SelectedStore");
            document.getElementById('arm2').classList.remove("SelectedStore");
            document.getElementById('arm3').classList.remove("SelectedStore");
            document.getElementById('arm4').classList.remove("SelectedStore");
            document.getElementById('arm5').classList.add("SelectedStore");
            LoadStore();
        }
    } else if (x == 16 && BossesBeaten.Aridomos == true && PlayerStats.Gold >= 100000) {
        PlayerStats.Gold -= 100000;
        BossesBeaten.Aridomos = false;
        BossesBeaten.Asmond = false;
        LoadStore();
    } else if (x == 'p1' && PlayerStats.Gold >= 10000 && Inv.ManPot <= 98) {
        PlayerStats.Gold -= 10000;
        Inv.ManPot++;
        ItemInfo(15);
        LoadStore();
    }
}

function ClassNameSet() {
    if(PerksStarted.Warrior && PerksStarted.Hunter) {
        ClassName = 'Assassin';
    } else if (PerksStarted.Warrior && PerksStarted.Mage) {
        ClassName = 'Battlemage';
    } else if (PerksStarted.Hunter && PerksStarted.Mage) {
        ClassName = 'Warlock';
    }
}

function UpSpells(a) {
    if(a == 1) {
        if(PlayerStats.Gold >= 10000 && SpellUpgrades.lvl1 == false) {
            PlayerStats.Gold -= 10000;
            SpellUpgrades.lvl1 = true;
            PlayerSpells.FireDMG += 30;
            PlayerSpells.MeteorDMG += 60;
            document.getElementById('Book1').style.border = 'solid';
            document.getElementById('Book1').style.borderColor = 'white';
            LoadStore();
        }
    } else if (a == 2) {
        if(PlayerStats.Gold >= 50000 && SpellUpgrades.lvl2 == false) {
            PlayerStats.Gold -= 50000;
            SpellUpgrades.lvl2 = true;
            PlayerSpells.FireDMG += 60;
            PlayerSpells.MeteorDMG += 90;
            document.getElementById('Book2').style.border = 'solid';
            document.getElementById('Book2').style.borderColor = 'white';
            LoadStore();
        }
    } else if (a == 3) {
        if(PlayerStats.Gold >= 250000 && SpellUpgrades.lvl3 == false) {
            PlayerStats.Gold -= 250000;
            SpellUpgrades.lvl3 = true;
            PlayerSpells.FireDMG += 110;
            PlayerSpells.MeteorDMG += 240;
            PlayerStats.maxMana += 200;
            document.getElementById('Book3').style.border = 'solid';
            document.getElementById('Book3').style.borderColor = 'white';
            LoadStore();
        }
    }
}