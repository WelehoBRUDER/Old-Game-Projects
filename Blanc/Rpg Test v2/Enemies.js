'use strict';

// Enemy list
let enemies = [
    {'name': 'goblin','hp': 50, 'sta': 30, 'mp': 10, 'dmg': 10, 'eva': 15, 'dex': 20, 'def': 50, 'xp': 100},
    {'name': 'orc','hp': 100, 'sta': 60, 'mp': 10, 'dmg': 30, 'eva': 5, 'dex': 25, 'def': 200, 'xp': 250},
    {'name': 'bear','hp': 280, 'sta': 100, 'mp': 20, 'dmg': 60, 'eva': 30, 'dex': 40, 'def': 250, 'xp': 800},
    {'name': 'orc brute','hp': 600, 'sta': 180, 'mp': 20, 'dmg': 85, 'eva': 50, 'dex': 70, 'def': 280, 'xp': 2000},
    {'name': 'minotaur','hp': 1100, 'sta': 250, 'mp': 25, 'dmg': 170, 'eva': 40, 'dex': 85, 'def': 350, 'xp': 5000}
]
let REXP = [
    {'level': 1, 'req': 100},
    {'level': 2, 'req': 500},
    {'level': 3, 'req': 1200},
    {'level': 4, 'req': 2500},
    {'level': 5, 'req': 7000},
    {'level': 6, 'req': 15000},
    {'level': 7, 'req': 40000},
    {'level': 8, 'req': 100000},
    {'level': 9, 'req': 210000},
]
let powers = [
    {'name': 'Break', 'DMGx': 1.5, 'STAc': 10, 'stunC': 2, 'armorBreak': 1, 'cd': 2},
    {'name': 'Crushing Blow', 'DMGx': 2, 'STAc': 20, 'stunC': 2, 'armorBreak': 0, 'cd': 3}
]
let spells = [
    {'name': 'Fireball', 'DMGx': 1.8, 'MPc': 25},
    {'name': 'Heal', 'DMGx': 0.5, 'MPc': 20}
]
let weapons = [
    {'name': 'Rusted Sword', 'DMGx': 1, 'STAc': 1},
    {'name': 'Broadsword', 'DMGx': 1.1, 'STAc': 1}
]
