import { Component, OnInit } from '@angular/core';
import { Book } from '../book'
import { BookService } from '../book.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

//implementing OnInit interface 
export class BookListComponent implements OnInit{
  books: Book[] = [];
  bookName: String="";


  constructor(private bookService: BookService,
    private router: Router) { }

    searchByName(){
      this.bookService.findByName(this.bookName)
      .subscribe(
        data => {
          this.books = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    }

    /* implementing ng onit method for view by id and it moves  to get bookdetails by id 
ng onitmethod pass default constructor */
  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks(){
    this.bookService.getBooksList().subscribe(data => {
      this.books = data;
    });
  }
  // to get book details by id
  bookDetails(bookId: number){
    this.router.navigate(['book-details', bookId]);
  }
  /*bookDetailsById(journalId: number){
    this.router.navigate(['list-bydepartment-id', journalId]);
  }*/
  //Updating book details by id
  updateBook(bookId: number){
    this.router.navigate(['update-book-details', bookId]);
  }
  //Deleting details by id
  deleteBook(bookId: number){
    this.bookService.deleteBook(bookId).subscribe( data => {
      console.log(data);
      this.getBooks();
    })
  }
  //Confirmation for deleting books,if yes then delete book method is called to delete the records 
  confirmDelete(book:Book){
    var status = confirm("You want to delete this record?");
    if(status==true){
        this.deleteBook(book.bookId);
    }
    else{
        this.getBooks();
    }
}
//removing all books and clearing records 
removeAllBooks(): void{
  this.bookService.deleteAll().subscribe(
    data =>{
      console.log(data);
      this.getBooks();
    },
     error =>{
      console.log(error);
    });
  }
  //confirmation of the remove all books
  confirmRemoveAll(){
    var status = confirm("Are you sure to delete all records? All datas will be deleted");
    if(status==true){
        this.removeAllBooks();
    }
    else{
        this.getBooks();
    }
}

//fetching book by journals
fetchTechnicalBooks(){
  this.bookService.findByTechnicalBooks().subscribe(
    data => {
      this.books = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

fetchFanstacyBooks(){
  this.bookService.findByFantacyBooks().subscribe(
    data => {
      this.books = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

fetchInspirationalBooks(){
  this.bookService.findByInspirationalBooks().subscribe(
    data => {
      this.books = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

fetchComdeyBooks(){
  this.bookService.findByComdeyBooks().subscribe(
    data => {
      this.books = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

fetchMysteryBooks(){
  this.bookService.findByMysteryBooks().subscribe(
    data => {
      this.books = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

}
}

