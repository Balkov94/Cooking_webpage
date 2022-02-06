(function () {
     // divs
     let loginDiv = document.getElementById("login_div");
     let regDiv = document.getElementById("register_div");
     //onlaod visualization
     regDiv.style.display = "none";
     let loginErrorMsg = document.getElementById("errorMsg");
     loginErrorMsg.style.display = "none";
     let regErrorMsg = document.getElementById("regMsg");
     regErrorMsg.style.display = "none";

     // reg functionalities_______________________________________
     let regName = document.getElementById("regName");
     let regPass1 = document.getElementById("regpass1");
     let regPass2 = document.getElementById("regpass2");
     let regButton = document.getElementById("register_button");
     regButton.addEventListener("click", function (event) {
          event.preventDefault();

          let username = regName.value.trim();
          let password1 = regPass1.value.trim();
          let password2 = regPass2.value.trim();

          if (userStorage.existUser(username) === false
               && username.length > 0
               && password1.length > 0
               && password1 === password2) {
               userStorage.addUser(username, password1);
               alert("Registration is successful!\n ***************************")
               regDiv.style.display = "none";
               loginDiv.style.display = "flex";

          }
          else if (userStorage.existUser(username)) {
               alert("Username is already taken.")
          }
          else {
               alert("All fields are required.")
          }
     })
     // login functionalities__________________________________________________
     let logName = document.getElementById("login_name");
     let logPass = document.getElementById("login_pass");
     let logButton = document.getElementById("login_b_login");
     logButton.addEventListener("click", function (event) {
          event.preventDefault();

          let username = logName.value.trim();
          let password = logPass.value.trim();

          if (userStorage.validateUser(username, password)) {
               let header = document.getElementsByTagName("header")[0];
               header.style.display = "flex";
               window.open("main.html#homePage", "_self");
          }
          else {
               if (username.length === 0) {
                    loginErrorMsg.innerText = "Enter username."
                    loginErrorMsg.style.display = "block";
               }
               else if (password.length === 0) {
                    loginErrorMsg.innerText = "Enter password.";
                    loginErrorMsg.style.display = "block";
               }
               else {
                    loginErrorMsg.innerText = "Wrong username or password.";
                    loginErrorMsg.style.display = "block";
               }
          }
     })

     // go to register <-> go to login SWITCH 
     let goToReg = document.getElementById("go_to_register");
     goToReg.addEventListener("click", function (event) {
          event.preventDefault();
          loginDiv.style.display = "none";
          regDiv.style.display = "flex";
          //clear all fields text and errorMsgs
          regErrorMsg.style.display = "none";
          regName.value = "";
          regPass1.value = "";
          regPass2.value = "";
     })
     let goToLog = document.getElementById("go_to_login");
     goToLog.addEventListener("click", function (event) {
          event.preventDefault();
          loginDiv.style.display = "flex";
          regDiv.style.display = "none";
          loginErrorMsg.style.display = "none";
          logName.value = "";
          logPass.value = "";
     })

})()