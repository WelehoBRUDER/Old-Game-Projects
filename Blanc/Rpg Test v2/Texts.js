'use strict';

function explainAll() { // This function explains what has happened recently in the battle
    if (phit) {
        document.getElementById('e1').textContent = `${enemies[type].name} attacks you, dealing ${Math.ceil(edmg * cDef)} damage!`;
    }
    if (ehit) {
        if (!power && !spell) {
            document.getElementById('p1').textContent = `You attack ${enemies[type].name}, with ${weapons[wp].name} dealing ${Math.ceil(dmg * ecDef)} damage!`;
        } else if (power && !spell) {
            document.getElementById('p1').textContent = `You attack ${enemies[type].name}, with ${weapons[wp].name} using ${powers[pUsed].name} dealing ${Math.ceil(dmg * powers[pUsed].DMGx)} damage!`;
        } else if (!power && spell) {
            document.getElementById('p1').textContent = `You use ${spells[0].name} on ${enemies[type].name} and deal ${Math.ceil((dmg + spellpower) * spells[0].DMGx * ecDef)} damage!`;
        }
    }
    if (!phit) {
        document.getElementById('e1').textContent = `${enemies[type].name} attacks, but misses!`;
    }
    if (!ehit && !action) {
        document.getElementById('p1').textContent = `You attack ${enemies[type].name}, with ${weapons[wp].name} but miss!`
    }
    if(!ehit && action)
        document.getElementById('p1').textContent = `You use ${spells[1].name} and recover ${(dmg+spellpower) * spells[1].DMGx} HP!`
}
function clearAll() { // This function clears all messages on screen
    document.getElementById('p1').textContent = ``;
    document.getElementById('e1').textContent = ``;
    document.getElementById('alert').textContent = '';
    document.getElementById('condition').textContent = '';
    document.getElementById('stun').textContent = '';
}