class User {
     constructor(username, password, favList = [],
          name = "", age = "", address = "", profPic = "view/images/guest.png",
          cookedKVP = {}) {

          this.username = username;
          this.password = password;

          this.favList = favList;
          // name,age,address,profpicture
          this.name = name;
          this.age = age;
          this.address = address;
          this.profPic = profPic;
          this.cookedKVP = cookedKVP;       
     }
   
}

