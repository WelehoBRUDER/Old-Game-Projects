'use strict';

function OpenGuild() {
    document.getElementById('GuildScreen').classList.toggle("HideObject");
    if(GuildQuests.length == 0) {
        GuildCreate();
    }
    GuildUpdate();
}

function GuildUpdate() {
    GQ.textContent = '';
    CU.textContent = '';
    CQ.textContent = '';
    CheckQuests();
    for (let i = 0; i < GuildQuests.length; i++) {
        let qt = document.createElement('p');
        qt.textContent = GuildQuests[i].Text;
        qt.id = `Questgu${i}`;
        qt.classList.add(`${GuildQuests[i].Tier}`);
        GQ.insertBefore(qt, GQ.firstChild);
        qt.addEventListener("mousedown", Accept);
        qt.addEventListener("mouseover", ShowQuestInfo);
        qt.addEventListener("mouseout", HideInfo);
    }
    for (let i = 0; i < CurrentQuests.length; i++) {
        let qt = document.createElement('p');
        qt.textContent = CurrentQuests[i].Text;
        qt.id = `Questcu${i}`;
        qt.classList.add(`${CurrentQuests[i].Tier}`);
        CU.insertBefore(qt, CU.firstChild);
        qt.addEventListener("mousedown", Accept);
        qt.addEventListener("mouseover", ShowQuestInfo);
        qt.addEventListener("mouseout", HideInfo);
    }
    for (let i = 0; i < CompletedQuests.length; i++) {
        let qt = document.createElement('p');
        qt.textContent = CompletedQuests[i].Text;
        qt.id = `Questcc${i}`;
        qt.classList.add(`${CompletedQuests[i].Tier}`);
        CQ.insertBefore(qt, CQ.firstChild);
        qt.addEventListener("mousedown", TurnIn);
        qt.addEventListener("mouseover", ShowQuestInfo);
        qt.addEventListener("mouseout", HideInfo);
    }
}

let Names = [
    {"Text": "Trouble"},
    {"Text": "Outbreak"},
    {"Text": "Infestation"},
    {"Text": "Issues"}
]

let adj = [
    {"Text": "Terrible"},
    {"Text": "Urgent"},
    {"Text": "Minor"},
    {"Text": "Dangerous"}
]

function GuildCreate() {
    let n = Math.floor(Math.random() * (15 - 5) + 5);
    for(let i = 0; i<n; i++) {
        QuestDifficulty = 0;
        let enemyType = Math.floor(Math.random() * (6 - 1) + 1);
        let enemyText = enemyType;
        evalEnemyType();
        let amount = Math.floor(Math.random() * (13 - 3) + 3);
        let adjN = Math.floor(Math.random() * (3 - 0) + 0);
        let namN = Math.floor(Math.random() * (3 - 0) + 0);
        QuestDifficulty = amount > 7 ? QuestDifficulty + 1 : QuestDifficulty;
        evalEnemyDif();
        let tier = "F";
        setTier();
        let reward1 = 0;
        let reward2 = 0;
        CalcRewards();
        let questText = `${adj[adjN].Text} ${enemyText} ${Names[namN].Text}`;
        function evalEnemyType() {
            enemyType = enemyType == 1 ? enemyType = "rat" : enemyType;
            enemyType = enemyType == 2 ? enemyType = "bandit" : enemyType;
            enemyType = enemyType == 3 ? enemyType = "animal" : enemyType;
            enemyType = enemyType == 4 ? enemyType = "monster" : enemyType;
            enemyType = enemyType == 5 ? enemyType = "Dmonster" : enemyType;
            enemyText = enemyText == 1 ? enemyText = "Rat" : enemyText;
            enemyText = enemyText == 2 ? enemyText = "Bandit" : enemyText;
            enemyText = enemyText == 3 ? enemyText = "Animal" : enemyText;
            enemyText = enemyText == 4 ? enemyText = "Monster" : enemyText;
            enemyText = enemyText == 5 ? enemyText = "Dungeon Monster" : enemyText;
        }
        function evalEnemyDif() {
            QuestDifficulty = enemyType == "rat" ? QuestDifficulty + 0 : QuestDifficulty;
            QuestDifficulty = enemyType == "bandit" ? QuestDifficulty + 1 : QuestDifficulty;
            QuestDifficulty = enemyType == "animal" ? QuestDifficulty + 2 : QuestDifficulty;
            QuestDifficulty = enemyType == "monster" ? QuestDifficulty + 3 : QuestDifficulty;
            QuestDifficulty = enemyType == "Dmonster" ? QuestDifficulty + 4 : QuestDifficulty;
        }
        function setTier() {
            QuestDifficulty = QuestDifficulty == 0 ? QuestDifficulty = "F" : QuestDifficulty;
            QuestDifficulty = QuestDifficulty == 1 ? QuestDifficulty = "E" : QuestDifficulty;
            QuestDifficulty = QuestDifficulty == 2 ? QuestDifficulty = "D" : QuestDifficulty;
            QuestDifficulty = QuestDifficulty == 3 ? QuestDifficulty = "C" : QuestDifficulty;
            QuestDifficulty = QuestDifficulty == 4 ? QuestDifficulty = "B" : QuestDifficulty;
            QuestDifficulty = QuestDifficulty == 5 ? QuestDifficulty = "A" : QuestDifficulty;
            QuestDifficulty = QuestDifficulty == 6 ? QuestDifficulty = "S" : QuestDifficulty;
        }
        function CalcRewards() {
            let x = 0;
            for(let i=0; i<enemyBank.length; i++) {
                if(enemyBank[i].id.startsWith(enemyType)) {
                    x += enemyBank[i].exp/2
                }
            }
            x = x/3;
            reward1 = Math.floor(x*amount);
            for(let i=0; i<enemyBank.length; i++) {
                if(enemyBank[i].id.startsWith(enemyType) && enemyType != "bandit") {
                    x += enemyBank[i].gold/1.5
                } else if(enemyBank[i].id.startsWith("bandit")) {
                    x += enemyBank[i].gold/4
                }
            }
            x = x/2;
            reward2 = Math.floor(x*amount);
        }
        GuildQuests.push({"Text": questText, "Tier": QuestDifficulty, "Name": enemyText, "Amount": amount, "Slain": 0, "XP": reward1, "Gold": reward2, "Type": enemyType});
        //GuildQuests.push({"Type": enemyType, "Name": enemyText, "Text": questText, "desc": describe, "slain": 0, "amount": amount, "coinreward": reward1, "xpreward": reward2});
    }
}

function Accept(Quest) {
    let q = +Quest.target.id.substring(7);
    if (Check()) {
        CurrentQuests.push(GuildQuests[q]);
        GuildQuests.splice(q, 1);
    }
    HideInfo();
    GuildUpdate();
    function Check() {
        for (let quest of CurrentQuests) {
            if (quest.Name == GuildQuests[q].Name) {
                return false;
            }
        }
        return true;
    }
}

function CheckQuests() {
    for(let i = 0; i<CurrentQuests.length; i++) {
        if(CurrentQuests[i].Slain >= CurrentQuests[i].Amount) {
            CompletedQuests.push(CurrentQuests[i]);
            CurrentQuests.splice(i, 1);
        }
    }
}

function TurnIn(e) {
    let cur = e.target.id.substring(7);
    player.exp += +CompletedQuests[cur].XP;
    player.coins += +CompletedQuests[cur].Gold;
    CompletedQuests.splice(cur, 1);
    HideInfo();
    GuildUpdate();
}