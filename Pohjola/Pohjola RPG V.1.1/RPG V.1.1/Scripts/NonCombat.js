'use strict';

function PerkScreen() {
    document.getElementById('MainCombat').style.display = 'none';
    document.getElementById('ClassSelect').style.display = 'block';
}

document.getElementById('Warrior').addEventListener("mouseover", ShowWarText);
document.getElementById('Warrior').addEventListener("mouseout", HideWarText);
document.getElementById('Hunter').addEventListener("mouseover", ShowHunText);
document.getElementById('Hunter').addEventListener("mouseout", HideHunText);
document.getElementById('Mage').addEventListener("mouseover", ShowMagText);
document.getElementById('Mage').addEventListener("mouseout", HideMagText);

function ShowWarText() {
    document.getElementById('ClassDesc').textContent = 'Warriors are brutes who specialize in close combat. They have high attack and hp, but are poor at dexterious moves and are not great thinkers';
}

function HideWarText() {
    document.getElementById('ClassDesc').textContent = '';
}

function ShowHunText() {
    document.getElementById('ClassDesc').textContent = 'Hunters are highly dexterious rangers who prefer avoiding blows with agile moves and attacking weakpoints. They possess slim bodies and are quite weak.';
}

function HideHunText() {
    document.getElementById('ClassDesc').textContent = '';
}

function ShowMagText() {
    document.getElementById('ClassDesc').textContent = 'Mages are scholars who see big muscles as a sign of idiocy and consider it quite boorish to train. They rely on their willpower and logic to subjugate their foes. Mages are physically weak, but can devastate battlefields with their spells.';
}

function HideMagText() {
    document.getElementById('ClassDesc').textContent = '';
}