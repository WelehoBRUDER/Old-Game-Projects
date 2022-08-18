'use strict';

function EndBattleW() {
    BE.style.transition =  "0.4s";
    BE.style.top = "105%";
    BE.style.transform = "scale(0)";
    setTimeout(hide, 500);
    //anim2 = setInterval(AnimateGoneW, 5);
}

function hide() {
    CheckLevel();
    document.getElementById('CombatScreen').style.display = 'none';
    document.getElementById('MainHub').style.display = 'block';
    document.getElementById('hp1').textContent = `HP : ${player.hp} / ${player.maxhp}`;
    document.getElementById('arm1').textContent = `Armour : ${player.armourdura} / ${player.armourduramax}, Power: ${player.armour}`;
    document.getElementById('lvl1').textContent = `Level : ${player.level}`;
    document.getElementById('exp1').textContent = `EXP : ${player.exp}/${player.nextexp}`;
    document.getElementById('gol1').textContent = `Coins : ${player.coins}`;
    document.getElementById('skl1').textContent = `Skill Points : ${player.skill}`;
    document.getElementById('FindEnemies').textContent = '';
    document.getElementById('FindEnemies').style.display = 'none';
    if(tut.win == true) {
        TutorialQuest.success = true;
    } else {
        TutorialQuest.success = false;
    }
    document.getElementById('LocationName').textContent = 'Currently inside: Hedor City';
    document.getElementById('LocationText').textContent = "You are standing in the center of Hedor City. From here you can see the inn, the Adventurer's Guild and the blacksmith.";
    document.getElementById('LocationActions').textContent = '';
}

function EndBattleL() {
    player.exp = player.exp/2;
    BE.style.transition =  "0.4s";
    BE.style.top = "105%";
    BE.style.transform = "scale(0)";
    setTimeout(hide, 500);
}

function CheckLevel() {
    if(player.exp >= player.nextexp) {
        player.level++;
        player.skill += 2;
        player.exp -= player.nextexp;
        player.nextexp = player.nextexp*2;
        player.maxhp += 25;
    }
}



function QuestTurn() {
    if(TutorialQuest.finished == false) {
        TutorialQuest.finished = true;
        if(TutorialQuest.success == true) {
            player.coins += 100;
        } 
        hide();
    }
    else if(player.enemdefeat > 0) {
        player.coins += player.enemdefeat*10;
        player.enemdefeat = 0;
        hide();
    }
}

function BuyRoom() {
    if(player.coins >= 5 && player.hp < player.maxhp) {
        player.coins -= 5;
        player.hp = player.maxhp;
        hide();
    }
}

function UpArm() {
    if(player.coins >= Math.floor(armrlevel*75)) {
        player.coins -= Math.floor(armrlevel*75);
        armrlevel++;
        player.armourduramax += 10;
        player.armour++;
        player.armourdura = player.armourduramax;
        hide();
    }
}

function SkillUp(g) {
    if(g == 1 && player.skill > 0) {
        player.skill--;
        spells[0].dmg += 2;
        spells[0].status++;
        hide();
    } else if(g == 2 && player.skill > 0) {
        player.skill--;
        spells[1].dmg += 2;
        hide();
    } else if(g == 3 && player.skill > 0) {
        player.skill--;
        spells[2].dmg += 2;
        hide();
    } else if(g == 4 && player.skill > 0) {
        player.skill--;
        spells[3].dmg += 2;
        hide();
    }
}
