import BagsFootwear from "./data/BagsFootwear.js";
import BeautyHealth from "./data/BeautyHealth.js";
import Electronics from "./data/Electronics.js";
import HomeAndKitchen from "./data/HomeAndKitchen.js";
import JewelleryAccessories from "./data/JewelleryAccessories.js";
import Kids from "./data/Kids.js";
import Men from "./data/Men.js";
import WomenEthnic from "./data/WomenEthnic.js";
import WomenWestern from "./data/WomenWestern.js";

let inputSearchE1 = document.querySelector(".inputSearch");
let recentInput = [];
let inputFormE1 = document.querySelector("#inputForm");
const listofRecentE1 = document.querySelector(".listofRecent");

inputFormE1.addEventListener("submit", (e) => {
  e.preventDefault();
  let listofRecentHTMLE1 = "";

  recentInput.unshift(inputSearchE1.value);
  // push use to push work as a queue and unshift work a stack
  console.log(recentInput);
  if (recentInput.length > 0) {
    for (let i = 0; i < recentInput.length; i++) {
      listofRecentHTMLE1 += `
            <div class="recentItem">

            <div class="recentIcon">
              <img src="./img/recent.png" alt="">
            </div>
            <p>${recentInput[i]}</p>
          </div>
            `;
    }
    listofRecentE1.innerHTML = listofRecentHTMLE1;
  }
});
// Function resuable

function renderSubMenu(id, data){
  let temp = document.getElementById(id); 
function TempFunc() {
  return data.map(el => {
    let list = "";
    
   list = el.data.map(element => `<p>${element}</p>`).join(" ")
    return `
    <div class = "column"> 
    <h4>${el.heading}</h4>
    ${list}
    </div>
    `
  }).join(" ");
}
temp.innerHTML = TempFunc();
}
renderSubMenu("womenEthnic", WomenEthnic);
// Women Ethnic
// let womenEthnicIndex = document.getElementById("womenEthnic"); 
// function womenEthnicFunc() {
  //   return WomenEthnic.map(el => {
    //     let list = "";
    
    //    list = el.data.map(element => `<p>${element}</p>`).join(" ")
//     return `
//     <div class = "column"> 
//     <h4>${el.heading}</h4>
//     ${list}
//     </div>
//     `
//   }).join(" ");
// }
// womenEthnicIndex.innerHTML = womenEthnicFunc();

// WomenWestern
renderSubMenu("WomenWestern", WomenWestern);


// Men
renderSubMenu("men", Men);
// Kids
renderSubMenu("kids", Kids);


// homeAndKitchen
renderSubMenu("homeAndKitchen", HomeAndKitchen);


// beautyAndhealth
renderSubMenu("beautyAndhealth", BeautyHealth);

// Jwellery and Accessories
renderSubMenu("JwelleryAndaccessories", JewelleryAccessories);

// Jwellery and Accessories
renderSubMenu("bagsAndfootwear", BagsFootwear);
// Jwellery and Accessories
renderSubMenu("Electronics", Electronics);


