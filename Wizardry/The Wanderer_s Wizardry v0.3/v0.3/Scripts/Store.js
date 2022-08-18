'use strict';

let storeInv = [
    {"Name": "Archmage's Staff", "Class": "Excellent", "Type": "Wand", "Cost": 1200, "Def": 0, "fire": 10, "water": 5, "lightning": 10, "wind": 5, "Dura": 0},
    {"Name": "Thundering Wand", "Class": "Good", "Type": "Wand", "Cost": 380, "Def": 0, "fire": 0, "water": 3, "lightning": 12, "wind": 0, "Dura": 0},
    {"Name": "Flamemaster's Rod", "Class": "Good", "Type": "Wand", "Cost": 270, "Def": 0, "fire": 9, "water": 0, "lightning": 0, "wind": 2, "Dura": 0},
    {"Name": "Wizard's Jacket", "Class": "Good", "Type": "Robe", "Cost": 250, "Def": 5, "fire": 0, "water": 0, "lightning": 0, "wind": 0, "Dura": 35},
    {"Name": "Caster's Hood", "Class": "Good", "Type": "Hat", "Cost": 235, "Def": 4, "fire": 0, "water": 0, "lightning": 1, "wind": 0, "Dura": 20},
    {"Name": "Flame Cape", "Class": "Good", "Type": "Cape", "Cost": 180, "Def": 2, "fire": 3, "water": 0, "lightning": 0, "wind": 0, "Dura": 5},
    {"Name": "Magician's Hat", "Class": "Average", "Type": "Hat", "Cost": 175, "Def": 2, "fire": 0, "water": 0, "lightning": 1, "wind": 0, "Dura": 10},
    {"Name": "Magic Robes", "Class": "Average", "Type": "Robe", "Cost": 100, "Def": 2, "fire": 0, "water": 0, "lightning": 0, "wind": 0, "Dura": 15},
    {"Name": "Breeze Stick", "Class": "Poor", "Type": "Wand", "Cost": 80, "Def": 0, "fire": 0, "water": 0, "lightning": 0, "wind": 7, "Dura": 0},
    {"Name": "Ring of minor power", "Class": "Poor", "Type": "Ring", "Cost": 50, "Def": 0, "fire": 2, "water": 2, "lightning": 2, "wind": 2, "Dura": 0},
    {"Name": "Amulet of minor defense", "Class": "Poor", "Type": "Amulet", "Cost": 50, "Def": 4, "fire": 0, "water": 0, "lightning": 0, "wind": 0, "Dura": 15},
    {"Name": "Rag", "Class": "Poor", "Type": "Hat", "Cost": 20, "Def": 1, "fire": 1, "water": 0, "lightning": 1, "wind": 0, "Dura": 5},
];

function OpenShop() {
    document.getElementById('StoreINV').classList.toggle("HideObject");
    StoreUpdate();
}

function StoreUpdate() {
    ST.textContent = '';
    for (let i = 0; i < storeInv.length; i++) {
        let invt = document.createElement('p');
        invt.textContent = storeInv[i].Name;
        invt.classList.add(`${storeInv[i].Class}Class`);
        invt.id = `BuyItem${i}`;
        let cc = document.createElement('span');
        cc.textContent = ` Cost: ${storeInv[i].Cost} coins`;
        cc.classList.add("Cost");
        cc.id = `ByuItem${i}`;
        invt.appendChild(cc);
        ST.insertBefore(invt, ST.firstChild);
        invt.addEventListener("mousedown", BuyItem);
        invt.addEventListener("mouseover", ShowInfo);
        invt.addEventListener("mouseout", HideInfo);
    }
}

function BuyItem(Item) {
    let itm = +Item.target.id.substring(7);
    if (player.coins >= storeInv[itm].Cost) {
        player.coins -= storeInv[itm].Cost;
        playerInv.push(storeInv[itm]);
        storeInv.splice(itm, 1);
    }
    UpdateInvs();
    StoreUpdate();
}