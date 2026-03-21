// let user = {
//   name: "Anil",
//   email: "anil@gmail.com",
//   login: function () {
//     console.log("Logged In");
//   },
// };

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   login() {
//     console.log("Logged In");
//   }
// }

// let user1 = new User("Anil", "anil@solanki.com");
// console.log(user1)

// let product = {
//   name: "ParleG",
//   price: 1200,
//   discountedPrice: function (dis) {
//     if (dis >= 0 && dis <= 100) {
//       return this.price - (this.price * dis) / 100;
//     }
//   },
// };

// console.log(product.discountedPrice(10));

// class Car {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }

//   drive() {
//     console.log(`${this.brand} - ${this.speed}`);
//   }
// }

// let c1 = new Car("Tata", 120);
// c1.drive();
// let c2 = new Car("suzuki", 200);

// class Student {
//   constructor(name, rollNumber) {
//     this.name = name;
//     this.rollNumber = rollNumber;
//   }

//   introduce() {
//     console.log(this.name, " - ", this.rollNumber);
//   }
// }

// let st1 = new Student("Anil", 123);
// st1.introduce();

// let obj = {
//   name: "Anil",
//   age: 21,
//   fnc: function () {
//     console.log(this.name);
//   },
//   fnc2: () => {
//     console.log(this.age);
//   },
// };

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.login = function () {
//     console.log("Logged In from constructor");
//   };
// }

// User.prototype.login2 = function () {
//   console.log("Logged In from Prototype");
// };

// let user1 = new User("Anil", 21);
// let user2 = new User("Sunil", 22);
// console.log(user1, user2);

// console.log(user1.login === user2.login) ; // false
// console.log(user1.login2 === user2.login2) ; // true

// let printName = function (a, b, c) {
//   console.log(this.name, a, b, c);
// };

// let obj = {
//   name: "Anil",
// };

// printName(1, 2, 3); // ""
// printName.call(obj, 1, 2, 3); // Anil 1 2 3
// printName.apply(obj, [1, 2, 3]); // Anil 1 2 3

// let newPrintName = printName.bind(obj, 1, 2, 3);
// newPrintName(); // Anil 1 2 3

// let obj = {
//   name: "Anil",
//   setName: function (val) {
//     this.name = val;
//   },
// };

// let obj2 = {
//   getName: function () {
//     console.log(this.name);
//   },
// };

// obj2.getName.call(obj);

// ==========================================

// let laptop = {
//   brand: "Lenovo",
//   price: 120000,
//   start: function () {
//     console.log("Laptop started");
//   },
//   incPrice: function (inc) {
//     this.price = (this.price * (100 + inc)) / 100;
//     console.log(this.price);
//   },
// };

// laptop.start();
// laptop.incPrice(10);

// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }

//   showDetails() {
//     console.log(this.name, this.salary);
//   }
// }

// let em1 = new Employee("Suresh", 25000);
// let em2 = new Employee("Mahesh", 35000);
// let em3 = new Employee("Manish", 55000);

// em1.name = "Puresh";

// class BankAccount {
//   constructor(accountHolderName, balance) {
//     this.accountHolderName = accountHolderName;
//     this.balance = balance;
//   }

//   deposite(amount) {
//     if (amount > 0) {
//       this.balance += amount;
//     }
//   }
// }

// let acc1 = new BankAccount("Anil", 100000);
// let acc2 = new BankAccount("Manish", 700);

// acc1.deposite(146700);
// let profile = {
//   username: "anilsolanki9",
//   printName: function () {
//     console.log(this.username);
//   },
// };

// profile.printName(); // anilsolanki9

// let ny = profile.printName;
// ny(); // undefined

// ny.call(profile);// anilsolanki9

// function Vehicle(type, wheels) {
//   this.type = type;
//   this.wheels = wheels;
//   this.describe = function () {
//     console.log(this.type, this.wheels);
//   };
// }

// Vehicle.prototype.desc = function () {
//   console.log(this.type, this.wheels);
// };

// let vh1 = new Vehicle("Bike", 2);

// function showBrand() {
//   console.log(this.brand);
// }

// let obj1 = {
//   brand: "Toyota",
// };

// let obj2 = {
//   brand: "Tata",
// };

// showBrand.call(obj1);
// showBrand.call(obj2);

// function introduce(city, role) {
//   console.log(this.name, city, role);
// }

// let obj = {
//   name: "Anil",
// };

// introduce.apply(obj, ["Jodhpur", "SDE"]);

function greet() {
  console.log("Hello", this.name);
}

let obj = {
  name: "Anil",
};

let greet2 = greet.bind(obj);
greet2(); // Hello Anil

