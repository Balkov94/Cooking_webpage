// change current user -> name / address / age / profile picture
function changeUserInfo(){
     // myProfile page print
     myProfile.innerText = "";
     let divContainer = document.createElement("div");
     divContainer.className = "newRdivContainer";

     let title = document.createElement("h3");
     title.innerText = "My profile:";

     let formProfile = document.createElement("form");
     formProfile.method = "post";
     formProfile.className="profForm";

     let name = document.createElement("input");
     name.type = "text";
     name.placeholder = "name"
     name.value = user.name;
     name.setAttribute("required", "");

     let age = document.createElement("input");
     age.type = "text";
     age.placeholder = "age"
     age.value = user.age;

     let address = document.createElement("input");
     address.type = "text";
     address.placeholder = "address";
     address.value = user.address;

     let profPic = document.createElement("input");
     profPic.type = "text";
     profPic.placeholder = "photo(URL)";
     // profPic.value = document.getElementsByClassName("userPhoto")[0].src; //default
     profPic.value = user.profPic; //default

     let save = document.createElement("button");
     save.innerText = "save";
     save.className = "bStyle";

     divContainer.addEventListener("click", function (event) {
          let targetElement = event.target;
          targetElement.value = "";
     })
     //save button ___________________________________________________________
     save.addEventListener("click", function (event) {
          event.preventDefault();
          user.name = name.value;
          user.age = age.value;
          user.address = address.value;
          user.profPic = profPic.value;
          // user photo picture change
          let photo = document.getElementsByClassName("userPhoto")[0];
          photo.src = profPic.value;
          photo.alt = "profile photo";
          userStorage.updateUserData(user.username, user.password, user)
     })

     formProfile.append(title, name, age, address, profPic, save);
     divContainer.appendChild(formProfile);
     myProfile.appendChild(divContainer);
}