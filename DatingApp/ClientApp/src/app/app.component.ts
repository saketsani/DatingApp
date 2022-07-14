import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  users:any;
  title = 'app';
  constructor(private _service:AppService) { }

  ngOnInit() {
  this.serCurrentUser();
  }

  serCurrentUser(){
    const user:User = JSON.parse(localStorage.getItem('user')!);
    this._service.setCurrentUSer(user);
  }

  
}
