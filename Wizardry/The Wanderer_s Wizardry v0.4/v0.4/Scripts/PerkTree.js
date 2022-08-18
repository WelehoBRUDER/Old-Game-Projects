'use strict';

function OpenPerkTree() {
    document.getElementById('PerkTree').classList.toggle("HideObject");
    UpdateCharSheet();
    DisplayUpdates();
}

function UpdateCharSheet() {
    CS.textContent = '';
    let p1 = document.createElement('p');
    let s1 = document.createElement('span');
    p1.textContent = `Max-HP: `;
    s1.textContent = `${player.maxhp}`;
    s1.style.color = 'red';
    p1.appendChild(s1);
    CS.appendChild(p1);
    let p2 = document.createElement('p');
    let s2 = document.createElement('span');
    p2.textContent = `Durability: `;
    s2.textContent = `${player.armourduramax}`;
    s2.style.color = 'gray';
    p2.appendChild(s2);
    CS.appendChild(p2);
    let p3 = document.createElement('p');
    let s3 = document.createElement('span');
    p3.textContent = `Armour: `;
    s3.textContent = `${player.armour}`;
    s3.style.color = 'lightgray';
    p3.appendChild(s3);
    CS.appendChild(p3);
    let p4 = document.createElement('p');
    let s4 = document.createElement('span');
    p4.textContent = `Max Actions: `;
    s4.textContent = `${playerMaxAction}`;
    s4.style.color = 'yellow';
    p4.appendChild(s4);
    CS.appendChild(p4);
    let p5 = document.createElement('p');
    p5.textContent = `Spells known: `;
    for (let i = 0; i < spells.length; i++) {
        let p = document.createElement('p');
        p.textContent = `- ${spells[i].name}`;
        p.style.color = spells[i].type == "fire" ? p.style.color = "orange" : p.style.color;
        p.style.color = spells[i].type == "water" ? p.style.color = "lightblue" : p.style.color;
        p.style.color = spells[i].type == "lightning" ? p.style.color = "purple" : p.style.color;
        p.style.color = spells[i].type == "wind" ? p.style.color = "white" : p.style.color;
        p.style.marginTop = '0px';
        p.style.marginBottom = '0px';
        p5.appendChild(p);
    }
    CS.appendChild(p5);
    for (let i = 0; i < spells.length; i++) {
        let p = document.createElement('p');
        let s = document.createElement('span');
        p.textContent = `${spells[i].name} DMG: `
        s.textContent = spells[i].dmg;
        s.style.color = spells[i].type == "fire" ? s.style.color = "orange" : s.style.color;
        s.style.color = spells[i].type == "water" ? s.style.color = "lightblue" : s.style.color;
        s.style.color = spells[i].type == "lightning" ? s.style.color = "purple" : s.style.color;
        s.style.color = spells[i].type == "wind" ? s.style.color = "white" : s.style.color;
        p.appendChild(s);
        CS.appendChild(p);
    }
    let SP = document.createElement("div");
    SP.classList.add("SkillPoints");
    SP.textContent = `${player.skill}`;
    document.getElementById('PerkTree').appendChild(SP);
    if (player.skill > 0) {
        let p = document.createElement('p');
        p.textContent = '!';
        p.classList.add("RemainingP");
        document.getElementById('PerkTree').appendChild(p);
    }
    CreatePerkTree();
}

