import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book-records',
  templateUrl: './create-book-records.component.html',
  styleUrls: ['./create-book-records.component.css']
})
export class CreateBookRecordsComponent implements OnInit {
  book: Book = new Book();
  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveBook(){
    this.bookService.createBookRecords(this.book).subscribe( data =>{
      console.log(data);
      this.goToBookList();
    },
    error => console.log(error));
  }
  goToBookList(){
    this.router.navigate(['/books']);
  }
  onSubmit(){
    console.log(this.book);
    this.saveBook();
  }
  confirmSubmit(){
    var status = confirm("Do you want to add new Book?");
    if(status==true){
      console.log(this.book);
    }
    else{
      this.router.navigate(['books']);
    }
}
}


