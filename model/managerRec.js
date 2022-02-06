let managerRec = (function () {
     class ManagerRec {
          constructor() {            
               if (localStorage.getItem("managerRec") === null) {
                    this.data = [];
                    localStorage.setItem("managerRec", JSON.stringify(this.data));

               }
               else {
                    this.data = JSON.parse(localStorage.getItem("managerRec"));
               }
               this.data = JSON.parse(localStorage.getItem("managerRec"));
          }
          
          addData(rec) {
               // add recipe to data
               if (this.existRec(rec)===false) {
                    this.data.push(rec);
                    localStorage.setItem("managerRec", JSON.stringify(this.data));
               }
          }
          existRec(rec){
               return this.data.some(e=>e.name===rec.name);
          }

          // same like addData (but with unshift)
          addNewRecepe(newRec) {
               if (this.data.indexOf(newRec) === -1) {
                    this.data.unshift(newRec);
                    localStorage.setItem("managerRec",JSON.stringify(this.data)); //saved in local
               }
          }      
     }

     return new ManagerRec;
})()
