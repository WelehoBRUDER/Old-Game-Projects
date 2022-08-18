'use strict';

function Locations(e) {
    if(e.target.id == "Locations") {
        console.log('misclick?');
    } else {
        document.getElementById('LocationActions').textContent = '';
        let a = e.target.id.substring(3);
        document.getElementById('LocationName').textContent = `Currently Inside: ${locationsTable[a].Title}`;
        document.getElementById('LocationText').textContent = locationsTable[a].desc;
        let b = document.createElement('button');
        b.classList.add("LocationButton");
        b.textContent = 'BACK';
        document.getElementById('LocationActions').insertBefore(b, document.getElementById('LocationActions').firstChild);
        b.addEventListener('mousedown', hide);
        let bb = document.createElement('button');
        bb.classList.add("LocationButton");
        bb.textContent = locationsTable[a].action;
        document.getElementById('LocationActions').insertBefore(bb, document.getElementById('LocationActions').firstChild);
        bb.addEventListener('mousedown', eval(locationsTable[a].funktio));
    }
}