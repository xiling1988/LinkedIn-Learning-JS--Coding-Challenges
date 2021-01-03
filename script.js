"use strict";

////////////////// CHALLENGE 1 - AVAILABLE BOOKS ///////////////////

class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  get getAvailability() {
    if (this.numCopies === 0) {
      return "Out of Stock";
    } else if (this.numCopies < 10) {
      return "Low Stock";
    } else {
      return "In Stock";
    }
  }

  set sell(numSold = 1) {
    this.numCopies -= numSold;
    console.log(this.numCopies);
  }

  set restock(numCopies = 5) {
    this.numCopies += numCopies;
    console.log(this.numCopies);
  }
}

const sur = new Book("La Reina del Sur", "Arturo Perez Reverte", 100000254, 14);

console.log(sur);

sur.sell = 3;
sur.getAvailability;
sur.restock = 4;
sur.sell = 15;

console.log(sur);
