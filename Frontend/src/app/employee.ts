import { Injectable, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
    
    private httpClient: HttpClient;
    constructor(httpClientParameter: HttpClient) {
      this.httpClient = httpClientParameter;
    }
    // constructor(private httpClient:HttpClient) {}
    api = "http://localhost:9090";
    public saveEmployee(employee: Employee): Observable<Employee> {
      return  this.httpClient.post<Employee>(`${this.api}/save/employee`,employee)
    }
}

