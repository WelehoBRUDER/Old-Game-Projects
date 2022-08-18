'use strict';

function Tutorial() {
    player.startexp = player.exp;
    player.startcoins = player.coins;
    player.dead = false;
    document.getElementById('Armor').textContent = `Armour: ${player.armourdura}/${player.armourduramax}, Power: ${player.armour}`;
    document.getElementById('mainmenu').style.display = 'none';
    document.getElementById('Prog').style.display = 'none';
    document.getElementById('CombatScreen').style.display = 'block';
    for (let i = 0; i < enemyCount; i++) {
        deepCopyEnemy = deepCopy(enemyBank);
        enemy.push(deepCopyEnemy[i]);
    }
    for (let i = 0; i < enemyCount; i++) { // Create enemy statuses
        let es1 = document.createElement('div');
        es1.classList.add('Status');
        es1.id = `es${i}`;
        ES.appendChild(es1);
        let en1 = document.createElement('p');
        en1.textContent = enemy[i].name;
        es1.appendChild(en1)
        let eh1 = document.createElement('p');
        eh1.id = `eh${i}`;
        eh1.textContent = `HP : ${enemy[i].hp} / ${enemy[i].maxHP}`;
        eh1.style.color = "crimson";
        es1.appendChild(eh1);
        let edmg = document.createElement('p');
        edmg.textContent = `ATK: ${enemy[i].power}`;
        edmg.style.color = 'red';
        es1.appendChild(edmg);
        es1.addEventListener('click', Target);
        enemy[i].endexp = enemy[i].exp;
    }
    document.getElementById('PlayerActions').textContent = `Actions ${playerAction}/${playerMaxAction}`;
    document.getElementById('Spells').addEventListener('mousedown', Attack);
    setTimeout(TutorialPopUp, 500);

}

function EvalMoves() { // This function randomly chooses what attack the enemy will use.
    let taulu = eval(enemy[currentEnemy].moves); // This line gets the correct table for the enemy
    let isku = taulu[Math.floor(Math.random() * taulu.length)]; // Here a random move is picked from the table
    let iskuT = document.createElement('p');
    if (player.armourdura > 0) {
        damage = Math.floor(enemy[currentEnemy].power * isku.dmg - player.armour); // Damage is calculated here
        if (Math.floor(enemy[currentEnemy].power * isku.dmg - player.armour) < 0) {
            player.armourdura = player.armourdura;
        } else {
            player.armourdura -= Math.floor(enemy[currentEnemy].power * isku.dmg - player.armour); // Armour durability damage is calculated here
        }
        player.armourdura = player.armordura < 0 ? player.armourdura = 0 : player.armourdura;
        damage = damage <= 0 ? damage = 0 : damage;
    } else {
        damage = Math.floor(enemy[currentEnemy].power * isku.dmg);
    }
    iskuT.textContent = `${enemy[currentEnemy].name} uses ${isku.name} for ${damage} damage`;
    iskuT.classList.add('ActionText');
    enemy[currentEnemy].actions -= isku.cost
    dmgplay.push({ "dmg": damage }); // Damage gets saved to an empty table
    EM.appendChild(iskuT);
}

