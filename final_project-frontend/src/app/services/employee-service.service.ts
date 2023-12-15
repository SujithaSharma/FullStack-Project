import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  baseURL = "http://localhost:9090"

  addEmployee(emp: any): Observable<any> {
    return this.http.post(this.baseURL + "/employee", emp);
  }

  getAllEmployees(): Observable<any> {
    return this.http.get(this.baseURL + "/employees");
  }

  getEmployee(id: any): Observable<any> {
    return this.http.get(this.baseURL + "/employee/" + id);
  }

  deleteEmployee(id: any): Observable<any> {
    return this.http.delete(this.baseURL + "/employee/delete/" + id);
  }

  updateEmployee(id: any, emp: any): Observable<any> {
    return this.http.put(this.baseURL + "/employee/update/" + id, emp);
  }
}
