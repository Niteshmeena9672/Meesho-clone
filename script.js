let inputSearchE1 = document.querySelector(".inputSearch");
let recentInput = [];
let inputFormE1 = document.querySelector("#inputForm");
const listofRecentE1 = document.querySelector(".listofRecent");

inputFormE1.addEventListener("submit",(e)=>{
    e.preventDefault();
    let listofRecentHTMLE1 = "";

    recentInput.push(inputSearchE1.value);
    console.log(recentInput);
    if(recentInput.length > 0){
        for(let i = 0; i< recentInput.length ; i++){
            listofRecentHTMLE1 += `
            <div class="recentItem">

            <div class="recentIcon">
              <img src="./img/recent.png" alt="">
            </div>
            <p>${recentInput[i]}</p>
          </div>
            `
        }
        listofRecentE1.innerHTML = listofRecentHTMLE1;
    }
});