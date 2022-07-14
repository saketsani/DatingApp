import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { Observable } from 'rxjs';
import {AppService} from '../services/app.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model:any={};

  constructor(public _service:AppService) { }

  ngOnInit(): void {
  }

  login(){
    // let body={
    //   Username:this.model.username,
    //   Password:this.model.password
    // }
    this._service.login(this.model).subscribe(res=>{
     console.log("User Logged In",res);
        this.model={};  
    });  
  }

  logout(){
    this._service.logout();
  }

  
}
