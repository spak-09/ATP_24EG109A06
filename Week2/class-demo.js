/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/

//Library Book Management class
class Books{
    title;
      author; 
      pages ;
      //Default valur as true 
      isAvailable=true;
        //Constructor to initialize
      constructor(title,author,pages)
      {
        this.title=title
        this.author=author
        this.pages=pages
      }

      borrow()
      {
        this.isAvailable=false

      }
      returnBook()
      {
        this.isAvailable=true
      }
      getinfo()
      {
        console.log(`The ${this.title} by ${this.author} (${this.pages} pages)`)
      }


}
//obj creation
let book1=new Books('Harry potter','J K Rowlings',1900)
book1.getinfo()
let book2=new Books('Anooj','J K Rowlings',1900)