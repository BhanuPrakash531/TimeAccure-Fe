import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../components/users/users/user';
import { EmployeeType } from '../components/users/employee-type/EmployeeType';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserService {

  private usersUrl = '/employee';
  private employeeTypeUrl = 'employeeType';

  constructor(private http: HttpClient) { }

  /** GET users from the server */
  getUsers(): Observable<User[]> {
     return this.http.get<User[]>(this.usersUrl+"s")
       .pipe(
         tap(users => this.log(`fetched users`)),
         catchError(this.handleError('getUsers', []))
       );
    }

  /** GET employee types from the server */
  getEmployeeTypes(): Observable<EmployeeType[]> {
    return this.http.get<EmployeeType[]>(this.employeeTypeUrl+"s")
      .pipe(
        tap(employeeTypes => this.log(`fetched employeeTypes`)),
        catchError(this.handleError('getEmployeeTypes', []))
      );
   }

   
  /** POST employee types from the server */
  addEmployeeType(employeeType: EmployeeType): Observable<EmployeeType> {
    return this.http.post<EmployeeType>(this.employeeTypeUrl, employeeType,httpOptions)
      .pipe(
        tap((employeeType:EmployeeType) => this.log(`added employeeType w/ id=${employeeType.id}`)),
        catchError(this.handleError<EmployeeType>('addEmployeeType'))
      );
   }

  /** GET employeeType by id. Will 404 if id not found */
  getEmployeeType(id: number): Observable<EmployeeType> {
    const url = `${this.employeeTypeUrl}/${id}`;
    return this.http.get<EmployeeType>(url).pipe(
      tap(_ => this.log(`fetched employeeType id=${id}`)),
      catchError(this.handleError<EmployeeType>(`getEmployeeType id=${id}`))
    );
  }
  /** PUT: update the employeeType on the server */
  updateEmployeeType(employeeType: EmployeeType): Observable<EmployeeType> {
    return this.http.put(this.employeeTypeUrl, employeeType, httpOptions).pipe(
      tap(_ => this.log(`updated employeeType id=${employeeType.id}`)),
      catchError(this.handleError<any>('updateEmployeeType'))
    );
  }
  /** PUT: update the employeeType on the server */
  deleteEmployeeType(employeeType: EmployeeType | number): Observable<EmployeeType> {
    // return this.http.put(this.employeeTypeUrl, employeeType, httpOptions).pipe(
    //   tap(_ => this.log(`updated employeeType id=${employeeType.id}`)),
    //   catchError(this.handleError<any>('updateEmployeeType'))
    // );
    const id = typeof employeeType === 'number' ? employeeType : employeeType.id;
    const url = `${this.employeeTypeUrl}/${id}`;

    return this.http.delete<EmployeeType>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted EmployeeType id=${id}`)),
      catchError(this.handleError<EmployeeType>('deleteEmployeetYPE'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a UserService message with the MessageService */
  private log(message: string) {
    //this.messageService.add('EmployeeService: ' + message);
    console.log('UserService: ' + message);
  }

}
