import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book-details',
  templateUrl: './update-book-details.component.html',
  styleUrls: ['./update-book-details.component.css']
})
export class UpdateBookDetailsComponent implements OnInit {
  bookId: number = 0;
  book: Book = new Book();
  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['bookId'];

    this.bookService.getBookById(this.bookId).subscribe(data => {
      this.book = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.bookService.updateBook(this.bookId, this.book).subscribe( data =>{
      this.goToBookList();
    }
    , error => console.log(error));
  }

  goToBookList(){
    this.router.navigate(['/books']);
  }

  confirmUpdate(){
      var status = confirm("your record updated successfully!");
      if(status==true){
        this.bookService.updateBook(this.bookId, this.book).subscribe( data =>{
          this.goToBookList();
        }
        , error => console.log(error));
      }
      else{
        this.router.navigate(['/books']);
      }
  }
}

