import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 public constructor (private http: HttpClient) {}

 public getUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/users');
  }
}
