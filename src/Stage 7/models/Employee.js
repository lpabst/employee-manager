export default class Employee {
  constructor(id, name, phone, title){
    this.id = id;
    this.name = name;
    this.title = title;
    this.phone = phone;
  }
  
  updateName(name){
    this.name = name;
  }

  updatePhone(newPhone){
    this.phone = newPhone;
  }

   updateTitle(newtitle){
     this.title = newtitle
   }
}