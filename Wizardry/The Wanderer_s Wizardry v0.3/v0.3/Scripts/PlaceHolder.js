'use strict';

function ShowInfo(e) {
    let InfoTable = [];
    if(e.target.id.startsWith("BuyItem") || e.target.id.startsWith("ByuItem")) {
        InfoTable = storeInv;
    } else if (e.target.id.startsWith("InvItem")) {
        InfoTable = playerInv;
    } else if (e.target.id.startsWith("EquItem")) {
        InfoTable = playerEquip;
    }
    SI.classList.remove("HideObject");
    SI.style.top = `${e.y - 50}px`;
    SI.style.left = `${e.x - 300}px`;
    SI.textContent = '';
    let p = document.createElement('p');
    p.textContent = `Name: ${InfoTable[e.target.id.substring(7)].Name}`;
    SI.appendChild(p);
    let p2 = document.createElement('p');
    p2.textContent = `Type: ${InfoTable[e.target.id.substring(7)].Type}`;
    SI.appendChild(p2);
    let p3 = document.createElement('p');
    p3.textContent = `Class: `;
    let s = document.createElement('span');
    s.textContent = InfoTable[e.target.id.substring(7)].Class;
    s.classList.add(`${InfoTable[e.target.id.substring(7)].Class}Class`);
    p3.appendChild(s);
    SI.appendChild(p3);
    let a = e.target.id.substring(7);
    if(InfoTable[a].Def > 0) {
        let p = document.createElement('p');
        p.textContent = `Defense: `;
        let s = document.createElement('span');
        s.textContent = InfoTable[e.target.id.substring(7)].Def;
        s.classList.add(`AverageClass`);
        p.appendChild(s);
        SI.appendChild(p);
    }
    if(InfoTable[a].Dura > 0) {
        let p = document.createElement('p');
        p.textContent = `Durability: `;
        let s = document.createElement('span');
        s.textContent = InfoTable[e.target.id.substring(7)].Dura;
        s.classList.add(`dura`);
        p.appendChild(s);
        SI.appendChild(p);
    }
    if(InfoTable[a].fire > 0) {
        let p = document.createElement('p');
        p.textContent = `Fire DMG: `;
        let s = document.createElement('span');
        s.textContent = InfoTable[e.target.id.substring(7)].fire;
        s.classList.add(`fire`);
        p.appendChild(s);
        SI.appendChild(p);
    }
    if(InfoTable[a].water > 0) {
        let p = document.createElement('p');
        p.textContent = `Water DMG: `;
        let s = document.createElement('span');
        s.textContent = InfoTable[e.target.id.substring(7)].water;
        s.classList.add(`water`);
        p.appendChild(s);
        SI.appendChild(p);
    }
    if(InfoTable[a].lightning > 0) {
        let p = document.createElement('p');
        p.textContent = `Lightning DMG: `;
        let s = document.createElement('span');
        s.textContent = InfoTable[e.target.id.substring(7)].lightning;
        s.classList.add(`lightning`);
        p.appendChild(s);
        SI.appendChild(p);
    }
    if(InfoTable[a].wind > 0) {
        let p = document.createElement('p');
        p.textContent = `Wind DMG: `;
        let s = document.createElement('span');
        s.textContent = InfoTable[e.target.id.substring(7)].wind;
        s.classList.add(`wind`);
        p.appendChild(s);
        SI.appendChild(p);
    }
}

function ShowQuestInfo(e) {
    let InfoTable = [];
    if(e.target.id.startsWith("Questgu")) {
        InfoTable = GuildQuests;
    } else if(e.target.id.startsWith("Questcu")) {
        InfoTable = CurrentQuests;
    } else if(e.target.id.startsWith("Questcc")) {
        InfoTable = CompletedQuests;
    }
    let a = e.target.id.substring(7);
    SI.classList.remove("HideObject");
    SI.style.top = `${e.y - 50}px`;
    SI.style.left = `${e.x - 300}px`;
    SI.textContent = '';
    let p = document.createElement('p');
    p.textContent = `Slay ${InfoTable[a].Amount} of the enemy ${InfoTable[a].Name}.`;
    SI.appendChild(p);
    let p2 = document.createElement('p');
    p2.textContent = `Difficulty:`;
    let s = document.createElement('span');
    s.textContent = InfoTable[a].Tier;
    s.classList.add(`${InfoTable[a].Tier}`);
    let s2 = document.createElement('span');
    s2.textContent = `-Tier`;
    p2.appendChild(s);
    p2.appendChild(s2);
    SI.appendChild(p2);
    let p3 = document.createElement('p');
    p3.textContent = `Slain: ${InfoTable[a].Slain}/${InfoTable[a].Amount}`;
    SI.appendChild(p3);
    let p4 = document.createElement('p');
    p4.textContent = `EXP Reward: ${InfoTable[a].XP}`;
    SI.appendChild(p4);
    let p5 = document.createElement('p');
    p5.textContent = `Coin Reward: ${InfoTable[a].Gold}`;
    SI.appendChild(p5);
}
