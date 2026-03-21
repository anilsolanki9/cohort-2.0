class Book {
  constructor(name, price, pages, author, year) {
    this.name = name;
    this.price = price;
    this.pages = pages;
    this.author = author;
    this.year = year;
  }

  getDetails() {
    return `Name: ${this.name}, Price: ${this.price}, Pages: ${this.pages}, Author: ${this.author}, Year: ${this.year}`;
  }
}

// Used to create a shared property among all instances of a class
Book.prototype.material = " Paper";

const book1 = new Book("The Great Gatsby", 10, 180, "F. Scott Fitzgerald", 1925);
console.log(book1.getDetails());
