'use strict';

function Heal(f) {
    if(f === 1 && hp < mhp && mp > spells[1].MPc - 1) {
        hp += (dmg+spellpower) * spells[1].DMGx;
        mp -= spells[1].MPc;
        action = true;
        if(hp > mhp) {
            hp = mhp;
        }
        ehit = false;
        calculateDamage(2);
        document.getElementById('alert').textContent = '';
        Refresh();
    }
}
