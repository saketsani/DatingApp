import { Injectable, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class AppService {

  constructor(private http :HttpClient) { }

  UsersService(){
    let baseURL =(location.origin).toString;
    console.log(baseURL);
    return this.http.get('https://localhost:44327/api/users');
  }

}
