import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { Observable } from 'rxjs';
import {AppService} from '../services/app.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model:any={};


  constructor(public _service:AppService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  login(){
    // let body={
    //   Username:this.model.username,
    //   Password:this.model.password
    // }
    this._service.login(this.model).subscribe(res=>{
     this.router.navigateByUrl('/members');
        this.model={};  
    },error=>{
      console.log(error);
      this.toastr.error(error.error);
    });  
  }

  logout(){
    this._service.logout();
    this.router.navigateByUrl('/');
  }

  
}
