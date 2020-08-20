import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

   public login(username: string, password: string) {
     const headers = new HttpHeaders({Authorization: 'Basic' + btoa(username + ':' + password)});
      this.http.get(this.url,{headers,responseType:'text' as 'json'})

    //  .pipe(map((bookingData: Booking[]) => {
    //      return bookingData;
    //    }),
    //  catchError(
    //    (error: Response) => throwError(error)
    //  )
    //  );
   }
}
