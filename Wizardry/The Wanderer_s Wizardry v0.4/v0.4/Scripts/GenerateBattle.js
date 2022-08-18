function GenerateBattle() {
    player.startexp = player.exp;
    player.startcoins = player.coins;
    player.dead = false;
    ES.textContent = '';
    enemiesAlive = enemyCount;
    playerAction = playerMaxAction;
    CanAttack = 1;
    player.armourdura = player.armourduramax;
    document.getElementById('CombatLog').textContent = '';
    document.getElementById('Armor').textContent = `Armour: ${player.armourdura}/${player.armourduramax}, Power: ${player.armour}`;
    document.getElementById('Health').textContent = `HP : ${player.hp}/${player.maxhp}`;
    document.getElementById('mainmenu').style.display = 'none';
    document.getElementById('Prog').style.display = 'none';
    document.getElementById('CombatScreen').style.display = 'block';
    document.getElementById('MainHub').style.display = 'none';
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
    currentEnemy = 0;
    document.getElementById('PlayerActions').textContent = `Actions ${playerAction}/${playerMaxAction}`;
}

function genenems() {
    for (let i = 0; i < enemyCount; i++) {
        let a = Math.floor(Math.random() * (maxE - minE) + minE);
        deepCopyEnemy = deepCopy(enemyBank);
        enemy.push(deepCopyEnemy[a]);
    }
}

function LookForFight(e) {
    if (e == 1) {
        minE = 0;
        maxE = 3;
        enemyCount = 0;
        enemyCount = Math.floor(Math.random() * 4) + 1;
        enemy = [];
        genenems();
        ShowEnems();
    } else if (e == 2) {
        document.getElementById('FindEnemies').textContent = '';
        minE = 4;
        maxE = 6;
        enemyCount = 0;
        enemyCount = Math.floor(Math.random() * 4) + 1;
        enemy = [];
        genenems();
        ShowEnems();
    } else if (e == 3) {
        document.getElementById('FindEnemies').textContent = '';
        minE = 6;
        maxE = 9;
        enemyCount = 0;
        enemyCount = Math.floor(Math.random() * 4) + 1;
        enemy = [];
        genenems();
        ShowEnems();
    } else if (e == 4) {
        document.getElementById('FindEnemies').textContent = '';
        minE = 9;
        maxE = 11;
        enemyCount = 0;
        enemyCount = Math.floor(Math.random() * 4) + 1;
        enemy = [];
        genenems();
        ShowEnems();
    }
    else if (e == 5) {
        document.getElementById('FindEnemies').textContent = '';
        minE = 11;
        maxE = 14;
        enemyCount = 0;
        enemyCount = Math.floor(Math.random() * 4) + 1;
        enemy = [];
        genenems();
        ShowEnems();
    }
    else if (e == 6) {
        document.getElementById('FindEnemies').textContent = '';
        minE = 14;
        maxE = 17;
        enemyCount = 0;
        enemyCount = Math.floor(Math.random() * 4) + 1;
        enemy = [];
        genenems();
        ShowEnems();
    }
}

function BossBattle(e) {
    if(e == 1) {
        enemyCount = 1;
        enemy = [];
        deepCopyEnemy = deepCopy(enemyBank);
        enemy.push(deepCopyEnemy[17]);
        GenerateBattle();
    }
}


function ShowEnems() {
    document.getElementById('FindEnemies').textContent = '';
    document.getElementById('FindEnemies').style.display = 'block';
    let p = document.createElement('p');
    p.textContent = `You are facing off against ${enemyCount} enemies.`
    p.classList.add("EnemShowTitle");
    document.getElementById('FindEnemies').appendChild(p);
    let pp = document.createElement('p');
    for (let i = 0; i < enemy.length; i++) {
        pp.textContent += `| ${enemy[i].name} |`;
    }
    pp.classList.add("EnemShow");
    document.getElementById('FindEnemies').appendChild(pp);
    let bb = document.createElement('button');
    bb.classList.add("LocationButton");
    bb.textContent = 'FIGHT';
    document.getElementById('FindEnemies').appendChild(bb);
    bb.addEventListener('mousedown', GenerateBattle);
    let bb2 = document.createElement('button');
    bb2.classList.add("LocationButton");
    bb2.textContent = 'BACK OFF';
    document.getElementById('FindEnemies').appendChild(bb2);
    bb2.addEventListener('mousedown', hide);
}