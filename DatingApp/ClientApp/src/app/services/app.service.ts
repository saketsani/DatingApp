import { Injectable, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { ReplaySubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})


export class AppService {

  baseUrl='https://localhost:44327/api/';

  private currentUserSource = new ReplaySubject<User | null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http :HttpClient) { }

  UsersService(){
    let baseURL =(location.origin).toString;
    console.log(baseURL);
    return this.http.get(this.baseUrl +'users');
  }

  login(body:any){
    return this.http.post(this.baseUrl+'account/login',body).pipe(
      map((response:any)=>{
        const user = response;
        console.log("user from app service",user);
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  register(body:any){
    return this.http.post(this.baseUrl+'account/register', body).pipe(
      map((user:any)=>{
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      })
      
    )
  }
  setCurrentUSer(user:User){
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
