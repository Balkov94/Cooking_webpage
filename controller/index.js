
(function () {
     let homePage = document.getElementById("homePage");
     let fav = document.getElementById("fav");
     let newR = document.getElementById("newR");
     let myProfile = document.getElementById("myProfile");
     let error = document.getElementById("error");

     //if no localStorage data -> fill from dataArray file staring rec date
     fillLocalstorageRec();
     function fillLocalstorageRec() {
          // fill starting data if localstorage is empty (first login)
          if (managerRec.data.length === 0) {
               for (let i = 0; i < dataArray.length; i++) {
                    let obj = dataArray[i];
                    let rec = new Rec(
                         obj.title,
                         obj.ingredients,
                         obj.href,
                         obj.thumbnail
                    );
                    managerRec.addData(rec);
               }
          }
     }

     window.addEventListener("load", loadScreen);
     window.addEventListener("hashchange", loadScreen);

     function removeSiteInfoDiv() {
          let siteInfo = document.getElementById("info");
          let wrapper = document.getElementById("wrapper");
          if (siteInfo != null) {
               wrapper.removeChild(siteInfo);
          }

     }


     function loadScreen() {
          let hash = location.hash.slice(1);
          switch (hash) {
               case "homePage":
                    // !!!WOOOOOOW !!!
                    // if .style is not in blue/ GET thi item without DOM!!!!
                    // just->id.style ... /=== let name=document.getElementById("Id").style...
                    loginPage.style.display = "none";
                    homePage.style.display = "flex";
                    fav.style.display = "none";
                    newR.style.display = "none";
                    myProfile.style.display = "none";
                    error.style.display = "none"
                    searchDiv.style.display = "flex";
                    printList(managerRec.data, homePage);
                    fillAllIng();
                    removeSiteInfoDiv()
                    navGetPointer();
                    getUsername();
                    break;
               case "fav":
                    loginPage.style.display = "none";
                    homePage.style.display = "none";
                    fav.style.display = "flex";
                    newR.style.display = "none";
                    myProfile.style.display = "none";
                    searchDiv.style.display = "none";
                    error.style.display = "none"
                    printList(user.favList, fav);
                    removeSiteInfoDiv()
                    navGetPointer();
                    break;
               case "newR":
                    loginPage.style.display = "none";
                    homePage.style.display = "none";
                    fav.style.display = "none";
                    newR.style.display = "flex";
                    myProfile.style.display = "none";
                    searchDiv.style.display = "none";
                    error.style.display = "none"
                    removeSiteInfoDiv();
                    newRecepe();
                    navGetPointer();
                    break;
               case "myProfile":
                    loginPage.style.display = "none";
                    homePage.style.display = "none";
                    fav.style.display = "none";
                    newR.style.display = "none";
                    myProfile.style.display = "flex";
                    searchDiv.style.display = "none";
                    error.style.display = "none"
                    changeUserInfo();
                    printCookedList();
                    removeSiteInfoDiv()
                    navGetPointer();
                    break;
               case "":
                    let header = document.getElementsByTagName("header")[0];
                    header.style.display = "none";
                    homePage.style.display = "none";
                    fav.style.display = "none";
                    newR.style.display = "none";
                    myProfile.style.display = "none";
                    searchDiv.style.display = "none";
                    error.style.display = "none";               
                    fillAllIng();
                    break;
               default:
                    loginPage.style.display = "none";
                    error.style.display = "flex";
                    homePage.style.display = "none";
                    fav.style.display = "none";
                    newR.style.display = "none";
                    searchDiv.style.display = "none";
                    myProfile.style.display = "none";
                    removeSiteInfoDiv()
                    navGetPointer();
                    break;
          }
     }

     // print data on page -> homepage,favList ...
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
                    bFav.innerText = "remove from favourites";
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
                    bFav.innerText = "add to favourites";
                    bFav.addEventListener("click", function () {
                         user.favList.push(rec);
                         //add unpdated currUser to Localstorage 
                         userStorage.updateUserData(user.username, user.password, user);
                         loadScreen();
                    })
               }

               // "сготви" - button_______________________________________
               let bCook = document.createElement("button");
               bCook.innerText = "cook";
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
                    window.alert(`Well done! You have cooked "${rec.name}".`)
                    userStorage.updateUserData(user.username, user.password, user);
               })
               buttonsContainer.append(bFav, bCook)
               div.append(img, name, ingredients, buttonsContainer)
               container.append(div);

               // ypdate session storage userData
               sessionStorage.setItem("user", JSON.stringify(user));
          }
     }
})()


