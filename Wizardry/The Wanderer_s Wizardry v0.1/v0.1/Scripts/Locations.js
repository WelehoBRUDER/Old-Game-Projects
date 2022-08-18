'use strict';

function Locations(e) {
    document.getElementById('LocationActions').textContent = '';
    if(e == 1) {
        document.getElementById('LocationName').textContent = "Currently inside: Adventurer's Guild";
        document.getElementById('LocationText').textContent = "You are inside the Adventurer's Guild. Here you can take on new quests and turn in completed ones.";
        let b = document.createElement('button');
        b.classList.add("LocationButton");
        b.textContent = 'BACK';
        document.getElementById('LocationActions').insertBefore(b, document.getElementById('LocationActions').firstChild);
        b.addEventListener('mousedown', hide);
        let bb = document.createElement('button');
        bb.classList.add("LocationButton");
        bb.textContent = 'TURN IN QUEST';
        document.getElementById('LocationActions').insertBefore(bb, document.getElementById('LocationActions').firstChild);
        bb.addEventListener('mousedown', QuestTurn);
    } else if(e == 2) {
        document.getElementById('LocationName').textContent = "Currently inside: Marley's Inn";
        document.getElementById('LocationText').textContent = "You are inside the inn. Here you can sleep to restore your hp. Sleeping costs 5 coins.";
        let b = document.createElement('button');
        b.classList.add("LocationButton");
        b.textContent = 'BACK';
        document.getElementById('LocationActions').insertBefore(b, document.getElementById('LocationActions').firstChild);
        b.addEventListener('mousedown', hide);
        let bb = document.createElement('button');
        bb.classList.add("LocationButton");
        bb.textContent = 'SLEEP';
        document.getElementById('LocationActions').insertBefore(bb, document.getElementById('LocationActions').firstChild);
        bb.addEventListener('mousedown', BuyRoom);
    }
    else if(e == 3) {
        document.getElementById('LocationName').textContent = "Currently inside: Rogar's Smithy";
        document.getElementById('LocationText').textContent = "You are inside the armament store. Here you can upgrade your armour for coins.";
        let b = document.createElement('button');
        b.classList.add("LocationButton");
        b.textContent = 'BACK';
        document.getElementById('LocationActions').insertBefore(b, document.getElementById('LocationActions').firstChild);
        b.addEventListener('mousedown', hide);
        let bb = document.createElement('button');
        bb.classList.add("LocationButton");
        bb.textContent = 'UPGRADE ARMOUR';
        document.getElementById('LocationActions').insertBefore(bb, document.getElementById('LocationActions').firstChild);
        bb.addEventListener('mousedown', UpArm);
    }
    else if(e == 4) {
        document.getElementById('LocationName').textContent = "Currently inside: Town Sewers";
        document.getElementById('LocationText').textContent = "You are standing in front of the gate to the sewers. Recommended level: 1";
        let b = document.createElement('button');
        b.classList.add("LocationButton");
        b.textContent = 'BACK';
        document.getElementById('LocationActions').insertBefore(b, document.getElementById('LocationActions').firstChild);
        b.addEventListener('mousedown', hide);
        let bb = document.createElement('button');
        bb.classList.add("LocationButton");
        bb.textContent = 'FIGHT RATS';
        document.getElementById('LocationActions').insertBefore(bb, document.getElementById('LocationActions').firstChild);
        bb.addEventListener('mousedown',()=>LookForFight(1));
    }
    else if(e == 5) {
        document.getElementById('LocationName').textContent = "Currently inside: Town Slums";
        document.getElementById('LocationText').textContent = "You are standing in front of the gate to the slums. Recommended level: 4";
        let b = document.createElement('button');
        b.classList.add("LocationButton");
        b.textContent = 'BACK';
        document.getElementById('LocationActions').insertBefore(b, document.getElementById('LocationActions').firstChild);
        b.addEventListener('mousedown', hide);
        let bb = document.createElement('button');
        bb.classList.add("LocationButton");
        bb.textContent = 'FIGHT OUTLAWS';
        document.getElementById('LocationActions').insertBefore(bb, document.getElementById('LocationActions').firstChild);
        bb.addEventListener('mousedown',()=>LookForFight(2));
    }
    else if(e == 6) {
        document.getElementById('LocationName').textContent = "Currently inside: Larkian Woods";
        document.getElementById('LocationText').textContent = "You are standing at the entrance to the woods. Recommended level: 7";
        let b = document.createElement('button');
        b.classList.add("LocationButton");
        b.textContent = 'BACK';
        document.getElementById('LocationActions').insertBefore(b, document.getElementById('LocationActions').firstChild);
        b.addEventListener('mousedown', hide);
        let bb = document.createElement('button');
        bb.classList.add("LocationButton");
        bb.textContent = 'FIGHT ANIMALS';
        document.getElementById('LocationActions').insertBefore(bb, document.getElementById('LocationActions').firstChild);
        bb.addEventListener('mousedown',()=>LookForFight(3));
    }
    else if(e == 7) {
        document.getElementById('LocationName').textContent = "Currently inside: Larkian Lake";
        document.getElementById('LocationText').textContent = "You are standing by the lake. Recommended level: 10";
        let b = document.createElement('button');
        b.classList.add("LocationButton");
        b.textContent = 'BACK';
        document.getElementById('LocationActions').insertBefore(b, document.getElementById('LocationActions').firstChild);
        b.addEventListener('mousedown', hide);
        let bb = document.createElement('button');
        bb.classList.add("LocationButton");
        bb.textContent = 'FIGHT MONSTERS';
        document.getElementById('LocationActions').insertBefore(bb, document.getElementById('LocationActions').firstChild);
        bb.addEventListener('mousedown',()=>LookForFight(4));
    }
}