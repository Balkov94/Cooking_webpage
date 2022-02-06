// print cookedList Function
   function printCookedList() {
     let divContainer = document.createElement("div");
     divContainer.className = "cookedDivContainer";
     let title = document.createElement("h3");
     let numberCookedRecepes = Object.keys(user.cookedKVP).length;
     title.innerText = `All cooked recipes: ${numberCookedRecepes}`

     let table = document.createElement("table");
     let row = document.createElement("tr");
     let th1 = document.createElement("th");
     th1.innerText = "Recipe name:";
     let th2 = document.createElement("th");
     th2.innerText = "Dishes count:"

     row.append(th1, th2);
     table.append(row);

     // print all cooked recepe
     let entriesKVP = Object.entries(user.cookedKVP);
     for (let [key, value] of entriesKVP) {
          let tr = document.createElement("tr");
          let tdName = document.createElement("td");
          let tdNumber = document.createElement("td");

          tdName.innerText = key;
          tdNumber.innerText = value;

          tr.append(tdName, tdNumber);
          table.append(tr);
     }
     divContainer.append(title, table);
     myProfile.appendChild(divContainer);
}