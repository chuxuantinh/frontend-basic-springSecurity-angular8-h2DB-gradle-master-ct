import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'http://localhost:8080/login';
  url1 = 'http://localhost:8080/register';
  
  constructor(private http: HttpClient) { }

  public loginUser(user: User): Observable<any> {
    return this.http.post<any>(this.url, user);
  }

  public registerUser(user: User): Observable<any> {
    return this.http.post<any>(this.url1, user);
  }
}
