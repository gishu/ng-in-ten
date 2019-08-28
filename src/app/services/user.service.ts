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
        catchError(this.handleError('getusers'))
      );
  }

  // deleteUser(id) {
  //   return this.http.delete(this.url + '/' + id, { observe: 'response' })
  //     .pipe(
  //       catchError(this.handleError('deleteUser'))
  //     )
  // }

  private handleError(operation: string) {
    return err => {
      console.error(err);
      if (err instanceof HttpErrorResponse) {
        console.log(err.status);
      }
      return throwError(new AppError(err))
    }
  }
}
