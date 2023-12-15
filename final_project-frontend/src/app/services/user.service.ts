import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseURL = "http://localhost:9090/user/"

  userRegister(formData: any): Observable<any> {
    JSON.stringify(formData)
    return this.http.post(this.baseURL + "register", formData);
  }

  userLogin(formData: any): Observable<any> {
    JSON.stringify(formData)
    console.log("form", formData)
    const headers = { "content-type": "application/json" };
    return this.http.post(this.baseURL + "login", JSON.stringify(formData), { 'headers': headers });
  }

  getUserName(email: any): Observable<any> {
    return this.http.get(this.baseURL + "find/" + email)
  }

  sendEmail(email: any): Observable<any> {
    let query = { "email": email }
    return this.http.post("http://localhost:9090/email", email)
  }
}
