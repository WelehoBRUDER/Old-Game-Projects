'use strict';

function TutorialStart() {
    document.getElementById('mainmenu').style.display = 'none';
    document.getElementById('Prog').style.transform = "scale(1)";
    document.getElementById('Prog').style.transition = "0.8s";
    document.getElementById('Prog').style.top = "10%";
}

function TutorialStart2() {
    document.getElementById('Prog').style.transition = "0.8s";
    document.getElementById('Prog').style.top = "105%";
    setTimeout(Tutorial, 1000);
}

function TutorialPopUp() {
    TP.style.transition = "0.7s";
    TP.style.top = "15%";
    TP.textContent = '';
    let T = document.createElement('p');
    T.classList.add("BattleTitle");
    T.textContent = "Combat Guide!";
    let d = document.createElement('div');
    d.classList.add("line00");
    let p = document.createElement('p');
    p.classList.add("BattleText");
    p.textContent = `Welcome to the Wanderer's Wizardry! This pop up is here to explain how combat works so that you don't get too confused. It is highly recommended that you read this thoroughly if you are a first time player.
    Each combatant gets 3 action points to spend on their turn. This rule applies to the player and the enemies. To use a spell, select a target by clicking on the enemy's portrait. It should then highlight. After this you can 
    pick from any of the spells at your disposal! You can attack multiple foes on your turn. Once you've selected your attacks, click "End turn". If you aren't satisfied with your choices or misclicked, simply click "Clear".
    Different enemies are resistant and weak to different elements. You can combine spells by casting them in order, for example: Water => Lightning = Extra damage! Experiment on your own.`;
    let b = document.createElement('button');
    b.classList.add("BattleEndButton");
    b.textContent = "Continue";
    TP.appendChild(T);
    TP.appendChild(d);
    TP.appendChild(b);
    TP.appendChild(p);
    b.addEventListener("click", closeTut);
}

function closeTut() {
    TP.style.transition = "0.6s";
    TP.style.top = "105%";
    setTimeout(hideit, 800);
}

function hideit() {
    TP.style.display = 'none';
}