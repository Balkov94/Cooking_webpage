let userStorage = (function () {
     class UserStorage {
          constructor() {
               if (localStorage.getItem("users") === null) {
                    let users = [];

                    localStorage.setItem("users", JSON.stringify(users));
               }
               else {
                    this.users = JSON.parse(localStorage.getItem("users"));
               }

               this.users = JSON.parse(localStorage.getItem("users"));
          }

          // userStorage functions (add/check if exist user)
          addUser(username, password) {
               if (this.existUser(username) === false) {
                    this.users.push(new User(username, password));
                    localStorage.setItem("users", JSON.stringify(this.users));
               }
          }
          existUser(username) {
               if (this.users)
                    return this.users.some(e => e.username === username);

          }
          validateUser(username, password) {
               return this.users.some(e => e.username == username && e.password == password)
          }

          updateUserData(username, password, currUserObj) {
               //working adding fav/cookedKVP to curr user fav list
               let updatedUserObj = currUserObj;
               if (this.validateUser(username, password)) {
                    this.users = JSON.parse(localStorage.getItem("users"));
                    let currUserIndex = null;
                    for (let i = 0; i < this.users.length; i++) {
                         if (this.users[i].username === username && this.users[i].password === password) {
                              currUserIndex = i;
                              break;
                         }
                    }
                    this.users.splice(currUserIndex, 1);
                    this.users.push(updatedUserObj);
                    localStorage.setItem("users", JSON.stringify(this.users));

               }
          }

     }
     return new UserStorage;
})()



