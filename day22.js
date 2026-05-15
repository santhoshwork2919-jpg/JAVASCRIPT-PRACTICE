const person = {
  name: "Santhosh",

  sayHello: function() {
    console.log(this.name);
  }
};

person.sayHello();