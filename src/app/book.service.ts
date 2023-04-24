import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})

/*passing the base url from front end to backend.
In backend there is a cross origin which search for the respective mappings and 
fetches the data from backend and returns to frontend*/
export class BookService {

  private baseURL = "http://localhost:8080/RestAPIproject/books";

  constructor(private httpClient: HttpClient) { }

  getBooksList(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }

  createBookRecords(book: Book): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, book);
  }

  getBookById(bookId: number): Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseURL}/${bookId}`);
  }

  updateBook(bookId: number, book: Book): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${bookId}`, book);
  }

  //localhost:4200/delete/5
  deleteBook(bookId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${bookId}`);
  }
  deleteAll(): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}`);
  }
  findByName(bookName:any) : Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}?bookName=${bookName}`);
  }
  findByTechnicalBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/findbyTechnical`);
  }

  findByFantacyBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/findbyFantacy`);
  }
  findByInspirationalBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/findbyInspiration`);
  }
  findByComdeyBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/findbyComdey`);
  }
  findByMysteryBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/findbyMystery`);
  }

}