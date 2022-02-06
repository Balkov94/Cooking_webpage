// TAKE the current user and use its properties  
window.addEventListener("hashchange", getuser);
let user = JSON.parse(sessionStorage.getItem("user"));
function getuser() {
     if (location.hash) {
          let allUsersArray = userStorage.users;
          getCurrUser(allUsersArray);
          function getCurrUser() {          
               let loginName = document.getElementById("login_name").value.trim();
               for (let i = 0; i < allUsersArray.length; i++) {
                    if (allUsersArray[i].username === loginName) {
                         user = allUsersArray[i];
                         //each time user data updated in local -> HAVE TO UPDATE IN session too!
                         sessionStorage.setItem("user", JSON.stringify(user));
                    }
               }
          }
     }
     //change header user info(picture)
     let photo = document.getElementsByClassName("userPhoto")[0];
     photo.src = user.profPic;
     photo.alt = "profile image";
}


