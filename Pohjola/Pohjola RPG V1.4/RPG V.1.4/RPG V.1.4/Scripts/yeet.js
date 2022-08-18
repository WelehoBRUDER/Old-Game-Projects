function toolTips(elem, text, time) {
  let ajastin;
  elem.onmouseenter = toolTipsHoverIn;
  elem.onmouseleave = toolTipsHoverOut;
  
  let toolTipDiv = document.createElement("div");
  let toolTipP = document.createElement("p");
  toolTipP.textContent = text;
  toolTipDiv.appendChild(toolTipP);
  toolTipDiv.style.position = "absolute"
  document.body.appendChild(toolTipDiv);
  toolTipDiv.style.display = "none";
  toolTipDiv.classList.add("toolTipBox");
  toolTipP.classList.add("toolTipText");
  toolTipDiv.style.transition = time / 1000 + "s";
  toolTipDiv.style.transitionProperty = "opacity";

  
  function toolTipsHoverIn(e) {
    clearTimeout(ajastin);
    toolTipDiv.style.opacity = 1;
    toolTipDiv.style.display = "block";
    toolTipDiv.style.top = `${elem.offsetHeight + elem.offsetTop}px`;
    toolTipDiv.style.left = e.x + "px";
  }

  function toolTipsHoverOut() {
    toolTipDiv.style.opacity = 0;
    ajastin = setTimeout(function() {
      toolTipDiv.style.display = "none";
    }, time);
  }
}

toolTips(document.getElementById("adkdker3"), "Voit käyttää mitä haluat", 2000);

// Kassun koodi, ei vielä käytössä.

