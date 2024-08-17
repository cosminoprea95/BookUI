import { Component, OnInit } from '@angular/core';
import { BookService } from './table-list.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private booksService: BookService) {}

  books: any;

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(
      (data) => {
        this.books = data;
        console.log('User Data:', this.books);
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

//   books = [
//     {
//       "name":"test1",
//       "author":"test1",
//       "publishingHouse":"test1",
//       "price":"100.0"
//     },
//     {
//       "name":"test1",
//       "author":"test1",
//       "publishingHouse":"test1",
//       "price":"100.0"
//     },
//     {
//       "name":"test1",
//       "author":"test1",
//       "publishingHouse":"test1",
//       "price":"100.0"
//     },
//     {
//       "name":"test1",
//       "author":"test1",
//       "publishingHouse":"test1",
//       "price":"100.0"
//     }
// ]
  

}
