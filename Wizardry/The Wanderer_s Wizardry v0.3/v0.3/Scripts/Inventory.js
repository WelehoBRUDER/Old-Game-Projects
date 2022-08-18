'use strict';

let playerEquip = [];
let playerInv = [];


function UpdateInvs() {
    IV.textContent = '';
    EQ.textContent = '';
    hide();
    for (let i = 0; i < playerInv.length; i++) {
        let invt = document.createElement('p');
        invt.textContent = playerInv[i].Name;
        invt.classList.add(`${playerInv[i].Class}Class`);
        invt.id = `InvItem${i}`;
        IV.insertBefore(invt, IV.firstChild);
        invt.addEventListener("mousedown", Equip);
        invt.addEventListener("mouseover", ShowInfo);
        invt.addEventListener("mouseout", HideInfo);
    }
    for (let i = 0; i < playerEquip.length; i++) {
        let invt = document.createElement('p');
        invt.textContent = playerEquip[i].Name;
        invt.classList.add(`${playerEquip[i].Class}Class`); invt.id = `EquipItem${i}`;
        invt.id = `EquItem${i}`;
        EQ.insertBefore(invt, EQ.firstChild);
        invt.addEventListener("mousedown", UnEquip);
        invt.addEventListener("mouseover", ShowInfo);
        invt.addEventListener("mouseout", HideInfo);
    }
}

function HideInfo(e) {
    SI.classList.add("HideObject");
}

function Equip(Item) {
    let itm = +Item.target.id.substring(7);
    HideInfo();
    if (Check()) {
        playerEquip.push(playerInv[itm]);
        AddStats();
        playerInv.splice(itm, 1);
    }
    UpdateInvs();
    function Check() {
        for (let item of playerEquip) {
            if (item.Type == playerInv[itm].Type) {
                return false;
            }
        }
        return true;
    }
    function AddStats() {
        player.armour += playerInv[itm].Def;
        player.armourduramax += playerInv[itm].Dura;
        for(let i = 0; i<spells.length; i++) {
            spells[i].dmg = spells[i].type == "fire" ? spells[i].dmg + playerInv[itm].fire : spells[i].dmg;
            spells[i].dmg = spells[i].type == "water" ? spells[i].dmg + playerInv[itm].water : spells[i].dmg;
            spells[i].dmg = spells[i].type == "lightning" ? spells[i].dmg + playerInv[itm].lightning : spells[i].dmg;
            spells[i].dmg = spells[i].type == "wind" ? spells[i].dmg + playerInv[itm].wind : spells[i].dmg;
        }
    }
}

function UnEquip(Item) {
    let itm = +Item.target.id.substring(7);
    HideInfo();
    playerInv.push(playerEquip[itm]);
    RemoveStats();
    playerEquip.splice(itm, 1);
    UpdateInvs();
    function RemoveStats() {
        player.armour -= playerEquip[itm].Def;
        player.armourduramax -= playerEquip[itm].Dura;
        for(let i = 0; i<spells.length; i++) {
            spells[i].dmg = spells[i].type == "fire" ? spells[i].dmg - playerEquip[itm].fire : spells[i].dmg;
            spells[i].dmg = spells[i].type == "water" ? spells[i].dmg - playerEquip[itm].water : spells[i].dmg;
            spells[i].dmg = spells[i].type == "lightning" ? spells[i].dmg - playerEquip[itm].lightning : spells[i].dmg;
            spells[i].dmg = spells[i].type == "wind" ? spells[i].dmg - playerEquip[itm].wind : spells[i].dmg;
        }
    }
}

function OPENINV() {
    document.getElementById("PlayerINV").classList.toggle("HideObject");
    
}