//get username and write in header
function getUsername() {
     let username = (JSON.parse(sessionStorage.getItem("user"))).username;
     let nameContainerr = document.getElementById("username");
     nameContainerr.innerText = `Hello,\n${username}`;
}

// logout handler
let logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", function () {
     window.open("main.html", "_self");

});

