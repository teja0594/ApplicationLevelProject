import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl="assets/json/users.json"
  isLoggedIn:any=false
  exportlog = new BehaviorSubject(this.isLoggedIn)
  log = this.exportlog.asObservable()
  currentUser:any={}
  exportUser = new BehaviorSubject(this.currentUser)
  user = this.exportUser.asObservable()
  constructor(private http:HttpClient) { }

  getUsers():Observable<any>
  {
    return this.http.get(this.baseUrl)
  }
  setCurrentUserSession(user:any,status:any):any{
    this.exportlog.next(status)
    console.log(this.isLoggedIn)
    this.exportUser.next(user)

  }

}