function yeetThem() {
    EM.textContent = '';
}
// This function checks damage dealt to enemy and whether a combo is done or not.
function Attack(e) { // When attacking all spells used are saved in an empty table where they are called later for damage evalution.
    if (e.target.id == 'Spells') return;
    if (playerAction > 0 && Selection > -1 && CanAttack == 1 && enemy[Selection].dead == false && player.dead == false) {
        playerAction--;
        let b = e.target.id.substring(5);
        document.getElementById('PlayerActions').textContent = `Actions ${playerAction}/${playerMaxAction}`;
        let iskuT = document.createElement('p');
        damage = Math.floor(spells[b].dmg - enemy[Selection].def / 2.5);
        if (attacks.length <= 0) {
            iskuT.textContent = `Player uses ${spells[b].name} for ${damage} damage on ${enemy[Selection].name}`;
        }
        else if (attacks[attacks.length - 1 < 0 ? 0 : attacks.length - 1].combo.includes(spells[b].type) && attacks[attacks.length - 1 < 0 ? 0 : attacks.length - 1].target == enemy[Selection].id) {
            damage = Math.floor(damage * 1.75);
            iskuT.textContent = `Player uses ${spells[b].name} for ${damage} damage on ${enemy[Selection].name} and it combos with ${attacks[attacks.length - 1 < 0 ? 0 : attacks.length - 1].name} for extra damage!`;
        } else {
            iskuT.textContent = `Player uses ${spells[b].name} for ${damage} damage on ${enemy[Selection].name}`;
        }
        if (attacks.length >= 1 && enemy[Selection].resist.includes(spells[b].type) && attacks[attacks.length - 1 < 0 ? 0 : attacks.length - 1].combo.includes(spells[b].type) && attacks[attacks.length - 1 < 0 ? 0 : attacks.length - 1].target == enemy[Selection].id) {
            damage = Math.floor(damage / 2);
            iskuT.textContent = `Player uses ${spells[b].name} for ${damage} damage on ${enemy[Selection].name} and it combos with ${attacks[attacks.length - 1 < 0 ? 0 : attacks.length - 1].name} for extra damage, but the enemy is strong against ${spells[b].type}!`;
        }
        else if (attacks.length >= 1 && enemy[Selection].weak.includes(spells[b].type) && attacks[attacks.length - 1 < 0 ? 0 : attacks.length - 1].combo.includes(spells[b].type) && attacks[attacks.length - 1 < 0 ? 0 : attacks.length - 1].target == enemy[Selection].id) {
            damage = Math.floor(damage * 2);
            iskuT.textContent = `Player uses ${spells[b].name} for ${damage} damage on ${enemy[Selection].name} and it combos with ${attacks[attacks.length - 1 < 0 ? 0 : attacks.length - 1].name} for extra damage, and the enemy is weak against ${spells[b].type}!`;
        }
        else if (enemy[Selection].resist.includes(spells[b].type)) {
            damage = Math.floor(damage / 2);
            iskuT.textContent = `Player uses ${spells[b].name} for ${damage} damage on ${enemy[Selection].name}, but the enemy is strong against ${spells[b].type}!`;
        }
        else if (enemy[Selection].weak.includes(spells[b].type)) {
            damage = damage * 2;
            iskuT.textContent = `Player uses ${spells[b].name} for ${damage} damage on ${enemy[Selection].name}, and the enemy is weak against ${spells[b].type}!`;
        }
        iskuT.classList.add('ActionText');
        AM.appendChild(iskuT);
        attacks.push({ "id": Selection, "dmg": damage, "combo": spells[b].combo, "name": spells[b].name, "target": enemy[Selection].id, "targetname": enemy[Selection].name, "status": spells[b].status, "type": spells[b].type, "statusLast": spells[b].statusLast, "statusName": spells[b].statusName });
    }
}

function Target(e) {
    try {
        document.querySelector(".select").classList.remove("select");
    }
    catch {

    }
    e.target.classList.add("select");
    Selection = +e.target.id.substring(2);
}

function Clear() { // Clears out all player actions. Use this if you miss click or want to use other spells on your turn.
    try {
        document.querySelector(".select").classList.remove("select");
    }
    catch {

    }
    Selection = -1;
    AM.textContent = '';
    playerAction = playerMaxAction;
    attacks = [];
    document.getElementById('PlayerActions').textContent = `Actions ${playerAction}/${playerMaxAction}`;
}

function endTurn() { // endTurn is a function that calculates the damage that has been done to the enemy and ends the player's turn.
    StatusCheck();
    attacks = [];
    clearInterval(attacke);
    eturn = 1;
    Clear();
    if (enemiesAlive > 0) {
        BeginEnemyTurn();
    } else {
        EndScreen(1);
    }
}

function BeginEnemyTurn() { // Enemy turn begins.
    currentEnemy = 0;
    CanAttack = 0;
    for (let i = 0; i < enemyCount; i++) { // Check what enemies are alive and give them action points.
        if (enemy[i].dead == false) {
            enemy[i].actions = 3;
        } else if (enemy[i].dead == true) {
            enemy[i].actions = 0;
        }
    }
    StartMoves();
}

