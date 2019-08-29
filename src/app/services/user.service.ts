import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

import { AppError } from '../app-error';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url, { observe: 'response' })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      // client side / network error has occurred
      console.log('Client side error ', error.error.message)
    }
    else {
      // backend error
      console.log('Server returned error ', error.status, error.error);
    }
    return throwError(new AppError(error.error))
  }
}
