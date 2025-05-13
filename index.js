class human {
  #name;
  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  setName(newName){
    this.#name= newName
  }
  getName(){
    console.log(this.#name);
  }

}

let ali = new human("ali", 50);
console.log(ali);
ali.setName("khaled")
console.log(ali);
ali.getName()
console.log("Show Product Details");
console.log("login")