import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = '/api';

  constructor(private http: HttpClient) {}

  getCats(): Observable<any> {
    return this.http.get(`${this.base}/cats`);
  }

  createCat(cat: any): Observable<any> {
    return this.http.post(`${this.base}/cats`, cat);
  }
}
