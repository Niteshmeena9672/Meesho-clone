import BagsFootwear from "./data/Navigation_bar/BagsFootwear.js";
import BeautyHealth from "./data/Navigation_bar/BeautyHealth.js";
import Electronics from "./data/Navigation_bar/Electronics.js";
import HomeAndKitchen from "./data/Navigation_bar/HomeAndKitchen.js";
import JewelleryAccessories from "./data/Navigation_bar/JewelleryAccessories.js";
import Kids from "./data/Navigation_bar/Kids.js";
import Men from "./data/Navigation_bar/Men.js";
import WomenEthnic from "./data/Navigation_bar/WomenEthnic.js";
import WomenWestern from "./data/Navigation_bar/WomenWestern.js";

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


// Product data 

import ProductData from "./data.js";


let filterData = [];

document.addEventListener("click",(e)=>{
  const category = new Set(ProductData.map(el=>el.category));
const WatchEl = document.getElementById("Watch").checked;
const bluetooth_HeadsetEl = document.getElementById("bluetooth_Headset").checked;
const Men_ChainsEl = document.getElementById("Men_Chains").checked;
const KurtasEl = document.getElementById("Kurtas").checked;
const MobileEl_Accessories = document.getElementById("Mobile_Accessories").checked;
const SareeEl = document.getElementById("Saree").checked;
  filterData = ProductData.filter(el=>(
    WatchEl && el.category =="watch"||
    bluetooth_HeadsetEl && el.category =="bluetooth Headset"||
    Men_ChainsEl && el.category =="Men Chains"||
    KurtasEl && el.category =="Kurtas"||
    MobileEl_Accessories && el.category =="Mobile Accessories"||
    SareeEl && el.category =="sarees"
  ))

  renderProductData()
})

function renderProductData(){
  let filterDataHtml ="";
  if(filterData[0]){
    filterData.forEach(el=>{
      filterDataHtml+=`<div class="productCard">
      <div class="product_image">
        <img src="./productImage/${el.img}
        " alt="">
      </div>
      <h3 id="product_name">${el.name}</h3>
      <p class="product_price">
        <span>₹${el.price}</span>
      </p>
    </div>`
  })
  // renderProductData();
}
else{
  ProductData.forEach(el=>{
    filterDataHtml+=`<div class="productCard">
      <div class="product_image">
        <img src="./productImage/${el.img}
        " alt="">
      </div>
      <h3 id="product_name">${el.name}</h3>
      <p class="product_price">
      <span>₹${el.price}</span>
      </p>
      </div>`
    })
  }
  
  document.getElementById("product_category_displayID").innerHTML=filterDataHtml;
};
renderProductData();

function clickProduct(id){
  localStorage.setItem("productId",JSON.stringify(id));
  window.location("./page/product.html")
}