import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    const url = `${this.baseUrl}/books`;
    return this.http.get<any>(url);
  }
}