function HurtPlayer() {
    for (let i = 0; i < dmgplay.length; i++) {
        player.hp -= dmgplay[i].dmg;
        player.hp = player.hp < 0 ? 0 : player.hp;
        document.getElementById(`Health`).textContent = `HP : ${player.hp} / ${player.maxhp}`;
        let p = document.createElement("p");
        p.classList.add("enemy");
        p.textContent = `${enemy[currentEnemy].name} deals ${dmgplay[i].dmg} damage to Player!`;
        document.getElementById('Armor').textContent = `Armour: ${player.armourdura}/${player.armourduramax}, Power: ${player.armour}`;
        CL.insertBefore(p, CL.firstChild);
        if (player.hp <= 0) {
            clearInterval(attacke)
            player.dead = true;
            EndScreen(2);
        }
    }
    enemy[currentEnemy].statusLAST = enemy[currentEnemy].statusLAST > 0 ? enemy[currentEnemy].statusLAST - 1 : enemy[currentEnemy].statusLAST;
    if (enemy[currentEnemy].statusLAST > 0) {
        enemy[currentEnemy].hp -= enemy[currentEnemy].statusDMG;
        let p = document.createElement("p");
        p.classList.add("player");
        p.textContent = `${enemy[currentEnemy].name} takes ${enemy[currentEnemy].statusDMG} damage from ${enemy[currentEnemy].status}!`;
        document.getElementById(`eh${currentEnemy}`).textContent = `HP : ${enemy[currentEnemy].hp} / ${enemy[currentEnemy].maxHP}`;
        CL.insertBefore(p, CL.firstChild);
    } if (enemy[currentEnemy].statusLAST <= 0 && enemy[currentEnemy].status != "") {
        enemy[currentEnemy].status = "";
        enemy[currentEnemy].statusDMG = 0;
        let p = document.createElement("p");
        p.classList.add("enemy");
        p.textContent = `${enemy[currentEnemy].name} is no longer suffering from ${enemy[currentEnemy].status}!`;
        document.getElementById(`se${currentEnemy}`).remove();
        CL.insertBefore(p, CL.firstChild);
    }
    if(enemy[currentEnemy].hp <= 0) {
        enemy[currentEnemy].hp = 0;
        enemy[currentEnemy].dead = enemy[currentEnemy].hp == 0 ? true : enemy[currentEnemy].dead;
        if (enemy[currentEnemy].dead == true && enemy[currentEnemy].dead2 == false) {
            enemiesAlive--;
            player.enemdefeat++;
            player.coins += Math.floor(Math.random() * (enemy[currentEnemy].gold - 0) + 0);
            enemy[currentEnemy].dead2 = true;
            for(let b = 0; b<CurrentQuests.length; b++) {
                if(enemy[attacks[i].id].id.startsWith(CurrentQuests[b].Type)) {
                    CurrentQuests[b].Slain++;
                }
            }
        }
        player.exp = enemy[currentEnemy].dead == true ? player.exp + enemy[currentEnemy].endexp : player.exp;
        enemy[currentEnemy].endexp = enemy[currentEnemy].dead == true ? enemy[currentEnemy].endexp = 0 : enemy[currentEnemy].endexp;
        document.getElementById(`eh${currentEnemy}`).textContent = `HP : ${enemy[currentEnemy].hp} / ${enemy[currentEnemy].maxHP}`;
        let p = document.createElement("p");
        p.classList.add("player");
        p.textContent = `${enemy[currentEnemy].name} died from ${enemy[currentEnemy].status}!`;
        CL.insertBefore(p, CL.firstChild);
    }
    dmgplay = [];
    if (enemy[currentEnemy].actions <= 1) {
        yeetThem();
    }
    if (currentEnemy < enemyCount - 1 && enemy[currentEnemy].actions <= 1) {
        currentEnemy++;
        setTimeout(StartMoves, 250);
    }
    else if (currentEnemy == enemyCount - 1 && enemy[currentEnemy].actions <= 1) {
        CanAttack = 1;
    }
    clearInterval(attacke);
}

function StartMoves() {
    clearInterval(attacke);
    currentEnemy = enemy[currentEnemy].dead == true ? currentEnemy + 1 : currentEnemy;
    attacke = setInterval(handle, 500);
}

function handle() {
    currentEnemy = currentEnemy == enemy.length ? currentEnemy - 1 : currentEnemy;
    if (enemy[currentEnemy].actions > 0 && player.dead == false && eturn == 1) {
        EvalMoves();
    } else if (enemy[currentEnemy].actions <= 1 && player.dead == false && eturn == 1) {
        HurtPlayer();
    }
}

function EndScreen(g) {
    if (g == 1) {
        clearInterval(attacke);
        BE.style.transform = "scale(1)";
        BE.style.display = 'block';
        BE.style.top = "-75%";
        y = -75;
        BE.textContent = '';
        let T = document.createElement('p');
        T.classList.add("BattleTitle");
        T.textContent = "Victory!";
        let d = document.createElement('div');
        d.classList.add("line00");
        let p = document.createElement('p');
        p.classList.add("BattleText");
        p.textContent = `You've won the battle! You gain ${player.exp - player.startexp} exp! In addition you gather ${player.coins - player.startcoins} coins!`;
        let b = document.createElement('button');
        b.classList.add("BattleEndButton");
        b.textContent = "Continue";
        BE.appendChild(T);
        BE.appendChild(d);
        BE.appendChild(b);
        BE.appendChild(p);
        anim = setInterval(animate, 5);
        b.addEventListener("click", EndBattleW);
        if (tut.over == false) {
            tut.over = true;
            tut.win = true;
        }
        eturn = 0;
    } else if (g == 2) {
        clearInterval(attacke);
        BE.style.transform = "scale(1)";
        BE.style.display = 'block';
        BE.style.top = "-75%";
        y = -75;
        BE.textContent = '';
        let T = document.createElement('p');
        T.classList.add("BattleTitle");
        T.textContent = "Defeat!";
        let d = document.createElement('div');
        d.classList.add("line00");
        let p = document.createElement('p');
        p.classList.add("BattleText");
        p.textContent = `You've lost the battle. Though you still gain ${Math.floor(player.exp - player.startexp)} exp for the enemies you defeated! In addition you gather ${player.coins - player.startcoins} coins!`;
        let b = document.createElement('button');
        b.classList.add("BattleEndButton");
        b.textContent = "Continue";
        BE.appendChild(T);
        BE.appendChild(d);
        BE.appendChild(b);
        BE.appendChild(p);
        anim = setInterval(animate, 5);
        b.addEventListener("click", EndBattleL);
        if (tut.over == false) {
            tut.over = true;
            tut.win = false;
        }
        eturn = 0;
    }
}

