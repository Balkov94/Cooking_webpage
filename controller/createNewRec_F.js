// create new recepe function______________________________________________________
function newRecepe() {
     newR.innerText = "";
     let formContainer = document.createElement("div");
     formContainer.className = "newRdivContainer";
     let title = document.createElement("h3");
     title.innerText = "Your recipe:";
     let recepeForm = document.createElement("form");
     recepeForm.className="newRForm";

     recepeForm.setAttribute('method', "post");
     recepeForm.setAttribute('action', "submit.php");

     let nameR = document.createElement("input");
     nameR.type = "text";
     nameR.placeholder = "recipe name:";
     newR.addEventListener("dblclick", function (e) {
          e.target.value = "";
     })

     let newIngredients = document.createElement("input");
     newIngredients.type = "text-area";
     newIngredients.placeholder = "recipe ingredients:";

     let newRLink = document.createElement("input");
     newRLink.type = "text";
     newRLink.placeholder = "recipe link";

     let newRImg = document.createElement("input");
     newRImg.type = "text";
     newRImg.placeholder = "recipe image (url)";

     let bCreate = document.createElement("button");
     bCreate.innerText = "save recipe";
     bCreate.className = "bStyle";
     bCreate.addEventListener("click", function (event) {
          // prevent. -> za da ne prezarejda str (405 error)
          event.preventDefault();
          if (stringValidater(nameR.value) == false ||
               stringValidater(newIngredients.value) == false ||
               stringValidater(newRLink.value) == false ||
               stringValidater(newRImg.value) == false) {
               alert("All fields are required (3 chars min).")
          }
          else {
               let newRec = new Rec(
                    nameR.value,
                    newIngredients.value,
                    newRLink.value,
                    newRImg.value
               );
               // empty all fields again
               nameR.value = "";
               newIngredients.value = "";
               newRLink.value = "";
               newRImg.value = "";

               managerRec.addNewRecepe(newRec);
               alert("New recipe was greated and added to \"All recipies\".")
               printList(managerRec.data, homePage);
          }

     })

     recepeForm.append(title, nameR, newIngredients, newRLink, newRImg, bCreate);
     formContainer.append(recepeForm);
     newR.appendChild(formContainer);
}

function stringValidater(text) {
     if (typeof text != "string" ||
          text.trim().length < 3) {
          return false;
     }
     else {
          return true;
     }
}