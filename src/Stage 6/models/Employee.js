export default class Employee {
  // constructor
  constructor(id, name, title, phone){
    this.id = id;
    this.name = name;
    this.title = title;
    this.phone = phone;
  }
  updateName(name){
    this.name = name;
  }

  updatePhone(phone){
    this.phone = phone;
  }

  updateTitle(title){
    this.title = title;
  }
}