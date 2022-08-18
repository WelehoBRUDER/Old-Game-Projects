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
    PlayerStats.trustr += 0.15;
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
        } else if (g == 2) {
            PlayerStats.SF -= PlayerStats.nextlvl;
            PlayerStats.nextlvl += 100;
            PlayerStats.def += 1;
            PlayerStats.lvl += 1;
            LoadStats();
        } else if (g == 3) {
            PlayerStats.SF -= PlayerStats.nextlvl;
            PlayerStats.nextlvl += 100;
            PlayerStats.agi += 1;
            PlayerStats.truagi = PlayerStats.agi / 3;
            PlayerStats.truagi = Math.floor(PlayerStats.truagi);
            speed = 35 - PlayerStats.truagi;
            if (speed < 12) {
                speed = 12;
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
        } else if (g == 6) {
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
        } else if (g == 8) {
            PlayerStats.SF -= PlayerStats.nextlvl;
            PlayerStats.nextlvl += 100;
            PlayerStats.dod += 1;
            PlayerStats.lvl += 1;
            LoadStats();
        }
    }
}

function WarPerks() {
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

function BuyPerk(b) {
    if (b == 1) {
        if (PlayerStats.SF >= PlayerWarPerks.C1 && PlayerWarPerks.W1 == 1) {
            PlayerStats.SF -= PlayerWarPerks.C1;
            PlayerStats.dmg += 5;
            PlayerWarPerks.W1 = 2;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            WarPerks();
        }
    } else if (b == 2) {
        if (PlayerStats.SF >= PlayerWarPerks.C2 && PlayerWarPerks.W1 == 2 && PlayerWarPerks.W2 == 0) {
            PlayerStats.SF -= PlayerWarPerks.C2;
            PlayerStats.def += 5;
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
            PlayerStats.maxHealth += 150;
            PlayerWarPerks.W8 = 1;
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            WarPerks();
        }
    } else if (b == 9) {
        if (PlayerStats.SF >= PlayerWarPerks.W9 && PlayerWarPerks.W6 == 1 && PlayerWarPerks.W9 == 0) {
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
            document.getElementById('SFam').textContent = `SF: ${PlayerStats.SF}`;
            WarPerks();
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
    else if (l == 20 && BossesBeaten.Aridomos == true) {
        document.getElementById('LevelUpScreen').style.display = 'none';
        document.getElementById('Events').style.display = 'none';
        document.getElementById('MainCombat').style.display = 'block';
        Asmond();
    }
}

function UpChar() {
    document.getElementById('damg').textContent = `Fake DMG: ${PlayerStats.dmg}`;
    document.getElementById('trudmg').textContent = `True DMG: ${Math.floor(PlayerStats.dmg * PlayerStats.trustr)}`;
    document.getElementById('mhp').textContent = `HP: ${PlayerStats.maxHealth}`;
    document.getElementById('mm').textContent = `MP: ${PlayerStats.maxMana}`;
    document.getElementById('dc').textContent = `Dodge chance: ${PlayerStats.dod + 10}%`;
    document.getElementById('cc').textContent = `Crit chance: ${PlayerStats.crt + 10}%`;
    document.getElementById('def7').textContent = `Defense: ${PlayerStats.def}`;
    document.getElementById('sped').textContent = `Slowness: ${Math.floor(35 - PlayerStats.agi/3)}`;
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
        document.getElementById('StoreDesc').textContent = 'Mythic Blade grants +35 base damage. Cost: 20000G';
    } else if (h == 9) {
        document.getElementById('StoreDesc').textContent = 'Greatsword of Legend grants +70 base damage and +5 STR. Cost: 50000G, must have beaten level 10.';
    } else if (h == 5) {
        document.getElementById('StoreDesc').textContent = 'Bronze armor grants +50 HP. Cost: 500G';
    } else if (h == 6) {
        document.getElementById('StoreDesc').textContent = 'Silver armor grants +110 HP. Cost: 1800G';
    } else if (h == 7) {
        document.getElementById('StoreDesc').textContent = 'Gold armor grants +250 HP. Cost: 7500G';
    } else if (h == 8) {
        document.getElementById('StoreDesc').textContent = 'Mythic Set grants +550 HP. Cost: 23000G';
    } else if (h == 10) {
        document.getElementById('StoreDesc').textContent = 'Armor of the Legend grants +1000 HP and +10 DEF. Cost: 57000G.';
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
            if(PlayerPower.STR == 5) {
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
            if(PlayerPower.STR == 5) {
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
            if(PlayerPower.STR == 5) {
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
            if(PlayerPower.STR == 5) {
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
            if(PlayerPower.STR == 5) {
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
            if(PlayerPower.STR == 5) {
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
            if(PlayerPower.STR == 5) {
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
            if(PlayerPower.STR == 5) {
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
    }
}