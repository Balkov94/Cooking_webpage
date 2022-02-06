// function that add effects on mouse events on navigation
function navGetPointer() {
     let hash = location.hash.slice(1);
     let homePage = document.getElementsByTagName("li")[0];
     let fav = document.getElementsByTagName("li")[1];
     let newR = document.getElementsByTagName("li")[2];
     let myProf = document.getElementsByTagName("li")[3];
     switch (hash) {
          case "homePage":
               homePage.style.border = 'none';
               homePage.style.backgroundColor = "#900c3f";
               homePage.firstChild.style.color = "white";
               // clear the other
               fav.style.border = "2px solid black";
               fav.style.backgroundColor = "#fc4";
               fav.firstChild.style.color = "black";
               newR.style.border = "2px solid black";
               newR.style.backgroundColor = "#fc4";
               newR.firstChild.style.color = "black";
               myProf.style.border = "2px solid black";
               myProf.style.backgroundColor = "#fc4";
               myProf.firstChild.style.color = "black";
               break;
          case "fav":
               fav.style.border = 'none';
               fav.style.backgroundColor = "#900c3f";
               fav.firstChild.style.color = "white";
               // clear the other
               homePage.style.border = "2px solid black";
               homePage.style.backgroundColor = "#fc4";
               homePage.firstChild.style.color = "black";
               newR.style.border = "2px solid black";
               newR.style.backgroundColor = "#fc4";
               newR.firstChild.style.color = "black";
               myProf.style.border = "2px solid black";
               myProf.style.backgroundColor = "#fc4";
               myProf.firstChild.style.color = "black";
               break;
          case "newR":
               newR.style.border = 'none';
               newR.style.backgroundColor = "#900c3f";
               newR.firstChild.style.color = "white";
               // clear the other
               homePage.style.border = "2px solid black";
               homePage.style.backgroundColor = "#fc4";
               homePage.firstChild.style.color = "black";
               fav.style.border = "2px solid black";
               fav.style.backgroundColor = "#fc4";
               fav.firstChild.style.color = "black";
               myProf.style.border = "2px solid black";
               myProf.style.backgroundColor = "#fc4";
               myProf.firstChild.style.color = "black";
               break;
          case "myProfile":
               myProf.style.border = 'none';
               myProf.style.backgroundColor = "#900c3f";
               myProf.firstChild.style.color = "white";
               // clear the other
               homePage.style.border = "2px solid black";
               homePage.style.backgroundColor = "#fc4";
               homePage.firstChild.style.color = "black";
               fav.style.border = "2px solid black";
               fav.style.backgroundColor = "#fc4";
               fav.firstChild.style.color = "black";
               newR.style.border = "2px solid black";
               newR.style.backgroundColor = "#fc4";
               newR.firstChild.style.color = "black";
               break;
          default:
               homePage.style.border = "2px solid black";
               homePage.style.backgroundColor = "#fc4";
               homePage.firstChild.style.color = "black";
               fav.style.border = "2px solid black";
               fav.style.backgroundColor = "#fc4";
               fav.firstChild.style.color = "black";
               newR.style.border = "2px solid black";
               newR.style.backgroundColor = "#fc4";
               newR.firstChild.style.color = "black";
               myProf.style.border = "2px solid black";
               myProf.style.backgroundColor = "#fc4";
               myProf.firstChild.style.color = "black";
               break;
     }
     // !! GREAT syntax fix
     // homePage.addEventListener('mouseenter', e => {
     //      homePage.style.backgroundColor = "black";
     // });
     // homePage.addEventListener('mouseleave', function () {
     //      if (hash == "homePage") {
     //           homePage.style.backgroundColor = "#b33";
     //      }
     //      else {
     //           homePage.style.backgroundColor = "#fc4";
     //      }
     // });
     //________________________________________________________________
     function effectOnOver(event) {
          event.target.style.fontSize = "105%";
          event.target.style.fontWeight = "bold";
          // diff efect of over is on curr nav item
          if (event.target.innerText == "  All   recipes"
               && location.hash.slice(1) == "homePage") {
               event.target.style.border = "3px solid white";
          }       
          else if (event.target.innerText == "Favourite recipes"
               && location.hash.slice(1) == "fav") {
               event.target.style.border = "3px solid white";
          }
          else if (event.target.innerText == "Create recipe"
               && location.hash.slice(1) == "newR") {
               event.target.style.border = "3px solid white";
          }
          else if (event.target.innerText == "  My   profile"
               && location.hash.slice(1) == "myProfile") {
               event.target.style.border = "3px solid white";
          }
          else{
               event.target.style.border = "3.2px solid black";
          }
     }

     homePage.addEventListener('mouseenter', effectOnOver);
     homePage.addEventListener('mouseleave', function () {
          if (location.hash.slice(1) == "homePage") {
               homePage.style.backgroundColor = "#900c3f";
               homePage.style.border = "none";
               homePage.style.fontSize = "100%";
               homePage.style.fontWeight = "100";
          }
          else {
               homePage.style.border = "2px solid black";
               homePage.style.fontSize = "100%";
               homePage.style.fontWeight = "100";
          }
     });
     fav.addEventListener('mouseenter', effectOnOver);
     fav.addEventListener('mouseleave', function () {
          if (location.hash.slice(1) == "fav") {
               fav.style.backgroundColor = "#900c3f";
               fav.style.border = "none";
               fav.style.fontSize = "100%";
               fav.style.fontWeight = "100";
          }
          else {
               fav.style.border = "2px solid black";
               fav.style.fontSize = "100%";
               fav.style.fontWeight = "100";
          }
     });
     newR.addEventListener('mouseenter', effectOnOver);
     newR.addEventListener('mouseleave', function () {
          if (location.hash.slice(1) == "newR") {
               newR.style.backgroundColor = "#900c3f";
               newR.style.border = "none";
               newR.style.fontSize = "100%";
               newR.style.fontWeight = "100";
          }
          else {
               newR.style.border = "2px solid black";
               newR.style.fontSize = "100%";
               newR.style.fontWeight = "100";
          }
     });
     myProf.addEventListener('mouseenter', effectOnOver);
     myProf.addEventListener('mouseleave', function () {
          if (location.hash.slice(1) == "myProfile") {
               myProf.style.backgroundColor = "#900c3f";
               myProf.style.border = "none";
               myProf.style.fontSize = "100%";
               myProf.style.fontWeight = "100";
          }
          else {
               myProf.style.border = "2px solid black";
               myProf.style.fontSize = "100%";
               myProf.style.fontWeight = "100";
          }
     });
}

