"use strict";
const imageSection = document.querySelector(".image-section");
//code loops through castles object pulling out objects one by one and outputting the required data to the HTML
let i = 0;
const castleOutput = function() {  
  imageSection.innerHTML += `
    <figcaption>    
      <h2>${castles[i].title}</h2>
      <a href="${castles[i].linkURL}"><h3>Picture taken by: ${castles[i].credit}</h3></a>
      <p>${castles[i].description}</p>
      <p>${castles[i].width}px x ${castles[i].height}px</p>
      <a href="${castles[i].creditURL}"><img src="assets/img/castle${castles[i].id}.jpg" alt="${castles[i].title}">    
    </figcaption>`;
  i++;
}
castles.forEach(castleOutput);
