'use strict';

let storeInv = [
    {"Name": "Gauntlets of the Mage-King", "Class": "Masterwork", "Type": "Gauntlets", "Cost": 3000, "Def": 8, "fire": 5, "water": 5, "lightning": 5, "wind": 5, "Dura": 30, "HP": 35},
    {"Name": "Archmage's Staff", "Class": "Excellent", "Type": "Wand", "Cost": 1200, "Def": 0, "fire": 10, "water": 5, "lightning": 10, "wind": 5, "Dura": 0, "HP": 0},
    {"Name": "Ancient Breastplate", "Class": "Excellent", "Type": "Robe", "Cost": 900, "Def": 11, "fire": 0, "water": 3, "lightning": 0, "wind": 3, "Dura": 40, "HP": 20},
    {"Name": "Ashen Helmet", "Class": "Excellent", "Type": "Hat", "Cost": 780, "Def": 5, "fire": 7, "water": 2, "lightning": 0, "wind": 0, "Dura": 20, "HP": 0},
    {"Name": "Ashen Cape", "Class": "Excellent", "Type": "Cape", "Cost": 650, "Def": 3, "fire": 6, "water": 0, "lightning": 0, "wind": 0, "Dura": 10, "HP": 0},
    {"Name": "Stonewall Amulet", "Class": "Excellent", "Type": "Amulet", "Cost": 610, "Def": 8, "fire": 0, "water": 5, "lightning": 10, "wind": 0, "Dura": 25, "HP": 0},
    {"Name": "Thundering Wand", "Class": "Good", "Type": "Wand", "Cost": 380, "Def": 0, "fire": 0, "water": 3, "lightning": 12, "wind": 0, "Dura": 0, "HP": 0},
    {"Name": "Flamemaster's Rod", "Class": "Good", "Type": "Wand", "Cost": 270, "Def": 0, "fire": 9, "water": 0, "lightning": 0, "wind": 2, "Dura": 0, "HP": 0},
    {"Name": "Wizard's Jacket", "Class": "Good", "Type": "Robe", "Cost": 250, "Def": 5, "fire": 0, "water": 0, "lightning": 0, "wind": 0, "Dura": 35, "HP": 0},
    {"Name": "Caster's Hood", "Class": "Good", "Type": "Hat", "Cost": 235, "Def": 4, "fire": 0, "water": 0, "lightning": 1, "wind": 0, "Dura": 20, "HP": 0},
    {"Name": "Enchanted Boots", "Class": "Good", "Type": "Boots", "Cost": 200, "Def": 4, "fire": 0, "water": 0, "lightning": 0, "wind": 0, "Dura": 15, "HP": 5},
    {"Name": "Flame Cape", "Class": "Good", "Type": "Cape", "Cost": 180, "Def": 2, "fire": 3, "water": 0, "lightning": 0, "wind": 0, "Dura": 5, "HP": 0},
    {"Name": "Leather Jacket", "Class": "Average", "Type": "Robe", "Cost": 175, "Def": 4, "fire": 0, "water": 0, "lightning": 0, "wind": 0, "Dura": 20, "HP": 0},
    {"Name": "Magician's Hat", "Class": "Average", "Type": "Hat", "Cost": 175, "Def": 2, "fire": 0, "water": 0, "lightning": 1, "wind": 0, "Dura": 10, "HP": 0},
    {"Name": "Vitality Ring", "Class": "Average", "Type": "Ring", "Cost": 120, "Def": 0, "fire": 0, "water": 0, "lightning": 0, "wind": 0, "Dura": 0, "HP": 50},
    {"Name": "Ring of fire", "Class": "Average", "Type": "Ring", "Cost": 115, "Def": 0, "fire": 10, "water": 0, "lightning": 0, "wind": 0, "Dura": 0, "HP": 0},
    {"Name": "Ring of wind", "Class": "Average", "Type": "Ring", "Cost": 115, "Def": 0, "fire": 0, "water": 0, "lightning": 0, "wind": 10, "Dura": 0, "HP": 0},
    {"Name": "Ring of water", "Class": "Average", "Type": "Ring", "Cost": 115, "Def": 0, "fire": 0, "water": 10, "lightning": 0, "wind": 0, "Dura": 0, "HP": 0},
    {"Name": "Ring of lightning", "Class": "Average", "Type": "Ring", "Cost": 115, "Def": 0, "fire": 0, "water": 0, "lightning": 10, "wind": 0, "Dura": 0, "HP": 0},
    {"Name": "Necklace of Water", "Class": "Average", "Type": "Amulet", "Cost": 115, "Def": 0, "fire": 0, "water": 8, "lightning": 0, "wind": 2, "Dura": 0, "HP": 0},
    {"Name": "Magic Robes", "Class": "Average", "Type": "Robe", "Cost": 100, "Def": 2, "fire": 0, "water": 0, "lightning": 0, "wind": 0, "Dura": 15, "HP": 0},
    {"Name": "Breeze Stick", "Class": "Poor", "Type": "Wand", "Cost": 80, "Def": 0, "fire": 0, "water": 0, "lightning": 0, "wind": 7, "Dura": 0, "HP": 0},
    {"Name": "Worn Gloves", "Class": "Poor", "Type": "Gauntlets", "Cost": 60, "Def": 2, "fire": 0, "water": 0, "lightning": 0, "wind": 0, "Dura": 5, "HP": 0},
    {"Name": "Old Boots", "Class": "Poor", "Type": "Boots", "Cost": 60, "Def": 2, "fire": 0, "water": 0, "lightning": 0, "wind": 0, "Dura": 5, "HP": 0},
    {"Name": "Ring of minor fire", "Class": "Poor", "Type": "Ring", "Cost": 50, "Def": 0, "fire": 5, "water": 0, "lightning": 0, "wind": 0, "Dura": 0, "HP": 0},
    {"Name": "Ring of minor wind", "Class": "Poor", "Type": "Ring", "Cost": 50, "Def": 0, "fire": 0, "water": 0, "lightning": 0, "wind": 5, "Dura": 0, "HP": 0},
    {"Name": "Ring of minor water", "Class": "Poor", "Type": "Ring", "Cost": 50, "Def": 0, "fire": 0, "water": 5, "lightning": 0, "wind": 0, "Dura": 0, "HP": 0},
    {"Name": "Ring of minor lightning", "Class": "Poor", "Type": "Ring", "Cost": 50, "Def": 0, "fire": 0, "water": 0, "lightning": 5, "wind": 0, "Dura": 0, "HP": 0},
    {"Name": "Amulet of minor defense", "Class": "Poor", "Type": "Amulet", "Cost": 50, "Def": 4, "fire": 0, "water": 0, "lightning": 0, "wind": 0, "Dura": 15, "HP": 0},
    {"Name": "Rag", "Class": "Poor", "Type": "Hat", "Cost": 20, "Def": 1, "fire": 1, "water": 0, "lightning": 1, "wind": 0, "Dura": 5, "HP": 0},
];

function OpenShop() {
    document.getElementById('StoreINV').classList.toggle("HideObject");
    DisplayUpdates();
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