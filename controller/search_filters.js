
// search  by name:___________________________________________ 
// bc of IIFE (index) need currUser and other active in filter elements

// get elements
let homePage = document.getElementById("homePage");
let searchDiv = document.getElementById("searchBox");
let input = document.getElementById("search");
input.addEventListener("keyup", function (event) {
     let text = event.target.value.toLowerCase();
     function filterByName(text) {
          let filtredList = managerRec.data.filter(e => e.name.toLowerCase().includes(text))
          return filtredList;
     }

     let resultList = filterByName(text);
     printList(resultList, homePage);
});

// search  by ingredients:________________________________________________________________________
let ing = document.getElementById("ing");
function fillAllIng() {
     // start with empty "" ingredient
     //clear dropdown meny each time
     ing.innerHTML = "";
     let ingList = [""];
     for (let i = 0; i < managerRec.data.length; i++) {
          let currRec = managerRec.data[i];
          let currRecIngredients = currRec.ingrediatns.split(",").map(e => e = e.trim());
          // currRecIngredients.forEach(element => ingList.push(element));
          currRecIngredients.forEach(element => {
               if(ingList.some(someIng=>someIng===element)===false){
                    ingList.push(element);
               }
          });
     }
     ingList.forEach(element => {
          let option = document.createElement("option");
          option.innerText = element;
          ing.append(option);
     });

}
ing.addEventListener("change", function (event) {
     let choosenIngredient = event.target.value;
     let filtred = [];
     for (let i = 0; i < managerRec.data.length; i++) {
          let currRec = managerRec.data[i];    
          if (currRec.ingrediatns.includes(choosenIngredient)) {
               filtred.push(currRec);
          }
     }
     printList(filtred, homePage);
})

 // print data on page -> copy here bcindex is IIFE
 function printList(list, container) {
     container.innerText = "";
     
     for (let i = 0; i < list.length; i++) {
          let rec = list[i];     // curr object recepe
          let div = document.createElement("div");
          div.className = "recBox";
          let img = document.createElement("img");
          img.alt = "food";
          img.src = rec.imgUrl;
          img.href = rec.link;
          img.addEventListener("click", function () {
               window.open(img.href, '_blank');
          })

          let name = document.createElement("h3");
          name.innerText = rec.name;

          let ingredients = document.createElement("p");
          ingredients.innerText = rec.ingrediatns;

          // buttons and events _______________________________________
          let buttonsContainer = document.createElement("div");
          buttonsContainer.className = "bContainer"
          let bFav = document.createElement("button");
          bFav.className = "bStyle bFavStyle";
          //check recepe is in user favList
          if (user.favList.some(element => element.name === rec.name)) {
               bFav.innerText = "Премахни от любими";
               bFav.addEventListener("click", function () {
                    // homepage and favList - > use complete diff OBJ (copies)
                    // !CARE -> use rec.name like key for both pages
                    let index = null;
                    for (let i = 0; i < user.favList.length; i++) {
                         if (user.favList[i].name === rec.name) {
                              index = i;
                              user.favList.splice(index, 1);
                              break;
                         }
                    }
                    userStorage.updateUserData(user.username, user.password, user);
                    loadScreen();
               })
          }
          else {
               bFav.innerText = "Добави в любими";
               bFav.addEventListener("click", function () {
                    user.favList.push(rec);
                    //add unpdated currUser to Localstorage 
                    userStorage.updateUserData(user.username, user.password, user);
                    loadScreen();
               })
          }

          // "сготви" - button_______________________________________
          let bCook = document.createElement("button");
          bCook.innerText = "Сготви";
          // add 2 classes on 1 element (bstyle) + (bcookStyle)
          bCook.className = "bStyle bCookStyle";
          bCook.addEventListener("click", function () {
               // using Obj and hasOwnPropperty instead of Map()
               if (user.cookedKVP.hasOwnProperty(rec.name)) {
                    user.cookedKVP[`${rec.name}`] = user.cookedKVP[`${rec.name}`] + 1;
               }
               else {
                    user.cookedKVP[`${rec.name}`] = 1;
               }
               window.alert(`Браво вие сготвихте - "${rec.name}".`)
               userStorage.updateUserData(user.username, user.password, user);
          })
          buttonsContainer.append(bFav, bCook)
          div.append(img, name, ingredients, buttonsContainer)
          container.append(div);

          // ypdate session storage userData
          sessionStorage.setItem("user", JSON.stringify(user));
     }
}