function animate() {
    if (y < 15) {
        y++;
        BE.style.top = `${y}%`;
    } else {
        clearall();
    }
}

function clearall() {
    clearInterval(anim);
}

function StatusCheck() {
    for (let i = 0; i < attacks.length; i++) {
        if (attacks[i].type == "fire" && Math.random() < 30 / 100) {
            enemy[attacks[i].id].hp -= attacks[i].dmg + attacks[i].status;
            enemy[attacks[i].id].statusDMG = attacks[i].status;
            enemy[attacks[i].id].statusLAST = attacks[i].statusLast;
            enemy[attacks[i].id].status = attacks[i].statusName;
            let pp = document.createElement("p");
            pp.classList.add("statusEffect");
            pp.id = `se${attacks[i].id}`;
            pp.textContent = attacks[i].statusName.toUpperCase();
            document.getElementById(`es${attacks[i].id}`).appendChild(pp);
            enemy[attacks[i].id].hp = enemy[attacks[i].id].hp < 0 ? 0 : enemy[attacks[i].id].hp;
            enemy[attacks[i].id].dead = enemy[attacks[i].id].hp == 0 ? true : enemy[attacks[i].id].dead;
            if (enemy[attacks[i].id].dead == true && enemy[attacks[i].id].dead2 == false) {
                for(let b = 0; b<CurrentQuests.length; b++) {
                    if(enemy[attacks[i].id].id.startsWith(CurrentQuests[b].Type)) {
                        CurrentQuests[b].Slain++;
                    }
                }
                enemiesAlive--;
                player.enemdefeat++;
                player.coins += Math.floor(Math.random() * (enemy[attacks[i].id].gold - 0) + 0);
                enemy[attacks[i].id].dead2 = true;
            }
            player.exp = enemy[attacks[i].id].dead == true ? player.exp + enemy[attacks[i].id].endexp : player.exp;
            enemy[attacks[i].id].endexp = enemy[attacks[i].id].dead == true ? enemy[attacks[i].id].endexp = 0 : enemy[attacks[i].id].endexp;
            document.getElementById(`eh${attacks[i].id}`).textContent = `HP : ${enemy[attacks[i].id].hp} / ${enemy[attacks[i].id].maxHP}`;
            let p = document.createElement("p");
            p.classList.add("player");
            p.textContent = `Player deals ${attacks[i].dmg} damage to ${attacks[i].targetname} and ${attacks[i].targetname} burns for ${attacks[i].status} damage!`;
            CL.insertBefore(p, CL.firstChild);
        } else {
            enemy[attacks[i].id].hp -= attacks[i].dmg;
            enemy[attacks[i].id].hp = enemy[attacks[i].id].hp < 0 ? 0 : enemy[attacks[i].id].hp;
            enemy[attacks[i].id].dead = enemy[attacks[i].id].hp == 0 ? true : enemy[attacks[i].id].dead;
            if (enemy[attacks[i].id].dead == true && enemy[attacks[i].id].dead2 == false) {
                enemiesAlive--;
                player.enemdefeat++;
                player.coins += Math.floor(Math.random() * (enemy[attacks[i].id].gold - 0) + 0);
                for(let b = 0; b<CurrentQuests.length; b++) {
                    if(enemy[attacks[i].id].id.startsWith(CurrentQuests[b].Type)) {
                        CurrentQuests[b].Slain++;
                    }
                }
                enemy[attacks[i].id].dead2 = true;
            }
            player.exp = enemy[attacks[i].id].dead == true ? player.exp + enemy[attacks[i].id].endexp : player.exp;
            enemy[attacks[i].id].endexp = enemy[attacks[i].id].dead == true ? enemy[attacks[i].id].endexp = 0 : enemy[attacks[i].id].endexp;
            document.getElementById(`eh${attacks[i].id}`).textContent = `HP : ${enemy[attacks[i].id].hp} / ${enemy[attacks[i].id].maxHP}`;
            let p = document.createElement("p");
            p.classList.add("player");
            p.textContent = `Player deals ${attacks[i].dmg} damage to ${attacks[i].targetname}`;
            CL.insertBefore(p, CL.firstChild);
        }
    }
}