let PerkTreeTable = [
    { "Type": "fire", "Name": "Fire I", "Desc": "Fire I increases fire damage by 5. Cost: 1 SP", "Cost": 1, "Spell": "none", "HP": 0, "DMG": 5, "Bought": false },
    { "Type": "water", "Name": "Water I", "Desc": "Water I increases water damage by 5. Cost: 1 SP", "Cost": 1, "Spell": "none", "HP": 0, "DMG": 5, "Bought": false },
    { "Type": "lightning", "Name": "Lightning I", "Desc": "Lightning I increases lightning damage by 5. Cost: 1 SP", "Cost": 1, "Spell": "none", "HP": 0, "DMG": 5, "Bought": false },
    { "Type": "wind", "Name": "Wind I", "Desc": "Wind I increases wind damage by 5. Cost: 1 SP", "Cost": 1, "Spell": "none", "HP": 0, "DMG": 5, "Bought": false },
    { "Type": "fire", "Name": "Fire II", "Desc": "Fire II increases fire damage by 8. Cost: 1 SP", "Cost": 1, "Spell": "none", "HP": 0, "DMG": 8, "Bought": false },
    { "Type": "water", "Name": "Water II", "Desc": "Water II increases water damage by 8. Cost: 1 SP", "Cost": 1, "Spell": "none", "HP": 0, "DMG": 8, "Bought": false },
    { "Type": "lightning", "Name": "Lightning II", "Desc": "Lightning II increases lightning damage by 8. Cost: 1 SP", "Cost": 1, "Spell": "none", "HP": 0, "DMG": 8, "Bought": false },
    { "Type": "wind", "Name": "Wind II", "Desc": "Wind II increases wind damage by 8. Cost: 1 SP", "Cost": 1, "Spell": "none", "HP": 0, "DMG": 8, "Bought": false },
    { "Type": "fire", "Name": "Fire III", "Desc": "Fire III increases fire damage by 10. Cost: 2 SP", "Cost": 2, "Spell": "none", "HP": 0, "DMG": 10, "Bought": false },
    { "Type": "water", "Name": "Water III", "Desc": "Water III increases water damage by 13. Cost: 2 SP", "Cost": 2, "Spell": "none", "HP": 0, "DMG": 13, "Bought": false },
    { "Type": "lightning", "Name": "Lightning III", "Desc": "Lightning III increases lightning damage by 7. Cost: 2 SP", "Cost": 2, "Spell": "none", "HP": 0, "DMG": 7, "Bought": false },
    { "Type": "wind", "Name": "Wind III", "Desc": "Wind III increases wind damage by 10 and adds spells 'Poison Wind'. Cost: 3 SP", "Cost": 3, "Spell": "Poison", "HP": 0, "DMG": 10, "Bought": false },
    { "Type": "fire", "Name": "Fire IV", "Desc": "Fire IV increases fire damage by 15. Cost: 4 SP", "Cost": 4, "Spell": "none", "HP": 0, "DMG": 15, "Bought": false },
    { "Type": "water", "Name": "Water IV", "Desc": "Water IV increases water damage by 18. Cost: 4 SP", "Cost": 4, "Spell": "none", "HP": 0, "DMG": 18, "Bought": false },
    { "Type": "lightning", "Name": "Lightning IV", "Desc": "Lightning IV increases lightning damage by 14. Cost: 4 SP", "Cost": 4, "Spell": "none", "HP": 0, "DMG": 14, "Bought": false },
    { "Type": "wind", "Name": "Wind IV", "Desc": "Wind IV increases wind damage by 10 and adds 50 HP. Cost: 4 SP", "Cost": 4, "Spell": "none", "HP": 50, "DMG": 10, "Bought": false },
    { "Type": "fire", "Name": "Fire V", "Desc": "Fire V increases fire damage by 30. Cost: 8 SP", "Cost": 8, "Spell": "none", "HP": 0, "DMG": 30, "Bought": false },
    { "Type": "water", "Name": "Water V", "Desc": "Water V increases water damage by 30. Cost: 8 SP", "Cost": 8, "Spell": "none", "HP": 0, "DMG": 30, "Bought": false },
    { "Type": "lightning", "Name": "Lightning V", "Desc": "Lightning V increases lightning damage by 30. Cost: 8 SP", "Cost": 8, "Spell": "none", "HP": 0, "DMG": 30, "Bought": false },
    { "Type": "wind", "Name": "Wind V", "Desc": "Wind V increases wind damage by 40. Cost: 8 SP", "Cost": 8, "Spell": "none", "HP": 0, "DMG": 40, "Bought": false },
];

function CreatePerkTree() {
    document.getElementById('AllPerks').textContent = '';
    for (let i = 0; i < PerkTreeTable.length; i++) {
        let perk = document.createElement('div');
        perk.classList.add("PerkBox");
        let p = document.createElement('p');
        p.textContent = PerkTreeTable[i].Name;
        perk.style.backgroundColor = PerkTreeTable[i].Type == "fire" ? perk.style.backgroundColor = "#e65e04" : perk.style.backgroundColor;
        perk.style.backgroundColor = PerkTreeTable[i].Type == "water" ? perk.style.backgroundColor = "lightblue" : perk.style.backgroundColor;
        perk.style.backgroundColor = PerkTreeTable[i].Type == "lightning" ? perk.style.backgroundColor = "purple" : perk.style.backgroundColor;
        perk.style.backgroundColor = PerkTreeTable[i].Type == "wind" ? perk.style.backgroundColor = "silver" : perk.style.backgroundColor;
        perk.id = `Perk${i}`;
        p.id = `Berk${i}`;
        perk.style.borderColor = PerkTreeTable[i].Bought == true ? perk.style.borderColor = "gold" : perk.style.borderColor;
        perk.appendChild(p);
        perk.addEventListener("mouseover", CreateInfo);
        perk.addEventListener("mouseout", HidePerkInfo);
        perk.addEventListener("mousedown", BuyPerkTree);
        p.addEventListener("mouseover", CreateInfo);
        p.addEventListener("mouseout", HidePerkInfo);
        p.addEventListener("mousedown", BuyPerkTree);
        document.getElementById('AllPerks').appendChild(perk);
    }
}

function CreateInfo(e) {
    if (e.target.id !== "AllPerks") {
        let a = e.target.id.substring(4);
        document.getElementById('PerkInfoText').textContent = PerkTreeTable[a].Desc;
    }
}

function HidePerkInfo() {
    document.getElementById('PerkInfoText').textContent = '';
}

function BuyPerkTree(e) {
    if (e.target.id !== "AllPerks") {
        let a = e.target.id.substring(4);
        if (player.skill >= PerkTreeTable[a].Cost && PerkTreeTable[a].Bought == false) {
            player.skill -= PerkTreeTable[a].Cost;
            PerkTreeTable[a].Bought = true;
            player.maxhp += PerkTreeTable[a].HP;
            if(a == 11) {
                spells.push({"id": "poison", "name": "Poison Wind", "dmg": 14, "cost": 1, "type": "wind", "combo": "", "status": 3, "statusLast": 6, "statusName": "poison"});
                document.getElementById('spell4').classList.remove("HideObject");
            }
            for (let i = 0; i<spells.length; i++) {
                spells[i].dmg = spells[i].type == PerkTreeTable[a].Type ? spells[i].dmg += PerkTreeTable[a].DMG : spells[i].dmg;
                spells[i].status = spells[i].id == "burn" ? spells[i].status += Math.floor(PerkTreeTable[a].DMG/2.85) : spells[i].status;
                spells[i].status = spells[i].id == "poison" ? spells[i].status += Math.floor(PerkTreeTable[a].DMG/2.5) : spells[i].status;
            }
            UpdateCharSheet();
        }
    }
}